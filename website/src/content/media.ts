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
 * Motion graphic loops. One distinct film per route — `ionsWater` was
 * previously running on the homepage, the calculator and the FAQ, which made
 * three separate pages read as the same page. `waterIons` and `waterStory`
 * were already in the repo but unreferenced; they now carry two of those
 * routes. See `motionGraphicByRoute` below for the assignment.
 */
export const motionGraphics = {
  ionsWater: {
    src: "/video/mg-ions-water.mp4",
    poster: "/video/mg-ions-water.jpg",
  },
  /** Sunlit pool caustics — was unused. */
  waterIons: {
    src: "/video/mg-water-ions.mp4",
    poster: "/video/mg-water-ions.jpg",
  },
  /** Stainless outlet pouring clear water — was unused. */
  waterStory: {
    src: "/video/mg-water-story.mp4",
    poster: "/video/mg-water-story.jpg",
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

/**
 * Product photography — the Zinc'd-branded set.
 *
 * Every asset here shows the hardware as it actually ships: the chamber carries
 * the Zinc'd wordmark and Cu/Ag/Zn badges, and the control's LCD copy is kept
 * consistent with the published specs in product-data.ts (it must never display
 * a voltage that contradicts the 24 V DC operating figure).
 */
export const productPhotos = {
  /** Chamber + control as clean catalog objects, true alpha. */
  system: "/img/clean/system-zincd-cutout.png",
  /** Branded chamber, true alpha — for floats over film. */
  chamber: "/img/clean/chamber-zincd-cutout.png",
  /** Branded chamber on a studio plate. */
  chamberStudio: "/img/clean/chamber-zincd.jpg",
  /** Chamber + control on a studio plate. */
  systemStudio: "/img/clean/system-zincd.jpg",
  /** Control enclosure — LCD reads status, not a voltage. */
  control: "/img/clean/control-zincd.jpg",
  /** Commissioned install: chamber inline on the loop, control wired above. */
  install: "/img/clean/system-installed.jpg",
  /** Second control angle for pages that should not repeat the catalog shot. */
  controlAngled: "/img/clean/control-zincd.jpg",
  chamberLegacy: "/img/product-chamber.jpg",
} as const;

/** Homepage story panorama — one continuous frame panned across three points. */
export const poolStoryPanorama = {
  src: "/img/story/pool-panorama.jpg",
  alt: "A modern villa's infinity pool running from the deck edge out to the ocean horizon",
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
      src: "/img/clean/chamber-zincd.jpg",
      alt: "The Zinc'd stainless water chamber, wordmark and Cu–Ag–Zn badges on the housing.",
    },
    {
      src: "/img/clean/control-zincd.jpg",
      alt: "The Zinc'd control enclosure, LCD showing ionizer status and output level.",
    },
    {
      src: "/img/clean/system-zincd.jpg",
      alt: "The Zinc'd chamber and control together as catalog products.",
    },
    {
      src: "/img/clean/system-installed.jpg",
      alt: "A commissioned Zinc'd install — chamber inline on the circulation loop, control wired above.",
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
