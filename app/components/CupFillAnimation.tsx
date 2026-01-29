import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Beverage {
  id: string;
  name: string;
  color: string;
  gradient: string;
}

interface CupFillAnimationProps {
  selectedBeverage: Beverage | null;
  isDispensing: boolean;
  fillLevel: number;
}

export function CupFillAnimation({ 
  selectedBeverage, 
  isDispensing, 
  fillLevel 
}: CupFillAnimationProps) {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Cup Container */}
      <div className="relative h-[500px] flex items-end justify-center">
        {/* Cup */}
        <div className="relative w-48 h-96 perspective-1000">
          {/* Glass Cup with Glassmorphism */}
          <div 
            className="relative w-full h-full rounded-b-3xl backdrop-blur-md bg-gradient-to-b from-white/20 to-white/10 border-2 border-white/30 shadow-2xl overflow-hidden"
            style={{
              clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
            }}
          >
            {/* Liquid Fill Animation */}
            <AnimatePresence>
              {isDispensing && selectedBeverage && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${fillLevel}%` }}
                  exit={{ opacity: 0 }}
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${selectedBeverage.gradient} opacity-80`}
                  style={{
                    filter: 'blur(0px)',
                    boxShadow: `0 -10px 30px ${selectedBeverage.color}`
                  }}
                >
                  {/* Liquid Surface with Animation */}
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 left-0 right-0 h-4 bg-white/20 rounded-full"
                  />
                  
                  {/* Bubbles for Carbonated Drinks */}
                  {selectedBeverage.id === "soda" && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ y: 0, x: Math.random() * 150 + 20, opacity: 0.7 }}
                          animate={{ 
                            y: -400,
                            opacity: 0
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                          className="absolute w-2 h-2 bg-white/40 rounded-full"
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glass Shine Effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" 
              style={{ clipPath: 'polygon(0% 0%, 30% 0%, 10% 100%, 0% 100%)' }} 
            />
          </div>

          {/* Straw */}
          <div className="absolute -top-8 right-12 w-2 h-32 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full transform rotate-12 shadow-lg" />
        </div>

        {/* Dispenser Nozzle */}
        {isDispensing && selectedBeverage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{
                height: ["20px", "40px", "20px"],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
              }}
              className={`w-1 bg-gradient-to-b ${selectedBeverage.gradient} rounded-full`}
              style={{
                boxShadow: `0 0 20px ${selectedBeverage.color}`
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Fill Percentage Display */}
      <AnimatePresence>
        {isDispensing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center mt-8"
          >
            <div className="text-6xl font-black text-[#d4ff00] mb-2">
              {fillLevel}%
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wide">
              Dispensing {selectedBeverage?.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
