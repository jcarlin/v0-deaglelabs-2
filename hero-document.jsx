/* global React, CTAForm */
// HERO A: Document-as-canvas with floating multi-agent annotations

const HeroDocument = ({ theme, accent, ctaCopy, density }) => {
  const pad = density === "tight" ? "72px 0 56px" : "104px 0 88px";
  return (
    <section style={{ padding: pad, position: "relative" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 80,
        alignItems: "start",
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: theme.muted,
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ width: 24, height: 1, background: theme.muted }} />
            Privileged AI · v2.4 · For firms of 1–100
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', 'Times New Roman', serif",
            fontSize: "clamp(56px, 6.8vw, 100px)",
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            margin: "0 0 32px",
            fontWeight: 400,
            color: theme.fg,
            textWrap: "balance",
          }}>
            Legal AI that<br />
            <em style={{ color: accent, fontStyle: "italic" }}>doesn't leave</em><br />
            your firm.
          </h1>
          <p style={{
            fontSize: 19,
            lineHeight: 1.5,
            maxWidth: 520,
            color: theme.fg2,
            margin: "0 0 40px",
            letterSpacing: "-0.005em",
          }}>
            Document review, multi-agent case work, citation verification, and
            discovery — running on <em style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, color: theme.fg }}>your</em> infrastructure.
            Cloud, your cloud, or fully air-gapped. Privilege-compliant by default.
          </p>
          <CTAForm ctaCopy={ctaCopy} theme={theme} accent={accent} />
        </div>

        <DocumentCanvas theme={theme} accent={accent} />
      </div>
    </section>
  );
};

const DocumentCanvas = ({ theme, accent }) => (
  <div style={{ position: "relative", paddingTop: 30, paddingRight: 40 }}>
    <div style={{
      position: "relative",
      border: `1px solid ${theme.border}`,
      background: theme.docBg,
      padding: "32px 40px 40px",
      fontFamily: "'Source Serif Pro', 'Times New Roman', serif",
      fontSize: 11.5,
      lineHeight: 1.7,
      color: theme.docFg,
      minHeight: 460,
      boxShadow: theme.docShadow,
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 9,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: theme.muted,
        borderBottom: `1px solid ${theme.border}`,
        paddingBottom: 10,
        marginBottom: 18,
        display: "flex",
        justifyContent: "space-between",
      }}>
        <span>U.S. DISTRICT COURT · S.D.N.Y.</span>
        <span style={{ color: accent }}>DGL-000247</span>
      </div>
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <div style={{ fontWeight: 600, fontSize: 13, letterSpacing: "0.04em" }}>MEMORANDUM IN SUPPORT</div>
        <div style={{ color: theme.muted, fontSize: 10, marginTop: 4 }}>Case No. 24-cv-08841 (JMF)</div>
      </div>
      <p style={{ margin: "0 0 14px", textIndent: 24 }}>
        Plaintiffs respectfully submit this memorandum in support of their motion for{" "}
        <span style={{ background: `${accent}22`, padding: "1px 3px", borderBottom: `1.5px solid ${accent}` }}>
          summary judgment
        </span>
        {" "}pursuant to Rule 56 of the Federal Rules of Civil Procedure. The undisputed material facts establish that defendant breached the operative agreement on or about{" "}
        <span style={{ background: `${accent}22`, padding: "1px 3px", borderBottom: `1.5px solid ${accent}` }}>
          March 14, 2024
        </span>.
      </p>
      <p style={{ margin: "0 0 14px", textIndent: 24 }}>
        See <em>Anderson v. Liberty Lobby</em>, 477 U.S. 242, 248 (1986). The Second Circuit has consistently held that a non-moving party "must do more than simply show that there is some metaphysical doubt as to the material facts."
      </p>
      <p style={{ margin: "0 0 14px", textIndent: 24, color: theme.muted, opacity: 0.55, letterSpacing: "0.05em" }}>
        ████████████ ██████ ███ ████ ████████ ██ ████████ ██████
        ███████████ ████ ████ ███ ████ ██████████ ████████████
        ███████ ███████ ████ █████████ ████████.
      </p>
    </div>

    {/* Floating annotations */}
    <Annotation
      theme={theme} accent={accent} ok
      style={{ top: 110, right: 0, width: 200 }}
      label="AGENT 01 · CITECHECK"
      body="Verified vs Westlaw. 477 U.S. 242 confirmed."
    />
    <Annotation
      theme={theme} accent={accent}
      style={{ top: 220, right: -20, width: 210 }}
      label="AGENT 02 · TIMELINE"
      body="Date sourced from Bates DGL-000189. Cross-reference ✓"
    />
    <Annotation
      theme={theme} accent={accent} warn
      style={{ bottom: 30, left: -30, width: 210 }}
      label="AGENT 03 · PRIVILEGE"
      body="Section auto-redacted. Work-product flag raised."
    />
  </div>
);

const Annotation = ({ style, label, body, theme, accent, ok, warn }) => {
  const tag = ok ? "✓" : warn ? "!" : "·";
  const tagColor = ok ? theme.success : warn ? accent : theme.muted;
  return (
    <div style={{
      position: "absolute",
      background: theme.surface,
      border: `1px solid ${theme.border}`,
      padding: "10px 12px",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      lineHeight: 1.5,
      boxShadow: theme.cardShadow,
      ...style,
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 5,
        fontSize: 8.5,
        letterSpacing: "0.08em",
        color: theme.muted,
      }}>
        <span>{label}</span>
        <span style={{ color: tagColor, fontSize: 12, lineHeight: 1, fontWeight: 700 }}>{tag}</span>
      </div>
      <div style={{ color: theme.fg, fontSize: 10.5 }}>{body}</div>
    </div>
  );
};

window.HeroDocument = HeroDocument;
