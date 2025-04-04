import { Mail, MapPin, Phone,} from "lucide-react";

const Contact = () => {
  return (
    
    <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get Started Today</h2>
            <p className="text-xl mb-8">Ready to Take the Next Step in Your Career?</p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>Info: (+91) 96071-57409</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>contact@analyticscareerconnect.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Pune, MH, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
