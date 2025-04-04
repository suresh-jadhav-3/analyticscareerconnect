import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-blue-900 py-16 border-t-2 border-gray-500 animate-fade-in-up">
      <div className="container mx-auto grid md:grid-cols-3 gap-12">
        {/* Logo and Tagline */}
        <div>
          <img
            src="https://analyticscareerconnect.com/wp-content/uploads/2025/01/Logs-ACC-removebg-preview-e1737796458429.png"
            alt="Analytics Career Connect Logo"
            className="w-48 mb-6"
          />
          <p className="text-blue-700 text-lg leading-relaxed">Empowering Careers, Delivering Excellence in Data Analytics and Digital Innovation.</p>
        </div>

        {/* Quick View */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Quick View</h3>
          <ul className="text-blue-700 space-y-3">
            {[ 
              { label: 'Home', link: '/' },
              { label: 'Programs', link: '/programs' },
              { label: 'Mentorship Program', link: '/mentorship-program' },
              { label: 'Internship Program', link: '/internship-program' },
              { label: 'Job Assistance Program', link: '/job-assistance-program' },
              { label: 'About', link: '/about' },
              { label: 'Contact', link: '/contact' },
              { label: 'Blog', link: '/blog' },
              { label: 'Career', link: '/career' }
            ].map((item) => (
              <li key={item.label}>
                <a href={item.link} className="hover:text-blue-500">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <div className="text-blue-700 space-y-4">
            <p className="flex items-center gap-3"><Phone className="text-blue-500" /> (+91) 96071-57409</p>
            <p className="flex items-center gap-3"><MapPin className="text-blue-500" /> Pune, MH, India</p>
            <p className="flex items-center gap-3"><Mail className="text-blue-500" /> contact@analyticscareerconnect.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-blue-700 text-sm mt-16">
        © 2024 Analytics Career Connect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
