/** Monogram seal (M in the text colour, S in steel) beside a tracked wordmark. */
export function Logo() {
  return <span className="ms-logo">
    <svg className="ms-logo-mark" viewBox="0 0 46 46" fill="none" aria-hidden="true">
      <circle cx="23" cy="23" r="22" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.1" />
      <path d="M11 29V17l6.5 8 6.5-8v12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <path className="ms-logo-s" d="M35 18.5c-.8-1.4-2.3-2.2-4-2.2-2.3 0-3.9 1.3-3.9 3.1 0 4.2 8.3 2.4 8.3 6.6 0 1.9-1.7 3.4-4.2 3.4-1.9 0-3.5-.9-4.3-2.4" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <span className="ms-logo-word">
      <span className="ms-logo-name">MARIAM SALEEM</span>
      <span className="ms-logo-law">LAW<i /></span>
    </span>
  </span>;
}
