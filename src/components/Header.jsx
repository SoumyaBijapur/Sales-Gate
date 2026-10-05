import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SalesGateLogo from "../assets/logo/Sales_gate_mainLogo.png";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "AI Sales",
      path: "/ai-sales",
    },
    {
      name: "AI Solutions",
      path: "/ai-solutions",
    },
    {
      name: "Managed Sales",
      path: "/managed-sales",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative w-full border-b border-[#2a1d35] bg-[#100819]">

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}
      <div className="mx-auto flex h-[84px] max-w-[1400px] items-center px-6 md:px-8">

        {/* =================================================
            LOGO
        ================================================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={SalesGateLogo}
            alt="Sales Gate"
            className="block h-[56px] w-auto object-contain md:h-[62px]"
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}
        <nav
          className="
            absolute
            left-1/2
            top-1/2
            hidden
            -translate-x-1/2
            -translate-y-1/2
            items-center
            gap-8
            lg:flex
          "
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  relative
                  whitespace-nowrap
                  py-2
                  text-[15px]
                  font-medium
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "text-[#f5b84b]"
                      : "text-white/75 hover:text-white"
                  }

                  ${
                    isActive
                      ? "after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#f5b84b] after:shadow-[0_0_8px_rgba(245,184,75,0.45)]"
                      : ""
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>


        {/* =================================================
            DESKTOP BOOK A DEMO
        ================================================= */}
        <div className="ml-auto hidden lg:block">
          <button
            type="button"
            className="
              rounded-full
              bg-[#ffc15c]
              px-8
              py-3
              text-[15px]
              font-medium
              text-[#26160b]
              shadow-[0_0_25px_rgba(255,193,92,0.20)]
              transition-all
              duration-200
              hover:bg-[#ffd27d]
              hover:shadow-[0_0_35px_rgba(255,193,92,0.30)]
            "
          >
            Book a Demo
          </button>
        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            ml-auto
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            text-white
            transition-colors
            duration-200
            hover:border-[#f5b84b]/40
            hover:text-[#f5b84b]
            lg:hidden
          "
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-2xl leading-none">☰</span>
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}
      {menuOpen && (
        <div
          className="
            border-t
            border-[#2a1d35]
            bg-[#100819]
            lg:hidden
          "
        >
          <nav className="flex flex-col px-6 py-5">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`
                    relative
                    border-b
                    border-white/5
                    py-4
                    text-[15px]
                    font-medium
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "text-[#f5b84b]"
                        : "text-white/75 hover:text-white"
                    }
                  `}
                >
                  <span className="flex items-center justify-between">
                    {link.name}

                    {/* Active indicator */}
                    {isActive && (
                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-[#f5b84b]
                          shadow-[0_0_10px_rgba(245,184,75,0.65)]
                        "
                      />
                    )}
                  </span>
                </Link>
              );
            })}


            {/* =================================================
                MOBILE BOOK A DEMO
            ================================================= */}
            <button
              type="button"
              className="
                mt-5
                w-full
                rounded-full
                bg-[#ffc15c]
                px-6
                py-3
                text-[15px]
                font-medium
                text-[#26160b]
                shadow-[0_0_20px_rgba(255,193,92,0.18)]
                transition-all
                duration-200
                hover:bg-[#ffd27d]
              "
            >
              Book a Demo
            </button>

          </nav>
        </div>
      )}

    </header>
  );
}

export default Header;