export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.5 3.8h2.2l1.2 3-1.5 1.2a12.5 12.5 0 0 0 6.4 6.4l1.2-1.5 3 1.2v2.2c0 .7-.6 1.4-1.3 1.5-7.2.9-13.3-5.2-12.4-12.4.1-.7.8-1.3 1.2-1.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

export function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  )
}

const icons = {
  emergency: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 8v6M16 12l3 5M32 12l-3 5" />
      <path d="M18 22h12l2 16H16l2-16Z" />
      <path d="M20 28h8M19 34h10" />
    </svg>
  ),
  toilet: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="14" y="8" width="20" height="10" rx="2" />
      <path d="M16 18c0 10 4 16 8 18 4-2 8-8 8-18" />
      <path d="M20 40h8" />
    </svg>
  ),
  water: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 7c6 9 12 15 12 22a12 12 0 0 1-24 0c0-7 6-13 12-22Z" />
    </svg>
  ),
  sewer: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 20h10l6 8h16" />
      <circle cx="14" cy="20" r="4" />
      <circle cx="38" cy="28" r="4" />
      <path d="M18 32h12" />
    </svg>
  ),
  drain: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="24" r="12" />
      <path d="M24 12v24M12 24h24M15.5 15.5l17 17M32.5 15.5l-17 17" />
    </svg>
  ),
  leak: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 18h28" />
      <path d="M14 18v8h20v-8" />
      <path d="M24 26c3 5 7 8 7 12a7 7 0 1 1-14 0c0-4 4-7 7-12Z" />
    </svg>
  ),
  heater: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="15" y="8" width="18" height="32" rx="3" />
      <path d="M21 16h6M21 22h6M24 28v6" />
    </svg>
  ),
  gas: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 8c5 7 10 12 10 18a10 10 0 1 1-20 0c0-6 5-11 10-18Z" />
      <path d="M24 24c2 2 3 4 3 6a3 3 0 1 1-6 0c0-2 1-4 3-6Z" />
    </svg>
  ),
  recommend: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="16" r="5" />
      <circle cx="30" cy="16" r="5" />
      <path d="M10 34c1.5-6 5-9 8-9s6.5 3 8 9" />
      <path d="M22 34c1.5-6 5-9 8-9s6.5 3 8 9" />
    </svg>
  ),
  reviews: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 14h20v14H18l-8 6V14Z" />
      <path d="M18 20h18v14l-7-5H18V20Z" />
    </svg>
  ),
  credentials: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="24" height="32" rx="2" />
      <path d="M18 16h12M18 22h12M18 28h7" />
      <circle cx="30" cy="32" r="4" />
      <path d="M28.5 32l1.2 1.2 2.3-2.4" />
    </svg>
  ),
  quotes: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="12" y="8" width="24" height="32" rx="2" />
      <path d="M18 16h12M18 22h12M18 28h8" />
      <path d="M28 34h6v6l-3-2-3 2v-6Z" />
    </svg>
  ),
  inspect: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="20" cy="20" r="10" />
      <path d="M28 28l10 10" />
      <path d="M16 20h8M20 16v8" />
    </svg>
  ),
  garbage: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 18h16l-1.5 20H17.5L16 18Z" />
      <path d="M14 18h20M20 18V14h8v4M22 24v8M26 24v8" />
    </svg>
  ),
  gasleak: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M24 8c5 7 10 12 10 18a10 10 0 1 1-20 0c0-6 5-11 10-18Z" />
      <path d="M24 20v8M24 32h.01" />
    </svg>
  ),
  dishwasher: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="10" y="8" width="28" height="32" rx="2" />
      <path d="M10 16h28M16 12h2M22 12h10" />
      <circle cx="24" cy="28" r="6" />
    </svg>
  ),
  slab: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 18h32v8H8z" />
      <path d="M14 26v10M24 26v10M34 26v10" />
      <path d="M24 18c0-4 3-8 0-10" />
    </svg>
  ),
  pressure: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="26" r="12" />
      <path d="M24 26l7-7M16 26h16" />
      <path d="M24 10v4" />
    </svg>
  ),
  faucet: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 16h16a8 8 0 0 1 8 8v4" />
      <path d="M12 12v8M36 28v4c0 3-2 6-6 6" />
      <path d="M30 40c2 3 6 3 6 0" />
    </svg>
  ),
  backflow: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 24h12l4-8 4 16 4-8h8" />
      <path d="M32 18l8 6-8 6" />
    </svg>
  ),
  hydro: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 24h18" />
      <path d="M28 18l10 6-10 6" />
      <path d="M38 16v16M8 20v8" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 20h32v20H8z" />
      <path d="M8 20V12h32v8M16 28h8M32 28v6" />
    </svg>
  ),
  bathroom: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22h24v4H12z" />
      <path d="M14 26c0 8 4 14 10 14s10-6 10-14" />
      <path d="M24 8v8M20 12h8" />
    </svg>
  ),
  sump: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 38V22h20v16" />
      <path d="M10 38h28" />
      <path d="M24 22V12M20 16l4-4 4 4" />
    </svg>
  ),
}

export default function ServiceIcon({ name }) {
  return icons[name] || icons.water
}
