import { motion } from "framer-motion";

import {  Star,  Quote,} from "lucide-react";

function TestimonialCard({
  name,
  role,
  message,
  image,
}) {

  return (
    <motion.div
      whileHover={{
        y: -10,
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
        className="
          absolute
          top-0
          right-0
          w-32
          h-32
          bg-cyan-500/10
          rounded-full
          blur-3xl
        "
      />

      <Quote
        size={40}
        className="
          text-cyan-400
          mb-6
        "
      />

      <p
        className="
          text-gray-300
          leading-relaxed
          text-lg
        "
      >
        {message}
      </p>

      <div
        className="
          flex
          items-center
          gap-1
          mt-6
        "
      >

        {
          Array.from({ length: 5 }).map((_, index) => (

            <Star
              key={index}
              size={18}
              fill="#facc15"
              color="#facc15"
            />

          ))
        }

      </div>

      <div
        className="
          flex
          items-center
          gap-4
          mt-8
        "
      >

        <img
          src={image}
          alt={name}
          className="
            w-16
            h-16
            rounded-2xl
            object-cover
          "
        />

        <div>

          <h3
            className="
              text-xl
              font-bold
            "
          >
            {name}
          </h3>

          <p className="text-gray-400">
            {role}
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default TestimonialCard;