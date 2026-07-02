import Link from "next/link";

export default function CategoryPlate({ category, index }) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="spec-plate relative rounded-sm p-5 flex flex-col justify-between h-full text-white group overflow-hidden hover:ring-1 hover:ring-spark-500 transition-all"
    >
      <div className="absolute top-2 left-2 rivet" />
      <div className="absolute top-2 right-2 rivet" />
      <div className="absolute bottom-2 left-2 rivet" />
      <div className="absolute bottom-2 right-2 rivet" />

      <div>
        <span className="font-mono text-[10px] text-spark-400 tracking-widest">
          {String(index + 1).padStart(2, "0")} / {category.tag}
        </span>
        <h3 className="font-display text-xl mt-2 leading-tight group-hover:text-spark-400 transition-colors">
          {category.name}
        </h3>
      </div>
      <p className="text-xs text-white/60 mt-4 leading-relaxed">{category.blurb}</p>
    </Link>
  );
}
