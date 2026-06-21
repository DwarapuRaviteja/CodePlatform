import {  Clock3,  Trash2,} from "lucide-react";

import { motion } from "framer-motion";

function PromptHistoryCard({
  prompt,
  onReuse,
  onDelete,
}) {

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        glass
        rounded-3xl
        p-5
        border
        border-white/10
        flex
        items-start
        justify-between
        gap-5
      "
    >

      <div
        className="
          flex
          items-start
          gap-4
          flex-1
        "
      >

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-cyan-500
            flex
            items-center
            justify-center
            shrink-0
          "
        >

          <Clock3 size={20} />

        </div>

        <div>

          <h3
            className="
              text-lg
              font-bold
              mb-2
            "
          >
            Recent Prompt
          </h3>

          <p
            className="
              text-gray-400
              leading-relaxed
            "
          >
            {prompt}
          </p>

        </div>

      </div>

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <button
          onClick={onReuse}
          className="
            px-4
            py-2
            rounded-2xl
            bg-cyan-500
            hover:bg-cyan-400
            transition-all
            duration-300
            text-sm
            font-medium
          "
        >
          Reuse
        </button>

        <button
          onClick={onDelete}
          className="
            p-3
            rounded-2xl
            bg-red-500/20
            hover:bg-red-500
            transition-all
            duration-300
          "
        >

          <Trash2 size={18} />

        </button>

      </div>

    </motion.div>
  );
}

export default PromptHistoryCard;