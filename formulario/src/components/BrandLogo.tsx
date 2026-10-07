import { brandConfig } from '../config/formConfig';
import logoImg from '../assets/logo-rp.png';

export function BrandLogo({ large = false }: { large?: boolean }) {
  return (
    <span className="flex items-center min-w-0 select-none">
      <img
        src={logoImg}
        alt={brandConfig.companyName}
        className={`${large ? 'h-10 max-w-[200px]' : 'h-8 sm:h-9 max-w-[180px]'} w-auto object-contain`}
      />
    </span>
  );
}
