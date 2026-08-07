import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Wrench, ShoppingBag, Truck, Star, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/hero-konserto.jpg";
import acessoriosImg from "@/assets/acessorios.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Konserto Cellular — Loja de Celulares em Santa Maria/RS" },
      {
        name: "description",
        content:
          "Celulares, acessórios e assistência técnica em Santa Maria - RS. Compras na loja, retirada e entrega. (55) 99206-6699.",
      },
      { property: "og:title", content: "Konserto Cellular — Loja de Celulares em Santa Maria/RS" },
      {
        property: "og:description",
        content: "Venda de celulares, acessórios e conserto rápido na Av. Borges de Medeiros.",
      },
    ],
  }),
  component: Home,
});

const servicos = [
  { icon: Wrench, titulo: "Assistência técnica", texto: "Troca de tela, bateria, conectores e reparo de placa." },
  { icon: Smartphone, titulo: "Venda de aparelhos", texto: "Novos e seminovos com garantia e procedência." },
  { icon: ShoppingBag, titulo: "Acessórios", texto: "Capas, películas, fones, carregadores e power banks." },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Técnico da Konserto Cellular reparando um celular na bancada"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Star className="h-3.5 w-3.5 fill-current" /> 4,7 · 12 avaliações
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[0.95] md:text-7xl">
            Seu celular <span className="text-gradient-fire">consertado hoje</span>, do jeito certo.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Loja de celulares em Santa Maria com venda de aparelhos, acessórios e assistência
            técnica especializada. Compre na loja, retire ou receba em casa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+555599206699" className="btn-fire">Chamar agora</a>
            <Link to="/servicos" className="btn-ghost-fire">Ver serviços</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-6 text-sm sm:grid-cols-3">
          {[
            { icon: ShoppingBag, t: "Compras na loja" },
            { icon: MapPin, t: "Retirada na loja" },
            { icon: Truck, t: "Entrega" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-primary" />
              <span className="font-semibold uppercase tracking-widest">{t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl md:text-5xl">O que fazemos</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {servicos.map(({ icon: Icon, titulo, texto }) => (
            <article
              key={titulo}
              className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary"
            >
              <span className="gradient-fire mb-5 flex h-11 w-11 items-center justify-center rounded-lg">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <h3 className="text-2xl">{titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 md:grid-cols-2">
        <img
          src={acessoriosImg}
          alt="Acessórios para celular: capas, fones e carregadores"
          width={1200}
          height={900}
          loading="lazy"
          className="glow rounded-xl"
        />
        <div>
          <h2 className="text-4xl md:text-5xl">Acessórios pra todo tipo de aparelho</h2>
          <p className="mt-4 text-muted-foreground">
            Trabalhamos com capas, películas de vidro, fones com e sem fio, carregadores rápidos,
            cabos reforçados e power banks — sempre com testes na hora da compra.
          </p>
          <div className="mt-7">
            <Link to="/contato" className="btn-fire">Onde estamos</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-12">
          <div>
            <h2 className="text-3xl">Av. Borges de Medeiros — Carolina, Santa Maria/RS</h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" /> Fechado · Abre sáb. às 08:30
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Konserto+Cellular+Santa+Maria+RS"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost-fire"
          >
            Traçar rota
          </a>
        </div>
      </section>
    </div>
  );
}
