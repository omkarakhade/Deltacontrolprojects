import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <span className="font-mono text-spark-600 text-sm uppercase tracking-widest">
        404
      </span>
      <h1 className="font-display text-4xl text-navy-900 mt-3 mb-4">
        Page Not Found
      </h1>
      <p className="text-ink/60 mb-8">
        That page doesn&apos;t exist — but our full catalogue does.
      </p>
      <Link
        href="/products"
        className="bg-spark-500 hover:bg-spark-600 transition-colors text-white font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-sm"
      >
        View Products
      </Link>
    </div>
  );
}
