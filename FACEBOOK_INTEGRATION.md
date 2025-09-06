# Facebook Integration for Himal Mobile Traders

## Current Status
The Facebook posts section currently uses placeholder data due to Facebook being banned in Nepal. When access is restored, this should be updated with real Facebook API integration.

## Facebook Page
- URL: https://www.facebook.com/share/1FeENz2VEv/?mibextid=wwXIfr
- Page ID: 61566788251462

## To Implement Real Facebook Posts:

### 1. Get Facebook App Access Token
- Create a Facebook Developer App
- Get Page Access Token with permissions: `pages_show_list`, `pages_read_engagement`

### 2. Update the Component
Replace the placeholder data in `src/components/ui/facebook-posts.tsx` with:

```javascript
const response = await fetch(
  `https://graph.facebook.com/v18.0/61566788251462/posts?fields=message,created_time,likes.summary(true),comments.summary(true),shares&access_token=YOUR_ACCESS_TOKEN`
);
const data = await response.json();
```

### 3. Automatic Updates
Set up a webhook or scheduled function to fetch new posts automatically when they are published.

## Manual Update Process (Current)
Until Facebook access is restored, manually update the posts array in `facebook-posts.tsx` with:
- Actual captions from recent posts
- Real engagement numbers (likes, comments, shares)
- Correct timestamps
- Appropriate post types (photo/video/status)

## Recent Posts to Monitor
Check these types of posts on the Facebook page:
- New phone arrivals
- Dashain/festival offers
- Customer testimonials
- Repair service showcases
- EMI facility announcements
