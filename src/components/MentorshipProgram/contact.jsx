import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-sky-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <MessageCircle className="inline-block mr-2 mb-1" /> Talk to a Mentor Today!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with expert mentors who can guide you through your career journey, provide personalized advice, and help you gain the skills needed to succeed.
          </p>
          <a 
            href="https://forms.gle/EDma1rVXWRSRfUAK9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-sky-500 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition duration-300 inline-block"
          >
            Join Now
          </a>
        </div>
      </section>
  );
};

export default Contact;
