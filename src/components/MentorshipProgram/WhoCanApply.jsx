import { CheckSquare } from 'lucide-react'
import React from 'react'

function WhoCanApply() {

    const WhoCanApply = [
        {
            title: "Students & Freshers",
            description: "Looking to develop job-ready skills and enter the data industry."
        },
        {
            title: "Working Professionals",
            description: "Wanting to switch careers into Data Analytics, Data Science, or BI roles."
        },
        {
            title: "Job Seekers",
            description: "Struggling to land interviews despite having technical knowledge."
        },
        {
            title: "Anyone Interested in Data & AI",
            description: "Eager to learn industry-relevant skills with structured guidance."
        }
    ]
    
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Who Should Apply?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {WhoCanApply.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md">
                            <CheckSquare className="w-6 h-6 text-green-500 flex-shrink-0" />
                            <div>
                                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhoCanApply