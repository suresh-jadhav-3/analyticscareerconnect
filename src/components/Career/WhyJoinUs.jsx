import { Building2, Coins, Globe2, Target, Users, Users2 } from 'lucide-react';
import React from 'react'

function WhyJoinUs() {


    const benefits = [
        {
          icon: <Building2 className="w-8 h-8 text-indigo-600" />,
          title: 'Impact-Driven Work',
          description: 'Help solve unemployment & make education accessible'
        },
        {
          icon: <Users2 className="w-8 h-8 text-indigo-600" />,
          title: 'Fast-Growing Startup',
          description: 'Be part of an innovative and dynamic team'
        },
        {
          icon: <Globe2 className="w-8 h-8 text-indigo-600" />,
          title: 'Remote & Hybrid Opportunities',
          description: 'Work from anywhere'
        },
        {
          icon: <Target className="w-8 h-8 text-indigo-600" />,
          title: 'Career Growth',
          description: 'Upskill while working with industry experts'
        },
        {
          icon: <Coins className="w-8 h-8 text-indigo-600" />,
          title: 'Competitive Salaries',
          description: 'Fair compensation based on skills & experience'
        },
        {
          icon: <Users className="w-8 h-8 text-indigo-600" />,
          title: 'Collaborative Culture',
          description: 'Work with passionate professionals'
        }
      ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Work With Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join our team and be part of something extraordinary
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoinUs