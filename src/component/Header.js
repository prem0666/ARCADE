import React, { useState, useEffect } from "react";
import { Helper } from "./ProductList";
import { Link } from "react-router-dom";

const Logo = () => (
  <svg preserveAspectRatio="xMidYMid meet" viewBox="17 17.002 166.002 165.999"
    height="36" width="36" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M54.331 87.495c4.406-16.714 17.655-29.828 34.401-34.112 29.968-7.668 57.117 12.228 61.475 39.711.552 3.483 2.105 6.729 4.599 9.223l19.149 19.149c2.211 2.211 5.988 1.144 6.723-1.894 3.668-15.163 3.177-31.948-2.79-49.095-8.087-23.242-26.742-41.364-50.144-48.976C60.747-.296-.254 60.667 21.471 127.658c7.58 23.373 25.64 42.024 48.826 50.158 17.08 5.991 33.797 6.533 48.916 2.945 3.048-.723 4.124-4.511 1.909-6.726l-20.582-20.582c-2.285-2.285-5.217-3.788-8.388-4.413-26.668-5.25-45.59-32.077-37.821-61.545z" fill="#fff"/>
      <path d="M150.451 126.185a44.142 44.142 0 0 1-24.881 24.3c-3.495 1.347-4.473 5.821-1.824 8.469l21.968 21.968a7.092 7.092 0 0 0 5.014 2.077h26.29a5.56 5.56 0 0 0 5.559-5.559v-26.29a7.09 7.09 0 0 0-2.077-5.014L158.864 124.5c-2.603-2.601-7.009-1.717-8.413 1.685z" fill="#fff"/>
      <path fill="#fff" d="M126.255 100.847c0 13.565-10.996 24.561-24.561 24.561s-24.561-10.996-24.561-24.561 10.996-24.561 24.561-24.561 24.561 10.996 24.561 24.561z"/>
    </g>
  </svg>
);

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data, setData } = Helper();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const removeFromCart = (index) => setData((prev) => prev.filter((_, i) => i !== index));
  const total = data.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-purple-900/20" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-white font-extrabold text-xl tracking-widest">ARCADE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-white/80 font-medium">
            <Link to="/product" className="hover:text-[#9857F1] transition-colors">Products</Link>
            <Link to="/product" className="hover:text-[#9857F1] transition-colors">On Sale</Link>
            <a href="/#contact" className="hover:text-[#9857F1] transition-colors">Contact</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden md:flex items-center gap-2 text-white/80 hover:text-[#9857F1] transition-colors text-sm font-medium">
              <svg fill="currentColor" width="20" height="20" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"/>
              </svg>
              Login
            </Link>

            {/* Cart Button */}
            <button onClick={() => setCartOpen(true)} className="relative text-white hover:text-[#9857F1] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.7 166" width="26" height="26" fill="currentColor">
                <path d="M197.9 55.9L169.9 127.4H64.5L27.6 29.8H0V16.7H36.5L73.4 114.3H160.9L183 55.9Z"/>
                <circle cx="143.8" cy="153" r="13"/>
                <circle cx="90.8" cy="153" r="13"/>
              </svg>
              {data.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#9857F1] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {data.length}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white flex flex-col gap-1.5 p-1">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}/>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}/>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-white font-medium">
            <Link to="/product" onClick={() => setMobileOpen(false)} className="hover:text-[#9857F1] transition-colors">Products</Link>
            <Link to="/product" onClick={() => setMobileOpen(false)} className="hover:text-[#9857F1] transition-colors">On Sale</Link>
            <a href="/#contact" onClick={() => setMobileOpen(false)} className="hover:text-[#9857F1] transition-colors">Contact</a>
            <Link to="/login" onClick={() => setMobileOpen(false)} className="hover:text-[#9857F1] transition-colors">Login</Link>
          </div>
        )}
      </header>

      {/* Cart Drawer */}
      <div className={`fixed inset-0 z-[1000] transition-all duration-300 ${cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div onClick={() => setCartOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>
        <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[#0a0a0f] border-l border-white/10 p-6 flex flex-col transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-xl font-bold">Cart ({data.length})</h2>
            <button onClick={() => setCartOpen(false)} className="text-white/60 hover:text-white text-2xl">×</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-1">
            {data.length === 0 ? (
              <p className="text-white/40 text-center mt-20">Your cart is empty</p>
            ) : data.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                <img src={item.img} alt={item.name} className="w-14 h-14 object-cover rounded-lg"/>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{item.name}</p>
                  <p className="text-[#9857F1] font-bold">${item.price}.99</p>
                </div>
                <button onClick={() => removeFromCart(i)} className="text-red-400 hover:text-red-300 text-sm">✕</button>
              </div>
            ))}
          </div>

          {data.length > 0 && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex justify-between text-white font-bold text-lg mb-4">
                <span>Total</span>
                <span className="text-[#9857F1]">${total}.99</span>
              </div>
              <button className="w-full bg-gradient-to-r from-[#9857F1] to-blue-600 py-3 rounded-xl text-white font-bold hover:opacity-90 transition-opacity">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
