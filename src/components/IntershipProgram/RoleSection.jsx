import { BriefcaseIcon } from 'lucide-react'
import React from 'react'

function RoleSection() {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Available Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <BriefcaseIcon className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Analyst Internship</h3>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Open for Applications
              </span>
            </div>
            {/* Coming Soon Roles */}
            {[
              'Business Analyst',
              'Data Engineer',
              'AI/ML Engineer',
              'Python Developer',
              'BI Engineer'
            ].map((role) => (
              <div key={role} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gray-300">
                <BriefcaseIcon className="w-8 h-8 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{role}</h3>
                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default RoleSection