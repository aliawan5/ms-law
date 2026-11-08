import { Fragment, useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

/**
 * Motion primitives for the home page, rebuilt natively on Motion (motion.dev) and the brand CSS.
 * Patterns adapted from: Skiper UI (roll links), Vengeance UI
 * (glow border card, cursor card, animated number) and Animata (focus-blur text, border trail, sibling focus).
 * Every component renders its full text on the server, so the prerendered HTML keeps all SEO copy.
 */

export const vars = (v: Record<string, string | number>) => v as CSSProperties;

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Spotlight: writes the pointer position into --mx / --my on the element (Vengeance "Cursor Card"). */
export function spotlight(e: PointerEvent<HTMLElement>) {
 const el = e.currentTarget, r = el.getBoundingClientRect(), z = zoomOf(el);
 el.style.setProperty("--mx", `${(e.clientX - r.left) / z}px`);
 el.style.setProperty("--my", `${(e.clientY - r.top) / z}px`);
}
/** On large screens the content column is CSS-zoomed; pointer offsets must be converted back to CSS pixels. */
const zoomOf = (el: Element) => (el as Element & { currentCSSZoom?: number }).currentCSSZoom ?? 1;

/** Glow border across a grid: every [data-glow] child gets its own pointer offset (Vengeance "Glow Border Card"). */
export function glowGrid(e: PointerEvent<HTMLElement>) {
 e.currentTarget.querySelectorAll<HTMLElement>("[data-glow]").forEach(el => {
  const r = el.getBoundingClientRect(), z = zoomOf(el);
  el.style.setProperty("--mx", `${(e.clientX - r.left) / z}px`);
  el.style.setProperty("--my", `${(e.clientY - r.top) / z}px`);
 });
}

/** Words that rise out of a mask when their parent reveals (Animata "Mask Reveal Up"). */
export function SplitWords({ parts, start = 0 }: { parts: [string, boolean?][]; start?: number }) {
 let i = start;
 return <>{parts.map(([text, accent], p) => {
  const words = text.trim().split(/\s+/).map((w, k, all) => <Fragment key={k}>
   <span className="fx-word"><span style={vars({ "--w": i++ })}>{w}</span></span>{k < all.length - 1 ? " " : ""}
  </Fragment>);
  return <Fragment key={p}>{p > 0 ? " " : ""}{accent ? <span className="ms-accent">{words}</span> : words}</Fragment>;
 })}</>;
}

/** Roll text on hover (Animata "Roll text" / Skiper link hovers). The second line is drawn by CSS, not duplicated in the DOM. */
export function Roll({ children }: { children: string }) {
 return <span className="fx-roll"><span data-text={children}>{children}</span></span>;
}

/** Card that tilts toward the pointer with a moving glare (Vengeance "Cursor Card"). */
export function Tilt({ children, className, max = 9, style }: { children: ReactNode; className?: string; max?: number; style?: CSSProperties }) {
 const x = useMotionValue(0.5), y = useMotionValue(0.5);
 const cfg = { stiffness: 180, damping: 18, mass: .6 };
 const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), cfg);
 const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), cfg);
 const glare = useTransform([x, y], ([gx, gy]: number[]) => `radial-gradient(420px circle at ${gx * 100}% ${gy * 100}%, rgba(255,255,255,.22), transparent 45%)`);
 return <motion.div className={`fx-tilt ${className ?? ""}`} style={{ ...style, rotateX, rotateY, transformPerspective: 900 }}
  onPointerMove={e => { if (e.pointerType !== "mouse" || reduced()) return; const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left) / r.width); y.set((e.clientY - r.top) / r.height); }}
  onPointerLeave={() => { x.set(.5); y.set(.5); }}>
  {children}
  <motion.span className="fx-glare" style={{ background: glare }} aria-hidden="true" />
 </motion.div>;
}

/** Odometer digits that roll into place when scrolled into view (Vengeance "Animated Number"). */
export function RollingNumber({ value, className }: { value: number; className?: string }) {
 const ref = useRef<HTMLSpanElement>(null);
 const [shown, setShown] = useState(value);
 useEffect(() => {
  const el = ref.current; if (!el || reduced()) return;
  if (el.getBoundingClientRect().top < window.innerHeight * .9) return;
  setShown(0);
  const io = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShown(value); io.disconnect(); } }, { threshold: .6 });
  io.observe(el);
  return () => io.disconnect();
 }, [value]);
 const target = String(value), current = String(shown).padStart(target.length, "0");
 return <span ref={ref} className={`fx-odo ${className ?? ""}`}>
  <span className="sr-only">{value}</span>
  {target.split("").map((_, i) => <span key={i} className="fx-odo-col" aria-hidden="true" style={vars({ "--n": Number(current[i]), "--i": i })}>
   <span>{"0123456789".split("").map(d => <span key={d}>{d}</span>)}</span>
  </span>)}
 </span>;
}
