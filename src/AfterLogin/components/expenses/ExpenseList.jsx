import React, { useState } from 'react';
import { formatCurrency, formatDate } from '../../utils/formatters';
import { formatMonthYear, getCurrentMonth, isCurrentMonth } from '../../utils/dateUtils';

function ExpenseList() {
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());

  const expenses = [
    { id: 1, description: 'Office Supplies', amount: 150, date: '2024-03-15', category: 'Supplies', paidBy: 'John Doe' },
    { id: 2, description: 'Internet Bill', amount: 75, date: '2024-03-14', category: 'Utilities', paidBy: 'Mike Johnson' },
    { id: 3, description: 'Team Lunch', amount: 200, date: '2024-03-13', category: 'Food', paidBy: 'Jane Smith' },
  ].filter(expense => isCurrentMonth(expense.date));

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">
          Expenses for {formatMonthYear(selectedMonth)}
        </h3>
      </div>
      
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Paid By</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td className="px-6 py-4">{expense.description}</td>
                <td className="px-6 py-4">{formatCurrency(expense.amount)}</td>
                <td className="px-6 py-4">{expense.category}</td>
                <td className="px-6 py-4">{formatDate(expense.date)}</td>
                <td className="px-6 py-4">{expense.paidBy}</td>
              </tr>
            ))}
            {expenses.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No expenses recorded for this month
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden divide-y divide-gray-200">
        {expenses.map(expense => (
          <div key={expense.id} className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-medium">{expense.description}</div>
                <div className="text-sm text-gray-500">{expense.category}</div>
              </div>
              <div className="font-medium">{formatCurrency(expense.amount)}</div>
            </div>
            <div className="text-sm text-gray-500">
              <div>Paid by {expense.paidBy}</div>
              <div>{formatDate(expense.date)}</div>
            </div>
          </div>
        ))}
        {expenses.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No expenses recorded for this month
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpenseList;