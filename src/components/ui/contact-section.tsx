import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Star
} from "lucide-react";
import storeFront from "@/assets/store-front.png";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
  </svg>
);

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Contact Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Visit Our Store Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Mahendrapool, Pokhara. Easy to find, easy to reach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground">9856019988</p>
                      <p className="text-muted-foreground">9802855855</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Pokhara Mobile Tower - Ground Floor<br />
                        Mahendrapool, Pokhara-09<br />
                        Kaski, Nepal
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/QBKSe6YD7HEovPs49" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow transition-colors text-sm"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Store Hours</h4>
                      <p className="text-muted-foreground">
                        Sun-Fri: 8:30 AM - 7:30 PM<br />
                        Saturday: 10:00 AM - 6:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.open('tel:9856019988', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary/20 text-primary hover:bg-primary/5"
                    onClick={() => window.open('https://wa.me/9779856019988', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Google Rating Section */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Facebook className="w-6 h-6 text-blue-600" />
                      <span className="font-medium">Facebook Updates</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr', '_blank')}
                    >
                      Follow
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Instagram className="w-6 h-6 text-pink-600" />
                      <span className="font-medium">Instagram Photos</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://www.instagram.com/himal_mobile_traders_pkr?igsh=MW5udWoxcXdsZTAxaQ==', '_blank')}
                    >
                      Follow
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TikTokIcon className="w-6 h-6 text-black" />
                      <span className="font-medium">TikTok Videos</span>
                    </div>
                    <a 
                      href='https://www.tiktok.com/@himal_mobile_traders?_t=ZS-8zTrpojmaD1&_r=1'
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                      >
                        Follow
                      </Button>
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Star className="w-6 h-6 text-yellow-600" />
                      <span className="font-medium">Rate us on Google</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
                      onClick={() => window.open('https://maps.app.goo.gl/QBKSe6YD7HEovPs49', '_blank')}
                    >
                      Rate Now
                    </Button>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Stay connected with our latest updates and mobile tips
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pokhara Mobile Tower Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src="/photos/pokhara-mobile-tower.png" 
                alt="Pokhara Mobile Communication Tower" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = storeFront;
                  target.alt = "Himal Mobile Traders Store Front";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Store Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-white/90 backdrop-blur-lg border-white/20">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-foreground mb-1">Pokhara Mobile Tower</h4>
                    <p className="text-sm text-muted-foreground">
                      Connected to the heart of mobile technology
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-3 shadow-glow animate-float">
              <Phone className="w-6 h-6" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Mahendrapool</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};