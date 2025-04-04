import { BookOpen, Briefcase, Network, Target, Trophy, Users } from 'lucide-react'
import React from 'react'

function WhatYouGain() {

    const feature = [
        {
            icon: <BookOpen className="w-8 h-8 text-blue-600" />,
            title: 'Resume Optimization & ATS Compliance',
            desc: 'Stand out in recruiter searches with professionally crafted resumes'
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: 'LinkedIn Profile Enhancement',
            desc: 'Get noticed by hiring managers with an optimized professional profile'
        },
        {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: 'Targeted Job Search Strategy',
            desc: 'Apply strategically to get more responses from employers'
        },
        {
            icon: <Briefcase className="w-8 h-8 text-blue-600" />,
            title: 'Mock Interviews & Feedback',
            desc: 'Build confidence with real interview practice and expert feedback'
        },
        {
            icon: <Network className="w-8 h-8 text-blue-600" />,
            title: 'Networking & Referral Support',
            desc: 'Access exclusive job openings through our professional network'
        },
        {
            icon: <Trophy className="w-8 h-8 text-blue-600" />,
            title: 'Guaranteed Support',
            desc: 'We work with you until you secure your dream job'
        },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What You'll Gain</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {feature.map((item, index) => (
                        <div key={index} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatYouGain