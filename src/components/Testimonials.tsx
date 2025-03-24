
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "To thank our community and increase retention, we used ReWorks to send out personalised kits. According to our community success team, the community was overjoyed and wrote in to thank us for thinking of them, compliment us on our thoughtfulness, etc. It was such a great and simple experience.",
      author: "Arpan Garg",
      title: "Founder – Commudle",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "ReWorks has transformed how we manage our company swag. Their platform is intuitive, and the quality of products is outstanding. Our team loves the branded items, and the analytics help us make smarter decisions about our swag investment.",
      author: "Sarah Johnson",
      title: "Marketing Director – TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The global shipping capability has been a game-changer for our remote team. We can now send consistent welcome kits to new hires anywhere in the world with just a few clicks. ReWorks has simplified what used to be a logistical nightmare.",
      author: "Michael Chen",
      title: "HR Manager – GlobalSoft",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">
          Testimonials
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Quote marks decoration */}
            <div className="absolute top-6 left-6 text-6xl text-gray-200 opacity-60">"</div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl mb-8 text-gray-700 italic text-balance">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  activeIndex === index ? 'bg-brand-500 scale-125' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
