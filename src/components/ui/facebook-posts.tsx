import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  Share,
  Facebook,
  ExternalLink,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Star,
  Play
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
  </svg>
);

// Google Icon Component
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

interface FacebookPostProps {
  id?: string;
  type: 'photo' | 'video' | 'status';
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  postUrl?: string;
  imageUrl?: string;
  created_time?: string;
}

// Helper function to calculate relative time
const getRelativeTime = (dateString: string): string => {
  const now = new Date();
  const postDate = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return postDate.toLocaleDateString();
};

const FacebookPostCard = ({ type, caption, likes, comments, shares, timestamp, postUrl, imageUrl }: FacebookPostProps) => {
  const openPost = () => {
    if (postUrl) {
      window.open(postUrl, '_blank');
    }
  };

  return (
    <Card className="flex-shrink-0 w-80 border-primary/20 hover:shadow-elegant transition-all duration-300 bg-card">
      <CardContent className="p-0">
        {(type === 'photo' || type === 'video') && (
          <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted/20">
            {type === 'photo' ? (
              <div className="w-full h-full bg-primary flex items-center justify-center relative">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt="Facebook post" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="text-center text-white p-4"><div class="text-lg font-semibold">📱</div><span class="text-sm">Facebook Photo Post</span></div>';
                      }
                    }}
                  />
                ) : (
                  <div className="text-center text-white p-8">
                    <div className="text-2xl mb-2">📱</div>
                    <span className="text-sm">Facebook Photo Post</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full h-full bg-secondary flex items-center justify-center relative">
                <div className="text-center text-white p-8">
                  <Play className="w-12 h-12 mx-auto mb-2" />
                  <span className="text-sm">Facebook Video</span>
                </div>
                {postUrl && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer" onClick={openPost}>
                    <Play className="w-16 h-16 text-white opacity-80" />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
        <div className="p-4 space-y-3">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center">
              <Facebook className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Himal Mobile Traders</p>
              <p className="text-xs text-muted-foreground">{timestamp}</p>
            </div>
          </div>
          
          <p className="text-sm text-foreground leading-relaxed line-clamp-3">{caption}</p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border/50">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4 text-primary" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share className="w-4 h-4" />
                <span>{shares}</span>
              </div>
            </div>
          </div>

          {postUrl && (
            <Button
              size="sm"
              className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
              onClick={openPost}
            >
              View on Facebook
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export const FacebookPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<FacebookPostProps[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Fetch real Facebook posts from JSON data
  useEffect(() => {
    const loadFacebookPosts = async () => {
      setIsLoading(true);
      
      try {
        // Fetch from local JSON file (this can be updated with real Facebook data)
        const response = await fetch('/data/facebook-posts.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Facebook posts');
        }
        
        const postsData = await response.json();
        
        // Process posts and calculate relative timestamps
        const processedPosts: FacebookPostProps[] = postsData.map((post: any) => ({
          ...post,
          timestamp: post.created_time ? getRelativeTime(post.created_time) : post.timestamp
        }));
        
        // Sort by creation time (newest first)
        const sortedPosts = processedPosts.sort((a, b) => {
          const timeA = a.created_time ? new Date(a.created_time).getTime() : 0;
          const timeB = b.created_time ? new Date(b.created_time).getTime() : 0;
          return timeB - timeA;
        });
        
        setPosts(sortedPosts.slice(0, 4)); // Show only the latest 4 posts
        
      } catch (error) {
        console.error('Error fetching Facebook posts:', error);
        
        // Fallback to static posts if fetch fails
        const fallbackPosts: FacebookPostProps[] = [
          {
            type: 'status',
            caption: '📱 Unable to load latest Facebook posts. Please visit our Facebook page directly for the most recent updates!\n\nHimal Mobile Traders\nMahendrapool, Pokhara\n📞 9856019988, 9802855855',
            likes: 0,
            comments: 0,
            shares: 0,
            timestamp: 'Error loading',
            postUrl: 'https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr'
          }
        ];
        
        setPosts(fallbackPosts);
      } finally {
        setIsLoading(false);
      }
    };

    loadFacebookPosts();
    
    // Refresh posts every 5 minutes
    const interval = setInterval(loadFacebookPosts, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">
              <Facebook className="w-4 h-4 mr-2" />
              Social Media
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Latest from Our Store
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest arrivals, offers, and behind-the-scenes content
            </p>
          </div>
          
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Loading Facebook posts...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">
            <Facebook className="w-4 h-4 mr-2" />
            Social Media
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Latest from Our Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest arrivals, offers, and behind-the-scenes content
          </p>
        </div>

        {/* Horizontal Scrolling Posts */}
        <div className="relative mb-12">
          {/* Scroll Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-primary/20"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-primary/20"
            onClick={scrollRight}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post, index) => (
              <FacebookPostCard key={index} {...post} />
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-primary/20 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Follow us on Facebook</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join over 1,000+ happy customers in Pokhara!
              </p>
              <Button 
                className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white"
                onClick={() => window.open('https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr', '_blank')}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Follow Page
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <TikTokIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Follow us on TikTok</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Watch our mobile tips and tricks videos!
              </p>
              <Button 
                className="w-full bg-black hover:bg-gray-800 text-white"
                onClick={() => window.open('https://www.tiktok.com/@himal_mobile_traders?_t=ZS-8zTrpojmaD1&_r=1', '_blank')}
              >
                <TikTokIcon className="w-4 h-4 mr-2" />
                Follow Us
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <GoogleIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rate us on Google</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Share your experience with us!
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.open('https://www.google.com/search?q=Himal+Mobile+Traders+Pokhara', '_blank')}
              >
                <Star className="w-4 h-4 mr-2" />
                Rate Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
