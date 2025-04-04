import React from 'react'

function InsightSection() {
  return (
    <section className="relative py-20 bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80')"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Insight from Our Founder</h2>
          <div className="mt-8 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            <blockquote className="relative border-l-4 border-blue-500 pl-6 italic">
              "With a vision to democratize career opportunities in the tech space, I founded Analytics Career Connect to bridge the skill gap and equip individuals with the tools they need to succeed. Our mission is to empower 10 million youth of Bharat by revolutionizing technical education—making it affordable and accessible to all through technology.
              By leveraging technology, mentorship, and industry collaboration, we are putting in relentless efforts to solve India’s unemployment problem and create real job opportunities through freelancing, mentorship, and entrepreneurship. Additionally, we are committed to helping local businesses adopt new technologies to enhance efficiency, drive innovation, and contribute to the ‘Make in India’ dream—empowering businesses to thrive in the digital era."
              <footer className="mt-6 text-right text-gray-800 font-semibold">— Wasim Patwari, Founder & CEO</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsightSection