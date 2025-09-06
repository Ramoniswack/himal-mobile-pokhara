import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface NavigationProps {
  onContactClick: () => void;
}

export const Navigation = ({ onContactClick }: NavigationProps) => {
  // State to track active section
  const [activeSection, setActiveSection] = useState('home');
  
  // Function to handle scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };
  
  // Effect to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'gallery', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If section is in viewport (with some tolerance)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-border/50 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/photos/himal-logo-with-bg.png" 
                  alt="Himal Mobile Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className += ' bg-primary';
                      parent.innerHTML = '<span class="text-white font-bold text-sm">HM</span>';
                    }
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-foreground">Himal Mobile</h1>
                <p className="text-xs text-muted-foreground">Traders</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-colors font-medium ${activeSection === 'home' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-colors font-medium ${activeSection === 'services' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Our Services
              </button>

                     <button 
                onClick={() => scrollToSection('gallery')}
                className={`transition-colors font-medium ${activeSection === 'gallery' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Photo Gallery
              </button>

              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-colors font-medium ${activeSection === 'about' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                About Us
              </button>
           
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-colors font-medium ${activeSection === 'contact' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                Contact Us
              </button>
            </div>

            {/* Contact Button and Mobile Elements */}
            <div className="flex items-center space-x-4">
              {/* Phone and Visit Store for desktop */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">9856019988</p>
                  <p className="text-xs text-muted-foreground">Call Now</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/QBKSe6YD7HEovPs49"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Visit Store
                  </Button>
                </a>
              </div>

              {/* Phone and Visit Store for mobile */}
              <div className="flex md:hidden items-center space-x-2">
                <div className="text-right text-xs">
                  <p className="font-medium text-foreground">9856019988</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/QBKSe6YD7HEovPs49"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="sm"
                    className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300 text-xs px-3 py-1"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Visit
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    {/* Secondary Mobile Navigation Bar */}
    <div className="md:hidden fixed top-16 w-full bg-white/95 backdrop-blur-lg border-b border-border/50 shadow-sm z-40">
      <div className="w-full px-2">
        <div className="flex justify-between py-2 gap-1">
          <button 
            onClick={() => scrollToSection('home')}
            className={`flex-1 px-2 py-2 text-xs font-medium transition-all text-center ${
              activeSection === 'home' ? 'text-primary bg-primary/10 rounded-md' : 'text-foreground hover:text-primary hover:bg-primary/5 rounded-md'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`flex-1 px-2 py-2 text-xs font-medium transition-all text-center ${
              activeSection === 'services' ? 'text-primary bg-primary/10 rounded-md' : 'text-foreground hover:text-primary hover:bg-primary/5 rounded-md'
            }`}
          >
            Services
          </button>
            <button 
            onClick={() => scrollToSection('gallery')}
            className={`flex-1 px-2 py-2 text-xs font-medium transition-all text-center ${
              activeSection === 'gallery' ? 'text-primary bg-primary/10 rounded-md' : 'text-foreground hover:text-primary hover:bg-primary/5 rounded-md'
            }`}
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`flex-1 px-2 py-2 text-xs font-medium transition-all text-center ${
              activeSection === 'about' ? 'text-primary bg-primary/10 rounded-md' : 'text-foreground hover:text-primary hover:bg-primary/5 rounded-md'
            }`}
          >
            About
          </button>
        
          <button 
            onClick={() => scrollToSection('contact')}
            className={`flex-1 px-2 py-2 text-xs font-medium transition-all text-center ${
              activeSection === 'contact' ? 'text-primary bg-primary/10 rounded-md' : 'text-foreground hover:text-primary hover:bg-primary/5 rounded-md'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
    </>
  );
};