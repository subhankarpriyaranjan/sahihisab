import React from 'react';
import { formatCurrency } from '../../utils/formatters';

function GroupExpensesSummary() {
  const summary = {
    totalGroups: 3,
    totalAmount: 5750,
    activeMembers: 12,
    categories: {
      Vacation: 2500,
      'Team Building': 1750,
      'Office Party': 1500
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-gray-500 text-sm mb-2">Total Group Expenses</h3>
        <p className="text-2xl font-bold">{formatCurrency(summary.totalAmount)}</p>
        <span className="text-sm text-gray-500">{summary.totalGroups} active groups</span>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-gray-500 text-sm mb-2">Active Members</h3>
        <p className="text-2xl font-bold">{summary.activeMembers}</p>
        <span className="text-sm text-gray-500">Participating in groups</span>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-gray-500 text-sm mb-2">Categories</h3>
        <div className="space-y-2">
          {Object.entries(summary.categories).map(([category, amount]) => (
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

export default GroupExpensesSummary;