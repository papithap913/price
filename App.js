// App.js
import React from 'react';
import './App.css';

// PriceCard Component
const PriceCard = ({ plan }) => {
  return (
    <div className="price-card">
      <h2>{plan.title}</h2>
      <h3>{plan.price}</h3>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index} className={feature.available ? '' : 'unavailable'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>{plan.buttonText}</button>
    </div>
  );
};

// Main App Component
function App() {
  const plans = [
    {
      title: 'FREE',
      price: '$0/month',
      buttonText: 'BUTTON',
      features: [
        { name: 'Single User', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: false },
        { name: 'Dedicated Phone Support', available: false },
        { name: 'Free Subdomain', available: false },
        { name: 'Monthly Status Reports', available: false },
      ],
    },
    {
      title: 'PLUS',
      price: '$9/month',
      buttonText: 'BUTTON',
      features: [
        { name: '5 Users', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: false },
      ],
    },
    {
      title: 'PRO',
      price: '$49/month',
      buttonText: 'BUTTON',
      features: [
        { name: 'Unlimited Users', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: true },
      ],
    },
  ];

  return (
    <div className="app">
      <div className="price-cards">
        {plans.map((plan, index) => (
          <PriceCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default App;
