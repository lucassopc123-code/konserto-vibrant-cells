import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="gradient-fire flex h-9 w-9 items-center justify-center rounded-md font-display text-lg text-primary-foreground">
            K
          </span>
          <span className="font-display text-2xl leading-none tracking-wide">
            Konserto <span className="text-gradient-fire">Cellular</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold uppercase tracking-widest md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a href="tel:+555599206699" className="btn-fire">
          <Phone className="h-4 w-4" /> (55) 99206-6699
        </a>
      </div>
    </header>
  );
}
