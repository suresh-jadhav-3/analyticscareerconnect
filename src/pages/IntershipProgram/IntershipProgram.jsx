import React from 'react'
import Hero from '../../components/IntershipProgram/Hero'
import Benefit from '../../components/IntershipProgram/Benfite'
import OurVision from '../../components/IntershipProgram/OurVision'
import WorkSection from '../../components/IntershipProgram/WorkSection'
import RoleSection from '../../components/IntershipProgram/RoleSection'
import EligibilitySection from '../../components/IntershipProgram/EligibilitySection'
import {  Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function IntershipProgram() {
    return (
        <div >
            <Hero />
            <OurVision />
            <WorkSection />
            <RoleSection />
            <Benefit />
            <EligibilitySection />


            <footer className="bg-white text-gray-900 py-12 border-t">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <div className="flex items-center mb-3">
                                <Phone className="w-5 h-5 mr-2 text-gray-700" />
                                <p>(+91) 96071-57409</p>
                            </div>
                            <div className="flex items-center mb-3">
                                <Mail className="w-5 h-5 mr-2 text-gray-700" />
                                <p>contact@analyticscareerconnect.com</p>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-gray-700" />
                                <p>Pune, MH, India</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to="/program" className="hover:text-gray-600">Programs</Link></li>
                                <li><Link to="/mentorship-program" className="hover:text-gray-600">Mentorship</Link></li>
                                <li><Link to="/internship-program" className="hover:text-gray-600">Internship</Link></li>
                                <li><Link to="/job-assistance-program" className="hover:text-gray-600">Job Assistance </Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Industries We Serve</h3>
                            <ul className="space-y-2">
                                <li>E-commerce</li>
                                <li>Retail</li>
                                <li>Marketing</li>
                                <li>Healthcare</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-300 text-center">
                        <p>© 2024 Analytics Career Connect. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default IntershipProgram