import React from "react";
import { Link } from "react-router-dom";
import "../app.css";
import DemoButton from "../components/DemoButton";

import revenueFunnel from "../assets/images/homepageRevenueFunnel.webp";


/* ============================================================
   HOME PAGE
============================================================ */

export default function Home() {
  return (
    <main className="home-page">

      {/* =====================================================
          1. HERO SECTION
      ===================================================== */}

      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            <span className="gold-dot"></span>
            AI-POWERED SALES. HUMAN-DRIVEN REVENUE.
            <span className="gold-dot"></span>
          </div>

          <h1 className="hero-title">
            Turn More Leads Into{" "}
            <em>Revenue.</em>
          </h1>

          <p className="hero-description">
            Sales Gate combines AI-powered sales intelligence with a
            pioneer managed sales team to stop revenue leakage and drive
            more conversions.
          </p>

          <div className="hero-buttons">

            <Link
              to="/ai-sales"
              className="primary-button"
            >
              Explore AI Sales
              <span>→</span>
            </Link>

            <Link
              to="/managed-sales"
              className="secondary-button"
            >
              Explore Managed Sales
              <span>→</span>
            </Link>

          </div>

          {/* HERO STATS */}

          <div className="hero-stats">

            <div className="hero-stat">
              <strong>99.2%</strong>
              <span>Leak Detection</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>3.8x</strong>
              <span>Pipeline Velocity</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Active Interception</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          2. REVENUE DASHBOARD
      ===================================================== */}

      <section className="dashboard-section">

        <div className="dashboard-container">

          <DashboardHeader />


          {/* KPI CARDS */}

          <div className="dashboard-kpis">

            <DashboardKpi
              title="Total Leads"
              value="10,256"
              change="18.5%"
              icon="users"
            />

            <DashboardKpi
              title="Qualified Leads"
              value="4,326"
              change="24.3%"
              icon="qualified"
            />

            <DashboardKpi
              title="High Intent"
              value="1,842"
              change="32.1%"
              icon="bolt"
            />

            <DashboardKpi
              title="Opportunities"
              value="842"
              change="15.6%"
              icon="target"
            />

            <DashboardKpi
              title="Revenue Pipeline"
              value="₹ 2.45 Cr"
              change="21.6%"
              icon="money"
              highlighted
            />

          </div>


          {/* DASHBOARD MIDDLE */}

          <div className="dashboard-middle">

            {/* REVENUE FUNNEL */}

            <div className="dashboard-panel funnel-panel">

              <div className="panel-heading">
                <span>REVENUE FUNNEL</span>

                <small>
                  Live Conversion Stages
                </small>
              </div>

              <div className="funnel-image-wrapper">

                <img
                  src={revenueFunnel}
                  alt="Sales Gate revenue funnel"
                  className="funnel-image"
                />

              </div>

            </div>


            {/* AI SCORE DISTRIBUTION */}

            <AiScoreDistribution />

          </div>


          {/* DASHBOARD BOTTOM */}

          <div className="dashboard-bottom">

            <NextBestActions />

            <OpportunitiesByStage />

          </div>

        </div>

      </section>


      {/* =====================================================
          3. REAL PROBLEM
      ===================================================== */}

      <RealProblemSection />


      {/* =====================================================
          4. FIND / FIX / DRIVE
      ===================================================== */}

      <ProcessSection />


      {/* =====================================================
          5. PLATFORM CARDS
      ===================================================== */}

      <PlatformSection />


      {/* =====================================================
          6. INDUSTRIES
      ===================================================== */}

      <IndustriesSection />


      {/* =====================================================
          7. FINAL CTA
      ===================================================== */}

      <section className="final-cta-section">

        <div className="final-cta">

          <div className="final-cta-content">

            <div className="small-label">
              ● READY TO GROW?
            </div>

            <h2>
              Turn More Opportunities{" "}
              <em>Into Revenue.</em>
            </h2>

            <p>
              Let's build a smarter sales engine that creates measurable
              business impact and drives your autonomous pipeline.
            </p>

          </div>

          <div className="final-cta-buttons">

        <DemoButton className="primary-button">
          Book a Demo
          <span>→</span>
        </DemoButton>

            <Link
              to="/managed-sales"
              className="secondary-button"
            >
              Explore Managed Sales
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ============================================================
   DASHBOARD HEADER
============================================================ */

function DashboardHeader() {

  const today = new Date();

  const endDate = today;

  const startDate = new Date(today);

  startDate.setDate(today.getDate() - 6);


  const formatDate = (date) => {

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  };


  return (
    <div className="dashboard-header">

      <div className="dashboard-greeting">

        <div className="greeting-icon">
          ✦
        </div>

        <div>

          <h3>
            Good morning, Team! 👋
          </h3>

          <p>
            Here's your revenue overview for today.
          </p>

        </div>

      </div>


      <div className="dashboard-date">

        <span className="calendar-icon">
          ▣
        </span>

        {formatDate(startDate)} – {formatDate(endDate)}

      </div>

    </div>
  );
}


/* ============================================================
   DASHBOARD KPI
============================================================ */

function DashboardKpi({
  title,
  value,
  change,
  icon,
  highlighted = false,
}) {

  return (
    <div
      className={`dashboard-kpi ${
        highlighted ? "dashboard-kpi-highlighted" : ""
      }`}
    >

      <div className="kpi-top">

        <span>
          {title}
        </span>

        <KpiIcon type={icon} />

      </div>


      <strong>
        {value}
      </strong>


      <div className="kpi-change">
        ↗ {change}
      </div>

    </div>
  );
}


/* ============================================================
   KPI ICONS
============================================================ */

function KpiIcon({ type }) {

  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };


  if (type === "users") {

    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
        <path d="M16 6a3 3 0 0 1 0 6" />
        <path d="M18 15c2 .6 3 2.2 3 5" />
      </svg>
    );

  }


  if (type === "qualified") {

    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );

  }


  if (type === "bolt") {

    return (
      <svg {...common}>
        <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    );

  }


  if (type === "target") {

    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="m15 9 4-4" />
      </svg>
    );

  }


  return (
    <svg {...common}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  );
}


/* ============================================================
   AI SCORE DISTRIBUTION
============================================================ */

function AiScoreDistribution() {

  return (
    <div className="dashboard-panel score-panel">

      <div className="panel-heading">

        <span>
          AI SCORE DISTRIBUTION
        </span>

        <span className="share-icon">
          ●
        </span>

      </div>


      <div className="score-circle">

        <div>

          <strong>
            1,842
          </strong>

          <span>
            HIGH INTENT
          </span>

        </div>

      </div>


      <div className="score-list">

        <ScoreRow
          label="High (80–100)"
          value="1,842"
          className="high"
        />

        <ScoreRow
          label="Medium (50–79)"
          value="2,764"
          className="medium"
        />

        <ScoreRow
          label="Low (20–49)"
          value="2,390"
          className="low"
        />

      </div>

    </div>
  );
}


/* ============================================================
   SCORE ROW
============================================================ */

function ScoreRow({
  label,
  value,
  className,
}) {

  return (
    <div className="score-row">

      <div>

        <span className={`score-dot ${className}`}></span>

        {label}

      </div>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* ============================================================
   NEXT BEST ACTIONS
============================================================ */

function NextBestActions() {

  return (
    <div className="dashboard-panel actions-panel">

      <div className="panel-heading">

        <span>
          NEXT BEST ACTIONS
        </span>

        <span className="view-all">
          View all actions →
        </span>

      </div>


      <ActionItem
        icon="mail"
        title="Follow up with John D."
        description="High intent lead • Pricing page visited"
      />

      <ActionItem
        icon="calendar"
        title="Schedule demo with Acme Corp"
        description="Lead score increased to 85"
      />

      <ActionItem
        icon="document"
        title="Send proposal to Sarah T."
        description="Requested quotation for Enterprise Tier"
      />

    </div>
  );
}


/* ============================================================
   ACTION ITEM
============================================================ */

function ActionItem({
  icon,
  title,
  description,
}) {

  return (
    <div className="action-item">

      <div className="action-left">

        <div className="action-icon">
          <ActionIcon type={icon} />
        </div>

        <div>

          <strong>
            {title}
          </strong>

          <span>
            {description}
          </span>

        </div>

      </div>


      <button
        type="button"
        className="see-action"
      >
        See
        <br />
        Action
      </button>

    </div>
  );
}


/* ============================================================
   ACTION ICONS
============================================================ */

function ActionIcon({
  type,
}) {

  const common = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };


  if (type === "mail") {

    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );

  }


  if (type === "calendar") {

    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4M16 2v4M3 9h18" />
      </svg>
    );

  }


  return (
    <svg {...common}>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}


