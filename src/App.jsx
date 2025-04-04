import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Header from './components/layout/NavBar'
import Home from './pages/Home/Home';
import Program from './pages/Programs/Program';
import MentorshipProgram from './pages/MentorshipProgram/MentorshipProgram';
import JobAssistanceProgram from './pages/JobAssistanceProgram/JobAssistanceProgram';
import IntershipProgram from './pages/IntershipProgram/IntershipProgram';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Career from './pages/Career/Career';
import { BlogList } from './pages/Blog/BlogList';
import { BlogPost } from './pages/Blog/BlogPost';
import Service from './pages/Service/Services';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/program' element={<Program/>}/>
        <Route path='/mentorship-program' element={<MentorshipProgram/>} />
        <Route path='/internship-program' element={<IntershipProgram/>} />
        <Route path='/job-assistance-program' element={<JobAssistanceProgram/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<BlogList/>}/>
        <Route path="/blog/:id" element={<BlogPost />}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </Router>
  )
}

export default App



// import React from 'react';
// import { ChevronDown, GraduationCap, Trophy, Network, Search, Quote, Phone, Mail, MapPin, Check } from 'lucide-react';

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       {/* Header */}
//       <header className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
//         <nav className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold text-blue-600">ACC</div>
//             <div className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
//               <div className="relative group">
//                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
//                   Programs <ChevronDown className="w-4 h-4" />
//                 </a>
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                   <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Mentorship Program</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Internship Program</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Job Assistance</a>
//                 </div>
//               </div>
//               <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Career</a>
//             </div>
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg">
//               Enroll Now
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-6">
//         <div className="container mx-auto flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
//             <h1 className="text-5xl font-bold mb-6 text-gray-900">
//               <span className="text-blue-600">Empowering</span> with Excellence in Data
//               <span className="text-blue-600"> Analytics & Innovation</span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Learn, Grow, and Transform with Real-World Skills and Expert Guidance.
//             </p>
//             <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-xl">
//               Contact Us
//             </button>
//           </div>
//           <div className="md:w-1/2 animate-float">
//             <img 
//               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//               alt="Data Analytics"
//               className="rounded-2xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* How We Work Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="flex items-center justify-center mb-16">
//             <div className="bg-blue-100 rounded-2xl p-6 inline-flex items-center gap-3">
//               <Check className="w-6 h-6 text-blue-600" />
//               <span className="text-xl font-semibold text-blue-800">See How Analytics Career Works</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Why Choose Analytics Career Connect?</h2>
//             <p className="text-xl text-gray-600">Empower careers with tailored programs and proven success.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
//               <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-bold mb-2">100+ Students Trained</h3>
//               <p className="text-gray-600">We've helped over 110 aspiring professionals kick-start their careers in data analytics.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
//               <Trophy className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Proven Success Rate</h3>
//               <p className="text-gray-600">90% of our students successfully transition into data analytics roles.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
//               <Network className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Industry Partners</h3>
//               <p className="text-gray-600">Strong network of 27+ partner companies across various sectors.</p>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
//               <Search className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-xl font-bold mb-2">Comprehensive Training</h3>
//               <p className="text-gray-600">10,000+ hours of hands-on training and practical experience.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quote Section */}
//       <section className="py-20 bg-blue-600">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <Quote className="w-16 h-16 text-blue-300 mx-auto mb-8" />
//             <blockquote className="text-3xl font-light text-white mb-8">
//               "Data is the new oil, but like oil, it must be refined to be valuable."
//             </blockquote>
//             <div className="flex items-center justify-center">
//               <img 
//                 src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
//                 alt="Clive Humby"
//                 className="w-16 h-16 rounded-full border-4 border-white"
//               />
//               <div className="ml-4 text-left">
//                 <p className="text-white font-bold">Clive Humby</p>
//                 <p className="text-blue-200">Data Science Pioneer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section className="py-20 px-6">
//         <div className="container mx-auto">
//           <div className="text-center mb-16">
//             <p className="text-blue-600 font-semibold mb-2">Who we are</p>
//             <h2 className="text-4xl font-bold">Build Your Career with Our Tailored Programs</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
//               <GraduationCap className="w-12 h-12 text-blue-600 mb-6" />
//               <h3 className="text-2xl font-bold mb-4">Mentorship Program</h3>
//               <p className="text-gray-600 mb-6">Learn data analytics, SQL, Python, and more with expert guidance tailored to your career goals.</p>
//               <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
//                 Learn More <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
//               </a>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
//               <Trophy className="w-12 h-12 text-blue-600 mb-6" />
//               <h3 className="text-2xl font-bold mb-4">Internship Program</h3>
//               <p className="text-gray-600 mb-6">Gain real-world experience in data science with hands-on projects and a standout portfolio.</p>
//               <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
//                 Learn More <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
//               </a>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
//               <Network className="w-12 h-12 text-blue-600 mb-6" />
//               <h3 className="text-2xl font-bold mb-4">Job Assistance</h3>
//               <p className="text-gray-600 mb-6">Prepare for your dream job with resume tips, interview coaching, and career support.</p>
//               <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
//                 Learn More <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <p className="text-gray-600 mb-2">Students Trained</p>
//               <div className="text-4xl font-bold text-blue-600">110+</div>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <p className="text-gray-600 mb-2">Job Success Rate</p>
//               <div className="text-4xl font-bold text-blue-600">90%</div>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <p className="text-gray-600 mb-2">Partnered Companies</p>
//               <div className="text-4xl font-bold text-blue-600">27+</div>
//             </div>
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <p className="text-gray-600 mb-2">Hours of Training</p>
//               <div className="text-4xl font-bold text-blue-600">10,000+</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Perfection Section */}
//       <section className="py-20 bg-blue-600 text-white">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-3xl font-bold mb-4">Perfection In Every Step We Take</h3>
//             <p className="text-xl text-blue-100">Excellence in execution, precision in action – every step is a commitment to success.</p>
//           </div>
//         </div>
//       </section>

