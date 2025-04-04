import { Star } from 'lucide-react'
import React from 'react'

function SuccessStories() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                <div className="text-center mb-8 text-xl text-blue-600 font-semibold">
                    🎉 4 Students Have Already Landed Jobs! Be the next success story!
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {[
                        {
                            quote: "This mentorship gave me the confidence and real-world experience I needed to secure my first job. The support and projects were game-changers!",
                            author: "Aayush",
                            role: "Data Analyst"
                        },
                        {
                            quote: "The step-by-step learning and job search strategies helped me break into the data field. Highly recommended!",
                            author: "Sneha",
                            role: "BI Analyst"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <Star className="w-8 h-8 text-blue-400 mb-4" />
                            <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-blue-600">{testimonial.role}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SuccessStories