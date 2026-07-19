# Plan projektu: okiemrekrutera.pl

## 1. Podsumowanie założeń

- **Marka:** okiemrekrutera.pl - ciepły/przyjazny + nowoczesny minimalizm, kolor przewodni: **zieleń** (+ neutralne biele/szarości jako tło, granat/grafit jako kolor tekstu/kontrastu).
- **Grupa docelowa:** szeroka - juniorzy, mid-level, osoby zmieniające branżę; ton komunikacji uniwersalny, ale empatyczny.
- **Język:** tylko polski (na start).
- **Model kontaktu:** formularz kontaktowy + e-mail, bez płatności online, bez kalendarza rezerwacji (na start).
- **Zakres:** pełny zestaw sekcji funkcjonalnych strony (bez wielojęzyczności/płatności - patrz Faza 4).

## 2. Oferta usług

Usługi na start:

1. Poprawa / redakcja CV
2. Pisanie CV od zera
3. Przygotowanie do rozmowy rekrutacyjnej (mock interview)
4. Tworzenie / optymalizacja profilu LinkedIn
5. Analiza rynku pracy i strategia poszukiwania pracy

**Do rozważenia w przyszłości (upsell):** list motywacyjny, negocjacje wynagrodzenia, video CV, personal branding, coaching kariery.

## 3. Mapa strony (sitemap)

```
/                     → Strona główna (hero, skrót oferty, opinie, CTA do kontaktu)
/oferta               → Lista usług z opisem
/cennik               → Pakiety cenowe
/o-mnie               → Historia, doświadczenie, wiarygodność
/blog                 → Lista wpisów + filtrowanie po kategoriach
/blog/[slug]          → Pojedynczy wpis (MDX)
/kontakt              → Formularz kontaktowy
/polityka-prywatnosci → Wymagane przy zbieraniu danych z formularza (RODO)
```

## 4. Stack technologiczny

- Next.js (Pages Router) + TypeScript
- shadcn/ui (Radix UI + Tailwind CSS)
- Blog: MDX w repozytorium (`content/blog/*.mdx`)
- Formularz kontaktowy: API route + serwis mailowy (Resend/Nodemailer), sekrety w `.env.local`
- Hosting: Vercel, domena okiemrekrutera.pl (do zakupu)
- SEO/Analytics: meta tagi, sitemap.xml, robots.txt, Google Analytics/Plausible

## 5. Struktura projektu

```
/pages
  /api/contact.ts
  /blog/[slug].tsx
  /blog/index.tsx
  /oferta/index.tsx
  /cennik.tsx
  /o-mnie.tsx
  /kontakt.tsx
  /polityka-prywatnosci.tsx
  _app.tsx
  _document.tsx
  index.tsx
/components
  /ui/           ← komponenty shadcn
  /sections/     ← Hero, ServicesGrid, Testimonials, PricingTable, CTA, BlogPreview
  /layout/       ← Header, Footer, Navigation
/content
  /blog/*.mdx
/lib
  mdx.ts
  mail.ts
/styles
  globals.css
/public
```

## 6. Design system

- Kolory: zieleń jako akcent, biel/jasny szary jako tło, grafit/granat na tekst (kontrast WCAG AA).
- Typografia: czytelna czcionka sans-serif (np. Inter/Geist).
- Komponenty shadcn: Button, Card, Badge, Accordion (FAQ), Tabs (pakiety), Avatar (opinie), Form (react-hook-form + zod).

## 7. Funkcjonalności dodatkowe

- Opinie klientów (statyczny JSON na start, łatwy do podmiany).
- Cennik z 2-3 pakietami.
- Historie sukcesu klientów „przed/po” publikowane jako wpisy blogowe (kategoria „historie-sukcesu”) - treści przykładowe, oznaczone jako ilustracyjne.
- Formularz kontaktowy z walidacją client + server-side, zgoda RODO, ochrona anty-spam (honeypot).

## 8. SEO i zgodność prawna

- Meta title/description i Open Graph per strona.
- Dane strukturalne (schema.org).
- Polityka prywatności (RODO) - obowiązkowa.
- sitemap.xml, robots.txt.

## 9. Etapy realizacji (roadmap)

**Faza 1 - Fundament:** setup Next.js + TS + Tailwind + shadcn/ui, design system, strona główna, kontakt.
**Faza 2 - Treść i konwersja:** cennik, opinie, blog MDX (w tym historie sukcesu klientów), o mnie.
**Faza 3 - Jakość i widoczność:** SEO, analytics, dostępność, wydajność.
**Faza 4 - Rozwój (później):** i18n PL/EN, płatności online, kalendarz rezerwacji, nowe usługi.

## 10. Dobre praktyki pracy z GitHub Copilot

- `.github/copilot-instructions.md` z opisem stacku i konwencji.
- Budowa komponent po komponencie, weryfikacja na bieżąco.
- Walidacja formularza client + server-side, sekrety tylko w zmiennych środowiskowych.
- Sanityzacja treści MDX (rehype-sanitize) jeśli treści od zewnętrznych autorów.
- Testy (Playwright/Jest) generowane wraz z komponentami.
- Dbałość o dostępność (aria-label, semantyka, focus states).
- Weryfikacja treści prawnych (RODO) przez prawnika przed publikacją.
- Małe, częste commity z przeglądem diffów.
- Reużywalne prompty (`.prompt.md`) dla powtarzalnych zadań.
