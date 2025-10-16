import { Button } from "../../ui/button";
import { motion } from "motion/react";
import { AfricanPattern } from "../AfricanPattern";

interface SplashScreenV2Props {
  onStart: () => void;
}

export function SplashScreenV2({ onStart }: SplashScreenV2Props) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#6BCB77] via-[#FFD56B] to-[#C85C5C]">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <AfricanPattern variant="dots" color="#ffffff" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between px-6 py-12">
        {/* Top Section */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center space-y-6"
          >
            {/* Logo Circle */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center"
            >
              <span className="text-6xl">🌿</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-white text-6xl mb-3">Ngunga</h1>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                <p className="text-white text-xl">
                  Apprends le Lari en t'amusant 🌿
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-md space-y-4"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center">
            <p className="text-white/90 text-lg">
              Découvre la langue et la culture Kongo à travers des leçons
              ludiques et interactives
            </p>
          </div>

          <Button
            onClick={onStart}
            size="lg"
            className="w-full py-7 bg-white text-[#6BCB77] hover:bg-white/90 rounded-full shadow-2xl text-xl"
          >
            Commencer l'aventure ✨
          </Button>

          <p className="text-white/70 text-center text-sm">
            Rejoins + de 10 000 apprenants
          </p>
        </motion.div>
      </div>
    </div>
  );
}
