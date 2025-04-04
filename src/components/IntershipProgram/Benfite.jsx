import { Award, BookOpen, GraduationCap, Target, TrendingUp, Users } from 'lucide-react';
import React from 'react';

const Benefit = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes This Program Different?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-blue-500" />,
                title: 'Pay After You Get Hired',
                description: 'No upfront fees! You invest only when you secure a job.'
              },
              {
                icon: <Target className="w-8 h-8 text-blue-500" />,
                title: 'Live Client Projects',
                description: 'Work on real-world projects across various industries.'
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: 'One-on-One Mentorship',
                description: 'Personalized guidance from industry professionals.'
              },
              {
                icon: <BookOpen className="w-8 h-8 text-blue-500" />,
                title: 'Hands-On Learning',
                description: '60% practical work, 40% guided learning.'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
                title: 'Freelancing Opportunities',
                description: 'Top performers get freelance project opportunities.'
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
                title: 'Mock Interviews',
                description: 'Expert feedback on resume and interview preparation.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Benefit;
