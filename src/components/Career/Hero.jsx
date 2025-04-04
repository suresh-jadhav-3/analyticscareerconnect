import { BrainIcon, GraduationCapIcon, RocketIcon } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className="bg-blue-600 text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          🚀 Careers at Analytics Career Connect
        </h1>
        <p className="text-xl mb-8">
          Empowering Talent, Driving Innovation
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">
            🌟 Summer Internship 2025 – Applications Open!
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <GraduationCapIcon className="w-6 h-6" />
              <span>For 1st, 2nd, 3rd & Final Year Students</span>
            </div>
            <div className="flex items-center gap-3">
              <RocketIcon className="w-6 h-6" />
              <span>3-6 Months Internship | Work with a Startup | Stipend for Top Performers</span>
            </div>
            <div className="flex items-center gap-3">
              <BrainIcon className="w-6 h-6" />
              <span>Gain hands-on experience in Data Analytics, work on real startup projects!</span>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Apply for Summer Internship
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero