import { motion } from "framer-motion";

import {  BrainCircuit,} from "lucide-react";

function AIThinkingLoader() {

  return (
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
      "
    >

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          w-28
          h-28
          rounded-full
          border-4
          border-cyan-500/30
          border-t-cyan-400
          flex
          items-center
          justify-center
          glow
        "
      >

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >

          <BrainCircuit
            size={42}
            className="text-cyan-400"
          />

        </motion.div>

      </motion.div>

      <motion.h2
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="
          mt-8
          text-3xl
          font-black
          gradient-text
        "
      >
        AI Is Thinking...
      </motion.h2>

      <p
        className="
          mt-4
          text-gray-400
          max-w-md
          leading-relaxed
        "
      >

        Generating optimized code,
        explanations,
        and futuristic UI components
        for your project.

      </p>

    </div>
  );
}

export default AIThinkingLoader;