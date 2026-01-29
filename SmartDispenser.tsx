import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Snowflake, Citrus, ChevronLeft, Wine } from 'lucide-react';

// Assets
const cocaColaLogo = undefined;
const fantaLogo = undefined;
const spriteLogo = undefined;
const cassiseLogo = undefined;
const pechePassionLogo = undefined;
const pastequeLogo = undefined;
const citronLogo = undefined;

const beverageConfigs: any = {
  water: { name: 'Water', liquidGradient: 'bg-gradient-to-t from-cyan-400/80 to-blue-300/60', hasBubbles: false, color: '#22d3ee' },
  coca: { name: 'Coca Cola', logo: cocaColaLogo, liquidGradient: 'bg-gradient-to-t from-amber-950 to-amber-900', hasBubbles: true, color: '#78350f' },
  fanta: { name: 'Fanta', logo: fantaLogo, liquidGradient: 'bg-gradient-to-t from-orange-600 to-orange-400', hasBubbles: true, color: '#f97316' },
  sprite: { name: 'Sprite', logo: spriteLogo, liquidGradient: 'bg-gradient-to-t from-lime-300/70 to-lime-200/50', hasBubbles: true, color: '#bef264' },
  cassise: { name: 'Cassise', logo: cassiseLogo, liquidGradient: 'bg-gradient-to-t from-purple-900 to-purple-600', hasBubbles: true, color: '#9333ea' },
  peche_passion: { name: 'Pêche', logo: pechePassionLogo, liquidGradient: 'bg-gradient-to-t from-orange-500 to-yellow-400', hasBubbles: false, color: '#f97316' },
  pasteque: { name: 'Pastèque', logo: pastequeLogo, liquidGradient: 'bg-gradient-to-t from-red-600 to-pink-400', hasBubbles: false, color: '#dc2626' },
  citron_jus: { name: 'Citron', logo: citronLogo, liquidGradient: 'bg-gradient-to-t from-lime-500 to-yellow-300', hasBubbles: false, color: '#65a30d' },
};

