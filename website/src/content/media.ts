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

/** Homepage rotates cinematic villa, estate, and lifestyle pool clips. */
export const homepageHeroClips = [
  heroVideos.ocean,
  heroVideos.estate,
  heroVideos.bali,
  heroVideos.swimmer,
  heroVideos.modern,
];

export const productHeroClip = heroVideos.modern;
export const distributorsHeroClip = heroVideos.estate;
export const applicationsHeroClip = heroVideos.swimmer;
export const aboutHeroClip = heroVideos.estate;

/** Higgsfield motion graphics — ambient section films. */
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
  waterStory: {
    src: "/video/mg-water-story.mp4",
    poster: "/video/mg-water-story.jpg",
  },
  /** Premium stainless chamber orbit — replaces Minecraft GLB look. */
  chamberOrbit: {
    src: "/video/mg-chamber-orbit.mp4",
    poster: "/video/mg-chamber-orbit.jpg",
  },
  /** Living pearl/teal particle atmosphere for interactive sections. */
  livingField: {
    src: "/video/mg-living-field.mp4",
    poster: "/video/mg-living-field.jpg",
  },
  /** US luxury pool water → mineral ions story. */
  waterIons: {
    src: "/video/mg-water-ions.mp4",
    poster: "/video/mg-water-ions.jpg",
  },
} as const;

/** Product / install stills — Zinc'd branded (no Arroyo). */
export const productStills = {
  flowDiagram: "/img/product/flow-diagram.png",
  manifold: "/img/product/manifold-zincd.png",
  chamberPremium: "/img/product/chamber-premium.png",
  chamberHeroVertical: "/img/product/chamber-hero-vertical.png",
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
