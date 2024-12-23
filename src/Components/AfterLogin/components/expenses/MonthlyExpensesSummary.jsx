import React from 'react';
import { formatCurrency } from '../../utils/formatters';
import { formatMonthYear, getCurrentMonth } from '../../utils/dateUtils';

function MonthlyExpensesSummary() {
  const currentMonth = getCurrentMonth();
  const summary = {
    currentMonth: {
      total: 850,
      categories: {
        Supplies: 300,
        Utilities: 250,
        Food: 200,
        Travel: 100
      }
    },
    previousMonth: {
      total: 1200
    },
    monthlyBudget: 1500
  };

  const remainingBudget = summary.monthlyBudget - summary.currentMonth.total;
  const percentageUsed = (summary.currentMonth.total / summary.monthlyBudget) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm mb-1">{formatMonthYear(currentMonth)} Expenses</h3>
        <p className="text-2xl font-bold">{formatCurrency(summary.currentMonth.total)}</p>
        <div className="mt-2 h-2 bg-gray-200 rounded">
          <div 
            className="h-full bg-blue-500 rounded"
            style={{ width: `${Math.min(percentageUsed, 100)}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {formatCurrency(remainingBudget)} remaining of {formatCurrency(summary.monthlyBudget)}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm mb-1">Monthly Comparison</h3>
        <div className="flex items-end gap-2">
          <div className="text-2xl font-bold">{formatCurrency(summary.currentMonth.total)}</div>
          <div className="text-sm text-gray-500 mb-1">
            vs {formatCurrency(summary.previousMonth.total)} last month
          </div>
        </div>
        {summary.currentMonth.total < summary.previousMonth.total ? (
          <p className="text-green-500 text-sm">↓ Lower than last month</p>
        ) : (
          <p className="text-red-500 text-sm">↑ Higher than last month</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm mb-2">Category Breakdown</h3>
        <div className="space-y-2">
          {Object.entries(summary.currentMonth.categories).map(([category, amount]) => (
            <div key={category} className="flex justify-between text-sm">
              <span>{category}</span>
              <span className="font-medium">{formatCurrency(amount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonthlyExpensesSummary;