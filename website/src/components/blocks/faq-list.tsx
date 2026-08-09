import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/cn";

type Faq = { q: string; a: string };

export function FaqList({
  faqs,
  className,
}: {
  faqs: readonly Faq[];
  className?: string;
}) {
  return (
    <Accordion
      className={cn(
        "overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface shadow-[var(--shadow-1)]",
        className
      )}
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.q}
          value={faq.q}
          className="border-border px-5 md:px-6"
        >
          <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
            <span className="flex min-w-0 flex-1 items-start gap-4">
              <span className="text-technical mt-0.5 shrink-0 text-accent-aquatic">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">{faq.q}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-body pb-5 pl-12 text-muted-foreground md:pb-6 md:pl-14">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
