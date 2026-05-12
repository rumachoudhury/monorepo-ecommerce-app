export default function AnimatedHUDLogin() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0c0c0c] text-white">
      {/* Background Hex Grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:30px_30px]" />

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      {/* HUD Container */}
      <div className="relative flex h-full items-center justify-center">
        {/* Rotating Vial */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[320px] w-[320px] animate-spin-slow rounded-full border border-blue-400/30" />

          {/* Scan Rings */}
          <div className="absolute h-[250px] w-[250px] rounded-full border border-white/20 animate-ping-slow" />
          <div className="absolute h-[280px] w-[280px] rounded-full border border-blue-400/20 animate-pulse" />

          {/* Central Bottle */}
          <div className="relative flex h-[220px] w-[90px] animate-float flex-col items-center justify-between rounded-[40px] border border-white/30 bg-white/5 p-4 backdrop-blur-md">
            <div className="h-8 w-12 rounded-md border border-white/30 bg-white/10" />
            <div className="flex-1 w-full rounded-[30px] border border-blue-400/30 bg-gradient-to-b from-blue-400/10 to-transparent" />
            <div className="mb-2 text-[10px] tracking-[4px] text-blue-300">
              PEPTIDE
            </div>
          </div>

          {/* Crosshair */}
          <div className="absolute h-[340px] w-[340px]">
            <div className="absolute left-1/2 top-0 h-12 w-px -translate-x-1/2 bg-blue-400/50" />
            <div className="absolute bottom-0 left-1/2 h-12 w-px -translate-x-1/2 bg-blue-400/50" />
            <div className="absolute left-0 top-1/2 h-px w-12 -translate-y-1/2 bg-blue-400/50" />
            <div className="absolute right-0 top-1/2 h-px w-12 -translate-y-1/2 bg-blue-400/50" />
          </div>
        </div>

        {/* Left Data Box */}
        <div className="absolute left-16 top-1/3 hidden w-56 border border-white/10 bg-white/5 p-4 backdrop-blur-md md:block">
          <div className="mb-2 text-xs tracking-[3px] text-blue-400">
            SAMPLE STATUS
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex justify-between">
              <span>Purity</span>
              <span className="text-blue-300">99%</span>
            </div>
            <div className="flex justify-between">
              <span>Batch</span>
              <span>A-102</span>
            </div>
            <div className="flex justify-between">
              <span>State</span>
              <span className="text-green-400">Stable</span>
            </div>
          </div>
        </div>

        {/* Right Data Box */}
        <div className="absolute right-16 top-1/3 hidden w-56 border border-white/10 bg-white/5 p-4 backdrop-blur-md md:block">
          <div className="mb-2 text-xs tracking-[3px] text-blue-400">
            LIVE READOUT
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex justify-between">
              <span>Scan</span>
              <span>ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span>Sync</span>
              <span>ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>Signal</span>
              <span className="text-blue-300">+87%</span>
            </div>
          </div>
        </div>

        {/* Bottom Terrain */}
        <div className="absolute bottom-0 left-0 h-40 w-full overflow-hidden opacity-40">
          <svg
            viewBox="0 0 1440 320"
            className="h-full w-full animate-wave"
            preserveAspectRatio="none"
          >
            <path
              fill="none"
              stroke="#008cff"
              strokeWidth="1"
              d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: pingSlow 4s infinite;
        }

        .animate-wave {
          animation: wave 6s ease-in-out infinite alternate;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pingSlow {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }

        @keyframes wave {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </div>
  );
}
