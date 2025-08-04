async function fetchTaseBanks() {
  const ENDPOINT = "https://api.tase.co.il/api/commissions/loadcommissions";

  try {
    const res = await fetch(ENDPOINT, {
      headers: {
        accept: "application/json",
        referer: "https://market.tase.co.il/",
        "user-agent": "Mozilla/5.0",
      },
    });

    if (!res.ok) {
      throw new Error(`TASE responded ${res.status}`);
    }

    const json = await res.json();

    interface TaseBankData {
      MemberId: number;
      MemberDesc: string;
      // Add other properties if they exist and are relevant
    }

    const list: TaseBankData[] = json.defaultCommissionData ?? [];

    const banks = list.map((m) => ({
      code: String(m.MemberId),
      name: m.MemberDesc.trim(),
    }));

    return { success: true, data: banks };
  } catch (err) {
    console.error(err); // Re-introduced for debugging purposes
    return { success: false, error: "Proxy failed" };
  }
}

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request.type === 'FETCH_TASE_BANKS') {
    fetchTaseBanks().then(sendResponse).catch((error) => {
      console.error('Error fetching TASE banks:', error); // Re-introduced for debugging purposes
      sendResponse({ success: false, error: 'Failed to fetch TASE banks' });
    });
    return true; // Indicates that sendResponse will be called asynchronously
  }
  return false; // For other message types, or if the condition is not met
});