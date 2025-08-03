/* eslint-disable jsx-a11y/label-has-associated-control */
import { JSX, useState, useEffect } from 'react';

export default function Options(): JSX.Element {
  const [bank, setBank] = useState('');
  const [israeliSecurities, setIsraeliSecurities] = useState('');
  const [foreignSecurities, setForeignSecurities] = useState('');

  useEffect(() => {
    // Load settings from chrome.storage.sync
    chrome.storage.sync.get(['bank', 'israeliSecurities', 'foreignSecurities'], (result) => {
      if (result.bank) setBank(result.bank);
      if (result.israeliSecurities) setIsraeliSecurities(result.israeliSecurities);
      if (result.foreignSecurities) setForeignSecurities(result.foreignSecurities);
    });
  }, []);

  const handleSave = () => {
    // Save settings to chrome.storage.sync
    chrome.storage.sync.set({
      bank,
      israeliSecurities,
      foreignSecurities,
    }, () => {
      // Optionally, provide user feedback
    });
  };

  return (
    <div id='my-ext' className='container p-4' data-theme='light'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Settings</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="bank-input">
              <span className="label-text">Bank</span>
            </label>
            <input
              id="bank-input"
              type="text"
              placeholder="Your Bank Name"
              className="input input-bordered w-full max-w-xs"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
            />
          </div>

          <div className="form-control w-full max-w-xs mt-4">
            <label className="label" htmlFor="israeli-securities-input">
              <span className="label-text">Israeli Securities Value</span>
            </label>
            <input
              id="israeli-securities-input"
              type="number"
              placeholder="0.00"
              className="input input-bordered w-full max-w-xs"
              value={israeliSecurities}
              onChange={(e) => setIsraeliSecurities(e.target.value)}
            />
          </div>

          <div className="form-control w-full max-w-xs mt-4">
            <label className="label" htmlFor="foreign-securities-input">
              <span className="label-text">Foreign Securities Value</span>
            </label>
            <input
              id="foreign-securities-input"
              type="number"
              placeholder="0.00"
              className="input input-bordered w-full max-w-xs"
              value={foreignSecurities}
              onChange={(e) => setForeignSecurities(e.target.value)}
            />
          </div>

          <div className="card-actions justify-end mt-6">
            <button type='button' className='btn btn-primary' onClick={handleSave}>
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
