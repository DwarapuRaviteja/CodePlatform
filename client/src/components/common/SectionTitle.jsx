import { motion } from "framer-motion";

function SectionTitle({
  title,
  subtitle,
  icon,
}) {

  return (
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
        duration: 0.7,
      }}
      className="
        flex
        items-center
        gap-4
      "
    >

      <div
        className="
          w-14
          h-14
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          flex
          items-center
          justify-center
          glow
        "
      >
        {icon}
      </div>

      <div>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          {title}
        </h2>

        <p className="text-gray-400 mt-1">
          {subtitle}
        </p>

      </div>

    </motion.div>
  );
}

export default SectionTitle;