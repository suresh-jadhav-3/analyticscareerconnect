import React from 'react';

const positions = [
  {
    title: 'WordPress Developer Intern',
    responsibilities: [
      'Design, develop, and maintain WordPress websites',
      'Optimize website performance & ensure mobile responsiveness',
      'Integrate plugins and custom features'
    ],
    requirements: [
      'Basic knowledge of WordPress development',
      'Familiarity with HTML, CSS, JavaScript',
      'Creative mindset with attention to detail'
    ]
  },
  {
    title: 'Data Analyst Intern',
    responsibilities: [
      'Analyze datasets to uncover actionable insights',
      'Create dashboards using Excel, Power BI, or Tableau',
      'Assist in report preparation'
    ],
    requirements: [
      'Strong analytical skills & attention to detail',
      'Proficiency in Excel and at least one data visualization tool',
      'Basic SQL knowledge is a plus'
    ]
  },
  {
    title: 'Product Analyst Intern',
    responsibilities: [
      'Research and analyze user needs to improve products',
      'Support product lifecycle from ideation to deployment',
      'Track and report performance metrics'
    ],
    requirements: [
      'Interest in product development & market research',
      'Strong problem-solving and analytical skills',
      'Basic knowledge of Agile methodologies is a plus'
    ]
  },
  {
    title: 'Graphic Designer Intern',
    responsibilities: [
      'Design marketing materials, social media posts & presentations',
      'Collaborate on visually appealing graphics',
      'Ensure brand consistency'
    ],
    requirements: [
      'Proficiency in Adobe Illustrator, Photoshop, or Canva',
      'Strong creative & visual design skills',
      'A portfolio showcasing your work'
    ]
  },
  {
    title: 'Human Resource Intern',
    responsibilities: [
      'Assist in recruitment, onboarding & employee engagement',
      'Maintain & update employee records',
      'Support HR operations'
    ],
    requirements: [
      'Interest in HR & people management',
      'Strong communication & organizational skills',
      'Knowledge of MS Office tools is a plus'
    ]
  },
  {
    title: 'Founding Team Member',
    responsibilities: [
      'Work closely with the CEO on core business strategies',
      'Contribute to decision-making & operations',
      'Support key projects across various domains'
    ],
    requirements: [
      'Entrepreneurial mindset & ownership attitude',
      'Strong problem-solving & multitasking skills',
      'Excellent communication & leadership potential'
    ]
  },
  {
    title: 'General Internship',
    responsibilities: [
      'Work on diverse projects based on your interests & skills',
      'Get exposure to real-world challenges',
      'Learn from industry professionals'
    ],
    requirements: [
      'Passion for learning & career growth',
      'Basic knowledge of your chosen domain',
      'Enthusiasm to contribute to a team'
    ]
  }
];

const OpenPositions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Open Positions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {position.title}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-indigo-600 mb-3">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {position.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-indigo-600 mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;