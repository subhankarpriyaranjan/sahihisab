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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="relative overflow-hidden">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="text-center">
              <motion.h1
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                <span className="block">Welcome to</span>
                <motion.span
                  className="block text-primary-400"
                  animate={{
                    color: ['#60A5FA', '#34D399', '#60A5FA'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  Sahi Hisab
                </motion.span>
              </motion.h1>

              <motion.p
                className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
                variants={itemVariants}
              >
                Take control of your finances with our powerful expense tracking and management tools. Perfect for individuals and teams.
              </motion.p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <motion.div
                  animate={{
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative p-[3px] rounded-md rgb-border background-animate w-full sm:w-auto"
                >
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary-400 via-primary-600 to-primary-800 opacity-75" />
                  <Link
                    to="/register"
                    className="relative inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 w-full sm:w-auto md:py-3 md:text-lg md:px-10 hover:bg-opacity-90 transition-all duration-300"
                  >
                    Register in our System
                  </Link>
                </motion.div>

                <motion.div
                  animate={{
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="relative p-[3px] rounded-md rgb-border background-animate w-full sm:w-auto"
                >
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600 opacity-75" />
                  <Link
                    to="/guestRegister"
                    className="relative inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 w-full sm:w-auto md:py-3 md:text-lg md:px-10 transition-all duration-300"
                  >
                    Use Guest Account
                  </Link>
                </motion.div>
              </div>

              <div className="container relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <motion.div
                  className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16"
                  variants={itemVariants}
                >
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
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
                    className="text-base sm:text-lg md:text-xl text-gray-300"
                    variants={itemVariants}
                  >
                    Everything you need to manage your expenses effectively
                  </motion.p>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                  variants={containerVariants}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.name}
                      className="relative p-[3px] overflow-hidden rounded-2xl feature-card"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent" />
                      <div className="relative z-10 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 h-full border border-white/5">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl mb-4 sm:mb-6 bg-gradient-to-br ${feature.color} p-2 sm:p-2.5 ring-2 ring-white/20">
                          <feature.icon className="w-full h-full text-white" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white group-hover:text-primary-400 transition-colors">
                          {feature.name}
                        </h3>

                        <p className="text-sm sm:text-base text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style jsx>{`
  .rgb-border-card {
    position: relative;
    z-index: 0;
    border-radius: 16px;
    overflow: hidden;
  }

  .rgb-border-card::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953), 
                    linear-gradient(#fbb300, #fbb300), 
                    linear-gradient(#d53e33, #d53e33), 
                    linear-gradient(#377af5, #377af5);
    animation: rotate 4s linear infinite;
  }

  .rgb-border-card:hover::before {
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  .background-animate {
    background-size: 400%;
    -webkit-animation: AnimateBackground 3s ease infinite;
    -moz-animation: AnimateBackground 3s ease infinite;
    animation: AnimateBackground 3s ease infinite;
  }

  @keyframes AnimateBackground {
    0%,100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .feature-card {
    position: relative;
    z-index: 0;
    transition: all 0.3s ease;
  }

  .feature-card::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 3px;
    border-radius: 16px;
    background: linear-gradient(
      45deg,
      transparent 25%,
      rgba(68, 68, 68, 0.8) 50%,
      transparent 75%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    transition: all 0.3s ease;
  }

  .feature-card:hover::before {
    background: linear-gradient(
      90deg,
      #ff0000 0%,
      #ffa500 20%,
      #ffff00 40%,
      #008000 60%,
      #0000ff 80%,
      #4b0082 100%
    );
    animation: borderRotate 3s linear infinite;
  }

  @keyframes borderRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -10px rgba(var(--color-primary-500), 0.5);
  }

  .feature-card:hover .content {
    border-color: transparent;
  }
`}</style>