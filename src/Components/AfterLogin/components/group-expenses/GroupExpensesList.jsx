import React from 'react';
import { formatCurrency, formatDate } from '../../utils/formatters';

function GroupExpensesList() {
  const groupExpenses = [
    {
      id: 1,
      title: 'Team Vacation - Beach Resort',
      date: '2024-03-15',
      totalAmount: 2500,
      members: [
        { name: 'John Doe', contribution: 850 },
        { name: 'Jane Smith', contribution: 825 },
        { name: 'Mike Johnson', contribution: 825 },
      ],
      category: 'Vacation',
      status: 'Completed'
    },
    // Add more mock data as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Members</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {groupExpenses.map(expense => (
                <tr key={expense.id}>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{expense.title}</div>
                    <div className="text-sm text-gray-500">{expense.category}</div>
                  </td>
                  <td className="px-6 py-4">{formatDate(expense.date)}</td>
                  <td className="px-6 py-4">{formatCurrency(expense.totalAmount)}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      {expense.members.map(member => (
                        <div key={member.name} className="mb-1">
                          {member.name}: {formatCurrency(member.contribution)}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {expense.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {groupExpenses.map(expense => (
          <div key={expense.id} className="p-4 border-b">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium text-gray-900">{expense.title}</div>
                <div className="text-sm text-gray-500">{expense.category}</div>
              </div>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                {expense.status}
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-2">{formatDate(expense.date)}</div>
            <div className="text-sm font-medium mb-2">Total: {formatCurrency(expense.totalAmount)}</div>
            <div className="text-sm space-y-1">
              {expense.members.map(member => (
                <div key={member.name} className="flex justify-between">
                  <span>{member.name}</span>
                  <span>{formatCurrency(member.contribution)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupExpensesList;