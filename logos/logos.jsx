// logos.jsx — three logo directions for Deagle Labs

const PALETTE = {
  void: '#0A0A09',
  paper: '#F2EFE7',
  ink: '#1B1B18',
  muted: '#6C6C64',
  steel: '#9A9A93',
  coral: '#F26B5C',
  blue: '#5C9CFF',
};

// ============ DIRECTION 1: THE SEAL ============
// Modernized court/notary seal. D held in a ring, with a precision
// "pin-cite" crosshair marking the verified point inside the D.

function SealMark({ size = 120, ink = PALETTE.paper, accent = PALETTE.coral, stroke = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Outer ring — the seal */}
      <circle cx="60" cy="60" r="54" stroke={ink} strokeWidth={stroke} fill="none" />
      {/* Inner hairline ring */}
      <circle cx="60" cy="60" r="49" stroke={ink} strokeWidth={stroke * 0.4} fill="none" opacity="0.55" />
      {/* The D, geometrically constructed inside the seal */}
      <path
        d="M 40 38 L 62 38 C 75 38 84 47 84 60 C 84 73 75 82 62 82 L 40 82 Z"
        stroke={ink}
        strokeWidth={stroke * 1.4}
        fill="none"
        strokeLinejoin="miter"
      />
      {/* Pin-cite crosshair — the verified point */}
      <circle cx="69" cy="60" r="3" fill={accent} />
      <line x1="69" y1="52" x2="69" y2="56" stroke={accent} strokeWidth={stroke * 0.8} />
      <line x1="69" y1="64" x2="69" y2="68" stroke={accent} strokeWidth={stroke * 0.8} />
      <line x1="61" y1="60" x2="65" y2="60" stroke={accent} strokeWidth={stroke * 0.8} />
      <line x1="73" y1="60" x2="77" y2="60" stroke={accent} strokeWidth={stroke * 0.8} />
    </svg>
  );
}

function SealWordmark({ height = 40, ink = PALETTE.paper, accent = PALETTE.coral }) {
  const h = height;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: h * 0.35, lineHeight: 1 }}>
      <SealMark size={h} ink={ink} accent={accent} stroke={2.2} />
      <div style={{
        fontFamily: '"Geist", system-ui, sans-serif',
        fontSize: h * 0.72,
        fontWeight: 600,
        letterSpacing: '-0.02em',
        color: ink,
      }}>
        Deagle<span style={{ color: PALETTE.steel, fontWeight: 500 }}>&nbsp;Labs</span>
      </div>
    </div>
  );
}


// ============ DIRECTION 2: THE CITATION ============
// Custom D built as two stacked section signs (§) — the most
// recognizable symbol in legal writing. The D emerges from the
// negative space where the two § marks meet.

function CitationMark({ size = 120, ink = PALETTE.paper, accent = PALETTE.coral, stroke = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Vertical spine */}
      <line x1="30" y1="22" x2="30" y2="98" stroke={ink} strokeWidth="6" strokeLinecap="square" />
      {/* Top bowl of D — a § echo */}
      <path
        d="M 30 22 L 62 22 C 78 22 90 34 90 50 C 90 60 84 66 76 66"
        stroke={ink}
        strokeWidth="6"
        fill="none"
        strokeLinecap="square"
      />
      {/* Bottom bowl — offset, creating § rhythm */}
      <path
        d="M 44 54 C 36 54 30 60 30 70 C 30 86 42 98 58 98 L 90 98"
        stroke={ink}
        strokeWidth="6"
        fill="none"
        strokeLinecap="square"
      />
      {/* Two cite-dots: the § marker */}
      <circle cx="74" cy="36" r="3.5" fill={accent} />
      <circle cx="46" cy="84" r="3.5" fill={accent} />
    </svg>
  );
}

function CitationWordmark({ height = 40, ink = PALETTE.paper, accent = PALETTE.coral }) {
  const h = height;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: h * 0.35, lineHeight: 1 }}>
      <CitationMark size={h * 1.0} ink={ink} accent={accent} />
      <div style={{
        fontFamily: '"Geist", system-ui, sans-serif',
        fontSize: h * 0.72,
        fontWeight: 600,
        letterSpacing: '-0.02em',
        color: ink,
      }}>
        Deagle<span style={{ color: PALETTE.steel, fontWeight: 500 }}>&nbsp;Labs</span>
      </div>
    </div>
  );
}


// ============ DIRECTION 3: THE REDACTION ============
// A solid black bar — the redaction block — with a D cut into the
// right edge as if the bar is "lifting" to reveal the verified content.
// Directly references privilege, confidentiality, the thing litigators
// do with every document they touch.

function RedactionMark({ size = 120, ink = PALETTE.paper, accent = PALETTE.coral, bg = PALETTE.void }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Redaction bar — solid block */}
      <rect x="14" y="38" width="92" height="44" fill={ink} />
      {/* D cut into the right end — negative space reveals bg */}
      <path
        d="M 106 38 L 80 38 C 68 38 60 46 60 60 C 60 74 68 82 80 82 L 106 82 Z"
        fill={bg}
      />
      {/* Accent dot inside the D — the "revealed" verified point */}
      <circle cx="78" cy="60" r="3.5" fill={accent} />
    </svg>
  );
}

function RedactionWordmark({ height = 40, ink = PALETTE.paper, accent = PALETTE.coral, bg = PALETTE.void }) {
  const h = height;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: h * 0.35, lineHeight: 1 }}>
      <RedactionMark size={h} ink={ink} accent={accent} bg={bg} />
      <div style={{
        fontFamily: '"Geist", system-ui, sans-serif',
        fontSize: h * 0.72,
        fontWeight: 600,
        letterSpacing: '-0.02em',
        color: ink,
      }}>
        Deagle<span style={{ color: PALETTE.steel, fontWeight: 500 }}>&nbsp;Labs</span>
      </div>
    </div>
  );
}

// ============ EXPORT ============
Object.assign(window, {
  PALETTE,
  SealMark, SealWordmark,
  CitationMark, CitationWordmark,
  RedactionMark, RedactionWordmark,
});
