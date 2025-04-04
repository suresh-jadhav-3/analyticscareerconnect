import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="mt-20 flex flex-col items-center justify-center bg-gray-100 py-16 px-4 text-gray-900">
            <div className="text-center">
                <h3 className="text-4xl font-bold mb-4 text-blue-600 drop-shadow-lg">
                    Intership <span className="text-gray-700">Assistance</span>
                </h3>
                <p className="text-lg mb-6 max-w-4xl">
                Our Internship Program offers hands-on experience, one-on-one mentorship, and real-time virtual tasks to help you become job-ready
                    </p>
                    <div className="flex justify-center">
                    <button className="group bg-white text-purple-600 px-8 py-3 rounded-full font-semibold 
                               flex items-center justify-center space-x-2 hover:bg-blue-100 transition-colors duration-300">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScQIkRTSGVpCzXVBPlJegXg3chrbWtel-JKPV6RL2GotMwijA/viewform">Join Now</a>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
            </div>

            <div className="mt-10 max-w-3xl">
                <div className="bg-white shadow-2xl transform hover:scale-105 transition-transform duration-300 rounded-lg">
                    <div className="p-6 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                            alt="Mentorship Program"
                            className="w-full h-64 object-cover rounded-lg "
                        />
                        <p className="text-lg italic text-gray-700">“Our Internship Program offers 50% learning and 50% real-world tasks, personalized mentorship, and job-ready skills—all completely free to help you gain practical experience and excel in the job market. It’s the perfect opportunity to start your career with confidence and hands-on experience.”</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
