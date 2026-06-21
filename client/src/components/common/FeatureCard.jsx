import { motion } from "framer-motion";

function FeatureCard({
  icon,
  title,
  description,
}) {

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        glass
        rounded-3xl
        p-6
        border
        border-white/10
        hover:border-cyan-400/40
        transition-all
        duration-300
      "
    >

      <div
        className="
          w-16
          h-16
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          flex
          items-center
          justify-center
          mb-6
          glow
        "
      >
        {icon}
      </div>

      <h3
        className="
          text-2xl
          font-bold
          mb-4
        "
      >
        {title}
      </h3>

      <p
        className="
          text-gray-400
          leading-relaxed
        "
      >
        {description}
      </p>

    </motion.div>
  );
}

export default FeatureCard;