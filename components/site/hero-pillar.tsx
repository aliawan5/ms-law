import type { CSSProperties } from "react";

/**
 * Home hero art: a classical column whose shaft is built from ledger blocks (law built on new finance),
 * annotated with what the firm stands on, from its foundation up to the frontier.
 */
const v = (i: number) => ({ "--i": i }) as CSSProperties;

/* Small annotation cards that point at a part of the drawing. x and y are in the 300 × 540 viewBox. */
type Note = { x: number; y: number; side: "left" | "right"; label: string; title: string; d: number };
function Notes({ items }: { items: Note[] }) {
 return <>{items.map(n => <div key={n.title} className={`ms-note is-${n.side}`} style={{ "--x": `${(n.x / 300) * 100}%`, "--y": `${(n.y / 540) * 100}%`, "--d": `${n.d}s` } as CSSProperties}>
  <span className="ms-note-dot" /><span className="ms-note-line" />
  <span className="ms-note-card"><small>{n.label}</small>{n.title}</span>
 </div>)}</>;
}

function Foil({ id }: { id: string }) {
 return <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stopColor="#8f6b37" /><stop offset=".32" stopColor="#d7b67c" /><stop offset=".5" stopColor="#b8945b" />
  <stop offset=".7" stopColor="#efd9ad" /><stop offset="1" stopColor="#a37f47" />
 </linearGradient>;
}

export function HeroPillar() {
 const blocks = Array.from({ length: 8 }, (_, i) => 432 - i * 38);
 return <div className="ms-art ms-art-pillar" aria-hidden="true">
  <svg viewBox="0 0 300 540" fill="none">
   <defs><Foil id="pf" /><linearGradient id="pb" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#182b45" /><stop offset=".5" stopColor="#2e4a67" /><stop offset="1" stopColor="#182b45" /></linearGradient></defs>
   <path className="ms-art-line" pathLength={1} d="M40 92L150 30l110 62Z" />
   <path className="ms-art-line" pathLength={1} d="M70 84l80-44 80 44" style={v(1)} />
   <rect className="ms-pillar-cap" x="62" y="100" width="176" height="18" rx="3" fill="url(#pf)" />
   <path className="ms-pillar-cap" d="M84 118h132l-12 22H96Z" fill="url(#pf)" />
   {blocks.map((y, i) => <g key={y} className="ms-pillar-block" style={{ "--i": i, "--x": i % 2 ? "70px" : "-70px" } as CSSProperties}>
    <rect x="96" y={y} width="108" height="32" rx="4" fill="url(#pb)" stroke="#d8cebe" strokeOpacity=".55" />
    <path d={`M108 ${y + 11}h28M108 ${y + 21}h${18 + (i * 7) % 30}`} stroke="#b8945b" strokeOpacity=".7" strokeLinecap="round" />
    <circle cx="190" cy={y + 16} r="3" fill="#d8cebe" fillOpacity=".5" />
   </g>)}
   <path className="ms-art-line" pathLength={1} d="M78 470h144M60 490h180M44 510h212" style={v(2)} />
  </svg>
  <Notes items={[
   { x: 96, y: 410, side: "left", label: "Foundation", title: "20+ years of practice", d: 2.6 },
   { x: 204, y: 334, side: "right", label: "Base", title: "Based in Islamabad", d: 2.9 },
   { x: 96, y: 258, side: "left", label: "Credentials", title: "Proven transaction record", d: 3.2 },
   { x: 204, y: 182, side: "right", label: "Frontier", title: "Virtual assets pioneer", d: 3.5 },
  ]} />
  <span className="ms-art-caption">Law, built on new foundations</span>
 </div>;
}
