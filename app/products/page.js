import { Suspense } from "react";
import ProductsClient from "@/components/ProductsClient";

export const metadata = {
  title: "Products | Delta Engineering Works",
  description:
    "Browse Delta Engineering Works' full catalogue: CNC & laser cutting machines, ARC, TIG & MIG welders, plasma cutters, welding generators, and torches.",
};

export default function ProductsPage() {
  return (
    <div className="container-page py-16">
      <div className="mb-10 max-w-2xl">
        <span className="font-mono text-xs text-spark-600 uppercase tracking-widest">
          Full Catalogue
        </span>
        <h1 className="font-display text-3xl md:text-4xl text-navy-900 mt-2">
          Products
        </h1>
        <p className="text-ink/60 mt-3">
          Filter by category or machine type to find the right Delta machine for your
          shop floor, field site, or fabrication line.
        </p>
      </div>
      <Suspense fallback={<div className="text-ink/50">Loading products…</div>}>
        <ProductsClient />
      </Suspense>
    </div>
  );
}
