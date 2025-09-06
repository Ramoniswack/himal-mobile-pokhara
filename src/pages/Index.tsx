import { Navigation } from "@/components/ui/navigation";
import { HeroSectionUpdated } from "@/components/ui/hero-section-updated";
import { ServicesSection } from "@/components/ui/services-section";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import { AboutSection } from "@/components/ui/about-section";
import { FacebookPosts } from "@/components/ui/facebook-posts";
import { ContactSection } from "@/components/ui/contact-section";
import { PageSeo } from "@/components/ui/seo-booster";

const Index = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page-specific SEO */}
      <PageSeo
        title="Himal Mobile Traders | #1 iPhone & Samsung Shop in Pokhara | EMI Available"
        description="Buy latest iPhone 15, Samsung S24 & more with EMI facility in Pokhara & Mahendrapool. Official warranty, repairs & accessories at best prices in Nepal. Visit our store today!"
        keywords={[
          // Primary Pokhara keywords
          'iPhone price in Pokhara',
          'Mobile shop in Pokhara',
          'Samsung mobile shop Pokhara',
          'Mobile repair Pokhara',
          'EMI mobile phones Pokhara',
          'iPhone 15 Pro Max Pokhara',
          'Samsung S24 Ultra Pokhara',
          
          // Primary Mahendrapool keywords
          'Mobile shop in Mahendrapool',
          'iPhone price in Mahendrapool',
          'Best mobile store Mahendrapool',
          'Phone accessories Mahendrapool',
          
          // Primary Nepal keywords
          'iPhone price in Nepal',
          'Samsung S24 Ultra price Nepal',
          'EMI mobile phones Nepal',
          'Mobile phone dealer Nepal',
          
          // Product specific
          'iPhone 15 Pro Max price',
          'Samsung Galaxy S24 Ultra',
          'iPhone 14 Pro price',
          'Samsung Galaxy Z Fold 5',
          'Xiaomi phones',
          
          // Service specific
          'Phone repair service',
          'iPhone screen replacement',
          'Samsung battery replacement',
          'Original phone accessories',
          
          // Long-tail keywords
          'Best place to buy iPhone in Pokhara',
          'Official warranty mobile phones',
          'Mobile phone EMI without down payment'
        ]}
        image="/photos/shop-image.png"
      />

      <Navigation onContactClick={scrollToContact} />

      <main className="pt-16 md:pt-16">
        {/* Additional padding for mobile secondary navbar */}
        <div className="md:hidden h-14"></div>

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

      {/* Footer - SEO Enhanced */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Himal Mobile Traders</h3>
            <p className="text-secondary-foreground/80">Your trusted mobile partner in Pokhara and Mahendrapool</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left text-sm">
            <div>
              <h4 className="font-semibold mb-2">Popular Brands</h4>
              <ul className="space-y-1 text-secondary-foreground/70">
                <li>iPhone in Pokhara</li>
                <li>Samsung in Mahendrapool</li>
                <li>Xiaomi in Nepal</li>
                <li>OnePlus in Pokhara</li>
                <li>Vivo and OPPO</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Our Services</h4>
              <ul className="space-y-1 text-secondary-foreground/70">
                <li>Mobile Phone EMI Options</li>
                <li>Phone Repair in Pokhara</li>
                <li>Screen Replacement</li>
                <li>Original Accessories</li>
                <li>Phone Software Service</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Find Us</h4>
              <p className="text-secondary-foreground/70">Mahendrapool, Pokhara, Nepal</p>
              <p className="text-secondary-foreground/70">Phone: 9856019988 | 9802855855</p>
              <p className="text-secondary-foreground/70">Email: info@himalmobile.com</p>
              <p className="text-secondary-foreground/70">Open: 9am - 8pm (Sun-Fri)</p>
            </div>
          </div>
          
          <div className="text-sm text-secondary-foreground/60 border-t border-secondary-foreground/20 pt-4">
            <p>&copy; 2025 Himal Mobile Traders. All rights reserved.</p>
            <p className="mt-3 text-xs">
              <span className="font-medium">Popular Searches: </span>
              iPhone Pokhara, Samsung Galaxy Mahendrapool, Mobile Shop Nepal, Phone Repair Pokhara, Mobile Accessories Mahendrapool, EMI Mobile Phones Nepal, iPhone 15 Pro Max Price, Samsung S24 Ultra, Xiaomi Phones, Original Phone Accessories
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
