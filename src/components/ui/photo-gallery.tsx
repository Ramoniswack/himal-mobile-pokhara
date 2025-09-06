import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Camera, Zap } from "lucide-react";
import { useState, useEffect } from "react";

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

  const photos: Photo[] = [
    {
      id: 1,
      src: "/photos/shop-image.png",
      alt: "Shop Front View",
      title: "Our Store Front",
      description: "Located in the heart of Mahendrapool, Pokhara"
    },
    {
      id: 2,
      src: "/photos/owner.png",
      alt: "Store Owner",
      title: "Meet Our Owner",
      description: "Dedicated to providing excellent service"
    },
    {
      id: 3,
      src: "/photos/employee-family.png",
      alt: "Employee Family",
      title: "Our Team",
      description: "Experienced professionals at your service"
    },
    {
      id: 4,
      src: "/photos/employee-family2.png",
      alt: "Team Members",
      title: "Expert Staff",
      description: "Knowledgeable about all mobile brands"
    },
    {
      id: 5,
      src: "/photos/employee-family3.png",
      alt: "Service Team",
      title: "Repair Specialists",
      description: "Quick and reliable repair services"
    },
    {
      id: 6,
      src: "/photos/employee-family4.png",
      alt: "Support Team",
      title: "Customer Support",
      description: "Always ready to help you"
    }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, photos.length]);

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
              <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden">
                <img
                  src={photos[currentIndex].src}
                  alt={photos[currentIndex].alt}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                
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

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-card/50 backdrop-blur-sm rounded-full p-2 max-w-full overflow-x-auto">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => goToPhoto(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-primary shadow-glow scale-110'
                      : 'border-transparent hover:border-primary/50 scale-95 opacity-70'
                  }`}
                >
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
          <div className="text-center">
            <p className="text-muted-foreground">
              Photo {currentIndex + 1} of {photos.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
