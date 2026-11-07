/**
 * The MS Law "Monogram Balance" logo: the MS monogram, a brass rule and the serif wordmark.
 * The letters and wordmark are alpha masks filled with currentColor, so the logo turns porcelain on
 * midnight (hero, footer) and midnight on light backgrounds; the S and pillar stay antique brass.
 */
export function Logo({ markOnly = false }: { markOnly?: boolean }) {
  return <span className="ms-logo">
    <span className="ms-logo-mark" aria-hidden="true"><i /><i /></span>
    {!markOnly && <><span className="ms-logo-rule" aria-hidden="true" /><span className="ms-logo-word" aria-hidden="true" /></>}
    <span className="sr-only">Mariam Saleem Law</span>
  </span>;
}
