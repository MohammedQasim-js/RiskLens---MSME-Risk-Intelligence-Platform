import seedrandom from 'seedrandom';
import { RawTransaction } from './types';
import { addDays, format } from 'date-fns';

export function generateSyntheticData(
  seed: string = '42',
  archetype: string = 'Stable retailer',
  days: number = 365
): RawTransaction[] {
  const rng = seedrandom(seed);
  const transactions: RawTransaction[] = [];
  
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  let baseDailySales = 5000;
  if (archetype === 'Growth-stage business') baseDailySales = 1000;
  if (archetype === 'Concentrated-customer business') baseDailySales = 10000;

  for (let i = 0; i < days; i++) {
    const currentDate = addDays(startDate, i);
    const dateStr = format(currentDate, 'yyyy-MM-dd');
    
    // Archetype variations
    let dailyMultiplier = 1.0;
    
    if (archetype === 'Seasonal business') {
      const month = currentDate.getMonth();
      // Peak in Nov/Dec
      if (month === 10 || month === 11) dailyMultiplier = 3.0;
      else if (month >= 2 && month <= 5) dailyMultiplier = 0.4;
    }
    
    if (archetype === 'Growth-stage business') {
      dailyMultiplier = 1.0 + (i / days) * 4.0; // 5x growth over year
    }

    // Skip some days for data-limited
    if (archetype === 'Data-limited business' && rng() > 0.3) {
      continue;
    }

    // 1. Sales
    if (archetype === 'Concentrated-customer business') {
      if (rng() > 0.9) {
        transactions.push({
          date: dateStr,
          amount: Math.round(baseDailySales * 15 * rng()),
          currency: 'INR',
          description: 'Invoice payment from MegaCorp',
          source: 'BANK_STATEMENT',
          source_record_id: `txn_sale_${i}_1`
        });
      }
    } else {
      // Regular sales
      const salesCount = Math.floor(rng() * 5) + 1;
      for (let s = 0; s < salesCount; s++) {
        transactions.push({
          date: dateStr,
          amount: Math.round(baseDailySales * dailyMultiplier * (0.5 + rng())),
          currency: 'INR',
          description: `Daily Sales Settlement ${s}`,
          source: 'BANK_STATEMENT',
          source_record_id: `txn_sale_${i}_${s}`
        });
      }
    }

    // 2. Regular Expenses
    if (i % 7 === 0) {
      // Weekly supplier
      transactions.push({
        date: dateStr,
        amount: -Math.round(baseDailySales * 3 * dailyMultiplier),
        currency: 'INR',
        description: 'Supplier Payment - Raw Materials',
        source: 'BANK_STATEMENT',
        source_record_id: `txn_supp_${i}`
      });
    }

    if (currentDate.getDate() === 1) {
      // Rent
      transactions.push({
        date: dateStr,
        amount: -25000,
        currency: 'INR',
        description: 'Monthly Rent Transfer',
        source: 'BANK_STATEMENT',
        source_record_id: `txn_rent_${i}`
      });
      // Payroll
      transactions.push({
        date: dateStr,
        amount: -45000,
        currency: 'INR',
        description: 'Payroll Disbursement',
        source: 'BANK_STATEMENT',
        source_record_id: `txn_payroll_${i}`
      });
    }

    if (currentDate.getDate() === 15) {
      // Debt service
      let emi = 15000;
      if (archetype === 'Overleveraged business') emi = 85000;
      
      transactions.push({
        date: dateStr,
        amount: -emi,
        currency: 'INR',
        description: 'Business Loan EMI',
        source: 'BANK_STATEMENT',
        source_record_id: `txn_debt_${i}`
      });
    }
  }

  return transactions;
}
