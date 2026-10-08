import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck } from "lucide-react";
import { trackEvent } from "../utils/analytics";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConfiguration?: string;
  sourceContext?: string;
}

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwkKhCXEv9LzeYyAvLSDLuDnExnBH-D3N_1_B9R2I-vsAQtD6dBdYvTnLlO9jrwX_a_-g/exec";

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialConfiguration = "3 Bed",
  sourceContext = "Direct Click",
}) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [configuration, setConfiguration] =
    useState(initialConfiguration);
  const [contactTime, setContactTime] = useState(
    "Morning (9 AM - 12 PM)"
  );

  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSuccess, setIsSuccess] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  useEffect(() => {
    if (initialConfiguration) {
      setConfiguration(initialConfiguration);
    }
  }, [initialConfiguration]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    trackEvent("enquiry_popup_close", {
      sourceContext,
    });

    onClose();
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName =
        "Please enter your full name.";
    }

    const cleanMobile =
      mobileNumber.replace(/\D/g, "");

    if (!cleanMobile) {
      newErrors.mobileNumber =
        "Please enter your 10-digit mobile number.";
    } else if (cleanMobile.length !== 10) {
      newErrors.mobileNumber =
        "Please enter a valid 10-digit Indian mobile number.";
    }

    if (!email.trim()) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    trackEvent("form_submit", {
      sourceContext,
      configuration,
      contactTime,
    });

    try {
      /*
       * Google Apps Script does not allow the browser
       * fetch() request because of CORS.
       *
       * We therefore submit a normal HTML form to
       * a hidden iframe. This sends the POST request
       * without requiring CORS permission.
       */

      const iframe =
        document.createElement("iframe");

      const iframeName =
        `google-sheet-submit-${Date.now()}`;

      iframe.name = iframeName;
      iframe.style.display = "none";

      document.body.appendChild(iframe);

      const form =
        document.createElement("form");

      form.method = "POST";
      form.action = GOOGLE_SHEET_URL;
      form.target = iframeName;
      form.style.display = "none";

      const fields = {
        name: fullName.trim(),

        mobile:
          mobileNumber.replace(/\D/g, ""),

        email: email.trim(),

        configuration,

        preferredTime: contactTime,
      };

      Object.entries(fields).forEach(
        ([key, value]) => {
          const input =
            document.createElement("input");

          input.type = "hidden";
          input.name = key;
          input.value = value;

          form.appendChild(input);
        }
      );

      document.body.appendChild(form);

      form.submit();

      /*
       * The form has been submitted to Google
       * through the hidden iframe.
       *
       * We don't try to read the response because
       * cross-origin iframe responses cannot be read
       * by the website.
       */

      setIsSuccess(true);

      /*
       * Remove temporary elements after a few seconds.
       */
      setTimeout(() => {
        form.remove();
        iframe.remove();
      }, 5000);

    } catch (err) {
      console.error(
        "Form submission error:",
        err
      );

      setSubmitError(
        "We couldn't send your enquiry. Please try again."
      );

      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080909]/85 backdrop-blur-md animate-in fade-in duration-200"
    >

      {/* Modal Surface */}

      <div className="relative w-full max-w-lg bg-[#111213] border border-[#2E2F32] shadow-2xl p-6 sm:p-8 text-[#F4F0E8] overflow-hidden">

        {/* Top Accent */}

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A875] to-transparent" />

        {/* Close Button */}

        <button
          onClick={handleClose}
          aria-label="Close enquiry dialogue"
          className="absolute top-5 right-5 text-[#888888] hover:text-[#F4F0E8] transition-colors p-1 cursor-pointer focus-visible:ring-1 focus-visible:ring-[#C9A875] outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (

          <div>

            {/* Header */}

            <div className="mb-6 pr-6">

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A875] font-semibold block mb-1">
                Private Consultation
              </span>

              <h2
                id="modal-headline"
                className="text-2xl sm:text-3xl font-normal text-[#F4F0E8] leading-tight"
                style={{
                  fontFamily:
                    "var(--font-serif)",
                }}
              >
                Discover Your Residence at SOBHA Rivana
              </h2>

              <p className="text-xs sm:text-sm text-[#A0A0A0] font-light mt-2 leading-relaxed">
                Leave your details and our property advisor will help you explore residences, pricing and a private site visit.
              </p>

            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Full Name */}

              <div>

                <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1 font-medium">
                  Full Name{" "}
                  <span className="text-[#C9A875]">
                    *
                  </span>
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(
                      e.target.value
                    )
                  }
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[#18191B] border border-[#2B2C2E] focus:border-[#C9A875] text-sm text-[#F4F0E8] px-3.5 py-2.5 outline-none transition-colors placeholder:text-[#555555]"
                />

                {errors.fullName && (
                  <p className="text-[11px] text-[#E06B6B] mt-1">
                    {errors.fullName}
                  </p>
                )}

              </div>

              {/* Mobile Number */}

              <div>

                <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1 font-medium">
                  Mobile Number{" "}
                  <span className="text-[#C9A875]">
                    *
                  </span>
                </label>

                <div className="flex">

                  <span className="inline-flex min-w-[3.25rem] shrink-0 items-center justify-center whitespace-nowrap px-2 text-xs bg-[#202124] border border-r-0 border-[#2B2C2E] text-[#C9A875] font-mono">
                    +91
                  </span>

                  <input
                    type="tel"
                    maxLength={10}
                    value={mobileNumber}
                    onChange={(e) =>
                      setMobileNumber(
                        e.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
                    }
                    placeholder="98765 43210"
                    className="w-full bg-[#18191B] border border-[#2B2C2E] focus:border-[#C9A875] text-sm text-[#F4F0E8] px-3.5 py-2.5 outline-none transition-colors font-mono placeholder:text-[#555555]"
                  />

                </div>

                {errors.mobileNumber && (
                  <p className="text-[11px] text-[#E06B6B] mt-1">
                    {errors.mobileNumber}
                  </p>
                )}

              </div>

              {/* Email */}

              <div>

                <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1 font-medium">
                  Email Address{" "}
                  <span className="text-[#C9A875]">
                    *
                  </span>
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="name@example.com"
                  className="w-full bg-[#18191B] border border-[#2B2C2E] focus:border-[#C9A875] text-sm text-[#F4F0E8] px-3.5 py-2.5 outline-none transition-colors placeholder:text-[#555555]"
                />

                {errors.email && (
                  <p className="text-[11px] text-[#E06B6B] mt-1">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* Configuration + Time */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                <div>

                  <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1 font-medium">
                    Configuration{" "}
                    <span className="text-[#C9A875]">
                      *
                    </span>
                  </label>

                  <select
                    value={configuration}
                    onChange={(e) =>
                      setConfiguration(
                        e.target.value
                      )
                    }
                    className="w-full bg-[#18191B] border border-[#2B2C2E] focus:border-[#C9A875] text-xs text-[#F4F0E8] px-3 py-2.5 outline-none transition-colors cursor-pointer"
                  >
                    <option value="3 Bed">
                      3 Bed Residence
                    </option>

                    <option value="4 Bed">
                      4 Bed Residence
                    </option>

                    <option value="Not Sure">
                      Not Sure / Exploring
                    </option>
                  </select>

                </div>

                <div>

                  <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1 font-medium">
                    Preferred Time
                  </label>

                  <select
                    value={contactTime}
                    onChange={(e) =>
                      setContactTime(
                        e.target.value
                      )
                    }
                    className="w-full bg-[#18191B] border border-[#2B2C2E] focus:border-[#C9A875] text-xs text-[#F4F0E8] px-3 py-2.5 outline-none transition-colors cursor-pointer"
                  >
                    <option value="Morning (9 AM - 12 PM)">
                      Morning (9 AM - 12 PM)
                    </option>

                    <option value="Afternoon (12 PM - 4 PM)">
                      Afternoon (12 PM - 4 PM)
                    </option>

                    <option value="Evening (4 PM - 8 PM)">
                      Evening (4 PM - 8 PM)
                    </option>
                  </select>

                </div>

              </div>

              {/* Submit */}

              <div className="pt-2">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-xs uppercase tracking-[0.25em] font-medium text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors cursor-pointer shadow-md disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A875] outline-none"
                >
                  {isSubmitting
                    ? "Submitting Request..."
                    : "Request A Callback"}
                </button>

              </div>

              {submitError && (
                <p
                  role="alert"
                  className="text-center text-xs text-[#E06B6B]"
                >
                  {submitError}
                </p>
              )}

              {/* Privacy */}

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#777777] pt-1">

                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A875]/80 shrink-0" />

                <span>
                  Your information will only be used to assist with your property enquiry.
                </span>

              </div>

            </form>

          </div>

        ) : (

          /* Confirmation State */

          <div className="py-8 text-center space-y-4">

            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A875]/10 text-[#C9A875] mb-2">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3
              className="text-2xl font-normal text-[#F4F0E8]"
              style={{
                fontFamily:
                  "var(--font-serif)",
              }}
            >
              Enquiry Received
            </h3>

            <p className="text-sm text-[#A0A0A0] max-w-sm mx-auto leading-relaxed">
              Thank you. Our dedicated SOBHA property advisor will contact you shortly to share the latest price list, residence plans, and schedule your private site visit.
            </p>

            <div className="pt-4">

              <button
                onClick={handleClose}
                className="px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors cursor-pointer"
              >
                Close Window
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};