import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { ServicesSection } from "@/components/ui/services-section";
import { AboutSection } from "@/components/ui/about-section";
import { ContactSection } from "@/components/ui/contact-section";

const Index = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onContactClick={scrollToContact} />
      
      <main>
        <section id="home">
          <HeroSection onContactClick={scrollToContact} />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Himal Mobile Traders</h3>
            <p className="text-background/80">Your trusted mobile partner in Pokhara</p>
          </div>
          <div className="text-sm text-background/60">
            <p>&copy; 2024 Himal Mobile Traders. All rights reserved.</p>
            <p className="mt-1">Mahendrapool, Pokhara | 9856019988 | 9802855855</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
