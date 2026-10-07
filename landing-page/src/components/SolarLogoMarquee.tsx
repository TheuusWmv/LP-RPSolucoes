import React from "react";
import { InfiniteSlider } from "./ui/infinite-slider";
import { BlurReveal } from "./ui/blur-reveal";
import { templateData } from "../data/templateData";

export const SolarLogoMarquee: React.FC = () => {
  const { partnerBrands } = templateData;

  return (
    <section className="relative w-full bg-white pt-3 sm:pt-4 pb-8 sm:pb-10 border-b border-slate-100 overflow-hidden select-none">
      <BlurReveal
        delay={0.05}
        yOffset={16}
        blur="8px"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Equipamentos Tier 1 homologados pela Equatorial Goiás e principais bancos parceiros
        </p>
      </BlurReveal>

      <BlurReveal
        delay={0.15}
        yOffset={20}
        blur="10px"
        className="relative h-16 sm:h-20 w-full overflow-hidden flex items-center"
      >
        <InfiniteSlider className="flex h-full w-full items-center" duration={38} gap={48}>
          {partnerBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="group flex shrink-0 items-center justify-center px-4 sm:px-6 cursor-pointer"
              title={`${brand.name} — ${brand.category}`}
            >
              <div className="flex shrink-0 items-center justify-center grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-200 ease-out-strong">
                <img
                  src={brand.logoSrc}
                  alt={brand.name}
                  className="h-8 sm:h-9 md:h-10 w-auto max-w-[120px] sm:max-w-[140px] shrink-0 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </InfiniteSlider>

        {/* Gradiente suave de fade nas bordas esquerda e direita */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" />
      </BlurReveal>
    </section>
  );
};
