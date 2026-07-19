import Link from "next/link";
import { Seo } from "@/components/seo/Seo";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { getServiceJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Pomoc w CV | pisanie CV, poprawa CV i przygotowanie do rozmowy rekrutacyjnej"
        description="Profesjonalna pomoc w CV i przygotowanie do rozmowy rekrutacyjnej. Pisanie CV, poprawa dokumentu pod ATS, optymalizacja LinkedIn i wsparcie w zmianie pracy."
        path="/"
        keywords={[
          "pomoc w cv",
          "pisanie cv",
          "napisanie cv",
          "poprawa cv",
          "cv pod ats",
          "optymalizacja profilu linkedin",
          "przygotowanie do rozmowy rekrutacyjnej",
          "doradca kariery",
        ]}
        jsonLd={services.map((service) => getServiceJsonLd(service))}
      />
      <Hero />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              W czym mogę Ci pomóc
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Kompleksowe wsparcie na każdym etapie poszukiwania pracy - od
              dokumentów aplikacyjnych po samą rozmowę rekrutacyjną.
            </p>
          </div>
          <ServicesGrid />
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 text-base"
              render={<Link href="/oferta" />}
            >
              Zobacz pełną ofertę
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Dlaczego warto skorzystać z moich usług
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Praktyczne doświadczenie po stronie rekrutera i indywidualne
            podejście do każdego Klienta.
          </p>
        </div>
        <WhyUs />
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Jak wygląda proces współpracy
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Od pierwszej wiadomości do gotowych efektów - krok po kroku.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Co mówią klienci
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Przykładowe opinie ilustrujące zakres współpracy.
          </p>
        </div>
        <Testimonials />
      </section>

      <CTA buttonClassName="h-12 px-6 text-base" />
    </>
  );
}
