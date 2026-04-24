/* ============================================================
   DEAGLE — Interactive demo widget
   Drives the "Let me Deagle that" panel.
   ============================================================ */

(function () {
  const SCRIPTS = {
    summarize: {
      verb: "Summarize",
      trace: [
        ["Reader",      "Loaded Doc 1047 · 3 pages · OCR clean"],
        ["Privilege",   "Scoped to matter M-2024-118 · privilege intact"],
        ["Research",    "Indexed Item 1.01 · §IV-B Bus. Law Inst. memo"],
        ["Draft",       "Drafted 4-sentence summary in house style"],
        ["Verify",      "CoVe · 2 citations re-fetched · pin cites match"],
      ],
      answer: `Counsel for Allied (J. Heppner) takes the position that the Item 1.01 Form 8-K disclosure trigger attached on <strong>countersignature of the LOI (08/29/2025)</strong>, not on the board resolution date (09/03/2025).<sup data-cite="1">1</sup> Heppner cites the <strong>Business Law Institute Memo §IV-B</strong> as authority and frames the analysis around the 09/15/2025 disclosure deadline.<sup data-cite="2">2</sup> The email is privileged work product under F.R.C.P. 26(b)(5) and should be withheld.<sup data-cite="3">3</sup>`,
      cites: [
        ["1", "HOLL-0001047 · ¶010 · countersignature analysis", "VERIFIED"],
        ["2", "Bus. Law Inst. Memo §IV-B (Sept. 2025)", "FETCHED"],
        ["3", "F.R.C.P. 26(b)(5)(A)(ii)", "PIN-CITE OK"],
      ],
    },
    privilege: {
      verb: "Build privilege log",
      trace: [
        ["Reader",      "Re-read Doc 1047 paragraph-level"],
        ["Privilege",   "Classified ¶007-013 · attorney work product"],
        ["Privilege",   "Author: J. Heppner · Recipient: in-house counsel"],
        ["Draft",       "Generated 26(b)(5)(A)(ii) entry"],
        ["Verify",      "Schema validated · format defensible"],
      ],
      answer: `<strong>Privilege Log Entry · HOLL-0001047</strong><br/>
        Document type: Email · 09/14/2025 11:42 EDT<br/>
        Author: <span class="mono">jhepp@allied-counsel.com</span> · Recipient: <span class="mono">in-house@allied.com</span><br/>
        Privilege asserted: <strong>Attorney work product</strong> (F.R.C.P. 26(b)(5)(A)(ii))<sup data-cite="1">1</sup><br/>
        Subject (non-privileged): "RE: Form 8-K disclosure timing — Q3 2025"<br/>
        Basis: Mental impressions and legal conclusions of counsel regarding disclosure timing analysis prepared in anticipation of regulatory action.<sup data-cite="2">2</sup>`,
      cites: [
        ["1", "F.R.C.P. 26(b)(5)(A)(ii) · pin cite verified", "VERIFIED"],
        ["2", "Hickman v. Taylor, 329 U.S. 495 (1947)", "FETCHED"],
      ],
    },
    cite: {
      verb: "Verify citations",
      trace: [
        ["Research",    "Extracted 2 citations from Doc 1047"],
        ["Verify",      "Re-fetching Bus. Law Inst. Memo §IV-B…"],
        ["Verify",      "Pin cite resolves · authority is current"],
        ["Verify",      "Item 1.01 trigger language confirmed · 17 CFR 240.13"],
        ["Verify",      "All claims grounded · no refusals"],
      ],
      answer: `<strong>2 of 2 citations verified.</strong><br/>
        <span class="mono">Bus. Law Inst. Memo §IV-B</span> — fetched, parsed, pin cite resolves to disclosure-trigger analysis.<sup data-cite="1">1</sup> The memo's "countersignature" reading is supported but not unanimous.<br/><br/>
        <span class="mono">Item 1.01 trigger</span> — verified against 17 CFR 240.13a-11. The regulatory text supports the countersignature reading <em>only</em> where the LOI is materially binding; preliminary LOIs typically do not trigger.<sup data-cite="2">2</sup> <strong>Recommend pushback.</strong>`,
      cites: [
        ["1", "Bus. Law Inst. Memo §IV-B (Sept. 2025) · §IV-B(2)", "VERIFIED"],
        ["2", "17 CFR 240.13a-11 · Form 8-K Item 1.01", "PIN-CITE OK"],
      ],
    },
    timeline: {
      verb: "Reconstruct timeline",
      trace: [
        ["Reader",      "Scanned production · 1,840 docs"],
        ["Reader",      "Threaded 18 emails on disclosure-timing topic"],
        ["Research",    "Built date graph · Neo4j · 47 nodes"],
        ["Draft",       "Reconstructed sequence · 4 events"],
        ["Verify",      "Dates cross-checked · no contradictions"],
      ],
      answer: `<strong>Disclosure-timing timeline · Holloway v. Allied</strong><br/>
        <span class="mono text-blue">08/29/2025</span> — LOI countersigned (HOLL-0000891)<sup data-cite="1">1</sup><br/>
        <span class="mono text-blue">09/03/2025</span> — Allied board resolution (HOLL-0000947)<sup data-cite="2">2</sup><br/>
        <span class="mono text-blue">09/14/2025</span> — Heppner privileged memo asserts countersignature trigger (HOLL-0001047)<sup data-cite="3">3</sup><br/>
        <span class="mono text-amber">09/15/2025</span> — 8-K filing deadline (missed by 17 days)<br/>
        <span class="mono text-blue">10/02/2025</span> — Late 8-K filed (HOLL-0001329)<sup data-cite="4">4</sup>`,
      cites: [
        ["1", "HOLL-0000891 · LOI countersignature page", "VERIFIED"],
        ["2", "HOLL-0000947 · board resolution minutes", "VERIFIED"],
        ["3", "HOLL-0001047 · Heppner email (privileged)", "VERIFIED"],
        ["4", "HOLL-0001329 · Form 8-K filed 10/02/2025", "VERIFIED"],
      ],
    },
    discover: {
      verb: "Find responsive docs",
      trace: [
        ["Reader",      "Indexed 1,840 documents · BGE-M3 + SPLADE"],
        ["Research",    "Hybrid search · 'disclosure timing' · 'Item 1.01'"],
        ["Research",    "Reranker · top 12 candidates"],
        ["Privilege",   "3 of 12 hit privilege scope · withheld"],
        ["Verify",      "9 responsive · log generated for 3"],
      ],
      answer: `<strong>9 responsive documents · 3 privileged (withheld)</strong><br/>
        <span class="mono text-blue">HOLL-0000891-893</span> — LOI execution chain<br/>
        <span class="mono text-blue">HOLL-0000947-952</span> — Board resolution + counsel memo<sup data-cite="1">1</sup><br/>
        <span class="mono text-blue">HOLL-0001047-049</span> — <span class="text-amber">Privileged · withheld</span><sup data-cite="2">2</sup><br/>
        <span class="mono text-blue">HOLL-0001329-334</span> — Late 8-K filing draft<br/>
        <span class="mono text-blue">HOLL-0001501-512</span> — Outside counsel revisions<sup data-cite="3">3</sup>`,
      cites: [
        ["1", "Reranker score 0.94 · matter M-2024-118", "VERIFIED"],
        ["2", "Privilege agent · 26(b)(5) · log entry generated", "PIN-CITE OK"],
        ["3", "Hybrid score 0.87 · semantic + sparse", "VERIFIED"],
      ],
    },
  };

  const promptsEl = document.getElementById('demo-prompts');
  const outputEl  = document.getElementById('demo-output-body');
  if (!promptsEl || !outputEl) return;

  let runToken = 0;

  function render(key) {
    const data = SCRIPTS[key];
    if (!data) return;
    const myToken = ++runToken;

    outputEl.innerHTML = `
      <div class="agent-trace" id="trace">
        ${data.trace.map(([ag, msg]) => `
          <div class="step">
            <span class="ck"></span>
            <span class="ag">${ag}</span>
            <span class="msg">${msg}</span>
          </div>
        `).join('')}
      </div>
      <div class="answer-card" id="answer" style="opacity:0; transform: translateY(8px); transition: opacity 0.4s, transform 0.4s;">
        <div class="h">Answer · CoVe-grounded</div>
        <div class="body">${data.answer}</div>
      </div>
      <div class="cite-list" id="cites" style="opacity:0; transition: opacity 0.4s;">
        ${data.cites.map(([n,t,v]) => `
          <div class="c"><span class="n">[${n}]</span><span class="t">${t}</span><span class="v">${v}</span></div>
        `).join('')}
      </div>
    `;

    const steps = outputEl.querySelectorAll('.step');
    let i = 0;

    function next() {
      if (myToken !== runToken) return;
      if (i > 0) {
        steps[i-1].classList.remove('run');
        steps[i-1].classList.add('done', 'show');
      }
      if (i >= steps.length) {
        const ans = document.getElementById('answer');
        const cit = document.getElementById('cites');
        if (ans) { ans.style.opacity = '1'; ans.style.transform = 'none'; }
        if (cit) { setTimeout(() => { if (myToken === runToken) cit.style.opacity = '1'; }, 200); }
        return;
      }
      steps[i].classList.add('show', 'run');
      i++;
      setTimeout(next, 480);
    }
    setTimeout(next, 250);
  }

  promptsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.demo-prompt');
    if (!btn) return;
    promptsEl.querySelectorAll('.demo-prompt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.prompt);
  });

  // Trigger initial render once the demo widget scrolls into view.
  const widget = document.getElementById('demo-widget');
  if (widget && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          render('summarize');
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(widget);
  } else {
    render('summarize');
  }
})();
