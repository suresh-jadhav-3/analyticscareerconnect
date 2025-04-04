import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const faqs = [
  {
    question: "What is Analytics Career Connect?",
    answer: "A platform that bridges the skill gap in tech by offering mentorship, internships, and job assistance."
  },
  {
    question: "Who can benefit from our programs?",
    answer: "Students, job seekers, professionals looking to upskill, and businesses seeking skilled tech talent."
  },
  {
    question: "Is the internship program free or paid?",
    answer: "It's completely free, focusing on real-world learning and practical projects."
  },
  {
    question: "Is the mentorship program paid?",
    answer: "Yes, it follows a pay-after-placement model—you only pay after securing a job."
  },
  {
    question: "How does job assistance work?",
    answer: "It includes resume reviews, interview prep, and job referrals, with payment required only after you get hired."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Have any Question?</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 shadow-md"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-300 ${
                  openIndex === index ? 'py-4 opacity-100' : 'h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;