const Features = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Expense Tracking"
            description="Track your daily expenses with ease. Categorize and manage all your spending in one place."
          />
          <FeatureCard
            title="Budget Planning"
            description="Set monthly budgets and get alerts when you're close to your spending limits."
          />
          <FeatureCard
            title="Reports & Analytics"
            description="Get detailed insights about your spending patterns with visual reports."
          />
          <FeatureCard
            title="Bill Reminders"
            description="Never miss a payment with automated bill reminders and notifications."
          />
          <FeatureCard
            title="Multi-device Sync"
            description="Access your expense data from any device, anytime, anywhere."
          />
          <FeatureCard
            title="Secure Storage"
            description="Your financial data is encrypted and stored securely on our servers."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4 text-indigo-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;