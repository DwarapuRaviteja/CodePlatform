import { motion } from "framer-motion";

function StatsCard({
  number,
  title,
  description,
}) {

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        glass
        rounded-3xl
        p-7
        border
        border-white/10
        hover:border-cyan-400/40
        transition-all
        duration-300
      "
    >

      <h2
        className="
          text-5xl
          font-black
          gradient-text
        "
      >
        {number}
      </h2>

      <h3
        className="
          text-2xl
          font-bold
          mt-5
        "
      >
        {title}
      </h3>

      <p
        className="
          text-gray-400
          mt-4
          leading-relaxed
        "
      >
        {description}
      </p>

    </motion.div>
  );
}

export default StatsCard;