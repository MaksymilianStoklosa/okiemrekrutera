import Link from "next/link";
import { Seo } from "@/components/seo/Seo";
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
          Ostatnia aktualizacja: sierpień 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-a:text-primary">
          <h3>§ 1. Postanowienia ogólne i dane Usługodawcy</h3>
          <ol>
            <li>
              Niniejszy Regulamin określa zasady i warunki korzystania z usług
              świadczonych za pośrednictwem serwisu internetowego działającego
              pod adresem{" "}
              <a href="https://okiemrekrutera.pl">https://okiemrekrutera.pl</a>{" "}
              (dalej: „Serwis”).
            </li>
            <li>
              Usługodawcą jest <strong>Justyna Wróbel</strong>, prowadząca
              działalność nieewidencjonowaną (nierejestrowaną) w rozumieniu art.
              5 ustawy z dnia 6 marca 2018 r. - Prawo przedsiębiorców, adres do
              korespondencji:{" "}
              <strong>ul. Skrzydlewskiego 27/4, 43-382 Bielsko-Biała</strong>,
              e-mail:{" "}
              <a href="mailto:kontakt@okiemrekrutera.pl">
                kontakt@okiemrekrutera.pl
              </a>{" "}
              (dalej: „Usługodawca”).
            </li>
            <li>
              Regulamin jest udostępniany nieodpłatnie w Serwisie w formie
              umożliwiającej jego pobranie, utrwalenie oraz wydruk.
            </li>
            <li>
              Przed złożeniem Zamówienia Klient jest zobowiązany do zapoznania
              się z treścią Regulaminu i jego akceptacji.
            </li>
          </ol>

          <h3>§ 2. Definicje</h3>
          <ol>
            <li>
              <strong>Klient</strong> - osoba fizyczna posiadająca pełną
              zdolność do czynności prawnych, osoba prawna lub jednostka
              organizacyjna nieposiadająca osobowości prawnej, korzystająca z
              Usług oferowanych przez Usługodawcę.
            </li>
            <li>
              <strong>Konsument</strong> - Klient będący osobą fizyczną
              dokonującą z Usługodawcą czynności prawnej niezwiązanej
              bezpośrednio z jej działalnością gospodarczą lub zawodową.
            </li>
            <li>
              <strong>Przedsiębiorca na prawach Konsumenta</strong> - osoba
              fizyczna zawierająca umowę bezpośrednio związaną z jej
              działalnością gospodarczą, gdy z treści tej umowy wynika, że nie
              posiada ona dla niej charakteru zawodowego.
            </li>
            <li>
              <strong>Usługa</strong> - usługa doradztwa zawodowego,
              rekrutacyjnego lub tworzenia dokumentów aplikacyjnych świadczona
              drogą elektroniczną lub na odległość.
            </li>
            <li>
              <strong>Zamówienie</strong> - oświadczenie woli Klienta
              zmierzające bezpośrednio do zawarcia Umowy o świadczenie Usługi.
            </li>
            <li>
              <strong>Umowa</strong> - umowa o świadczenie Usług świadczonych
              drogą elektroniczną lub na odległość, zawarta pomiędzy Usługodawcą
              a Klientem.
            </li>
            <li>
              <strong>Dni robocze</strong> - dni od poniedziałku do piątku, z
              wyłączeniem dni ustawowo wolnych od pracy w Polsce.
            </li>
          </ol>

          <h3>§ 3. Rodzaje i zakres Usług</h3>
          <ol>
            <li>
              Usługodawca świadczy usługi z zakresu doradztwa kariery i wsparcia
              procesów rekrutacyjnych, w tym w szczególności:
              <ol type="a">
                <li>
                  <strong>Pakiet Podstawowy</strong> - audyt i poprawa
                  istniejącego CV, dopasowanie słów kluczowych pod systemy ATS,
                  1 runda poprawek;
                </li>
                <li>
                  <strong>Pakiet Standard</strong> - pisanie CV od zera lub
                  pełna przebudowa istniejącego dokumentu, optymalizacja profilu
                  na portalu LinkedIn, 2 rundy poprawek;
                </li>
                <li>
                  <strong>Pakiet Premium</strong> - zakres Pakietu Standard
                  rozszerzony o symulację rozmowy rekrutacyjnej (
                  <em>mock interview</em>) oraz analizę rynku pracy i strategię
                  poszukiwania pracy;
                </li>
                <li>
                  <strong>Usługi Indywidualne</strong> - wsparcie i doradztwo w
                  zakresie ustalanym indywidualnie z Klientem na podstawie
                  zapytania przesłanego na adres e-mail Usługodawcy.
                </li>
              </ol>
            </li>
            <li>
              Usługodawca oferuje również możliwość przeprowadzenia wstępnej,
              bezpłatnej konsultacji zapoznawczej przed złożeniem Zamówienia.
            </li>
            <li>
              Cennik Usług publikowany jest w Serwisie w zakładce „Cennik”.
              Wszystkie podane ceny są cenami brutto wyrażonymi w złotych
              polskich (PLN).
            </li>
          </ol>

          <h3>§ 4. Zawarcie Umowy i płatności</h3>
          <ol>
            <li>
              Do zawarcia Umowy dochodzi poprzez złożenie Zamówienia za
              pośrednictwem formularza kontaktowego, wiadomości e-mail lub po
              uzgodnieniu warunków podczas wstępnej konsultacji oraz dokonaniu
              opłaty za wybrana Usługę.
            </li>
            <li>
              Usługi świadczone są w modelu przedpłatowym (
              <strong>100% płatności z góry</strong>).
            </li>
            <li>
              Dostępne formy płatności to:
              <ol type="a">
                <li>
                  tradycyjny przelew bankowy na rachunek podany przez
                  Usługodawcę,
                </li>
                <li>płatność systemem BLIK na podany numer telefonu/konta.</li>
              </ol>
            </li>
            <li>
              Za dzień dokonania płatności uznaje się moment zaksięgowania
              środków na rachunku bankowym Usługodawcy.
            </li>
          </ol>

          <h3>§ 5. Realizacja Usług i zasady poprawek</h3>
          <ol>
            <li>
              Realizacja Usługi rozpoczyna się niezwłocznie po zaksięgowaniu
              płatności oraz dostarczeniu przez Klienta wszystkich materiałów i
              informacji niezbędnych do wykonania zlecenia (np. dotychczasowego
              CV, wypełnionej ankiety lub opisu doświadczenia zawodowego).
            </li>
            <li>
              Standardowy czas przygotowania i przekazania pierwszej wersji
              materiałów (np. projektu CV lub treści profilu LinkedIn) wynosi do{" "}
              <strong>7 dni roboczych</strong> od dnia spełnienia warunków
              określonych w ust. 1.
            </li>
            <li>
              Klientowi przysługuje prawo do zgłoszenia poprawek zgodnie z
              zakresem wybranego Pakietu:
              <ol type="a">
                <li>
                  <strong>Pakiet Podstawowy</strong> - 1 runda poprawek,
                </li>
                <li>
                  <strong>Pakiet Standard oraz Premium</strong> - 2 rundy
                  poprawek.
                </li>
              </ol>
            </li>
            <li>
              Poprawki muszą zostać zgłoszone w formie pisemnej lub dokumentowej
              (wiadomość e-mail) w terminie{" "}
              <strong>7 dni kalendarzowych</strong> od dnia przekazania przez
              Usługodawcę projektu materiałów.
            </li>
            <li>
              Nie zgłoszenie poprawek w terminie wskazanym w ust. 4 uznaje się
              za ostateczną akceptację wykonanej Usługi bez zastrzeżeń.
            </li>
            <li>
              Poprawki wykraczające poza zakres wybranego Pakietu lub zgłoszone
              po upływie terminu stanowią dodatkowo płatną usługę, wycenianą
              indywidualnie.
            </li>
            <li>
              <strong>Forma i sposób dostarczenia materiałów:</strong>
              <ol type="a">
                <li>
                  Wszelkie materiały stanowiące rezultat świadczonych Usług (w
                  tym w szczególności: pliki CV, treści do profilu LinkedIn,
                  instrukcje, wskazówki oraz inne materiały pomocnicze i
                  poradniki) dostarczane są Klientowi{" "}
                  <strong>wyłącznie drogą elektroniczną na adres e-mail</strong>{" "}
                  podany podczas składania Zamówienia.
                </li>
                <li>
                  Projekt CV dostarczany jest Klientowi w formacie edytowalnym
                  (np. <code>.docx</code> lub <code>.rtf</code>) oraz/lub w
                  formacie gotowym do publikacji/druku (np. <code>.pdf</code>).
                </li>
                <li>
                  Materiały pomocnicze, instrukcje oraz wskazówki dotyczące
                  profilu LinkedIn przekazywane są w formie pliku{" "}
                  <code>.pdf</code>, pliku tekstowego lub bezpośrednio w treści
                  wiadomości e-mail.
                </li>
                <li>
                  Za moment skutecznego dostarczenia materiałów uznaje się
                  moment wysłania przez Usługodawcę wiadomości e-mail
                  zawierającej gotowe materiały lub aktywny link do ich pobrania
                  na adres e-mail Klienta.
                </li>
                <li>
                  Klient jest zobowiązany do podania poprawnego adresu e-mail
                  oraz sprawdzania folderu SPAM/Odebrane.
                </li>
              </ol>
            </li>
          </ol>

          <h3>§ 6. Zasady prowadzenia Konsultacji Online (Google Meet)</h3>
          <ol>
            <li>
              Konsultacje oraz symulacje rozmów rekrutacyjnych odbywają się w
              formie online za pośrednictwem platformy{" "}
              <strong>Google Meet</strong>.
            </li>
            <li>
              Link do spotkania przesyłany jest Klientowi na podany przy
              zamówieniu adres e-mail najpóźniej na 2 godziny przed planowaną
              sesją.
            </li>
            <li>
              Klient ma prawo do zmiany terminu lub odwołania spotkania bez
              utraty opłaconej sesji, pod warunkiem poinformowania Usługodawcy
              na adres e-mail{" "}
              <a href="mailto:kontakt@okiemrekrutera.pl">
                kontakt@okiemrekrutera.pl
              </a>{" "}
              z wyprzedzeniem wynoszącym <strong>co najmniej 12 godzin</strong>{" "}
              przed wyznaczoną godziną spotkania.
            </li>
            <li>
              W przypadku niepoinformowania Usługodawcy w terminie określonym w
              ust. 3 lub niestawienia się Klienta na spotkaniu w ciągu 15 minut
              od ustalonej godziny rozpoczęcia, konsultację uznaje się za
              odbytą, a wniesiona opłata nie podlega zwrotowi.
            </li>
            <li>
              W przypadku odwołania spotkania przez Usługodawcę z przyczyn
              losowych, Klientowi przysługuje prawo do wyznaczenia nowego
              terminu lub zwrotu proporcjonalnej części opłaty.
            </li>
          </ol>

          <h3>§ 7. Prawa autorskie</h3>
          <ol>
            <li>
              Wszelkie materiały autorskie stworzone przez Usługodawcę na rzecz
              Klienta w wykonaniu Umowy (w szczególności treści CV, listy
              motywacyjne, opisy profilu LinkedIn) stanowią utwory w rozumieniu
              ustawy o prawie autorskim i prawach pokrewnych.
            </li>
            <li>
              Z momentem pełnego uregulowania płatności przez Klienta i
              przekazania ostatecznej wersji materiałów, Usługodawca przenosi na
              Klienta autorskie prawa majątkowe do przygotowanych materiałów na
              wszelkich znanych polach eksploatacji, w tym w szczególności w
              zakresie ich zwielokrotniania, modyfikowania, druku oraz
              publikacji w celu prowadzenia procesów rekrutacyjnych.
            </li>
            <li>
              Klient wyraża zgodę na dokonywanie wszelkich zmian i opracowań w
              otrzymanych materiałach na własne potrzeby zawodowe.
            </li>
          </ol>

          <h3>§ 8. Prawo odstąpienia od Umowy (dotyczy Konsumentów)</h3>
          <ol>
            <li>
              Konsumentowi oraz Przedsiębiorcy na prawach Konsumenta przysługuje
              prawo do odstąpienia od Umowy zawartej na odległość w terminie 14
              dni bez podania przyczyny.
            </li>
            <li>
              Aby skorzystać z prawa odstąpienia, Klient musi poinformować
              Usługodawcę o swojej decyzji w drodze jednoznacznego oświadczenia
              (np. pismo wysłane pocztą e-mail na adres:{" "}
              <a href="mailto:kontakt@okiemrekrutera.pl">
                kontakt@okiemrekrutera.pl
              </a>
              ).
            </li>
            <li>
              <strong>Wyłączenie prawa odstąpienia:</strong> Zgodnie z art. 38
              ust. 1 pkt 1 ustawy o prawach konsumenta, prawo do odstąpienia od
              umowy zawartej na odległość <strong>nie przysługuje</strong>{" "}
              Konsumentowi po wykonaniu w pełni Usługi przez Usługodawcę, jeżeli
              rozpoczęcie świadczenia nastąpiło za wyraźną i uprzednią zgodą
              Konsumenta przed upływem terminu do odstąpienia od umowy oraz po
              poinformowaniu go o utracie prawa do odstąpienia.
            </li>
            <li>
              W przypadku odstąpienia od umowy w trakcie jej realizacji (przed
              jej pełnym wykonaniem), Konsument ma obowiązek zapłaty za
              świadczenia spełnione do momentu odstąpienia.
            </li>
          </ol>

          <h3>§ 9. Reklamacje i odpowiedzialność</h3>
          <ol>
            <li>
              Usługodawca zobowiązuje się do świadczenia Usług z należytą
              starannością, w oparciu o aktualną wiedzę z zakresu rekrutacji i
              rynku pracy.
            </li>
            <li>
              Usługodawca świadczy usługi o charakterze starannego działania, a
              nie rezultatu. Usługodawca <strong>nie gwarantuje</strong>{" "}
              uzyskania przez Klienta zatrudnienia, zaproszeń na rozmowy
              kwalifikacyjne ani zakwalifikowania się do kolejnych etapów
              rekrutacji, gdyż czynniki te zależą od decyzji stron trzecich
              (pracodawców).
            </li>
            <li>
              Reklamacje dotyczące świadczonych Usług można składać na adres
              e-mail:{" "}
              <a href="mailto:kontakt@okiemrekrutera.pl">
                kontakt@okiemrekrutera.pl
              </a>
              .
            </li>
            <li>
              Zgłoszenie reklamacyjne powinno zawierać opis zastrzeżeń oraz dane
              umożliwiające identyfikację Klienta i Zamówienia.
            </li>
            <li>
              Usługodawca rozpatruje reklamację w terminie{" "}
              <strong>14 dni</strong> od dnia jej otrzymania i przekazuje
              odpowiedź na adres e-mail zgłaszającego.
            </li>
          </ol>

          <h3>§ 10. Dane osobowe</h3>
          <p>
            Zasady przetwarzania i ochrony danych osobowych Klientów określone
            są w dokumencie{" "}
            <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>{" "}
            dostępnym w Serwisie.
          </p>

          <h3>§ 11. Postanowienia końcowe</h3>
          <ol>
            <li>
              W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie
              mają przepisy prawa polskiego, w szczególności Kodeksu cywilnego,
              Ustawy o prawach konsumenta oraz Ustawy o prawie autorskim i
              prawach pokrewnych.
            </li>
            <li>
              Usługodawca zastrzega sobie prawo do wprowadzania zmian w
              Regulaminie z ważnych przyczyn (np. zmiana przepisów prawa, zmiana
              oferty). Zmiany Regulaminu wchodzą w życie z dniem ich publikacji
              i nie wpływają na Umowy zawarte przed datą ich wejścia w życie.
            </li>
            <li>
              Ewentualne spory powstałe pomiędzy Usługodawcą a Klientem będącym
              Konsumentem będą rozstrzygane przez właściwe sądy powszechne.
              Spory z Klientami niebędącymi Konsumentami będą rozstrzygane przez
              sąd właściwy dla siedziby/miejsca zamieszkania Usługodawcy.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
