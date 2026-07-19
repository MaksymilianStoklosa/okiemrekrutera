import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <span className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
          Tworzenie CV, pomoc w CV i konsultacje kariery
        </span>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Spójrz na swoją karierę okiem rekrutera
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Pomagam w tworzeniu i poprawie CV, przygotowaniu do rozmowy
          rekrutacyjnej oraz optymalizacji profilu LinkedIn - tak, żeby Twoja
          kandydatura realnie wyróżniała się w rekrutacji.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 px-6 text-base"
            render={<Link href="/kontakt" />}
          >
            Umów bezpłatną konsultację
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-6 text-base"
            render={<Link href="/oferta" />}
          >
            Zobacz ofertę
          </Button>
        </div>
      </div>
    </section>
  );
}
