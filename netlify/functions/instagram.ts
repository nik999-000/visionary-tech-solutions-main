import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

interface InstagramMedia {
  id: string;
  media_url: string;
  permalink: string;
  media_type: string;
  thumbnail_url?: string;
}

interface InstagramAPIResponse {
  data: Array<{
    id: string;
    media_url: string;
    permalink: string;
    media_type: string;
    thumbnail_url?: string;
  }>;
  paging?: {
    cursors: { before: string; after: string };
    next?: string;
  };
}

// In-memory cache
let cachedData: InstagramMedia[] | null = null;
let cacheTimestamp = 0;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=3600, s-maxage=3600",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const now = Date.now();

  // Return cached data if still fresh
  if (cachedData && now - cacheTimestamp < CACHE_DURATION_MS) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ data: cachedData, cached: true }),
    };
  }

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    // FALLBACK: Return mock data if token is missing so the user can see the UI
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ data: mockData, note: "Using mock data. Add INSTAGRAM_ACCESS_TOKEN to .env for real data." }),
    };
  }

  try {
    const limit = 24;
    const fields = "id,media_url,permalink,media_type,thumbnail_url";
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Instagram API error:", response.status, errorBody);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: "Failed to fetch Instagram data",
          details: response.status,
        }),
      };
    }

    const json: InstagramAPIResponse = await response.json();

    // Filter to only IMAGE and CAROUSEL_ALBUM (skip VIDEO for gallery)
    const mediaItems: InstagramMedia[] = json.data
      .filter((item) => item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM")
      .map((item) => ({
        id: item.id,
        media_url: item.media_url,
        permalink: item.permalink,
        media_type: item.media_type,
      }));

    // Update cache
    cachedData = mediaItems;
    cacheTimestamp = now;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ data: mediaItems, cached: false }),
    };
  } catch (error) {
    console.error("Instagram fetch error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

export { handler };
