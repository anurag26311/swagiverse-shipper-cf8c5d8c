
import { useState, useRef } from 'react';
import { Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    document.body.style.overflow = 'auto';
    // Reset video iframe
    if (videoRef.current && videoRef.current.src) {
      videoRef.current.src = videoRef.current.src;
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center stagger-animation">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-balance">
            Create & Send Branded Swag <span className="text-brand-600">Anywhere</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Experience a fully featured swag management and say goodbye to swag logistics hassles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/contact" 
              className="hero-button bg-brand-600 text-white hover:bg-brand-700 w-full sm:w-auto"
            >
              Get A Demo
            </Link>
            <button 
              onClick={openVideoModal}
              className="hero-button bg-white border border-border hover:bg-gray-50 flex items-center gap-2 w-full sm:w-auto"
            >
              <Play size={18} className="text-brand-600" />
              Watch Our Video
            </button>
          </div>
        </div>
        
        <div className="relative mt-16 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <div className="aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
            <Link to="/swag-platform">
              <img 
                src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Branded swag collection" 
                className="w-full h-full object-cover lazy-image loaded transition-transform hover:scale-105 duration-500"
              />
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-10"></div>
        </div>
      </div>

      {/* Sub-headline */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <p className="text-xl md:text-2xl font-medium text-balance max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
          A swag management company that makes <Link to="/features" className="text-brand-600 hover:underline">sourcing</Link>, <Link to="/kitting" className="text-brand-600 hover:underline">storing</Link>, and <Link to="/employee-swag" className="text-brand-600 hover:underline">shipping</Link> swag easy.
        </p>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fade-in">
          <div className="relative w-full max-w-5xl">
            <button 
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-opacity-80 transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                ref={videoRef}
                src="https://player.vimeo.com/video/779962431?autoplay=1&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="ReWorks Swag Management Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
