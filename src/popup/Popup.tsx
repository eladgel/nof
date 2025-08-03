import { JSX } from 'react';

export default function Popup(): JSX.Element {
  const openSettings = () => {
    chrome.runtime.openOptionsPage();
  };

  // Placeholder values for commission data
  const dailyCommissions = "X.XX";
  const monthlyCommissions = "Y.YY";
  const yearlyCommissions = "Z.ZZ";
  const lostSinceInstall = "TOTAL";
  const calculationsInProgress = false; // Placeholder for spinner

  return (
    <div id='my-ext' className='container p-4' data-theme='light'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">nofrayer</h2>
          <div className="py-4">
            <p className="text-lg">
              Daily commissions: <span className="font-bold">${dailyCommissions}/day</span>
            </p>
            <p className="text-lg">
              Monthly commissions: <span className="font-bold">${monthlyCommissions}/month</span>
            </p>
            <p className="text-lg">
              Yearly commissions: <span className="font-bold">${yearlyCommissions}/year</span>
            </p>
            <p className="text-lg text-error">
              💸 Lost since install: <span className="font-bold">${lostSinceInstall}</span>
            </p>
          </div>
          <div className="card-actions justify-end items-center">
            {calculationsInProgress && (
              <span className="badge badge-info badge-outline">Calculating...</span>
            )}
            <button type='button' className='btn btn-primary' onClick={openSettings}>
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
