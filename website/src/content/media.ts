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

/**
 * Client photography ingested from `Pool ionizer/` (web-sized copies only).
 * People-identifiable stills and the field MP4 are intentionally omitted.
 */
export const clientStills = {
  commercialPool: "/assets/commercial-pool.jpg",
  clearWaterReturn: "/assets/clear-water-return.jpg",
  hotelInfinity: "/assets/hotel-infinity.jpg",
  hotelWellness: "/assets/hotel-wellness.jpg",
  technicalFlow: "/assets/technical-flow.jpg",
  productFront: "/assets/product-front.jpg",
  productHero: "/assets/product-hero.jpg",
  plantRoom: "/assets/plant-room.jpg",
  hardwareRear: "/assets/hardware-rear.jpg",
  howItWorks: "/assets/how-zincd-works.svg",
  /** CC0 blank US map (Wikimedia), restyled to Zinc'd teal. */
  territoryMarkets: "/assets/us-map.svg",
  territoryCta: "/assets/cta-territory.svg",
  /** Sunlit pool caustics — wide banner crop. */
  poolCausticsWide: "/assets/pool-caustics-wide.jpg",
  /** Sunlit pool caustics — tall crop for portrait bands. */
  poolCausticsDeep: "/assets/pool-caustics-deep.jpg",
} as const;

/**
 * Homepage hero — the chamber in the water is the picture.
 * Villa films sit behind copy no longer; water motion is the film.
 */
export const homepageHeroClips: { poster: string; src?: string }[] = [
  {
    poster: "/img/campaign/water-wide.jpg",
    src: "/video/hero-product-water.mp4",
  },
];

export const productHeroClip = {
  poster: "/img/campaign/install.jpg",
};
export const distributorsHeroClip = heroVideos.estate;
/** Applications index — estate dusk still, distinct from the home water film. */
export const applicationsHeroClip = {
  poster: "/img/campaign/home-hero.jpg",
  src: "/video/app-residential.mp4",
};
export const aboutHeroClip = heroVideos.bali;
export const technologyHeroClip = {
  poster: "/video/mg-chamber-orbit.jpg",
  src: "/video/mg-chamber-orbit.mp4",
};
export const faqHeroClip = heroVideos.swimmer;
export const contactHeroClip = heroVideos.ocean;

/** One distinct hero film per application sector. */
export const applicationHeroes: Record<string, { poster: string; src?: string }> = {
  residential: {
    poster: "/img/campaign/home-hero.jpg",
    src: "/video/app-residential.mp4",
  },
  "hotels-resorts": {
    poster: "/img/campaign/series-3.jpg",
    src: "/video/app-hotels.mp4",
  },
  commercial: {
    poster: "/img/campaign/series-4.jpg",
    src: "/video/app-commercial.mp4",
  },
  "fitness-wellness": {
    poster: "/img/campaign/series-1.jpg",
    src: "/video/app-wellness.mp4",
  },
};

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
 * Product photography — campaign stills restaged from the shipping hardware.
 * Full scenes (pool, plant room, hospitality), not workshop crops or cutouts.
 */
export const productPhotos = {
  /** Dusk infinity-pool still of the chamber — home and product hero. */
  chamber: "/img/campaign/home-hero.jpg",
  /** Complete system in a designed plant room. */
  system: "/img/campaign/series-2.jpg",
  chamberStudio: "/img/campaign/series-1.jpg",
  systemStudio: "/img/campaign/series-2.jpg",
  control: "/img/campaign/series-2.jpg",
  install: "/img/campaign/install.jpg",
  controlAngled: "/img/campaign/series-3.jpg",
  chamberLegacy: "/img/campaign/series-1.jpg",
  anode: "/img/campaign/series-1.jpg",
  waterHero: "/img/campaign/water-wide.jpg",
  packaging: "/img/campaign/family.jpg",
  family: "/img/campaign/family.jpg",
  commercial: "/img/campaign/series-4.jpg",
} as const;

/** Catalytic Conditioner — one distinct scene per slot. */
export const softenerPhotos = {
  install: "/img/campaign/softener.jpg",
  hero: "/img/campaign/softener-hero.png",
  detail: "/img/campaign/softener-detail.png",
  loop: "/img/campaign/softener-loop.png",
  macro: "/img/campaign/softener-macro.png",
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
  flowDiagram: "/assets/technical-flow.jpg",
  manifold: "/img/product/manifold-zincd.png",
  /** Product page gallery — studio and plant-room stills of the shipping hardware. */
  gallery: [
    {
      src: "/img/campaign/home-hero.jpg",
      alt: "Zinc'd stainless chamber at the edge of a private infinity pool at dusk.",
    },
    {
      src: "/img/campaign/series-1.jpg",
      alt: "Zinc'd ionization chamber on wet stone with mineral-teal water.",
    },
    {
      src: "/img/campaign/series-2.jpg",
      alt: "Zinc'd control and chamber in a residential plant room overlooking a pool.",
    },
    {
      src: "/img/campaign/series-3.jpg",
      alt: "Zinc'd system in a boutique-hotel wellness plant beside an indoor spa pool.",
    },
    {
      src: "/img/campaign/install.jpg",
      alt: "Zinc'd chamber plumbed into a designed commercial equipment gallery.",
    },
    {
      src: "/img/campaign/series-4.jpg",
      alt: "Parallel Zinc'd chambers in a sunlit resort mechanical gallery.",
    },
    {
      src: "/img/campaign/water-wide.jpg",
      alt: "Zinc'd chamber in shallow pool water at a luxury villa, sunset light.",
    },
    {
      src: "/img/campaign/family.jpg",
      alt: "Zinc'd ionization system and catalytic conditioner on stone beside a pool.",
    },
  ],
} as const;

/** Application cards and in-page stills — one distinct campaign scene per sector. */
export const applicationImages: Record<string, string> = {
  residential: "/img/campaign/home-hero.jpg",
  "hotels-resorts": "/img/campaign/series-3.jpg",
  commercial: "/img/campaign/series-4.jpg",
  "fitness-wellness": "/img/campaign/series-1.jpg",
};

/** In-page motion band under each application — not the same loop on every route. */
export const applicationMotion: Record<
  string,
  { src: string; poster: string }
> = {
  residential: {
    src: "/video/mg-water-ions.mp4",
    poster: "/video/mg-water-ions.jpg",
  },
  "hotels-resorts": {
    src: "/video/mg-water-story.mp4",
    poster: "/video/mg-water-story.jpg",
  },
  commercial: {
    src: "/video/mg-chamber.mp4",
    poster: "/video/mg-chamber.jpg",
  },
  "fitness-wellness": {
    src: "/video/mg-living-field.mp4",
    poster: "/video/mg-living-field.jpg",
  },
};

/** Default social preview — people-free commercial pool still. */
export const defaultOgImage = clientStills.commercialPool;
