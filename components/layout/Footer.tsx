import Link from "next/link";
import { footerLinks, siteConfig, socialLinks } from "@/data/site";
import { LinkedinIcon } from "@/components/icons/SocialIcons";

const socialIconMap = {
  linkedin: LinkedinIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-primary-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 max-w-md text-sm text-primary-foreground/80">
            {siteConfig.tagline}
          </p>
          <div className="mt-3 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-background text-muted-foreground ring-1 ring-border transition-colors hover:text-secondary hover:ring-secondary/50"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-primary-foreground/80 hover:text-primary-foreground"
          >
            {siteConfig.contactEmail}
          </a>
          <nav aria-label="Nawigacja w stopce" className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="px-4 py-4 text-center text-xs text-primary-foreground/70 sm:px-6 lg:px-8">
        © {year} {siteConfig.name}. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
