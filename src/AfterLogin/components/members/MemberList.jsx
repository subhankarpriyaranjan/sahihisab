import React from 'react';
import { formatDate } from '../../utils/formatters';

function MemberList() {
  const members = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-02-01', status: 'active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joinDate: '2024-02-15', status: 'active' },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Desktop view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {members.map(member => (
              <tr key={member.id}>
                <td className="px-6 py-4">{member.name}</td>
                <td className="px-6 py-4">{member.email}</td>
                <td className="px-6 py-4">{formatDate(member.joinDate)}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {members.map(member => (
          <div key={member.id} className="p-4 border-b">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium">{member.name}</div>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                {member.status}
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-1">{member.email}</div>
            <div className="text-sm text-gray-500">
              Joined {formatDate(member.joinDate)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberList;
