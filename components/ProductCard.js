import Link from "next/link";
import Image from "next/image";
import { getCategory } from "@/data/products";

export default function ProductCard({ product }) {
  const cat = getCategory(product.category);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col bg-white border border-navy-900/10 rounded-sm overflow-hidden hover:border-spark-500/60 hover:shadow-lg transition-all duration-200"
    >
      <div className="relative bg-steel-100 aspect-[4/3] flex items-center justify-center p-4 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {cat && (
          <span className="absolute top-3 left-3 bg-navy-900 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
            {cat.name}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="font-mono text-[11px] text-spark-600 tracking-wide mb-1">
          {product.model}
        </span>
        <h3 className="font-display text-lg text-navy-900 leading-tight mb-2 group-hover:text-spark-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-ink/70 line-clamp-2 mb-4">{product.description}</p>
        <span className="mt-auto text-xs font-semibold text-navy-700 uppercase tracking-wide inline-flex items-center gap-1">
          View Specifications
          <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}
