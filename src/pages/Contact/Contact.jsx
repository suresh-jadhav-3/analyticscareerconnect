import React, { useState } from 'react';
import { Phone, MapPin, Clock, User, Building2, Mail, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formType, setFormType] = useState('student');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
  });

  const subjects = {
    student: ['Internship Program', 'Mentorship Program', 'Job Assistance', 'General Inquiry'],
    business: ['Data Analytics Solutions', 'Web Development Services', 'Hiring & Talent Acquisition', 'General Inquiry']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { type: formType, ...formData });
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-white to-blue-50">

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] opacity-20 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/60"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-slide-in">
            <h1 className="text-5xl font-bold mb-6 animate-float">Get in Touch</h1>
            <p className="text-xl mb-12 text-blue-100">
              We'd love to hear from you! Whether you're looking for career opportunities,
              business solutions, or partnership collaborations, feel free to reach out.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Contact Info</p>
                  <p className="text-blue-100">Info: 9607157409</p>
                  <p className="text-blue-100">HR: 9403812709</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Office Address</p>
                  <p className="text-blue-100">Pune, MH, India</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Opening Hours</p>
                  <p className="text-blue-100">Mon – Sat: 10:00 – 7:00</p>
                  <p className="text-blue-100">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contcat from */}

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="card-3d bg-white rounded-xl shadow-xl p-8 animate-slide-in relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-64 overflow-hidden rounded-t-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
                alt="Contact background"
                className="w-full h-full object-cover object-center transform scale-110 hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="relative z-20 mt-48">
              <div className="space-y-8">
                <div className="flex justify-center -mt-16 mb-8">
                  <div className="bg-white rounded-full p-2 shadow-xl">
                    <div className="bg-gray-100 rounded-full p-1 flex items-center">
                      <button
                        onClick={() => setFormType('student')}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${formType === 'student'
                          ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                          : 'text-gray-600 hover:text-blue-600'
                          }`}
                      >
                        <User className="w-5 h-5" />
                        <span className="font-medium">Student</span>
                      </button>
                      <button
                        onClick={() => setFormType('business')}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${formType === 'business'
                          ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                          : 'text-gray-600 hover:text-blue-600'
                          }`}
                      >
                        <Building2 className="w-5 h-5" />
                        <span className="font-medium">Business</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">
                    {formType === 'student' ? 'Student Inquiry' : 'Business Inquiry'}
                  </h2>
                  <p className="text-blue-700">
                    {formType === 'student'
                      ? 'Explore career programs including internships, mentorship, and job assistance.'
                      : 'Connect with us for strategic partnerships in data analytics, web development, and talent acquisition.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="input-focus-effect w-full px-4 py-3 bg-white rounded-lg border border-blue-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="group">
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        className="input-focus-effect w-full px-4 py-3 bg-white rounded-lg border border-blue-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Number"
                        className="input-focus-effect w-full px-4 py-3 bg-white rounded-lg border border-blue-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      />
                    </div>
                    <div className="group">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="input-focus-effect w-full px-4 py-3 bg-white rounded-lg border border-blue-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      required
                      className="input-focus-effect w-full px-4 py-3 bg-white rounded-lg border border-blue-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select a subject</option>
                      {subjects[formType].map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Your Message"
                      className="input-focus-effect w-full px-4 py-3 bg-white rounded-lg border border-blue-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* footer */}


      <footer className="bg-white text-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
                <li><Link to="/program" className="hover:text-blue-400">Programs</Link></li>
                <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><Link to="/internship-program" className="hover:text-blue-400">Internship Program</Link></li>
                <li><Link to="/mentorship-program" className="hover:text-blue-400">Mentorship Program</Link></li>
                <li><Link to="/job-assistance-program" className="hover:text-blue-400">Job Assistance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="hover:text-blue-400 cursor-pointer" >Data Analytics Solutions</li>
                <li className="hover:text-blue-400 cursor-pointer" >Web Development</li>
                <li className="hover:text-blue-400 cursor-pointer" >Hiring & Talent Acquisition</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <Link to="#" className="hover:text-blue-400"><Linkedin className="w-6 h-6" /></Link>
                <Link to="#" className="hover:text-blue-400"><Twitter className="w-6 h-6" /></Link>
                <Link to="#" className="hover:text-blue-400"><Instagram className="w-6 h-6" /></Link>
                <Link to="#" className="hover:text-blue-400"><Facebook className="w-6 h-6" /></Link>
              </div>
              <div className="space-y-2">
                <p className="flex items-center"><Mail className="w-5 h-5 mr-2" /> contact@analyticscareerconnect.com</p>
                <p className="flex items-center"><Phone className="w-5 h-5 mr-2" /> 9607157409</p>
                <p className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> Pune, MH, India</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p>© 2025 Analytics Career Connect | All Rights Reserved</p>
            <p className="mt-2 text-sm text-gray-600">Empowering Careers | Helping Businesses Grow | Driven by Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;