/* ============================================================
   OPPORTUNITIES BY STAGE
============================================================ */

function OpportunitiesByStage() {

  return (
    <div className="dashboard-panel opportunities-panel">

      <div className="panel-heading">

        <span>
          OPPORTUNITIES BY STAGE
        </span>

        <strong className="pipeline-value">
          ₹ 2,45,00,000
        </strong>

      </div>


      <OpportunityBar
        label="Discovery"
        value="320"
        width="72%"
      />

      <OpportunityBar
        label="Proposal"
        value="210"
        width="54%"
      />

      <OpportunityBar
        label="Negotiation"
        value="152"
        width="36%"
      />


      <div className="trajectory">

        <div className="trajectory-heading">

          <span>
            Weekly Trajectory
          </span>

          <strong>
            +21.6%
          </strong>

        </div>


        <svg
          className="trajectory-line"
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
        >

          <path
            d="
              M5 60
              C70 58 95 50 150 54
              C210 59 250 42 305 49
              C360 57 385 40 420 22
              C445 10 470 15 495 5
            "
          />

        </svg>

      </div>

    </div>
  );
}


/* ============================================================
   OPPORTUNITY BAR
============================================================ */

function OpportunityBar({
  label,
  value,
  width,
}) {

  return (
    <div className="opportunity-bar">

      <div className="opportunity-info">

        <span>
          {label}
        </span>

        <strong>
          {value}
        </strong>

      </div>


      <div className="bar-track">

        <div
          className="bar-fill"
          style={{
            width,
          }}
        />

      </div>

    </div>
  );
}


/* ============================================================
   REAL PROBLEM SECTION
============================================================ */

function RealProblemSection() {

  const problems = [

    {
      icon: "clock",
      title: "Slow Response",
      text:
        "Leads lose interest when they aren’t contacted quickly. High-intent buyers evaporate within hours without immediate engagement.",
      bottom: "Speed-to-lead bottleneck",
    },

    {
      icon: "qualification",
      title: "Poor Qualification",
      text:
        "Valuable rep time is spent on leads that aren’t ready or relevant, starving legitimate buyers of high-touch attention.",
      bottom: "Wasted sales capacity",
    },

    {
      icon: "followup",
      title: "Missed Follow-ups",
      text:
        "Inconsistent follow-ups cause good opportunities to slip away into cold stagnation after an initial productive dialogue.",
      bottom: "Silent drop-offs",
    },

    {
      icon: "signal",
      title: "Lost Buying Signals",
      text:
        "Important digital signals and intent spikes are missed, leaving crucial deals unadvanced during prime conversion windows.",
      bottom: "Blind deal execution",
    },

    {
      icon: "systems",
      title: "Disconnected Systems",
      text:
        "Marketing, CRM, and communication tools don’t work together, fragmenting user history and isolating context.",
      bottom: "Data silos & friction",
    },

    {
      icon: "visibility",
      title: "No Funnel Visibility",
      text:
        "Leadership cannot see where the leaks are or what’s specifically impacting enterprise revenue until month-end misses.",
      bottom: "Zero real-time clarity",
    },

  ];


  return (
    <section className="problem-section">

      <div className="problem-container">

        <div className="section-label left">
          ● THE REAL PROBLEM
        </div>


        <h2 className="section-heading problem-heading">
          Revenue Leaks Happen{" "}
          <em>Across The Funnel.</em>
        </h2>


        <p className="section-description problem-description">
          From slow responses to missed follow-ups, small gaps create big
          revenue leaks.
        </p>


        <div className="problem-grid">

          {problems.map((problem) => (

            <ProblemCard
              key={problem.title}
              {...problem}
            />

          ))}

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   PROBLEM CARD
============================================================ */

function ProblemCard({
  icon,
  title,
  text,
  bottom,
}) {

  return (
    <div className="problem-card">

      <div className="problem-icon">
        <ProblemIcon type={icon} />
      </div>


      <h3>
        {title}
      </h3>


      <p>
        {text}
      </p>


      <div className="problem-bottom">
        • {bottom}
      </div>

    </div>
  );
}


/* ============================================================
   PROBLEM ICONS
============================================================ */

function ProblemIcon({
  type,
}) {

  const common = {
    width: 27,
    height: 27,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };


  if (type === "clock") {

    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    );

  }


  if (type === "qualification") {

    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19c0-3 2.5-5 6-5" />
        <circle cx="17" cy="16" r="3" />
        <path d="m19 18 2 2" />
      </svg>
    );

  }


  if (type === "followup") {

    return (
      <svg {...common}>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />
        <path d="m3 7 9 6 9-6" />
        <path d="M17 3v4M20 4l-3 3" />
      </svg>
    );

  }


  if (type === "signal") {

    return (
      <svg {...common}>
        <path d="M12 19V5" />
        <path d="M8 15a6 6 0 0 1 0-6" />
        <path d="M16 9a6 6 0 0 1 0 6" />
        <path d="M5 18a10 10 0 0 1 0-12" />
        <path d="M19 6a10 10 0 0 1 0 12" />
      </svg>
    );

  }


  if (type === "systems") {

    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="2" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="19" cy="7" r="2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="m10 11-3-3M14 11l3-3M10 13l-3 4M14 13l3 4" />
      </svg>
    );

  }


  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 4 20 20" />
    </svg>
  );
}


