import {
  FileText,
  MessageSquare,
  Contact2,
  TrendingUp,
  PenLine,
  Compass,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Seo } from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/CTA";
import { services, type Service } from "@/data/services";
import { getServiceJsonLd } from "@/lib/seo";

const iconMap: Record<Service["icon"], LucideIcon> = {
  FileText,
  MessageSquare,
  Linkedin: Contact2,
  TrendingUp,
  PenLine,
  Compass,
};

export default function OfertaPage() {
  return (
    <>
      <Seo
        title="Oferta: tworzenie CV, pomoc w CV i przygotowanie do rekrutacji"
        description="Pełna oferta pomocy w CV: pisanie i poprawa CV, przygotowanie do rozmowy rekrutacyjnej, optymalizacja LinkedIn, analiza rynku pracy i konsultacja kariery. Wybierz usługę dopasowaną do Twojej rekrutacji."
        path="/oferta"
        keywords={[
          "oferta pomoc w cv",
          "usługi cv",
          "pisanie cv na zamówienie",
          "przygotowanie do rekrutacji",
        ]}
        jsonLd={services.map((service) => getServiceJsonLd(service))}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Oferta
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Wybierz usługę dopasowaną do Twojej sytuacji zawodowej, albo napisz do
          mnie, a wspólnie ustalimy najlepszy plan działania.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="animated-border flex scroll-mt-24 flex-col rounded-lg border border-border p-6 transition-colors hover:border-primary/50 sm:p-8"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span aria-hidden="true" className="text-primary">
                        •
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="mt-6 h-12 px-6 text-base"
                  render={<Link href="/kontakt" />}
                >
                  Zapytaj o tę usługę
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
