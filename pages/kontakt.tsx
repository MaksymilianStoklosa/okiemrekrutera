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

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
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
    </>
  );
}
