import React from 'react';
import { MessageCircle, Linkedin, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareerConsultant = () => {
  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-blue-800 p-12 text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-2xl">
          <div className="mb-6 flex justify-center">
            <MessageCircle className="h-16 w-16 text-blue-400" />
          </div>
          
          <h3 className="mb-4 text-3xl font-bold text-white">
            Ready to Start Your Career Journey?
          </h3>
          
          <p className="mb-8 text-lg text-blue-100">
            Choose the program that suits you and take the first step toward your dream job in tech!
          </p>
          
          <Link to='/contact' className="inline-block transform rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Contact Us Today
          </Link>
        </div>

        <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl"></div>
      </div>

      <div className="bg-white p-8 shadow-lg">
        <h4 className="text-2xl font-bold text-center mb-8">Stay Connected & Accelerate Your Career!</h4>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <Users className="h-8 w-8 text-blue-500" />
            <div>
              <h5 className="font-semibold mb-2">Join Our Community</h5>
              <p className="text-gray-600">Get access to valuable insights, job updates, and networking opportunities.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Linkedin className="h-8 w-8 text-blue-500" />
            <div>
              <h5 className="font-semibold mb-2">Follow Us on LinkedIn</h5>
              <p className="text-gray-600">Stay updated with the latest trends in data, tech, and job market insights.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Mail className="h-8 w-8 text-blue-500" />
            <div>
              <h5 className="font-semibold mb-2">Need Guidance?</h5>
              <p className="text-gray-600">Reach out for expert mentorship and career advice.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerConsultant;