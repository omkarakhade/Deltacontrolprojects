import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getCategory, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Delta Engineering Works`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const specEntries = Object.entries(product.specs || {});

  return (
    <div className="container-page py-14">
      <nav className="text-xs text-ink/50 mb-8 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-spark-600">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-spark-600">Products</Link>
        {category && (
          <>
            <span>/</span>
            <Link href={`/products?category=${category.slug}`} className="hover:text-spark-600">
              {category.name}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative bg-steel-100 rounded-sm aspect-[4/3] flex items-center justify-center p-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {category && (
              <span className="bg-navy-900 text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
                {category.name}
              </span>
            )}
            <span className="bg-steel-100 text-navy-800 text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
              {product.type}
            </span>
            <span className="bg-steel-100 text-navy-800 text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
              Make: {product.make}
            </span>
          </div>

          <span className="font-mono text-xs text-spark-600 tracking-wide">{product.model}</span>
          <h1 className="font-display text-3xl md:text-4xl text-navy-900 mt-1 mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-ink/70 leading-relaxed mb-6">{product.description}</p>

          {product.idealFor && (
            <p className="text-sm text-navy-800 bg-steel-100 border-l-4 border-spark-500 px-4 py-3 rounded-sm mb-6">
              <span className="font-semibold">Ideal for: </span>
              {product.idealFor}
            </p>
          )}

          {product.warranty && (
            <p className="text-sm text-white bg-navy-900 inline-block px-4 py-2 rounded-sm mb-6">
              ✓ {product.warranty}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-spark-500 hover:bg-spark-600 transition-colors text-white font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-sm"
            >
              Request A Quote
            </Link>
            <Link
              href="/products"
              className="border border-navy-900/20 hover:border-spark-500/60 transition-colors text-navy-900 font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-sm"
            >
              Back To Catalogue
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      {product.features?.length > 0 && (
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl text-navy-900 mb-5">Features</h2>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-ink/75 leading-relaxed">
                  <span className="text-spark-500 mt-0.5">●</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spec plate */}
          {specEntries.length > 0 && (
            <div>
              <h2 className="font-display text-2xl text-navy-900 mb-5">Technical Parameters</h2>
              <div className="spec-plate rounded-sm overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specEntries.map(([key, value], i) => (
                      <tr
                        key={key}
                        className={i % 2 === 0 ? "bg-white/[0.03]" : ""}
                      >
                        <td className="px-4 py-3 text-white/50 font-mono text-xs align-top w-1/2">
                          {key}
                        </td>
                        <td className="px-4 py-3 text-white font-mono text-xs align-top">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl text-navy-900 mb-6">
            More From {category?.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
