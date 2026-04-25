/* global React, CTAForm */
// HERO C: Benchmark-led — leads with the Stanford HAI hallucination data

const HeroBenchmark = ({ theme, accent, ctaCopy, density }) => {
  const pad = density === "tight" ? "72px 0 56px" : "100px 0 88px";

  // Bar chart data
  const tools = [
    { name: "Lexis+ AI", rate: 17, ours: false },
    { name: "Westlaw AI-Assisted Research", rate: 33, ours: false },
    { name: "Thomson Reuters Ask Practical Law", rate: 17, ours: false },
    { name: "GPT-4 baseline (no RAG)", rate: 43, ours: false },
    { name: "Deagle (with citation gate)", rate: 2.1, ours: true },
  ];

  return (
    <section style={{ padding: pad, position: "relative" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "0.95fr 1.05fr",
        gap: 72,
        alignItems: "center",
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: accent,
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <span style={{ width: 8, height: 8, background: accent, display: "inline-block" }} />
            Stanford HAI · Jan 2024 benchmark
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', 'Times New Roman', serif",
            fontSize: "clamp(54px, 7vw, 104px)",
            lineHeight: 0.92,
            letterSpacing: "-0.025em",
            margin: "0 0 32px",
            fontWeight: 400,
            color: theme.fg,
            textWrap: "balance",
          }}>
            Your "hallucination-free" legal AI<br />
            <em style={{ color: accent, fontStyle: "italic" }}>hallucinates</em> 1 in 6 queries.
          </h1>
          <p style={{
            fontSize: 18,
            lineHeight: 1.55,
            maxWidth: 520,
            color: theme.fg2,
            margin: "0 0 36px",
            letterSpacing: "-0.005em",
          }}>
            Independent Stanford research found leading legal AI tools fabricate
            citations on 17–33% of queries — despite vendor claims of near-zero
            error rates. Deagle gates every citation through deterministic
            verification, runs privilege-compliant on your infrastructure, and
            publishes its eval set.
          </p>
          <CTAForm ctaCopy={ctaCopy} theme={theme} accent={accent} />
        </div>

        <BenchmarkChart tools={tools} theme={theme} accent={accent} />
      </div>
    </section>
  );
};

const BenchmarkChart = ({ tools, theme, accent }) => {
  const max = 50;
  return (
    <div style={{
      border: `1px solid ${theme.border}`,
      background: theme.surface,
      padding: "24px 28px 28px",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        borderBottom: `1px solid ${theme.border}`,
        paddingBottom: 14,
        marginBottom: 24,
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: theme.muted,
            marginBottom: 4,
          }}>
            Fig. 01 · Hallucination rate by tool
          </div>
          <div style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 22,
            color: theme.fg,
            letterSpacing: "-0.01em",
          }}>
            Cited fabrications, % of queries
          </div>
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: theme.muted,
          letterSpacing: "0.05em",
        }}>
          n = 202 queries
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {tools.map((t) => {
          const w = (t.rate / max) * 100;
          return (
            <div key={t.name}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 6,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
              }}>
                <span style={{
                  color: t.ours ? accent : theme.fg,
                  fontWeight: t.ours ? 600 : 400,
                }}>
                  {t.name}
                </span>
                <span style={{
                  color: t.ours ? accent : theme.fg,
                  fontVariantNumeric: "tabular-nums",
                  fontWeight: t.ours ? 600 : 400,
                }}>
                  {t.rate.toFixed(1)}%
                </span>
              </div>
              <div style={{
                height: 14,
                background: theme.bg,
                border: `1px solid ${theme.border}`,
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  height: "100%",
                  width: `${w}%`,
                  background: t.ours
                    ? accent
                    : `repeating-linear-gradient(45deg, ${theme.fg}, ${theme.fg} 2px, transparent 2px, transparent 5px)`,
                  transition: "width 0.6s ease-out",
                }} />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: 24,
        paddingTop: 16,
        borderTop: `1px solid ${theme.border}`,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        color: theme.muted,
        lineHeight: 1.6,
        letterSpacing: "0.02em",
      }}>
        Source: Magesh et al., "Hallucination-Free? Assessing the Reliability of
        Leading AI Legal Research Tools," Stanford RegLab & HAI, 2024.
        Deagle figures from internal eval, methodology published at
        deaglelabs.com/eval.
      </div>
    </div>
  );
};

window.HeroBenchmark = HeroBenchmark;
