/* global React, SectionHeader */
const { useState, useEffect, useRef } = React;

// ===== Multi-agent workflow demo (animated) =====
const MultiAgentDemo = ({ theme, accent, density }) => {
  const pad = density === "tight" ? "60px 0" : "100px 0";
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);

  const events = [
    { agent: "ORCHESTRATOR", msg: "New matter ingested · 2,847 docs · 14.2 GB", t: 0.0 },
    { agent: "INTAKE", msg: "OCR + EDRM tagging complete. 312 emails, 1,891 PDFs, 644 spreadsheets.", t: 0.4 },
    { agent: "PRIVILEGE", msg: "94 docs flagged privileged · 12 work-product · auto-redacted ✓", t: 1.1 },
    { agent: "RESEARCH", msg: "Westlaw query: \"breach of fiduciary duty + Delaware\" · 47 cases pulled", t: 1.8 },
    { agent: "CITECHECK", msg: "Verifying 47 citations against shepardized authority...", t: 2.4 },
    { agent: "CITECHECK", msg: "47/47 valid · 0 hallucinations · 3 negative-treatment warnings raised", t: 3.0, ok: true },
    { agent: "TIMELINE", msg: "Reconstructed event timeline: Jan 14 → Mar 22, 2024 · 38 entries", t: 3.6 },
    { agent: "DRAFTING", msg: "Memorandum draft generated · 4,200 words · all citations bracketed", t: 4.4 },
    { agent: "ORCHESTRATOR", msg: "Matter ready for partner review · ETA: 8m 14s", t: 5.2, ok: true },
  ];

  useEffect(() => {
    if (!playing) return;
    if (step >= events.length) {
      const t = setTimeout(() => setStep(0), 1800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 400 : 700);
    return () => clearTimeout(t);
  }, [step, playing, events.length]);

  const agents = [
    { id: "ORCHESTRATOR", x: 50, y: 12, role: "Routes & coordinates" },
    { id: "INTAKE", x: 18, y: 38, role: "Doc ingestion + EDRM" },
    { id: "PRIVILEGE", x: 82, y: 38, role: "Privilege detection" },
    { id: "RESEARCH", x: 18, y: 68, role: "Westlaw / Lexis / PACER" },
    { id: "CITECHECK", x: 50, y: 84, role: "Citation verification" },
    { id: "TIMELINE", x: 82, y: 68, role: "Timeline reconstruction" },
    { id: "DRAFTING", x: 50, y: 50, role: "Memo & motion drafts" },
  ];

  const activeAgent = step > 0 && step <= events.length ? events[step - 1].agent : null;

  return (
    <section style={{ padding: pad, borderTop: `1px solid ${theme.border}` }}>
      <SectionHeader
        theme={theme} accent={accent}
        kicker="§ 03 · Multi-agent case work"
        title={<>Seven specialist agents. <em style={{ color: accent }}>One</em> orchestrator. Your matter, end-to-end.</>}
        sub="Each agent is auditable, replaceable, and runs locally on your tier. No black-box monolith."
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 0.9fr",
        gap: 0,
        border: `1px solid ${theme.border}`,
        background: theme.surface,
        height: 520,
      }}>
        {/* Left: Agent graph */}
        <div style={{ position: "relative", borderRight: `1px solid ${theme.border}`, padding: 24, height: "100%" }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: theme.muted,
            marginBottom: 12,
          }}>
            Agent topology · Matter #24-cv-08841
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{
            position: "absolute", inset: 24, width: "calc(100% - 48px)", height: "calc(100% - 48px)",
            pointerEvents: "none",
          }}>
            {/* Edges from orchestrator */}
            {agents.slice(1).map((a) => {
              const o = agents[0];
              const isActive = activeAgent === a.id || activeAgent === "ORCHESTRATOR";
              return (
                <line key={a.id}
                  x1={o.x} y1={o.y} x2={a.x} y2={a.y}
                  stroke={isActive ? accent : theme.border}
                  strokeWidth={isActive ? 0.4 : 0.2}
                  strokeDasharray={isActive ? "0" : "1,1"}
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>
          {agents.map((a) => {
            const isActive = activeAgent === a.id;
            return (
              <div key={a.id} style={{
                position: "absolute",
                left: `calc(${a.x}% )`,
                top: `calc(${a.y}% + 24px)`,
                transform: "translate(-50%, -50%)",
                background: isActive ? accent : theme.bg,
                color: isActive ? theme.btnFg : theme.fg,
                border: `1px solid ${isActive ? accent : theme.border}`,
                padding: "6px 10px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9.5,
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
                transition: "all 0.3s",
                boxShadow: isActive ? `0 0 0 4px ${accent}22` : "none",
              }}>
                {a.id}
                <div style={{ fontSize: 8, color: isActive ? theme.btnFg : theme.muted, marginTop: 2, opacity: 0.8, letterSpacing: "0.02em" }}>
                  {a.role}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Event log */}
        <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", height: "100%", minHeight: 0 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: theme.muted,
            marginBottom: 14,
            display: "flex",
            justifyContent: "space-between",
          }}>
            <span>Event log · live</span>
            <button onClick={() => { setPlaying(!playing); if (!playing && step >= events.length) setStep(0); }}
              style={{
                background: "none", border: "none", color: theme.fg, cursor: "pointer",
                fontFamily: "inherit", fontSize: "inherit", letterSpacing: "inherit", textTransform: "uppercase",
              }}>
              {playing ? "[ pause ]" : "[ play ]"}
            </button>
          </div>
          <div style={{
            flex: 1,
            minHeight: 0,
            background: theme.bg,
            border: `1px solid ${theme.border}`,
            padding: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11.5,
            lineHeight: 1.55,
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column-reverse",
            gap: 8,
          }}>
            {step < events.length && (
              <div style={{ color: theme.muted }}>
                <span style={{ animation: "blink 1s infinite" }}>▊</span>
              </div>
            )}
            {events.slice(0, step).slice().reverse().map((e, idx) => {
              const i = step - 1 - idx;
              return (
                <div key={i} style={{
                  opacity: 1 - Math.max(0, (step - i - 1) * 0.08),
                  animation: i === step - 1 ? "fadein 0.3s ease-out" : "none",
                  flexShrink: 0,
                }}>
                  <span style={{ color: theme.muted }}>[{String(i + 1).padStart(2, "0")}] </span>
                  <span style={{ color: e.ok ? theme.success : accent, fontWeight: 600 }}>{e.agent}</span>
                  <span style={{ color: theme.muted }}>: </span>
                  <span style={{ color: theme.fg }}>{e.msg}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

window.MultiAgentDemo = MultiAgentDemo;
