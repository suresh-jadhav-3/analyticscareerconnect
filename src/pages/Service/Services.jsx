import React from 'react';
import {
    BarChart3,
    Globe,
    Megaphone,
    Users,
    CheckCircle2,
    ArrowRight,
    Database,
    LineChart,
    Target,
    BrainCircuit
} from 'lucide-react';
import Footer from '../../components/layout/Footer'

const ServiceCard = ({
    title,
    description,
    items,
    icon: Icon,
    ctaText
}) => (
    <div className="max-w-[700px] bg-white rounded-xl  p-8 border border-blue-100 shadow-xl transform transition hover:scale-103 duration-500">
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-50 rounded-lg">
                <Icon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
        </div>
        <p className="text-blue-700 mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-blue-800">{item}</span>
                </li>
            ))}
        </ul>
        <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
            {ctaText}
            <ArrowRight className="w-5 h-5" />
        </button>
    </div>
);

const WhyChooseUsCard = ({
    icon: Icon,
    title,
    description
}) => (
    <div className="max-w-[400px] flex gap-4 p-6 bg-white rounded-lg border border-blue-50 shadow-xl transform transition hover:scale-103 duration-500">
        <div className="p-3 bg-blue-50 rounded-lg h-fit">
            <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">{title}</h4>
            <p className="text-blue-700">{description}</p>
        </div>
    </div>
);

function Service() {
    const services = [
        {
            icon: BarChart3,
            title: "Data Analytics Services",
            description: "Transform raw data into actionable insights to drive growth and efficiency.",
            items: [
                "Data Strategy & Consulting",
                "Dashboard Development & BI Solutions",
                "Predictive Analytics & AI",
                "Data Cleaning & Transformation",
                "Business Intelligence & Reporting"
            ],
            ctaText: "Drive Growth with Data"
        },
        {
            icon: Globe,
            title: "Web Development Services",
            description: "Build custom, scalable, and user-friendly websites that boost engagement.",
            items: [
                "Custom Website Development",
                "E-commerce & WordPress Solutions",
                "UI/UX Design & Optimization",
                "Web App Development",
                "Website Performance & SEO Optimization"
            ],
            ctaText: "Launch Your Website"
        },
        {
            icon: Megaphone,
            title: "Digital Marketing Services",
            description: "Establish a strong online presence and maximize ROI with data-driven strategies.",
            items: [
                "SEO & Content Marketing",
                "Social Media Management",
                "Paid Advertising (PPC)",
                "Email Marketing & Lead Generation",
                "Brand Strategy & Growth Consulting"
            ],
            ctaText: "Scale Your Business"
        },
        {
            icon: Users,
            title: "Talent Acquisition Services",
            description: "Find skilled professionals in data, tech, and business domains faster.",
            items: [
                "Tech & Data Hiring",
                "Full-Time & Contract-Based Hiring",
                "Pre-Vetted Candidate Pool",
                "End-to-End Hiring Support",
                "Specialized Role Recruitment"
            ],
            ctaText: "Find Your Next Hire"
        }
    ];

    const whyChooseUs = [
        {
            icon: BrainCircuit,
            title: "Industry Experts & Trusted Partners",
            description: "Our team and partners bring deep expertise in data, technology, and recruitment."
        },
        {
            icon: Target,
            title: "Customized & Scalable Solutions",
            description: "Every business is different, and we tailor our services to fit your needs."
        },
        {
            icon: LineChart,
            title: "Affordable & Value-Driven",
            description: "Get high-quality services at cost-effective rates, ensuring maximum ROI."
        },
        {
            icon: Database,
            title: "Tech-Enabled & Data-Driven",
            description: "We use the latest technologies and data insights to drive better results."
        },
        {
            icon: Database,
            title: "End-to-End Support",
            description: "We use the latest technologies and data insights to drive better results."
        }
    ];

    return (
        <div className="min-h-screen mt-18 bg-white     ">
            {/* Hero Section */}


            <div className="max-w-7xl mx-auto bg-white px-4 sm:px-6 lg:px-8 py-24 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-left transform translate-y-4 transition-all duration-1000 ">

                        <h1 className="text-4xl md:text-5xl font-bold  leading-tight mb-6">

                            Empowering Businesses with Data, <span className="text-blue-600">Technology &</span> Talent Solutions
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 italic">
                            In today’s fast-paced digital world, businesses need data-driven insights, cutting-edge technology, and the right talent to stay ahead. At Analytics Career Connect, we provide comprehensive solutions that help businesses thrive.
                        </p>
                        <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg  hover:bg-blue-600 transition-all transform hover:scale-105 hover:shadow-lg">
                            Get Started Today
                        </button>
                    </div>
                    <div className="relative transform translate-x-4 opacity-0 animate-slide-in">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3"
                                alt="Business Analytics"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl" />
                    </div>
                </div>
            </div>


            {/* Services Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
                    <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                        Comprehensive solutions that help businesses thrive in the digital age
                    </p>
                </div>

                <div className="grid md:grid-cols-2  gap-8 ">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white  py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Us</h2>
                        <p className="text-xl text-blue-700 max-w-2xl mx-auto">
                            We deliver excellence through expertise, innovation, and dedication
                        </p>
                    </div>

                    <div className="sm:ml-30 md:ml-18 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <WhyChooseUsCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-600 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Something Great Together</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                            We are committed to helping businesses grow with data-driven solutions, advanced technology, and top-tier talent acquisition.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </div>

            {/* footer */}

            <Footer />
        </div>
    );
}

export default Service;