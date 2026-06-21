import { Sparkles } from "lucide-react";

import { motion } from "framer-motion";

function TopBanner() {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        w-full
        bg-gradient-to-r
        from-cyan-500/20
        via-blue-500/20
        to-violet-500/20
        border-b
        border-cyan-400/20
        backdrop-blur-lg
        px-6
        py-3
        flex
        items-center
        justify-center
        gap-3
        text-center
      "
    >

      <Sparkles
        size={18}
        className="text-cyan-400"
      />

      <p
        className="
          text-sm
          md:text-base
          text-gray-200
          font-medium
        "
      >

        DevSphere AI now supports
        futuristic frontend generation,
        live testing,
        and AI explanations.

      </p>

    </motion.div>
  );
}

export default TopBanner;