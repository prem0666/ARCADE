import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Consoles", img: "/photo/download1.avif", value: "Console", color: "from-purple-600" },
  { label: "Accessories", img: "/photo/download2.avif", value: "Accessories", color: "from-blue-600" },
  { label: "Controllers", img: "/photo/download3.avif", value: "Controller", color: "from-pink-600" },
];

const Categrou = () => {
  return (
    <div className="bg-black py-20 px-4 md:px-16">
      <div className="mb-10">
        <p className="text-[#9857F1] text-sm font-semibold uppercase tracking-widest mb-1">Browse</p>
        <h2 className="text-white text-4xl font-extrabold">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.label} to={`/product`} className="group relative rounded-3xl overflow-hidden h-80 block cursor-pointer">
            <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
            <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300`}/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white text-2xl font-extrabold">{cat.label}</h3>
              <span className="text-white/60 text-sm group-hover:text-white transition-colors">Shop now →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categrou;
