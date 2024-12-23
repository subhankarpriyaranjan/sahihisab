import React, { useState } from 'react';
import MemberList from '../components/members/MemberList';
import AddMemberForm from '../components/members/AddMemberForm';

function Members() {
  const [showAddForm, setShowAddForm] = useState(false);
  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Members</h1>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Member
        </button>
      </div>
      
      {showAddForm && (
        <AddMemberForm onClose={() => setShowAddForm(false)} />
      )}
      
      <MemberList />
    </div>
  );
}

export default Members;