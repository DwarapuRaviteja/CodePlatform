import { motion } from "framer-motion";

function AnimatedGridBackground() {

  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-full
          bg-gradient-to-b
          from-transparent
          via-[#050816]/30
          to-[#050816]
        "
      />

    </div>
  );
}

export default AnimatedGridBackground;