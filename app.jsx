/* global React, ReactDOM,
   Logo, BrandPattern, OGCard,
   CTAForm, HeroDocument, HeroDeployment, HeroBenchmark,
   DeploymentSection, SectionHeader, MultiAgentDemo,
   FeatureGrid, ComparisonTable, FAQ, FooterCTA, Footer,
   useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakSelect, TweakText */

const { useState, useEffect } = React;

// ===== Theme system =====
const THEMES = {
  bone: {
    name: "Bone & Ink",
    bg: "#F4F1EA",
    fg: "#0E0F0C",
    fg2: "#3A3A36",
    muted: "#7A786E",
    border: "#D8D3C5",
    surface: "#FAF8F2",
    surfaceAlt: "#EDE8DC",
    docBg: "#FBF9F3",
    docFg: "#1A1A17",
    docShadow: "0 1px 0 rgba(0,0,0,0.04), 0 12px 32px -16px rgba(20,18,12,0.12)",
    cardShadow: "0 6px 16px -8px rgba(20,18,12,0.18)",
    btnFg: "#FAF8F2",
    success: "#2D7D46",
  },
  graphite: {
    name: "Graphite",
    bg: "#0E0F0C",
    fg: "#F4F1EA",
    fg2: "#B8B4A6",
    muted: "#787569",
    border: "#27261F",
    surface: "#16170F",
    surfaceAlt: "#1C1D14",
    docBg: "#16170F",
    docFg: "#F4F1EA",
    docShadow: "0 1px 0 rgba(255,255,255,0.04), 0 16px 40px -20px rgba(0,0,0,0.6)",
    cardShadow: "0 6px 16px -8px rgba(0,0,0,0.5)",
    btnFg: "#0E0F0C",
    success: "#5FB87E",
  },
  oxford: {
    name: "Oxford Navy",
    bg: "#F2F2EE",
    fg: "#0B1A2C",
    fg2: "#2E3D52",
    muted: "#6E7A8A",
    border: "#C8CCD2",
    surface: "#FAFAF7",
    surfaceAlt: "#E6E8EA",
    docBg: "#FCFCF8",
    docFg: "#0B1A2C",
    docShadow: "0 1px 0 rgba(0,0,0,0.04), 0 12px 32px -16px rgba(11,26,44,0.15)",
    cardShadow: "0 6px 16px -8px rgba(11,26,44,0.18)",
    btnFg: "#FAFAF7",
    success: "#1E6E48",
  },
};

const ACCENTS = {
  oxblood: "#8C2A1E",      // default — desert eagle / wax seal
  ink: "#0E0F0C",          // monochrome
  oxford: "#1E3A6B",       // legal navy
  rust: "#B5481E",         // brighter desert
  ochre: "#A87B2A",        // parchment-aged
};

const TYPE_PAIRINGS = {
  classic: { headline: "'Instrument Serif', 'Times New Roman', serif", body: "'Inter Tight', system-ui, sans-serif", mono: "'JetBrains Mono', monospace", label: "Instrument Serif + Inter Tight" },
  literary: { headline: "'Fraunces', 'Times New Roman', serif", body: "'Newsreader', Georgia, serif", mono: "'JetBrains Mono', monospace", label: "Fraunces + Newsreader" },
  modern: { headline: "'GT Sectra', 'Newsreader', serif", body: "'Geist', system-ui, sans-serif", mono: "'Geist Mono', monospace", label: "Newsreader + Geist" },
};

// ===== Top nav =====
const TopNav = ({ theme, accent, logoVariant }) => (
  <nav style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0",
    borderBottom: `1px solid ${theme.border}`,
  }}>
    <Logo variant={logoVariant} size={26} color={theme.fg} />
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 32,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    }}>
      <a href="#deploy" style={{ color: theme.fg2, textDecoration: "none" }}>Deploy</a>
      <a href="#agents" style={{ color: theme.fg2, textDecoration: "none" }}>Agents</a>
      <a href="#platform" style={{ color: theme.fg2, textDecoration: "none" }}>Platform</a>
      <a href="#vs" style={{ color: theme.fg2, textDecoration: "none" }}>vs.</a>
      <a href="#faq" style={{ color: theme.fg2, textDecoration: "none" }}>FAQ</a>
      <span style={{ width: 1, height: 14, background: theme.border }} />
      <a href="#cta" style={{
        color: accent,
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        demo.deaglelabs.com →
      </a>
    </div>
  </nav>
);

// ===== Status bar (top-most) =====
const StatusBar = ({ theme, accent }) => (
  <div style={{
    background: theme.fg,
    color: theme.bg,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10.5,
    letterSpacing: "0.06em",
    padding: "8px 0",
  }}>
    <div className="container" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      flexWrap: "wrap",
    }}>
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 6, height: 6, background: accent, borderRadius: "50%", animation: "pulse 1.4s infinite" }} />
        v2.4 shipped · Citation verifier hits 2.1% hallucination on Stanford eval
      </span>
      <span style={{ opacity: 0.6 }}>SOC 2 · ISO 27001 · HIPAA · GDPR</span>
    </div>
  </div>
);

