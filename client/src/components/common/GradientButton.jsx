import { motion } from "framer-motion";

function GradientButton({
  text,
  onClick,
  icon,
  className = "",
  type = "button",
}) {

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      type={type}
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        px-8
        py-4
        rounded-2xl
        font-bold
        text-white
        bg-gradient-to-r
        from-cyan-500
        via-blue-500
        to-violet-500
        shadow-xl
        transition-all
        duration-300
        flex
        items-center
        justify-center
        gap-3
        glow
        ${className}
      `}
    >

      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition-all
          duration-500
          bg-white/10
        "
      />

      <span className="relative z-10">
        {icon}
      </span>

      <span className="relative z-10">
        {text}
      </span>

    </motion.button>
  );
}

export default GradientButton;