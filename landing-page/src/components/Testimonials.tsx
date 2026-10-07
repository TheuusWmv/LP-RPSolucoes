import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion, type PanInfo } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, SunMedium } from "lucide-react";
import { useMediaQuery } from "../lib/use-media-query";
import { templateData, type TestimonialItem } from "../data/templateData";
import { BlurReveal } from "./ui/blur-reveal";

const photoCardClassName =
  "relative h-[440px] sm:h-[460px] lg:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/25 bg-neutral-900 group border border-slate-200/50";

const TestimonialPhotoContent: React.FC<{ item: TestimonialItem }> = ({ item }) => (
  <>
    <img
      src={item.installationImage}
      alt={`Instalação solar realizada pela RP Soluções para ${item.name}`}
      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      loading="eager"
      decoding="async"
    />

    {/* Sombra sutil de profundidade na base */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

    {/* Card de perfil em glassmorphism */}
    <div className="absolute bottom-4 inset-x-4 sm:bottom-5 sm:inset-x-5 p-3 sm:p-4 rounded-2xl bg-neutral-950/85 border border-white/25 shadow-2xl backdrop-blur-sm flex items-center justify-between gap-3.5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/[0.04] to-transparent pointer-events-none" />

      <div className="flex items-center gap-3.5 min-w-0 relative z-10">
        <div className="relative shrink-0">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-[var(--brand-accent)] shadow-md"
            loading="eager"
            decoding="async"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--brand-accent)] border-2 border-neutral-950 flex items-center justify-center shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
          </span>
        </div>

        <div className="overflow-hidden">
          <h4 className="font-bold text-white text-sm sm:text-base tracking-tight truncate drop-shadow-sm">
            {item.name}
          </h4>
          <p className="text-xs text-white/90 leading-snug font-medium mt-0.5 sm:truncate">
            {item.role} • {item.city}
          </p>
        </div>
      </div>

      {item.stats && (
        <div className="shrink-0 relative z-10 hidden sm:block text-right">
          <span className="text-[10px] uppercase font-bold text-slate-300 block">
            {item.stats.label}
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-[var(--brand-accent)]">
            {item.stats.value}
          </span>
        </div>
      )}
    </div>
  </>
);

const quoteCardClassName =
  "relative h-[440px] sm:h-[460px] lg:h-[480px] w-full rounded-3xl bg-gradient-to-br from-[#07263F] to-[#0B3B60] text-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-sky-950/25 border border-[#009ED7]/40 flex flex-col justify-between overflow-hidden";

const TestimonialQuoteContent: React.FC<{ item: TestimonialItem; companyName: string }> = ({
  item,
  companyName,
}) => (
  <>
    {/* Gradiente de luz interna suave */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/[0.12] pointer-events-none" />

    {/* Brilho solar discreto */}
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,transparent_70%)] pointer-events-none" />

    {/* Aspas estilizadas e destaque */}
    <div className="relative z-10 flex-1 flex flex-col justify-start overflow-hidden">
      <div className="flex items-center justify-between mb-3 sm:mb-4 shrink-0">
        <div
          className="text-[#009ED7] text-4xl sm:text-5xl lg:text-6xl font-serif font-black leading-none select-none opacity-90"
          aria-hidden="true"
        >
          ““
        </div>
        {item.highlight && (
          <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-[#009ED7]/40 text-xs font-bold text-white shadow-xs shrink-0">
            {item.highlight}
          </span>
        )}
      </div>

      {/* Texto do Feedback com altura flexível harmoniosa */}
      <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed tracking-tight max-w-xl overflow-y-auto pr-1">
        {item.quote}
      </p>
    </div>

    {/* Rodapé do Banner: Estrelas 4.8 + Identidade RP Soluções */}
    <div className="relative z-10 shrink-0 flex flex-wrap items-center justify-between gap-3 pt-4 sm:pt-6 border-t border-white/20 mt-4 sm:mt-6">
      {/* Estrelas */}
      <div className="flex items-center gap-2 text-white">
        <div className="flex items-center gap-1 text-[#FFCC29]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 fill-current drop-shadow-xs"
            />
          ))}
        </div>
        <span className="text-xs font-bold text-white font-mono bg-black/25 px-2.5 py-0.5 rounded-full">
          Nota 4.8 no Google Maps
        </span>
      </div>

      {/* Logo / Selo Sutil */}
      <div className="flex items-center gap-2 text-[#009ED7] text-xs font-semibold uppercase tracking-wider font-mono">
        <SunMedium className="w-4 h-4 text-[#FFCC29]" />
        <span>{companyName}</span>
      </div>
    </div>
  </>
);

