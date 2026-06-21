import { motion } from "framer-motion";

import {  Sparkles,  ArrowRight,} from "lucide-react";

import { Link } from "react-router-dom";

function CTASection() {

  return (
    <section
      className="
        relative
        py-28
        px-6
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-500/10
          via-violet-500/10
          to-pink-500/10
        "
      />

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-cyan-500/10
          rounded-full
          blur-3xl
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          glass
          rounded-[40px]
          border
          border-white/10
          p-12
          text-center
        "
      >

        <div
          className="
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400/30
            mb-8
          "
        >

          <Sparkles
            size={18}
            className="text-cyan-400"
          />

          <span className="text-gray-300">
            AI Powered Development Platform
          </span>

        </div>

        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            leading-tight
          "
        >

          Start Building
          <span className="gradient-text">
            {" "}With AI
          </span>

          <br />

          Today

        </h2>

        <p
          className="
            mt-8
            text-gray-400
            text-lg
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >

          Generate projects,
          understand concepts,
          test applications,
          and experience futuristic
          AI-assisted coding workflows.

        </p>

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-6
            mt-12
          "
        >

          <Link
            to="/workspace"
            className="
              px-10
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              flex
              items-center
              gap-3
              text-lg
              font-bold
              glow
              hover:scale-105
              transition-all
              duration-300
            "
          >

            Open Workspace

            <ArrowRight size={20} />

          </Link>

          <Link
            to="/playground"
            className="
              px-10
              py-5
              rounded-2xl
              glass
              text-lg
              font-bold
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >
            Open Playground
          </Link>

        </div>

      </motion.div>

    </section>
  );
}

export default CTASection;