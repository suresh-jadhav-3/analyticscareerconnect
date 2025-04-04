import { CheckCircle, X } from 'lucide-react'
import React from 'react'

function EligibilitySection() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Eligibility Criteria</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-green-600 flex items-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6" />
            Who Can Apply
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Students from Tier 2, 3, and 4 Colleges</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Final-Year Students & Fresh Graduates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Career Switchers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>50%+ Domain Knowledge</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2 mb-4">
            <X className="w-6 h-6" />
            Who Should Not Apply
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span>Tier 1 City Students & Top College Graduates</span>
            </li>
            <li className="flex items-start gap-2">
              <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span>Candidates Lacking Dedication</span>
            </li>
            <li className="flex items-start gap-2">
              <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span>Beginners with Less Than 30% Knowledge</span>
            </li>
            <li className="flex items-start gap-2">
              <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span>Certificate Seekers Only</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default EligibilitySection