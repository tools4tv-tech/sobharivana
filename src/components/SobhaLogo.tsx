import React from "react";
import favicon from "../assets/images/favicon.jfif";

interface SobhaLogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
}

export const SobhaLogo: React.FC<SobhaLogoProps> = ({ className = "h-8", variant = "light" }) => {
  const textColor = variant === "dark" ? "#080909" : variant === "gold" ? "#C9A875" : "#F4F0E8";
  const accentColor = "#C9A875";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img src={favicon} alt="SOBHA Rivana logo" className="h-full w-auto aspect-square shrink-0 object-contain" />

      {/* Editorial Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="tracking-[0.28em] font-medium text-base md:text-lg uppercase"
          style={{
            fontFamily: "var(--font-serif)",
            color: textColor,
          }}
        >
          SOBHA
        </span>
        <span
          className="tracking-[0.45em] text-[9px] uppercase font-light mt-0.5"
          style={{
            fontFamily: "var(--font-sans)",
            color: accentColor,
          }}
        >
          RIVANA
        </span>
      </div>
    </div>
  );
};
