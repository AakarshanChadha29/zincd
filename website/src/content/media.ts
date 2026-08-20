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
  territoryMarkets: "/assets/us-territory-markets.svg",
  territoryCta: "/assets/cta-territory.svg",
  /** Sunlit pool caustics — wide banner crop. */
  poolCausticsWide: "/assets/pool-caustics-wide.jpg",
  /** Sunlit pool caustics — tall crop for portrait bands. */
  poolCausticsDeep: "/assets/pool-caustics-deep.jpg",
} as const;

/** Homepage — client commercial-pool still (no people, no overlay claims). */
export const homepageHeroClips: { poster: string; src?: string }[] = [
  { poster: clientStills.commercialPool },
];

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
  flowDiagram: "/assets/technical-flow.jpg",
  manifold: "/img/product/manifold-zincd.png",
  /** Product page gallery — client hardware stills (no identifiable people). */
  gallery: [
    {
      src: "/assets/product-front.jpg",
      alt: "Zinc'd Gen-2 control enclosure and stainless ionization chamber, photographed from the front.",
    },
    {
      src: "/assets/product-hero.jpg",
      alt: "Zinc'd ionization system — battery-powered control above the stainless chamber.",
    },
    {
      src: "/assets/plant-room.jpg",
      alt: "A professional plant room with filtration and a gap on the return line for an inline chamber.",
    },
    {
      src: "/assets/hardware-rear.jpg",
      alt: "Rear of the Zinc'd chamber and control, showing mounting brackets and the flow sensor.",
    },
  ],
} as const;

/** Still photography for application cards — environment only. */
export const applicationImages: Record<string, string> = {
  residential: lifestyleStills.residentialPool,
  "hotels-resorts": clientStills.hotelWellness,
  commercial: clientStills.commercialPool,
  "fitness-wellness": clientStills.hotelInfinity,
};

/** Default social preview — people-free commercial pool still. */
export const defaultOgImage = clientStills.commercialPool;
