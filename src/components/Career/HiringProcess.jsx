import React from 'react';

const steps = [
  {
    number: '1️⃣',
    title: 'Application Review',
    description: 'Our team evaluates your application & experience'
  },
  {
    number: '2️⃣',
    title: 'Screening Call',
    description: 'A quick discussion about your skills & career goals'
  },
  {
    number: '3️⃣',
    title: 'Technical/Role Assessment',
    description: 'A short test or assignment (if applicable)'
  },
  {
    number: '4️⃣',
    title: 'Final Interview & Offer',
    description: 'Discussion with leadership & offer rollout'
  }
];

const HiringProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Our Hiring Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;