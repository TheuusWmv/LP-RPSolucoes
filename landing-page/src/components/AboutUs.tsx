import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Zap, ShieldCheck, Award, ArrowUpRight, Sun, TrendingDown } from "lucide-react";
import { templateData } from "../data/templateData";
import { BlurReveal, BlurRevealGroup, BlurRevealItem } from "./ui/blur-reveal";
import { AnimatedCounter } from "./ui/animated-counter";

export const AboutUs: React.FC = () => {
  const { company } = templateData;
  const shouldReduceMotion = useReducedMotion();

  // Ref e monitor de visibilidade dedicado para o highlight Block Reveal
  const highlightRef = useRef<HTMLSpanElement>(null);
  const isHighlightInView = useInView(highlightRef, { amount: 0.2 });

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de entender qual projeto solar faz sentido para o meu imóvel com a RP Soluções."
  )}`;

  return (
    <section id="about" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* CABEÇALHO DA SEÇÃO COM BLOCK REVEAL NO HIGHLIGHT "SEGURANÇA"              */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Pill Eyebrow */}
            <BlurReveal delay={0.04} yOffset={16} blur="6px">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                <span>Sobre a RP Soluções Inteligentes</span>
              </div>
            </BlurReveal>

            {/* Título com Animação Block Reveal no Highlight (reexecuta ao rolar de volta) */}
            <BlurReveal delay={0.12} yOffset={22} blur="8px" as="h2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15] block">
                Invista em energia solar com{" "}
                <span
                  ref={highlightRef}
                  className="relative inline-block align-middle my-1 overflow-hidden rounded-full"
                >
                  {/* Elemento de Highlight com o Texto e o Ícone de Sol */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={
                      isHighlightInView
                        ? { opacity: 1 }
                        : { opacity: shouldReduceMotion ? 1 : 0 }
                    }
                    transition={{
                      duration: 0.05,
                      delay: isHighlightInView && !shouldReduceMotion ? 0.38 : 0,
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[var(--brand-accent)] text-[var(--brand-accent-text)] text-2xl sm:text-3xl lg:text-4xl font-black align-middle shadow-xs"
                  >
                    <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--brand-accent-text)] inline" />
                    <span>segurança</span>
                  </motion.span>

                  {/* Bloco Cortina (Block Reveal) que varre e revela o highlight a cada entrada */}
                  {!shouldReduceMotion && (
                    <motion.span
                      initial={{ x: "-100%" }}
                      animate={
                        isHighlightInView
                          ? { x: ["-100%", "0%", "100%"] }
                          : { x: "-100%" }
                      }
                      transition={
                        isHighlightInView
                          ? {
                            duration: 0.65,
                            delay: 0.18,
                            ease: [0.23, 1, 0.32, 1],
                          }
                          : {
                            duration: 0.01,
                          }
                      }
                      className="absolute inset-0 bg-neutral-950 rounded-full z-20 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                </span>{" "}
                em cada etapa.
              </span>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.18} yOffset={20} blur="8px" className="max-w-md">
            <p className="text-base text-slate-600 leading-relaxed lg:pb-1 font-normal">
              Antes de contratar, entenda quanto investir, quanto pode economizar e como a sua usina será instalada.
              A RP Soluções Inteligentes conduz todas as fases: viabilidade técnica, projeto elétrico de engenharia com ART,
              homologação completa na Equatorial Goiás e pós-venda permanente.
            </p>
          </BlurReveal>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE BENTO LAYOUT (< md screens)                                        */}
        {/* ========================================================================= */}
        <div className="mobile-bento md:hidden grid grid-cols-2 gap-3 mb-2">
          {/* Card 1: Foto Vertical Principal */}
          <BlurReveal yOffset={20} blur="6px" className="relative rounded-[2rem] overflow-hidden col-span-2 min-h-[240px] border border-slate-200/80 shadow-md flex flex-col justify-end p-5">
            <img
              src="/images/projetos/usina-solo-destaque.png"
              alt="Usinas solares em solo instaladas pela RP Soluções"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent pointer-events-none" />

            <div className="relative z-10 text-white">
              <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 text-white">
                <Sun className="w-4 h-4 text-[var(--brand-accent)]" />
              </div>
              <p className="font-bold text-sm text-white leading-snug">
                Engenharia Solar & Projetos com ART
              </p>
              <p className="text-xs text-slate-200/90 mt-0.5">
                Projetos sob medida em Sanclerlândia e Goiás.
              </p>
            </div>
          </BlurReveal>

          {/* Card 2: Foto Horizontal dos Painéis */}
          <BlurReveal yOffset={20} blur="6px" className="relative rounded-[2rem] overflow-hidden col-span-2 order-3 min-h-[160px] border border-slate-200/80 shadow-md flex items-end justify-between p-5">
            <img
              src="/images/projetos/bombeamento-solar-represa.jpg"
              alt="Bombeamento solar em represa para agronegócio"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/25 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-[70%]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--brand-accent)] block mb-1">
                Especialidade Rural & Agro
              </span>
              <h3 className="text-base font-bold text-white tracking-tight leading-tight">
                Bombeamento solar autônomo sem custos de diesel.
              </h3>
            </div>

            <a
              href={company.simulatorUrl || whatsappUrl}
              target={company.simulatorUrl ? undefined : "_blank"}
              rel={company.simulatorUrl ? undefined : "noopener noreferrer"}
              className="relative z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shrink-0 active:scale-95"
              aria-label="Simular economia com a RP Soluções"
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </BlurReveal>

          {/* Cards 3 & 4: 2 Colunas Lado a Lado (Stats Compactos) */}
          <div className="col-span-2 grid grid-cols-2 gap-3">
            {/* Card 3: 95% Card */}
            <BlurReveal yOffset={16} blur="6px" className="min-h-[176px] min-w-0 rounded-[1.75rem] bg-gradient-to-br from-[#07263F] to-[#0A4D7E] p-4 flex flex-col justify-between border border-[#009ED7]/40 shadow-lg shadow-sky-950/20 text-white">
              <div className="flex items-center justify-between mb-2">
                <TrendingDown className="w-5 h-5 text-[#009ED7]" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#009ED7]">Economia</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-white/90 block">Redução de até</span>
                <div className="text-4xl font-black text-[#FFCC29] tracking-tighter leading-none my-1">
                  <AnimatedCounter value={95} suffix="%" duration={1.2} />
                </div>
                <p className="text-xs text-white/90 leading-tight mt-1">
                  na conta da concessionária Equatorial.
                </p>
              </div>
            </BlurReveal>

            {/* Card 4: Sede Própria no fundo claro com gradiente */}
            <BlurReveal yOffset={16} blur="6px" className="min-h-[176px] min-w-0 rounded-[1.75rem] bg-gradient-to-br from-white via-slate-50/70 to-slate-100/80 text-neutral-950 p-4 flex flex-col justify-between border border-slate-200/90 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <Sun className="w-4 h-4 text-[#FFCC29]" />
                <span className="w-2 h-2 rounded-full bg-[#009ED7]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-950 tracking-tight leading-snug">
                  Energia limpa em Goiás.
                </h4>
                <div className="text-lg font-black text-[#009ED7] tracking-tight mt-1">
                  Sanclerlândia/GO
                </div>
                <p className="text-xs text-slate-600 leading-tight mt-0.5">
                  Engenharia de Raul Prado Nunes.
                </p>
              </div>
            </BlurReveal>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP BENTO GRID (5 cards com fotos e dados reais RP Soluções)          */}
        {/* ========================================================================= */}
        <p className="md:hidden text-xs leading-relaxed text-slate-600 mt-4 mb-6">
          Solicite uma indicação de equipamentos e garantias para o seu projeto com a RP Soluções Inteligentes.
        </p>

        <BlurRevealGroup
          stagger={0.08}
          delay={0.05}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6"
        >
          {/* Bento Item 1: Foto Destaque (Col 1-7) */}
          <BlurRevealItem
            yOffset={28}
            className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] rounded-[2rem] overflow-hidden group shadow-lg shadow-neutral-900/5 border border-slate-200/80 flex flex-col justify-between p-6 sm:p-8"
          >
            <img
              src="/images/projetos/usina-solo-destaque.png"
              alt="Instalação de usina solar em solo pela RP Soluções Inteligentes"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-240 ease-out-strong group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/35 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[var(--brand-accent)]" />
                Engenharia Solar & Projetos com ART
              </span>
              <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-transform duration-200 ease-out-strong group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 max-w-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                A economia definitiva começa com um projeto bem dimensionado
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                Seu padrão de consumo, a orientação solar da sua cobertura ou solo e a proteção contra sombreamento orientam cada detalhe.
                É assim que garantimos a máxima geração de kWh para sua casa, empresa ou fazenda em Goiás.
              </p>
            </div>
          </BlurRevealItem>

          {/* Bento Item 2: Card Solar Destaque (Col 8-12) */}
          <BlurRevealItem
            yOffset={28}
            className="lg:col-span-5 rounded-[2rem] bg-gradient-to-br from-[#07263F] to-[#0A4D7E] p-7 sm:p-8 flex flex-col justify-between shadow-lg shadow-sky-950/20 border border-[#009ED7]/40 group transition-shadow duration-200 ease-out-strong hover:shadow-xl text-white"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#009ED7]">
                Economia Imediata
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-[#009ED7] flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </div>
            </div>

            <div className="my-6 sm:my-8">
              <span className="text-xs font-semibold text-white/90 block">Redução garantida de até</span>
              <div className="text-5xl sm:text-6xl font-black text-[#FFCC29] tracking-tighter leading-none my-2">
                <AnimatedCounter value={95} suffix="%" duration={1.2} />
              </div>
              <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                na conta de luz da concessionária, gerando retorno sobre o investimento entre 4 e 7 anos.
              </p>
            </div>

            <p className="text-xs text-white/80 leading-relaxed border-t border-white/20 pt-4">
              Parcelas de financiamento que se pagam com a própria economia mensal, gerando previsibilidade financeira imediata para o seu imóvel ou propriedade rural.
            </p>
          </BlurRevealItem>

          {/* Bento Item 3: Sede Própria & Tradição (Col 1-4) com fundo claro e acentos da marca */}
          <BlurRevealItem
            yOffset={28}
            className="lg:col-span-4 rounded-[2rem] bg-gradient-to-br from-white via-slate-50/70 to-slate-100/80 text-neutral-950 p-7 sm:p-8 flex flex-col justify-between shadow-md border border-slate-200/90 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#009ED7]">
                  Sede Própria & Tradição
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFCC29] ring-4 ring-[#FFCC29]/20" />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight mb-2">
                Sanclerlândia - GO
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-3">
                Atendimento especializado a mais de 20 municípios no Oeste e Centro Goiano, sob responsabilidade técnica de Raul Prado Nunes, unindo engenharia de ponta a suporte humano próximo.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200/80 mt-6 text-xs font-semibold text-[#009ED7] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC29]" />
              <span>Sanclerlândia/GO • Oeste e Centro Goiano</span>
            </div>
          </BlurRevealItem>

          {/* Bento Item 4: Bombeamento & Agro Card com Imagem Real (Col 5-8) */}
          <BlurRevealItem
            yOffset={28}
            className="lg:col-span-4 relative rounded-[2rem] overflow-hidden group shadow-lg border border-slate-200/80 flex flex-col justify-between p-7 sm:p-8 text-white min-h-[300px]"
          >
            <img
              src="/images/projetos/bombeamento-solar-represa.jpg"
              alt="Projeto de bombeamento solar em represa - RP Soluções"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-240 ease-out-strong group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-neutral-950/30 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-950/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-[var(--brand-accent)]">
                <Zap className="w-3.5 h-3.5 text-[var(--brand-accent)]" />
                Especialidade Rural & Agro
              </span>
            </div>

            <div className="relative z-10 my-4">
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 leading-snug">
                Bombeamento solar autônomo sem custos de diesel.
              </h4>
              <p className="text-xs text-slate-200/90 leading-relaxed">
                Mova água de represas, rios e poços para caixas d'água e pastos de forma 100% independente da rede elétrica.
              </p>
            </div>

            <div className="relative z-10 text-xs font-semibold text-white/90 flex items-center gap-1.5 pt-3 border-t border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Acionamento 100% autônomo pelo sol</span>
            </div>
          </BlurRevealItem>

          {/* Bento Item 5: Equipamentos & ART (Col 9-12) com fundo claro e acentos da marca */}
          <BlurRevealItem
            yOffset={28}
            className="lg:col-span-4 rounded-[2rem] bg-gradient-to-br from-white via-slate-50/70 to-slate-100/80 text-neutral-950 p-7 sm:p-8 flex flex-col justify-between shadow-md border border-slate-200/90 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#009ED7]">
                  Equipamentos & ART
                </span>
                <div className="w-8 h-8 rounded-full bg-[#009ED7]/10 flex items-center justify-center text-[#009ED7]">
                  <Award className="w-4 h-4 text-[#009ED7]" />
                </div>
              </div>

              <div className="my-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight mb-2">
                  Garantia de 25 anos
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Módulos Tier 1 (Osda e Sunova), inversores homologados (APsystems, Deye, Growatt) e homologação 100% conduzida na Equatorial Goiás.
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#009ED7] hover:text-[#0082B3] flex items-center gap-1 group pt-4 border-t border-slate-200/80 transition-colors duration-160"
            >
              <span>Conversar com a RP Soluções</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFCC29] transition-transform duration-160 ease-out-strong group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </BlurRevealItem>
        </BlurRevealGroup>
      </div>
    </section>
  );
};
