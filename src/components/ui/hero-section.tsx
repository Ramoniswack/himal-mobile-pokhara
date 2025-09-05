import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";
import storeInterior from "@/assets/store-interior.png";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Himal</span>
                <span className="block text-white/90">Mobile</span>
                <span className="block text-white/80">Traders</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-lg">
                Your trusted mobile phone destination in Mahendrapool, Pokhara
              </p>
            </div>

            {/* Owner Info Card */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 max-w-md">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border border-white/30 overflow-hidden">
                  <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-xs">Owner</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Roshan Raj Tiwari Himal</h3>
                  <p className="text-white/80">Owner & Proprietor</p>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant"
                onClick={onContactClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Visit Store
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Open 7 Days</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Mahendrapool, Pokhara</span>
              </div>
            </div>
          </div>

          {/* Right Content - Store Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant animate-float">
              <div className="w-full h-96 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Store Interior Photo</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-elegant animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};