import { Briefcase, CheckCircle2, Clock, Laptop, UserPlus } from 'lucide-react'
import React from 'react'

function WorkSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-12">How This Internship Program Works</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: <Clock className="w-12 h-12 text-blue-600" />,
                            step: "1️⃣ Choose Your Path",
                            title: "Flexible Duration",
                            description: [
                                "Full-Time (3 Months) – Ideal for freshers and job seekers",
                                "Part-Time (6 Months) – Perfect for students or working professionals"
                            ]
                        },
                        {
                            icon: <Laptop className="w-12 h-12 text-blue-600" />,
                            step: "2️⃣ Daily Learning",
                            title: "Hands-On Projects",
                            description: [
                                "Attend live sessions and team meetings",
                                "Work on real-world challenges with mentors"
                            ]
                        },
                        {
                            icon: <UserPlus className="w-12 h-12 text-blue-600" />,
                            step: "3️⃣ Personalized Support",
                            title: "Career Guidance",
                            description: [
                                "1:1 mentorship for skill development",
                                "Resume building and LinkedIn optimization"
                            ]
                        },
                        {
                            icon: <Briefcase className="w-12 h-12 text-blue-600" />,
                            step: "4️⃣ Job Readiness",
                            title: "Career Launch",
                            description: [
                                "Mock interview practice sessions",
                                "Potential direct referrals for tech roles"
                            ]
                        }
                    ].map((phase, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="flex justify-center mb-6">{phase.icon}</div>
                            <h3 className="text-xl font-bold text-center text-blue-600 mb-2">{phase.step}</h3>
                            <h4 className="text-lg font-semibold text-center mb-4">{phase.title}</h4>
                            <ul className="space-y-2">
                                {phase.description.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkSection