import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 ">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            <span className="text-blue-600">Bridging</span> Gaps,{' '}
            <span className="text-blue-600">Delivering IT</span> Solutions.
          </h1>
          <p className="text-xl text-gray-600">
            empowering 10 million youth in Bharat by making technical education both affordable and accessible. Leveraging technology-driven solutions, it aims to bridge the gap between education and employment by providing industry-relevant skills. The initiative targets individuals from Tier 2, 3, and 4 cities to create equal opportunities for career-building in tech. Committed to addressing India's unemployment issue, it offers job-ready skills, mentorship, and freelancing opportunities through internships and job assistance, transforming freshers and professionals into valuable industry talent.

          </p>
          <Link
            to='/contact'
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:translate-x-2"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="relative">
          <div className="w-full h-[500px] bg-gradient-to-tr from-blue-100 to-blue-50 rounded-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero