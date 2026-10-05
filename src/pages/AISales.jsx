import { Link } from "react-router-dom";

import AiSalesHeroImage from "../assets/images/AiSalesHeroImage.webp";
import theChallangeBackground from "../assets/images/theChallangeBackground.webp";
import peopleAiBackgground from "../assets/images/peopleAiBackgground.webp";
import sellSmarterBackground from "../assets/images/sellSmarterBackground.webp";

import Education from "../assets/images/Education.webp";
import healthcare from "../assets/images/healthcare.webp";
import realEstate from "../assets/images/realEstate.webp";
import finance from "../assets/images/finance.webp";
import smarterGovernance from "../assets/images/smarterGovernance.webp";
import AndMore from "../assets/images/AndMore.webp";


function AISales() {
  return (
    <main className="w-full overflow-x-hidden bg-[#0d0713] text-[#f3e7d3]">

      {/* =========================================================
          1. AI SALES HERO
      ========================================================= */}

    <section className="relative w-full overflow-hidden bg-[#0d0713]">

      <div
        className="
          relative
          min-h-[700px]
          w-full
          bg-cover
          bg-center
          bg-no-repeat

          max-lg:min-h-[760px]

          max-md:min-h-0
          max-md:bg-[position:62%_center]

          max-sm:bg-[position:63%_center]
        "
        style={{
          backgroundImage: `url(${AiSalesHeroImage})`,
        }}
      >

        <div className="absolute inset-0 bg-[#0d0713]/10" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[700px]
            w-full
            max-w-[1500px]
            items-center
            px-[5%]
            py-16

            max-lg:min-h-[760px]

            /* MOBILE */
            max-md:min-h-0
            max-md:flex-col
            max-md:items-start
            max-md:px-5
            max-md:py-12

            max-sm:px-4
            max-sm:py-10
          "
        >

          {/* =====================================================
              LEFT HERO CONTENT
          ===================================================== */}
          <div
            className="
              relative
              z-20
              w-full
              max-w-[610px]

              /* IMPORTANT:
                On mobile this occupies the normal document flow.
              */
              max-md:max-w-[330px]
              max-sm:max-w-[310px]
            "
          >

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
                text-[12px]
                font-bold
                uppercase
                tracking-[1.2px]
                text-[#f5b84b]

                max-sm:mb-3
                max-sm:text-[10px]
              "
            >
              <span className="h-[7px] w-[7px] rounded-full bg-[#f5b84b]" />
              <span>AI SALES</span>
            </div>


            <h1
              className="
                max-w-[600px]
                font-serif
                text-[56px]
                font-bold
                leading-[0.98]
                tracking-[-1px]
                text-[#f3e7d3]

                /* desktop remains unchanged */

                max-md:text-[42px]
                max-md:leading-[0.98]
                max-md:tracking-[-0.5px]

                max-sm:text-[36px]
              "
            >
              Smarter Sales.
              <br />
              Real Business
              <br />
              <span className="italic text-[#f5b84b]">
                Outcomes.
              </span>
            </h1>


            <p
              className="
                mt-7
                max-w-[540px]
                text-[16px]
                leading-[1.55]
                text-[#ddd1df]

                max-md:mt-5
                max-md:max-w-[320px]
                max-md:text-[14px]
                max-md:leading-[1.5]

                max-sm:text-[13px]
              "
            >
              Sales Gate uses AI to help sales teams find the right
              opportunities, understand prospects and take the right
              actions — so you can grow faster with less guesswork.
            </p>


            {/* BUTTONS */}
            <div
              className="
                mt-7
                flex
                items-center
                gap-4

                max-md:mt-6
                max-sm:flex-col
                max-sm:items-stretch
                max-sm:gap-3
              "
            >

              <Link
                to="/about-us"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#f5b84b]
                  px-7
                  text-[14px]
                  font-semibold
                  !text-[#26160b]
                  shadow-[0_0_25px_rgba(245,184,75,0.18)]

                  max-sm:min-h-[46px]
                  max-sm:w-full
                  max-sm:text-[13px]
                "
              >
                <span className="!text-[#26160b]">
                  Book a Demo
                </span>

                <span className="!text-[#26160b]">
                  →
                </span>
              </Link>


              <a
                href="#approach"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#4a3a50]
                  bg-[#0d0713]/30
                  px-7
                  text-[14px]
                  font-semibold
                  text-[#f3e7d3]

                  max-sm:min-h-[46px]
                  max-sm:w-full
                  max-sm:text-[13px]
                "
              >
                See How It Works
              </a>

            </div>


            {/* =====================================================
                BENEFITS
            ===================================================== */}
            <div
              className="
                mt-9
                flex
                w-full
                max-w-[610px]
                border-t
                border-[#3a293d]
                pt-6

                /* MOBILE */
                max-md:mt-7
                max-md:grid
                max-md:grid-cols-3
                max-md:gap-2

                max-sm:grid-cols-1
                max-sm:gap-3
              "
            >

              {[
                {
                  icon: "search",
                  text: (
                    <>
                      Find the Right
                      <br />
                      Opportunities
                    </>
                  ),
                },
                {
                  icon: "star",
                  text: (
                    <>
                      Make Smarter
                      <br />
                      Decisions
                    </>
                  ),
                },
                {
                  icon: "chart",
                  text: (
                    <>
                      Drive Consistent
                      <br />
                      Growth
                    </>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="
                    flex
                    items-center
                    gap-3
                    border-r
                    border-[#3a293d]
                    pr-4

                    last:border-r-0

                    max-md:border-r-0
                    max-md:pr-0

                    max-sm:gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-[42px]
                      w-[42px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#76551d]
                      text-[#f5b84b]

                      max-sm:h-[38px]
                      max-sm:w-[38px]
                    "
                  >
                    {item.icon === "search" && "⌕"}
                    {item.icon === "star" && "✦"}
                    {item.icon === "chart" && "⌁"}
                  </div>

                  <p
                    className="
                      text-[13px]
                      leading-[1.35]
                      text-[#e5dbe7]

                      max-sm:text-[11px]
                    "
                  >
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>


          {/* =====================================================
              RIGHT HERO PANEL

              DESKTOP:
              absolute / over image

              MOBILE:
              normal flow / below hero content
          ===================================================== */}
          <div
            className="
              absolute
              right-[4%]
              top-1/2
              z-30
              w-[300px]
              -translate-y-1/2
              rounded-[18px]
              border
              border-[#80684b]/70
              bg-[#110b17]/65
              p-7
              shadow-[0_0_30px_rgba(0,0,0,0.2)]
              backdrop-blur-[5px]

              max-xl:right-[3%]
              max-xl:w-[280px]

              /* MOBILE RESET */
              max-md:static
              max-md:mt-10
              max-md:w-full
              max-md:max-w-[330px]
              max-md:translate-y-0
              max-md:self-start
              max-md:p-5

              max-sm:mt-8
              max-sm:max-w-[310px]
            "
          >

            <h2
              className="
                font-serif
                text-[28px]
                leading-[1.08]
                text-[#f3e7d3]

                max-md:text-[25px]
                max-sm:text-[23px]
              "
            >
              From Data
              <br />
              to{" "}
              <span className="text-[#f5b84b]">
                Direction.
              </span>
            </h2>


            <div className="mt-6 space-y-4">

              {[
                "Understand Prospects",
                "Identify Opportunities",
                "Get Clear Next Steps",
                "Close with Confidence",
              ].map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3

                    max-sm:gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#76551d]
                      text-[#f5b84b]

                      max-sm:h-[32px]
                      max-sm:w-[32px]
                    "
                  >
                    <span className="text-[15px]">
                      {index === 0 && "⌾"}
                      {index === 1 && "◎"}
                      {index === 2 && "◈"}
                      {index === 3 && "✓"}
                    </span>
                  </div>

                  <span
                    className="
                      text-[13px]
                      font-medium
                      text-[#e7dce7]

                      max-sm:text-[12px]
                    "
                  >
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>


      {/* =========================================================
          2. THE CHALLENGE
      ========================================================= */}
      <section
        id="challenge"
        className="relative w-full overflow-hidden border-t border-[#241b2b] bg-[#0d0713]"
      >

        <div
          className="
            relative
            min-h-[645px]
            w-full
            bg-cover
            bg-center
            bg-no-repeat

            max-lg:min-h-[760px]
            max-md:min-h-[820px]
            max-sm:min-h-[850px]
          "
          style={{
            backgroundImage: `url(${theChallangeBackground})`,
          }}
        >

          <div className="absolute inset-0 bg-[#0d0713]/20" />


          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[645px]
              w-full
              max-w-[1500px]
              items-center
              px-[5%]
              py-12

              max-lg:min-h-0
              max-lg:flex-col
              max-lg:items-start
              max-lg:justify-start
              max-lg:px-6
              max-lg:py-14

              max-md:px-6
              max-sm:px-5
            "
          >

            {/* LEFT */}
            <div
              className="
                relative
                z-20
                w-full
                max-w-[700px]

                max-lg:max-w-[650px]
              "
            >

              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[1.2px]
                  text-[#f5b84b]
                "
              >
                <span className="h-[7px] w-[7px] rounded-full bg-[#f5b84b]" />
                <span>THE CHALLENGE</span>
              </div>


              <h2
                className="
                  max-w-[700px]
                  font-serif
                  text-[48px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.5px]
                  text-[#f3e7d3]

                  max-lg:text-[40px]
                  max-md:text-[36px]
                  max-sm:text-[32px]
                "
              >
                More Conversations.
                <br />
                Same Uncertainty.
              </h2>


              <p
                className="
                  mt-7
                  max-w-[520px]
                  text-[16px]
                  leading-[1.55]
                  text-[#e0d6e4]

                  max-lg:mt-5
                  max-lg:text-[15px]
                  max-sm:text-[14px]
                "
              >
                Sales teams have more data, leads and conversations
                <br className="hidden lg:block" />
                than ever. But it's still hard to know:
              </p>


              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-4

                  max-lg:mt-6
                  max-lg:gap-3
                "
              >

                {[
                  "Which leads are worth your time?",
                  "What does this opportunity really mean?",
                  "What should we do next?",
                ].map((question) => (
                  <div
                    key={question}
                    className="flex items-center gap-5 max-sm:gap-4"
                  >

                    <span
                      className="
                        flex
                        h-[46px]
                        w-[46px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#f5b84b]
                        text-[20px]
                        font-bold
                        text-[#26160b]
                        shadow-[0_0_20px_rgba(245,184,75,0.16)]

                        max-lg:h-[42px]
                        max-lg:w-[42px]
                        max-lg:text-[18px]
                      "
                    >
                      ?
                    </span>

                    <span
                      className="
                        text-[16px]
                        text-[#f0e7dc]

                        max-lg:text-[15px]
                        max-sm:text-[14px]
                      "
                    >
                      {question}
                    </span>

                  </div>
                ))}

              </div>

            </div>


            {/* RIGHT MESSAGE */}
            <div
              className="
                absolute
                right-[6%]
                top-1/2
                z-20
                w-[350px]
                -translate-y-1/2

                max-xl:right-[4%]
                max-xl:w-[320px]

                max-lg:static
                max-lg:mt-14
                max-lg:w-full
                max-lg:max-w-[430px]
                max-lg:translate-y-0
                max-lg:self-end

                max-md:mt-16
                max-sm:mt-14
              "
            >

              <h3
                className="
                  font-serif
                  text-[40px]
                  font-medium
                  leading-[1.1]
                  text-[#f3e7d3]
                  drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]

                  max-lg:text-[34px]
                  max-md:text-[31px]
                  max-sm:text-[28px]
                "
              >
                Lots of data.
                <br />
                Fewer clear answers.
              </h3>

              <div
                className="
                  mt-7
                  h-[4px]
                  w-[42px]
                  bg-[#f5b84b]
                "
              />

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          3. OUR APPROACH
      ========================================================= */}
      <section
        id="approach"
        className="
          relative
          w-full
          overflow-hidden
          border-t
          border-[#241b2b]
          bg-[#0d0713]
        "
      >

        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-[5%]
            py-20

            max-lg:px-6
            max-lg:py-16

            max-sm:px-5
            max-sm:py-14
          "
        >

          <div
            className="
              grid
              grid-cols-[0.85fr_1.15fr]
              items-center
              gap-12

              max-lg:grid-cols-1
              max-lg:gap-14
            "
          >

            {/* LEFT */}
            <div>

              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[1.2px]
                  text-[#f5b84b]
                "
              >
                <span className="h-[7px] w-[7px] rounded-full bg-[#f5b84b]" />
                <span>OUR APPROACH</span>
              </div>


              <h2
                className="
                  max-w-[620px]
                  font-serif
                  text-[52px]
                  font-bold
                  leading-[1.02]
                  tracking-[-0.8px]
                  text-[#f3e7d3]

                  max-lg:text-[44px]
                  max-md:text-[38px]
                  max-sm:text-[32px]
                "
              >
                Turn Information
                <br />
                Into{" "}
                <span className="italic text-[#f5b84b]">
                  Intelligence.
                </span>
              </h2>


              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[16px]
                  leading-[1.55]
                  text-[#ddd1df]

                  max-sm:text-[14px]
                "
              >
                Sales Gate brings together data, AI and human insight
                to help you focus on what matters and move forward
                with clarity.
              </p>


              <a
                href="#industries"
                className="
                  mt-7
                  inline-flex
                  min-h-[58px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[14px]
                  bg-[#f5b84b]
                  px-8
                  text-[15px]
                  font-semibold
                  !text-[#26160b]
                  shadow-[0_0_28px_rgba(245,184,75,0.18)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#ffc65c]
                "
              >
                <span className="!text-[#26160b]">
                  Explore Our Approach
                </span>

                <span className="!text-[#26160b]">
                  →
                </span>
              </a>

            </div>


            {/* =================================================
                RINGS — ONLY 3 MAIN RINGS
                No tiny floating rings
            ================================================= */}
            <div className="relative">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-0

                  max-lg:justify-center
                  max-md:flex-col
                  max-md:gap-[-10px]
                "
              >

                {/* YOUR DATA */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-[310px]
                    w-[310px]
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#76551d]
                    bg-[#0d0713]/70
                    px-10
                    text-center

                    max-lg:h-[280px]
                    max-lg:w-[280px]

                    max-md:h-[240px]
                    max-md:w-[240px]
                  "
                >

                  <div className="mb-5 text-[#f5b84b]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="10" cy="9" r="3.5" />
                      <path d="M4 20c.7-3.6 2.7-5.5 6-5.5s5.3 1.9 6 5.5" />
                      <path d="M17 7h4" />
                      <path d="M19 5v4" />
                    </svg>
                  </div>

                  <h3
                    className="
                      font-serif
                      text-[28px]
                      font-bold
                      text-[#f3e7d3]

                      max-lg:text-[25px]
                      max-sm:text-[23px]
                    "
                  >
                    Your Data
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[210px]
                      text-[15px]
                      leading-[1.45]
                      text-[#ded3e0]

                      max-sm:text-[13px]
                    "
                  >
                    Leads, conversations,
                    <br />
                    accounts and activity.
                  </p>

                </div>


                {/* AI */}
                <div
                  className="
                    relative
                    z-20
                    -ml-8
                    flex
                    h-[390px]
                    w-[390px]
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#f5b84b]
                    bg-[#0d0713]/80
                    px-12
                    text-center
                    shadow-[0_0_45px_rgba(245,184,75,0.16)]

                    max-lg:h-[350px]
                    max-lg:w-[350px]

                    max-md:ml-0
                    max-md:-mt-8
                    max-md:h-[290px]
                    max-md:w-[290px]
                  "
                >

                  <div className="mb-2 text-[24px] text-[#f5b84b]">
                    +
                  </div>

                  <h3
                    className="
                      font-serif
                      text-[58px]
                      font-medium
                      leading-none
                      text-[#f5b84b]

                      max-lg:text-[52px]
                      max-sm:text-[44px]
                    "
                  >
                    AI
                  </h3>

                  <p
                    className="
                      mt-7
                      max-w-[220px]
                      text-[15px]
                      leading-[1.5]
                      text-[#ded3e0]

                      max-sm:text-[13px]
                    "
                  >
                    Analyses data,
                    <br />
                    finds patterns and
                    <br />
                    recommends next steps.
                  </p>

                </div>


                {/* YOUR TEAM */}
                <div
                  className="
                    relative
                    z-10
                    -ml-8
                    flex
                    h-[310px]
                    w-[310px]
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#76551d]
                    bg-[#0d0713]/70
                    px-10
                    text-center

                    max-lg:h-[280px]
                    max-lg:w-[280px]

                    max-md:ml-0
                    max-md:-mt-8
                    max-md:h-[240px]
                    max-md:w-[240px]
                  "
                >

                  <div className="mb-5 text-[#f5b84b]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5 20c.7-3.6 3-5.5 7-5.5s6.3 1.9 7 5.5" />
                      <path d="M4 8h3" />
                      <path d="M17 8h3" />
                    </svg>
                  </div>

                  <h3
                    className="
                      font-serif
                      text-[28px]
                      font-bold
                      text-[#f3e7d3]

                      max-lg:text-[25px]
                      max-sm:text-[23px]
                    "
                  >
                    Your Team
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[210px]
                      text-[15px]
                      leading-[1.45]
                      text-[#ded3e0]

                      max-sm:text-[13px]
                    "
                  >
                    Takes informed
                    <br />
                    action and builds
                    <br />
                    relationships.
                  </p>

                </div>

              </div>


              {/* Bottom statement BELOW rings */}
              <p
                className="
                  mt-12
                  text-center
                  font-serif
                  text-[27px]
                  font-bold
                  text-[#f5b84b]

                  max-lg:mt-10
                  max-md:text-[23px]
                  max-sm:text-[20px]
                "
              >
                Better Insights. Stronger Decisions. Real Growth.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          4. WHAT AI SALES HELPS YOU DO
      ========================================================= */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          border-t
          border-[#241b2b]
          bg-[#0d0713]
        "
      >

        {/* Fine top line */}
        <div className="h-px w-full bg-[#241b2b]" />

        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-[5%]
            py-14

            max-lg:px-6
            max-lg:py-12

            max-sm:px-5
            max-sm:py-10
          "
        >

          <div
            className="
              mb-8
              flex
              items-end
              justify-between
              gap-10

              max-lg:flex-col
              max-lg:items-start
              max-lg:gap-4
            "
          >

            <div>

              <p
                className="
                  mb-3
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[1.2px]
                  text-[#f5b84b]
                "
              >
                WHAT AI SALES HELPS YOU DO
              </p>

              <h2
                className="
                  font-serif
                  text-[42px]
                  font-bold
                  leading-[1.05]
                  text-[#f3e7d3]

                  max-lg:text-[36px]
                  max-sm:text-[30px]
                "
              >
                A Smarter Way to Sell.
              </h2>

            </div>


            <p
              className="
                max-w-[540px]
                text-[15px]
                leading-[1.5]
                text-[#d8cddc]

                max-lg:max-w-[650px]
                max-sm:text-[14px]
              "
            >
              Our AI capabilities are built around real sales challenges,
              helping your team work more efficiently and effectively.
            </p>

          </div>


          {/* FOUR CARDS */}
          <div
            className="
              grid
              grid-cols-4
              gap-5

              max-lg:grid-cols-2
              max-sm:grid-cols-1
            "
          >

            {[
              {
                title: "Identify Opportunities",
                text: "Surface high-potential leads and accounts.",
                icon: "search",
              },
              {
                title: "Understand Prospects",
                text: "Get relevant context before every conversation.",
                icon: "document",
              },
              {
                title: "Prioritise Efforts",
                text: "Focus on what's most likely to convert.",
                icon: "bulb",
              },
              {
                title: "Get Next Steps",
                text: "Receive clear, AI-driven recommendations.",
                icon: "gear",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[14px]
                  border
                  border-[#33253a]
                  bg-[#17101e]
                  p-7

                  max-sm:p-6
                "
              >

                <div
                  className="
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#76551d]
                    text-[#f5b84b]
                    shadow-[0_0_18px_rgba(245,184,75,0.08)]
                  "
                >

                  {item.icon === "search" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <circle cx="10" cy="10" r="5" />
                      <path d="m14 14 5 5" />
                    </svg>
                  )}

                  {item.icon === "document" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <rect x="6" y="3" width="12" height="18" rx="1" />
                      <path d="M9 8h6" />
                      <path d="M9 12h6" />
                      <path d="M9 16h4" />
                    </svg>
                  )}

                  {item.icon === "bulb" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M9 18h6" />
                      <path d="M10 21h4" />
                      <path d="M8 14a6 6 0 1 1 8 0c-.8.7-1.2 1.4-1.4 2H9.4c-.2-.6-.6-1.3-1.4-2Z" />
                    </svg>
                  )}

                  {item.icon === "gear" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19 12a7 7 0 0 0-.2-1.7l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2.9-1.7L13.3 2h-3.6l-.3 2.7a7 7 0 0 0-2.9 1.7l-2.3-1-2 3.4 2 1.5A7 7 0 0 0 4 12c0 .6.1 1.2.2 1.7l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2.9 1.7l.3 2.7h3.6l.3-2.7a7 7 0 0 0 2.9-1.7l2.3 1 2-3.4-2-1.5c.1-.5.2-1.1.2-1.7Z" />
                    </svg>
                  )}

                </div>


                <h3
                  className="
                    mt-6
                    font-serif
                    text-[20px]
                    font-bold
                    leading-[1.15]
                    text-[#f3e7d3]

                    max-sm:text-[19px]
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-[1.5]
                    text-[#cfc3d4]
                  "
                >
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          5. PEOPLE + AI
      ========================================================= */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          border-t
          border-[#241b2b]
          bg-[#0d0713]
        "
      >

        <div
          className="
            relative
            min-h-[480px]
            w-full
            bg-cover
            bg-center
            bg-no-repeat

            max-lg:min-h-[680px]
            max-md:min-h-[760px]
          "
          style={{
            backgroundImage: `url(${peopleAiBackgground})`,
          }}
        >

          <div className="absolute inset-0 bg-[#0d0713]/15" />


          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[480px]
              w-full
              max-w-[1500px]
              items-center
              px-[5%]
              py-12

              max-lg:min-h-[680px]
              max-lg:items-end
              max-lg:px-6
              max-lg:py-14

              max-md:min-h-[760px]
              max-sm:px-5
            "
          >

            {/* QUOTE */}
            <div
              className="
                absolute
                left-[5%]
                bottom-[8%]
                z-20
                max-w-[330px]

                max-lg:static
                max-lg:mb-8
                max-lg:max-w-[360px]

                max-sm:max-w-[300px]
              "
            >

              <blockquote
                className="
                  font-serif
                  text-[27px]
                  leading-[1.2]
                  text-[#f3e7d3]
                  drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]

                  max-sm:text-[23px]
                "
              >
                “AI gives us clarity.
                <br />
                Our people turn it
                <br />
                into opportunities.”
              </blockquote>


              <div
                className="
                  mt-5
                  h-[3px]
                  w-[38px]
                  bg-[#f5b84b]
                "
              />

            </div>


            {/* RIGHT CONTENT */}
            <div
              className="
                absolute
                right-[5%]
                top-1/2
                z-20
                w-[620px]
                -translate-y-1/2

                max-xl:w-[560px]

                max-lg:static
                max-lg:w-full
                max-lg:max-w-[650px]
                max-lg:translate-y-0
                max-lg:self-start
                max-lg:mb-8

                max-sm:max-w-full
              "
            >

              <p
                className="
                  mb-4
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[1.2px]
                  text-[#f5b84b]
                "
              >
                PEOPLE + AI
              </p>


              <h2
                className="
                  font-serif
                  text-[39px]
                  font-bold
                  leading-[1.06]
                  text-[#f3e7d3]

                  max-xl:text-[35px]
                  max-lg:text-[34px]
                  max-md:text-[30px]
                  max-sm:text-[27px]
                "
              >
                AI Strengthens
                <br />
                Your Team. It Doesn’t Replace It.
              </h2>


              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-[15px]
                  leading-[1.55]
                  text-[#ddd1df]

                  max-sm:text-[14px]
                "
              >
                AI handles the heavy lifting — analysing data, finding
                signals, and suggesting next steps. Your team brings the
                judgement, relationships and expertise that close deals.
              </p>


              {/* Three points */}
              <div
                className="
                  mt-7
                  grid
                  grid-cols-3
                  gap-7

                  max-md:grid-cols-1
                  max-md:gap-5
                "
              >

                {[
                  {
                    title: "AI for Insight",
                    icon: "✣",
                  },
                  {
                    title: "People for Impact",
                    icon: "♙",
                  },
                  {
                    title: "Growth Together",
                    icon: "✓",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center"
                  >

                    <div
                      className="
                        flex
                        h-[62px]
                        w-[62px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#76551d]
                        text-[26px]
                        text-[#f5b84b]
                      "
                    >
                      {item.icon}
                    </div>

                    <p
                      className="
                        mt-3
                        text-[14px]
                        font-medium
                        text-[#e5dbe7]
                      "
                    >
                      {item.title}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


{/* =========================================================
    INDUSTRIES SECTION
========================================================= */}
      <section className="w-full border-t border-[#2d2234] bg-[#0d0713]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-[5%]
            py-8

            max-md:px-6
            max-md:py-7

            max-sm:px-4
            max-sm:py-6
          "
        >

          {/* =====================================================
              HEADER
          ===================================================== */}
          <div
            className="
              grid
              grid-cols-2
              gap-10
              items-start

              max-md:grid-cols-1
              max-md:gap-3
            "
          >

            {/* LEFT CONTENT */}
            <div>
              <p
                className="
                  mb-2
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[1.4px]
                  text-[#f5b84b]

                  max-sm:text-[10px]
                "
              >
                BUILT FOR REAL BUSINESSES
              </p>

              <h2
                className="
                  font-serif
                  text-[40px]
                  font-bold
                  leading-[1.05]
                  text-[#f3e7d3]

                  max-lg:text-[36px]
                  max-md:text-[32px]
                  max-sm:text-[27px]
                  max-sm:leading-[1.08]
                "
              >
                Sales Intelligence That
                <br />
                Fits Your Industry.
              </h2>
            </div>


            {/* RIGHT CONTENT */}
            <div
              className="
                flex
                justify-end

                max-md:justify-start
              "
            >
              <p
                className="
                  max-w-[590px]
                  text-[15px]
                  leading-[1.5]
                  text-[#ded3e0]

                  max-md:max-w-[700px]
                  max-md:text-[14px]

                  max-sm:text-[12px]
                  max-sm:leading-[1.45]
                "
              >
                From high-growth startups to established enterprises,
                our AI sales capabilities adapt to your business, market
                and sales process.
              </p>
            </div>

          </div>


          {/* =====================================================
              INDUSTRIES ROW
              ICONS ONLY — NO IMAGES
          ===================================================== */}
          <div
            className="
              mt-7
              grid
              grid-cols-7
              border-t
              border-[#2d2234]

              max-lg:grid-cols-4
              max-md:mt-6
              max-sm:grid-cols-2
            "
          >

            {/* ===================================================
                TECHNOLOGY & SaaS
            =================================================== */}
            <div
              className="
                flex
                min-h-[112px]
                flex-col
                items-center
                justify-center
                border-r
                border-[#2d2234]
                text-center

                max-lg:border-b
                max-sm:min-h-[115px]
              "
            >
              {/* ICON */}
              <div
                className="
                  mb-3
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#76551d]
                  text-[#f5b84b]

                  max-sm:mb-2
                  max-sm:h-[38px]
                  max-sm:w-[38px]
                "
              >
                {/* Replace with your existing Technology icon */}
                <span className="text-[20px] max-sm:text-[17px]">
                  ♧
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-[1.3]
                  text-[#ded3e0]

                  max-sm:text-[11px]
                "
              >
                Technology
                <br />
                & SaaS
              </p>
            </div>


            {/* ===================================================
                FINANCIAL SERVICES
            =================================================== */}
            <div
              className="
                flex
                min-h-[112px]
                flex-col
                items-center
                justify-center
                border-r
                border-[#2d2234]
                text-center

                max-lg:border-b
                max-sm:min-h-[115px]
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#76551d]
                  text-[#f5b84b]

                  max-sm:mb-2
                  max-sm:h-[38px]
                  max-sm:w-[38px]
                "
              >
                <span className="text-[20px] max-sm:text-[17px]">
                  ▤
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-[1.3]
                  text-[#ded3e0]

                  max-sm:text-[11px]
                "
              >
                Financial Services
                <br />
                & Lending
              </p>
            </div>


            {/* ===================================================
                REAL ESTATE
            =================================================== */}
            <div
              className="
                flex
                min-h-[112px]
                flex-col
                items-center
                justify-center
                border-r
                border-[#2d2234]
                text-center

                max-lg:border-b
                max-sm:min-h-[115px]
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#76551d]
                  text-[#f5b84b]

                  max-sm:mb-2
                  max-sm:h-[38px]
                  max-sm:w-[38px]
                "
              >
                <span className="text-[19px] max-sm:text-[16px]">
                  ⌂
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-[1.3]
                  text-[#ded3e0]

                  max-sm:text-[11px]
                "
              >
                Real Estate
              </p>
            </div>


            {/* ===================================================
                EDUCATION & EDTECH
            =================================================== */}
            <div
              className="
                flex
                min-h-[112px]
                flex-col
                items-center
                justify-center
                border-r
                border-[#2d2234]
                text-center

                max-lg:border-b
                max-sm:min-h-[115px]
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#76551d]
                  text-[#f5b84b]

                  max-sm:mb-2
                  max-sm:h-[38px]
                  max-sm:w-[38px]
                "
              >
                <span className="text-[19px] max-sm:text-[16px]">
                  ◇
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-[1.3]
                  text-[#ded3e0]

                  max-sm:text-[11px]
                "
              >
                Education
                <br />
                & EdTech
              </p>
            </div>


            {/* ===================================================
                TRAVEL & HOSPITALITY
            =================================================== */}
            <div
              className="
                flex
                min-h-[112px]
                flex-col
                items-center
                justify-center
                border-r
                border-[#2d2234]
                text-center

                max-lg:border-b
                max-sm:min-h-[115px]
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#76551d]
                  text-[#f5b84b]

                  max-sm:mb-2
                  max-sm:h-[38px]
                  max-sm:w-[38px]
                "
              >
                <span className="text-[19px] max-sm:text-[16px]">
                  ↗
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-[1.3]
                  text-[#ded3e0]

                  max-sm:text-[11px]
                "
              >
                Travel & Hospitality
              </p>
            </div>


            {/* ===================================================
                CONSUMER BRANDS
            =================================================== */}
            <div
              className="
                flex
                min-h-[112px]
                flex-col
                items-center
                justify-center
                border-r
                border-[#2d2234]
                text-center

                max-lg:border-b
                max-sm:min-h-[115px]
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#76551d]
                  text-[#f5b84b]

                  max-sm:mb-2
                  max-sm:h-[38px]
                  max-sm:w-[38px]
                "
              >
                <span className="text-[19px] max-sm:text-[16px]">
                  ♧
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-[1.3]
                  text-[#ded3e0]

                  max-sm:text-[11px]
                "
              >
                Consumer Brands
                <br />
                & E-commerce
              </p>
            </div>


            {/* ===================================================
                VIEW ALL INDUSTRIES
            =================================================== */}
            <div
              className="
                flex
                min-h-[112px]
                flex-col
                items-center
                justify-center
                text-center

                max-lg:border-b
                max-sm:col-span-2
                max-sm:min-h-[95px]
              "
            >
              <div
                className="
                  mb-3
                  flex
                  h-[42px]
                  w-[42px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#76551d]
                  text-[20px]
                  text-[#f5b84b]

                  max-sm:mb-2
                  max-sm:h-[38px]
                  max-sm:w-[38px]
                  max-sm:text-[18px]
                "
              >
                →
              </div>

              <p
                className="
                  text-[12px]
                  leading-[1.3]
                  text-[#f5b84b]

                  max-sm:text-[11px]
                "
              >
                View All Industries
                <br />
                →
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          7. READY TO SELL SMARTER
      ========================================================= */}
      <section
        className="
          relative
          w-full
          overflow-hidden
          border-t
          border-[#241b2b]
          bg-[#0d0713]
        "
      >

        <div
          className="
            relative
            min-h-[370px]
            w-full
            bg-cover
            bg-center
            bg-no-repeat

            max-lg:min-h-[650px]
            max-md:min-h-[700px]
            max-sm:min-h-[730px]
          "
          style={{
            backgroundImage: `url(${sellSmarterBackground})`,
          }}
        >

          <div className="absolute inset-0 bg-[#0d0713]/10" />


          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[370px]
              w-full
              max-w-[1500px]
              items-center
              px-[5%]
              py-8

              max-lg:min-h-[650px]
              max-lg:flex-col
              max-lg:items-start
              max-lg:justify-center
              max-lg:px-6
              max-lg:py-14

              max-sm:px-5
            "
          >

            {/* LEFT CTA */}
            <div
              className="
                relative
                z-20
                w-full
                max-w-[720px]

                max-lg:max-w-[650px]
              "
            >

              <p
                className="
                  mb-3
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[1.2px]
                  text-[#f5b84b]
                "
              >
                READY TO SELL SMARTER?
              </p>


              <h2
                className="
                  max-w-[700px]
                  font-serif
                  text-[44px]
                  font-bold
                  leading-[1.02]
                  tracking-[-0.5px]
                  text-[#f3e7d3]

                  max-xl:text-[40px]
                  max-lg:text-[38px]
                  max-md:text-[34px]
                  max-sm:text-[30px]
                "
              >
                Let’s Turn Your Sales Potential
                <br />
                Into{" "}
                <span className="text-[#f5b84b]">
                  Real Growth.
                </span>
              </h2>


              <p
                className="
                  mt-4
                  max-w-[670px]
                  text-[16px]
                  leading-[1.5]
                  text-[#d5c9da]

                  max-lg:text-[15px]
                  max-sm:text-[14px]
                "
              >
                See how Sales Gate's AI sales can help your team find better opportunities,
                <br className="hidden lg:block" />
                make smarter decisions and achieve stronger results.
              </p>


              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-4

                  max-sm:flex-col
                  max-sm:items-stretch
                "
              >

                <Link
                  to="/about-us"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#f5b84b]
                    px-7
                    text-[14px]
                    font-semibold
                    !text-[#26160b]
                    shadow-[0_0_25px_rgba(245,184,75,0.18)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#ffc65c]

                    max-sm:w-full
                  "
                >
                  <span className="!text-[#26160b]">
                    Book a Demo
                  </span>

                  <span className="!text-[#26160b]">
                    →
                  </span>
                </Link>


                <Link
                  to="/about-us"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#4a3a50]
                    bg-[#0d0713]/30
                    px-7
                    text-[14px]
                    font-semibold
                    text-[#f3e7d3]
                    transition-all
                    duration-200
                    hover:border-[#f5b84b]
                    hover:text-[#f5b84b]

                    max-sm:w-full
                  "
                >
                  Talk to Our Team
                </Link>

              </div>

            </div>


            {/* =================================================
                RIGHT SIDE CONTENT

                DESKTOP:
                Positioned over the image.

                MOBILE:
                Normal flow below buttons.
            ================================================= */}
            <div
              className="
                absolute
                right-[2%]
                top-[58%]
                z-30
                w-[280px]
                -translate-y-1/2

                xl:right-[4%]
                xl:w-[300px]

                max-lg:static
                max-lg:mt-12
                max-lg:w-full
                max-lg:max-w-[300px]
                max-lg:translate-y-0
                max-lg:self-end

                max-sm:mt-10
                max-sm:max-w-[270px]
              "
            >

              <div
                className="
                  absolute
                  -inset-x-8
                  -inset-y-8
                  -z-10
                  rounded-2xl
                  bg-[#0d0713]/25
                  blur-[12px]
                "
              />

              <h3
                className="
                  relative
                  font-serif
                  text-[30px]
                  font-medium
                  leading-[1.1]
                  text-[#f5b84b]
                  drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]

                  max-lg:text-[28px]
                  max-sm:text-[25px]
                "
              >
                Higher
                <br />
                Opportunities.
                <br />
                Real Outcomes.
              </h3>


              <div
                className="
                  mt-4
                  h-[3px]
                  w-[36px]
                  bg-[#f5b84b]
                "
              />

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default AISales;