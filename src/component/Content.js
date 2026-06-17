import React from "react";

const Content = () => {
  return (
    <div className="bg-black text-white">
      {/* About Section */}
      <div className="py-24 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-4 bg-[#9857F1]/20 rounded-3xl blur-2xl"/>
            <img src="image.avif" alt="About Arcade" className="relative w-full rounded-3xl object-cover shadow-2xl"/>
          </div>

          <div className="md:w-1/2 space-y-6">
            <p className="text-[#9857F1] font-semibold uppercase tracking-widest text-sm">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Built for Gamers,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9857F1] to-blue-400">By Gamers</span>
            </h2>
            <p className="text-white/60 leading-relaxed text-lg">
              ARCADE is a premium gaming gear store delivering top-tier performance equipment — from mechanical keyboards to next-gen consoles. We believe every gamer deserves pro-level tools without compromise.
            </p>

            <div className="flex gap-10 pt-2">
              {[["40+", "Products"], ["10K+", "Happy Gamers"], ["4.8★", "Avg Rating"]].map(([num, label]) => (
                <div key={label}>
                  <p className="text-3xl font-black text-[#9857F1]">{num}</p>
                  <p className="text-white/50 text-sm mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-[#07070f] py-24 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#9857F1] font-semibold uppercase tracking-widest text-sm mb-2">Reach Out</p>
            <h2 className="text-4xl font-extrabold text-white">Contact Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📍", title: "Our Location", lines: ["123 Gamer Street", "Tech City, India"] },
              { icon: "📧", title: "Email Us", lines: ["support@arcade-store.com", "sales@arcade-store.com"] },
              { icon: "📞", title: "Call Us", lines: ["+91 98765 43210", "Mon–Sat, 10AM – 7PM"] },
            ].map((card) => (
              <div key={card.title} className="group bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#9857F1] hover:bg-[#9857F1]/5 transition-all duration-300">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-white/50 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
