import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Camera, Zap, Award, Users, Smartphone, Building, Heart, Handshake } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import "./photo-gallery.css";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [fade, setFade] = useState(false);
  const prevIndexRef = useRef(0);

  const photos: Photo[] = [
    // Store Photos
    {
      id: 1,
      src: "/photos/photo-of-store.jpeg",
      alt: "Store Front View",
      title: "Our Store Front",
      description: "Located in the heart of Mahendrapool, Pokhara"
    },
    {
      id: 2,
      src: "/photos/shop-image.png",
      alt: "Shop Front View Alternate",
      title: "Himal Mobile Traders",
      description: "Your trusted mobile phone destination"
    },
    {
      id: 3,
      src: "/photos/pokhara-mobile-tower.png",
      alt: "Pokhara Mobile Tower",
      title: "Pokhara Mobile Tower",
      description: "We're located in this landmark building"
    },
    
    // Owner and Team Photos
    {
      id: 4,
      src: "/photos/owner's-photo.jpeg",
      alt: "Store Owner",
      title: "Meet Our Owner",
      description: "Roshan Raj Tiwari - Owner & Proprietor"
    },
    {
      id: 5,
      src: "/photos/employee-family.png",
      alt: "Employee Family",
      title: "Our Team",
      description: "Experienced professionals at your service"
    },
    {
      id: 6,
      src: "/photos/employee-family2.png",
      alt: "Team Members",
      title: "Expert Staff",
      description: "Knowledgeable about all mobile brands"
    },
    
    // Product Photos
    {
      id: 7,
      src: "/photos/apple-phones.jpeg",
      alt: "Apple iPhones",
      title: "Latest Apple iPhones",
      description: "Authorized dealer with official warranty"
    },
    {
      id: 8,
      src: "/photos/phones.jpeg",
      alt: "Phone Collection",
      title: "Wide Range of Phones",
      description: "All brands and models available"
    },
    {
      id: 9,
      src: "/photos/set-of-phones.jpeg",
      alt: "Various Phone Models",
      title: "Featured Phone Selection",
      description: "Best sellers and popular models"
    },
    {
      id: 10,
      src: "/photos/second-hand-iphones.jpeg",
      alt: "Second Hand iPhones",
      title: "Premium Used iPhones",
      description: "Quality checked pre-owned devices"
    },
    
    // Awards and Recognitions
    {
      id: 11,
      src: "/photos/best-dealer-award-in-korea-given-by-ceo-samsung.jpeg.jpeg",
      alt: "Samsung Dealer Award",
      title: "Best Dealer Award",
      description: "Presented by Samsung CEO in Korea"
    },
    {
      id: 12,
      src: "/photos/samsung-award.jpeg",
      alt: "Samsung Recognition",
      title: "Samsung Partner Award",
      description: "Recognized as a premium Samsung partner"
    },
    {
      id: 13,
      src: "/photos/top-notch-champion-award.jpeg",
      alt: "Champion Award",
      title: "Top-Notch Champion",
      description: "Excellence in mobile retail and service"
    },
    {
      id: 14,
      src: "/photos/top-notch-champion-award-trophy.jpeg",
      alt: "Champion Trophy",
      title: "Champion Award Trophy",
      description: "Recognition of our outstanding performance"
    },
    
    // Customer Engagement
    {
      id: 15,
      src: "/photos/customer-getting-gift-rewards.jpeg",
      alt: "Customer Gifts",
      title: "Customer Rewards",
      description: "We love to reward our loyal customers"
    },
    {
      id: 16,
      src: "/photos/customer-getting-gift-rewards2.jpeg",
      alt: "Customer Rewards",
      title: "Special Customer Gifts",
      description: "Celebrating our customers with special rewards"
    },
    {
      id: 17,
      src: "/photos/our-customer-winning-bumper-prize-scooter.JPG",
      alt: "Bumper Prize Winner",
      title: "Bumper Prize - Scooter!",
      description: "One of our lucky customers winning a scooter"
    },
    
    // Brand Partnerships
    {
      id: 18,
      src: "/photos/with-apple-team.jpeg",
      alt: "Apple Partnership",
      title: "Apple Partnership",
      description: "Working closely with the Apple team"
    },
    {
      id: 19,
      src: "/photos/with-samsumg-team.jpeg",
      alt: "Samsung Partnership",
      title: "Samsung Partnership",
      description: "Collaboration with Samsung team"
    },
    {
      id: 20,
      src: "/photos/with-xiaomi-team.jpeg",
      alt: "Xiaomi Partnership",
      title: "Xiaomi Partnership",
      description: "Partnered with Xiaomi for latest products"
    }
  ];

  const handlePhotoChange = (newIndex: number) => {
    setFade(true);
    prevIndexRef.current = currentIndex;
    
    // Short delay to allow fade out before changing index
    setTimeout(() => {
      setCurrentIndex(newIndex);
      // Allow a short time for new image to load before fading back in
      setTimeout(() => setFade(false), 100);
    }, 200);
  };

  const nextPhoto = () => {
    handlePhotoChange((currentIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    handlePhotoChange((currentIndex - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    if (index === currentIndex) return;
    handlePhotoChange(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handlePhotoChange((currentIndex + 1) % photos.length);
    }, 2500);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, currentIndex, photos.length]);

  // Group photos by category
  const photoCategories = [
    {
      name: "Our Store",
      icon: <Building className="w-5 h-5 text-primary mr-2" />,
      photos: photos.slice(0, 3)
    },
    {
      name: "Our Team",
      icon: <Users className="w-5 h-5 text-primary mr-2" />,
      photos: photos.slice(3, 6)
    },
    {
      name: "Products",
      icon: <Smartphone className="w-5 h-5 text-primary mr-2" />,
      photos: photos.slice(6, 10)
    },
    {
      name: "Awards & Recognition",
      icon: <Award className="w-5 h-5 text-primary mr-2" />,
      photos: photos.slice(10, 14)
    },
    {
      name: "Customer Moments",
      icon: <Heart className="w-5 h-5 text-primary mr-2" />,
      photos: photos.slice(14, 17)
    },
    {
      name: "Brand Partnerships",
      icon: <Handshake className="w-5 h-5 text-primary mr-2" />,
      photos: photos.slice(17, 20)
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Explore Our Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through our store, meet our team, and see what makes us special
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Photo Display */}
          <Card className="overflow-hidden mb-8 border-primary/20 shadow-elegant">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 via-white/80 to-secondary/10">
                <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/5"></div>
                <div className="absolute inset-0 bg-[url('/photos/himal-logo.png')] bg-center bg-no-repeat bg-contain opacity-[0.03]"></div>
                <div className="w-full h-full flex items-center justify-center p-4">
                  <div className="photo-frame">
                    <img
                      src={photos[currentIndex].src}
                      alt={photos[currentIndex].alt}
                      className={`max-w-full max-h-full object-contain transition-opacity duration-300 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
                      style={{ maxHeight: '500px' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
                
                {/* Overlay with photo info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {photos[currentIndex].title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {photos[currentIndex].description}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border-white/20"
                  onClick={prevPhoto}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border-white/20"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Auto-play toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border-white/20"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                >
                  {isAutoPlaying ? (
                    <Zap className="w-4 h-4 mr-2" />
                  ) : (
                    <Zap className="w-4 h-4 mr-2 opacity-50" />
                  )}
                  {isAutoPlaying ? 'Auto' : 'Manual'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Thumbnail Navigation - Scrollable */}
          <div className="relative mb-8">
            <div className="flex space-x-2 bg-card/50 backdrop-blur-sm rounded-full p-2 max-w-full overflow-x-auto no-scrollbar pb-3">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => goToPhoto(index)}
                  className={`relative flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-primary shadow-glow scale-110'
                      : 'border-transparent hover:border-primary/50 scale-95 opacity-70'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/10"></div>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Photo Counter */}
          <div className="text-center mb-12">
            <p className="text-muted-foreground">
              Photo {currentIndex + 1} of {photos.length}
            </p>
          </div>

          {/* Photo Categories */}
          <div className="space-y-12">
            {photoCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground border-l-4 border-primary pl-4 flex items-center">
                  {category.icon}
                  {category.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {category.photos.map((photo) => (
                    <Card 
                      key={photo.id} 
                      className="overflow-hidden border-primary/10 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      onClick={() => goToPhoto(photos.findIndex(p => p.id === photo.id))}
                    >
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/10 opacity-50"></div>
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/placeholder.svg";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <h4 className="text-white font-semibold">{photo.title}</h4>
                            <p className="text-white/80 text-sm">{photo.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
