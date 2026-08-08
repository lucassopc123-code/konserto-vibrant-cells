export type Horario = { dia: string; periodos: string[]; nota?: string };

export const horarios: Horario[] = [
  { dia: "Segunda-feira", periodos: ["08:30–11:30", "14:00–18:00"] },
  { dia: "Terça-feira", periodos: ["08:30–11:30", "14:00–18:00"] },
  { dia: "Quarta-feira", periodos: ["08:30–11:30", "14:00–18:00"] },
  { dia: "Quinta-feira", periodos: ["08:30–11:30", "14:00–18:00"] },
  { dia: "Sexta-feira", periodos: ["08:30–11:30", "14:00–18:00"] },
  { dia: "Sábado", periodos: ["08:30–12:00"] },
  { dia: "Domingo", periodos: ["Fechado"], nota: "Dia dos Pais" },
];
