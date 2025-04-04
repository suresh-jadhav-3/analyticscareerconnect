

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check  } from 'lucide-react';

const Programs = () => {

  const navigate = useNavigate();

  // const programs = [
  //   {
  //     title: 'Internship Program',
  //     description: 'Gain hands-on experience through our structured internship program with leading companies in the industry.',
  //     image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //     link: '/job-assistance-program'

  //   },
  //   {
  //     title: 'Mentorship Program',
  //     description: 'Get personalized mentorship, structured learning, and job assistance to become a Data Analyst.',
  //     image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //     link: '/mentorship-program'
  //   },
  //   {
  //     title: 'Job Assistance Program',
  //     description: 'Get personalized mentorship, structured learning, and job assistance to become a Data Analyst.',
  //     image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //     link: '/internship-program'
  //   },
  // ];

  const programs = [
    {
      title: 'Internship Program',
      description: 'Gain practical experience with live projects in Data Analytics, Web Development, AI/ML, and more. Pay After You Get Hired! (If you have 50% knowledge, join for free!)',
      features: [
        'Hands-on Projects with real industry exposure',
        'Work on E-commerce, Finance, Healthcare & Retail datasets',
        'Pay After You Get Hired!'
      ],
      link: '/internship-program',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
      buttonText: 'Explore Internship Program'
    },
    {
      title: 'Mentorship Program',
      description: 'Get personalized mentorship, structured learning, and job assistance to become a Data Analyst. Affordable – Pay in 2 Parts (₹5,999)',
      features: [
        'Guidance from Industry Experts',
        'Live Projects & Case Studies',
        'Job Assistance Until You Get Hired'
      ],
      link: '/mentorship-program',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
      buttonText: 'Join Mentorship Program'
    },
    {
      title: 'Job Assistance Program',
      description: 'Struggling to land a job? Our job assistance program helps you get placed faster with comprehensive support.',
      features: [
        'ATS-friendly Resume & LinkedIn Profile Optimization',
        'Mock Interviews & Career Coaching',
        'Exclusive Job Referrals & Hiring Support'
      ],
      link: '/job-assistance-program',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
      buttonText: 'Get Job Assistance'
    }

  ]

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Explore Our Programs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <ul className="mb-8 space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => handleNavigate(program.link)}
                  className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 cursor-pointer">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;