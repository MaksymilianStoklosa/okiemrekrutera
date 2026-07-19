import Image from "next/image";
import { Seo } from "@/components/seo/Seo";
import { CTA } from "@/components/sections/CTA";

export default function OMniePage() {
  return (
    <>
      <Seo
        title="O mnie: doradca kariery i była rekruterka"
        description="Poznaj moje doświadczenie w rekrutacji i dowiedz się, jak pomagam w tworzeniu CV, przygotowaniu do rozmów rekrutacyjnych i poszukiwaniu pracy."
        path="/o-mnie"
        keywords={["była rekruterka", "doradca kariery", "kim jestem"]}
      />

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[280px_1fr] lg:px-8">
        <div className="mx-auto size-48 overflow-hidden rounded-full bg-muted md:mx-0 md:size-64">
          <Image
            src="/justyna.png"
            alt="Justyna - doradca kariery i była rekruterka"
            width={256}
            height={256}
            className="size-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Cześć, tu Justyna 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Od kilku lat pracuję po drugiej stronie procesu rekrutacyjnego -
            widziałam setki CV i przeprowadziłam dziesiątki rozmów
            kwalifikacyjnych. Wiem, na co rekruterzy zwracają uwagę w pierwszych
            kilkunastu sekundach i jakie pytania naprawdę decydują o wyniku
            rozmowy.
          </p>
          <p className="text-lg text-muted-foreground">
            Dziś to doświadczenie wykorzystuję, żeby pomagać kandydatom po
            drugiej stronie - przygotować dokumenty i strategię, które realnie
            zwiększają szansę na wymarzoną pracę. Pracuję zarówno z osobami
            wchodzącymi na rynek pracy, jak i tymi, które zmieniają branżę lub
            awansują na wyższe stanowiska.
          </p>
          <p className="text-lg text-muted-foreground">
            Wierzę, że dobre CV i pewność siebie na rozmowie rekrutacyjnej to
            nie kwestia talentu, tylko dobrze dobranej strategii - i chętnie
            pomogę Ci ją znaleźć.
          </p>
        </div>
      </section>

      <CTA
        title="Porozmawiajmy o Twojej karierze"
        description="Umów bezpłatną rozmowę wstępną i sprawdź, jak mogę Ci pomóc."
      />
    </>
  );
}
