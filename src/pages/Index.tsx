import { Navigation } from "@/components/ui/navigation";
import { HeroSectionUpdated } from "@/components/ui/hero-section-updated";
import { ServicesSection } from "@/components/ui/services-section";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import { AboutSection } from "@/components/ui/about-section";
import { FacebookPosts } from "@/components/ui/facebook-posts";
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
      
      <main className="pt-16 md:pt-16">
        {/* Additional padding for mobile secondary navbar */}
        <div className="md:hidden h-12"></div>
        
        <section id="home">
          <HeroSectionUpdated onContactClick={scrollToContact} />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="gallery">
          <PhotoGallery />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        {/* <section id="facebook">
          <FacebookPosts />
        </section> */}
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Himal Mobile Traders</h3>
            <p className="text-secondary-foreground/80">Your trusted mobile partner in Pokhara</p>
          </div>
          <div className="text-sm text-secondary-foreground/60">
            <p>&copy; 2024 Himal Mobile Traders. All rights reserved.</p>
            <p className="mt-1">Mahendrapool, Pokhara | 9856019988 | 9802855855</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
