import { Link } from "react-router-dom";
import manageSalesImage from "../assets/images/manageSalesImage.webp";

function ManagedSales() {
  return (
    <main className="managed-sales-page">

      <section className="managed-sales-hero">
        <div className="managed-sales-hero-inner">

          <div className="managed-sales-hero-left">

            <div className="managed-sales-eyebrow">
              <span></span>
              MANAGED SALES
            </div>

            <h1 className="managed-sales-title">
              Your Marketing
              <br />
              Creates Demand.
              <br />
              We Turn It Into
              <br />
              <em>Revenue.</em>
            </h1>

            <p className="managed-sales-description">
              Our experienced sales team works alongside your business to
              manage the journey from first contact to conversion while
              identifying where opportunities are being lost.
            </p>

            <div className="managed-sales-buttons">
              <Link
                to="/about-us"
                className="managed-sales-primary-btn"
              >
                Book a Demo
                <span>→</span>
              </Link>

              <Link
                to="/about-us"
                className="managed-sales-secondary-btn"
              >
                Talk to Our Team
              </Link>
            </div>

            <div className="managed-sales-benefits">

              <div className="managed-sales-benefit">
                <div className="managed-sales-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M16 21V19C16 16.7909 14.2091 15 12 15H6C3.79086 15 2 16.7909 2 19V21"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M19 8V14"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 11H22"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <span>Human Expertise</span>
              </div>

              <div className="managed-sales-benefit">
                <div className="managed-sales-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 16L20 19L23 20L20 21L19 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span>AI-Powered Intelligence</span>
              </div>

              <div className="managed-sales-benefit">
                <div className="managed-sales-benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3L20 6V11C20 16.2 16.6 20.1 12 21C7.4 20.1 4 16.2 4 11V6L12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span>End-to-End Execution</span>
              </div>

            </div>
          </div>

          <div className="managed-sales-hero-right">
            <img
              src={manageSalesImage}
              alt="Managed Sales revenue pipeline"
              className="managed-sales-hero-image"
            />
          </div>

        </div>
      </section>

      <section className="managed-sales-why">
        <div className="managed-sales-why-inner">

          <div className="managed-sales-why-content">

            <div className="managed-sales-section-label">
              <span></span>
              WHY MANAGED SALES?
            </div>

            <h2>
              Leads Don't Become
              <br />
              <em>Revenue</em> on Their
              <br />
              Own.
            </h2>

            <p>
              Leads fall through the cracks for many reasons.
              We step in, take ownership, and make sure your
              opportunities don't slip away.
            </p>

          </div>

          <div className="managed-sales-problems">

            <div className="managed-sales-problem-card">
              <div className="managed-sales-problem-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 8V12L14.5 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                Leads aren't followed up at the right time
              </p>
            </div>

            <div className="managed-sales-problem-card">
              <div className="managed-sales-problem-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="8"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M5.5 19C6.1 15.9 8.3 14 12 14C15.7 14 17.9 15.9 18.5 19"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                Sales teams aren't prioritizing the right opportunities
              </p>
            </div>

            <div className="managed-sales-problem-card">
              <div className="managed-sales-problem-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 8C18 4.7 15.3 2 12 2C8.7 2 6 4.7 6 8C6 15 3 15 3 17H21C21 15 18 15 18 8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 21H14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                Buying signals are being missed
              </p>
            </div>

            <div className="managed-sales-problem-card">
              <div className="managed-sales-problem-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 7H17"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 7L14 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 7L14 10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 17H7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 17L10 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 17L10 20"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                Prospects drop out between conversations
              </p>
            </div>

            <div className="managed-sales-problem-card managed-sales-problem-wide">
              <div className="managed-sales-problem-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4"
                    y="5"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 21H16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 17V21"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 9H16"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 12H13"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p>
                Marketing and sales aren't working from the same picture
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="managed-sales-process">

        <div className="managed-sales-process-header">

          <h2>
            We Find the{" "}
            <span>LEAKS.</span> We Fix
            <br />
            them.
          </h2>

          <p>
            We work across your sales process to identify where opportunities
            drop, understand why they drop,
            <br className="hidden md:block" />
            and take action to improve conversion.
          </p>

        </div>

        <div className="managed-sales-process-steps">

          <div className="managed-sales-process-line"></div>

          {/* IDENTIFY */}
          <div className="managed-sales-process-step">
            <div className="managed-sales-process-circle">
              <svg viewBox="0 0 24 24" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M16 16L21 21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3>Identify</h3>

            <p>
              Find leakage across the funnel
            </p>
          </div>

          {/* UNDERSTAND */}
          <div className="managed-sales-process-step">
            <div className="managed-sales-process-circle">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.5 14.5C7.55 13.55 7 12.35 7 11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11C17 12.35 16.45 13.55 15.5 14.5C14.72 15.28 14.35 15.9 14.15 17H9.85C9.65 15.9 9.28 15.28 8.5 14.5Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />

                <path
                  d="M10 20H14"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M10.5 17H13.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M12 3V2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M5.5 5.5L4.8 4.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M18.5 5.5L19.2 4.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3>Understand</h3>

            <p>
              Discover why opportunities are being lost
            </p>
          </div>

          {/* TAKE ACTION */}
          <div className="managed-sales-process-step">
            <div className="managed-sales-process-circle">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L4 13H11L10 22L20 10H13L13 2Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3>Take Action</h3>

            <p>
              Implement the right actions to plug the gaps
            </p>
          </div>

          {/* MEASURE */}
          <div className="managed-sales-process-step">
            <div className="managed-sales-process-circle">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="4"
                  y="11"
                  width="4"
                  height="9"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <rect
                  x="10"
                  y="7"
                  width="4"
                  height="13"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <rect
                  x="16"
                  y="4"
                  width="4"
                  height="16"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </div>

            <h3>Measure</h3>

            <p>
              Track performance and improvement
            </p>
          </div>

          {/* IMPROVE */}
          <div className="managed-sales-process-step">
            <div className="managed-sales-process-circle">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 17L10 11L14 14L21 7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M16 7H21V12"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3>Improve</h3>

            <p>
              Continuously optimize for more revenue
            </p>
          </div>

        </div>
      </section>

      <section className="managed-sales-team">

  <div className="managed-sales-team-inner">

    <div className="managed-sales-team-content">

      <h2>
        We Work With
        <br />
        <em>Your Marketing Team</em>
      </h2>

      <p>
        We don't replace your marketing team. We work alongside
        them to drive better conversions.
      </p>

      <div className="managed-sales-team-note">
        <span>✦</span>
        <span>One team. One funnel. One view of revenue.</span>
      </div>

    </div>

    <div className="managed-sales-team-flow">

      <div className="managed-sales-team-cards">

        <div className="managed-sales-team-card">
          <div className="managed-sales-team-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 8.5L12 5L19 8.5L12 12L5 8.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M7 10V15C7 17 9.2 19 12 19C14.8 19 17 17 17 15V10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <h3>Marketing</h3>

          <p>
            Generates demand and
            brings opportunities
          </p>
        </div>

        <div className="managed-sales-team-card">
          <div className="managed-sales-team-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M6 19C6.5 15.8 8.5 14 12 14C15.5 14 17.5 15.8 18 19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3>Sales Gate</h3>

          <p>
            Takes ownership of sales
            execution and conversion
          </p>
        </div>

        <div className="managed-sales-team-card">
          <div className="managed-sales-team-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M13 2L4 13H11L10 22L20 10H13L13 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3>Intelligence</h3>

          <p>
            Identifies patterns, gaps
            and revenue leakage
          </p>
        </div>

        <div className="managed-sales-team-card">
          <div className="managed-sales-team-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 6H19V16H5V6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 20H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9 10H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9 13H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3>Feedback</h3>

          <p>
            Insights go back to
            marketing and leadership
          </p>
        </div>

      </div>

      <div className="managed-sales-team-improvement">
        <span>⟳</span>
        <span>
          Improvement: The entire funnel gets better
        </span>
      </div>

    </div>

  </div>

  </section>

  <section className="w-full bg-[#0d0712] px-6 py-20 md:px-10 lg:px-16">
  <div className="mx-auto max-w-[1400px]">

    {/* Heading */}
    <div className="mb-12 text-center">
      <h2 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
        What We Manage
      </h2>

      <div className="mx-auto mt-4 h-[3px] w-9 rounded-full bg-[#f5b84b]" />
    </div>

    {/* Management Cards */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* Lead Response */}
      <div className="min-h-[145px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <circle
              cx="12"
              cy="8"
              r="3.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5 21C5 17.7 8.1 15 12 15C15.9 15 19 17.7 19 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white">
          Lead Response
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Ensure every lead gets a timely response
        </p>
      </div>

      {/* Qualification */}
      <div className="min-h-[145px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <circle
              cx="12"
              cy="12"
              r="8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8.5 12L11 14.5L15.5 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white">
          Qualification
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Understand fit, intent, need and readiness
        </p>
      </div>

      {/* Conversations */}
      <div className="min-h-[145px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M5 6.5C5 5.1 6.1 4 7.5 4H16.5C17.9 4 19 5.1 19 6.5V13.5C19 14.9 17.9 16 16.5 16H11L7 19V16.2C5.8 15.8 5 14.7 5 13.5V6.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 9H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 12H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white">
          Conversations
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Engage prospects with relevant, contextual conversations
        </p>
      </div>

      {/* Follow-ups */}
      <div className="min-h-[145px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M6 7H18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18 7L15 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18 7L15 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18 17H6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 17L9 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 17L9 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white">
          Follow-ups
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Maintain consistent follow-ups without letting opportunities go cold
        </p>
      </div>

      {/* Appointments */}
      <div className="min-h-[145px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <rect
              x="4"
              y="5"
              width="16"
              height="15"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 3V7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 3V7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 10H20"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white">
          Appointments
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Move qualified prospects toward meaningful meetings
        </p>
      </div>

      {/* Pipeline */}
      <div className="min-h-[145px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M5 7H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5 12H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5 17H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M17 15L20 18L17 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white">
          Pipeline
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Track opportunities and keep the sales process moving
        </p>
      </div>

      {/* Re-engagement */}
      <div className="min-h-[145px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M19 8A7 7 0 1 0 20 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 4V8H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white">
          Re-engagement
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Reconnect with prospects who went inactive
        </p>
      </div>

      {/* Conversion */}
      <div className="min-h-[145px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 8V12L15 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 18L4 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold text-white">
          Conversion
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Move qualified opportunities toward the final decision
        </p>
      </div>

    </div>
  </div>
</section>
<section className="w-full border-t border-[#241a2d] bg-[#0d0712] px-6 py-16 md:px-10 lg:px-16">
  <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[40%_60%]">

    {/* Left */}
    <div>
      <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#f5b84b]">
        Flexible Capacity
      </p>

      <h2 className="font-serif text-4xl font-bold leading-[1.05] text-white md:text-[42px]">
        Scale Your Sales Team
      </h2>

      <p className="mt-2 text-[15px] font-medium text-[#f5b84b]">
        Start small. Scale when you need more.
      </p>

      <p className="mt-5 max-w-[470px] text-[14px] leading-6 text-white/70">
        We can scale the sales team around your requirements so you never miss
        an opportunity.
      </p>

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3 text-[13px] text-white/80">
          <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0d4d42] text-[11px] text-[#16c7a1]">
            ✓
          </span>
          <span>Scale as lead volume grows</span>
        </div>

        <div className="flex items-center gap-3 text-[13px] text-white/80">
          <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0d4d42] text-[11px] text-[#16c7a1]">
            ✓
          </span>
          <span>Add capacity for new markets or products</span>
        </div>

        <div className="flex items-center gap-3 text-[13px] text-white/80">
          <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0d4d42] text-[11px] text-[#16c7a1]">
            ✓
          </span>
          <span>Handle peak demand and seasonal spikes</span>
        </div>

        <div className="flex items-center gap-3 text-[13px] text-white/80">
          <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#0d4d42] text-[11px] text-[#16c7a1]">
            ✓
          </span>
          <span>Flexible engagement. No long-term hiring headaches.</span>
        </div>

      </div>
    </div>

    {/* Right */}
    <div className="rounded-xl border border-[#2d2435] bg-[#17101f] px-7 py-7 md:px-10 md:py-8">

      <div className="text-center">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-white/55">
          YOU FOCUS ON GROWTH.
        </p>

        <h3 className="mt-1 font-serif text-[19px] font-bold text-[#f5b84b]">
          We Scale the Execution.
        </h3>
      </div>

      <div className="mt-7 grid grid-cols-4 items-start gap-4">

        {/* 1 Sales Rep */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#405ee8] text-[18px] font-semibold text-white shadow-[0_0_22px_rgba(64,94,232,0.22)]">
            1
          </div>

          <p className="mt-3 text-[11px] font-semibold text-white/75">
            1 Sales Rep
          </p>
        </div>

        {/* 2–5 Sales Resources */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#08ad91] text-white shadow-[0_0_22px_rgba(8,173,145,0.18)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7"
            >
              <circle
                cx="12"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M6 20C6 16.7 8.7 14 12 14C15.3 14 18 16.7 18 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="5"
                cy="10"
                r="2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <circle
                cx="19"
                cy="10"
                r="2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </div>

          <p className="mt-3 text-[11px] font-semibold text-white/75">
            2–5 Sales Resources
          </p>
        </div>

        {/* Sales Resources */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#a82ee2] text-white shadow-[0_0_22px_rgba(168,46,226,0.18)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7"
            >
              <rect
                x="4"
                y="5"
                width="16"
                height="11"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M9 20H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 16V20"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <p className="mt-3 text-[11px] font-semibold text-white/75">
            Sales Resources
          </p>
        </div>

        {/* Scale Sales Resources */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ed7800] text-white shadow-[0_0_22px_rgba(237,120,0,0.18)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7"
            >
              <path
                d="M7 8H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 8L9.5 5H14.5L16 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <rect
                x="5"
                y="8"
                width="14"
                height="11"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="mt-3 text-[11px] font-semibold text-white/75">
            Scale Sales Resources
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

    <section className="w-full border-t border-[#241a2d] bg-[#100914] px-6 py-16 md:px-10 lg:px-16">
  <div className="mx-auto max-w-[1400px]">

    <div className="mx-auto max-w-[650px] text-center">
      <h2 className="font-serif text-4xl font-bold leading-[1.05] text-white md:text-[44px]">
        Human Expertise.{" "}
        <em className="font-normal text-[#f5b84b]">
          AI
          <br />
          Intelligence.
        </em>
      </h2>

      <p className="mt-4 text-[13px] text-white/70">
        The symbiotic approach to high-performing sales execution.
      </p>
    </div>

    <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_90px_1fr]">

      {/* Sales Team */}
      <div className="rounded-xl border border-[#2d2435] bg-[#19121f] p-6 md:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <circle
                cx="12"
                cy="8"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M5 20C5 16.7 8.1 14 12 14C15.9 14 19 16.7 19 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 className="font-serif text-[20px] font-bold text-white">
            Our Sales Team
          </h3>
        </div>

        <div className="space-y-3 text-[13px] text-white/70">
          <p className="flex gap-3">
            <span className="text-[#f5b84b]">•</span>
            <span>
              Experienced in sales, GTM and market understanding
            </span>
          </p>

          <p className="flex gap-3">
            <span className="text-[#f5b84b]">•</span>
            <span>
              Strong communication and relationship building
            </span>
          </p>

          <p className="flex gap-3">
            <span className="text-[#f5b84b]">•</span>
            <span>
              Focus on quality conversations and conversions
            </span>
          </p>
        </div>
      </div>

      {/* Stronger Together */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#f5b84b] bg-[#100914] text-center shadow-[0_0_28px_rgba(245,184,75,0.16)]">
        <span className="text-[9px] font-bold uppercase leading-[1.3] tracking-wide text-[#f5b84b]">
          Stronger
          <br />
          Together
        </span>
      </div>

      {/* AI Intelligence */}
      <div className="rounded-xl border border-[#2d2435] bg-[#19121f] p-6 md:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <path
                d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M19 16L20 19L23 20L20 21L19 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3 className="font-serif text-[20px] font-bold text-white">
            AI-Powered Intelligence
          </h3>
        </div>

        <div className="space-y-3 text-[13px] text-white/70">
          <p className="flex gap-3">
            <span className="text-[#f5b84b]">•</span>
            <span>Prioritize the right opportunities</span>
          </p>

          <p className="flex gap-3">
            <span className="text-[#f5b84b]">•</span>
            <span>Detect buying signals</span>
          </p>

          <p className="flex gap-3">
            <span className="text-[#f5b84b]">•</span>
            <span>Identify funnel leakage</span>
          </p>

          <p className="flex gap-3">
            <span className="text-[#f5b84b]">•</span>
            <span>Recommend next best actions</span>
          </p>

          <p className="flex gap-3">
            <span className="text-[#f5b84b]">•</span>
            <span>Track and improve performance</span>
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="w-full border-t border-[#241a2d] bg-[#0d0712] px-6 py-14 md:px-10 lg:px-16">
  <div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[32%_68%]">

    <div>
      <h2 className="font-serif text-3xl font-bold leading-[1.1] text-white md:text-[32px]">
        Sales Insights That Drive
        <br />
        Growth
      </h2>

      <p className="mt-4 max-w-[360px] text-[13px] leading-5 text-white/70">
        Insights from sales conversations help your entire business improve.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

      <div className="rounded-xl border border-[#2d2435] bg-[#17101f] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_28px_rgba(245,184,75,0.08)]">
        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M6 3H15L19 7V21H6V3Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M14 3V8H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 12H16M9 15H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-3 text-[12px] font-semibold text-white">
          Sales Insights
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-white/55">
          What we learn from
          <br />
          conversations
        </p>
      </div>

      <div className="rounded-xl border border-[#2d2435] bg-[#17101f] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_28px_rgba(245,184,75,0.08)]">
        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M5 8H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 5L5 8L8 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 16H5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 13L19 16L16 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="mt-3 text-[12px] font-semibold text-white">
          Marketing
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-white/55">
          Better targeting and messaging
        </p>
      </div>

      <div className="rounded-xl border border-[#2d2435] bg-[#17101f] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_28px_rgba(245,184,75,0.08)]">
        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M19 16L20 19L23 20L20 21L19 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="mt-3 text-[12px] font-semibold text-white">
          Better Leads
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-white/55">
          Higher quality opportunities
        </p>
      </div>

      <div className="rounded-xl border border-[#2d2435] bg-[#17101f] px-4 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_28px_rgba(245,184,75,0.08)]">
        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <circle
              cx="12"
              cy="12"
              r="8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 8V12L15 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="mt-3 text-[12px] font-semibold text-white">
          Better Conversion
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-white/55">
          More revenue from the same
          <br />
          spend
        </p>
      </div>

    </div>
  </div>
  </section>

  <section className="w-full border-t border-[#241a2d] bg-[#0d0712] px-6 py-16 md:px-10 lg:px-16">
  <div className="mx-auto max-w-[1400px]">

    <div className="text-center">
      <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#f5b84b]">
        Target Profiles
      </p>

      <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-white md:text-[44px]">
        Who Is This For?
      </h2>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* Already Generate Leads */}
      <div className="min-h-[165px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <circle
              cx="9"
              cy="8"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle
              cx="17"
              cy="9"
              r="2.2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M3 20C3 16.7 5.7 14 9 14C12.3 14 15 16.7 15 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M15 15C17.7 15.2 20 17.3 20 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[16px] font-bold text-white">
          Already Generate Leads
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Have a marketing team? We work alongside them.
        </p>
      </div>

      {/* Need More Sales Capacity */}
      <div className="min-h-[165px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <circle
              cx="10"
              cy="8"
              r="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M4 20C4 16.7 6.7 14 10 14C13.3 14 16 16.7 16 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 8V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 11H22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[16px] font-bold text-white">
          Need More Sales Capacity
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Have leads but limited sales bandwidth? We provide the execution.
        </p>
      </div>

      {/* Inconsistent Conversions */}
      <div className="min-h-[165px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M18 8C16.9 5.7 14.6 4 12 4C8.1 4 5 7.1 5 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5 7V11H9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 16C7.1 18.3 9.4 20 12 20C15.9 20 19 16.9 19 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 17V13H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[16px] font-bold text-white">
          Inconsistent Conversions
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Have a sales team but conversion is not consistent? We help fix the gaps.
        </p>
      </div>

      {/* Losing Opportunities */}
      <div className="min-h-[165px] rounded-xl border border-[#2d2435] bg-[#17101f] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8a6425] hover:shadow-[0_8px_30px_rgba(245,184,75,0.08)]">
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#62491f] bg-[#211827] text-[#f5b84b]">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <circle
              cx="11"
              cy="11"
              r="6"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M16 16L21 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 11H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[16px] font-bold text-white">
          Losing Opportunities
        </h3>

        <p className="mt-2 text-[12px] leading-[1.5] text-white/65">
          Generating leads but unsure where revenue is leaking? We investigate the funnel.
        </p>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}

export default ManagedSales;