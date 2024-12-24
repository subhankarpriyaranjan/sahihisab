import React from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import RecentActivities from '../components/dashboard/RecentActivities';

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <DashboardStats />
      <RecentActivities />
    </div>
  );
}

export default Dashboard;