import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Award, 
  Users, 
  TrendingUp,
  Smartphone,
  DollarSign,
  Shield,
  Heart
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Wholesale Pricing",
    description: "Get genuine wholesale rates that save you money on every purchase"
  },
  {
    icon: Shield,
    title: "100% Authentic",
    description: "All products come with original warranty and authenticity guarantee"
  },
  {
    icon: Users,
    title: "Trusted by Millions",
    description: "Over 1M+ satisfied customers trust us for their mobile needs"
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority with 24/7 customer support"
  }
];

const achievements = [
  {
    icon: Award,
    number: "13+",
    label: "Years of Excellence",
    description: "Serving Pokhara with dedication"
  },
  {
    icon: Star,
    number: "1M+",
    label: "Happy Customers",
    description: "Trust built over years"
  },
  {
    icon: Smartphone,
    number: "15+",
    label: "Mobile Brands",
    description: "All major brands available"
  },
  {
    icon: TrendingUp,
    number: "100%",
    label: "Satisfaction Rate",
    description: "Customer happiness guaranteed"
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Why Choose Himal Mobile Traders?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Pokhara, we've been serving the community 
            for over 13+ years with genuine mobile solutions and exceptional customer service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card className="bg-secondary text-secondary-foreground overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-white/10"></div>
          </div>
          
          <CardContent className="p-8 md:p-10 relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Our Achievements
              </h3>
              <p className="text-secondary-foreground/90 text-base md:text-lg max-w-2xl mx-auto">
                Numbers that speak for our commitment to excellence and customer satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                    <achievement.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold mb-1 text-secondary-foreground/90">
                    {achievement.label}
                  </div>
                  <div className="text-secondary-foreground/70 text-xs">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Owner Message */}
        <div className="mt-10 md:mt-12 text-center">
          <Card className="max-w-4xl mx-auto border-border/50">
            <CardContent className="p-8 md:p-10">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden border-4 border-primary/20">
                  <img 
                    src="/photos/owner.png" 
                    alt="Roshan Raj Tiwari - Owner" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.className += ' bg-primary';
                        parent.innerHTML = '<span class="text-white font-bold text-lg">RT</span>';
                      }
                    }}
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">
                  Roshan Raj Tiwari
                </h4>
                <p className="text-muted-foreground text-sm">Owner & Proprietor</p>
              </div>
              
              <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
                "At Himal Mobile Traders, we believe in providing not just products, but complete mobile solutions. 
                Our commitment to genuine pricing, quality service, and customer satisfaction has made us 
                the trusted choice for mobile needs in Pokhara."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};