//       {/* Tools Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <p className="text-blue-600 mb-2">What we do</p>
//             <h2 className="text-4xl font-bold">Get Started! Create and Analyze Insightful Dashboards.</h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <div key={num} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1">
//                 <img 
//                   src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80`}
//                   alt={`Tool ${num}`}
//                   className="w-full h-auto rounded-lg"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//             <div className="grid md:grid-cols-2">
//               <div className="p-12 bg-blue-600">
//                 <h3 className="text-3xl font-bold text-white mb-6">Contact Us</h3>
//                 <p className="text-blue-100 mb-8">Go from data to insights in minutes</p>
//                 <div className="space-y-6">
//                   <div className="flex items-center text-blue-100">
//                     <Phone className="w-6 h-6 mr-4" />
//                     <span>(+91) 96071-57409</span>
//                   </div>
//                   <div className="flex items-center text-blue-100">
//                     <Mail className="w-6 h-6 mr-4" />
//                     <span>contact@analyticscareerconnect.com</span>
//                   </div>
//                   <div className="flex items-center text-blue-100">
//                     <MapPin className="w-6 h-6 mr-4" />
//                     <span>Pune, MH, India</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-12">
//                 <form className="space-y-6">
//                   <div className="grid grid-cols-2 gap-6">
//                     <input
//                       type="text"
//                       placeholder="First Name"
//                       className="px-4 py-3 rounded-lg border focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Last Name"
//                       className="px-4 py-3 rounded-lg border focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                     />
//                   </div>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full px-4 py-3 rounded-lg border focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                   />
//                   <textarea
//                     placeholder="Message"
//                     rows={4}
//                     className="w-full px-4 py-3 rounded-lg border focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                   ></textarea>
//                   <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-blue-600">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-white mb-6">
//                 Elevate Your Career: Yes!<br />
//                 80% faster with an analytics career
//               </h2>
//               <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105">
//                 Join Now
//               </button>
//             </div>
//             <div className="animate-float">
//               <img 
//                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Analytics Career"
//                 className="rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">ACC</h3>
//               <p className="text-gray-400">Empowering Careers, Delivering Excellence in Data Analytics and Digital Innovation.</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-6">Industries</h4>
//               <ul className="space-y-4">
//                 <li className="text-gray-400">E-commerce</li>
//                 <li className="text-gray-400">Healthcare</li>
//                 <li className="text-gray-400">Finance</li>
//                 <li className="text-gray-400">Retail</li>
//                 <li className="text-gray-400">Marketing</li>
//                 <li className="text-gray-400">Real Estate</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold mb-6">Contact</h4>
//               <div className="space-y-4">
//                 <p className="flex items-center text-gray-400">
//                   <Phone className="w-5 h-5 mr-3" />
//                   (+91) 96071-57409
//                 </p>
//                 <p className="flex items-center text-gray-400">
//                   <Mail className="w-5 h-5 mr-3" />
//                   contact@analyticscareerconnect.com
//                 </p>
//                 <p className="flex items-center text-gray-400">
//                   <MapPin className="w-5 h-5 mr-3" />
//                   Pune, MH, India
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>© 2024 Analytics Career Connect. All rights reserved</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;