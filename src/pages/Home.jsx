import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ArrowRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const features = [
  {
    name: 'Smart Analytics',
    description: 'Get detailed insights into your spending patterns with AI-powered analytics.',
    icon: ChartBarIcon,
    color: 'from-blue-500 to-indigo-500',
    pattern: 'graph-paper'
  },
  {
    name: 'Real-time Tracking',
    description: 'Track your expenses in real-time with automatic categorization.',
    icon: ClockIcon,
    color: 'from-green-500 to-emerald-500',
    pattern: 'circuit-board'
  },
  {
    name: 'Secure Transactions',
    description: 'Bank-grade security for all your financial transactions.',
    icon: ShieldCheckIcon,
    color: 'from-purple-500 to-pink-500',
    pattern: 'diagonal-lines'
  },
  {
    name: 'Mobile Access',
    description: 'Access your finances anytime, anywhere with our mobile app.',
    icon: DevicePhoneMobileIcon,
    color: 'from-orange-500 to-red-500',
    pattern: 'plus'
  },
  {
    name: 'Budget Planning',
    description: 'Set and track budgets with smart alerts and recommendations.',
    icon: CurrencyDollarIcon,
    color: 'from-yellow-500 to-orange-500',
    pattern: 'dots'
  },
  {
    name: 'AI Insights',
    description: 'Get personalized financial insights powered by artificial intelligence.',
    icon: SparklesIcon,
    color: 'from-cyan-500 to-blue-500',
    pattern: 'texture'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Combined Hero and Features Section */}
      <motion.section
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-primary-900 to-gray-900"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-primary-900/50"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 pt-32 pb-24">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={heroVariants}
          >
            <motion.h1
              className="text-4xl sm:text-6xl font-bold mb-8 text-white"
              variants={itemVariants}
            >
              Smart Financial Management{' '}
              <span className="text-primary-400">Made Simple</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              variants={itemVariants}
            >
              Take control of your finances with our powerful expense tracking and
              management tools. Perfect for individuals and teams.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="/register"
                className="btn-primary text-lg px-8 py-3 rounded-lg flex items-center gap-2 group bg-white text-primary-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#features"
                className="text-lg px-8 py-3 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="container relative z-10 py-24">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              <motion.span
                className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Powerful Features for Your Financial Success
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Everything you need to manage your expenses effectively
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className={`relative overflow-hidden rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all border border-white/10 backdrop-blur-lg`}
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-5 ${feature.pattern}`}></div>
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl mb-6 bg-gradient-to-br ${feature.color} p-2.5 ring-2 ring-white/20`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary-400 transition-colors">
                    {feature.name}
                  </h3>
                  
                  <p className="text-gray-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r w-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: `linear-gradient(to right, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
                    }}
                  />
                </div>

                {/* Floating Particles */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-br ${feature.color}`}
                      animate={{
                        y: [-10, -30],
                        x: Math.random() * 20 - 10,
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

const starStyles = `
  @keyframes glow {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }

  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }

  /* Background Patterns */
  .graph-paper {
    background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .circuit-board {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px);
    background-size: 20px 20px;
  }

  .diagonal-lines {
    background-image: repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px,
      transparent 10px
    );
  }

  .plus {
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 10px 10px;
  }

  .dots {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 15px 15px;
  }

  .texture {
    background-image: 
      linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%);
    background-size: 10px 10px;
  }
`;

// Create a style element and append it to the head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = starStyles;
  document.head.appendChild(styleElement);
}