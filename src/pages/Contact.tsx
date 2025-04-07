
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you'd send the form data to a server here
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      // Show success toast
      toast({
        title: "Request Submitted",
        description: "Thank you for your interest! Our team will contact you shortly.",
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      setIsSubmitting(false);
      
      // Redirect to home after a delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Book Your Personalized Demo</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how our swag management platform can transform your brand experience and simplify your swag logistics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            {/* Left side benefits */}
            <div className="md:col-span-2 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 h-full">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Why Schedule a Demo?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center mr-3">
                      <Calendar className="h-4 w-4 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Personalized Walkthrough</h4>
                      <p className="text-sm text-gray-600">Get a tailored presentation of features relevant to your needs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center mr-3">
                      <Mail className="h-4 w-4 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Expert Consultation</h4>
                      <p className="text-sm text-gray-600">Discuss your swag strategy with our experienced team</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center mr-3">
                      <Calendar className="h-4 w-4 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Custom Pricing</h4>
                      <p className="text-sm text-gray-600">Get a quote tailored to your organization's specific needs</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-brand-50 rounded-lg border border-brand-100">
                  <p className="text-sm text-brand-800 italic">
                    "The demo session was incredibly helpful. It answered all our questions and showed us exactly how ReWorks could solve our swag challenges."
                  </p>
                  <p className="text-sm font-medium text-brand-800 mt-2">— Marketing Director, Fortune 500 Company</p>
                </div>
              </div>
            </div>
            
            {/* Right side form */}
            <div className="md:col-span-3 animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      placeholder="Your company"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                    <textarea 
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                      placeholder="Tell us about your swag needs and what you're looking to accomplish"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3 px-6 rounded-lg font-medium text-base transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Your Demo'} 
                    {!isSubmitting && <ArrowRight className="ml-2" />}
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting this form, you agree to our <a href="/privacy-policy" className="text-brand-600 hover:underline">Privacy Policy</a> and <a href="/terms-of-use" className="text-brand-600 hover:underline">Terms of Use</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
          
          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600">contact@reworks.tech</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
              <p className="text-gray-600">Mon-Fri: 9am - 6pm IST</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
