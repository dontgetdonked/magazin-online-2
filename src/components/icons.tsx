import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---------------------------------- Brand --------------------------------- */

export function LogoMark(props: IconProps) {
  return (
    <Svg viewBox="0 0 32 32" strokeWidth={1.5} {...props}>
      <path d="M16 4 4 10l12 6 12-6-12-6Z" />
      <path d="M4 16l12 6 12-6" />
      <path d="M4 22l12 6 12-6" />
    </Svg>
  );
}

/* ------------------------------- Tool marks -------------------------------- */
/* Hand-drawn as flat technical-schematic glyphs, not literal renders. */

export function IconDrill(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2" y="7" width="11" height="7" rx="2" />
      <path d="M13 9.5h3.5L20 8v5.5l-3.5-1.5H13" />
      <path d="M20 10.5h2.5" />
      <path d="M6 14v3.2L4.6 21h4.8l-1-3.8V14" />
    </Svg>
  );
}

export function IconImpactDriver(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="8" width="9" height="6" rx="2" />
      <path d="M12 10h3.5l3-1.3v5.6l-3-1.3H12" />
      <path d="M18.5 11h3" />
      <path d="M6.5 14v2.6L5.3 20h3.4l-1.2-3.4V14" />
    </Svg>
  );
}

export function IconGrinder(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="6" y="4" width="7" height="11" rx="2" />
      <path d="M13 8h3a2 2 0 0 1 0 4h-3" />
      <path d="M18.3 9.1a3 3 0 0 1 0 3.8" />
      <path d="M9 15v2" />
      <path d="M5 21h8l-1.2-4H6.2z" />
    </Svg>
  );
}

export function IconSaw(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="7.2" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <path d="M19.2 12h1.5M17.09 17.09l1.06 1.06M12 19.2v1.5M6.91 17.09l-1.06 1.06M4.8 12H3.3M6.91 6.91 5.85 5.85M12 4.8V3.3M17.09 6.91l1.06-1.06" />
    </Svg>
  );
}

export function IconSander(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="4" y="15" width="16" height="4" rx="1.5" />
      <path d="M8 15V9a4 4 0 0 1 4-4 4 4 0 0 1 4 4v6" />
      <path d="M12 8.5v-2" />
    </Svg>
  );
}

export function IconHammer(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14.5 3.3 20.7 9.5 17.9 12.3 11.7 6.1Z" />
      <path d="M13 7.8 4.4 16.4a2 2 0 0 0 0 2.9l.3.3a2 2 0 0 0 2.9 0L16.2 11" />
    </Svg>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M8.1 15.9 15.9 8.1" />
    </Svg>
  );
}

export function IconPliers(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 3 4.2 15.2" />
      <path d="M15 3 19.8 15.2" />
      <circle cx="12" cy="12.6" r="1.3" />
      <path d="M9.4 15.8 6.3 21" />
      <path d="M14.6 15.8 17.7 21" />
    </Svg>
  );
}

export function IconPrybar(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 20 17 6.3" />
      <path d="M17 6.3c1-1.6 3.3-1.8 4.3-.2" />
      <path d="M4.6 18 7.6 21" />
    </Svg>
  );
}

export function IconLevel(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="9" width="19" height="6" rx="1.5" />
      <circle cx="12" cy="12" r="2.1" />
      <path d="M6.5 9v6M17.5 9v6" />
    </Svg>
  );
}

export function IconTapeMeasure(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="9" r="6" />
      <circle cx="9" cy="9" r="1.9" />
      <path d="M13.2 13.2 19.5 19.5" />
      <path d="M17.8 19.8h2v-2" />
    </Svg>
  );
}

export function IconLaser(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="8" width="8" height="9.5" rx="1.6" />
      <circle cx="7" cy="12.3" r="1.3" />
      <path d="M11.5 12.3h1.6m2.6 0h1.6m2.6 0h1.1" strokeDasharray="1.6 2.4" />
    </Svg>
  );
}

export function IconHelmet(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M3 16h18v1.3a1.7 1.7 0 0 1-1.7 1.7H4.7A1.7 1.7 0 0 1 3 17.3Z" />
      <path d="M12 8.5V5.3" />
    </Svg>
  );
}

export function IconGoggles(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.4" y="9" width="7.6" height="7" rx="2.6" />
      <rect x="14" y="9" width="7.6" height="7" rx="2.6" />
      <path d="M10 12.3h4" />
      <path d="M2.4 10.6 1 9.3M21.6 10.6 23 9.3" />
    </Svg>
  );
}

export function IconGloves(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 21V9a2 2 0 1 1 4 0v5" />
      <path d="M11 21v-8.2a2 2 0 1 1 4 0V19" />
      <path d="M15 21v-6.3a2 2 0 1 1 4 0V17a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2.2" />
    </Svg>
  );
}

export function IconGenerator(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.3" y="8" width="15.4" height="9" rx="1.6" />
      <circle cx="6.8" cy="12.5" r="1.8" />
      <path d="M11 11h4M11 14h4" />
      <path d="M17.7 11h1.8a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1.8" />
      <path d="M5 17v2M9 17v2" />
    </Svg>
  );
}

