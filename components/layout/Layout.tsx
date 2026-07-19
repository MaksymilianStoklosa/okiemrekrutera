import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo";
import { inter, ptSerif } from "@/lib/fonts";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${inter.variable} ${ptSerif.variable} flex min-h-screen flex-col`}
    >
      <JsonLd data={[getOrganizationJsonLd(), getWebsiteJsonLd()]} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
