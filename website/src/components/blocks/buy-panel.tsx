import Link from "next/link";
import { ArrowRight, Check, Info, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { directOffer } from "@/content/product-data";

/**
 * The commercial path: buy the system outright.
 *
 * Set `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` to your Stripe Payment Link / Checkout
 * URL (in `.env.local` and in Vercel env). When unset, the Buy now button is
 * replaced with an assessment route — never a dead payment link.
 */
export function BuyPanel() {
  const checkoutUrl = process.env.NEXT_PUBLIC_STRIPE_CHECKOUT_URL?.trim();
  const canCheckout = Boolean(checkoutUrl);

  return (
    <div
      id="buy"
      className="overflow-hidden rounded-[var(--radius)] border border-border-strong bg-surface-elevated shadow-[var(--shadow-2)] scroll-mt-28"
    >
      <div className="border-b border-border p-7 md:p-8">
        <TechnicalLabel className="text-accent-aquatic">Buy direct</TechnicalLabel>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-display text-foreground">
            {directOffer.priceDisplay}
          </span>
          <span className="text-small text-accent-steel">
            {directOffer.currency} · complete system
          </span>
        </div>

        <p className="text-body mt-4 text-muted-foreground">
          {directOffer.summary}
        </p>

        <div className="mt-7">
          {canCheckout ? (
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full rounded-[var(--radius-control)] sm:w-auto"
                render={
                  <a href={checkoutUrl} rel="noopener noreferrer" target="_blank" />
                }
              >
                <ShoppingBag className="size-4" aria-hidden />
                Buy now
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <p className="text-small text-muted-foreground">
                Secure checkout via Stripe. Series is confirmed to your pool
                before dispatch.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full rounded-[var(--radius-control)] sm:w-auto"
                render={<Link href="/contact?intent=assessment" />}
              >
                Request a pool assessment
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <p className="text-small flex gap-2 text-accent-steel">
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
                Add your Stripe Payment Link as{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-[0.75rem]">
                  NEXT_PUBLIC_STRIPE_CHECKOUT_URL
                </code>{" "}
                to enable Buy now. Until then, start with an assessment.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="p-7 md:p-8">
        <TechnicalLabel>What&rsquo;s included</TechnicalLabel>
        <ul className="mt-4 space-y-2.5">
          {directOffer.includes.map((item) => (
            <li key={item} className="flex gap-3">
              <Check
                className="mt-0.5 size-4 shrink-0 text-accent-ecological"
                aria-hidden
              />
              <span className="text-small text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 space-y-2 border-t border-border pt-6">
          {directOffer.notes.map((note) => (
            <li key={note} className="text-small text-accent-steel">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
