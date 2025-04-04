import { Briefcase, FileCheck, MessageSquare, Rocket, Target, UserCheck, Users } from 'lucide-react'
import React from 'react'

function HowItWork() {

    const howitwork = [
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: "Apply & Get Matched",
            description: "Based on your background and goals, you'll be paired with the right mentor."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Structured Learning Plan",
            description: "Follow a roadmap covering technical and business skills."
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Work on Real-World Projects",
            description: "Gain practical experience by solving case studies."
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Weekly Mentor Check-Ins",
            description: "Get regular feedback and support."
        },
        {
            icon: <FileCheck className="w-8 h-8" />,
            title: "Portfolio & Resume Building",
            description: "Build a strong online presence to attract recruiters."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Mock Interviews & Job Assistance",
            description: "Prepare for job interviews, salary negotiations & offer acceptance."
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Land Your Dream Job!",
            description: "Our mentors & job assistance team will support you until you get hired!"
        }
    ]

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">How This Mentorship Works</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-8">
                        {howitwork.map((step, index) => (
                            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:shadow-md transition duration-300">
                                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full text-blue-600">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork