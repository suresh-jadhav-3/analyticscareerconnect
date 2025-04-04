import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
      <div className="mt-20 flex flex-col items-center justify-center bg-gray-100 py-16 px-4 text-gray-900">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4 text-blue-600 drop-shadow-lg">
            Mentorship <span className="text-gray-700">Program</span>
          </h3>
          <p className="text-lg mb-6">Guided Mentorship for Your Career Success</p>
          <div className="flex justify-center">
                    <button className="group bg-white text-purple-600 px-8 py-3 rounded-full font-semibold 
                               flex items-center justify-center space-x-2 hover:bg-blue-100 transition-colors duration-300">
                        <a href="https://forms.gle/EDma1rVXWRSRfUAK9">Join Now</a>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
        </div>
  
        <div className="mt-10 max-w-3xl">
          <div className="bg-white shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-lg">
            <div className="p-6 text-center">
              <img 
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg" 
                alt="Mentorship Program" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-lg italic text-gray-700">“The journey to a successful career in Data Analytics, Data Science, and Business Intelligence can be challenging. Many students and professionals struggle to find the right guidance, industry insights, and real-world experience. Our Mentorship Program is designed to bridge this gap by providing personalized guidance, hands-on learning, and career support to help you land your dream job.”</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  