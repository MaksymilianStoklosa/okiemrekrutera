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
        <div className="relative mx-auto size-48 md:mx-0 md:size-64">
          <div className="size-full overflow-hidden rounded-full bg-muted ring-4 ring-primary/20">
            <Image
              src="/justyna.png"
              alt="Justyna - doradca kariery i była rekruterka"
              width={256}
              height={256}
              className="size-full object-cover"
              priority
            />
          </div>
          <div
            aria-hidden="true"
            className="avatar-orbit pointer-events-none absolute inset-0"
          >
            <span className="absolute top-0 left-1/2 h-px w-4.5 -translate-x-1/2 -translate-y-[calc(100%+4px)] rounded-full bg-primary shadow-[0_0_6px_1px_var(--primary)]" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Cześć, tu Justyna 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Witam Cię w moim świecie - miejscu, w którym rekrutacja nie ma
            tajemnic.
          </p>
          <p className="text-lg text-muted-foreground">
            Od ponad 5 lat jestem związana z branżą HR i rekrutacją, ze
            szczególnym uwzględnieniem dynamicznego sektora IT. Moje
            doświadczenie, obejmujące pracę w agencji rekrutacyjnej oraz w
            software house&apos;ach, dało mi unikalną, podwójną perspektywę. Z
            jednej strony doskonale rozumiem, czego oczekuje biznes i
            menedżerowie zatrudniający, a z drugiej - wiem dokładnie, jak
            poprowadzić kandydata, aby zaprezentował swój pełen potencjał.
          </p>
          <p className="text-lg text-muted-foreground">
            Założyłam Okiem rekrutera, aby podzielić się tą wiedzą i pomóc Ci
            spojrzeć na proces szukania pracy z zupełnie innej strony - ze
            strony osoby, która na co dzień czyta CV, rozmawia z kandydatami i
            wspiera procesy rekrutacyjne.
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
            Moje supermoce, które pomogą Ci zdobyć wymarzoną pracę
          </h2>
          <ul className="flex flex-col gap-3 text-lg text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">
                Łączenie kropek:
              </span>{" "}
              Przekładam Twoje dotychczasowe doświadczenie na język korzyści,
              którego szukają pracodawcy.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Praktyczne wsparcie:
              </span>{" "}
              Od lat z sukcesami wspieram kandydatów w tworzeniu profesjonalnych
              CV, optymalizacji profili na LinkedIn oraz przygotowaniach do
              stresujących rozmów kwalifikacyjnych.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Sztuczna inteligencja w służbie kariery:
              </span>{" "}
              Uczę, jak mądrze i skutecznie wykorzystywać najnowsze narzędzia
              oparte o AI, aby przyspieszyć poszukiwania pracy i świadomie
              zaprojektować swoją ścieżkę kariery.
            </li>
          </ul>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
            Moje zaplecze eksperckie
          </h2>
          <p className="text-lg text-muted-foreground">
            Jestem absolwentką kierunku Analityka i komunikacja w biznesie.
            Tematyka innowacji w obszarze zasobów ludzkich to moja pasja, co
            zaowocowało napisaniem pracy dyplomowej pt. „Sztuczna inteligencja w
            rekrutacji specjalistów branży technologicznej”.
          </p>
          <p className="text-lg text-muted-foreground">
            Stale poszerzam swoje kompetencje poprzez branżowe szkolenia (m.in.
            dotyczące technik skutecznej rekrutacji czy sztucznej inteligencji),
            aby dostarczać Ci najbardziej aktualne wskazówki z rynku pracy.
          </p>
          <p className="text-lg text-muted-foreground">
            Niezależnie od tego, czy dopiero wchodzisz na rynek pracy, czy
            planujesz całkowitą zmianę branży - pomogę Ci zaplanować ten proces
            krok po kroku.
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
