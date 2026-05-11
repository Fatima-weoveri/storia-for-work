import type { FormEvent } from "react";
import { useId, useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  type Value,
} from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";
import workingSunny from "../../assets/workingSunny.png";

const HELP_OPTIONS = [
  { value: "", label: "Please select" },
  { value: "demo", label: "Book a product demo" },
  { value: "partnership", label: "Partnership / volume pricing" },
  { value: "white-label", label: "White label" },
  { value: "general", label: "General enquiry" },
];

const inputClass =
  "w-full rounded-lg border border-(--storia-black15) bg-(--storia-white) px-3 py-2.5 text-[14px] text-(--storia-black) shadow-none outline-none transition-[box-shadow] focus:border-(--storia-green) focus:ring-2 focus:ring-(--storia-green50)";

const labelClass =
  "mb-1.5 block text-[12px] font-bold tracking-wide text-(--storia-black)";

function buildMailBody(fd: FormData, phoneE164: string): string {
  const lines = [
    `How can we help?: ${fd.get("help") || ""}`,
    `Name: ${fd.get("firstName")} ${fd.get("lastName")}`,
    `Work email: ${fd.get("email")}`,
    `Phone: ${phoneE164}`,
    `Job title: ${fd.get("jobTitle")}`,
  ];
  return lines.join("\n");
}

export const ContactCta = () => {
  const uid = useId();
  const field = (name: string) => `${uid}-${name}`;
  const [phoneValue, setPhoneValue] = useState<Value | undefined>();
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (!phoneValue?.trim()) {
      setPhoneError("Enter your phone number.");
      return;
    }
    if (!isValidPhoneNumber(phoneValue)) {
      setPhoneError("Enter a valid phone number for the selected country.");
      return;
    }
    setPhoneError(null);

    const subject = encodeURIComponent("Demo request — Storia for Work");
    const body = encodeURIComponent(buildMailBody(fd, phoneValue));
    window.location.href = `mailto:hello@storia.world?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner max-w-[1080px]">
        <div className="overflow-hidden">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-14 lg:items-start">
            <div className="flex min-w-0 flex-col">
              <h2
                className="text-[clamp(1.65rem,3.2vw,2.25rem)] leading-[1.15] font-bold tracking-[-0.02em] text-(--storia-black)"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Request a demo to learn more about how we can support your team.
              </h2>
              <p className="mt-5 max-w-[440px] text-[15px] leading-[1.65] text-(--storia-black75)">
                Storia for Work helps organisations build practical reflection
                habits—guided check-ins, pattern insights, and calm nudges—so
                people think more clearly together. Share a few details and
                we&apos;ll follow up to show you how it could fit yours.
              </p>

              <div className="relative mt-6 max-w-[min(100%,380px)] lg:mt-8">
                <div className="relative mx-auto flex justify-center">
                  <img
                    src={workingSunny}
                    alt="Sunny working at a desk with a laptop"
                    className="h-auto w-full max-h-[min(260px,42vw)] object-contain sm:max-h-[280px]"
                  />
                </div>
              </div>
            </div>

            <form className="min-w-0 space-y-5" onSubmit={onSubmit} noValidate>
              <div>
                <label htmlFor={field("help")} className={labelClass}>
                  How can we help?{" "}
                  <span className="text-(--storia-orange)">*</span>
                </label>
                <select
                  id={field("help")}
                  name="help"
                  required
                  className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_0.65rem_center] bg-no-repeat pr-10`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23212529' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  }}
                  defaultValue=""
                >
                  {HELP_OPTIONS.map((o) => (
                    <option
                      key={o.value || "placeholder"}
                      value={o.value}
                      disabled={o.value === ""}
                    >
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={field("firstName")} className={labelClass}>
                    First name <span className="text-(--storia-orange)">*</span>
                  </label>
                  <input
                    id={field("firstName")}
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor={field("lastName")} className={labelClass}>
                    Last name <span className="text-(--storia-orange)">*</span>
                  </label>
                  <input
                    id={field("lastName")}
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor={field("email")} className={labelClass}>
                  Work email <span className="text-(--storia-orange)">*</span>
                </label>
                <input
                  id={field("email")}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor={field("phone")} className={labelClass}>
                  Phone number <span className="text-(--storia-orange)">*</span>
                </label>
                <div
                  className={`contact-phone-input${phoneError ? " contact-phone-input--invalid" : ""}`}
                >
                  <PhoneInput
                    id={field("phone")}
                    labels={en}
                    defaultCountry="GB"
                    international
                    countryCallingCodeEditable={false}
                    limitMaxLength
                    smartCaret
                    value={phoneValue}
                    onChange={(next) => {
                      setPhoneValue(next);
                      if (phoneError) setPhoneError(null);
                    }}
                    autoComplete="tel"
                    aria-invalid={phoneError ? true : undefined}
                    aria-describedby={
                      phoneError ? field("phone-error") : undefined
                    }
                  />
                </div>
                {phoneError ? (
                  <p
                    id={field("phone-error")}
                    className="mt-1.5 text-[12px] text-(--storia-orange)"
                    role="alert"
                  >
                    {phoneError}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={field("jobTitle")} className={labelClass}>
                  Job title <span className="text-(--storia-orange)">*</span>
                </label>
                <input
                  id={field("jobTitle")}
                  name="jobTitle"
                  type="text"
                  required
                  autoComplete="organization-title"
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-(--storia-black) py-3.5 text-[15px] font-semibold text-(--storia-white) transition-colors hover:bg-(--storia-black75)"
              >
                Request a demo
              </button>
              <p className="text-center text-[12px] leading-normal text-(--storia-black50)">
                We&apos;ll only use your details to respond to this request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