export function IconMixer(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 5h9l-1.5 10h-6z" />
      <path d="M9.6 15 8 20h9l-1.6-5" />
      <circle cx="6" cy="20.4" r="1.3" />
      <circle cx="18" cy="20.4" r="1.3" />
      <path d="M4.5 20.4h-1M19.5 20.4h1" />
    </Svg>
  );
}

export function IconCompressor(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.3" y="12" width="14.5" height="7" rx="3.5" />
      <circle cx="17.3" cy="9" r="3.2" />
      <path d="M17.3 6.3V5" />
      <circle cx="6" cy="21.3" r="1.1" />
      <circle cx="13" cy="21.3" r="1.1" />
    </Svg>
  );
}

export function IconAnchor(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3v13" />
      <path d="M8.7 6.4h6.6" />
      <path d="M9.2 9.4h5.6M9.2 12.4h5.6" />
      <path d="M12 16a4 4 0 0 1-4 4M12 16a4 4 0 0 0 4 4" />
      <path d="M8 20h8" />
    </Svg>
  );
}

export function IconClamp(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.3 3v18" />
      <path d="M4.3 6.2h8.7" />
      <path d="M4.3 16.8h4.6" />
      <path d="M13 6.2v3a2 2 0 0 1-2 2H8.9v5.6" />
      <path d="M17 6.2h3a1 1 0 0 1 0 2h-3" />
    </Svg>
  );
}

export const toolIcons = {
  drill: IconDrill,
  impactDriver: IconImpactDriver,
  grinder: IconGrinder,
  saw: IconSaw,
  sander: IconSander,
  hammer: IconHammer,
  wrench: IconWrench,
  pliers: IconPliers,
  prybar: IconPrybar,
  level: IconLevel,
  tapeMeasure: IconTapeMeasure,
  laser: IconLaser,
  helmet: IconHelmet,
  goggles: IconGoggles,
  gloves: IconGloves,
  generator: IconGenerator,
  mixer: IconMixer,
  compressor: IconCompressor,
  anchor: IconAnchor,
  clamp: IconClamp,
} as const;

/* --------------------------------- Interface ------------------------------- */

export function IconArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </Svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </Svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 9l6 6 6-6" />
    </Svg>
  );
}

export function IconTrash(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4.5 7h15" />
      <path d="M9 7V4.8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7" />
      <path d="M6.5 7 7.3 19a2 2 0 0 0 2 1.9h5.4a2 2 0 0 0 2-1.9L17.5 7" />
      <path d="M10.3 11v6M13.7 11v6" />
    </Svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 6l6 6-6 6" />
    </Svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  );
}

export function IconMinus(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
    </Svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 13l4 4 10-10" />
    </Svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </Svg>
  );
}

export function IconCart(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </Svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <Svg fill="currentColor" stroke="none" {...props}>
      <path d="M12 3 14.12 9.09 20.56 9.22 15.42 13.11 17.29 19.28 12 15.6 6.71 19.28 8.58 13.11 3.44 9.22 9.88 9.09Z" />
    </Svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 4.5h3.2l1.3 4-2 1.6a12.5 12.5 0 0 0 6.4 6.4l1.6-2 4 1.3V19a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5Z" />
    </Svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6.7 7-11.7A7 7 0 0 0 5 9.3C5 14.3 12 21 12 21Z" />
      <circle cx="12" cy="9.4" r="2.3" />
    </Svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </Svg>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 19 6v5.5c0 4.5-3 7.5-7 9.5-4-2-7-5-7-9.5V6Z" />
      <path d="m8.5 12 2.3 2.3 4.7-4.8" />
    </Svg>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 7h10v9H3z" />
      <path d="M13 11h4l3 3v2h-7z" />
      <circle cx="7" cy="18.4" r="1.6" />
      <circle cx="17" cy="18.4" r="1.6" />
    </Svg>
  );
}

export function IconCreditCard(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 9.5h19" />
      <path d="M6 14.5h4" />
    </Svg>
  );
}

export function IconFilter(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="9" cy="6" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="8" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <Svg fill="currentColor" stroke="none" {...props}>
      <path d="M9 7H5.5A2.5 2.5 0 0 0 3 9.5V12h4v6H3v-3.5A5.5 5.5 0 0 1 8.5 9H9Z" />
      <path d="M19 7h-3.5A2.5 2.5 0 0 0 13 9.5V12h4v6h-4v-3.5A5.5 5.5 0 0 1 18.5 9H19Z" />
    </Svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H8v3h2.6v7Z" />
    </Svg>
  );
}

export function IconLinkedin(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.2v6.3" />
      <circle cx="7.5" cy="7.2" r="0.2" />
      <path d="M11.5 16.5V13a2 2 0 0 1 4 0v3.5" />
      <path d="M11.5 10.2v6.3" />
    </Svg>
  );
}
