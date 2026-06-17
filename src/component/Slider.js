import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Slider = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to("#image4", { x: 1500, duration: 3, delay: 1, ease: "power4.inOut" });
    tl.to("#image3", { x: 1500, duration: 3, delay: 1, ease: "power4.inOut" });
    tl.to("#image2", { x: 1500, duration: 3, delay: 1, ease: "power4.inOut" });
    tl.to("#image1", { x: 1500, duration: 3, delay: 1, ease: "power4.inOut" });

    gsap.fromTo("#hero-text", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
  });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        <img className="w-full absolute h-full object-cover z-10 top-0 left-0" id="image1" src="download.jpg" alt="slide1"/>
        <img className="w-full absolute h-full object-cover z-20 top-0 left-0" id="image2" src="download1.jpg" alt="slide2"/>
        <img className="w-full absolute h-full object-cover z-30 top-0 left-0" id="image3" src="download2.jpg" alt="slide3"/>
        <img className="w-full absolute h-full object-cover z-40 top-0 left-0" id="image4" src="download3.jpg" alt="slide4"/>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-50"/>

      {/* Hero Content */}
      <div id="hero-text" className="absolute inset-0 z-50 flex flex-col justify-center px-8 md:px-20 max-w-3xl">
        <span className="text-[#9857F1] font-semibold uppercase tracking-widest text-sm mb-4">
          ⚡ New Season Drop
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
          CYBER KID<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9857F1] to-blue-400">INFINITE</span>
        </h1>
        <p className="text-white/60 text-lg mb-8 max-w-md">
          Next-gen gaming gear for next-gen players. Power up your setup today.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/product">
            <button className="bg-[#9857F1] hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(152,87,241,0.5)] hover:shadow-[0_0_30px_rgba(152,87,241,0.8)]">
              Shop Now
            </button>
          </Link>
          <button className="border border-white/30 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-all">
            View Deals
          </button>
        </div>
      </div>

      {/* Product Float Image */}
      <div className="absolute right-4 md:right-20 bottom-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 w-56 md:w-[420px] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(152,87,241,0.3)]">
        <img src="download.avif" alt="featured" className="w-full object-cover"/>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-50"/>
    </div>
  );
};

export default Slider;
