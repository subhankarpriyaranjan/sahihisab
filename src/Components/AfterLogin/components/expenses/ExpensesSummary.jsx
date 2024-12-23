import React from 'react';
import { formatCurrency } from '../../utils/formatters';

function ExpensesSummary() {
  const summary = {
    total: 2450,
    categories: {
      Supplies: 850,
      Utilities: 600,
      Food: 750,
      Travel: 250,
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Total Expenses</h3>
        <p className="text-3xl font-bold text-blue-600">{formatCurrency(summary.total)}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">By Category</h3>
        <div className="space-y-2">
          {Object.entries(summary.categories).map(([category, amount]) => (
            <div key={category} className="flex justify-between">
              <span>{category}</span>
              <span className="font-medium">{formatCurrency(amount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpensesSummary;