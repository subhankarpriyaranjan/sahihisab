import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Total Balance', value: '₹24,500', icon: CurrencyRupeeIcon, change: '+2.5%', changeType: 'increase' },
  { name: 'Active Members', value: '12', icon: UserGroupIcon, change: '+3', changeType: 'increase' },
  { name: 'Monthly Expenses', value: '₹15,000', icon: ChartBarIcon, change: '-5.2%', changeType: 'decrease' },
  { name: 'Savings Rate', value: '35%', icon: ArrowTrendingUpIcon, change: '+2.3%', changeType: 'increase' },
];

const recentTransactions = [
  { id: 1, description: 'Grocery Shopping', amount: -2500, date: '2024-01-20', category: 'Food' },
  { id: 2, description: 'Monthly Rent', amount: -8000, date: '2024-01-19', category: 'Housing' },
  { id: 3, description: 'Salary Deposit', amount: 45000, date: '2024-01-18', category: 'Income' },
  { id: 4, description: 'Internet Bill', amount: -999, date: '2024-01-17', category: 'Utilities' },
];

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-[2000px] mx-auto"
    >
      {/* Header with Logout */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900"
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-1 text-sm sm:text-base text-gray-600"
          >
            Here's what's happening with your finances today.
          </motion.p>
        </div>
        
        <motion.button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-primary-600 focus:z-10 focus:ring-2 focus:ring-primary-600 focus:text-primary-600 transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ArrowLeftOnRectangleIcon className="w-4 h-4 mr-2" />
          Logout
        </motion.button>
      </div>

      {/* Stats Grid */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.name}
            variants={item}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-2 sm:p-3 rounded-lg bg-primary-50">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-1">{stat.value}</p>
              </div>
            </div>
            <div className={`mt-3 sm:mt-4 flex items-center text-xs sm:text-sm ${
              stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              <span>{stat.change}</span>
              <span className="text-gray-500 ml-2">from last month</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        variants={item}
        className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Recent Transactions</h2>
          
          {/* Mobile View: Card Layout */}
          <div className="block sm:hidden space-y-4">
            {recentTransactions.map((transaction) => (
              <motion.div
                key={transaction.id}
                variants={item}
                className="p-4 rounded-lg bg-gray-50"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.category}</p>
                  </div>
                  <div className={`text-right ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <p className="font-semibold">
                      {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop View: Table Layout */}
          <div className="hidden sm:block">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {transaction.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {transaction.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm text-right font-medium ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}