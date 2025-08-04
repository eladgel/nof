import { JSX } from 'react';
import CommissionCalculator from '@/components/CommissionCalculator.tsx';
import BankLogoGrid from '@/components/BankLogoGrid.tsx';

export function Settings(): JSX.Element {
  return (
    <div>
      <CommissionCalculator />
      <BankLogoGrid />
    </div>
  );
}
