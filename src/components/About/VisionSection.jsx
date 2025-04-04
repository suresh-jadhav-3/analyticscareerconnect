import React from 'react'
import { ArrowRight, Users, Rocket, Brain, Building } from 'lucide-react';



const VisionPoint = ({ title, description, icon: Icon }) => {
  return (
    <div className="vision-point group flex items-start space-x-4 p-6 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

function VisionSection() {
  const aboutStatements = [
    {
      heading: "Tech education is democratized",
      content: "Accessible to all, regardless of location or financial background.",
      icon: Users
    },
    {
      heading: "Skills matter more than degrees",
      content: "Focusing on hands-on experience and real-world problem-solving.",
      icon: Brain
    },
    {
      heading: "India becomes self-reliant in technology",
      content: "Supporting local businesses with digital transformation and fulfilling the Make in India dream.",
      icon: Building
    },
    {
      heading: "Employment barriers are eliminated",
      content: "Helping individuals build careers through structured guidance, practical exposure, and industry networking.",
      icon: Rocket
    }
  ];
  return (
    <div className="py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Vision
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {aboutStatements.map((statement, index) => (
            <VisionPoint
              key={index}
              number={index + 1}
              title={statement.heading}
              description={statement.content}
              icon={statement.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VisionSection