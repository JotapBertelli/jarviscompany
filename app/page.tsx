"use client";

const features = [
  {
    title: "Microsites que vendem por você",
    description:
      "Páginas rápidas, otimizadas para celular e focadas em conversão, com cardápio, fotos e chamadas para WhatsApp."
  },
  {
    title: "Dashboards de gerenciamento",
    description:
      "Acompanhe pedidos, ticket médio, itens mais vendidos e horários de pico em um painel visual e simples."
  },
  {
    title: "Experiência pensada para o dono do negócio",
    description:
      "Interface intuitiva, sem termos complicados, para que qualquer gestor consiga usar no dia a dia."
  }
];

const steps = [
  {
    title: "1. Entendemos o seu negócio",
    description:
      "Conversamos sobre o tipo de lanchonete/restaurante, público, cardápio e objetivos (mais pedidos, reservas, delivery, etc.)."
  },
  {
    title: "2. Montamos o microsite e o painel",
    description:
      "Criamos o layout, configuramos o cardápio e organizamos os indicadores principais no dashboard."
  },
  {
    title: "3. Entrega rápida e suporte próximo",
    description:
      "Em poucos dias você já tem o link para compartilhar e acesso ao painel para acompanhar tudo."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <header className="border-b border-slate-800/60 backdrop-blur">
        <div className="container-page flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-brand flex items-center justify-center text-xs font-bold">
              JC
            </div>
            <span className="font-semibold tracking-tight">
              JARVIS COMPANY
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#servicos" className="hover:text-white transition-colors">
              Serviços
            </a>
            <a
              href="#beneficios"
              className="hover:text-white transition-colors"
            >
              Benefícios
            </a>
            <a href="#como-funciona" className="hover:text-white transition-colors">
              Como funciona
            </a>
          </nav>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="hidden md:inline-flex items-center rounded-full bg-brand px-4 py-2 text-sm font-medium shadow-lg shadow-blue-500/30 hover:bg-brand-dark transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <section className="container-page py-16 md:py-24 grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 mb-4">
            Especialistas em food service digital
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Microsites e dashboards sob medida para{" "}
            <span className="text-brand-light">lanchonetes e restaurantes</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base mb-6 max-w-xl">
            A JARVIS COMPANY cria experiências digitais que conectam o seu
            cardápio aos seus clientes e entregam dados claros para você
            gerir o negócio com segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium shadow-lg shadow-blue-500/30 hover:bg-brand-dark transition-colors"
            >
              Quero falar com um especialista
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 hover:border-slate-500 transition-colors"
            >
              Ver como podemos ajudar
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Ideal para: hamburguerias, pizzarias, cafeterias, bares e
            restaurantes de todos os portes.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-brand/30 blur-3xl opacity-40" />
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-300">
                Visão geral do restaurante
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                Online
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-3">
                <p className="text-[11px] text-slate-400">Pedidos hoje</p>
                <p className="text-xl font-semibold text-slate-50">124</p>
                <p className="text-[10px] text-emerald-400 mt-1">
                  +18% vs. ontem
                </p>
              </div>
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-3">
                <p className="text-[11px] text-slate-400">Ticket médio</p>
                <p className="text-xl font-semibold text-slate-50">R$ 42,80</p>
                <p className="text-[10px] text-emerald-400 mt-1">
                  +7% este mês
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 mb-4">
              <p className="text-[11px] text-slate-400 mb-2">
                Horário de pico de pedidos
              </p>
              <div className="flex items-end gap-1 h-20">
                {[20, 35, 45, 80, 60, 30].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-brand/70"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-slate-500 mt-1">
                Maior concentração entre 19h e 21h
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300">
              <div className="rounded-lg bg-slate-900 border border-slate-800 p-2">
                <p className="text-slate-400 mb-1">Mais vendido</p>
                <p className="font-medium">Combo Burger da Casa</p>
              </div>
              <div className="rounded-lg bg-slate-900 border border-slate-800 p-2">
                <p className="text-slate-400 mb-1">Canal</p>
                <p className="font-medium">WhatsApp (52%)</p>
              </div>
              <div className="rounded-lg bg-slate-900 border border-slate-800 p-2">
                <p className="text-slate-400 mb-1">Avaliação</p>
                <p className="font-medium">4.8 / 5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="container-page py-12 md:py-16 border-t border-slate-800/60"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          O que a JARVIS COMPANY faz por você
        </h2>
        <p className="text-slate-300 text-sm md:text-base mb-8 max-w-2xl">
          Unimos microsites modernos com sistemas de gerenciamento para que
          o seu restaurante tenha presença digital forte e informação em
          tempo real para tomar decisões.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-brand/70 hover:-translate-y-1 transition-all"
            >
              <h3 className="font-medium mb-2 text-slate-50">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="beneficios"
        className="container-page py-12 md:py-16 border-t border-slate-800/60"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Benefícios para o seu restaurante
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <span className="text-brand-light font-medium">
                • Mais pedidos sem depender apenas de apps de delivery.
              </span>
            </li>
            <li>• Clientes encontrando seu cardápio direto pelo Google.</li>
            <li>
              • Menos confusão no fluxo de pedidos: tudo registrado em um só
              lugar.
            </li>
            <li>• Visão clara de faturamento, horários fortes e produtos que mais saem.</li>
          </ul>
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 text-sm text-emerald-100">
            <p className="font-medium mb-2">
              “Depois que implementamos o microsite e o painel, conseguimos
              organizar o delivery e aumentar o faturamento do turno da noite.”
            </p>
            <p className="text-emerald-300 text-xs">
              — Exemplo de cliente JARVIS COMPANY
            </p>
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        className="container-page py-12 md:py-16 border-t border-slate-800/60"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Como é trabalhar com a gente
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="font-medium mb-2 text-slate-50">
                {step.title}
              </h3>
              <p className="text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-12 md:py-16 border-t border-slate-800/60">
        <div className="rounded-3xl border border-brand/40 bg-gradient-to-r from-brand-dark/80 to-brand/60 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Pronto para modernizar o digital do seu restaurante?
            </h2>
            <p className="text-sm md:text-base text-slate-100 max-w-xl">
              Envie uma mensagem e vamos desenhar juntos o microsite e o
              dashboard ideais para o seu negócio.
            </p>
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-slate-50 shadow-lg hover:bg-slate-900 transition-colors"
          >
            Falar agora pelo WhatsApp
          </a>
        </div>
        <p className="mt-4 text-[11px] text-slate-400">
          Troque o número do WhatsApp acima pelo contato oficial da JARVIS
          COMPANY assim que publicar o site.
        </p>
      </section>

      <footer className="border-t border-slate-800/60 py-6 mt-4">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <span>© {new Date().getFullYear()} JARVIS COMPANY. Todos os direitos reservados.</span>
          <span>Microsites e sistemas de gerenciamento para lanchonetes e restaurantes.</span>
        </div>
      </footer>
    </main>
  );
}


