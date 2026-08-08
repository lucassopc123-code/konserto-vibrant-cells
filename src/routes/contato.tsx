import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Facebook, Navigation } from "lucide-react";
import { horarios } from "@/lib/horarios";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Endereço — Konserto Cellular Santa Maria" },
      {
        name: "description",
        content:
          "Konserto Cellular: Av. Borges de Medeiros, Carolina, Santa Maria - RS. Telefone (55) 99206-6699. Abre sábado às 08:30.",
      },
      { property: "og:title", content: "Contato e Endereço — Konserto Cellular" },
      {
        property: "og:description",
        content: "Fale com a loja, veja o endereço e trace a rota até a Konserto Cellular.",
      },
    ],
  }),
  component: Contato,
});

export default function Contato() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-5xl md:text-6xl">
        Fale com a <span className="text-gradient-fire">loja</span>
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="space-y-5">
          {[
            {
              icon: MapPin,
              t: "Endereço",
              d: "Av. Borges de Medeiros — Carolina, Santa Maria - RS, 97010-081 (85CG+82 Carolina)",
            },
            { icon: Phone, t: "Telefone", d: "(55) 99206-6699" },
            { icon: Facebook, t: "Redes", d: "facebook.com" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 rounded-xl border border-border bg-card p-6">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="text-xl">{t}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
            <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <div className="w-full">
              <h2 className="text-xl">Horário de funcionamento</h2>
              <ul className="mt-3 divide-y divide-border/60 text-sm">
                {horarios.map((h) => (
                  <li key={h.dia} className="flex items-start justify-between gap-4 py-2">
                    <span className="text-muted-foreground">
                      {h.dia}
                      {h.nota && (
                        <span className="block text-xs text-primary">({h.nota})</span>
                      )}
                    </span>
                    <span className="text-right">
                      {h.periodos.map((p) => (
                        <span key={p} className="block">
                          {p}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Os horários podem ser diferentes em feriados.
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Konserto+Cellular+Santa+Maria+RS"
            target="_blank"
            rel="noreferrer"
            className="btn-fire"
          >
            <Navigation className="h-4 w-4" /> Traçar rota
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="Mapa da Konserto Cellular"
            src="https://www.google.com/maps?q=Av.+Borges+de+Medeiros,+Carolina,+Santa+Maria+-+RS,+97010-081&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
