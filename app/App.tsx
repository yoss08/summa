import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Features } from "@/app/components/Features";
import { CTASection } from "@/app/components/CTASection";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <CTASection />
    </div>
  );
}
