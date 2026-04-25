/* global React, SectionHeader */

// ===== Feature grid =====
const FeatureGrid = ({ theme, accent, density }) => {
  const pad = density === "tight" ? "60px 0" : "100px 0";
  const features = [
    {
      idx: "01",
      title: "Document review",
      desc: "Review 10,000-doc productions in hours, not weeks. EDRM-native ingestion preserves metadata, families, and chain-of-custody.",
      tech: "EDRM v2.0 · Concordance · Relativity import",
    },
    {
      idx: "02",
      title: "Legal research",
      desc: "Westlaw, Lexis, PACER, and your firm's prior work product — searched together. Every result links back to authority.",
      tech: "Westlaw · Lexis+ · PACER · Bloomberg Law",
    },
    {
      idx: "03",
      title: "Citation verification",
      desc: "Every cite gated through a deterministic verifier before it reaches your draft. 2.1% hallucination rate vs 17–33% for incumbents.",
      tech: "Shepard's · KeyCite · negative-treatment flags",
    },
    {
      idx: "04",
      title: "Privilege protection",
      desc: "Auto-detection of attorney-client and work-product material. Privilege log generated continuously, not at the end.",
      tech: "FRE 502 · auto-redaction · audit trail",
    },
    {
      idx: "05",
      title: "Discovery workflows",
      desc: "Bates numbering, production sets, claw-back tracking, and 30(b)(6) prep — all in one workflow, no exports.",
      tech: "Bates · DAT/OPT · load files · privilege log",
    },
    {
      idx: "06",
      title: "Multi-agent case work",
      desc: "Specialist agents collaborate on intake, research, drafting, and review. Each is auditable and replaceable.",
      tech: "7 agents · open spec · custom agents",
    },
  ];

  return (
    <section style={{ padding: pad, borderTop: `1px solid ${theme.border}` }}>
      <SectionHeader
        theme={theme} accent={accent}
        kicker="§ 04 · The platform"
        title={<>Six workflows. <em style={{ color: accent }}>One</em> evidence chain.</>}
        sub="Built for how litigation actually works — not a search bar bolted onto a chatbot."
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 0,
        border: `1px solid ${theme.border}`,
        borderRight: "none",
        borderBottom: "none",
      }}>
        {features.map((f) => (
          <div key={f.idx} style={{
            padding: "32px 28px",
            borderRight: `1px solid ${theme.border}`,
            borderBottom: `1px solid ${theme.border}`,
            background: theme.surface,
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: theme.muted,
              letterSpacing: "0.1em",
              marginBottom: 18,
            }}>
              FEATURE {f.idx}
            </div>
            <div style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 30,
              lineHeight: 1.05,
              letterSpacing: "-0.018em",
              color: theme.fg,
              marginBottom: 14,
            }}>
              {f.title}
            </div>
            <div style={{
              fontSize: 14.5,
              lineHeight: 1.55,
              color: theme.fg2,
              marginBottom: 24,
              flex: 1,
            }}>
              {f.desc}
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10.5,
              color: accent,
              letterSpacing: "0.04em",
              paddingTop: 16,
              borderTop: `1px solid ${theme.border}`,
            }}>
              {f.tech}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

window.FeatureGrid = FeatureGrid;
