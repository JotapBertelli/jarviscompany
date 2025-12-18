"use client";

import Image from "next/image";
import { useEffect } from "react";

const services = [
  {
    title: "Microsites",
    description:
      "Sites rápidos, profissionais e com foco em conversão. Ideal para negócios que querem se destacar e construir autoridade digital."
  },
  {
    title: "Dashboards Inteligentes",
    description:
      "Painéis completos para acompanhar métricas, pedidos, vendas e performance em tempo real. Visualize o que importa."
  },
  {
    title: "Sistemas Sob Medida",
    description:
      "Plataformas personalizadas para digitalizar processos, conectar setores e aumentar a eficiência operacional."
  },
  {
    title: "Integração com APIs",
    description:
      "Conectamos seu sistema com WhatsApp, pagamentos, ERPs e outras ferramentas para automatizar seu negócio."
  },
  {
    title: "Design Profissional",
    description:
      "Interfaces modernas, responsivas e pensadas para converter visitantes em clientes. UX que vende."
  },
  {
    title: "Suporte Contínuo",
    description:
      "Não largamos você depois da entrega. Atualizações, melhorias e suporte para fazer seu projeto crescer."
  }
];

const cases = [
  {
    category: "E-commerce",
    title: "+300% de aumento nas vendas com microsite otimizado",
    description:
      "Redesenhamos todo o fluxo de navegação e checkout para uma lanchonete, aplicando boas práticas de UX e CTAs estratégicos. Resultado: crescimento expressivo em menos de 60 dias."
  },
  {
    category: "Dashboard",
    title: "-70% de tempo operacional com painéis automatizados",
    description:
      "Desenvolvemos dashboard integrado que eliminou tarefas manuais de controle de pedidos, liberando 4 horas diárias da equipe e reduzindo erros operacionais."
  },
  {
    category: "Microsite",
    title: "+180 mil acessos anuais com SEO técnico",
    description:
      "Aplicamos técnicas de SEO, ajustes de performance e conteúdo estratégico. O tráfego mensal saiu de 7 mil para mais de 180 mil visitantes orgânicos em 9 meses."
  }
];

const challenges = [
  "Não sabe por onde começar",
  "Perde tempo com processos manuais e retrabalho",
  "Falta de visibilidade sobre métricas do negócio",
  "Dificuldade para atrair e converter clientes",
  "Falta de suporte técnico e melhorias",
  "Prejuízo com sistemas que não conversam entre si",
  "Precisa escalar, mas não tem estrutura digital"
];

const solutions = [
  "Desenvolvemos microsites e dashboards sob medida",
  "Criamos soluções com foco em performance e conversão",
  "Otimizamos processos com automações inteligentes",
  "Aplicamos estratégias de SEO, CRO e UX",
  "Conectamos sua operação com APIs e integrações",
  "Oferecemos suporte contínuo e evolução constante",
  "Escalamos sua presença digital com inteligência"
];

