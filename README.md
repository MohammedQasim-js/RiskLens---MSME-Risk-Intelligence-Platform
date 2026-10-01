# 🛡️ RiskLens — MSME Risk Intelligence Platform

> **Institutional-grade financial risk intelligence, built for India's 63 million Micro, Small & Medium Enterprises.**

RiskLens gives MSME owners a real-time cockpit to understand, monitor, and proactively manage their financial risk — the same analytical depth previously available only to large corporates and their lenders, now accessible to every small business.

---

## 🎯 What Problem Does It Solve?

Indian MSMEs face a silent crisis: they are often the last to know when their business is heading toward financial stress. Banks and NBFCs use sophisticated risk models to make lending decisions, but the business owner themselves has no visibility into those scores — until a loan is rejected.

RiskLens flips this dynamic:

- ✅ **You see your own risk score** — before any lender does
- ✅ **You understand *why*** — not just a number, but ranked drivers with explanations
- ✅ **You can simulate "what if"** — before a bad decision becomes a bad outcome
- ✅ **You track execution** — planned vs. actual, with live ledger data

---

## ✨ Features

### 1. 📊 Risk Cockpit (Overview Dashboard)
The home base. A real-time view of your business's financial health at a glance.

| Metric | What It Tells You |
|---|---|
| **Probability of Default (PD)** | 12-month predictive default likelihood, benchmarked against your industry sector |
| **Composite Health Index** | Combined solvency + operational score out of 100 |
| **Evidence Reliability** | Confidence score based on ledger coverage (GSTN + banking streams) |
| **Burn Runway** | How many days your current cash reserve covers essential outflows |

- **Live Cash Flow Chart** — visualise inflows vs. outflows over time
- **90-Day Cash Outlook** — Monte Carlo simulated trajectory with 30 / 60 / 90 day certainty bands
- **XGBoost Attribution Engine** — ranked table of what is *actually* driving your risk score
- **Real-time data sync** via RBI Account Aggregator (AA) Protocol

---

### 2. 🧪 Stress Lab
*"What happens to my business if conditions change?"*

An interactive sensitivity sandbox powered by a **Counterfactual Engine v3.8**. Adjust operational and market levers and see how your risk score responds — before the shock actually hits.

**Stress Scenario Presets:**
- Severe Supply Chain & Payment Shock
- Mild Delayed Receivables (+10 days)
- Raw Material Price Spike (e.g. Kraft Paper +25%)
- Tier-1 Client Churn & Order Freeze
- RBI Base Rate +150 bps Tightening

**What you can tune:**
- Revenue shortfall %
- Receivable delay (days)
- Raw material cost increase
- Client payment freeze duration
- Interest rate sensitivity

Each scenario outputs updated PD, health score, cash runway, and a downloadable **Stress Dossier** for lender or board-level discussions.

---

### 3. 💵 Cash Flow Intelligence
*"See how money is moving through your business — not just how much you have."*

Deep liquidity diagnostics powered by real transaction ledger data:

- **Inflow / Outflow Waterfall** — monthly breakdown with category tagging
- **Customer Concentration Analysis** — HHI index showing income diversity risk
- **Recurring Obligation Ratio** — what fraction of inflows are committed to fixed costs
- **Debt Service Coverage Ratio (DSCR)** — real-time coverage of debt obligations
- **Cash Volatility Index** — week-over-week net cash standard deviation

Data coverage: 96% transaction ledger, GSTN + 3 banking streams verified.

---

### 4. 🔮 90-Day Cash Forecast
*"Where will my cash position be in 30, 60, or 90 days?"*

A **Predictive Horizon Engine** (Monte Carlo Inflow Simulation v4.2) that factors:
- Your historical payment cycle patterns
- Committed GST outflows
- Order pipeline visibility
- Seasonal variance from prior periods

Each horizon returns a point estimate, variance band (±), and a certainty confidence level. Horizon controls let you switch between 30 / 60 / 90 / 180 / 365 day views. Export the forecast as a PDF for working capital loan applications.

---

### 5. 📐 Plan vs. Actual
*"Is my business executing against the plan I set?"*

Reconciliation Telemetry — compare your baseline operating plan against what actually happened, backed by verifiable ledger proofs:

- **Revenue Performance Chart** — plan line vs. actual GST-verified revenue
- **OPEX Adherence** — planned monthly expenses vs. realised spend
- **Budget Utilisation** — working capital budget consumed vs. available
- **Receivables Aging Table** — overdue buckets (30 / 60 / 90+ days), with per-client breakdown
- **Period Selector** — month, quarter, or full operating cycle views

