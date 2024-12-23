import React from 'react';
import ExpenseChart from '../components/reports/ExpenseChart';
import MembershipStats from '../components/reports/MembershipStats';

function Reports() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExpenseChart />
        <MembershipStats />
      </div>
    </div>
  );
}

export default Reports;