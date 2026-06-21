import { motion } from "framer-motion";

import {  Sparkles,  Code2,  BrainCircuit,} from "lucide-react";

import { Link } from "react-router-dom";

function HeroSection() {

  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
      "
    >

      <div
        className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-cyan-500/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-20
          right-20
          w-80
          h-80
          bg-violet-500/20
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          text-center
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            glass
            mb-8
          "
        >

          <Sparkles
            size={18}
            className="text-cyan-400"
          />

          <span className="text-gray-300">
            AI Powered Coding Experience
          </span>

        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="
            text-6xl
            md:text-8xl
            font-black
            leading-tight
          "
        >

          Build
          <span className="gradient-text">
            {" "}Projects{" "}
          </span>

          <br />

          Learn With AI

        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="
            mt-8
            text-gray-400
            text-lg
            md:text-xl
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >

          Generate websites,
          understand every line of code,
          test applications instantly,
          and explore futuristic
          AI-powered development workflows.

        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
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
              font-bold
              text-lg
              glow
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Start Building
          </Link>

          <Link
            to="/playground"
            className="
              px-10
              py-5
              rounded-2xl
              glass
              font-bold
              text-lg
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >
            Open Playground
          </Link>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            mt-24
          "
        >

          <div className="glass rounded-3xl p-6">

            <Code2
              size={40}
              className="text-cyan-400 mb-5"
            />

            <h3
              className="
                text-2xl
                font-bold
                mb-3
              "
            >
              AI Code Generation
            </h3>

            <p className="text-gray-400">
              Generate frontend projects
              instantly using prompts.
            </p>

          </div>

          <div className="glass rounded-3xl p-6">

            <BrainCircuit
              size={40}
              className="text-violet-400 mb-5"
            />

            <h3
              className="
                text-2xl
                font-bold
                mb-3
              "
            >
              Smart Explanations
            </h3>

            <p className="text-gray-400">
              Understand every line of code
              with beginner-friendly AI explanations.
            </p>

          </div>

          <div className="glass rounded-3xl p-6">

            <Sparkles
              size={40}
              className="text-pink-400 mb-5"
            />

            <h3
              className="
                text-2xl
                font-bold
                mb-3
              "
            >
              Live Playground
            </h3>

            <p className="text-gray-400">
              Test HTML CSS JS projects
              instantly in real-time.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default HeroSection;