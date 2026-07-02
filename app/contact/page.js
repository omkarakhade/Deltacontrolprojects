import ContactForm from "@/components/ContactForm";
import { company } from "@/data/company";

export const metadata = {
  title: "Contact | Delta Engineering Works",
  description:
    "Contact Delta Engineering Works — factory in Pune, India, with regional offices in Muscat, Sohar, Bahrain, and Dammam, Saudi Arabia.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-navy-900 text-white py-20">
        <div className="container-page">
          <span className="font-mono text-xs text-spark-400 uppercase tracking-widest">
            Contact
          </span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl leading-tight">
            Talk To Our Team
          </h1>
          <p className="text-white/70 mt-6 max-w-2xl leading-relaxed">
            {company.presenceNote} Reach the factory directly, or find your nearest
            regional office below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div className="container-page grid lg:grid-cols-[1fr_1.1fr] gap-14">
          <div>
            <h2 className="font-display text-2xl text-navy-900 mb-6">Send An Enquiry</h2>
            <ContactForm />

            <div className="mt-8 bg-navy-900 text-white rounded-sm p-6">
              <h3 className="font-display text-lg uppercase tracking-wide mb-3 text-spark-400">
                Direct Contact
              </h3>
              <ul className="space-y-2 text-sm text-white/80">
                {company.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="hover:text-spark-400 break-all">
                      {e}
                    </a>
                  </li>
                ))}
                {company.websites.map((w) => (
                  <li key={w}>
                    <a
                      href={`https://${w}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-spark-400"
                    >
                      {w}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy-900 mb-6">Our Offices</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {company.offices.map((office) => (
                <div
                  key={office.name}
                  className={`bg-white rounded-sm p-5 border ${
                    office.primary
                      ? "border-spark-500/60 ring-1 ring-spark-500/30"
                      : "border-navy-900/10"
                  }`}
                >
                  {office.primary && (
                    <span className="inline-block bg-spark-500 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm mb-3">
                      Head Office
                    </span>
                  )}
                  <h3 className="font-display text-base text-navy-900 uppercase tracking-wide mb-2">
                    {office.name}
                  </h3>
                  <address className="not-italic text-sm text-ink/65 leading-relaxed mb-3">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <ul className="space-y-1">
                    {office.phones.map((p) => (
                      <li key={p}>
                        <a
                          href={`tel:${p.replace(/\s+/g, "")}`}
                          className="text-sm font-mono text-navy-700 hover:text-spark-600"
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
