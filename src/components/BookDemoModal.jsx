import { useEffect, useState } from "react";

const LOOKING_FOR_OPTIONS = [
  "AI Sales",
  "AI Solutions",
  "Managed Sales",
  "AI Automation",
  "Not sure — I’d like to discuss",
];

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.6-3.5 2.8-5.5 6.5-5.5s5.9 2 6.5 5.5" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function CompanyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 21V4.5L14 3v18" />
      <path d="M14 8h5v13" />
      <path d="M8 8h2M8 12h2M8 16h2M16.5 12h1M16.5 16h1" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3.5 9 3l2 5-2.2 1.8a14.2 14.2 0 0 0 5.4 5.4L16 13l5 2-.5 2.5c-.3 1.7-1.8 3-3.6 3C10.2 20.5 3.5 13.8 3.5 5.8c0-1.8 1.3-3.3 3-3.6Z" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5.5V11l8.5 8.5a2 2 0 0 0 2.8 0l3.2-3.2a2 2 0 0 0 0-2.8L10 5H4.5A.5.5 0 0 0 4 5.5Z" />
      <circle cx="8" cy="8" r="1" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <div className="demo-success-icon" aria-hidden="true">
      <span className="demo-success-sparkle sparkle-one">✦</span>
      <span className="demo-success-sparkle sparkle-two">✦</span>
      <span className="demo-success-sparkle sparkle-three">✦</span>

      <div className="demo-success-circle">
        <svg viewBox="0 0 48 48" fill="none">
          <path
            d="M13 24.5 20.5 32 36 16"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function BookDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    lookingFor: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove("demo-modal-open");
      return;
    }

    document.body.classList.add("demo-modal-open");

    return () => {
      document.body.classList.remove("demo-modal-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
      setDropdownOpen(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleOptionSelect = (option) => {
    setFormData((previous) => ({
      ...previous,
      lookingFor: option,
    }));

    setDropdownOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (!formData.lookingFor) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key:
              "93cfee20-afb6-42b0-a39c-157b760666e3",

            name: formData.fullName,
            email: formData.workEmail,
            company: formData.companyName,
            phone: formData.phoneNumber,
            looking_for: formData.lookingFor,

            subject:
              "New Book a Demo Request - Sales Gate",
          }),
        }
      );

      const result = await response.json();

      console.log("Web3Forms response:", result);

      if (result.success) {
        setIsSuccess(true);
        setDropdownOpen(false);

        setFormData({
          fullName: "",
          workEmail: "",
          companyName: "",
          phoneNumber: "",
          lookingFor: "",
        });
      } else {
        console.error(
          "Web3Forms submission failed:",
          result
        );

        // Keep the browser alert out.
        // The error is logged so it can be debugged.
        console.error(
          result.message ||
            "Unable to submit the demo request."
        );
      }
    } catch (error) {
      console.error(
        "Web3Forms submission error:",
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className={`demo-modal-overlay ${
        isSuccess ? "demo-modal-success-overlay" : ""
      }`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {!isSuccess ? (
        <div
          className="demo-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-demo-title"
        >
          {/* CLOSE */}
          <button
            type="button"
            className="demo-modal-close"
            onClick={onClose}
            aria-label="Close Book a Demo"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 5l14 14M19 5 5 19" />
            </svg>
          </button>

          {/* HEADER */}
          <div className="demo-modal-header">
            <h2 id="book-demo-title">
              Book a <em>Demo</em>
            </h2>

            <p>
              Let’s discuss how Sales Gate can help your business grow
              <br className="demo-desktop-break" />
              with AI-powered sales solutions.
            </p>
          </div>

          <form
            className="demo-form"
            onSubmit={handleSubmit}
          >
            {/* FULL NAME */}
            <div className="demo-field">
              <label htmlFor="demo-full-name">
                Full Name <span>*</span>
              </label>

              <div className="demo-input-wrapper">
                <UserIcon />

                <input
                  id="demo-full-name"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* WORK EMAIL */}
            <div className="demo-field">
              <label htmlFor="demo-work-email">
                Work Email <span>*</span>
              </label>

              <div className="demo-input-wrapper">
                <EmailIcon />

                <input
                  id="demo-work-email"
                  name="workEmail"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* COMPANY NAME */}
            <div className="demo-field">
              <label htmlFor="demo-company-name">
                Company Name <span>*</span>
              </label>

              <div className="demo-input-wrapper">
                <CompanyIcon />

                <input
                  id="demo-company-name"
                  name="companyName"
                  type="text"
                  placeholder="Your company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="demo-field">
              <label htmlFor="demo-phone">
                Phone Number
              </label>

              <div className="demo-input-wrapper">
                <PhoneIcon />

                <input
                  id="demo-phone"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* LOOKING FOR */}
            <div className="demo-field">
              <label>
                What are you looking for? <span>*</span>
              </label>

              <div className="demo-select-wrapper">
                <button
                  type="button"
                  className={`demo-select ${
                    dropdownOpen ? "is-open" : ""
                  }`}
                  onClick={() =>
                    setDropdownOpen(
                      (previous) => !previous
                    )
                  }
                  aria-haspopup="listbox"
                  aria-expanded={dropdownOpen}
                >
                  <TagIcon />

                  <span
                    className={
                      formData.lookingFor
                        ? "demo-select-value"
                        : "demo-select-placeholder"
                    }
                  >
                    {formData.lookingFor ||
                      "Select an option"}
                  </span>

                  <svg
                    className={`demo-chevron ${
                      dropdownOpen ? "rotate" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div
                    className="demo-dropdown"
                    role="listbox"
                  >
                    {LOOKING_FOR_OPTIONS.map(
                      (option) => (
                        <button
                          key={option}
                          type="button"
                          role="option"
                          aria-selected={
                            formData.lookingFor ===
                            option
                          }
                          className={`demo-dropdown-option ${
                            formData.lookingFor ===
                            option
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            handleOptionSelect(option)
                          }
                        >
                          {option}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="demo-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : "Book a Demo"}

              {!isSubmitting && <span>→</span>}
            </button>
          </form>
        </div>
      ) : (
        /* ==========================================
           SUCCESS / THANK YOU POPUP
           ========================================== */
        <div
          className="demo-success-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-success-title"
        >
          {/* CLOSE */}
          <button
            type="button"
            className="demo-success-close"
            onClick={handleSuccessClose}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 5l14 14M19 5 5 19" />
            </svg>
          </button>

          {/* SUCCESS ICON */}
          <SuccessIcon />

          {/* TITLE */}
          <h2 id="demo-success-title">
            Thank <em>You!</em>
          </h2>

          {/* MAIN MESSAGE */}
          <p className="demo-success-main">
            Your demo request has been submitted
            successfully.
          </p>

          {/* GOLD DIVIDER */}
          <div className="demo-success-divider" />

          {/* SECONDARY MESSAGE */}
          <p className="demo-success-sub">
            Our team will contact you shortly.
          </p>

          {/* OK BUTTON */}
          <button
            type="button"
            className="demo-success-ok"
            onClick={handleSuccessClose}
          >
            <span>Ok</span>
            <span className="demo-success-arrow">
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default BookDemoModal;