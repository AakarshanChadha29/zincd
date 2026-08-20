import { Reveal } from "@/components/motion/reveal";

type ProcessBeat = {
  step: string;
  title: string;
  body: string;
};

/**
 * One continuous process film with an editorial reading rail.
 */
export function ProcessNarrative({
  steps,
  video,
  poster,
}: {
  steps: readonly ProcessBeat[];
  video: string;
  poster: string;
}) {
  return (
    <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:gap-16">
      <Reveal>
        <figure className="overflow-hidden rounded-[var(--radius-panel)] bg-[color:var(--teal-900)] lg:sticky lg:top-28">
          <video
            src={video}
            poster={poster}
            className="aspect-video h-full w-full object-cover"
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label="Animated Zinc'd chamber process showing water flow, PWM control and mineral ion release"
          />
          <figcaption className="border-t border-white/15 px-6 py-4 text-small text-white/65">
            Illustrative process view. The installed system remains part of a
            monitored pool-chemistry program.
          </figcaption>
        </figure>
      </Reveal>

      <ol className="border-l border-[color:var(--teal-700)]/25">
        {steps.map((step, index) => (
          <li
            key={step.step}
            className="relative border-b border-border py-9 pl-8 first:pt-0 last:border-0 last:pb-0"
          >
            <span
              aria-hidden
              className={`absolute -left-[5px] size-2.5 rounded-full bg-[color:var(--teal-700)] ${
                index === 0 ? "top-1" : "top-10"
              }`}
            />
            <Reveal delay={index * 0.04}>
              <p className="text-technical text-accent-aquatic">{step.step}</p>
              <h3 className="text-h2 mt-3 text-foreground">{step.title}</h3>
              <p className="text-body-large mt-3 text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
