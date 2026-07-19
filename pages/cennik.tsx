import { Seo } from "@/components/seo/Seo";
import { PricingTable } from "@/components/sections/PricingTable";

export default function CennikPage() {
  return (
    <>
      <Seo
        title="Cennik: ile kosztuje pomoc w CV i konsultacja kariery"
        description="Przejrzysty cennik pomocy w CV: poprawa CV, pisanie CV od zera, optymalizacja LinkedIn oraz przygotowanie do rozmowy rekrutacyjnej. Sprawdź ceny konsultacji kariery i rekrutacji."
        path="/cennik"
        keywords={[
          "cennik cv",
          "ile kosztuje napisanie cv",
          "cena poprawy cv",
          "cennik konsultacji kariery",
        ]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Cennik
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Przejrzyste pakiety dopasowane do zakresu wsparcia, jakiego
          potrzebujesz. Każdą współpracę zaczynamy od krótkiej, bezpłatnej
          rozmowy wstępnej.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <PricingTable />
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Potrzebujesz czegoś spoza pakietów? Napisz na{" "}
          <a
            href="mailto:kontakt@okiemrekrutera.pl"
            className="font-medium text-primary hover:underline"
          >
            kontakt@okiemrekrutera.pl
          </a>{" "}
          - przygotujemy indywidualną wycenę.
        </p>
      </section>
    </>
  );
}
