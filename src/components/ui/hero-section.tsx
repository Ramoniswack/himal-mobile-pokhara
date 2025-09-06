import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";
import storeInterior from "@/assets/store-interior.png";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-secondary/30"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white drop-shadow-lg">Himal</span>
                <span className="block text-white/95 drop-shadow-lg">Mobile</span>
                <span className="block text-white/90 drop-shadow-lg">Traders</span>
              </h1>
              {/* Nepali Text */}
              <div className="text-2xl lg:text-3xl font-bold text-white/90 drop-shadow-lg" style={{ fontFamily: '"Noto Sans Devanagari", "Mukti", Arial, sans-serif' }}>
                हिमाल मोबाइल ट्रेडर्स
              </div>
              <p className="text-xl lg:text-2xl text-white/95 max-w-lg drop-shadow-md">
                Your trusted mobile phone destination in Mahendrapool, Pokhara
              </p>
            </div>

            {/* Owner Info Card */}
            <Card className="bg-white/15 backdrop-blur-lg border-white/25 p-6 max-w-md shadow-elegant">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/30 overflow-hidden bg-white/10">
                  <img 
                    src="/photos/owner.png" 
                    alt="Roshan Raj Tiwari Himal - Owner" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className += ' bg-white/20';
                        parent.innerHTML = '<span class="text-white font-semibold text-xs">Owner</span>';
                      }
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg drop-shadow-sm">Roshan Raj Tiwari Himal</h3>
                  <p className="text-white/85 drop-shadow-sm">Owner & Proprietor</p>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/95 shadow-lg font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
                onClick={onContactClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/95 shadow-lg font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://maps.app.goo.gl/QBKSe6YD7HEovPs49', '_blank')}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Visit Store
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-white/95">
              <div className="flex items-center space-x-2 drop-shadow-sm">
                <Clock className="w-5 h-5" />
                <span>Open 7 Days</span>
              </div>
              <div className="flex items-center space-x-2 drop-shadow-sm">
                <MapPin className="w-5 h-5" />
                <span>Mahendrapool, Pokhara</span>
              </div>
            </div>
          </div>

          {/* Right Content - Clean and Balanced - Mobile Responsive */}
          <div className="relative">
            {/* Main Store Image - Bigger and Mobile Responsive */}
            <div className="relative overflow-hidden rounded-2xl shadow-elegant animate-float">
              <img 
                src="/photos/shop-image.png" 
                alt="Himal Mobile Traders Store Front" 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-[400px] md:h-[500px] bg-primary rounded-2xl flex items-center justify-center"><span class="text-white text-lg font-semibold">Store Front Photo</span></div>';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              
              {/* Store Name Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg md:text-xl font-bold drop-shadow-lg">हिमाल मोबाइल ट्रेडर्स</h3>
                <p className="text-xs md:text-sm opacity-90 drop-shadow-md">Mahendrapool, Pokhara</p>
              </div>
            </div>
            
            {/* Special Offers Banner - Mobile Responsive */}
            <Card className="mt-4 border-0 p-3 md:p-4 shadow-lg transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, #FDF0D5 0%, #F4E4BC 100%)' }}>
              <div className="text-center">
                <h4 className="font-bold text-base md:text-lg mb-1 text-red-800">Special Offers!</h4>
                <p className="text-xs md:text-sm text-red-700 mb-2">iPhone 16 Series with EMI</p>
                <div className="flex justify-center space-x-2 text-xs">
                  <span className="bg-red-100 text-red-800 px-2 md:px-3 py-1 rounded font-medium border border-red-200">0% Interest</span>
                  <span className="bg-red-100 text-red-800 px-2 md:px-3 py-1 rounded font-medium border border-red-200">Free Case</span>
                </div>
              </div>
            </Card>
            
            {/* Simple Floating Stats - Mobile Responsive */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-3 md:-left-6 bg-white rounded-xl p-2 md:p-4 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-primary">1000+</div>
                <div className="text-xs md:text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
            
            <div className="absolute -top-4 md:-top-6 -right-3 md:-right-6 bg-white rounded-xl p-2 md:p-4 shadow-elegant animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-lg md:text-2xl font-bold text-primary">5+</div>
                <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};