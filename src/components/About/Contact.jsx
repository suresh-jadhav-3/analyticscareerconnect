import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="bg-blue-600 py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Join Us & Take Your Career to the Next Level!
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          We've already trained <span className="font-bold">110+</span> students,
          placed <span className="font-bold">8+</span> candidates, and
          partnered with <span className="font-bold">4+</span> businesses.
        </p>
        <div className="mt-8">
          <Link
            to="/career"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
          >
            🚀 Get Started Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact