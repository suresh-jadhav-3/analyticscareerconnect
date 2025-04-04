import { CheckCircle2 } from 'lucide-react'
import React from 'react'

function WhatYouLearn() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Data Analytics Tools – Excel, SQL, Python",
              "Business Intelligence (BI) Tools",
              "Data Visualization Techniques",
              "Real-World Business Case Studies",
              "Generative AI & Automation",
              "Job Readiness Skills"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhatYouLearn