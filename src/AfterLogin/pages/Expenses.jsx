import React, { useState } from 'react';
import ExpenseList from '../components/expenses/ExpenseList';
import AddExpenseForm from '../components/expenses/AddExpenseForm';
import MonthlyExpensesSummary from '../components/expenses/MonthlyExpensesSummary';

function Expenses() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Expenses</h1>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Expense
        </button>
      </div>

      <MonthlyExpensesSummary />
      
      {showAddForm && (
        <AddExpenseForm onClose={() => setShowAddForm(false)} />
      )}
      
      <ExpenseList />
    </div>
  );
}

export default Expenses;