/* global React */
const { useState, useEffect } = React;

// ===== SECTION: Three-tier deployment spectrum (full) =====
const DeploymentSection = ({ theme, accent, density }) => {
  const pad = density === "tight" ? "60px 0" : "100px 0";
  const tiers = [
    {
      idx: "01",
      name: "Cloud SaaS",
      who: "Solo & small firms (1–10 lawyers)",
      privilege: "Standard",
      privilegeTone: theme.fg,
      bullets: [
        "Multi-tenant, hosted by Deagle",
        "SOC 2 Type II, ISO 27001",
        "Live in 5 minutes — no IT required",
        "Per-seat pricing from $89/mo",
      ],
      schema: ["Your firm", "→", "Deagle cloud", "→", "Deagle LLM"],
    },
    {
      idx: "02",
      name: "Bring-your-own-cloud",
      who: "Mid-size firms (10–100 lawyers)",
      privilege: "Enhanced",
      privilegeTone: theme.fg,
      bullets: [
        "Helm chart deploys to your AWS / GCP / Azure / on-prem K8s",
        "Your VPC, your encryption keys, your audit logs",
        "Deagle never touches your data plane",
        "Per-firm licensing",
      ],
      schema: ["Your firm", "→", "Your cloud", "→", "Deagle LLM (in your VPC)"],
    },
    {
      idx: "03",
      name: "Air-gapped on-prem",
      who: "Privilege-critical & regulated matters",
      privilege: "Absolute",
      privilegeTone: accent,
      featured: true,
      bullets: [
        "Fully offline — zero outbound network traffic",
        "Local LLMs (Llama 3.3 70B, Qwen 2.5, custom fine-tunes)",
        "Bring your own GPUs (H100 / A100 / consumer)",
        "Deagle exclusive — no incumbent offers this",
      ],
      schema: ["Your firm", "→", "Your hardware", "■", "Local LLM"],
    },
  ];

  return (
    <section style={{ padding: pad, borderTop: `1px solid ${theme.border}` }}>
      <SectionHeader
        theme={theme} accent={accent}
        kicker="§ 02 · Deployment spectrum"
        title={<>One platform. <em style={{ color: accent }}>Three</em> ways to keep your data yours.</>}
        sub="Your deployment determines your privilege posture. Choose the tier that matches the matter — and switch tiers per-client without re-implementation."
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 0,
        border: `1px solid ${theme.border}`,
        borderBottom: "none",
      }}>
        {tiers.map((t, i) => (
          <div key={t.idx} style={{
            padding: "36px 32px 32px",
            borderRight: i < 2 ? `1px solid ${theme.border}` : "none",
            borderBottom: `1px solid ${theme.border}`,
            background: t.featured ? theme.surfaceAlt : theme.surface,
            position: "relative",
          }}>
            {t.featured && (
              <div style={{
                position: "absolute",
                top: 0, right: 0,
                background: accent,
                color: theme.btnFg,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "5px 12px",
                fontWeight: 600,
              }}>
                Deagle exclusive
              </div>
            )}
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: theme.muted,
              letterSpacing: "0.1em",
              marginBottom: 18,
            }}>
              TIER {t.idx}
            </div>
            <div style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 36,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: theme.fg,
              marginBottom: 8,
            }}>
              {t.name}
            </div>
            <div style={{
              fontSize: 13,
              color: theme.muted,
              marginBottom: 24,
            }}>
              {t.who}
            </div>

            {/* Schema diagram */}
            <div style={{
              background: theme.bg,
              border: `1px solid ${theme.border}`,
              padding: "12px 14px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10.5,
              letterSpacing: "0.02em",
              marginBottom: 24,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 6,
              lineHeight: 1.5,
            }}>
              {t.schema.map((s, k) => (
                <span key={k} style={{
                  color: s === "→" || s === "■" ? (t.featured ? accent : theme.muted) : theme.fg,
                  fontSize: s === "■" ? 13 : 10.5,
                }}>{s}</span>
              ))}
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", fontSize: 13.5, lineHeight: 1.6 }}>
              {t.bullets.map((b, k) => (
                <li key={k} style={{ display: "flex", gap: 10, marginBottom: 10, color: theme.fg2 }}>
                  <span style={{ color: t.featured ? accent : theme.muted, fontFamily: "monospace", flexShrink: 0 }}>·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{
              paddingTop: 16,
              borderTop: `1px solid ${theme.border}`,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "space-between",
              color: theme.muted,
            }}>
              <span>Privilege</span>
              <span style={{ color: t.privilegeTone, fontWeight: 600 }}>{t.privilege.toUpperCase()}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Reusable section header
const SectionHeader = ({ kicker, title, sub, theme, accent, align = "left" }) => (
  <div style={{
    maxWidth: align === "center" ? 760 : 720,
    margin: align === "center" ? "0 auto 56px" : "0 0 56px",
    textAlign: align,
  }}>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: theme.muted,
      marginBottom: 24,
    }}>
      {kicker}
    </div>
    <h2 style={{
      fontFamily: "'Instrument Serif', serif",
      fontSize: "clamp(40px, 4.6vw, 64px)",
      lineHeight: 1.0,
      letterSpacing: "-0.022em",
      margin: "0 0 20px",
      fontWeight: 400,
      color: theme.fg,
      textWrap: "balance",
    }}>
      {title}
    </h2>
    {sub && (
      <p style={{
        fontSize: 18,
        lineHeight: 1.5,
        maxWidth: 600,
        margin: align === "center" ? "0 auto" : 0,
        color: theme.fg2,
      }}>
        {sub}
      </p>
    )}
  </div>
);

window.DeploymentSection = DeploymentSection;
window.SectionHeader = SectionHeader;
