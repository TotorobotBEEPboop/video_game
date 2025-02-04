/// API TYPES
export interface TwitchParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
}

export interface TwitchResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface RequestOptions {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
}

/// GAME TYPES

export interface Game {
  id: number;
  cover: Cover;
  genres: Genre[];
  name: string;
  platforms: Platform[];
  rating: number;
  rating_count: number;
  release_dates: ReleaseDate[];
  screenshots: Screenshot[];
  similar_games: string[];
  summary: string;
}

export interface Cover {
  id: number;
  alpha_channel: boolean;
  animated: boolean;
  game: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
  checksum: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  abbreviation: string;
  alternative_name: string;
  category: number;
  created_at: number;
  generation: number;
  name: string;
  platform_logo: number;
  platform_family: number;
  slug: string;
  updated_at: number;
  url: string;
  versions: number[];
  websites: number[];
  checksum: string;
}

export interface ReleaseDate {
  id: number;
  category: number;
  created_at: number;
  date: number;
  game: number;
  human: string;
  m: number;
  platform: number;
  region: number;
  updated_at: number;
  y: number;
  checksum: string;
  status: number;
}

export interface Screenshot {
  id: number;
  image_id: string;
}

export interface SimilarGame {
  id: number;
  name: string;
  cover: {
    id: number;
    url: string;
  };
}
