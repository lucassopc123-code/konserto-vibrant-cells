import { createFileRoute } from "@tanstack/react-router";
import { BatteryCharging, Droplets, Cpu, Smartphone, ShieldCheck, Unlock } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços e Consertos — Konserto Cellular" },
      {
        name: "description",
        content:
          "Troca de tela, bateria, reparo de placa, limpeza de oxidação e venda de aparelhos em Santa Maria - RS.",
      },
      { property: "og:title", content: "Serviços e Consertos — Konserto Cellular" },
      {
        property: "og:description",
        content: "Assistência técnica especializada em celulares na Av. Borges de Medeiros.",
      },
    ],
  }),
  component: Servicos,
});

const itens = [
  { icon: Smartphone, t: "Troca de tela", d: "Displays originais e compatíveis com garantia de 90 dias." },
  { icon: BatteryCharging, t: "Troca de bateria", d: "Diagnóstico de saúde da bateria e substituição no mesmo dia." },
  { icon: Droplets, t: "Oxidação e queda d'água", d: "Limpeza ultrassônica de placa e recuperação de contatos." },
  { icon: Cpu, t: "Reparo de placa", d: "Microssoldagem, conector de carga, câmera e botões." },
  { icon: Unlock, t: "Desbloqueio e software", d: "Formatação, atualização e recuperação de sistema." },
  { icon: ShieldCheck, t: "Aparelhos com garantia", d: "Novos e seminovos revisados, com nota e garantia da loja." },
];

export default function Servicos() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20">
      <h1 className="text-5xl md:text-6xl">
        Nossos <span className="text-gradient-fire">serviços</span>
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Orçamento sem compromisso e reparo feito por técnico experiente. A maioria dos serviços
        fica pronta no mesmo dia.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map(({ icon: Icon, t, d }) => (
          <article key={t} className="rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary">
            <Icon className="h-6 w-6 text-primary" />
            <h2 className="mt-4 text-2xl">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </article>
        ))}
      </div>

      <div className="glow mt-14 rounded-xl gradient-fire p-8 text-primary-foreground">
        <h2 className="text-3xl">Não sabe qual é o problema?</h2>
        <p className="mt-2 max-w-xl text-sm opacity-90">
          Traga o aparelho na loja ou chame no telefone: fazemos o diagnóstico e passamos o valor
          antes de qualquer reparo.
        </p>
        <a
          href="tel:+555599206699"
          className="mt-6 inline-flex rounded-md bg-background px-6 py-3 text-sm font-bold uppercase tracking-widest text-foreground"
        >
          (55) 99206-6699
        </a>
      </div>
    </div>
  );
}