/* ============================================================
   PROCESS SECTION
============================================================ */

function ProcessSection() {

  const steps = [

    {
      icon: "capture",
      title: "Capture",
      text: "Bring leads from multiple sources",
      leak: "Leak: Low Quality or Untracked Leads",
    },

    {
      icon: "understand",
      title: "Understand",
      text: "Understand lead behavior & intent",
      leak: "Leak: Poor Data & Context",
    },

    {
      icon: "qualify",
      title: "Qualify",
      text: "Qualify the right opportunities",
      leak: "Leak: Wrong Qualification",
    },

    {
      icon: "engage",
      title: "Engage",
      text: "Engage with timely & relevant conversations",
      leak: "Leak: Slow or No Engagement",
    },

    {
      icon: "nurture",
      title: "Nurture",
      text: "Nurture with smart follow-ups",
      leak: "Leak: Inconsistent Follow-ups",
    },

    {
      icon: "convert",
      title: "Convert",
      text: "Convert qualified leads into customers",
      leak: "Leak: Drops Before Conversion",
    },

    {
      icon: "learn",
      title: "Learn",
      text: "Learn & optimize to prevent future leakage",
      leak: "Leak: No Insights to Improve",
    },

  ];


  return (
    <section className="process-section">

      <div className="process-container">

        <div className="section-label centered">
          ● FROM LEAD TO REVENUE ●
        </div>


        <h2 className="process-heading">
          We Find. We Fix. We{" "}
          <em>Drive Conversions.</em>
        </h2>


        <p className="process-description">
          Our pioneer managed sales team works closely with your marketing
          team and uses AI to find every leak in your funnel, fix what’s
          broken, and drive more revenue.
        </p>


        <div className="process-line"></div>


        <div className="process-grid">

          {steps.map((step) => (

            <ProcessStep
              key={step.title}
              {...step}
            />

          ))}

        </div>


        <div className="process-callout">

          <div className="callout-icon">
            ◇
          </div>

          <p>
            End-to-end funnel visibility. Complete revenue security.
            We identify <em>why revenue drops</em> and fix it.
          </p>

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   PROCESS STEP
============================================================ */

function ProcessStep({
  icon,
  title,
  text,
  leak,
}) {

  return (
    <div className="process-step">

      <div className="process-circle revenue-step-circle">

        <ProcessIcon type={icon} />

      </div>


      <h3>
        {title}
      </h3>


      <p>
        {text}
      </p>


      <div className="leak-pill">
        {leak}
      </div>

    </div>
  );
}


/* ============================================================
   PROCESS ICON
============================================================ */

function ProcessIcon({
  type,
}) {

  const common = {
    width: 29,
    height: 29,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };


  if (type === "capture") {

    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5 6-5" />
        <path d="M16 8h5M18.5 5.5v5" />
      </svg>
    );

  }


  if (type === "understand") {

    return (
      <svg {...common}>
        <circle cx="12" cy="9" r="3" />
        <path d="M12 12v7" />
        <path d="M8 21h8" />
        <path d="M12 6V3" />
      </svg>
    );

  }


  if (type === "qualify") {

    return (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5 6-5" />
        <path d="m15 16 2 2 4-5" />
      </svg>
    );

  }


  if (type === "engage") {

    return (
      <svg {...common}>
        <path d="M4 5h16v11H8l-4 4V5Z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    );

  }


  if (type === "nurture") {

    return (
      <svg {...common}>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );

  }


  if (type === "convert") {

    return (
      <svg {...common}>
        <path d="m5 12 5 5L20 7" />
      </svg>
    );

  }


  return (
    <svg {...common}>
      <path d="m4 17 6-6 4 3 6-7" />
      <path d="M15 7h5v5" />
    </svg>
  );
}


/* ============================================================
   PLATFORM SECTION
============================================================ */

function PlatformSection() {

  return (
    <section className="platform-section">

      <div className="platform-container">

        <div className="platform-top-line"></div>


        <div className="section-label centered">
          ● ONE PLATFORM. THREE WAYS WE HELP YOU GROW. ●
        </div>


        <div className="platform-grid">

          <PlatformCard
            type="ai-sales"
            title="AI Sales"
            subtitle="Make Your Sales Smarter."
            items={[
              "AI Agents",
              "Lead Capture & Enrichment",
              "AI Qualification",
              "Lead Scoring & Prioritisation",
              "AI Follow-ups & Automation",
            ]}
            link="/ai-sales"
          />


          <PlatformCard
            type="ai-solutions"
            title="AI Solutions"
            subtitle={
              <>
                Build What Your Business Needs.
              </>
            }
            items={[
              "AI Software & Applications",
              "LLMs & Generative AI",
              "AI Agents & Automation",
              "Intelligent Data & Decision Systems",
              "Custom Digital Products",
            ]}
            link="/ai-solutions"
          />


          <PlatformCard
            type="managed-sales"
            title="Managed Sales"
            subtitle={
              <>
                Put Sales Execution in Motion.
              </>
            }
            items={[
              "Lead Management",
              "Prospect Qualification",
              "Follow-ups & Re-engagement",
              "Meetings & Appointments",
              "Pipeline & Conversion Management",
            ]}
            link="/managed-sales"
            preferred
          />

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   PLATFORM CARD
============================================================ */

function PlatformCard({
  type,
  title,
  subtitle,
  items,
  link,
  preferred,
}) {

  return (
    <div
      className={`platform-card ${
        preferred ? "platform-card-preferred" : ""
      }`}
    >

      {preferred && (
        <div className="preferred-badge">
          MOST PREFERRED
        </div>
      )}


      <div className={`platform-icon ${type}`}>
        <PlatformIcon type={type} />
      </div>


      <h3>
        {title}
      </h3>


      <div className="platform-subtitle">
        {subtitle}
      </div>


      <ul>

        {items.map((item) => (

          <li key={item}>

            <span className="platform-bullet"></span>

            {item}

          </li>

        ))}

      </ul>


      <div className="platform-card-bottom"></div>


      <Link
        to={link}
        className="platform-link"
      >
        Explore {title}
        <span>→</span>
      </Link>

    </div>
  );
}


/* ============================================================
   PLATFORM ICON
============================================================ */

function PlatformIcon({
  type,
}) {

  const common = {
    width: 31,
    height: 31,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };


  if (type === "ai-sales") {

    return (
      <svg {...common}>
        <rect
          x="5"
          y="6"
          width="14"
          height="12"
          rx="3"
        />
        <path d="M9 11h.01M15 11h.01" />
        <path d="M9 15h6" />
        <path d="M12 3v3M3 10v4M21 10v4" />
      </svg>
    );

  }


  if (type === "ai-solutions") {

    return (
      <svg {...common}>
        <path d="M4 19V9M10 19V5M16 19v-8M22 19H2" />
      </svg>
    );

  }


  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="3" />
      <circle cx="6" cy="11" r="2" />
      <circle cx="18" cy="11" r="2" />
      <path d="M7 20c0-3 2-5 5-5s5 2 5 5" />
      <path d="M2 19c0-2 1.5-4 4-4M22 19c0-2-1.5-4-4-4" />
    </svg>
  );
}


/* ============================================================
   INDUSTRIES SECTION
============================================================ */

function IndustriesSection() {

  const industries = [

    {
      icon: "education",
      title: (
        <>
          Education &
          <br />
          EdTech
        </>
      ),
    },

    {
      icon: "realestate",
      title: "Real Estate",
    },

    {
      icon: "finance",
      title: (
        <>
          Financial Services
          <br />
          & Lending
        </>
      ),
    },

    {
      icon: "travel",
      title: (
        <>
          Travel &
          <br />
          Hospitality
        </>
      ),
    },

    {
      icon: "luxury",
      title: "Luxury & Jewellery",
    },

    {
      icon: "consumer",
      title: "D2C & Consumer",
    },

    {
      icon: "highticket",
      title: (
        <>
          High-Ticket
          <br />
          Businesses
        </>
      ),
    },

  ];


  return (
    <section className="industries-section">

      <div className="industries-container">

        <div className="industries-label">
          BUILT FOR BUSINESSES THAT DEPEND ON SALES
        </div>


        <div className="industries-grid">

          {industries.map((industry) => (

            <IndustryCard
              key={industry.icon}
              {...industry}
            />

          ))}

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   INDUSTRY CARD
============================================================ */

function IndustryCard({
  icon,
  title,
}) {

  return (
    <div className="industry-card">

      <div className="industry-icon">

        <IndustryIcon type={icon} />

      </div>


      <div className="industry-title">
        {title}
      </div>

    </div>
  );
}


/* ============================================================
   INDUSTRY ICONS
============================================================ */

function IndustryIcon({
  type,
}) {

  const common = {
    width: 29,
    height: 29,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };


  if (type === "education") {

    return (
      <svg {...common}>
        <path d="M5 17 24 7l19 10-19 10L5 17Z" />
        <path d="M13 21v9c6 5 16 5 22 0v-9" />
        <path d="M43 17v11" />
        <circle cx="43" cy="31" r="2" />
      </svg>
    );

  }


  if (type === "realestate") {

    return (
      <svg {...common}>
        <path d="M8 40V11h19v29" />
        <path d="M27 20h13v20" />
        <path d="M4 40h40" />
        <path d="M13 17h3M13 23h3M13 29h3" />
        <path d="M20 17h3M20 23h3M20 29h3" />
        <path d="M32 26h3M32 32h3" />
      </svg>
    );

  }


  if (type === "finance") {

    return (
      <svg {...common}>
        <rect
          x="6"
          y="12"
          width="36"
          height="25"
          rx="3"
        />
        <circle cx="24" cy="24" r="6" />
        <path d="M10 17h3M35 17h3M10 32h3M35 32h3" />
      </svg>
    );

  }


  if (type === "travel") {

    return (
      <svg {...common}>
        <path d="m6 29 36-8" />
        <path d="m19 26-8-12" />
        <path d="m25 24-1-16" />
        <path d="m31 23 10-9" />
        <path d="m6 29 5 4" />
      </svg>
    );

  }


  if (type === "luxury") {

    return (
      <svg {...common}>
        <path d="m8 17 7-8h18l7 8-16 24L8 17Z" />
        <path d="M8 17h32" />
        <path d="m15 9 4 8M33 9l-4 8" />
        <path d="m19 17 5 24 5-24" />
      </svg>
    );

  }


  if (type === "consumer") {

    return (
      <svg {...common}>
        <path d="M14 16h20l3 26H11l3-26Z" />
        <path d="M18 16v-3a6 6 0 0 1 12 0v3" />
      </svg>
    );

  }


  return (
    <svg {...common}>
      <path d="M7 18h34v23H7z" />
      <path d="M4 18h40l-3-7H7l-3 7Z" />
      <path d="M14 18v7M24 18v7M34 18v7" />
    </svg>
  );
}