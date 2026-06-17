import React, { useRef } from "react";
import { Helper } from "./ProductList";
import { Link } from "react-router-dom";

const Product = () => {
  const sliderRef = useRef(null);
  const { data, setData, gamingProducts } = Helper();

  const scroll = (dir) => sliderRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });

  const addToCart = (id) => {
    const item = gamingProducts.find((p) => p.id === id);
    if (item) setData((prev) => [...prev, item]);
  };

  return (
    <div className="bg-black py-20 px-4 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-[#9857F1] text-sm font-semibold uppercase tracking-widest mb-1">Top Picks</p>
          <h2 className="text-white text-4xl font-extrabold">Best Sellers</h2>
        </div>
        <Link to="/product">
          <button className="border border-[#9857F1] text-[#9857F1] hover:bg-[#9857F1] hover:text-white font-bold px-5 py-2 rounded-xl transition-all text-sm">
            View All →
          </button>
        </Link>
      </div>

      {/* Slider */}
      <div className="relative">
        <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 bg-white/10 hover:bg-[#9857F1] backdrop-blur text-white w-10 h-10 rounded-full flex items-center justify-center transition-all border border-white/20">
          ‹
        </button>
        <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 bg-white/10 hover:bg-[#9857F1] backdrop-blur text-white w-10 h-10 rounded-full flex items-center justify-center transition-all border border-white/20">
          ›
        </button>

        <div ref={sliderRef} className="flex gap-5 overflow-hidden pb-2">
          {gamingProducts.map((p) => (
            <div key={p.id} className="min-w-[240px] bg-[#0f0e15] border border-white/5 rounded-2xl overflow-hidden hover:border-[#9857F1]/50 hover:shadow-[0_0_25px_rgba(152,87,241,0.15)] transition-all duration-300 group">
              <Link to={`/product/${p.id}`}>
                <div className="relative h-44 overflow-hidden bg-white/5">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                  <span className="absolute top-3 left-3 bg-[#9857F1]/80 text-white text-xs px-2 py-0.5 rounded-full font-medium">{p.category}</span>
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${p.id}`}>
                  <h3 className="text-white font-bold text-sm leading-tight hover:text-[#9857F1] transition-colors">{p.name}</h3>
                </Link>
                <p className="text-white/40 text-xs mt-1 truncate">{p.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#9857F1] font-extrabold text-lg">${p.price}.99</span>
                  <span className="text-yellow-400 text-xs">★ {p.rating}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <Link to={`/product/${p.id}`} className="flex-1">
                    <button className="w-full py-1.5 bg-[#9857F1] text-white text-xs font-bold rounded-lg hover:bg-purple-700 transition-colors">
                      Buy Now
                    </button>
                  </Link>
                  <button onClick={() => addToCart(p.id)} className="flex-1 py-1.5 border border-[#9857F1] text-[#9857F1] text-xs font-bold rounded-lg hover:bg-[#9857F1] hover:text-white transition-colors">
                    + Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
