import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Heart, 
  MessageCircle, 
  Share,
  Facebook
} from "lucide-react";
import { useState, useRef } from "react";

interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  isMuted: boolean;
  onPlayPause: () => void;
  onMuteToggle: () => void;
}

const VideoControls = ({ videoRef, isPlaying, isMuted, onPlayPause, onMuteToggle }: VideoControlsProps) => {
  return (
    <div className="absolute bottom-3 left-3 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
      <Button
        size="sm"
        variant="ghost"
        className="text-white hover:bg-white/20 p-1 h-8 w-8"
        onClick={onPlayPause}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>
      <Button
        size="sm"
        variant="ghost"
        className="text-white hover:bg-white/20 p-1 h-8 w-8"
        onClick={onMuteToggle}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </Button>
    </div>
  );
};

interface PostCardProps {
  type: 'photo' | 'video';
  content: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const PostCard = ({ type, content, caption, likes, comments, timestamp }: PostCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Card className="border-border/50 hover:shadow-elegant transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-muted/20">
          {type === 'photo' ? (
            <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
              <span className="text-white text-sm">Photo Content</span>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="#" type="video/mp4" />
              </video>
              <VideoControls
                videoRef={videoRef}
                isPlaying={isPlaying}
                isMuted={isMuted}
                onPlayPause={handlePlayPause}
                onMuteToggle={handleMuteToggle}
              />
            </>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <p className="text-sm text-foreground leading-relaxed">{caption}</p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{timestamp}</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>{likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{comments}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Heart className="w-4 h-4 mr-1" />
              Like
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <MessageCircle className="w-4 h-4 mr-1" />
              Comment
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Share className="w-4 h-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const FacebookPosts = () => {
  // Mock data - replace with real Facebook API data
  const photos = [
    {
      id: 1,
      type: 'photo' as const,
      content: '',
      caption: 'Latest iPhone 15 collection now available! Visit our store for the best deals.',
      likes: 45,
      comments: 12,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'photo' as const,
      content: '',
      caption: 'Samsung Galaxy S24 Ultra - Experience the future of mobile technology.',
      likes: 38,
      comments: 8,
      timestamp: '1 day ago'
    },
    {
      id: 3,
      type: 'photo' as const,
      content: '',
      caption: 'Special EMI offers on all smartphones. No hidden charges!',
      likes: 52,
      comments: 15,
      timestamp: '2 days ago'
    }
  ];

  const videos = [
    {
      id: 4,
      type: 'video' as const,
      content: '',
      caption: 'Watch how we repair your phone with care and precision. Expert technicians at work!',
      likes: 67,
      comments: 23,
      timestamp: '3 hours ago'
    },
    {
      id: 5,
      type: 'video' as const,
      content: '',
      caption: 'Tour of our newly renovated store. All brands under one roof!',
      likes: 89,
      comments: 31,
      timestamp: '1 day ago'
    },
    {
      id: 6,
      type: 'video' as const,
      content: '',
      caption: 'Quick comparison between different phone models. Find your perfect match!',
      likes: 43,
      comments: 18,
      timestamp: '3 days ago'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Facebook className="w-4 h-4 mr-2" />
            Facebook Updates
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Latest from Our Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest arrivals, offers, and behind-the-scenes content
          </p>
          <div className="mt-6">
            <Button 
              className="bg-gradient-primary hover:shadow-glow"
              onClick={() => window.open('https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr', '_blank')}
            >
              <Facebook className="w-4 h-4 mr-2" />
              Follow on Facebook
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Photos Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Photo Updates</h3>
              <p className="text-muted-foreground">Latest products and store highlights</p>
            </div>
            <div className="space-y-6">
              {photos.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          {/* Videos Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Video Content</h3>
              <p className="text-muted-foreground">Behind the scenes and product demos</p>
            </div>
            <div className="space-y-6">
              {videos.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary/20 text-primary hover:bg-primary/5"
          >
            Load More Posts
          </Button>
        </div>
      </div>
    </section>
  );
};