"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";

const types = Array.from(new Set(products.map((p) => p.type))).sort();

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "all";
  const [activeType, setActiveType] = useState("all");
  const [query, setQuery] = useState("");

  const setCategory = (slug) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false });
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const categoryMatch = activeCategory === "all" || p.category === activeCategory;
      const typeMatch = activeType === "all" || p.type === activeType;
      const queryMatch =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.model.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && typeMatch && queryMatch;
    });
  }, [activeCategory, activeType, query]);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setCategory("all")}
          className={`px-4 py-2 rounded-sm text-xs uppercase tracking-wide font-semibold transition-colors ${
            activeCategory === "all"
              ? "bg-navy-900 text-white"
              : "bg-white text-navy-900 border border-navy-900/15 hover:border-accent-500/60"
          }`}
        >
          All Categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setCategory(cat.slug)}
            className={`px-4 py-2 rounded-sm text-xs uppercase tracking-wide font-semibold transition-colors ${
              activeCategory === cat.slug
                ? "bg-navy-900 text-white"
                : "bg-white text-navy-900 border border-navy-900/15 hover:border-accent-500/60"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Tag / type filter + search */}
      <div className="flex flex-wrap items-center gap-3 mb-10 bg-white border border-navy-900/10 rounded-sm p-4">
        <span className="text-[11px] uppercase tracking-widest text-ink/50 font-mono">
          Filter by type:
        </span>
        <select
          value={activeType}
          onChange={(e) => setActiveType(e.target.value)}
          className="border border-navy-900/15 rounded-sm text-sm px-3 py-1.5 bg-steel-50 text-navy-900"
        >
          <option value="all">All Types</option>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <div className="ml-auto flex items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search model or name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-navy-900/15 rounded-sm text-sm px-3 py-1.5 bg-steel-50 text-navy-900 w-full sm:w-64"
          />
        </div>
      </div>

      <p className="text-sm text-ink/50 mb-6">
        Showing {filtered.length} of {products.length} products
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-ink/50">
          No products match those filters. Try clearing the search or type filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
