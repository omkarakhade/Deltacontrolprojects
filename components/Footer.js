import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { categories } from "@/data/products";
import { logoDataUri } from "@/data/logo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src={logoDataUri} alt="Delta Control Projects" width={36} height={31} className="h-8 w-auto" />
            <span className="font-display text-lg text-white uppercase tracking-wide">
              Delta
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            {company.tagline}. {company.founded}.
          </p>
          <p className="text-sm mt-3">{company.presenceNote}</p>
        </div>

        <div>
          <h3 className="text-white text-sm uppercase tracking-wide mb-4 font-display">
            Products
          </h3>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/products?category=${c.slug}`} className="hover:text-accent-400 transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm uppercase tracking-wide mb-4 font-display">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-accent-400 transition-colors">About Delta</Link></li>
            <li><Link href="/services" className="hover:text-accent-400 transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-accent-400 transition-colors">Contact & Offices</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm uppercase tracking-wide mb-4 font-display">
            Get In Touch
          </h3>
          <ul className="space-y-2 text-sm">
            {company.emails.slice(0, 1).map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="hover:text-accent-400 transition-colors break-all">
                  {e}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:+919822190996" className="hover:text-accent-400 transition-colors">
                +91 98221 90996
              </a>
            </li>
            <li>Chinchwad, Pune, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Delta Control Projects. All rights reserved.</p>
          <p>ISO 9001:2000 Certified &middot; Manufactured in Pune, India</p>
        </div>
      </div>
    </footer>
  );
}
