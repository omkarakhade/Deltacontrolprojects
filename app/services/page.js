import Link from "next/link";

export const metadata = {
  title: "Services | Delta Control Projects",
  description:
    "Delta Control Projects' service commitments: replacement warranty, after-sale support, global distributor network, and application guidance for welding & cutting equipment.",
};

const services = [
  {
    title: "One-Year Replacement Guarantee",
    copy: "Most Delta welding machines are backed by a one-year replacement guarantee, so downtime from a manufacturing defect doesn't become your problem to absorb.",
  },
  {
    title: "After-Sale Support",
    copy: "Our product-centric business units stay accountable for their machines after the sale — not just at the point of delivery.",
  },
  {
    title: "Application Guidance",
    copy: "From metal profile cutting and heavy fabrication to radiography-grade stainless welds, we help you match the right machine — CNC, laser, ARC, TIG, MIG, or plasma — to your actual job.",
  },
  {
    title: "Consumables & Torches",
    copy: "A full range of plasma, TIG, and MIG torches and consumables — nozzles, tips, cable assemblies — to keep machines running without downtime.",
  },
  {
    title: "Distributor & Regional Network",
    copy: "With offices across Oman, Bahrain, and Saudi Arabia, and presence in UAE, Kuwait, and Qatar, support doesn't stop at the Indian border.",
  },
  {
    title: "Vendor-Approved Delivery",
    copy: "Recognised within Aramco and SABIC approved-vendor networks, so procurement teams can specify Delta with confidence.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-navy-900 text-white py-20">
        <div className="container-page">
          <span className="font-mono text-xs text-accent-400 uppercase tracking-widest">
            Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl leading-tight">
            Support That Doesn&apos;t End At Delivery
          </h1>
          <p className="text-white/70 mt-6 max-w-2xl leading-relaxed">
            The true strength of Delta isn&apos;t just the machines — it&apos;s the people
            behind them, working with customers and distributor partners long after
            a machine leaves the factory floor.
          </p>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="bg-white border border-navy-900/10 rounded-sm p-6">
              <span className="font-mono text-xs text-accent-600">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-lg text-navy-900 mt-2 mb-3 uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="text-sm text-ink/65 leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-2xl text-navy-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-ink/70 leading-relaxed">
              Delta equipment is built for a wide spread of demanding applications —
              manufacturing, fabrication, large-scale construction, aviation
              components, motorsports, educational training, agricultural equipment,
              and marine industry needs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Manufacturing",
              "Heavy Fabrication",
              "Construction",
              "Aviation",
              "Motorsports",
              "Education & Training",
              "Agriculture",
              "Marine",
              "Petroleum",
              "Dairy",
              "Chemical",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-steel-100 text-navy-800 text-xs uppercase tracking-wide px-3 py-2 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent-500">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="font-display text-2xl md:text-3xl uppercase">
              Need Support On An Existing Machine?
            </h2>
            <p className="text-white/85 mt-2">
              Reach out and our team will route you to the right regional office.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-navy-900 hover:bg-navy-950 transition-colors text-white font-semibold text-sm uppercase tracking-wide px-7 py-3.5 rounded-sm whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
                  }
