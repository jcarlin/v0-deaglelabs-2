/* global React */
const { useState } = React;

// Email capture form (used by all hero variants & repeat CTA)
const CTAForm = ({ ctaCopy = "Get demo access", theme, accent, compact = false }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");
  const [showOptional, setShowOptional] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        border: `1px solid ${theme.border}`,
        background: theme.surface,
        padding: compact ? "18px 22px" : "24px 28px",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 13,
        lineHeight: 1.6,
        maxWidth: compact ? 480 : 540,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: accent, marginBottom: 10 }}>
          <span style={{ width: 8, height: 8, background: accent, borderRadius: "50%", animation: "pulse 1.4s infinite" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Access granted</span>
        </div>
        <div style={{ color: theme.fg, fontSize: 14 }}>
          Redirecting to <span style={{ color: accent }}>demo.deaglelabs.com</span> · Check {email} for credentials
        </div>
      </div>
    );
  }

  const inputStyle = {
    border: `1px solid ${theme.border}`,
    background: theme.bg,
    color: theme.fg,
    padding: "10px 12px",
    fontSize: 13,
    fontFamily: "'JetBrains Mono', monospace",
    outline: "none",
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "100%", maxWidth: compact ? 480 : 540 }}>
      <div style={{
        display: "flex",
        gap: 0,
        border: `1px solid ${theme.border}`,
        background: theme.surface,
      }}>
        <input
          type="email"
          required
          placeholder="you@firm.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            color: theme.fg,
            padding: compact ? "12px 16px" : "16px 20px",
            fontSize: compact ? 14 : 15,
            fontFamily: "'Inter Tight', system-ui, sans-serif",
          }}
        />
        <button
          type="submit"
          style={{
            border: "none",
            background: accent,
            color: theme.btnFg,
            padding: compact ? "0 22px" : "0 28px",
            fontSize: compact ? 12 : 13,
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap",
            fontWeight: 500,
          }}
        >
          {ctaCopy} <span style={{ fontSize: 14 }}>→</span>
        </button>
      </div>

      <div style={{
        marginTop: 8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.04em",
        color: theme.muted,
        flexWrap: "wrap",
        gap: 8,
      }}>
        <span>Instant access · No sales call · No card</span>
        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          style={{
            background: "none",
            border: "none",
            color: theme.muted,
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: "inherit",
            textDecoration: "underline",
            textUnderlineOffset: 3,
            padding: 0,
          }}
        >
          {showOptional ? "− hide details" : "+ role / firm / note"}
        </button>
      </div>

      {showOptional && (
        <div style={{
          marginTop: 14,
          padding: 16,
          border: `1px solid ${theme.border}`,
          background: theme.surfaceAlt,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
        }}>
          <input placeholder="Role (e.g. Partner)" value={role} onChange={(e) => setRole(e.target.value)} style={inputStyle} />
          <input placeholder="Firm name" value={company} onChange={(e) => setCompany(e.target.value)} style={inputStyle} />
          <textarea
            placeholder="Anything we should know? (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            style={{ ...inputStyle, gridColumn: "span 2", resize: "vertical", fontFamily: "'Inter Tight', sans-serif", fontSize: 13 }}
          />
        </div>
      )}
    </form>
  );
};

window.CTAForm = CTAForm;
