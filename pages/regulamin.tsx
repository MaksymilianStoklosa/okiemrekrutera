import Link from "next/link";
import { Seo } from "@/components/seo/Seo";
import { siteConfig } from "@/data/site";

export default function RegulaminPage() {
  return (
    <>
      <Seo
        title="Regulamin świadczenia usług"
        description="Regulamin świadczenia usług konsultacji kariery, tworzenia i poprawy CV, przygotowania do rozmów rekrutacyjnych oraz optymalizacji profilu LinkedIn na stronie okiemrekrutera.pl."
        path="/regulamin"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Regulamin świadczenia usług
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ostatnia aktualizacja: lipiec 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-a:text-primary">
          <p>
            <strong>Uwaga:</strong> poniższy tekst jest wersją roboczą i przed
            publikacją strony powinien zostać zweryfikowany przez prawnika.
          </p>

          <h2>1. Postanowienia ogólne</h2>
          <p>
            Niniejszy regulamin (dalej: „Regulamin”) określa zasady świadczenia
            usług drogą elektroniczną przez {siteConfig.name}
            (dalej: „Usługodawca”) za pośrednictwem strony internetowej{" "}
            {siteConfig.url} (dalej: „Serwis”). Kontakt z Usługodawcą jest
            możliwy pod adresem e-mail:{" "}
            <a href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>

          <h2>2. Definicje</h2>
          <p>
            <strong>Klient</strong> - osoba fizyczna korzystająca z usług
            oferowanych w Serwisie. <strong>Usługi</strong> - usługi opisane w
            ofercie Serwisu, w tym m.in. poprawa i pisanie CV, przygotowanie do
            rozmowy rekrutacyjnej, optymalizacja profilu LinkedIn oraz analiza
            rynku pracy. <strong>Zamówienie</strong> - oświadczenie woli Klienta
            zmierzające do zawarcia umowy o świadczenie wybranej Usługi, złożone
            za pośrednictwem formularza kontaktowego, e-mail lub innej ustalonej
            formy komunikacji.
          </p>

          <h2>3. Rodzaj i zakres usług</h2>
          <p>
            Usługodawca świadczy usługi doradztwa zawodowego opisane szczegółowo
            w zakładce „Oferta” oraz „Cennik” Serwisu. Zakres, czas realizacji i
            cena konkretnej Usługi ustalane są indywidualnie z Klientem przed
            rozpoczęciem współpracy.
          </p>

          <h2>4. Zawarcie umowy i realizacja zamówienia</h2>
          <p>
            Umowa o świadczenie Usługi zostaje zawarta w momencie potwierdzenia
            przez Usługodawcę przyjęcia Zamówienia, np. w odpowiedzi na
            zapytanie przesłane przez formularz kontaktowy. Realizacja Usługi
            rozpoczyna się po ustaleniu szczegółów współpracy oraz - jeśli
            dotyczy - po zaksięgowaniu płatności.
          </p>

          <h2>5. Płatności</h2>
          <p>
            Ceny Usług podane są w zakładce „Cennik” i są cenami brutto
            wyrażonymi w złotych polskich. Płatność następuje na zasadach
            ustalonych indywidualnie z Klientem (np. przelewem na wskazany numer
            konta) przed lub po realizacji Usługi, zgodnie z ustaleniami
            poczynionymi przed rozpoczęciem współpracy.
          </p>

          <h2>6. Prawo odstąpienia od umowy</h2>
          <p>
            Klient będący konsumentem ma prawo odstąpić od umowy zawartej na
            odległość w terminie 14 dni bez podania przyczyny, zgodnie z ustawą
            o prawach konsumenta. Jeżeli realizacja Usługi rozpoczęła się za
            wyraźną zgodą Klienta przed upływem terminu do odstąpienia od umowy,
            Klient traci prawo odstąpienia w zakresie, w jakim Usługa została
            już wykonana.
          </p>

          <h2>7. Reklamacje</h2>
          <p>
            Reklamacje dotyczące świadczonych Usług można zgłaszać na adres
            e-mail:{" "}
            <a href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            . Reklamacja powinna zawierać opis zastrzeżeń oraz oczekiwany sposób
            jej rozpatrzenia. Usługodawca rozpatruje reklamacje w terminie 14
            dni od dnia otrzymania zgłoszenia.
          </p>

          <h2>8. Odpowiedzialność</h2>
          <p>
            Usługodawca dokłada należytej staranności przy świadczeniu Usług,
            jednak nie gwarantuje konkretnego rezultatu w postaci np. otrzymania
            oferty pracy przez Klienta, gdyż zależy to od wielu czynników
            niezależnych od Usługodawcy.
          </p>

          <h2>9. Dane osobowe</h2>
          <p>
            Zasady przetwarzania danych osobowych Klientów opisane są w{" "}
            <Link href="/polityka-prywatnosci">Polityce prywatności</Link>{" "}
            Serwisu.
          </p>

          <h2>10. Postanowienia końcowe</h2>
          <p>
            W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają
            przepisy prawa polskiego, w tym Kodeksu cywilnego oraz ustawy o
            prawach konsumenta. Usługodawca zastrzega sobie prawo do zmiany
            Regulaminu, o czym poinformuje poprzez publikację nowej wersji w
            Serwisie.
          </p>
        </div>
      </section>
    </>
  );
}
