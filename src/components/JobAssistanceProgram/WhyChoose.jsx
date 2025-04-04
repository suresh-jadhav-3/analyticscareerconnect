import { CheckCircle2 } from 'lucide-react'
import React from 'react'

function WhyChoose() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Who Should Join?</h2>
                <div className="max-w-3xl mx-auto">
                    {[
                        'Recent Graduates looking for their first job',
                        'Experienced Professionals seeking career growth',
                        'Job Seekers not getting interview calls',
                        'Data & Tech Professionals breaking into high-demand roles',
                    ].map((item, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
                            <p className="text-lg">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose