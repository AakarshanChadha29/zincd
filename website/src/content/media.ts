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

/** Homepage — rotating villa films with posters as first paint. */
export const homepageHeroClips: { poster: string; src?: string }[] = [
  heroVideos.estate,
  heroVideos.ocean,
  heroVideos.modern,
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
  /** Control enclosure — LCD reads 24 V DC, matching published operating voltage. */
  control: "/img/clean/control-zincd.jpg",
  /** Commissioned install: chamber inline on the loop, control wired above. */
  install: "/img/clean/system-installed.jpg",
  /** Second control angle for pages that should not repeat the catalog shot. */
  controlAngled: "/img/clean/control-zincd.jpg",
  /** Looking into the chamber bore — copper mineral core. */
  chamberLegacy: "/img/clean/chamber-bore.jpg",
  anode: "/img/clean/electrode-anode.jpg",
  waterHero: "/img/clean/chamber-water-hero.jpg",
  packaging: "/img/clean/packaging-still.jpg",
  family: "/img/clean/system-and-softener.jpg",
} as const;

/** Catalytic Super Softener stills — same identity lock as the ionizer set. */
export const softenerPhotos = {
  cutout: "/img/clean/softener-cutout.png",
  studio: "/img/clean/softener-studio.jpg",
  install: "/img/clean/softener-installed.jpg",
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
      src: "/img/clean/system-zincd.jpg",
      alt: "Zinc'd ionization system: PWM control with LCD above the stainless chamber.",
    },
    {
      src: "/img/clean/control-zincd.jpg",
      alt: "Zinc'd control face with LCD reading 24 V DC and ionization level 8.",
    },
    {
      src: "/img/clean/system-installed.jpg",
      alt: "Zinc'd chamber installed inline on the filter return, control mounted above.",
    },
    {
      src: "/img/clean/chamber-zincd.jpg",
      alt: "Zinc'd stainless ionization chamber on a dark studio plate.",
    },
    {
      src: "/img/clean/electrode-anode.jpg",
      alt: "Copper mineral electrode with stainless hex fitting.",
    },
    {
      src: "/img/clean/chamber-bore.jpg",
      alt: "Looking into the Zinc'd chamber bore, copper core in the flow path.",
    },
    {
      src: "/img/clean/packaging-still.jpg",
      alt: "Zinc'd Pool Care carton beside the assembled ionization system.",
    },
    {
      src: "/img/clean/system-and-softener.jpg",
      alt: "Zinc'd ionization system photographed with the Catalytic Super Softener 1.5.",
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
