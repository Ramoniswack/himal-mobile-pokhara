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
  Star,
  Package
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "All Mobile Phones",
    description: "Latest smartphones from 15+ major brands including Apple, Samsung, Xiaomi, Vivo, Oppo, OnePlus, Honor, Infinix and more",
    features: ["Latest Models", "Brand Warranty", "Best Prices"]
  },
  {
    icon: Headphones,
    title: "Mobile Accessories",
    description: "Complete range of mobile accessories including cases, chargers, earphones, smartwatch, camera gadgets, tripod, earbuds and screen protectors",
    features: ["Original Accessories", "Wide Variety", "Quality Assured"]
  },
  {
    icon: Wrench,
    title: "Mobile Repair",
    description: "Expert mobile phone repair services for all brands including Apple iPhone repair with genuine parts and quick turnaround",
    features: ["Expert Technicians", "Genuine Parts", "Quick Service"]
  },
  {
    icon: RefreshCw,
    title: "Exchange Program",
    description: "Trade in your old phone for a new one with attractive exchange values (iPhone-Android or vice versa, old-new or vice versa)",
    features: ["Best Exchange Value", "Instant Processing", "Conditions Applied"]
  },
  {
    icon: CreditCard,
    title: "EMI Facilities",
    description: "Buy your dream phone with easy EMI options at 0% interest- choose zero down payment with a credit card or 40% down payment without one.",
    features: ["0% Interest Rate", "Credit Card: 0% Down", "No Credit Card: 40% Down", "Flexible Terms"]
  },
  {
    icon: Truck,
    title: "Delivery Service",
    description: "We do delivery service with cash on delivery option available for your convenience",
    features: ["Home Delivery", "Cash on Delivery", "Same Day Service"]
  },
  {
    icon: Package,
    title: "Wholesale Rates",
    description: "Genuine wholesale pricing for both bulk and single buy orders with competitive rates",
    features: ["Wholesale Pricing", "Bulk & Single Buy", "Business Support"]
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary fill-current" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
                {/* Trust Indicators */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Genuine Products</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">13+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">1M+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Mobile Brands</div>
          </div>
        </div>
      </div>
    </section>
  );
};