import { Link } from "react-router-dom";

const Logo = () => (
  <svg preserveAspectRatio="xMidYMid meet" viewBox="17 17.002 166.002 165.999"
    height="32" width="32" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M54.331 87.495c4.406-16.714 17.655-29.828 34.401-34.112 29.968-7.668 57.117 12.228 61.475 39.711.552 3.483 2.105 6.729 4.599 9.223l19.149 19.149c2.211 2.211 5.988 1.144 6.723-1.894 3.668-15.163 3.177-31.948-2.79-49.095-8.087-23.242-26.742-41.364-50.144-48.976C60.747-.296-.254 60.667 21.471 127.658c7.58 23.373 25.64 42.024 48.826 50.158 17.08 5.991 33.797 6.533 48.916 2.945 3.048-.723 4.124-4.511 1.909-6.726l-20.582-20.582c-2.285-2.285-5.217-3.788-8.388-4.413-26.668-5.25-45.59-32.077-37.821-61.545z" fill="#fff"/>
      <path d="M150.451 126.185a44.142 44.142 0 0 1-24.881 24.3c-3.495 1.347-4.473 5.821-1.824 8.469l21.968 21.968a7.092 7.092 0 0 0 5.014 2.077h26.29a5.56 5.56 0 0 0 5.559-5.559v-26.29a7.09 7.09 0 0 0-2.077-5.014L158.864 124.5c-2.603-2.601-7.009-1.717-8.413 1.685z" fill="#fff"/>
      <path fill="#fff" d="M126.255 100.847c0 13.565-10.996 24.561-24.561 24.561s-24.561-10.996-24.561-24.561 10.996-24.561 24.561-24.561 24.561 10.996 24.561 24.561z"/>
    </g>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#07070f] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Logo />
            <span className="font-extrabold text-xl tracking-widest">ARCADE</span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Level up your gaming gear with high-performance accessories, consoles, and gadgets built for real gamers.
          </p>
          <div className="flex gap-3">
            {["f", "in", "tw", "yt"].map((s) => (
              <a key={s} href="/" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[#9857F1] hover:border-[#9857F1] hover:text-white transition-all text-xs font-bold uppercase">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Products</h3>
          <ul className="space-y-3 text-white/50 text-sm">
            {["Gaming Consoles", "Controllers", "PC Accessories", "PC Parts"].map((item) => (
              <li key={item}><Link to="/product" className="hover:text-[#9857F1] transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Support</h3>
          <ul className="space-y-3 text-white/50 text-sm">
            {["Help Center", "Warranty", "Shipping Info", "Order Tracking"].map((item) => (
              <li key={item}><span className="hover:text-[#9857F1] transition-colors cursor-pointer">{item}</span></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Newsletter</h3>
          <p className="text-white/40 text-sm mb-4">Get updates on new gear & exclusive deals.</p>
          <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden focus-within:border-[#9857F1] transition-colors">
            <input type="email" placeholder="your@email.com"
              className="bg-transparent text-white text-sm flex-1 px-4 py-3 outline-none placeholder-white/30"/>
            <button className="bg-[#9857F1] hover:bg-purple-700 px-4 text-sm font-bold transition-colors">Join</button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between text-white/30 text-xs gap-3">
        <p>© 2025 ARCADE Store — All Rights Reserved</p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
            <span key={item} className="hover:text-[#9857F1] cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
