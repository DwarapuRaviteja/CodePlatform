import {  AlertTriangle,  RefreshCcw,} from "lucide-react";

import { motion } from "framer-motion";

function ErrorMessage({
  title = "Something went wrong",
  message = "An unexpected error occurred.",
  onRetry,
}) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        glass
        rounded-[35px]
        border
        border-red-500/20
        p-8
        text-center
        max-w-2xl
        mx-auto
      "
    >

      <div
        className="
          w-24
          h-24
          rounded-[30px]
          bg-red-500/20
          flex
          items-center
          justify-center
          mx-auto
          mb-8
        "
      >

        <AlertTriangle
          size={42}
          className="text-red-400"
        />

      </div>

      <h2
        className="
          text-4xl
          font-black
          mb-5
        "
      >
        {title}
      </h2>

      <p
        className="
          text-gray-400
          text-lg
          leading-relaxed
          max-w-xl
          mx-auto
        "
      >
        {message}
      </p>

      {
        onRetry && (

          <button
            onClick={onRetry}
            className="
              mt-8
              px-8
              py-4
              rounded-2xl
              bg-red-500
              hover:bg-red-400
              transition-all
              duration-300
              flex
              items-center
              gap-3
              mx-auto
              font-bold
            "
          >

            <RefreshCcw size={20} />

            Retry

          </button>

        )
      }

    </motion.div>
  );
}

export default ErrorMessage;