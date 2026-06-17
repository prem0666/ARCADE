import { useParams, Link } from "react-router-dom";
import { Helper } from "../component/ProductList";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const { gamingProducts, setData } = Helper();
  const product = gamingProducts.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <p className="text-white/40 text-6xl mb-4">404</p>
        <p className="text-white text-xl mb-6">Product not found</p>
        <Link to="/product" className="text-[#9857F1] hover:underline">← Back to Products</Link>
      </div>
    </div>
  );

  const stars = Math.round(product.rating);

  const addToCart = () => {
    for (let i = 0; i < qty; i++) setData((prev) => [...prev, product]);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = gamingProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      {/* Back */}
      <div className="px-4 md:px-16 mb-8">
        <Link to="/product" className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2">
          ← Back to Products
        </Link>
      </div>

      {/* Main */}
      <div className="px-4 md:px-16 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-[#9857F1]/10 rounded-3xl blur-3xl"/>
          <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden h-[420px] flex items-center justify-center">
            <img src={product.img} alt={product.name} className="object-contain h-full w-full p-6"/>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center space-y-5">
          <span className="text-[#9857F1] text-sm font-semibold uppercase tracking-widest">{product.category}</span>
          <h1 className="text-4xl font-extrabold leading-tight">{product.name}</h1>

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map((s) => (
                <span key={s} className={s <= stars ? "text-yellow-400" : "text-white/20"}>★</span>
              ))}
            </div>
            <span className="text-white/50 text-sm">{product.rating} / 5.0</span>
          </div>

          <div className="text-4xl font-black text-[#9857F1]">${product.price}.99</div>

          <p className="text-white/60 leading-relaxed">{product.description}</p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-sm">Quantity</span>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button onClick={() => qty > 1 && setQty(qty - 1)} className="px-4 py-2 hover:bg-white/10 transition-colors text-lg">−</button>
              <span className="px-4 py-2 font-bold min-w-[3rem] text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-2 hover:bg-white/10 transition-colors text-lg">+</button>
            </div>
          </div>

          <button onClick={addToCart}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${added ? "bg-green-600 shadow-[0_0_20px_rgba(22,163,74,0.5)]" : "bg-gradient-to-r from-[#9857F1] to-blue-600 shadow-[0_0_20px_rgba(120,60,255,0.4)] hover:shadow-[0_0_30px_rgba(120,60,255,0.7)]"}`}>
            {added ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Specs */}
      <div className="px-4 md:px-16 max-w-6xl mx-auto mt-16">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-5">Specifications</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-white/60">
            {["High performance gaming product", "Premium build quality", "Trusted by pro gamers", "Fast delivery & secure packaging"].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <span className="text-[#9857F1]">✓</span> {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="px-4 md:px-16 max-w-6xl mx-auto mt-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-5">Customer Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Rahul Verma", review: "Amazing quality! Totally worth the price.", rating: 5 },
              { name: "Sneha Patil", review: "Perfect for gaming setup, looks awesome!", rating: 5 },
            ].map((r) => (
              <div key={r.name} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">{r.name}</p>
                  <div className="flex text-yellow-400 text-sm">{"★".repeat(r.rating)}</div>
                </div>
                <p className="text-white/50 text-sm">{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="px-4 md:px-16 max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#9857F1]/50 transition-all group">
                <div className="h-32 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                </div>
                <div className="p-3">
                  <p className="text-white text-xs font-bold truncate">{p.name}</p>
                  <p className="text-[#9857F1] font-bold text-sm mt-1">${p.price}.99</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
