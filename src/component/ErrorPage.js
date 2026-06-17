import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
    <div className="min-h-screen w-full bg-[#05050a] flex items-center justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[180px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-600/30 blur-[160px] rounded-full bottom-[-150px] right-[-100px] animate-pulse"></div>

      {/* Glass Box */}
      <div className="relative z-10 text-center p-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(110,40,255,0.4)] max-w-lg">

        <div className="flex justify-center mb-6">
          
        </div>

        <h1 className="text-6xl font-extrabold text-white tracking-wide">
          404
        </h1>

        <p className="text-white/70 mt-3 text-lg">
          The page you're looking for doesn't exist.
        </p>

        <p className="text-white/50 mt-1 text-sm">
          Maybe the page was moved or removed.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 px-10 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white text-lg shadow-[0_0_20px_rgba(120,60,255,0.7)] hover:shadow-[0_0_25px_rgba(120,60,255,1)] active:scale-95 transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
