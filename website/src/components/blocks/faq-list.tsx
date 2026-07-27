import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = { q: string; a: string };

export function FaqList({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <Accordion className="rounded-[var(--radius-panel)] border border-border bg-surface px-5">
      {faqs.map((faq) => (
        <AccordionItem key={faq.q} value={faq.q} className="border-border">
          <AccordionTrigger className="py-5 text-base font-medium text-foreground hover:no-underline">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-body text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
