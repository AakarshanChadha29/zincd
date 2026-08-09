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

/**
 * Owner 3D chamber cutaway film — named for what it shows (not a generic
 * "process" label). Used primarily on Technology.
 */
export const chamberCutawayFilm = {
  src: "/video/process-ionization.mp4",
  poster: "/video/process-ionization.jpg",
} as const;

/** Homepage — lifestyle villa clips for first paint. */
export const homepageHeroClips = [heroVideos.modern, heroVideos.ocean];

export const productHeroClip = heroVideos.modern;
export const distributorsHeroClip = heroVideos.estate;
export const applicationsHeroClip = heroVideos.swimmer;
export const aboutHeroClip = heroVideos.bali;
export const technologyHeroClip = heroVideos.ocean;
export const faqHeroClip = heroVideos.swimmer;
export const contactHeroClip = heroVideos.estate;

/**
 * Motion graphic loops — spread across pages so each route has a distinct film.
 * Heavy loops (water-ions 10MB, water-story 5MB) stay off the critical path.
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
  chamberOrbit: {
    src: "/video/mg-chamber-orbit.mp4",
    poster: "/video/mg-chamber-orbit.jpg",
  },
  livingField: {
    src: "/video/mg-living-field.mp4",
    poster: "/video/mg-living-field.jpg",
  },
  /** Owner chamber cutaway — Technology page primary film. */
  chamberCutaway: chamberCutawayFilm,
} as const;

/** Real / polished product photography — prefer wire-free clean catalog assets. */
export const productPhotos = {
  system: "/img/clean/system-cutout.png",
  chamber: "/img/clean/chamber-cutout.png",
  systemStudio: "/img/clean/system.jpg",
  chamberStudio: "/img/clean/chamber.jpg",
  control: "/img/clean/control.jpg",
  install: "/img/clean/install.jpg",
  /** Alternate polished stills for pages that should not reuse /clean assets. */
  systemDark: "/img/polished/system-black.jpg",
  controlAngled: "/img/polished/control-angled.jpg",
  chamberLegacy: "/img/product-chamber.jpg",
} as const;

/** Environment / lifestyle stills — keep product shots off application cards. */
export const lifestyleStills = {
  residentialPool: "/img/pool-residential.jpg",
  resortPool: "/img/pool-resort.jpg",
  commercialPool: "/img/pool-commercial.jpg",
  wellnessPool: "/img/pool-wellness.jpg",
  swimmer: "/video/swimmer-palm.jpg",
  estate: "/video/estate-pool.jpg",
  villaOcean: "/video/villa-ocean.jpg",
} as const;

/** Product / install stills — Zinc'd branded (no Arroyo). */
export const productStills = {
  flowDiagram: "/img/product/flow-diagram.png",
  manifold: "/img/product/manifold-zincd.png",
  /** Product page gallery only — no lifestyle/install repeats from Home. */
  gallery: [
    {
      src: "/img/clean/chamber.jpg",
      alt: "Polished stainless Zinc'd water chamber on a clean studio background.",
    },
    {
      src: "/img/clean/control.jpg",
      alt: "Zinc'd control enclosure — catalog view without exposed wiring.",
    },
    {
      src: "/img/clean/system.jpg",
      alt: "Zinc'd chamber and control as separate clean catalog products.",
    },
    {
      src: "/img/polished/control-angled.jpg",
      alt: "Angled view of the Zinc'd control enclosure.",
    },
  ],
} as const;

/** Still photography for application cards — environment only. */
export const applicationImages: Record<string, string> = {
  residential: lifestyleStills.residentialPool,
  "hotels-resorts": lifestyleStills.resortPool,
  commercial: lifestyleStills.commercialPool,
  "fitness-wellness": lifestyleStills.wellnessPool,
};

/** Default social preview (first villa poster until dedicated OG art exists). */
export const defaultOgImage = heroVideos.ocean.poster;
