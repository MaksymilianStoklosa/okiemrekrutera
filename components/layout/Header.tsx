import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, siteConfig } from "@/data/site";
import { LogoPoziom } from "@/components/icons/LogoPoziom";
import { LogoPion } from "@/components/icons/LogoPion";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center text-primary transition-colors hover:text-secondary"
        >
          <LogoPion
            aria-label={siteConfig.name}
            className="h-8 w-auto sm:hidden"
          />
          <LogoPoziom
            aria-label={siteConfig.name}
            className="hidden h-4 w-auto sm:block sm:h-5"
          />
        </Link>

        <nav
          aria-label="Nawigacja główna"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-sm text-sm font-medium text-muted-foreground transition-colors after:absolute after:-top-2 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity hover:text-foreground hover:after:opacity-100 focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:after:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            className="h-10 px-6 text-base"
            render={<Link href="/kontakt" />}
          >
            Umów konsultację
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                aria-label="Otwórz menu nawigacji"
                className="md:hidden"
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav
              aria-label="Nawigacja mobilna"
              className="flex flex-col gap-1 px-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="mt-2"
                render={<Link href="/kontakt" onClick={() => setOpen(false)} />}
              >
                Umów konsultację
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