// ===== Tweaks =====
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "document",
  "theme": "bone",
  "accent": "oxblood",
  "typePairing": "classic",
  "density": "spacious",
  "logoVariant": "A",
  "ctaCopy": "Get demo access"
}/*EDITMODE-END*/;

// ===== Main App =====
const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const theme = THEMES[tweaks.theme] || THEMES.bone;
  const accent = ACCENTS[tweaks.accent] || ACCENTS.oxblood;
  const typePair = TYPE_PAIRINGS[tweaks.typePairing] || TYPE_PAIRINGS.classic;

  // Apply CSS vars for fonts
  useEffect(() => {
    document.documentElement.style.setProperty("--font-headline", typePair.headline);
    document.documentElement.style.setProperty("--font-body", typePair.body);
    document.documentElement.style.setProperty("--font-mono", typePair.mono);
    document.body.style.background = theme.bg;
    document.body.style.color = theme.fg;
  }, [theme, typePair]);

  const HeroComponent = {
    document: HeroDocument,
    deployment: HeroDeployment,
    benchmark: HeroBenchmark,
  }[tweaks.heroVariant] || HeroDocument;

  return (
    <div style={{ background: theme.bg, color: theme.fg, fontFamily: typePair.body, minHeight: "100vh" }}>
      <StatusBar theme={theme} accent={accent} />
      <div className="container">
        <TopNav theme={theme} accent={accent} logoVariant={tweaks.logoVariant} />
      </div>

      <div className="container" id="cta">
        <HeroComponent
          theme={theme}
          accent={accent}
          ctaCopy={tweaks.ctaCopy}
          density={tweaks.density}
          logoVariant={tweaks.logoVariant}
        />
      </div>

      <div className="container" id="deploy">
        <DeploymentSection theme={theme} accent={accent} density={tweaks.density} />
      </div>

      <div className="container" id="agents">
        <MultiAgentDemo theme={theme} accent={accent} density={tweaks.density} />
      </div>

      <div className="container" id="platform">
        <FeatureGrid theme={theme} accent={accent} density={tweaks.density} />
      </div>

      <div className="container" id="vs">
        <ComparisonTable theme={theme} accent={accent} density={tweaks.density} />
      </div>

      <div className="container" id="faq">
        <FAQ theme={theme} accent={accent} density={tweaks.density} />
      </div>

      <div style={{ background: theme.surfaceAlt }}>
        <div className="container">
          <FooterCTA theme={theme} accent={accent} ctaCopy={tweaks.ctaCopy} density={tweaks.density} />
        </div>
      </div>

      <div className="container">
        <Footer theme={theme} accent={accent} logoVariant={tweaks.logoVariant} />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Layout" />
        <TweakRadio
          label="Hero"
          value={tweaks.heroVariant}
          onChange={(v) => setTweak("heroVariant", v)}
          options={[
            { value: "document", label: "Doc" },
            { value: "deployment", label: "Tiers" },
            { value: "benchmark", label: "Bench" },
          ]}
        />
        <TweakRadio
          label="Density"
          value={tweaks.density}
          onChange={(v) => setTweak("density", v)}
          options={[
            { value: "spacious", label: "Spacious" },
            { value: "tight", label: "Tight" },
          ]}
        />

        <TweakSection label="Brand" />
        <TweakSelect
          label="Theme"
          value={tweaks.theme}
          onChange={(v) => setTweak("theme", v)}
          options={[
            { value: "bone", label: "Bone & Ink (light)" },
            { value: "graphite", label: "Graphite (dark)" },
            { value: "oxford", label: "Oxford Navy" },
          ]}
        />
        <TweakSelect
          label="Accent"
          value={tweaks.accent}
          onChange={(v) => setTweak("accent", v)}
          options={[
            { value: "oxblood", label: "Oxblood" },
            { value: "rust", label: "Desert rust" },
            { value: "oxford", label: "Oxford navy" },
            { value: "ochre", label: "Parchment ochre" },
            { value: "ink", label: "Monochrome ink" },
          ]}
        />
        <TweakSelect
          label="Type"
          value={tweaks.typePairing}
          onChange={(v) => setTweak("typePairing", v)}
          options={[
            { value: "classic", label: "Instrument + Inter" },
            { value: "literary", label: "Fraunces + Newsreader" },
            { value: "modern", label: "Newsreader + Geist" },
          ]}
        />
        <TweakRadio
          label="Logo"
          value={tweaks.logoVariant}
          onChange={(v) => setTweak("logoVariant", v)}
          options={[
            { value: "A", label: "Shield" },
            { value: "B", label: "Mono" },
            { value: "C", label: "§" },
          ]}
        />

        <TweakSection label="CTA" />
        <TweakSelect
          label="Button copy"
          value={tweaks.ctaCopy}
          onChange={(v) => setTweak("ctaCopy", v)}
          options={[
            { value: "Get demo access", label: "Get demo access" },
            { value: "Run the demo", label: "Run the demo" },
            { value: "Try it now", label: "Try it now" },
            { value: "Open demo →", label: "Open demo →" },
            { value: "Bring a matter", label: "Bring a matter" },
          ]}
        />
      </TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
