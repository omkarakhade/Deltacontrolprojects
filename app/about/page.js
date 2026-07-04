import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";

export const metadata = {
  title: "About | Delta Control Projects",
  description:
    "Delta Control Projects is an ISO 9001:2000 certified manufacturer of welding and cutting equipment, headquartered in Pune, India, with a global distribution network.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-navy-900 text-white py-20">
        <div className="container-page">
          <span className="font-mono text-xs text-accent-400 uppercase tracking-widest">
            About Delta
          </span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 max-w-3xl leading-tight">
            The Pro Welding Machine For The Professional
          </h1>
          <p className="text-white/70 mt-6 max-w-2xl leading-relaxed">
            At Delta, our mission goes beyond manufacturing — it&apos;s about building
            things that genuinely matter. We stand at the forefront of the welding
            industry, developing advanced, solution-focused products that push
            performance while addressing welding safety and operator health.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-display text-2xl text-navy-900 mb-4">Our Legacy</h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              Our philosophy is rooted in genuine partnership and meticulous
              craftsmanship — every product is designed in close collaboration with
              the people who use it. That collaborative spirit serves a demanding
              spectrum of applications: manufacturing, fabrication, construction,
              aviation components, motorsports, education, agriculture, and marine
              industries.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Headquartered in India with operations spanning the globe, Delta&apos;s
              journey began with a single, impactful innovation born from a clear
              understanding of evolving customer needs. From a single operation, we
              have grown into one of the more established manufacturers of welding
              products in the developing world.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-navy-900 mb-4">Our Vision</h2>
            <p className="text-ink/70 leading-relaxed mb-4">
              Our aspiration is to be a global manufacturer and market leader,
              consistently providing high-quality welding, cutting, and joining
              products — fuelled by continuous development and the intelligent
              application of cutting-edge technology.
            </p>
            <p className="text-ink/70 leading-relaxed">
              We aim to distinguish ourselves through commitment to the growth and
              well-being of our employees, alongside a strategic drive to maximise
              long-term, shared value for our people, customers, and distributor
              partners.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-steel-50">
        <div className="container-page">
          <h2 className="font-display text-2xl text-navy-900 mb-8 text-center">
            People Power
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Product-Centric Units",
                copy: "Delta is structured into agile, focused business units, each accountable end-to-end for their product line.",
              },
              {
                title: "Speed, Quality, Support",
                copy: "Our organisation is built for responsiveness across delivery, product quality, and after-sale support.",
              },
              {
                title: "Partnership With Distributors",
                copy: "Our engineering and customer service teams work hand-in-hand with customers and distributor partners.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-navy-900/10 rounded-sm p-6">
                <h3 className="font-display text-base text-navy-900 uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page text-center">
          <h2 className="font-display text-2xl text-navy-900 mb-2">
            Quality &amp; Certification
          </h2>
          <p className="text-ink/60 mb-10">Committed to excellence, backed by:</p>

          <div className="max-w-md mx-auto mb-12">
            <Image
              src="/certifications.png"
              alt="Delta Control Projects certifications"
              width={700}
              height={824}
              className="w-full h-auto rounded-sm border border-black/10 shadow-sm"
            />
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
            {company.certifications.map((cert) => (
              <div
                key={cert}
                className="flex flex-col items-center justify-center gap-3 bg-steel-50 border border-navy-900/10 rounded-sm px-4 py-8 hover:border-accent-500/50 hover:shadow-md transition-all"
              >
                <span className="w-11 h-11 rounded-full bg-navy-900 text-white flex items-center justify-center font-display text-sm">
                  ✓
                </span>
                <span className="text-sm font-semibold text-navy-900 leading-snug">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent-500">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="font-display text-2xl md:text-3xl uppercase">
              Want To Know More?
            </h2>
            <p className="text-white/85 mt-2">
              Reach our factory in Pune or your nearest regional office.
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
