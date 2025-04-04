import { Building2, Trophy, Users } from 'lucide-react'
import React from 'react'

function HowItWork() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <Users />, title: 'Profile Review', desc: 'Assessment of your background & job readiness' },
                        { icon: <Building2 />, title: 'Resume Optimization', desc: 'Crafting a standout profile' },
                        { icon: <Trophy />, title: 'Interview Preparation', desc: 'Preparing for real-world scenarios' },
                    ].map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWork