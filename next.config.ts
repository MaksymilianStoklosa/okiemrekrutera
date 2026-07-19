import type { NextConfig } from "next";

// Ustawiane wyłącznie przez workflow GitHub Pages (patrz .github/workflows/deploy-pages.yml),
// żeby wygenerować w pełni statyczny eksport strony. Przy zwykłym `next build`/`next start`
// (np. na Vercel) ta zmienna nie jest ustawiona i konfiguracja zachowuje się jak dotychczas.
const isStaticExport = process.env.GITHUB_PAGES_EXPORT === "true";

// Repozytorium jest hostowane jako GitHub Pages "project page" pod
// https://maksymilianstoklosa.github.io/okiemrekrutera/ (dopóki DNS dla
// okiemrekrutera.pl nie zostanie skonfigurowany), więc wszystkie ścieżki
// zasobów muszą mieć prefiks /okiemrekrutera.
const basePath = "/okiemrekrutera";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  ...(isStaticExport && {
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath,
  }),
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    ...(isStaticExport && { unoptimized: true }),
  },
};

export default nextConfig;
