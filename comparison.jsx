/* global React, SectionHeader */

// ===== Comparison table =====
const ComparisonTable = ({ theme, accent, density }) => {
  const pad = density === "tight" ? "60px 0" : "100px 0";

  const cols = ["Deagle", "Harvey AI", "TR CoCounsel", "Lexis+ AI", "Relativity aiR"];
  const rows = [
    { label: "Cloud SaaS deployment", values: ["✓", "✓", "✓", "✓", "✓"] },
    { label: "Bring-your-own-cloud (K8s)", values: ["✓", "—", "—", "—", "Limited"] },
    { label: "Air-gapped on-premise", values: ["✓", "—", "—", "—", "—"] },
    { label: "Local LLMs (no third-party API)", values: ["✓", "—", "—", "—", "—"] },
    { label: "Targets firms <100 lawyers", values: ["✓", "—", "Partial", "Partial", "—"] },
    { label: "Published hallucination benchmark", values: ["2.1%", "Not pub.", "Not pub.", "17%", "Not pub."] },
    { label: "EDRM-native ingestion", values: ["✓", "Partial", "Partial", "Partial", "✓"] },
    { label: "Bates numbering built-in", values: ["✓", "—", "Partial", "—", "✓"] },
    { label: "Multi-agent orchestration", values: ["✓", "Partial", "—", "—", "—"] },
    { label: "Open eval methodology", values: ["✓", "—", "—", "—", "—"] },
  ];

  return (
    <section style={{ padding: pad, borderTop: `1px solid ${theme.border}` }}>
      <SectionHeader
        theme={theme} accent={accent}
        kicker="§ 05 · Versus the incumbents"
        title={<>BigLaw tools. <em style={{ color: accent }}>Built for BigLaw.</em></>}
        sub="The legal AI category was built around firms that can absorb $50K/seat licenses and have IT teams to negotiate enterprise cloud. Smaller firms got an afterthought. Deagle was built for everyone else."
      />
      <div style={{
        border: `1px solid ${theme.border}`,
        background: theme.surface,
        overflow: "auto",
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "'Inter Tight', system-ui, sans-serif",
          fontSize: 14,
        }}>
          <thead>
            <tr>
              <th style={{
                textAlign: "left",
                padding: "20px 24px",
                borderBottom: `1px solid ${theme.border}`,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: theme.muted,
                fontWeight: 400,
                background: theme.surfaceAlt,
              }}>
                Capability
              </th>
              {cols.map((c, i) => (
                <th key={c} style={{
                  textAlign: "center",
                  padding: "20px 16px",
                  borderBottom: `1px solid ${theme.border}`,
                  borderLeft: `1px solid ${theme.border}`,
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 18,
                  fontWeight: 400,
                  color: i === 0 ? accent : theme.fg,
                  letterSpacing: "-0.01em",
                  background: i === 0 ? theme.surfaceAlt : theme.surfaceAlt,
                }}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={r.label}>
                <td style={{
                  padding: "16px 24px",
                  borderBottom: idx < rows.length - 1 ? `1px solid ${theme.border}` : "none",
                  color: theme.fg,
                  fontWeight: 500,
                }}>
                  {r.label}
                </td>
                {r.values.map((v, i) => {
                  const isCheck = v === "✓";
                  const isDash = v === "—";
                  const isPartial = v === "Partial" || v === "Limited" || v === "Not pub.";
                  return (
                    <td key={i} style={{
                      padding: "16px",
                      textAlign: "center",
                      borderLeft: `1px solid ${theme.border}`,
                      borderBottom: idx < rows.length - 1 ? `1px solid ${theme.border}` : "none",
                      fontFamily: isPartial || (!isCheck && !isDash) ? "'JetBrains Mono', monospace" : "inherit",
                      fontSize: isCheck ? 16 : isPartial || (!isCheck && !isDash) ? 12 : 16,
                      color: i === 0
                        ? accent
                        : isCheck
                          ? theme.success
                          : isDash
                            ? theme.muted
                            : theme.fg2,
                      fontWeight: i === 0 ? 600 : 400,
                      background: i === 0 ? theme.surfaceAlt : "transparent",
                    }}>
                      {v}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{
        marginTop: 16,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        color: theme.muted,
        letterSpacing: "0.04em",
      }}>
        Comparison reflects publicly documented capabilities as of Q1 2026. Last verified deaglelabs.com/comparison.
      </div>
    </section>
  );
};

window.ComparisonTable = ComparisonTable;
