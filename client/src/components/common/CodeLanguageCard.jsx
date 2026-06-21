import { motion } from "framer-motion";

function CodeLanguageCard({
  icon,
  title,
  description,
  color = "from-cyan-500 to-blue-500",
}) {

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        glass
        rounded-3xl
        p-7
        border
        border-white/10
        overflow-hidden
      "
    >

      <div
        className={`
          absolute
          top-0
          right-0
          w-44
          h-44
          rounded-full
          blur-3xl
          opacity-20
          bg-gradient-to-r
          ${color}
        `}
      />

      <div className="relative z-10">

        <div
          className={`
            w-16
            h-16
            rounded-3xl
            bg-gradient-to-r
            ${color}
            flex
            items-center
            justify-center
            mb-6
            shadow-xl
          `}
        >

          {icon}

        </div>

        <h2
          className="
            text-2xl
            font-black
            mb-4
          "
        >
          {title}
        </h2>

        <p
          className="
            text-gray-400
            leading-relaxed
          "
        >
          {description}
        </p>

      </div>

    </motion.div>
  );
}

export default CodeLanguageCard;