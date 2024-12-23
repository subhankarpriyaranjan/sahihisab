import React from 'react';

function MembershipStats() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Member Statistics</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm text-gray-500">Total Members</h3>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Average Expense per Member</h3>
          <p className="text-2xl font-bold">$102.08</p>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">Most Active Members</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between">
              <span>John Doe</span>
              <span>$450.00</span>
            </li>
            <li className="flex justify-between">
              <span>Jane Smith</span>
              <span>$380.00</span>
            </li>
            <li className="flex justify-between">
              <span>Mike Johnson</span>
              <span>$320.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MembershipStats;