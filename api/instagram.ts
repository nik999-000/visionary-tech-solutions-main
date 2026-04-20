import type { VercelRequest, VercelResponse } from '@vercel/node';

interface InstagramMedia {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
}

interface InstagramAPIResponse {
  data: Array<{
    id: string;
    media_url: string;
    permalink: string;
    media_type: string;
  }>;
}

// Simple in-memory cache (works per instance)
let cachedData: InstagramMedia[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const now = Date.now();
  if (cachedData && now - cacheTimestamp < CACHE_DURATION_MS) {
    res.setHeader('X-Cache', 'HIT');
    return res.status(200).json({ data: cachedData });
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    // Mock data if no token provided
    const mockData: InstagramMedia[] = [
      {
        id: "mock1",
        media_url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
        permalink: "https://www.instagram.com/servis_hoti/",
        media_type: "IMAGE"
      },
      {
        id: "mock2",
        media_url: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbea?q=80&w=800&auto=format&fit=crop",
        permalink: "https://www.instagram.com/servis_hoti/",
        media_type: "IMAGE"
      },
      {
        id: "mock3",
        media_url: "https://images.unsplash.com/photo-1556656793-062ff987b50c?q=80&w=800&auto=format&fit=crop",
        permalink: "https://www.instagram.com/servis_hoti/",
        media_type: "IMAGE"
      },
      {
        id: "mock4",
        media_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
        permalink: "https://www.instagram.com/servis_hoti/",
        media_type: "IMAGE"
      }
    ];
    return res.status(200).json({ data: mockData, note: "Mock mode" });
  }

  try {
    const limit = 12;
    const fields = 'id,media_url,permalink,media_type';
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`
    );

    if (!response.ok) {
      throw new Error(`Instagram API responded with ${response.status}`);
    }

    const json: InstagramAPIResponse = await response.json();
    const mediaItems = json.data
      .filter(item => item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM')
      .map(item => ({
        id: item.id,
        media_url: item.media_url,
        permalink: item.permalink,
        media_type: item.media_type
      }));

    cachedData = mediaItems;
    cacheTimestamp = now;

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json({ data: mediaItems });
  } catch (error) {
    console.error('Fetch error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
