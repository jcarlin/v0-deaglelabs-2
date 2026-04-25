/* global React, CTAForm */
// HERO B: Three-tier deployment diagram — type-led with infrastructure schematic

const HeroDeployment = ({ theme, accent, ctaCopy, density }) => {
  const pad = density === "tight" ? "72px 0 56px" : "104px 0 88px";
  return (
    <section style={{ padding: pad, position: "relative" }}>
      <div style={{
        textAlign: "center",
        maxWidth: 980,
        margin: "0 auto 56px",
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: theme.muted,
          marginBottom: 36,
          display: "inline-flex",
          alignItems: "center",
          gap: 16,
        }}>
          <span style={{ width: 32, height: 1, background: theme.muted }} />
          <span>Three deployment tiers · One platform</span>
          <span style={{ width: 32, height: 1, background: theme.muted }} />
        </div>
        <h1 style={{
          fontFamily: "'Instrument Serif', 'Times New Roman', serif",
          fontSize: "clamp(56px, 7.5vw, 116px)",
          lineHeight: 0.93,
          letterSpacing: "-0.025em",
          margin: "0 0 28px",
          fontWeight: 400,
          color: theme.fg,
          textWrap: "balance",
        }}>
          Run legal AI on <em style={{ color: accent }}>your terms</em> —<br />
          not in someone else's cloud.
        </h1>
        <p style={{
          fontSize: 19,
          lineHeight: 1.5,
          maxWidth: 640,
          margin: "0 auto 44px",
          color: theme.fg2,
          letterSpacing: "-0.005em",
        }}>
          Deagle is the only enterprise legal AI platform you can deploy fully
          air-gapped on-premise. For firms where attorney-client privilege isn't optional.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CTAForm ctaCopy={ctaCopy} theme={theme} accent={accent} />
        </div>
      </div>

      <DeploymentDiagram theme={theme} accent={accent} />
    </section>
  );
};

const DeploymentDiagram = ({ theme, accent }) => {
  const tiers = [
    {
      idx: "01",
      name: "Cloud SaaS",
      sub: "Hosted by Deagle",
      desc: "Multi-tenant. SOC 2 Type II. Live in 5 min.",
      privilege: "Standard",
      who: "Solo & small firms",
    },
    {
      idx: "02",
      name: "Bring-your-own-cloud",
      sub: "Kubernetes / Helm",
      desc: "Your AWS, GCP, Azure, or on-prem K8s. We never touch your data plane.",
      privilege: "Enhanced",
      who: "Mid-size firms",
    },
    {
      idx: "03",
      name: "Air-gapped on-prem",
      sub: "Local LLMs · No network",
      desc: "Fully offline. Zero outbound traffic. Bring your own GPUs.",
      privilege: "Absolute",
      who: "Privilege-critical matters",
      featured: true,
    },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 0,
      border: `1px solid ${theme.border}`,
      background: theme.surface,
    }}>
      {tiers.map((t, i) => (
        <div key={t.idx} style={{
          padding: "32px 28px 28px",
          borderRight: i < 2 ? `1px solid ${theme.border}` : "none",
          background: t.featured ? theme.surfaceAlt : "transparent",
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
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 10px",
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
            marginBottom: 14,
          }}>
            TIER {t.idx} · {t.privilege.toUpperCase()} PRIVILEGE
          </div>
          <div style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 32,
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
            color: theme.fg,
            marginBottom: 4,
          }}>
            {t.name}
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: t.featured ? accent : theme.muted,
            marginBottom: 18,
          }}>
            {t.sub}
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, color: theme.fg2, marginBottom: 24, minHeight: 60 }}>
            {t.desc}
          </div>
          <div style={{
            paddingTop: 16,
            borderTop: `1px solid ${theme.border}`,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.06em",
            color: theme.muted,
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "space-between",
          }}>
            <span>For: {t.who}</span>
            <span style={{ color: t.featured ? accent : theme.fg }}>→</span>
          </div>
        </div>
      ))}
    </div>
  );
};

window.HeroDeployment = HeroDeployment;