const process = [
  {
    number: "1",
    title: "Planejamento e Estratégia",
    description: "Entendemos seu negócio, objetivos e público para criar a solução ideal."
  },
  {
    number: "2",
    title: "Design e Prototipação",
    description: "Criamos o layout e estrutura, validando com você antes de seguir."
  },
  {
    number: "3",
    title: "Desenvolvimento",
    description: "Codificamos com as melhores tecnologias, garantindo performance e segurança."
  },
  {
    number: "4",
    title: "Testes e Ajustes",
    description: "Testamos em diferentes dispositivos, ajustamos detalhes e otimizamos SEO."
  },
  {
    number: "5",
    title: "Entrega e Suporte",
    description: "Lançamos seu projeto e acompanhamos com suporte e melhorias contínuas."
  }
];

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="JARVIS COMPANY Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#servicos" className="hover:text-brand transition-colors">
              Serviços
            </a>
            <a href="#processo" className="hover:text-brand transition-colors">
              Processo
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-darker via-brand-dark to-brand py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight animate-fade-in-up">
               <span className="text-brand-lighter">Microsites</span> e{" "}
                <span className="text-brand-lighter">dashboards</span> que aumentam
                produtividade e vendas
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                Soluções digitais personalizadas com agilidade, inteligência e foco
                em performance. Da automação ao design, entregamos estrutura para
                você crescer com eficiência.
              </p>
              
            </div>
            
            <div className="relative hidden md:flex items-center justify-center animate-scale-in animation-delay-400">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full animate-pulse"></div>
              <Image
                src="/vendas.png"
                alt="Representação de Dashboard e Análise de Dados"
                width={3000}
                height={3000}
                className="relative z-10 drop-shadow-2xl hover:scale-110 hover:rotate-2 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-y border-slate-200 scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-brand mb-3 uppercase tracking-wider">
                / Por que isso importa
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Você não precisa de um site.{" "}
                <span className="text-brand">
                  Você precisa de resultados.
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
                <p>
                  <strong className="text-slate-900">Ter um site não é mais diferencial</strong> — é
                  obrigatório. Mas ter um site que realmente{" "}
                  <span className="text-brand font-semibold">converte visitantes em clientes</span> e te dá
                  visão clara de como seu negócio está performando? Isso muda tudo.
                </p>
                <p>
                  Enquanto seus concorrentes ainda anotam pedidos no papel e perdem
                  vendas por falta de presença digital, você pode estar{" "}
                  <span className="text-brand font-semibold">acompanhando cada métrica em tempo real</span>,
                  sabendo exatamente o que funciona e o que precisa melhorar.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-400">
                  <div className="text-3xl font-bold text-brand mb-1">24/7</div>
                  <p className="text-sm text-slate-600">
                    Seu site trabalha enquanto você dorme
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-600">
                  <div className="text-3xl font-bold text-brand mb-1">100%</div>
                  <p className="text-sm text-slate-600">
                    Controle visual das suas operações
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-800">
                  <div className="text-3xl font-bold text-brand mb-1">+300%</div>
                  <p className="text-sm text-slate-600">
                    Aumento médio em conversão
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-1000">
                  <div className="text-3xl font-bold text-brand mb-1">-70%</div>
                  <p className="text-sm text-slate-600">
                    Redução de tempo operacional
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center animate-scale-in animation-delay-400">
              <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full animate-pulse"></div>
              <Image
                src="/results.png"
                alt="Ilustração representando resultados e crescimento"
                width={3000}
                height={2500}
                className="relative z-10 drop-shadow-2xl hover:scale-110 hover:-rotate-2 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="py-16 md:py-24 bg-slate-50 scroll-animate"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-brand mb-3 uppercase tracking-wider">
              / O que fazemos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Conectamos tecnologia e estratégia
            </h2>
            <p className="text-lg text-slate-600">
              Desenvolvemos soluções digitais sob medida, que geram resultados
              reais para negócios de todos os tamanhos.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-${index * 200 + 200}`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand group-hover:scale-110 transition-all">
                  <div className="w-6 h-6 rounded-full bg-brand group-hover:bg-white"></div>
                </div>
                <h3 className="font-bold text-xl mb-2 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24 bg-slate-50 scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-brand mb-3 uppercase tracking-wider">
              / Do problema à solução
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Veja como podemos ajudar
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-900">
                ✕ Desafios e Obstáculos
              </h3>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="text-red-500 font-bold mt-0.5">×</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-brand bg-brand/5 p-8">
              <h3 className="text-2xl font-bold mb-6 text-brand-darker">
                ✓ Solução JARVIS COMPANY
              </h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="text-brand font-bold mt-0.5">✓</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-brand mb-3 uppercase tracking-wider">
                / A diferença entre existir e crescer
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Como um <span className="text-brand">site moderno</span> e{" "}
                <span className="text-brand">dashboards inteligentes</span>{" "}
                alavancar seu negócio
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Não é só sobre &ldquo;estar na internet&rdquo;. É sobre ter uma máquina de
                vendas rodando 24/7 e dados na palma da mão para tomar decisões
                mais inteligentes, todos os dias.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white group hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-up animation-delay-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-3">
                    Alcance que não dorme
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Enquanto você fecha a loja, seu site continua recebendo
                    visitas, captando leads e fechando vendas. É como ter um
                    vendedor incansável trabalhando sem parar.
                  </p>
                  <div className="flex items-center gap-2 text-brand-light font-semibold text-sm">
                    <span>Vendas 24/7</span>
                    <span>→</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-darker to-brand-dark p-6 text-white group hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-up animation-delay-400">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3">
                    Decisões baseadas em dados
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    Pare de adivinhar. Com dashboards completos, você vê em tempo
                    real: o que vende mais, quem são seus clientes, horários de
                    pico, ticket médio e muito mais.
                  </p>
                  <div className="flex items-center gap-2 text-brand-lighter font-semibold text-sm">
                    <span>Inteligência real</span>
                    <span>→</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white group hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-up animation-delay-600">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-3">
                    Custo muito menor que métodos tradicionais
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Comparado a anúncios em rádio, outdoor ou até vendedores
                    presenciais, um site tem ROI muito superior e te dá controle
                    total sobre cada centavo investido.
                  </p>
                  <div className="flex items-center gap-2 text-brand-light font-semibold text-sm">
                    <span>ROI até 10x maior</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="processo" className="py-16 md:py-24 bg-white border-t border-slate-200 scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-semibold text-brand mb-3 uppercase tracking-wider">
              / Processo que gera resultado
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nosso processo de trabalho
            </h2>
            <p className="text-lg text-slate-600">
              Da estratégia à entrega, cada etapa é pensada para maximizar
              resultados
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl border-2 border-slate-200 bg-white p-6 hover:border-brand hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-brand/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-darker via-brand-dark to-brand scroll-animate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agende um bate-papo conosco para conhecermos um pouco mais sobre o
              seu projeto e mostrar como podemos ajudar.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-brand shadow-2xl hover:bg-slate-50 hover:shadow-3xl transition-all hover:scale-110 animate-fade-in-up animation-delay-400"
            >
              Quero ser o próximo case de sucesso
            </a>
            <p className="mt-6 text-sm text-white/70">
              Troque o número do WhatsApp pelo contato oficial da JARVIS COMPANY
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="JARVIS COMPANY Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
              <a href="#servicos" className="hover:text-brand transition-colors">
                Serviços
              </a>
              
              <a href="#processo" className="hover:text-brand transition-colors">
                Processo
              </a>
            </nav>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <span>
              © {new Date().getFullYear()} JARVIS COMPANY. Todos os direitos
              reservados.
            </span>
            <span className="text-slate-500">
              Microsites e dashboards que transformam negócios digitais.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
