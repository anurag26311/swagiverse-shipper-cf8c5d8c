
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MessageSquare, HelpCircle, Search } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const Help = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-b from-brand-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I get started with ReWorks?</AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! Simply sign up for an account on our platform, and our team will guide you through the onboarding process. You can also request a demo to see how our platform works.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What types of products can I brand?</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of products that can be customized with your brand, including apparel, drinkware, tech accessories, office supplies, and much more. Our team can help you select the right products for your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How does global shipping work?</AccordionTrigger>
                <AccordionContent>
                  We have fulfillment centers located around the world, allowing us to ship your branded merchandise to virtually any location. We handle all customs and shipping logistics, so you don't have to worry about it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I track my inventory?</AccordionTrigger>
                <AccordionContent>
                  Yes! Our platform provides real-time inventory tracking, so you always know how much stock you have available. You can also set up alerts for low inventory levels.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What kind of reporting is available?</AccordionTrigger>
                <AccordionContent>
                  Our platform offers comprehensive reporting features, including inventory levels, shipping status, redemption rates, and budget tracking. You can customize reports to meet your specific needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Support</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Support</h3>
                  <p className="text-muted-foreground mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:support@reworks.in" className="text-brand-600 font-medium hover:underline">support@reworks.in</a>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone Support</h3>
                  <p className="text-muted-foreground mb-2">Available 9 AM - 6 PM EST, Mon-Fri</p>
                  <a href="tel:+18001234567" className="text-brand-600 font-medium hover:underline">+1 800 123 4567</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Live Chat</h3>
                  <p className="text-muted-foreground mb-2">Get instant support from our team</p>
                  <Button variant="outline" className="mt-2">
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="h-8 w-8 text-brand-600" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Still need help?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Our support team is always ready to assist you with any questions or concerns you may have.
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
