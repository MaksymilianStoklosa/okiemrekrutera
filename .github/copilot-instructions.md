# Instrukcje dla GitHub Copilot - okiemrekrutera.pl

## Stack

- Next.js 16 (Pages Router - `pages/`, NIE App Router), TypeScript, React 19.
- Tailwind CSS v4 (konfiguracja CSS-first w `styles/globals.css`, brak `tailwind.config.js`).
- shadcn/ui (komponenty w `components/ui/`, oparte o `@base-ui/react`, NIE Radix UI).
- Formularze: `react-hook-form` + `zod` (bez komponentu shadcn `Form` - nie istnieje w tym rejestrze, budować ręcznie z `Input`/`Textarea`/`Label`/`Button`).
- Blog: pliki MDX w `content/blog/*.mdx`.

## Ważne: ta wersja Next.js może się różnić od danych treningowych

Przed użyciem nietypowego/nowszego API Next.js sprawdź `node_modules/next/dist/docs/` (sekcja `02-pages` dla Pages Router).

## Styling - zasady obowiązkowe

- **Wszystkie style wyłącznie przez klasy Tailwind w JSX (`className`)**. Nie pisz `style={{ ... }}`, nie twórz plików `*.module.css`, nie używaj styled-components.
- Kolory, promienie zaokrągleń i inne tokeny motywu trzymamy jako zmienne CSS w `styles/globals.css` (`:root`, `.dark`, `@theme inline`) i odwołujemy się do nich przez klasy Tailwind (np. `bg-primary`, `text-foreground`), a nie hardkodowane hexy w komponentach.
- Nowe komponenty UI dodawaj przez `npx shadcn@latest add <nazwa>`, zamiast pisać je ręcznie od zera, jeśli odpowiednik istnieje w rejestrze.

## Struktura projektu

```
/pages            ← routing (Pages Router)
/components/ui    ← komponenty shadcn (nie edytować ręcznie bez potrzeby)
/components/sections ← sekcje stron (Hero, ServicesGrid, Testimonials, itd.)
/components/layout   ← Header, Footer, Navigation
/content/blog     ← wpisy MDX
/lib              ← logika pomocnicza (mdx.ts, mail.ts, itd.)
/data             ← statyczne dane (usługi, opinie, cennik) jako typowane obiekty TS
```

## Bezpieczeństwo

- Dane z formularzy walidować **zarówno po stronie klienta (zod), jak i w API route** - nigdy nie ufaj tylko walidacji frontendowej.
- Sekrety (klucze API do wysyłki maila itp.) wyłącznie w zmiennych środowiskowych (`.env.local`), nigdy w kodzie ani w komponentach klienckich.
- Formularz kontaktowy: dodać pole honeypot i podstawowy rate-limit w API route.
- Przy renderowaniu treści MDX z zewnętrznych źródeł stosować sanityzację (np. `rehype-sanitize`).

## Dostępność

- Formularze i nawigacja muszą mieć poprawne `aria-label`/`htmlFor`, semantyczny HTML i widoczny `focus-visible`.

## Konwencje kodu

- Komponenty funkcyjne, TypeScript ze zdefiniowanymi typami propsów.
- Małe, jednozadaniowe komponenty w `components/sections`, składane na stronach w `pages/`.
- Commity małe i opisowe.
