import Link from "next/link";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { Seo } from "@/components/seo/Seo";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import { services, type Service } from "@/data/services";

type ServicePageProps = {
  service: Service;
  relatedServices: Service[];
};

const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  "audyt-poprawa-cv": [
    {
      question: "Czy mogę wysłać już gotowe CV do poprawy?",
      answer:
        "Tak. W ramach audytu sprawdzam dokument pod kątem ATS, treści, układu oraz języka, a następnie przygotowuję rekomendacje i poprawki.",
    },
    {
      question:
        "Czy usługa jest dobra także dla osób, które mają już doświadczenie?",
      answer:
        "Tak. To jedna z najczęstszych sytuacji - wiele osób ma już dobry background, ale CV nie odzwierciedla ich realnych osiągnięć w sposób, który przyciąga rekrutera.",
    },
  ],
  "pakiet-start": [
    {
      question: "Czy pakiet START obejmuje również LinkedIn?",
      answer:
        "Tak. Pakiet START obejmuje stworzenie lub odświeżenie CV oraz optymalizację profilu LinkedIn pod pozycję i praktykę rekrutacyjną.",
    },
    {
      question:
        "Czy mogę zamówić ten pakiet, jeśli dopiero zaczynam szukać pracy?",
      answer:
        "Tak. To świetna opcja dla osób, które chcą mieć kompletne materiały aplikacyjne i zbudować spójny wizerunek zawodowy od pierwszego kontaktu z rekruterem.",
    },
  ],
  "pakiet-rekrutacja": [
    {
      question: "Czy w pakiecie jest symulacja rozmowy?",
      answer:
        "Tak. Oprócz dokumentów przygotowuję także symulację rozmowy rekrutacyjnej z feedbackiem i wskazówkami dotyczącymi odpowiedzi oraz mowy ciała.",
    },
    {
      question:
        "Czy to dobry wybór, jeśli szukam pracy i chcę lepiej przygotować się do procesu rekrutacji?",
      answer:
        "Tak. Ten pakiet łączy dokumenty z praktycznym treningiem odpowiadania na pytania oraz przygotowaniem do realnych etapów rekrutacyjnych.",
    },
  ],
  "pakiet-kariera": [
    {
      question: "Czy pakiet KARIERA jest dla osób zmieniających branżę?",
      answer:
        "Tak. Dla osób przechodzących z jednej ścieżki zawodowej do drugiej ten pakiet pomaga ułożyć strategię, dopasować komunikację i przygotować się do zmiany kierunku.",
    },
    {
      question: "Czy to jest bardziej konsultacja niż poprawa dokumentów?",
      answer:
        "To połączenie obu obszarów: dokumentów, strategii rekrutacyjnej i konsultacji kariery, dostosowanych do konkretnej sytuacji zawodowej klienta.",
    },
  ],
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ServicePageProps,
  { slug: string }
> = async ({ params }) => {
  const slug = params?.slug;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      notFound: true,
    };
  }

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return {
    props: {
      service,
      relatedServices,
    },
  };
};

export default function ServicePage({
  service,
  relatedServices,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const faqs = serviceFaqs[service.slug] ?? [
    {
      question: "Jak wygląda współpraca?",
      answer:
        "Proces zaczynamy od krótkiej rozmowy i analizy Twojej sytuacji zawodowej, a następnie przygotowujemy dokumenty lub strategię dopasowaną do Twoich celów.",
    },
  ];

  return (
    <>
      <Seo
        title={`${service.title} | OkiemRekrutera.pl`}
        description={service.description}
        path={`/uslugi/${service.slug}`}
        keywords={[
          service.title.toLowerCase(),
          service.shortDescription.toLowerCase(),
          "pomoc w cv",
          "rekrutacja",
          "przygotowanie do rozmowy",
        ]}
      />

      <main>
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {service.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="h-12 px-6 text-base"
              render={<Link href="/kontakt" />}
            >
              Zapytaj o ofertę
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base"
              render={<Link href="/oferta" />}
            >
              Zobacz pozostałe usługi
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">
                Co zyskasz dzięki tej usłudze?
              </h2>
              <p className="mt-4 text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <span aria-hidden="true" className="mt-1 text-primary">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-border bg-muted/30 p-6">
              <h3 className="text-xl font-semibold text-foreground">
                Najczęstsze pytania
              </h3>
              <div className="mt-5 space-y-5">
                {faqs.map((item) => (
                  <div key={item.question}>
                    <p className="font-medium text-foreground">
                      {item.question}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Pozostałe usługi
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedServices.map((related) => (
              <article
                key={related.slug}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {related.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {related.shortDescription}
                </p>
                <Link
                  href={`/uslugi/${related.slug}`}
                  className="mt-5 inline-flex text-sm font-medium text-primary hover:underline"
                >
                  Zobacz szczegóły
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <CTA />
    </>
  );
}
