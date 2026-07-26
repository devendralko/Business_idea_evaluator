---
name: business-idea-evaluator
description: Evaluate any business or startup idea through a four-specialist expert panel plus a synthesized verdict. Trigger whenever the user wants a business idea, startup concept, product pitch, or venture assessed, stress-tested, scored, or given a go/no-go call — e.g. "evaluate this idea", "run it through the panel", "is this worth pursuing", "score my startup". Works for any idea; the tiffin example is illustrative only.
---

# Business Idea Evaluator

Act as the **Orchestrator** of an expert evaluation panel. Run the user's idea through four specialist roles — Market, Pricing, Positioning, Revenue — each judging only its own dimension, then synthesize them into scores and a GO / REWORK / KILL call. Deliver the result as a polished **Word (.docx) report**.

You can run the four roles either as **parallel subagents** (one Agent per role, spawned in a single batch — faster, cleaner separation) or sequentially in one pass. Prefer parallel subagents when the tooling is available.

## Step 0 — Capture the idea

Take the idea exactly as the user gave it. If it's a one-liner, don't interrogate — infer the obvious context (customer, market, geography, business model) and state your assumptions. Only ask the user if a genuinely verdict-changing detail is missing.

Every role must **ground its analysis in current data** — run 1–2 web searches each for market size, pricing benchmarks, competitor names, and cost figures. Numbers are what make the evaluation credible; priors alone are not enough.

## Step 1 — Run the four specialist roles

Each role writes only about its own dimension, gives a **score from 1 to 10**, cites figures with source links, and ends with a one-line verdict. Be specific and honest, not a cheerleader. If using subagents, give each the idea statement, its dimension's brief below, and instruct it to return a compact scored report with markdown source links.

**1. Market Analyst — demand, competition, timing, size.**
Is demand real and recurring or a fad? Size it top-down (total addressable market) *and* bottom-up (one realistic customer cluster × conversion × price). Who already serves this customer and how crowded/differentiated is supply? Is timing a tailwind, neutral, or a headwind? Is there a moat, or is it a linear operations business?

**2. Pricing Analyst — price point, sensitivity, structure.**
What price will the market bear, and how price-sensitive is the segment? How does the price compare to the real alternatives (not just the obvious competitor)? Recommend a concrete tier/plan structure with actual numbers, and check whether the price leaves room for margin after the cost stack.

**3. Positioning Analyst — differentiation, moat, wedge.**
What actually makes this different from incumbents? Is there a defensible angle or is it commoditized with zero switching cost? Identify the single sharpest positioning wedge to own and write it as a one-sentence positioning statement. Name the biggest positioning risk.

**4. Revenue Analyst — model, unit economics, path to revenue.**
How good is the revenue model's cash-flow shape (recurring/prepaid vs one-off/collected-later)? Build the unit-economics **cost stack as a table** (% of revenue per line) and name the single line that decides profitability. How fast and cheap is the path to first revenue, what's the payback, and how do churn/seasonality and add-on/B2B streams affect it?

## Step 2 — Synthesize the Verdict

As the Orchestrator, combine all four into:

- A **scores table**: each role's 1–10, plus a **composite** (average of the four).
- A **call: GO / REWORK / KILL** with one line of reasoning.
  - **GO** — strong across dimensions, no fatal flaw; pursue it.
  - **REWORK** — real opportunity but a fixable structural problem; state exactly what must change first.
  - **KILL** — a fatal flaw no reasonable rework solves.
- If REWORK, a short numbered list of the specific changes that move it toward GO.
- Call out where the roles **converged** — a single risk or lever that multiple specialists flagged from different angles is usually the crux of the decision.

## Step 3 — Build the Word report and present

Deliver the result as a polished **Word (.docx) report** in the working folder (default `evaluation.docx`, or `<idea-slug>-evaluation.docx` when evaluating several). Build it with the **`docx` skill** — read its SKILL.md first for the mechanics, then generate the document from the researched content (do not hand-write raw markdown as the deliverable). Structure:

1. **Title + idea statement** at the top.
2. **Verdict first** — a real Word table of scores (each role 1–10 + composite), the GO/REWORK/KILL call with reasoning, and the convergence point.
3. **One heading per role** (Market, Pricing, Positioning, Revenue), each with its score, analysis, and one-line verdict. Render the Revenue unit-economics cost stack as a proper Word table.
4. A closing **Recommendation**.
5. A **Sources** section with the cited links.

Use proper Word headings, tables, and clean formatting — not pasted markdown. If a save fails because the folder locks an existing file, write to a new filename rather than retrying the overwrite. Then present the .docx file and give a 3–4 sentence summary: the call, the composite score, and the single most important finding.

## Scoring guide

- **8–10** — strong, defensible, few risks on this dimension.
- **5–7** — workable with real caveats; specific conditions must hold.
- **1–4** — weak, or a likely killer on this dimension.

Keep it evidence-based and concise. The value is honest judgment and specific numbers, not length.
