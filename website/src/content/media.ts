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
  estate: {
    src: "/video/estate-pool.mp4",
    poster: "/video/estate-pool.jpg",
  },
  swimmer: {
    src: "/video/swimmer-palm.mp4",
    poster: "/video/swimmer-palm.jpg",
  },
} as const;

/** Homepage — one primary villa clip for fast LCP (screenshot composition). */
export const homepageHeroClips = [heroVideos.modern, heroVideos.ocean];

export const productHeroClip = heroVideos.modern;
export const distributorsHeroClip = heroVideos.estate;
export const applicationsHeroClip = heroVideos.swimmer;
export const aboutHeroClip = heroVideos.estate;

/**
 * Lightweight ambient films only. Heavy HF loops (living-field 3MB,
 * water-ions 10MB, water-story 5MB) are excluded from the critical path —
 * use posters / still photography instead for speed.
 */
export const motionGraphics = {
  ionsWater: {
    src: "/video/mg-ions-water.mp4",
    poster: "/video/mg-ions-water.jpg",
  },
  chamber: {
    src: "/video/mg-chamber.mp4",
    poster: "/video/mg-chamber.jpg",
  },
  mineralType: {
    src: "/video/mg-mineral-type.mp4",
    poster: "/video/mg-mineral-type.jpg",
  },
} as const;

/** Real product photography (prefer JPG for payload). */
export const productPhotos = {
  system: "/img/product-zincd.jpg",
  chamber: "/img/product-chamber.jpg",
  systemPng: "/img/product-zincd.png",
  chamberPng: "/img/product-chamber.png",
} as const;

/** Product / install stills — Zinc'd branded (no Arroyo). */
export const productStills = {
  flowDiagram: "/img/product/flow-diagram.png",
  manifold: "/img/product/manifold-zincd.png",
} as const;

/** Still photography for application cards — environment only, never the product. */
export const applicationImages: Record<string, string> = {
  residential: "/img/pool-residential.jpg",
  "hotels-resorts": "/img/pool-resort.jpg",
  commercial: "/img/pool-commercial.jpg",
  "fitness-wellness": "/img/pool-wellness.jpg",
};

/** Default social preview (first villa poster until dedicated OG art exists). */
export const defaultOgImage = heroVideos.ocean.poster;
