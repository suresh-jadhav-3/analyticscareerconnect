import { Award, Briefcase, GraduationCap, Target } from 'lucide-react'
import React from 'react'

function ProgramHighlights() {

    const Highlight = [
        {
            icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
            text: "Guidance from industry experts"
        },
        {
            icon: <Target className="w-6 h-6 text-blue-600" />,
            text: "A structured learning path"
        },
        {
            icon: <Briefcase className="w-6 h-6 text-blue-600" />,
            text: "Real-world projects & practical exposure"
        },
        {
            icon: <Award className="w-6 h-6 text-blue-600" />,
            text: "Job assistance until you get hired"
        }
    ]

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Mentorship Program Provides</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4np gap-6">
                    {Highlight.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                            {item.icon}
                            <span className="text-gray-700">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProgramHighlights