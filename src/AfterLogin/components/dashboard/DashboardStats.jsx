import React from 'react';

function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-gray-500 text-sm">Total Expenses</h3>
        <p className="text-2xl font-bold">$2,450.00</p>
        <span className="text-green-500 text-sm">+12% from last month</span>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-gray-500 text-sm">Active Members</h3>
        <p className="text-2xl font-bold">24</p>
        <span className="text-blue-500 text-sm">+3 new this month</span>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-gray-500 text-sm">Average Expense</h3>
        <p className="text-2xl font-bold">$102.08</p>
        <span className="text-gray-500 text-sm">Per member</span>
      </div>
    </div>
  );
}

export default DashboardStats;
