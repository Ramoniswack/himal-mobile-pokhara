import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Wrench, 
  RefreshCw, 
  CreditCard, 
  Headphones, 
  Shield,
  Truck,
  Star
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "All Mobile Phones",
    description: "Latest smartphones from all major brands including Apple, Samsung, Xiaomi, Vivo, Oppo, and more",
    features: ["Latest Models", "Brand Warranty", "Best Prices"]
  },
  {
    icon: Headphones,
    title: "Mobile Accessories",
    description: "Complete range of mobile accessories including cases, chargers, earphones, and screen protectors",
    features: ["Original Accessories", "Wide Variety", "Quality Assured"]
  },
  {
    icon: Wrench,
    title: "Mobile Repair",
    description: "Expert mobile phone repair services for all brands with genuine parts and quick turnaround",
    features: ["Expert Technicians", "Genuine Parts", "Quick Service"]
  },
  {
    icon: RefreshCw,
    title: "Exchange Program",
    description: "Trade in your old phone for a new one with attractive exchange values and instant processing",
    features: ["Best Exchange Value", "Instant Processing", "Any Condition"]
  },
  {
    icon: CreditCard,
    title: "EMI Facilities",
    description: "Buy your dream phone with easy EMI options and flexible payment plans",
    features: ["0% Interest Options", "Flexible Terms", "Quick Approval"]
  },
  {
    icon: Truck,
    title: "Wholesale Rates",
    description: "Genuine wholesale pricing for bulk orders and business customers",
    features: ["Wholesale Pricing", "Bulk Orders", "Business Support"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Complete Mobile Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From buying the latest smartphones to professional repairs, we offer comprehensive mobile services 
            at genuine wholesale rates in Pokhara
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-3 h-3 text-primary fill-current" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Genuine Products</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
            <div className="text-xs md:text-sm text-muted-foreground">Customer Support</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">1000+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};