Real-time sync status shown (GST + AA Synced with timestamp).

---

### 6. 🔬 AI Explainability
*"Why is my risk score what it is?"*

A SHAP-style **Bidirectional Attribution Waterfall** — every feature that contributes to your Probability of Default is ranked and visualised:

- **Risk-Increasing drivers** (e.g. high DSO, low DSCR, concentrated revenue)
- **Risk-Mitigating buffers** (e.g. strong cash buffer, high plan attainment)
- Marginal PD impact shown per driver (e.g. *+3.1% PD — Receivable Days Latency*)
- Clickable drivers reveal detailed sub-explanations and suggested remediation actions
- Benchmarked against the MSME industry baseline PD (6.2%)

---

### 7. ⚗️ Model Lab & Fairness Audit
*Designed for lenders and platform administrators.*

A **Champion / Challenger Model Registry** for risk model governance:

- Compare multiple model versions (Baseline, Champion, Challenger) on a decile performance chart
- Promote any model to **Active Production** with one click
- Download a full **Audit Dossier** (model card, calibration data, fairness metrics)
- **Bias Disparity Audit** — automated check for demographic or sectoral bias in predictions
- Calibration Ledger — historical prediction accuracy tracking

---

### 8. 📄 Report Generator
Generate a professional **Underwriting Dossier** — a structured PDF summarising:
- Business entity details and MSME classification
- Risk score with trend history
- Cash flow summary
- Forecast outlook
- Stress test results

Ready to share with banks, NBFCs, or supply chain partners.

---

### 9. 🚀 Guided Onboarding
New users are walked through a step-by-step onboarding flow to register their business entity and connect financial data sources. No finance jargon — plain-language guidance throughout.

---

### 10. ⚙️ Account Settings
- View and update your business profile (legal name, industry, MSME classification, city, state)
- Update operating plan benchmarks (target revenue, OPEX, working capital budget, DSO target)
- Settings can be created from scratch if no business exists — no blocker for new users
- Account security: session management, password change, 2FA
- All changes trigger automatic risk score recalibration

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Server Components) |
| **Language** | TypeScript |
| **Database & Auth** | Supabase (PostgreSQL + Row Level Security) |
| **Styling** | Vanilla CSS with custom design tokens |
| **Charts** | Recharts |
| **Icons** | Lucide React + Google Material Symbols |
| **Risk Engine** | XGBoost feature attribution (server-side) |
| **Data Protocol** | RBI Account Aggregator (AA) API |

---

## 🚀 Getting Started (Demo)

### Prerequisites
- Node.js 18+
- A Supabase project (free tier works)
- `.env.local` with your Supabase credentials

### 1. Clone & Install
```bash
git clone <repo-url>
cd risklens
npm install
```

### 2. Configure Environment
Create a `.env.local` file at the project root:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run Migrations
Apply the database schema via the Supabase dashboard or CLI:
```bash
npx supabase db push
```

### 4. Start the Dev Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the platform.

---

## 🗺️ Navigation Map

| Route | Page | Description |
|---|---|---|
| `/` | Landing | Marketing homepage |
| `/signup` | Sign Up | Create an account |
| `/login` | Log In | Authenticate |
| `/onboarding` | Onboarding | Register your business |
| `/overview` | Risk Cockpit | Main dashboard |
| `/cash-flow` | Cash Flow | Liquidity diagnostics |
| `/forecast` | Forecast | 90-day cash outlook |
| `/plan-vs-actual` | Plan vs Actual | Execution reconciliation |
| `/explainability` | AI Explainability | Risk driver breakdown |
| `/stress-lab` | Stress Lab | Scenario simulation |
| `/model-lab` | Model Lab | ML governance (admin) |
| `/report` | Report | Underwriting dossier |
| `/settings` | Settings | Account & business config |

---

## 🔐 Data & Privacy

- All financial data is stored in a private Supabase instance with Row Level Security — users can only access their own business data
- Account Aggregator (AA) integration uses the RBI-regulated consent framework — no raw banking credentials are stored
- All risk computations happen server-side; raw transaction data never reaches the client

---

## 📬 Demo Credentials

For the live demo, use the onboarding flow to create a fresh account. The platform will generate a synthetic but realistic data profile for your business entity automatically.

---

*Built with ❤️ for India's MSME ecosystem.*
