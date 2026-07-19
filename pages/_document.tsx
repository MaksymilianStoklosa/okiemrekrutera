import { Html, Head, Main, NextScript } from "next/document";
import { inter, ptSerif } from "@/lib/fonts";

export default function Document() {
  return (
    <Html lang="pl" className={`${inter.variable} ${ptSerif.variable}`}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
