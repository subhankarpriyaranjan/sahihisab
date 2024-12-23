import React, { useState } from 'react';
import GroupExpensesList from '../components/group-expenses/GroupExpensesList';
import AddGroupExpenseForm from '../components/group-expenses/AddGroupExpenseForm';
import GroupExpensesSummary from '../components/group-expenses/GroupExpensesSummary';

function GroupExpenses() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Group Expenses</h1>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Group Expense
        </button>
      </div>

      <GroupExpensesSummary />
      
      {showAddForm && (
        <AddGroupExpenseForm onClose={() => setShowAddForm(false)} />
      )}
      
      <GroupExpensesList />
    </div>
  );
}

export default GroupExpenses;