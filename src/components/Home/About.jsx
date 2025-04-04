import React from 'react';
import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      stat: "110+",
      label: "Students Trained",
      description: "Successfully trained professionals now working in top tech companies"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      stat: "90%",
      label: "Success Rate",
      description: "Of our students successfully transition into data analytics roles"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      stat: "4",
      label: "Specialized Programs",
      description: "Tailored programs designed for different career stages"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      stat: "27+",
      label: "Industry Partners",
      description: "Leading companies trust our training methodology"
    }
  ];

  return (
    <div className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Analytics Career Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to bridging the gap between talent and opportunity in the data analytics industry. 
            Our comprehensive training programs and industry partnerships ensure your success in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white p-8 shadow-lg border border-gray-100 rounded-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="mb-4">{item.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
              <h3 className="text-xl font-semibold mb-3">{item.label}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                To empower individuals with the skills, knowledge, and confidence needed to excel 
                in the data-driven world. We believe in hands-on learning, personalized mentorship, 
                and real-world project experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-600 p-1 rounded-full text-white mr-3">✓</span>
                  Expert-led training programs
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-600 p-1 rounded-full text-white mr-3">✓</span>
                  Industry-relevant curriculum
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-blue-600 p-1 rounded-full text-white mr-3">✓</span>
                  Personalized career guidance
                </li>
              </ul>
            </div>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500'>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;