export const Testimonials: React.FC = () => {
  const { company, testimonials } = templateData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const total = testimonials.length;
  const mobile = useMediaQuery("(max-width: 1023px)");
  const [showQuote, setShowQuote] = useState(false);
  useEffect(() => {
    setShowQuote(false);
  }, [mobile]);

  const moveMobile = (direction: number) => {
    const step = (currentIndex * 2 + Number(showQuote) + direction + total * 2) % (total * 2);
    setCurrentIndex(Math.floor(step / 2));
    setShowQuote(step % 2 === 1);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Pré-carregamento imediato de todas as imagens da obra e avatares
  useEffect(() => {
    testimonials.forEach((item) => {
      const img = new Image();
      img.src = item.installationImage;
      if ("decode" in img) {
        img.decode().catch(() => {});
      }
      const avatar = new Image();
      avatar.src = item.avatar;
      if ("decode" in avatar) {
        avatar.decode().catch(() => {});
      }
    });
  }, [testimonials]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 40;
    const velocityThreshold = 280;
    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      nextSlide();
    } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      prevSlide();
    }
  };

  const currentItem = testimonials[currentIndex] || testimonials[0];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[#fafaf9] border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* HEADER DA SEÇÃO COM BLUR REVEAL                                           */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <BlurReveal delay={0.04} yOffset={14} blur="6px">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                <span>Casos Reais • Avaliação 4.8 no Google Maps</span>
              </div>
            </BlurReveal>

            <BlurReveal delay={0.08} yOffset={20} blur="8px" as="h2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.12] block">
                Como é gerar com a RP Soluções Inteligentes
              </span>
            </BlurReveal>

            <BlurReveal delay={0.12} yOffset={16} blur="6px">
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-3 max-w-xl">
                Depoimentos reais de produtores rurais, comerciantes e famílias em Sanclerlândia, São Luís de Montes Belos e região de Goiás.
              </p>
            </BlurReveal>
          </div>

          {/* Controles de Navegação Desktop com feedback tátil */}
          <BlurReveal delay={0.16} yOffset={16} blur="6px" className="hidden lg:flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono font-bold text-slate-500 mr-2 select-none">
              0{currentIndex + 1} / 0{total}
            </span>
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-neutral-800 flex items-center justify-center transition-[background-color,border-color,box-shadow] duration-160 ease-out-strong shadow-xs hover:shadow cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-neutral-800 flex items-center justify-center transition-[background-color,border-color,box-shadow] duration-160 ease-out-strong shadow-xs hover:shadow cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </BlurReveal>
        </div>

        {/* ========================================================================= */}
        {/* CARROSSEL COM TRANSIÇÃO                                                  */}
        {/* ========================================================================= */}
        <BlurReveal delay={0.18} yOffset={24} blur="10px">
          <div className="relative">
            {/* MOBILE UNIFIED EDITORIAL TESTIMONIAL CARD (< lg screens) */}
            <div className="lg:hidden flex flex-col gap-4" aria-roledescription="carrossel" aria-label="Depoimentos de clientes">
              <div className="grid min-w-0 h-[440px] sm:h-[460px]">
                {testimonials.flatMap((item, index) =>
                  [false, true].map((quote) => {
                    const selected = currentIndex === index && showQuote === quote;
                    return (
                      <motion.div
                        key={item.id + (quote ? "-quote" : "-photo")}
                        aria-hidden={!selected}
                        drag={selected ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.12}
                        style={{
                          touchAction: "pan-y",
                          gridArea: "1 / 1",
                          pointerEvents: selected ? "auto" : "none",
                          zIndex: selected ? 1 : 0,
                        }}
                        onDragEnd={(_, info) => {
                          if (Math.abs(info.offset.x) > 40 || Math.abs(info.velocity.x) > 280)
                            moveMobile(info.offset.x < -40 || info.velocity.x < -280 ? 1 : -1);
                        }}
                        initial={false}
                        animate={{ opacity: selected ? 1 : 0 }}
                        transition={{
                          duration: shouldReduceMotion ? 0.12 : 0.24,
                          ease: [0.77, 0, 0.175, 1],
                        }}
                        className={
                          (selected ? "testimonial-step " : "") +
                          (quote ? quoteCardClassName : photoCardClassName)
                        }
                      >
                        {quote ? (
                          <TestimonialQuoteContent item={item} companyName={company.name} />
                        ) : (
                          <TestimonialPhotoContent item={item} />
                        )}
                      </motion.div>
                    );
                  })
                )}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span aria-live="polite" aria-atomic="true" className="text-xs text-slate-600">
                  Depoimento {currentIndex + 1} de {total} · {showQuote ? "Relato" : "Instalação"}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => moveMobile(-1)}
                    className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center cursor-pointer"
                    aria-label="Etapa anterior do depoimento"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => moveMobile(1)}
                    className="w-11 h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center cursor-pointer"
                    aria-label="Próxima etapa do depoimento"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP TESTIMONIALS (2 Cards lado a lado padronizados em altura exata) */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch w-full select-none h-[480px]">
              {/* COLUNA ESQUERDA: Card da Obra */}
              <div className="lg:col-span-5 h-[480px] grid">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={`card-img-${currentItem.id}`}
                    style={{ gridArea: "1 / 1" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: shouldReduceMotion ? 0.12 : 0.24,
                        ease: [0.77, 0, 0.175, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: shouldReduceMotion ? 0.12 : 0.2,
                        ease: [0.23, 1, 0.32, 1],
                      },
                    }}
                    className={photoCardClassName}
                  >
                    <TestimonialPhotoContent item={currentItem} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* COLUNA DIREITA: Card de Texto do Feedback */}
              <div className="lg:col-span-7 h-[480px] grid">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={`card-text-${currentItem.id}`}
                    style={{ gridArea: "1 / 1" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: shouldReduceMotion ? 0.12 : 0.24,
                        ease: [0.77, 0, 0.175, 1],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      transition: {
                        duration: shouldReduceMotion ? 0.12 : 0.2,
                        ease: [0.23, 1, 0.32, 1],
                      },
                    }}
                    className={quoteCardClassName}
                  >
                    <TestimonialQuoteContent item={currentItem} companyName={company.name} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* BARRA INFERIOR DE PAGINAÇÃO DESKTOP */}
            <div className="hidden lg:flex items-center justify-between mt-8 pt-2">
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className="relative h-2 rounded-full cursor-pointer focus:outline-none py-1 flex items-center"
                      style={{ width: isActive ? "2rem" : "0.5rem" }}
                      aria-label={`Ir para depoimento ${idx + 1}`}
                    >
                      <span className="absolute inset-x-0 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors" />
                      {isActive && (
                        <motion.span
                          layoutId="active-testimonial-dot"
                          className="absolute inset-x-0 h-2 rounded-full bg-[#1b1b1b]"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
};
