
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-r from-blue-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-blue-600">Transform</span> Your Career in
              <span className="text-blue-600"> Data Analytics</span>
            </h1>
            <p className="text-gray-600 text-xl mb-10">
              Unlock your potential with industry-leading training and mentorship in data analytics, 
              data science, and advanced technology roles.
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="inline-block bg-blue-500 text-white px-8 py-4 rounded-md  hover:bg-blue-600 transition-all transform hover:scale-105 hover:shadow-lg text-lg"
              >
                Start Your Journey
              </Link>
              <Link
                to="/about"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-md hover:bg-blue-50 inline-block transition-all transform hover:scale-105 hover:shadow-lg text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Data Analytics"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}