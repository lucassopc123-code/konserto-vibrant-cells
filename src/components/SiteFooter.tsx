import { MapPin, Phone, Clock, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-2xl">
            Konserto <span className="text-gradient-fire">Cellular</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Loja de celulares, acessórios e assistência técnica em Santa Maria — RS.
            4,7 estrelas em 12 avaliações.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 font-semibold uppercase tracking-widest text-foreground">Endereço</p>
          <p className="flex gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Av. Borges de Medeiros — Carolina, Santa Maria - RS, 97010-081
          </p>
          <p className="mt-2 pl-6">Plus Code: 85CG+82 Carolina</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 font-semibold uppercase tracking-widest text-foreground">Horário</p>
          <p className="flex gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            Fechado agora · Abre sáb. às 08:30
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 font-semibold uppercase tracking-widest text-foreground">Fale conosco</p>
          <a href="tel:+555599206699" className="flex gap-2 hover:text-foreground">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> (55) 99206-6699
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex gap-2 hover:text-foreground"
          >
            <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> facebook.com
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Konserto Cellular — Santa Maria/RS
      </div>
    </footer>
  );
}
