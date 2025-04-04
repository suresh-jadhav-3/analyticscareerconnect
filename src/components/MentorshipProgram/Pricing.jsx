import React from 'react'

function Pricing() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Affordable & Flexible Payment</h2>
          <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-8 border border-blue-100">
            <div className="text-4xl font-bold text-blue-600 mb-4">₹5,999</div>
            <p className="text-gray-600 mb-6">Pay 60% upfront and the remaining after you get a job!</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>
  )
}

export default Pricing