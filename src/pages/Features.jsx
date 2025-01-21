import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  CreditCardIcon,
  BellAlertIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const features = [
  {
    title: "Expense Tracking",
    description: "Track your daily expenses with ease. Categorize and manage all your spending in one place.",
    icon: CurrencyDollarIcon,
    color: 'from-purple-500 to-pink-500',
    pattern: 'circuit'
  },
  {
    title: "Budget Planning",
    description: "Set monthly budgets and get alerts when you're close to your spending limits.",
    icon: CreditCardIcon,
    color: 'from-cyan-500 to-blue-500',
    pattern: 'dots'
  },
  {
    title: "Reports & Analytics",
    description: "Get detailed insights about your spending patterns with visual reports and charts.",
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
    pattern: 'waves'
  },
  {
    title: "Bill Reminders",
    description: "Never miss a payment with automated bill reminders and smart notifications.",
    icon: BellAlertIcon,
    color: 'from-orange-500 to-red-500',
    pattern: 'texture'
  },
  {
    title: "Multi-device Sync",
    description: "Access your expense data from any device, anytime, anywhere with real-time sync.",
    icon: DevicePhoneMobileIcon,
    color: 'from-indigo-500 to-purple-500',
    pattern: 'circuit'
  },
  {
    title: "Secure Storage",
    description: "Your financial data is protected with bank-grade encryption and secure servers.",
    icon: ShieldCheckIcon,
    color: 'from-pink-500 to-rose-500',
    pattern: 'dots'
  }
];

const Features = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            Features
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                manage finances
              </span>
              <span className="absolute -bottom-1.5 left-0 w-full h-3 bg-primary-100 -skew-x-6 -z-10"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Discover powerful tools designed to make your financial management simple and effective
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity`}></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-shadow border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} bg-${feature.pattern} p-3 mb-6`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                  Learn more
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to take control of your finances?
          </h2>
          <p className="text-primary-100 mb-8">
            Join thousands of users who trust SahiHisab for their financial management
          </p>
          <motion.button
            className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-primary-600 font-semibold hover:bg-primary-50 transition-colors group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Now
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;