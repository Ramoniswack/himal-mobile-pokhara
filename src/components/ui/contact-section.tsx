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
  MessageCircle
} from "lucide-react";
import storeFront from "@/assets/store-front.png";

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
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground">9856019988</p>
                      <p className="text-muted-foreground">9802855855</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Mahendrapool, Pokhara<br />
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
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Store Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Sunday: 9:00 AM - 8:00 PM<br />
                        Always open for customer service
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button className="bg-gradient-primary hover:shadow-glow">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Section */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Facebook className="w-6 h-6 text-blue-600" />
                      <span className="font-medium">Facebook Updates</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground text-center">
                      Facebook posts and updates will be displayed here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Store Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={storeFront} 
                alt="Himal Mobile Traders Store Front" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Store Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-white/90 backdrop-blur-lg border-white/20">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-foreground mb-1">Himal Mobile Traders</h4>
                    <p className="text-sm text-muted-foreground">
                      Your trusted mobile partner in Pokhara
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