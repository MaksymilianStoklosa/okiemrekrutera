import { Seo } from "@/components/seo/Seo";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site";

export default function KontaktPage() {
  return (
    <>
      <Seo
        title="Kontakt: umów pomoc w CV i konsultację kariery"
        description="Umów bezpłatną rozmowę wstępną lub zadaj pytanie o pomoc w CV, przygotowanie do rozmowy rekrutacyjnej i optymalizację LinkedIn."
        path="/kontakt"
        keywords={[
          "kontakt doradca kariery",
          "umów konsultację cv",
          "pomoc w cv kontakt",
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Napisz do mnie
          </h1>
          <p className="text-muted-foreground">
            Wypełnij formularz, opisując krótko swoją sytuację i cel - odpiszę z
            propozycją najlepszego kolejnego kroku. Możesz też napisać
            bezpośrednio na{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>

        <ContactForm />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Najczęstsze pytania
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Czy pierwsza rozmowa jest bezpłatna?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tak. Wstępna rozmowa ma charakter konsultacyjny i pomoże ocenić,
              czy dana usługa będzie odpowiednia dla Twojej sytuacji zawodowej.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Czy mogę zamówić tylko poprawę CV?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tak. Jeśli masz już gotowy dokument, możesz wybrać audyt lub
              poprawę CV, bez potrzeby angażowania pełnego pakietu wsparcia.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Czy współpraca jest online?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tak. Większość współpracy odbywa się zdalnie, co pozwala pracować
              z klientami z całej Polski i w wygodnym dla nich czasie.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Czy pomagasz też przy LinkedIn?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tak. W ramach usług profilowego wsparcia optymalizuję LinkedIn pod
              potrzeby rekrutacyjne, zmieniając nagłówek, opis i widoczność.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground">
              Jak wygląda kolejny krok po wysłaniu formularza?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Otrzymujesz wiadomość zwrotną z propozycją dalszych kroków, a
              jeśli to potrzebne, dopasowujemy usługę do Twojej sytuacji
              zawodowej i celu w rekrutacji.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
