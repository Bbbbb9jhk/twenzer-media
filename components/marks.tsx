/* TWENZER. MEDIA — logo marks + wordmark, ported from logo-parts.jsx */

export const TWZ = {
  oliveDeep: "#2a3020",
  oliveDark: "#3d4a28",
  oliveMid: "#5c6b35",
  oliveLight: "#8a9f55",
  olivePale: "#c8d4a0",
  burnDark: "#c45c22",
  burn: "#d97035",
  burnLight: "#e8905c",
  cream: "#f5f2ea",
  black: "#111209",
};

/* MARK 01 · FORWARD ( » ) — twin chevrons pushing right = distribution / reach */
export function MarkForward({
  size = 120,
  base = TWZ.burn,
  accent,
  sw = 15,
}: {
  size?: number;
  base?: string;
  accent?: string;
  sw?: number;
}) {
  const a = accent || base;
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} fill="none" aria-label="Twenzer mark">
      <path d="M30 34 L66 60 L30 86" stroke={base} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 34 L94 60 L58 86" stroke={a} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* WIDE MARK — the forward chevrons marched out across the width */
export function MarkWide({
  width = 340,
  color = TWZ.burn,
  count = 5,
  sw = 11,
  ramp = false,
  className,
}: {
  width?: number;
  color?: string;
  count?: number;
  sw?: number;
  ramp?: boolean;
  className?: string;
}) {
  const vbW = 60 + (count - 1) * 58 + 26;
  const startX = 30,
    gap = 58,
    topY = 24,
    midY = 50,
    botY = 76;
  const items = [];
  for (let i = 0; i < count; i++) {
    const x = startX + i * gap;
    const op = ramp ? 0.45 + 0.55 * (i / (count - 1)) : 1;
    items.push(
      <path
        key={i}
        d={`M${x} ${topY} L${x + 26} ${midY} L${x} ${botY}`}
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={op}
      />
    );
  }
  return (
    <svg
      viewBox={`0 0 ${vbW} 100`}
      width={width}
      height={(width / vbW) * 100}
      fill="none"
      aria-label="Twenzer wide mark"
      className={className}
    >
      {items}
    </svg>
  );
}

/* WORDMARK — Bebas Neue, the period carries the burnt-orange accent */
export function Wordmark({
  size = 58,
  color = TWZ.cream,
  accent = TWZ.burn,
  sub = TWZ.oliveLight,
  align = "center",
}: {
  size?: number;
  color?: string;
  accent?: string;
  sub?: string;
  align?: "left" | "center" | "right";
}) {
  return (
    <div style={{ textAlign: align, lineHeight: 1, direction: "ltr" }}>
      <div
        className="font-display"
        style={{ fontSize: size, letterSpacing: "0.045em", color, lineHeight: 0.85 }}
      >
        TWENZER<span style={{ color: accent }}>.</span>
      </div>
      <div
        className="font-en"
        style={{
          fontWeight: 500,
          fontSize: Math.max(9, size * 0.155),
          letterSpacing: "0.62em",
          color: sub,
          marginTop: size * 0.12,
          paddingInlineStart: "0.62em",
        }}
      >
        MEDIA
      </div>
    </div>
  );
}
