export const heroVideos = {
  ocean: {
    src: "/video/villa-ocean.mp4",
    poster: "/video/villa-ocean.jpg",
  },
  bali: {
    src: "/video/villa-bali.mp4",
    poster: "/video/villa-bali.jpg",
  },
  modern: {
    src: "/video/villa-modern.mp4",
    poster: "/video/villa-modern.jpg",
  },
} as const;

/** Homepage rotates all three villa/pool clips. */
export const homepageHeroClips = [
  heroVideos.ocean,
  heroVideos.bali,
  heroVideos.modern,
];

export const productHeroClip = heroVideos.modern;
export const distributorsHeroClip = heroVideos.bali;
