import { motion } from "framer-motion";

function FloatingBadge({
  text,
  top = "0%",
  left = "0%",
  delay = 0,
}) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 1,
          delay,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className="
        absolute
        glass
        px-5
        py-3
        rounded-2xl
        border
        border-white/10
        text-sm
        font-medium
        text-gray-200
        shadow-xl
      "
      style={{
        top,
        left,
      }}
    >

      {text}

    </motion.div>
  );
}

export default FloatingBadge;