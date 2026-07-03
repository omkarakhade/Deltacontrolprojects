import Link from "next/link";
import Image from "next/image";
import CategoryPlate from "@/components/CategoryPlate";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { company } from "@/data/company";
import { logoDataUri } from "@/data/logo";

const featuredSlugs = [
  "cnc-plasma-cutting-machine",
  "delta-laser-cutting-machine",
  "delta-mig-400-500",
  "welding-generator-with-trolley",
];
const featured = products.filter((p) => featuredSlugs.includes(p.slug));

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-diagonal-grid"
          style={{ backgroundSize: "34px 34px" }}
          aria-hidden="true"
        />
        <div className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />
        <div className="container-page relative py-24 md:py-32 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent-400 uppercase mb-6">
              <span className="w-8 h-px bg-accent-400" /> ISO 9001:2000 Certified Manufacturer
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] uppercase">
              Every Weld Holds
              <span className="block text-accent-500">A Promise Of Precision.</span>
            </h1>
            <p className="mt-6 text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
              Delta Control Projects builds CNC plasma & laser cutting systems, ARC,
              TIG & MIG welding machines, industrial plasma cutters, welding generators,
              and torches — engineered in Pune, India, and trusted from manufacturing
              floors to Aramco and SABIC supply chains across the Middle East.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-accent-500 hover:bg-accent-600 transition-colors text-white font-semibold text-sm uppercase tracking-wide px-7 py-3.5 rounded-sm"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="border border-white/25 hover:border-white/60 transition-colors text-white font-semibold text-sm uppercase tracking-wide px-7 py-3.5 rounded-sm"
              >
                Get A Quote
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="spec-plate rounded-sm p-8 flex flex-col items-center text-center gap-4">
              <Image src={logoDataUri} alt="Delta Control Projects" width={120} height={105} className="h-24 w-auto" priority />
              <p className="font-display text-lg tracking-wide text-white uppercase -mt-1">
                Delta Control Projects
              </p>
              <p className="font-mono text-[11px] tracking-widest text-accent-400 uppercase">
                Solutions For Welding &amp; Cutting
              </p>
              <div className="w-full h-px bg-white/10" />
              <dl className="grid grid-cols-2 gap-4 w-full text-left">
                <div>
                  <dt className="text-[10px] text-white/50 uppercase tracking-wider">Product Lines</dt>
                  <dd className="font-display text-2xl">{categories.length}</dd>
                </div>
                <div>
                  <dt className="text-[10px] text-white/50 uppercase tracking-wider">Warranty</dt>
                  <dd className="font-display text-2xl">1 Year*</dd>
                </div>
                <div>
                  <dt className="text-[10px] text-white/50 uppercase tracking-wider">Regional Offices</dt>
                  <dd className="font-display text-2xl">{company.offices.length}</dd>
                </div>
                <div>
                  <dt className="text-[10px] text-white/50 uppercase tracking-wider">Standard</dt>
                  <dd className="font-display text-2xl">ISO 9001</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS STRIP */}
      <section className="bg-navy-950 py-6 border-y border-white/10">
        <div className="container-page">
          <p className="text-center text-[11px] uppercase tracking-widest text-white/40 mb-4">
            Backed by industry-recognised certification & vendor approval
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-white/70 text-sm font-display uppercase tracking-wide">
            {company.certifications.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="py-20 bg-steel-50">
        <div className="container-page">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="font-mono text-xs text-accent-600 uppercase tracking-widest">
                Product Categories
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mt-2">
                Solutions For Every Weld &amp; Cut
              </h2>
            </div>
            <Link href="/products" className="text-sm font-semibold text-navy-700 hover:text-accent-600 uppercase tracking-wide">
              View Full Catalogue →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <CategoryPlate key={cat.slug} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="mb-10">
            <span className="font-mono text-xs text-accent-600 uppercase tracking-widest">
              Featured Machines
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mt-2">
              Built For The Shop Floor
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY DELTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container-page grid md:grid-cols-2 gap-14 items-start">
          <div>
            <span className="font-mono text-xs text-accent-400 uppercase tracking-widest">
              Why Delta
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 leading-tight">
              People Power Behind Every Machine
            </h2>
            <p className="text-white/70 mt-5 leading-relaxed">
              Delta is organised into focused, product-centric business units, each
              accountable for delivery speed, product quality, and after-sale support.
              That structure — and the people running it — is what our distributor
              partners and customers actually rely on, project after project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "One-Year Replacement Guarantee",
                copy: "Most Delta welding machines ship with a one-year replacement guarantee — see individual product pages for coverage.",
              },
              {
                title: "Global Distribution Network",
                copy: "Headquartered in Pune, India, with regional offices across Oman, Bahrain, and Saudi Arabia, plus presence in UAE, Kuwait, and Qatar.",
              },
              {
                title: "Vendor-Approved Quality",
                copy: "ISO 9001:2000 certified and recognised within Aramco and SABIC approved-vendor networks.",
              },
              {
                title: "Built For Real Industry",
                copy: "From fabrication and construction to aviation, motorsports, agriculture, and marine applications.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/10 rounded-sm p-5 hover:border-accent-500/50 transition-colors">
                <h3 className="font-display text-base uppercase tracking-wide mb-2 text-accent-400">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-500">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="font-display text-2xl md:text-3xl uppercase">
              Ready To Spec Your Next Machine?
            </h2>
            <p className="text-white/85 mt-2">
              Talk to our Pune factory team or your nearest regional office.
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
    </>
  );
                  }
