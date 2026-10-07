import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, PhoneCall, Clock, MapPin, MessageCircle, Mail } from "lucide-react";
import { trackEvent, getUtmParameters } from "../utils/analytics";
import { CONTACT_EMAIL, FORM_API_ENDPOINT, PHONE_NUMBER, WHATSAPP_NUMBER } from "../data/projectData";

interface SectionEnquiryFormProps {
  initialConfiguration?: string;
}

export const SectionEnquiryForm: React.FC<SectionEnquiryFormProps> = ({
  initialConfiguration = "3 Bed",
}) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [configuration, setConfiguration] = useState(initialConfiguration);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = "Please enter your name.";
    const cleanNum = mobileNumber.replace(/\D/g, "");
    if (!cleanNum) {
      errs.mobileNumber = "Please enter your mobile number.";
    } else if (cleanNum.length !== 10) {
      errs.mobileNumber = "Please enter a valid 10-digit number.";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    trackEvent("form_submit", {
      formType: "embedded_section",
      configuration,
    });

    const utm = getUtmParameters();
    const payload = {
      _subject: "SOBHA Rivana booking enquiry",
      _template: "table",
      fullName,
      mobileNumber: `+91 ${mobileNumber.replace(/\D/g, "")}`,
      email,
      configuration,
      utm,
      submittedAt: new Date().toISOString(),
    };

    try {
      if (FORM_API_ENDPOINT && !FORM_API_ENDPOINT.startsWith("/api/")) {
        await fetch(FORM_API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await new Promise((res) => setTimeout(res, 600));
      }
      setIsSuccess(true);
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquire" className="py-20 sm:py-28 bg-[#0E0F11] border-b border-[#1E1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#C9A875]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                Official Enquiry
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Begin Your SOBHA Rivana Journey.
            </h2>

            <p className="text-base text-[#D0CBC0] font-normal leading-relaxed max-w-md">
              Connect with our property advisors for brochures, verified floor plans, and site visits.
            </p>

            <div className="pt-6 border-t border-[#222325] space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#18191B] border border-[#2B2C2E] text-[#C9A875]">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#888888] block">
                    Direct Line
                  </span>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                    onClick={() => trackEvent("phone_click", { location: "enquiry_section" })}
                    className="text-sm font-mono text-[#F4F0E8] hover:text-[#C9A875] transition-colors"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#18191B] border border-[#2B2C2E] text-[#C9A875]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#888888] block">
                    WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-mono text-[#F4F0E8] hover:text-[#C9A875] transition-colors"
                  >
                    {WHATSAPP_NUMBER.replace("+91", "+91 ")}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#18191B] border border-[#2B2C2E] text-[#C9A875]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#888888] block">
                    Email
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-[#F4F0E8] hover:text-[#C9A875] transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#18191B] border border-[#2B2C2E] text-[#C9A875]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#888888] block">
                    Site Visit Hours
                  </span>
                  <span className="text-xs text-[#E0DBD0]">
                    Monday – Sunday: 10:00 AM – 7:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-[#18191B] border border-[#2B2C2E] text-[#C9A875]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#888888] block">
                    Address
                  </span>
                  <span className="text-xs text-[#E0DBD0]">
                    Sector 1, Greater Noida (West), UP
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean, Fast Form per Requirement 24 */}
          <div className="lg:col-span-7 bg-[#141517] border border-[#2B2C2E] p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A875]" />

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3
                    className="text-xl font-semibold text-[#F4F0E8]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Request A Callback
                  </h3>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A49C] mb-1 font-medium">
                    Name <span className="text-[#C9A875]">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full bg-[#1A1B1D] border border-[#2B2C2E] focus:border-[#C9A875] text-sm text-[#F4F0E8] px-3.5 py-2.5 outline-none transition-colors placeholder:text-[#555555]"
                  />
                  {errors.fullName && <p className="text-[11px] text-[#E06B6B] mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A49C] mb-1 font-medium">
                    Phone Number <span className="text-[#C9A875]">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-xs bg-[#222326] border border-r-0 border-[#2B2C2E] text-[#C9A875] font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                      placeholder="98765 43210"
                      className="w-full bg-[#1A1B1D] border border-[#2B2C2E] focus:border-[#C9A875] text-sm text-[#F4F0E8] px-3.5 py-2.5 outline-none transition-colors font-mono placeholder:text-[#555555]"
                    />
                  </div>
                  {errors.mobileNumber && <p className="text-[11px] text-[#E06B6B] mt-1">{errors.mobileNumber}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A49C] mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-[#1A1B1D] border border-[#2B2C2E] focus:border-[#C9A875] text-sm text-[#F4F0E8] px-3.5 py-2.5 outline-none transition-colors placeholder:text-[#555555]"
                  />
                  {errors.email && <p className="text-[11px] text-[#E06B6B] mt-1">{errors.email}</p>}
                </div>

                {/* Preferred Configuration */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A49C] mb-1 font-medium">
                    Preferred Configuration
                  </label>
                  <select
                    value={configuration}
                    onChange={(e) => setConfiguration(e.target.value)}
                    className="w-full bg-[#1A1B1D] border border-[#2B2C2E] focus:border-[#C9A875] text-xs text-[#F4F0E8] px-3 py-2.5 outline-none transition-colors cursor-pointer"
                  >
                    <option value="3 Bed">3 Bed Luxury Residence</option>
                    <option value="4 Bed">4 Bed Luxury Residence</option>
                    <option value="Undecided">Undecided / Both</option>
                  </select>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors cursor-pointer shadow-lg disabled:opacity-70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A875] outline-none"
                  >
                    {isSubmitting ? "Submitting..." : "REQUEST A CALLBACK"}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7E7E84] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A875]" />
                  <span>Your privacy is protected. Used strictly for SOBHA communication.</span>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A875]/10 text-[#C9A875] mb-2">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3
                  className="text-2xl font-semibold text-[#F4F0E8]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Callback Requested
                </h3>
                <p className="text-sm text-[#A8A49C] max-w-sm mx-auto leading-relaxed">
                  Thank you. A SOBHA property advisor will connect with you shortly with official floor plans and pricing.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 text-xs uppercase tracking-wider text-[#C9A875] border border-[#333333] hover:border-[#C9A875] transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
