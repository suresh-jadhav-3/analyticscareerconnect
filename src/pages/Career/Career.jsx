import React from 'react';
import Hero from '../../components/Career/Hero';
import WhyJoinUs from '../../components/Career/WhyJoinUs';
import OpenPositions from '../../components/Career/Jobs';
import HiringProcess from '../../components/Career/HiringProcess';
import { Briefcase, GraduationCap, Home, Instagram, Linkedin, Mail, MapPin, Phone, Shield, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';


function Career() {
  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      <main>

        <Hero />
        <WhyJoinUs />
        <OpenPositions />
        <HiringProcess />
        {/* Warning Note */}
        <div className="bg-red-50 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-red-600 mb-4">🚨 Important Note:</h3>
              <p className="text-gray-800">
                Beware of fake job scams! Analytics Career Connect NEVER asks for money in exchange for job offers.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">About Us</h3>
              <p className="text-white/80 mb-4">
                Analytics Career Connect is dedicated to bridging the gap between talent and opportunity through mentorship, internships, and real-world learning experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/"><Home size={18} /> Home</Link>
                <Link href="/careers"><Briefcase size={18} /> Careers</Link>
                <Link href="/internships"><GraduationCap size={18} /> Internship Programs</Link>
                <Link href="/contact"><Phone size={18} /> Contact Us</Link>
                <Link href="/privacy"><Shield size={18} /> Privacy Policy</Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <a href="mailto:info@analyticscareerconnect.com">
                    <Mail size={18} /> info@analyticscareerconnect.com
                  </a>
                </div>
                <div>
                  <a href="mailto:careers@analyticscareerconnect.com">
                    <Mail size={18} /> careers@analyticscareerconnect.com
                  </a>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Remote & Hybrid Opportunities Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="grid md:grid-cols-2 gap-4">
              <p className="text-white/80 text-center md:text-left">
                © 2024 Analytics Career Connect. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-6">
                <a href="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
                <a href="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
                <a href="/cookies" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
       <footer className="bg-white text-blue-900 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About Us</h3>
            <p className="text-blue-900/80 mb-4">
              Analytics Career Connect is dedicated to bridging the gap between talent and opportunity through mentorship, internships, and real-world learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-blue-900/80 hover:text-blue-900 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-900/80 hover:text-blue-900 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-900/80 hover:text-blue-900 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="flex items-center space-x-2 hover:text-blue-900 transition-colors">
                <Home size={18} /> <span>Home</span>
              </Link>
              <Link href="/careers" className="flex items-center space-x-2 hover:text-blue-900 transition-colors">
                <Briefcase size={18} /> <span>Careers</span>
              </Link>
              <Link href="/internships" className="flex items-center space-x-2 hover:text-blue-900 transition-colors">
                <GraduationCap size={18} /> <span>Internship Programs</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-2 hover:text-blue-900 transition-colors">
                <Phone size={18} /> <span>Contact Us</span>
              </Link>
              <Link href="/privacy" className="flex items-center space-x-2 hover:text-blue-900 transition-colors">
                <Shield size={18} /> <span>Privacy Policy</span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <a href="mailto:info@analyticscareerconnect.com" className="flex items-center space-x-2 hover:text-blue-900 transition-colors">
                <Mail size={18} /> <span>info@analyticscareerconnect.com</span>
              </a>
              <a href="mailto:careers@analyticscareerconnect.com" className="flex items-center space-x-2 hover:text-blue-900 transition-colors">
                <Mail size={18} /> <span>careers@analyticscareerconnect.com</span>
              </a>
              <div className="flex items-center text-blue-900/80">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Remote & Hybrid Opportunities Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-blue-900/10 pt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <p className="text-blue-900/80 text-center md:text-left">
              &copy; {new Date().getFullYear()} Analytics Career Connect. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link href="/terms" className="text-blue-900/80 hover:text-blue-900 transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-blue-900/80 hover:text-blue-900 transition-colors">Privacy Policy</Link>
              <Link href="/cookies" className="text-blue-900/80 hover:text-blue-900 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Career;
