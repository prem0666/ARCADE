import { useState } from "react";
import { Link } from "react-router-dom";
import { Helper } from "./ProductList";

const categories = ["All", "Console", "GPU", "CPU", "Keyboard", "Mouse", "Headset", "Monitor", "Chair", "Storage", "Streaming", "Cooling", "Accessories"];

export default function ProductsPage() {
  const { gamingProducts, setData } = Helper();
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("default");

  const filtered = filter === "All" ? gamingProducts : gamingProducts.filter((p) => p.category === filter);
  const sorted = [...filtered].sort((a, b) =>
    sort === "low-high" ? a.price - b.price : sort === "high-low" ? b.price - a.price : 0
  );

  const addToCart = (e, item) => {
    e.preventDefault();
    setData((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16 px-4 md:px-16">
      <div className="mb-8">
        <p className="text-[#9857F1] text-sm font-semibold uppercase tracking-widest mb-1">Explore</p>
        <h1 className="text-4xl font-extrabold">All Products</h1>
      </div>

      {/* Filter & Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${filter === cat ? "bg-[#9857F1] border-[#9857F1] text-white" : "border-white/20 text-white/60 hover:border-[#9857F1] hover:text-white"}`}>
              {cat}
            </button>
          ))}
        </div>
        <select className="bg-white/5 border border-white/20 text-white px-4 py-2 rounded-xl text-sm outline-none"
          value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {sorted.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}
            className="bg-[#0f0e15] border border-white/5 rounded-2xl overflow-hidden hover:border-[#9857F1]/50 hover:shadow-[0_0_25px_rgba(152,87,241,0.15)] transition-all duration-300 group block">
            <div className="relative h-44 bg-white/5 overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
              <span className="absolute top-3 left-3 bg-[#9857F1]/80 text-white text-xs px-2 py-0.5 rounded-full">{item.category}</span>
            </div>
            <div className="p-4">
              <h2 className="text-white font-bold text-sm leading-tight group-hover:text-[#9857F1] transition-colors">{item.name}</h2>
              <p className="text-white/40 text-xs mt-1 truncate">{item.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[#9857F1] font-extrabold text-lg">${item.price}.99</span>
                <span className="text-yellow-400 text-xs">★ {item.rating}</span>
              </div>
              <button onClick={(e) => addToCart(e, item)}
                className="w-full mt-3 py-2 bg-white/5 border border-white/10 hover:bg-[#9857F1] hover:border-[#9857F1] text-white text-xs font-bold rounded-lg transition-all">
                + Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
