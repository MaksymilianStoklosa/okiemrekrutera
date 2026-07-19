import { Seo } from "@/components/seo/Seo";
import { siteConfig } from "@/data/site";

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <Seo
        title="Polityka prywatności"
        description="Informacje o przetwarzaniu danych osobowych zbieranych przez formularz kontaktowy na stronie okiemrekrutera.pl."
        path="/polityka-prywatnosci"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Polityka prywatności
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ostatnia aktualizacja: styczeń 2025
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-a:text-primary">
          <p>
            <strong>Uwaga:</strong> poniższy tekst jest wersją roboczą i przed
            publikacją strony powinien zostać zweryfikowany przez prawnika
            specjalizującego się w ochronie danych osobowych (RODO/GDPR).
          </p>

          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych przetwarzanych w związku z
            korzystaniem z formularza kontaktowego na stronie {siteConfig.url}{" "}
            jest {siteConfig.name}. Kontakt w sprawach dotyczących danych
            osobowych:{" "}
            <a href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>

          <h2>2. Jakie dane zbieramy</h2>
          <p>
            Za pośrednictwem formularza kontaktowego zbierane są: imię, adres
            e-mail, wybrana usługa oraz treść wiadomości. Dane te są
            przekazywane wyłącznie w celu udzielenia odpowiedzi na zapytanie.
          </p>

          <h2>3. Cel i podstawa prawna przetwarzania</h2>
          <p>
            Dane przetwarzane są w celu odpowiedzi na przesłane zapytanie, na
            podstawie zgody (art. 6 ust. 1 lit. a RODO) wyrażanej podczas
            wysyłki formularza.
          </p>

          <h2>4. Okres przechowywania danych</h2>
          <p>
            Dane przechowywane są przez czas niezbędny do udzielenia odpowiedzi
            oraz obsługi ewentualnej dalszej korespondencji, nie dłużej niż
            przez 12 miesięcy od ostatniego kontaktu.
          </p>

          <h2>5. Odbiorcy danych</h2>
          <p>
            Dane mogą być przetwarzane przez dostawcę usługi wysyłki wiadomości
            e-mail (Resend) wyłącznie w celu technicznej realizacji wysyłki.
          </p>

          <h2>6. Twoje prawa</h2>
          <p>
            Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia,
            ograniczenia przetwarzania, przenoszenia danych oraz wniesienia
            sprzeciwu, a także prawo do cofnięcia zgody w dowolnym momencie i
            wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
          </p>

          <h2>7. Pliki cookies</h2>
          <p>
            Strona może wykorzystywać pliki cookies niezbędne do jej
            prawidłowego działania. Szczegółowe informacje zostaną uzupełnione
            po wdrożeniu narzędzi analitycznych.
          </p>
        </div>
      </section>
    </>
  );
}
