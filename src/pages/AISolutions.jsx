import { Link } from "react-router-dom";

import collaborateImage from "../assets/images/collaborateImage.webp";
import smarterGovernance from "../assets/images/smarterGovernance.webp";
import modernBusinesses from "../assets/images/modernBusinesses.webp";
import realSolutions from "../assets/images/realSolutions.webp";
import Education from "../assets/images/Education.webp";
import healthcare from "../assets/images/healthcare.webp";
import realEstate from "../assets/images/realEstate.webp";
import finance from "../assets/images/finance.webp";
import AndMore from "../assets/images/AndMore.webp";
import DemoButton from "../components/DemoButton";
import NationWideBackgroundImage from "../assets/images/NationWideBackgroundImage.webp";

function AISolutions() {
  const solutions = [
    {
      title: "AI Software",
      subtitle: "Custom Applications",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <rect
            x="5"
            y="6"
            width="14"
            height="11"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 20h8M9 17v3M15 17v3M9 10h6M9 13h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Websites & Digital Products",
      subtitle: "Modern Digital Experiences",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4 12h16M12 4c2 2.2 3 4.9 3 8s-1 5.8-3 8c-2-2.2-3-4.9-3-8s1-5.8 3-8Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "LLMs & Generative AI",
      subtitle: "Intelligent Solutions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Business Automation",
      subtitle: "Smarter Workflows",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M7 7h10M17 7l-2.5-2.5M17 7l-2.5 2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 17H7M7 17l2.5-2.5M7 17l2.5 2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Government & Public Sector",
      subtitle: "AI for Greater Impact",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M4 20h16M6 20V9h12v11M4 9l8-5 8 5M9 12v5M12 12v5M15 12v5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="w-full bg-[#0c0712] text-white">
      <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#0c0712]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(245,184,75,0.07),transparent_28%)]" />

        <div className="relative mx-auto grid min-h-[500px] w-[calc(100%-28px)] max-w-[1320px] items-center gap-7 py-8 sm:w-[calc(100%-40px)] lg:w-[calc(100%-52px)] lg:gap-10 lg:grid-cols-[1.08fr_0.92fr]">

          <div className="min-w-0">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b84b]/30 bg-[#f5b84b]/[0.04] px-3 py-1.5 text-[11px] font-bold tracking-[0.8px] text-[#f5b84b]">
              <span className="h-1 w-1 rounded-full bg-[#f5b84b] shadow-[0_0_8px_rgba(245,184,75,0.7)]" />
              AI SOLUTIONS
            </div>

            <h1 className="mt-5 max-w-[650px] font-serif text-[38px] font-bold leading-[0.98] sm:text-[48px] tracking-[-1.8px] text-[#f8f6f2] sm:text-[54px] lg:text-[64px]">
              Ideas to Impact.
              <br />
              <em className="font-medium text-[#f5b84b]">
                Built with AI.
              </em>
            </h1>

            <p className="mt-4 max-w-[590px] text-[14px] leading-[1.55] sm:mt-5 sm:text-[15px] text-[#aaa0bb] sm:text-[16px]">
              We design and build AI-powered software, websites and digital
              solutions for businesses, institutions and governments
              turning ideas into real-world impact.
            </p>

            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">

             <Link
              to="/about-us"
              className="w-full sm:w-auto inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full bg-[#ffc15c] px-6 text-[14px] font-semibold !text-[#26160b] shadow-[0_0_25px_rgba(255,193,92,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd27d] hover:shadow-[0_0_32px_rgba(255,193,92,0.28)]"
            >
              <span className="!text-[#26160b]">
                Discuss Your Idea
              </span>

              <span className="!text-[#26160b] text-[18px]">
                →
              </span>
            </Link>

              <Link
                to="/about-us"
                className="w-full sm:w-auto inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.015] px-6 text-[14px] font-semibold text-[#ddd7e6] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#f5b84b]/35 hover:text-white"
              >
                Talk to Our Team
              </Link>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 border-t border-white/[0.08] pt-5 sm:grid-cols-3 sm:gap-5">

              {/* CUSTOM SOLUTIONS */}

              <div className="flex items-start gap-2.5">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#f5b84b]/30 bg-[#f5b84b]/[0.045] text-[#f5b84b]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[18px] w-[18px]"
                  >
                    <path
                      d="M9 14h6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.5 17h5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.5 13.5C7.55 12.65 7 11.43 7 10.1C7 7.28 9.24 5 12 5s5 2.28 5 5.1c0 1.33-.55 2.55-1.5 3.4-.7.62-1.5 1.35-1.5 2.5h-4c0-1.15-.8-1.88-1.5-2.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2v1.5M4.93 4.93L6 6M2 10h1.5M19.07 4.93L18 6M22 10h-1.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <strong className="block text-[13px] leading-tight text-[#eeeaf2]">
                    Custom Solutions
                  </strong>

                  <span className="mt-1 block text-[11px] leading-tight text-[#81778f]">
                    Built around your goals.
                  </span>
                </div>

              </div>

              {/* END-TO-END DELIVERY */}

              <div className="flex items-start gap-2.5">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#f5b84b]/30 bg-[#f5b84b]/[0.045] text-[#f5b84b]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[18px] w-[18px]"
                  >
                    <path
                      d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M19 13.5v-3l-2-.45a7.1 7.1 0 0 0-.7-1.7l1.12-1.7-2.12-2.12-1.7 1.12a7.1 7.1 0 0 0-1.7-.7L11.45 3h-3l-.45 1.95a7.1 7.1 0 0 0-1.7.7L4.6 4.53 2.48 6.65 3.6 8.35a7.1 7.1 0 0 0-.7 1.7L1 10.5v3l1.9.45a7.1 7.1 0 0 0 .7 1.7l-1.12 1.7 2.12 2.12 1.7-1.12a7.1 7.1 0 0 0 1.7.7L8.45 21h3l.45-1.95a7.1 7.1 0 0 0 1.7-.7l1.7 1.12 2.12-2.12-1.12-1.7a7.1 7.1 0 0 0 .7-1.7L19 13.5Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <strong className="block text-[13px] leading-tight text-[#eeeaf2]">
                    End-to-End Delivery
                  </strong>

                  <span className="mt-1 block text-[11px] leading-tight text-[#81778f]">
                    From strategy to deployment.
                  </span>
                </div>

              </div>

              {/* REAL-WORLD IMPACT */}

              <div className="flex items-start gap-2.5">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#f5b84b]/30 bg-[#f5b84b]/[0.045] text-[#f5b84b]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[17px] w-[17px]"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="16"
                      cy="8"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    <path
                      d="M3 20c0-3 2-5 5-5s5 2 5 5M11 20c0-3 2-5 5-5s5 2 5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <strong className="block text-[13px] leading-tight text-[#eeeaf2]">
                    Real-World Impact
                  </strong>

                  <span className="mt-1 block text-[11px] leading-tight text-[#81778f]">
                    For businesses, institutions and communities.
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex min-w-0 items-center justify-center lg:justify-end">

            <div className="relative w-full max-w-[500px] overflow-hidden rounded-[20px] border border-[#f5b84b]/20 bg-[linear-gradient(145deg,rgba(35,25,48,0.96),rgba(17,11,25,0.98))] px-4 pb-5 pt-6 shadow-[inset_0_0_45px_rgba(255,255,255,0.015),0_20px_60px_rgba(0,0,0,0.2)] sm:px-5 sm:pb-6 sm:pt-9">

              <div className="pointer-events-none absolute right-[70px] top-[105px] h-[220px] w-[220px] rounded-full bg-[#f5b84b]/[0.07] blur-[45px]" />

              <div className="pointer-events-none absolute right-[52px] top-[145px] flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[#f5b84b]/25 opacity-70">

                <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#f5b84b]/20 text-2xl font-bold text-[#f5b84b] shadow-[0_0_30px_rgba(245,184,75,0.08)]">
                  AI
                </div>

              </div>

              <div className="relative z-10 flex flex-col gap-3">

                {solutions.map((solution) => (
                  <div
                    key={solution.title}
                    className="group flex min-h-[58px] items-center gap-3 rounded-[10px] border border-white/[0.07] bg-[#0c0712]/[0.84] px-3 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.16)] transition-all duration-200 hover:translate-x-1 hover:border-[#f5b84b]/35 hover:bg-[#160e1e]/[0.94]"
                  >

                    <div className="flex h-[29px] w-[29px] shrink-0 items-center justify-center rounded-md border border-[#f5b84b]/30 bg-[#f5b84b]/[0.08] text-[#f5b84b]">
                      {solution.icon}
                    </div>

                    <div className="flex min-w-0 flex-col">

                      <strong className="text-[12px] leading-tight text-[#e9e4ec]">
                        {solution.title}
                      </strong>

                      <span className="mt-0.5 text-[10px] leading-tight text-[#7e748c]">
                        {solution.subtitle}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

              <div className="relative z-10 mt-5 text-right font-serif text-[17px] italic text-[#e8a942]">
                From Ideas to a Smarter Tomorrow
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="w-full border-t border-white/[0.06] bg-[#0d0713] px-4 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
  <div className="mx-auto max-w-[1400px]">

    {/* Section Heading */}
    <div className="mx-auto max-w-[900px] text-center">
      <div className="mb-3 flex items-center justify-center gap-3">
        <span className="h-1 w-1 rounded-full bg-[#f5b84b]" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#f5b84b]">
          OUR CAPABILITIES
        </span>
        <span className="h-1 w-1 rounded-full bg-[#f5b84b]" />
      </div>

      <h2 className="font-serif text-[30px] font-bold leading-[1.1] text-white sm:text-[36px] lg:text-[34px]">
        One Partner. Endless Possibilities.
      </h2>

      <p className="mx-auto mt-4 max-w-[850px] text-[14px] leading-6 text-[#aaa0bd] sm:text-[15px]">
        From custom AI software to modern websites, from LLM-powered solutions
        to government initiatives we help you turn your vision into
        meaningful, real-world solutions.
      </p>
    </div>

    {/* Capability Cards */}
    <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-5">

      {/* AI Software */}
      <div className="group flex min-h-[244px] flex-col rounded-[14px] border border-[#2b2034] bg-[#171020] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b84b]/50 hover:shadow-[0_10px_35px_rgba(245,184,75,0.08)]">

        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[9px] border border-[#76541e] bg-[#211a20] text-[#f5b84b] transition-all duration-300 group-hover:border-[#f5b84b] group-hover:bg-[#2b211b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <rect
              x="5"
              y="5"
              width="14"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9 2V5M15 2V5M9 19V22M15 19V22M19 9H22M19 14H22M2 9H5M2 14H5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 9H15V15H9V9Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold leading-[1.15] text-white">
          AI Software
        </h3>

        <p className="mt-3 text-[11px] leading-[1.55] text-[#aaa0bd]">
          Custom AI applications designed for your unique business challenges.
        </p>

        <div className="mt-auto pt-5">
          <span className="text-[11px] font-medium text-[#f5b84b] transition-all duration-200 group-hover:tracking-wide">
            Explore →
          </span>
        </div>
      </div>

      {/* Websites & Digital Products */}
      <div className="group flex min-h-[244px] flex-col rounded-[14px] border border-[#2b2034] bg-[#171020] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b84b]/50 hover:shadow-[0_10px_35px_rgba(245,184,75,0.08)]">

        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[9px] border border-[#76541e] bg-[#211a20] text-[#f5b84b] transition-all duration-300 group-hover:border-[#f5b84b] group-hover:bg-[#2b211b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="13"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 21H16M12 17V21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold leading-[1.15] text-white">
          Websites & Digital
          <br />
          Products
        </h3>

        <p className="mt-3 text-[11px] leading-[1.55] text-[#aaa0bd]">
          Modern websites, web applications and digital platforms that create
          real value.
        </p>

        <div className="mt-auto pt-5">
          <span className="text-[11px] font-medium text-[#f5b84b] transition-all duration-200 group-hover:tracking-wide">
            Explore →
          </span>
        </div>
      </div>

      {/* AI Automation */}
      <div className="group flex min-h-[244px] flex-col rounded-[14px] border border-[#2b2034] bg-[#171020] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b84b]/50 hover:shadow-[0_10px_35px_rgba(245,184,75,0.08)]">

        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[9px] border border-[#76541e] bg-[#211a20] text-[#f5b84b] transition-all duration-300 group-hover:border-[#f5b84b] group-hover:bg-[#2b211b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M13 2L4 13H11L10 22L20 10H13L13 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold leading-[1.15] text-white">
          AI Automation
        </h3>

        <p className="mt-3 text-[11px] leading-[1.55] text-[#aaa0bd]">
          Automate processes, reduce manual work and improve productivity with
          AI.
        </p>

        <div className="mt-auto pt-5">
          <span className="text-[11px] font-medium text-[#f5b84b] transition-all duration-200 group-hover:tracking-wide">
            Explore →
          </span>
        </div>
      </div>

      {/* LLMs & Generative AI */}
      <div className="group flex min-h-[244px] flex-col rounded-[14px] border border-[#2b2034] bg-[#171020] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b84b]/50 hover:shadow-[0_10px_35px_rgba(245,184,75,0.08)]">

        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[9px] border border-[#76541e] bg-[#211a20] text-[#f5b84b] transition-all duration-300 group-hover:border-[#f5b84b] group-hover:bg-[#2b211b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <ellipse
              cx="12"
              cy="5"
              rx="7"
              ry="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5 5V12C5 13.66 8.13 15 12 15C15.87 15 19 13.66 19 12V5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5 12V19C5 20.66 8.13 22 12 22C15.87 22 19 20.66 19 19V12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold leading-[1.15] text-white">
          LLMs & Generative
          <br />
          AI
        </h3>

        <p className="mt-3 text-[11px] leading-[1.55] text-[#aaa0bd]">
          Leverage the power of large language models to build intelligent,
          conversational and creative solutions.
        </p>

        <div className="mt-auto pt-5">
          <span className="text-[11px] font-medium text-[#f5b84b] transition-all duration-200 group-hover:tracking-wide">
            Explore →
          </span>
        </div>
      </div>

      {/* Government & Public Sector */}
      <div className="group flex min-h-[244px] flex-col rounded-[14px] border border-[#2b2034] bg-[#171020] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b84b]/50 hover:shadow-[0_10px_35px_rgba(245,184,75,0.08)]">

        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[9px] border border-[#76541e] bg-[#211a20] text-[#f5b84b] transition-all duration-300 group-hover:border-[#f5b84b] group-hover:bg-[#2b211b]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M4 21H20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 21V7L12 3L18 7V21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 10V13M12 10V13M15 10V13M9 16V19M12 16V19M15 16V19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="font-serif text-[17px] font-bold leading-[1.15] text-white">
          Government &
          <br />
          Public Sector
        </h3>

        <p className="mt-3 text-[11px] leading-[1.55] text-[#aaa0bd]">
          AI solutions for smarter governance, better citizen services and
          inclusive growth.
        </p>

        <div className="mt-auto pt-5">
          <span className="text-[11px] font-medium text-[#f5b84b] transition-all duration-200 group-hover:tracking-wide">
            Explore →
          </span>
        </div>
      </div>

    </div>
  </div>
      </section>

      <section className="w-full bg-[#0d0713] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-[40%_60%] lg:items-center lg:gap-8">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f5b84b]" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#f5b84b]">
                WHAT WE BUILD
              </span>
            </div>

            <h2 className="font-serif text-[34px] font-bold leading-[1.08] sm:text-[42px] text-white sm:text-[46px] lg:text-[50px]">
              Technology for Real-
              <br />
              World Impact.
            </h2>

            <p className="mt-4 max-w-[600px] text-[14px] leading-6 text-[#aaa0bd] sm:mt-6 sm:text-[16px] sm:leading-7 lg:text-[17px]">
              We combine AI, design and engineering to build scalable solutions that
              solve real problems for today and tomorrow.
            </p>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b]">
                  ✓
                </span>
                <span className="text-[13px] font-medium text-white/90 sm:text-[15px]">
                  AI-Powered Applications
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b]">
                  ✓
                </span>
                <span className="text-[13px] font-medium text-white/90 sm:text-[15px]">
                  Web & Mobile Platforms
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b]">
                  ✓
                </span>
                <span className="text-[13px] font-medium text-white/90 sm:text-[15px]">
                  LLM-Based Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b]">
                  ✓
                </span>
                <span className="text-[13px] font-medium text-white/90 sm:text-[15px]">
                  Process Automation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b]">
                  ✓
                </span>
                <span className="text-[13px] font-medium text-white/90 sm:text-[15px]">
                  Data & Analytics Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b]">
                  ✓
                </span>
                <span className="text-[13px] font-medium text-white/90 sm:text-[15px]">
                  End-to-End Implementation
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">

            {/* COLLABORATE */}
            <div className="group relative aspect-[1.72/1] overflow-hidden rounded-[16px] border border-white/10">
              <img
                src={collaborateImage}
                alt="Collaborate. Build. Innovate."
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#09050d]/90 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
                <h3 className="text-[13px] font-bold leading-tight text-white sm:text-[20px] lg:text-[22px]">
                  Collaborate. Build. Innovate.
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-[#f5b84b]" />
              </div>
            </div>

            {/* SMARTER GOVERNANCE */}
            <div className="group relative aspect-[1.72/1] overflow-hidden rounded-[16px] border border-white/10">
              <img
                src={smarterGovernance}
                alt="Smarter Governance with AI"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#09050d]/90 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
                <h3 className="max-w-[260px] text-[13px] font-bold leading-tight text-white sm:text-[20px] lg:text-[22px]">
                  Smarter Governance
                  <br />
                  with AI
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-[#f5b84b]" />
              </div>
            </div>

            {/* MODERN DIGITAL EXPERIENCES */}
            <div className="group relative aspect-[1.72/1] overflow-hidden rounded-[16px] border border-white/10">
              <img
                src={modernBusinesses}
                alt="Modern Digital Experiences for Modern Businesses"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#09050d]/90 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
                <h3 className="max-w-[310px] text-[13px] font-bold leading-tight text-white sm:text-[20px] lg:text-[22px]">
                  Modern Digital Experiences
                  <br />
                  for Modern Businesses
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-[#f5b84b]" />
              </div>
            </div>

            {/* REAL SOLUTIONS */}
            <div className="group relative aspect-[1.72/1] overflow-hidden rounded-[16px] border border-white/10">
              <img
                src={realSolutions}
                alt="From Possibilities to Real Solutions"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#09050d]/90 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
                <h3 className="max-w-[280px] text-[13px] font-bold leading-tight text-white sm:text-[20px] lg:text-[22px]">
                  From Possibilities
                  <br />
                  to Real Solutions
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-[#f5b84b]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="w-full bg-[#0d0713] px-4 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1400px]">

        <div className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#f5b84b]">
            OUR APPROACH
          </p>

          <h2 className="mt-2 font-serif text-[34px] font-bold leading-tight text-white sm:text-[38px] lg:text-[40px]">
            From Idea to Implementation.
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-[15px] leading-6 text-[#aaa0bd] sm:text-[16px]">
            We follow a structured, collaborative approach to ensure your solution
            is practical, scalable and impactful.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-5">

          {/* Understand */}
          <div className="group rounded-[12px] border border-[#2b2135] bg-[#171020] px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8b641f] hover:shadow-[0_0_28px_rgba(245,184,75,0.12)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b] transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(245,184,75,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
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

            <h3 className="mt-4 font-serif text-[16px] font-bold text-white">
              Understand
            </h3>

            <p className="mt-1 text-[12px] leading-5 text-[#aaa0bd]">
              Your goals and challenges
            </p>
          </div>

          {/* Design */}
          <div className="group rounded-[12px] border border-[#2b2135] bg-[#171020] px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8b641f] hover:shadow-[0_0_28px_rgba(245,184,75,0.12)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b] transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(245,184,75,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M4 20L8.5 18.5L19 8L16 5L5.5 15.5L4 20Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 6.5L17.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </div>

            <h3 className="mt-4 font-serif text-[16px] font-bold text-white">
              Design
            </h3>

            <p className="mt-1 text-[12px] leading-5 text-[#aaa0bd]">
              A tailored solution strategy
            </p>
          </div>

          {/* Build */}
          <div className="group rounded-[12px] border border-[#2b2135] bg-[#171020] px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8b641f] hover:shadow-[0_0_28px_rgba(245,184,75,0.12)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b] transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(245,184,75,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M8 8L4 12L8 16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8L20 12L16 16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 5L10 19"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mt-4 font-serif text-[16px] font-bold text-white">
              Build
            </h3>

            <p className="mt-1 text-[12px] leading-5 text-[#aaa0bd]">
              Develop and test with precision
            </p>
          </div>

          {/* Deploy */}
          <div className="group rounded-[12px] border border-[#2b2135] bg-[#171020] px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8b641f] hover:shadow-[0_0_28px_rgba(245,184,75,0.12)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b] transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(245,184,75,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M4 14L9 9L13 13L20 6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 6H20V11"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mt-4 font-serif text-[16px] font-bold text-white">
              Deploy
            </h3>

            <p className="mt-1 text-[12px] leading-5 text-[#aaa0bd]">
              Implement and integrate seamlessly
            </p>
          </div>

          {/* Support */}
          <div className="group rounded-[12px] border border-[#2b2135] bg-[#171020] px-5 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#8b641f] hover:shadow-[0_0_28px_rgba(245,184,75,0.12)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#76541e] text-[#f5b84b] transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(245,184,75,0.25)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <path
                  d="M4 13V11C4 6.58 7.58 3 12 3C16.42 3 20 6.58 20 11V13"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M4 13H3C2.45 13 2 13.45 2 14V17C2 17.55 2.45 18 3 18H4C5.1 18 6 17.1 6 16V15C6 13.9 5.1 13 4 13Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M20 13H21C21.55 13 22 13.45 22 14V17C22 17.55 21.55 18 21 18H20C18.9 18 18 17.1 18 16V15C18 13.9 18.9 13 20 13Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M20 18C19 20 17 21 14 21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mt-4 font-serif text-[16px] font-bold text-white">
              Support
            </h3>

            <p className="mt-1 text-[12px] leading-5 text-[#aaa0bd]">
              Stay with you as you grow
            </p>
          </div>

        </div>
      </div>
      </section>

      <section className="w-full bg-[#0d0713] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-[1400px]">

          <div className="mb-10 text-center">
            <span className="mb-2 block text-[12px] font-bold tracking-[0.8px] text-[#f5b84b]">
              • SOLUTIONS ACROSS INDUSTRIES
            </span>

            <h2 className="font-serif text-[30px] font-bold leading-tight text-white">
              Building a Smarter Future Across Sectors.
            </h2>

            <p className="mt-3 text-[14px] leading-relaxed text-[#b8abc9]">
              Our AI solutions are designed to create value across businesses,
              institutions and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">

            {[
              {
                image: Education,
                title: "Education",
                description: "AI for better learning experiences",
              },
              {
                image: healthcare,
                title: "Healthcare",
                description: "Intelligent solutions for improved care",
              },
              {
                image: realEstate,
                title: "Real Estate",
                description: "Digital platforms for modern real estate",
              },
              {
                image: finance,
                title: "Finance",
                description: "Automation and insights for smarter decisions",
              },
              {
                image: smarterGovernance,
                title: "Government",
                description: "AI for citizen services and smarter governance",
              },
              {
                image: AndMore,
                title: "And More",
                description: "Exploring new possibilities together",
              },
            ].map((industry) => (
              <div
                key={industry.title}
                className="min-w-0 overflow-hidden rounded-xl border border-[#302438] bg-[#17101f] transition-all duration-300 hover:-translate-y-1 hover:border-[#76541e] hover:shadow-[0_0_24px_rgba(245,184,75,0.12)]"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="block h-[150px] w-full object-cover sm:h-[140px] lg:h-[105px]"
                />

                <div className="p-3.5">
                  <h3 className="font-serif text-[16px] font-bold leading-tight text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-1.5 min-h-[38px] text-[11px] leading-[1.4] text-[#b8abc9]">
                    {industry.description}
                  </p>

                  <a
                    href="#"
                    className="break-words text-[11px] font-semibold text-[#f5b84b] transition-colors hover:text-[#ffd27d]"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

<section className="w-full px-4 py-12 sm:px-6 sm:py-16">
  <div
    className="relative mx-auto min-h-[360px] max-w-[1400px] overflow-hidden rounded-[20px] border border-[#3a2b40] bg-cover bg-center"
    style={{
      backgroundImage: `linear-gradient(
        90deg,
        rgba(13, 7, 19, 0.92) 0%,
        rgba(13, 7, 19, 0.82) 40%,
        rgba(13, 7, 19, 0.55) 72%,
        rgba(13, 7, 19, 0.62) 100%
      ), url(${NationWideBackgroundImage})`,
    }}
  >
    <div className="grid min-h-[360px] grid-cols-1 items-start gap-6 px-6 py-8 sm:gap-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-10 lg:px-12">
      <div className="max-w-[520px]">
        <div className="mb-5 flex items-center gap-2 text-[11px] font-bold tracking-[0.7px] text-[#f5b84b]">
          <span className="text-[9px]">●</span>
          NATIONWIDE IMPACT
        </div>

        <h2 className="max-w-[500px] font-serif text-[32px] font-bold leading-[1.05] text-[#f3e7d3] sm:text-[38px]">
          India's AI-Enabled
          <br />
          Future
        </h2>

        <p className="mt-4 max-w-[500px] text-[13px] leading-[1.55] sm:mt-5 sm:text-[14px] text-[#c4b7cf]">
          Exploring how AI can enable smarter governance, better citizen
          services and inclusive growth for a stronger India.
        </p>

        <Link
          to="/about-us"
          className="mt-6 inline-flex min-h-[42px] items-center justify-center gap-3 rounded-full bg-[#ffc15c] px-6 text-[12px] font-semibold !text-[#26160b] shadow-[0_0_25px_rgba(255,193,92,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd27d] hover:!text-[#26160b] hover:shadow-[0_0_32px_rgba(255,193,92,0.28)]"
        >
          Learn More
          <span className="text-[16px] !text-[#26160b]">→</span>
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex min-h-[44px] items-center gap-3 rounded-xl border border-[#33263b] bg-[#100a16]/90 px-4 backdrop-blur-sm">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#61491f] bg-[#241a24] text-[#f5b84b]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M4 20V5L12 3L20 5V20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 20V14H16V20"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 8H8.01M12 8H12.01M16 8H16.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-[12px] font-semibold text-[#d6c9dc]">
            Intelligent Governance
          </span>
        </div>

        <div className="flex min-h-[44px] items-center gap-3 rounded-xl border border-[#33263b] bg-[#100a16]/90 px-4 backdrop-blur-sm">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#61491f] bg-[#241a24] text-[#f5b84b]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
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
                r="2.5"
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
                d="M15 15C17.8 15 20 17.2 20 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-[12px] font-semibold text-[#d6c9dc]">
            Citizen Services
          </span>
        </div>

        <div className="flex min-h-[44px] items-center gap-3 rounded-xl border border-[#33263b] bg-[#100a16]/90 px-4 backdrop-blur-sm">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#61491f] bg-[#241a24] text-[#f5b84b]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M4 20V10L12 4L20 10V20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 20V14H15V20"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <span className="text-[12px] font-semibold text-[#d6c9dc]">
            Smart Cities
          </span>
        </div>

        <div className="flex min-h-[44px] items-center gap-3 rounded-xl border border-[#33263b] bg-[#100a16]/90 px-4 backdrop-blur-sm">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#61491f] bg-[#241a24] text-[#f5b84b]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M5 20V5H19V20"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 8H16M8 12H16M8 16H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className="text-[12px] font-semibold text-[#d6c9dc]">
            AI Skills & Awareness
          </span>
        </div>

        <div className="flex min-h-[44px] items-center gap-3 rounded-xl border border-[#33263b] bg-[#100a16]/90 px-4 backdrop-blur-sm">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#61491f] bg-[#241a24] text-[#f5b84b]">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M4 17L9 12L13 15L20 7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 7H20V12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="text-[12px] font-semibold text-[#d6c9dc]">
            Inclusive Growth
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="w-full border-t border-[#21182a] bg-[#0d0713] px-4 py-12 sm:px-6 sm:py-16">
  <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 sm:gap-12 lg:flex-row lg:items-center">
    <div className="max-w-[720px]">
      <span className="mb-5 block text-[11px] font-bold tracking-[0.7px] text-[#f5b84b]">
        LET'S BUILD TOGETHER
      </span>

      <h2 className="font-serif text-[38px] font-bold leading-[1.1] text-[#f3e7d3]">
        Turn Your Ideas Into Impact.
      </h2>

      <p className="mt-4 max-w-[700px] text-[14px] leading-[1.55] text-[#c4b7cf]">
        Whether it's an AI application, a website, a business solution or a
        government initiative we're here to help you turn your ideas into
        impact.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <DemoButton
          className="w-full sm:w-auto inline-flex min-h-[42px] items-center justify-center gap-3 rounded-full bg-[#ffc15c] px-6 text-[12px] font-semibold !text-[#26160b] shadow-[0_0_25px_rgba(255,193,92,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffd27d] hover:!text-[#26160b] hover:shadow-[0_0_32px_rgba(255,193,92,0.28)]"
        >
          Book a Demo
          <span className="text-[16px] !text-[#26160b]">→</span>
        </DemoButton>

        <Link
          to="/about-us"
          className="w-full sm:w-auto inline-flex min-h-[42px] items-center justify-center rounded-full border border-[#392d45] bg-[#120b18] px-6 text-[12px] font-semibold !text-[#d6c9dc] transition-all duration-200 hover:border-[#76541e] hover:!text-[#f5b84b]"
        >
          Talk to Our Team
        </Link>
      </div>

    <div className="relative flex h-[170px] w-full max-w-[250px] shrink-0 items-center justify-center self-center sm:h-[190px] lg:w-[250px] lg:self-auto">
      <div className="absolute h-[185px] w-[185px] rounded-full border border-[#4a3718]" />

      <div className="absolute h-[145px] w-[145px] rounded-full border border-[#2d2235]" />

      <div className="relative z-10 max-w-[130px] text-center font-serif text-[19px] italic leading-[1.45] text-[#f5b84b]">
        Let's Build
        <br />
        a Smarter
        <br />
        Tomorrow
      </div>

      <div className="absolute left-[18px] top-[8px] flex h-8 w-8 items-center justify-center rounded-full border border-[#61491f] bg-[#130c19] text-[#f5b84b]">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute right-[5px] top-[18px] flex h-8 w-8 items-center justify-center rounded-full border border-[#61491f] bg-[#130c19] text-[#f5b84b]">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M12 3V5M12 19V21M4.9 4.9L6.3 6.3M17.7 17.7L19.1 19.1M3 12H5M19 12H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="absolute bottom-[18px] left-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#61491f] bg-[#130c19] text-[#f5b84b]">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <rect
            x="4"
            y="6"
            width="16"
            height="11"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 20H16M12 17V20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-[10px] right-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#61491f] bg-[#130c19] text-[#f5b84b]">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <circle
            cx="8"
            cy="8"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="16"
            cy="8"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="12"
            cy="15"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M5 18C5.5 15.8 7.1 14.5 9 14.5M19 18C18.5 15.8 16.9 14.5 15 14.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
  </div>
</section>


    </main>
  );
}

export default AISolutions;