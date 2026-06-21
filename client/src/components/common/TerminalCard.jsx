import { motion } from "framer-motion";

function TerminalCard({
  title = "Terminal",
  lines = [],
}) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
      }}
      className="
        glass
        rounded-3xl
        overflow-hidden
        border
        border-white/10
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          px-5
          py-4
          border-b
          border-white/10
          bg-black/20
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-red-500
            "
          />

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-yellow-500
            "
          />

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-green-500
            "
          />

        </div>

        <h3
          className="
            text-sm
            text-gray-400
            font-medium
          "
        >
          {title}
        </h3>

        <div />

      </div>

      <div
        className="
          p-6
          font-mono
          text-sm
          space-y-4
          text-green-400
          min-h-[250px]
        "
      >

        {
          lines.map((line, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="text-cyan-400">
                $
              </span>

              {" "}

              {line}

            </motion.div>

          ))
        }

      </div>

    </motion.div>
  );
}

export default TerminalCard;