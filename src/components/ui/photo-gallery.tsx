import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Zap, 
  Award, 
  Users, 
  Smartphone, 
  Building, 
  Heart, 
  Handshake,
  X,
  Image,
  Grid,
  Images
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogClose,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import "./photo-gallery.css";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface PhotoCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  coverImage: string;
  description: string;
  photos: Photo[];
}

export const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [fade, setFade] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | null>(null);
  const [albumView, setAlbumView] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<"slider" | "albums">("slider");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const prevIndexRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

  const photoCategories: PhotoCategory[] = [
    {
      id: "store",
      name: "Our Store",
      icon: <Building className="w-5 h-5 text-primary mr-2" />,
      coverImage: "/photos/photo-of-store.jpeg",
      description: "Take a tour of our retail location in Mahendrapool, Pokhara",
      photos: photos.slice(0, 3)
    },
    {
      id: "team",
      name: "Our Team",
      icon: <Users className="w-5 h-5 text-primary mr-2" />,
      coverImage: "/photos/employee-family.png",
      description: "Meet our dedicated team of mobile experts",
      photos: photos.slice(3, 6)
    },
    {
      id: "products",
      name: "Products",
      icon: <Smartphone className="w-5 h-5 text-primary mr-2" />,
      coverImage: "/photos/apple-phones.jpeg",
      description: "Explore our wide range of mobile phones and accessories",
      photos: photos.slice(6, 10)
    },
    {
      id: "awards",
      name: "Awards & Recognition",
      icon: <Award className="w-5 h-5 text-primary mr-2" />,
      coverImage: "/photos/samsung-award.jpeg",
      description: "Our achievements and industry recognition over the years",
      photos: photos.slice(10, 14)
    },
    {
      id: "customers",
      name: "Customer Moments",
      icon: <Heart className="w-5 h-5 text-primary mr-2" />,
      coverImage: "/photos/customer-getting-gift-rewards.jpeg",
      description: "Special moments with our valued customers",
      photos: photos.slice(14, 17)
    },
    {
      id: "partnerships",
      name: "Brand Partnerships",
      icon: <Handshake className="w-5 h-5 text-primary mr-2" />,
      coverImage: "/photos/with-apple-team.jpeg",
      description: "Our partnerships with leading mobile brands",
      photos: photos.slice(17, 20)
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
    if (selectedCategory) {
      const categoryPhotos = selectedCategory.photos;
      const nextIndex = (currentIndex + 1) % categoryPhotos.length;
      handlePhotoChange(nextIndex);
    } else {
      handlePhotoChange((currentIndex + 1) % slideshowPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedCategory) {
      const categoryPhotos = selectedCategory.photos;
      const prevIndex = (currentIndex - 1 + categoryPhotos.length) % categoryPhotos.length;
      handlePhotoChange(prevIndex);
    } else {
      handlePhotoChange((currentIndex - 1 + slideshowPhotos.length) % slideshowPhotos.length);
    }
  };

  const goToPhoto = (index: number) => {
    if (index === currentIndex) return;
    handlePhotoChange(index);
  };

  const openCategory = (category: PhotoCategory) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setFade(false);
    setAlbumView(false);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
    setAlbumView(true);
  };

  const openPhotoDialog = (photo: Photo) => {
    setSelectedPhoto(photo);
    setDialogOpen(true);
  };

  // Filter slideshow-only photos - store and employee family photos
  const slideshowPhotos = photos.filter(photo => 
    photo.src.includes('photo-of-store.jpeg') || 
    photo.src.includes('shop-image.png') || 
    photo.src.includes('employee-family')
  );

  // Track if we're at the last photo of the slideshow
  const [isLastSlide, setIsLastSlide] = useState(false);

  // Update last slide state
  useEffect(() => {
    if (!selectedCategory) {
      setIsLastSlide(currentIndex === slideshowPhotos.length - 1);
    } else {
      setIsLastSlide(false);
    }
  }, [currentIndex, slideshowPhotos.length, selectedCategory]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || selectedCategory !== null) return;

    const interval = setInterval(() => {
      handlePhotoChange((currentIndex + 1) % slideshowPhotos.length);
    }, 2500);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, currentIndex, selectedCategory]);

  // Featured photos slider for mobile view
  const FeaturedSlider = () => (
    <>
      <Card className="overflow-hidden mb-8 border-primary/20 shadow-elegant">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 via-white/80 to-secondary/10">
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/5"></div>
            <div className="absolute inset-0 bg-[url('/photos/himal-logo.png')] bg-center bg-no-repeat bg-contain opacity-[0.03]"></div>
            <div className="w-full h-full flex items-center justify-center">
              {/* No photo frame for cleaner, edge-to-edge look */}
              <img
                src={selectedCategory ? selectedCategory.photos[currentIndex].src : slideshowPhotos[currentIndex].src}
                alt={selectedCategory ? selectedCategory.photos[currentIndex].alt : slideshowPhotos[currentIndex].alt}
                className={`w-full h-full transition-opacity duration-300 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}
                style={{ 
                  objectFit: 'cover', // Always use cover for slideshow photos
                  objectPosition: 'center center'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            
            {/* Overlay with photo info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {selectedCategory ? selectedCategory.photos[currentIndex].title : slideshowPhotos[currentIndex].title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg">
                    {selectedCategory ? selectedCategory.photos[currentIndex].description : slideshowPhotos[currentIndex].description}
                  </p>
                </div>
                
                {/* View Albums button - only show at the last slide */}
                {isLastSlide && !selectedCategory && !isMobile && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-4 md:mt-0 bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30"
                    onClick={() => setViewMode("albums")}
                  >
                    <Grid className="w-4 h-4 mr-2" />
                    View All Albums
                  </Button>
                )}
                
                {/* Mobile View Albums button */}
                {isLastSlide && !selectedCategory && isMobile && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-4 w-full bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30"
                    onClick={() => {
                      const albumsSection = document.getElementById('photo-albums-section');
                      if (albumsSection) {
                        albumsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Grid className="w-4 h-4 mr-2" />
                    Browse All Albums
                  </Button>
                )}
              </div>
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

            {/* Auto-play toggle - only show in main slider */}
            {!selectedCategory && (
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
            )}

            {/* Back button - only show in category view */}
            {selectedCategory && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 left-4 bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 border-white/20"
                onClick={closeCategory}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Albums
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Thumbnail Navigation - Scrollable */}
      <div className="relative mb-8">
        <div className="flex justify-center space-x-3 bg-card/50 backdrop-blur-sm rounded-full p-2 max-w-full overflow-x-auto no-scrollbar pb-3 mx-auto">
          {(selectedCategory ? selectedCategory.photos : slideshowPhotos).map((photo, index) => (
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
          Photo {currentIndex + 1} of {selectedCategory ? selectedCategory.photos.length : slideshowPhotos.length}
        </p>
      </div>
    </>
  );

  // Category View
  const CategoryView = () => (
    <div className="space-y-16">
      {selectedCategory ? (
        <>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center">
              {selectedCategory.icon}
              {selectedCategory.name}
            </h3>
            <Button 
              variant="outline" 
              size="sm"
              onClick={closeCategory}
              className="hidden md:flex" // Hide on mobile as we have sticky buttons
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Albums
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {selectedCategory.photos.map((photo) => (
              <Card 
                key={photo.id} 
                className="overflow-hidden border-primary/10 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => openPhotoDialog(photo)}
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

          {/* Bottom back button for mobile - shows after all photos */}
          {isMobile && (
            <div className="flex justify-center pt-4 pb-8">
              <Button 
                onClick={closeCategory}
                className="bg-primary text-white"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to All Albums
              </Button>
            </div>
          )}
        </>
      ) : (
        // Album Categories Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photoCategories.map((category) => (
            <Card 
              key={category.id}
              className="overflow-hidden border-primary/10 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openCategory(category)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/10 opacity-50"></div>
                  <img
                    src={category.coverImage}
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center mb-1 text-white">
                      {category.icon}
                      <h3 className="font-bold text-lg">{category.name}</h3>
                    </div>
                    <p className="text-white/90 text-sm">{category.description}</p>
                    <div className="mt-3 flex items-center text-white/80 text-xs">
                      <Images className="w-3 h-3 mr-1" />
                      <span>{category.photos.length} photos</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
  
  return (
    <section className="pt-28 md:pt-32 pb-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Explore Our Store
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through our store, meet our team, and see what makes us special
          </p>
          
          {/* View Toggle - Only show on desktop */}
          <div className="hidden md:flex justify-center mt-8 space-x-4">
            <Button
              variant={viewMode === "slider" ? "default" : "outline"}
              size="sm"
              className={viewMode === "slider" ? "bg-primary text-white" : ""}
              onClick={() => setViewMode("slider")}
            >
              <Images className="w-4 h-4 mr-2" />
              Slideshow
            </Button>
            <Button
              variant={viewMode === "albums" ? "default" : "outline"}
              size="sm"
              className={viewMode === "albums" ? "bg-primary text-white" : ""}
              onClick={() => setViewMode("albums")}
            >
              <Grid className="w-4 h-4 mr-2" />
              Albums
            </Button>
          </div>
        </div>

          <div className="max-w-6xl mx-auto">
          {/* Mobile View - Always show the main slider and thumbnails first */}
          {isMobile && (
            <>
              {/* Main featured slider */}
              <div className="pb-4">
                <FeaturedSlider />
              </div>
              
              {/* Show albums below */}
              <div id="photo-albums-section" className="pt-6 border-t border-border/40">
                <h3 className="text-xl font-bold mb-6 text-center">Photo Albums</h3>
                
                {/* Fixed back button when viewing a category on mobile */}
                {selectedCategory && isMobile && (
                  <div className="sticky top-32 z-30 flex justify-center mb-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="shadow-md bg-white/90 backdrop-blur-sm border-primary/20"
                      onClick={closeCategory}
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Back to Albums
                    </Button>
                  </div>
                )}
                
                <CategoryView />
              </div>
            </>
          )}
          
          {/* Desktop View - Toggle between modes */}
          {!isMobile && (
            <div className="transition-all duration-300 ease-in-out">
              {viewMode === "slider" ? (
                <FeaturedSlider />
              ) : (
                <CategoryView />
              )}
            </div>
          )}          {/* Lightbox dialog for photo viewing */}
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="max-w-5xl w-[95vw] p-1 sm:p-2 md:p-6 bg-background/95 backdrop-blur-md">
              <DialogHeader>
                <DialogTitle className="text-lg text-left">
                  {selectedPhoto?.title}
                </DialogTitle>
              </DialogHeader>
              {selectedPhoto && (
                <div className="flex flex-col items-center justify-center">
                  <div className="photo-frame-fullscreen">
                    <img
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      className="max-w-full max-h-[70vh]"
                      style={{ objectFit: 'contain' }}
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        // Smart image fitting for dialog view
                        const aspectRatio = img.naturalWidth / img.naturalHeight;
                        if (aspectRatio > 1.5) {
                          // Very wide images - use cover with center focus
                          img.style.objectFit = 'cover';
                          img.style.objectPosition = 'center center';
                          img.style.maxHeight = '65vh';
                        } else if (aspectRatio < 0.7) {
                          // Very tall images - keep contain but limit height
                          img.style.objectFit = 'contain';
                          img.style.maxHeight = '75vh';
                        } else {
                          // Balanced aspect ratio - use contain for best view
                          img.style.objectFit = 'contain';
                          img.style.maxHeight = '70vh';
                        }
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <p className="text-center mt-4 text-muted-foreground">
                    {selectedPhoto.description}
                  </p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