export function SmartDispenser() {
  const [selectedBeverage, setSelectedBeverage] = useState<any>(null);
  const [isDispensing, setIsDispensing] = useState(false);
  const [fillLevel, setFillLevel] = useState(0);
  const [addIce, setAddIce] = useState(false);
  const [addLemon, setAddLemon] = useState(false);
  const [menuView, setMenuView] = useState<'main' | 'soda' | 'jus'>('main');
  const [isFull, setIsFull] = useState(false);

  const handleDispense = (beverage: string) => {
    if (isDispensing || isFull) return;
    setSelectedBeverage(beverage);
    setIsDispensing(true);
    let level = 0;
    const interval = setInterval(() => {
      level += 1.2;
      if (level >= 100) {
        setFillLevel(100);
        clearInterval(interval);
        setIsDispensing(false);
        setIsFull(true);
      } else {
        setFillLevel(level);
      }
    }, 30);
  };

  const current = selectedBeverage ? beverageConfigs[selectedBeverage] : null;

  return (
    <div className="w-full min-h-screen bg-black p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-zinc-900/90 rounded-[40px] p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
          <h2 className="text-3xl font-black text-white italic text-center mb-10 uppercase tracking-tighter">
            <span className="text-[#d4ff00]">ALMUS</span> Dispenser
          </h2>

          {/* Cup View */}
          <div className="relative w-full h-96 mb-10 flex items-center justify-center bg-black/30 rounded-3xl border border-white/5">
            <div className="relative w-40 h-72 rounded-b-[3.5rem] border-4 border-white/10 bg-white/5 overflow-hidden shadow-inner">
              
              {/* Liquid */}
              {(isDispensing || isFull) && current && (
                <motion.div 
                  initial={{ height: 0 }} 
                  animate={{ height: `${fillLevel}%` }} 
                  className={`absolute bottom-0 left-0 right-0 ${current.liquidGradient}`}
                >
                  {/* Wave Top */}
                  <motion.div 
                    animate={{ x: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-2 left-0 w-[120%] h-4 bg-white/20 blur-sm rounded-full"
                  />

                  {/* Bubbles (Only for Soda) */}
                  {current.hasBubbles && (
                    <div className="absolute inset-0">
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "-10%", opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: Math.random() * 2 + 1, delay: i * 0.2 }}
                          className="absolute w-1 h-1 bg-white/40 rounded-full"
                          style={{ left: `${Math.random() * 100}%` }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Ice Cubes Animation */}
              <AnimatePresence>
                {addIce && isFull && (
                  <div className="absolute inset-0 pointer-events-none z-10">
                     {[...Array(6)].map((_, i) => (
                       <motion.div
                          key={i}
                          initial={{ y: -300, rotate: 0, opacity: 0 }}
                          animate={{ y: 220 - (i * 10), rotate: 45, opacity: 1 }}
                          className="absolute w-10 h-10 bg-white/30 border border-white/40 rounded-lg blur-[0.5px]"
                          style={{ left: `${15 + (i * 12)}%` }}
                       />
                     ))}
                  </div>
                )}
              </AnimatePresence>

              {/* Stream */}
              {isDispensing && (
                <motion.div 
                  initial={{ height: 0 }} 
                  animate={{ height: '100%' }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 bg-white/40 blur-[1px] z-20"
                />
              )}
            </div>
          </div>

          {/* Toppings Buttons */}
          <div className="flex gap-4 mb-8 justify-center">
            <button 
              onClick={() => setAddIce(!addIce)}
              className={`px-6 py-3 rounded-2xl border transition ${addIce ? 'bg-blue-500/20 border-blue-400 text-white' : 'border-white/10 text-zinc-500'}`}
            >
              <Snowflake className="inline mr-2" size={18}/> ICE
            </button>
            <button 
              onClick={() => setAddLemon(!addLemon)}
              className={`px-6 py-3 rounded-2xl border transition ${addLemon ? 'bg-yellow-500/20 border-yellow-400 text-white' : 'border-white/10 text-zinc-500'}`}
            >
              <Citrus className="inline mr-2" size={18}/> LEMON
            </button>
          </div>

          {/* Dynamic Menu */}
          <AnimatePresence mode="wait">
            {isFull ? (
              <motion.button 
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                onClick={() => { setIsFull(false); setFillLevel(0); setSelectedBeverage(null); }}
                className="w-full py-5 bg-[#d4ff00] text-black font-black uppercase rounded-2xl shadow-[0_0_20px_#d4ff0044] hover:scale-[1.02] active:scale-95 transition"
              >
                Take Your Drink & Get New Cup
              </motion.button>
            ) : menuView === 'main' ? (
              <div className="grid grid-cols-3 gap-4">
                <MenuBtn icon={<Droplet/>} label="Water" onClick={() => handleDispense('water')} />
                <MenuBtn icon={<Wine/>} label="Soda" onClick={() => setMenuView('soda')} />
                <MenuBtn icon={<Citrus/>} label="Jus" onClick={() => setMenuView('jus')} />
              </div>
            ) : (
              <div>
                <button onClick={() => setMenuView('main')} className="text-[#d4ff00] text-xs font-bold uppercase mb-4 flex items-center gap-1">
                  <ChevronLeft size={16}/> Back to Main Menu
                </button>
                <div className="grid grid-cols-4 gap-4">
                  {menuView === 'soda' ? (
                    <>
                      <FlavorCard img={cocaColaLogo} label="Coca" onClick={() => handleDispense('coca')} />
                      <FlavorCard img={fantaLogo} label="Fanta" onClick={() => handleDispense('fanta')} />
                      <FlavorCard img={spriteLogo} label="Sprite" onClick={() => handleDispense('sprite')} />
                    </>
                  ) : (
                    <>
                      <FlavorCard img={cassiseLogo} label="Cassise" onClick={() => handleDispense('cassise')} />
                      <FlavorCard img={pechePassionLogo} label="Pêche" onClick={() => handleDispense('peche_passion')} />
                      <FlavorCard img={pastequeLogo} label="Pastèque" onClick={() => handleDispense('pasteque')} />
                      <FlavorCard img={citronLogo} label="Citron" onClick={() => handleDispense('citron_jus')} />
                    </>
                  )}
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Sub-Components
const MenuBtn = ({ icon, label, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#d4ff00] transition-all group">
    <div className="text-zinc-500 group-hover:text-[#d4ff00]">{icon}</div>
    <span className="text-white text-[10px] font-black uppercase">{label}</span>
  </button>
);

const FlavorCard = ({ img, label, onClick }: any) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 group active:scale-90 transition">
    <div className="w-16 h-16 rounded-full bg-white p-2 shadow-lg group-hover:ring-4 group-hover:ring-[#d4ff00] overflow-hidden">
      <img src={img} alt={label} className="w-full h-full object-contain" />
    </div>
    <span className="text-[9px] text-zinc-500 font-bold uppercase group-hover:text-white">{label}</span>
  </button>
);