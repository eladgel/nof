import { useState } from 'react';

interface CommissionResults {
  domesticCommission: number;
  foreignCommission: number;
  domesticRate: number;
  foreignRate: number;
}

function CommissionCalculator() {
  // Example commission table for a single bank.  In a real application
  // you'd fetch this data from the TASE API (for example,
  // `commissions/loadmembercommissions?memberId=…`).  The values here
  // mirror the structure described by the user.
  const banks = [
    {
      id: 'exampleBank',
      name: 'Example Bank',
      tableValue: [
        [
          'עד 25',
          '0.0185%',
          '0.0014%',
          '0.1429%',
          '0.3260%', // domestic Israeli stocks
          '0.4151%', // foreign stocks
        ],
        [
          'מעל 25 ועד 50',
          '0.2050%',
          '0.0303%',
          '0.2655%',
          '0.4424%',
          '0.4134%',
        ],
        [
          'מעל 50 ועד 75',
          '0.1464%',
          '0.0482%',
          '0.2145%',
          '0.4337%',
          '0.3633%',
        ],
        [
          'מעל 75 ועד 100',
          '0.1609%',
          '0.1010%',
          '0.2120%',
          '0.4043%',
          '0.3916%',
        ],
        [
          'מעל 100 ועד 200',
          '0.1472%',
          '0.0549%',
          '0.1964%',
          '0.4657%',
          '0.3534%',
        ],
        [
          'מעל 200 ועד 400',
          '0.1003%',
          '0.0779%',
          '0.1727%',
          '0.4315%',
          '0.3633%',
        ],
        [
          'מעל 400 ועד 700',
          '0.1012%',
          '0.0890%',
          '0.1148%',
          '0.4092%',
          '0.3753%',
        ],
        [
          'מעל 700 ועד 1,000',
          '0.0439%',
          '0.0851%',
          '0.1252%',
          '0.3986%',
          '0.3912%',
        ],
        [
          'מעל 1,000',
          '0.0347%',
          '0.0375%',
          '0.0795%',
          '0.2569%',
          '0.2938%',
        ],
      ],
    },
    // Add additional banks here as needed
  ];

  const [selectedBankId, setSelectedBankId] = useState(banks[0].id);
  const [domesticValue, setDomesticValue] = useState<string>('');
  const [foreignValue, setForeignValue] = useState<string>('');
  const [results, setResults] = useState<CommissionResults | null>(null);

  /**
   * Parse a range description and return an object with lower and
   * upper bounds.  The descriptions can be "עד X" (up to X), "מעל X
   * ועד Y" (greater than X and up to Y) or "מעל 1,000" (greater than
   * some amount).  Commas are removed from numbers.  Undefined means
   * unbounded on that side.
   */
  function parseRange(rangeString: string): { lower: number | undefined; upper: number | undefined } {
    const cleaned = rangeString.replace(/,/g, '').trim();
    if (cleaned.startsWith('עד')) {
      const upper = parseFloat(cleaned.split(' ')[1]);
      return { lower: 0, upper };
    }
    if (cleaned.startsWith('מעל') && cleaned.includes('ועד')) {
      const parts = cleaned.split(' ');
      // parts[1] = lower bound, parts[3] = upper bound
      const lower = parseFloat(parts[1]);
      const upper = parseFloat(parts[3]);
      return { lower, upper };
    }
    if (cleaned.startsWith('מעל')) {
      const lower = parseFloat(cleaned.split(' ')[1]);
      return { lower, upper: undefined };
    }
    return { lower: 0, upper: undefined };
  }

  /**
   * Given a value and a bank's table, find the row that applies to
   * that value.  Returns an object with the domestic and foreign
   * commission rates as decimals (e.g. 0.00333 for 0.333%).
   */
  function getRatesForValue(value: number, tableValue: string[][]): { domesticRate: number; foreignRate: number } {
    const foundRow = tableValue.find((row: string[]) => {
      const [rangeString] = row;
      const { lower, upper } = parseRange(rangeString);
      const amount = value;
      const aboveLower = lower === undefined || amount > lower;
      const belowUpper = upper === undefined || amount <= upper;
      return aboveLower && belowUpper;
    });

    const targetRow = foundRow || tableValue[tableValue.length - 1];
    const [, , , , domestic, foreign] = targetRow;

    // Remove percent signs and convert to decimal
    const domesticRate = parseFloat(domestic.replace('%', '')) / 100;
    const foreignRate = parseFloat(foreign.replace('%', '')) / 100;
    return { domesticRate, foreignRate };
  }

  function calculateCommission() {
    const bank = banks.find((b) => b.id === selectedBankId);
    if (!bank) return;

    const domesticVal = parseFloat(domesticValue);
    const foreignVal = parseFloat(foreignValue);
    if (Number.isNaN(domesticVal) || Number.isNaN(foreignVal)) {
      setResults(null);
      return;
    }
    const { domesticRate, foreignRate } = getRatesForValue(
      domesticVal + foreignVal,
      bank.tableValue,
    );
    const domesticCommission = domesticVal * domesticRate;
    const foreignCommission = foreignVal * foreignRate;
    setResults({ domesticCommission, foreignCommission, domesticRate, foreignRate });
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>מחשבון עמלות</h2>
      <div>
        <label htmlFor="bank-select">
          בחר בנק:
          <select
            id="bank-select"
            value={selectedBankId}
            onChange={(e) => setSelectedBankId(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          >
            {banks.map((bank) => (
              <option key={bank.id} value={bank.id}>
                {bank.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="domestic-value">
          שווי מניות ישראלי (אלפי ₪):
          <input
            id="domestic-value"
            type="number"
            value={domesticValue}
            onChange={(e) => setDomesticValue(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="foreign-value">
          שווי מניות זר (אלפי ₪):
          <input
            id="foreign-value"
            type="number"
            value={foreignValue}
            onChange={(e) => setForeignValue(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <button type="button" style={{ marginTop: '1rem' }} onClick={calculateCommission}>
        חישוב
      </button>
      {results && (
        <div style={{ marginTop: '1rem' }}>
          <p>
            שיעור עמלה למניות ישראליות: {(results.domesticRate * 100).toFixed(4)}%
          </p>
          <p>
            שיעור עמלה למניות זרות: {(results.foreignRate * 100).toFixed(4)}%
          </p>
          <p>
            עמלה על מניות ישראליות: {results.domesticCommission.toFixed(2)}
          </p>
          <p>
            עמלה על מניות זרות: {results.foreignCommission.toFixed(2)}
          </p>
          <p>
            סכום עמלה כולל: {(results.domesticCommission + results.foreignCommission).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default CommissionCalculator;