import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#943A20]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="flex flex-col items-start gap-10">
          {/* <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            Tworzenie CV, pomoc w CV i konsultacje kariery
          </span> */}
          <h1 className="max-w-2xl text-4xl tracking-tight text-white sm:text-5xl">
            Spójrz na swoją karierę okiem rekrutera
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Pomagam w tworzeniu i poprawie CV, przygotowaniu do rozmowy
            rekrutacyjnej oraz optymalizacji profilu LinkedIn - tak, żeby Twoja
            kandydatura realnie wyróżniała się w rekrutacji.
          </p>
          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:items-stretch">
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full border-none px-6 text-base sm:w-auto"
              render={<Link href="/oferta" />}
            >
              Zobacz ofertę
            </Button>
          </div>
        </div>

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-[16px] sm:aspect-video lg:aspect-4/5 lg:max-w-sm lg:justify-self-end">
          <Image
            src="/new-hero.jpg"
            alt="Justyna - doradca kariery i była rekruterka"
            fill
            priority
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
