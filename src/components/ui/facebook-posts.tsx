import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share, Facebook, ExternalLink, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface FacebookPost {
  id: string;
  type: 'photo' | 'video' | 'status';
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  imageUrl?: string;
  postUrl: string;
}

export const FacebookPosts = () => {
  const posts: FacebookPost[] = [
    {
      id: '1',
      type: 'photo',
      caption: '🎉 Dashain Festival Special Offers! 📱\n\n✨ Get incredible discounts on iPhone 15 series\n✨ Samsung Galaxy S24 Ultra with EMI facility\n✨ Free screen protector & case with every purchase\n\nVisit us at Mahendrapool, Pokhara! 🏪',
      likes: 234,
      comments: 67,
      shares: 45,
      timestamp: '3 hours ago',
      imageUrl: '/photos/shop-image.png',
      postUrl: 'https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr'
    },
    {
      id: '2',
      type: 'status',
      caption: '📢 NEW ARRIVALS ALERT! 📢\n\n🔥 iPhone 15 Pro Max - Latest Stock\n🔥 Samsung Galaxy S24 Ultra 1TB\n🔥 Google Pixel 8 Pro\n🔥 OnePlus 12 Series\n\n💳 Easy EMI available\n🛡️ Official warranty\n🚚 Home delivery in Pokhara',
      likes: 289,
      comments: 94,
      shares: 67,
      timestamp: '1 day ago',
      postUrl: 'https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr'
    },
    {
      id: '3',
      type: 'photo',
      caption: '🌟 Customer Testimonial! 🌟\n\n"Best mobile shop in Pokhara! Excellent service, genuine products, and very helpful staff. Got my iPhone 15 Pro with amazing EMI facility. Highly recommended!" - Satisfied Customer\n\nThank you for trusting Himal Mobile Traders! 🙏',
      likes: 156,
      comments: 28,
      shares: 22,
      timestamp: '2 days ago',
      imageUrl: '/photos/employee-family.png',
      postUrl: 'https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr'
    },
    {
      id: '4',
      type: 'photo',
      caption: '🔧 Professional Phone Repair Services! 🔧\n\n• Screen replacement\n• Battery replacement\n• Water damage repair\n• Software issues\n• Hardware troubleshooting\n\nQuick, reliable, and affordable! Call us: 9856019988',
      likes: 187,
      comments: 43,
      shares: 29,
      timestamp: '3 days ago',
      imageUrl: '/photos/employee-family2.png',
      postUrl: 'https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr'
    },
    {
      id: '5',
      type: 'status',
      caption: '🏆 5+ Years of Trust in Pokhara! 🏆\n\nServing 1000+ happy customers with:\n✅ Genuine mobile phones\n✅ Professional repair services\n✅ Competitive prices\n✅ EMI facilities\n✅ Official warranties\n\nYour trust is our success! 🙏',
      likes: 312,
      comments: 78,
      shares: 56,
      timestamp: '5 days ago',
      postUrl: 'https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr'
    }
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600 text-white">
            <Facebook className="w-4 h-4 mr-2" />
            Latest Updates
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            Recent Facebook Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with our latest offers, arrivals, and customer stories
          </p>
          {/* Follow button removed - Already exists in contact section */}
        </div>

        {/* Scrolling Posts Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-2 hover:bg-gray-50"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border-2 hover:bg-gray-50"
            onClick={scrollRight}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Posts Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 px-12 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post) => (
              <Card key={post.id} className="flex-none w-80 h-[600px] bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Himal Mobile Traders</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.timestamp}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow p-4">
                  {/* Post Image - Fixed height */}
                  <div className="mb-4 flex-shrink-0">
                    {post.imageUrl ? (
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src={post.imageUrl} 
                          alt="Facebook post" 
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-blue-600">
                          <Facebook className="w-12 h-12 mx-auto mb-2" />
                          <p className="text-sm font-medium">Text Post</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Post Content - Fixed height for consistency */}
                  <div className="mb-4 h-24 overflow-hidden flex-shrink-0">
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-6">{post.caption}</p>
                  </div>
                  
                  {/* Bottom section - Fixed at bottom */}
                  <div className="mt-auto flex-shrink-0">
                    {/* Engagement Stats */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-blue-500 transition-colors cursor-pointer">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-green-500 transition-colors cursor-pointer">
                          <Share className="w-4 h-4" />
                          <span>{post.shares}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Post Button - Always at bottom */}
                    <a 
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View on Facebook
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more updates?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
