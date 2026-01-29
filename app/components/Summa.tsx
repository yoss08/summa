import React from "react";
import padel4 from "../../assets/padel4.jpg";

interface SummaProps {
  onBack: () => void;
}

export function Summa({ onBack }: SummaProps) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)` }} />
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EEFF00] flex items-center justify-center">
              <span className="text-black font-bold">U</span>
            </div>
            <span className="text-white tracking-widest font-black">SUMMA</span>
          </div>
          <button
            onClick={onBack}
            className="px-4 py-2 rounded-md bg-[#EEFF00] text-black font-bold"
          >
            ← Back
          </button>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-4">SUMMA</h1>
              <p className="text-gray-400 text-lg mb-6">Padel Sports Dashboard — live scores, match insights and player stats designed for coaches and fans.</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-[#d4ff00] text-black font-bold rounded-lg">Start Live</button>
                <button className="px-6 py-3 border border-white/20 text-white rounded-lg">View Analytics</button>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <img src={padel4} alt="Padel" className="w-full h-96 object-cover" />
            </div>
          </div>
        </section>

        {/* Stats / Cards */}
        <section className="px-8 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-2xl font-black">Live Matches</h4>
              <p className="text-gray-400">12 ongoing</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-2xl font-black">Top Players</h4>
              <p className="text-gray-400">Rankings & stats</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="text-2xl font-black">Recent Results</h4>
              <p className="text-gray-400">Scores & highlights</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
