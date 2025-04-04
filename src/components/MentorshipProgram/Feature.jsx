import { BookOpen, BrainCircuit, CheckCircle2, GraduationCap, LineChart, Users } from 'lucide-react';
import React from 'react'

function Feature() {

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Personalized Learning Path",
      description: "Get a customized roadmap tailored to your career goals and current skill level."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Mentorship",
      description: "Learn directly from industry professionals working at top companies."
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Real-world Projects",
      description: "Build a portfolio with practical projects and business case studies."
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Comprehensive Curriculum",
      description: "Master essential tools like Excel, SQL, Python, Power BI, and Tableau."
    },
    {
      icon: <BrainCircuit className="w-12 h-12" />,
      title: "AI & Automation",
      description: "Learn cutting-edge skills in Generative AI and data automation."
    },
    {
      icon: <CheckCircle2 className="w-12 h-12" />,
      title: "Job Guarantee",
      description: "Get support until you land your dream job in data analytics."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Mentorship Program?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature