/* global React */
// Brand assets: logo variants and brand marks for Deagle.
// Three logo variants: A) Geometric eagle-shield mark + serif wordmark
//                     B) Monogram D with crosshair (Desert Eagle nod)
//                     C) Wordmark only with custom ligature

const Logo = ({ variant = "A", size = 28, mono = false, color = "currentColor" }) => {
  if (variant === "A") {
    // Eagle compressed into a shield/seal — geometric, no curves drawn freehand
    const m = size;
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: m * 0.35, color }}>
        <svg width={m * 0.95} height={m} viewBox="0 0 38 40" fill="none" aria-hidden="true">
          {/* Shield outline */}
          <path d="M2 2 H36 V22 L19 38 L2 22 Z" stroke={color} strokeWidth="1.6" fill="none" />
          {/* Eagle: triangular head + outstretched wings as nested chevrons */}
          <path d="M8 12 L19 8 L30 12" stroke={color} strokeWidth="1.6" strokeLinecap="square" fill="none" />
          <path d="M10 17 L19 13 L28 17" stroke={color} strokeWidth="1.6" strokeLinecap="square" fill="none" />
          <path d="M13 22 L19 19 L25 22" stroke={color} strokeWidth="1.6" strokeLinecap="square" fill="none" />
          {/* Vertical body / arrow down */}
          <path d="M19 8 L19 30" stroke={color} strokeWidth="1.6" />
          <path d="M16 27 L19 31 L22 27" stroke={color} strokeWidth="1.6" fill="none" />
        </svg>
        {!mono && (
          <span style={{
            fontFamily: "'Instrument Serif', 'Times New Roman', serif",
            fontSize: m * 0.95,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            fontWeight: 400,
            position: "relative",
            top: m * 0.02,
          }}>
            Deagle
          </span>
        )}
      </span>
    );
  }
  if (variant === "B") {
    // Monogram D with crosshair reticle (Desert Eagle nod)
    const m = size;
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: m * 0.35, color }}>
        <svg width={m} height={m} viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <rect x="1.5" y="1.5" width="37" height="37" stroke={color} strokeWidth="1.4" fill="none" />
          {/* Crosshair */}
          <line x1="20" y1="0" x2="20" y2="6" stroke={color} strokeWidth="1.2" />
          <line x1="20" y1="34" x2="20" y2="40" stroke={color} strokeWidth="1.2" />
          <line x1="0" y1="20" x2="6" y2="20" stroke={color} strokeWidth="1.2" />
          <line x1="34" y1="20" x2="40" y2="20" stroke={color} strokeWidth="1.2" />
          {/* D letterform — geometric */}
          <path d="M12 11 H22 a8 9 0 0 1 0 18 H12 Z" stroke={color} strokeWidth="1.6" fill="none" />
          <circle cx="20" cy="20" r="1.2" fill={color} />
        </svg>
        {!mono && (
          <span style={{
            fontFamily: "'Instrument Serif', 'Times New Roman', serif",
            fontSize: m * 0.95,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            fontWeight: 400,
            position: "relative",
            top: m * 0.02,
          }}>
            Deagle
          </span>
        )}
      </span>
    );
  }
  // Variant C — wordmark with bracket marks (legal citation)
  const m = size;
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "baseline",
      gap: m * 0.18,
      color,
      fontFamily: "'Instrument Serif', 'Times New Roman', serif",
      fontSize: m * 1.1,
      letterSpacing: "-0.015em",
      lineHeight: 1,
    }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: m * 0.55, opacity: 0.6, alignSelf: "center" }}>§</span>
      <span>Deagle</span>
    </span>
  );
};

// Brand pattern: a subtle striped / dotted background SVG used as texture
const BrandPattern = ({ opacity = 0.04, color = "currentColor" }) => (
  <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity }} aria-hidden="true">
    <defs>
      <pattern id="brand-stripe" width="6" height="6" patternUnits="userSpaceOnUse">
        <path d="M0 6 L6 0" stroke={color} strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#brand-stripe)" />
  </svg>
);

// OG/Social share card preview (1200x630 aspect)
const OGCard = ({ theme, accent }) => (
  <div style={{
    width: "100%",
    aspectRatio: "1200/630",
    background: theme.bg,
    color: theme.fg,
    position: "relative",
    overflow: "hidden",
    border: `1px solid ${theme.border}`,
    padding: "48px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "'Inter Tight', system-ui, sans-serif",
  }}>
    <BrandPattern opacity={0.06} color={theme.fg} />
    <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <Logo variant="A" size={28} color={theme.fg} />
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.5 }}>
        deaglelabs.com
      </div>
    </div>
    <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.5, marginBottom: 16 }}>
        Privileged AI infrastructure
      </div>
      <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 64, lineHeight: 0.95, letterSpacing: "-0.02em", maxWidth: "90%" }}>
        Legal AI that <em style={{ color: accent }}>doesn't leave</em> your firm.
      </div>
      <div style={{ marginTop: 24, fontSize: 16, opacity: 0.7, maxWidth: 600 }}>
        Cloud, BYOC, or fully air-gapped on-prem. The only legal AI platform that respects attorney-client privilege by default.
      </div>
    </div>
  </div>
);

window.Logo = Logo;
window.BrandPattern = BrandPattern;
window.OGCard = OGCard;
