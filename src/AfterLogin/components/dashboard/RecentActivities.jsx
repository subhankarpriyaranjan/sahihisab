import React from 'react';

function RecentActivities() {
  const activities = [
    { id: 1, type: 'expense', user: 'John Doe', amount: 150, date: '2024-03-15', category: 'Office Supplies' },
    { id: 2, type: 'member', user: 'Jane Smith', action: 'joined', date: '2024-03-14' },
    { id: 3, type: 'expense', user: 'Mike Johnson', amount: 75, date: '2024-03-14', category: 'Utilities' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-medium">{activity.user}</p>
              <p className="text-sm text-gray-500">
                {activity.type === 'expense' 
                  ? `Added expense: $${activity.amount} for ${activity.category}`
                  : activity.action}
              </p>
            </div>
            <span className="text-sm text-gray-500">{activity.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivities;