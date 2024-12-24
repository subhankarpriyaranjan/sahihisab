import Features from './Features';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="scroll-smooth">
      <section id="home" className="pt-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Manage Your Expenses Smartly
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Track, analyze, and optimize your spending with sahiHisab
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Easy Tracking</h3>
              <p className="text-gray-600">
                Record your expenses effortlessly with our intuitive interface
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Smart Analytics</h3>
              <p className="text-gray-600">
                Get insights into your spending patterns with detailed reports
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Secure Data</h3>
              <p className="text-gray-600">
                Your financial data is protected with enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;