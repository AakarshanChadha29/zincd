"use client";

import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body className="bg-[color:var(--steel-50,#f8fafc)] text-[color:var(--ink,#0f172a)] antialiased">
        <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 py-16">
          <p className="text-sm font-medium tracking-wide text-[#0e7490] uppercase">
            System error
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1f33]">
            Zinc&apos;d could not render this page
          </h1>
          <p className="mt-4 text-base text-[#475569]">
            A critical rendering error occurred. Try again, or return later.
            Internal details are not displayed.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex h-10 w-fit items-center rounded-sm bg-[#0369a1] px-4 text-sm font-medium text-white"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
