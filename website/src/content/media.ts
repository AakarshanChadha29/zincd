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
  /** Owner-provided process film — chamber cutaway with Cu / Ag / Zn ions. */
  process: {
    src: "/video/process-ionization.mp4",
    poster: "/video/process-ionization.jpg",
  },
} as const;

/** Homepage — lifestyle villa clips for first paint; process film lives mid-page. */
export const homepageHeroClips = [heroVideos.modern, heroVideos.ocean];

export const productHeroClip = heroVideos.modern;
export const distributorsHeroClip = heroVideos.estate;
export const applicationsHeroClip = heroVideos.swimmer;
export const aboutHeroClip = heroVideos.estate;
export const technologyHeroClip = heroVideos.process;

/**
 * Lightweight ambient films only. Heavy HF loops (living-field 3MB,
 * water-ions 10MB, water-story 5MB) are excluded from the critical path —
 * use posters / still photography instead for speed.
 *
 * `process` is the owner 3D ionization film — preferred for Technology /
 * Product motion bands over abstract generative clips.
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
  process: heroVideos.process,
} as const;

/** Real / polished product photography — prefer wire-free clean catalog assets. */
export const productPhotos = {
  /** Transparent cutouts for dark / film overlays. */
  system: "/img/clean/system-cutout.png",
  chamber: "/img/clean/chamber-cutout.png",
  /** Opaque studio / lifestyle stills (no messy exposed wiring). */
  systemStudio: "/img/clean/system.jpg",
  chamberStudio: "/img/clean/chamber.jpg",
  control: "/img/clean/control.jpg",
  install: "/img/clean/install.jpg",
} as const;

/** Product / install stills — Zinc'd branded (no Arroyo). */
export const productStills = {
  flowDiagram: "/img/product/flow-diagram.png",
  manifold: "/img/product/manifold-zincd.png",
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
      alt: "Zinc'd chamber and control as separate clean catalog products — no exposed wiring.",
    },
    {
      src: "/img/clean/install.jpg",
      alt: "Zinc'd installed poolside with wiring dressed into a neat wall conduit.",
    },
  ],
} as const;

/** Still photography for application cards — environment + real install context. */
export const applicationImages: Record<string, string> = {
  residential: "/img/clean/install.jpg",
  "hotels-resorts": "/img/pool-resort.jpg",
  commercial: "/img/pool-commercial.jpg",
  "fitness-wellness": "/img/pool-wellness.jpg",
};

/** Default social preview (first villa poster until dedicated OG art exists). */
export const defaultOgImage = heroVideos.ocean.poster;
