import React, { useState } from "react";
import { Landing } from "./components/Landing";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CTASection } from "./components/CTASection";
import Scoreboard from "./components/Scoreboard";
import { SmartDispenser } from "../SmartDispenser";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'summa' | 'dispenser'>('landing');

  if (currentPage === 'landing') {
    return <Landing onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'dispenser') {
    return (
      <div className="min-h-screen bg-black">
        <button
          onClick={() => setCurrentPage('landing')}
          className="fixed top-8 left-8 z-50 px-6 py-3 bg-[#EEFF00] text-black font-bold rounded-lg hover:bg-[#EEFF00]/90 transition"
        >
          ← Back to Home
        </button>
        <div className="pt-20">
          <SmartDispenser />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <button
        onClick={() => setCurrentPage('landing')}
        className="fixed top-8 left-8 z-50 px-6 py-3 bg-[#EEFF00] text-black font-bold rounded-lg hover:bg-[#EEFF00]/90 transition"
      >
        ← Back to Home
      </button>
      <Header />

      <main className="pt-24">
        <Hero />
        <Features />

        <section id="summa" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <Scoreboard />
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
}