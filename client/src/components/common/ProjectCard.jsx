import { motion } from "framer-motion";

import {  ExternalLink,  Copy,  Check,} from "lucide-react";

import { useState } from "react";

function ProjectCard({
  title,
  description,
  tags = [],
  code = "",
  preview = "#",
}) {

  const [copied, setCopied] =
    useState(false);

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {

        setCopied(false);

      }, 2000);

    } catch (error) {

      console.log(error);

    }

  };

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
        rounded-[35px]
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
          w-52
          h-52
          bg-cyan-500/10
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          p-7
        "
      >

        <div
          className="
            flex
            items-start
            justify-between
            gap-5
          "
        >

          <div>

            <h2
              className="
                text-3xl
                font-black
              "
            >
              {title}
            </h2>

            <p
              className="
                text-gray-400
                mt-4
                leading-relaxed
              "
            >
              {description}
            </p>

          </div>

          <button
            onClick={handleCopy}
            className="
              p-3
              rounded-2xl
              bg-white/5
              hover:bg-cyan-500
              transition-all
              duration-300
              shrink-0
            "
          >

            {
              copied
              ? <Check size={18} />
              : <Copy size={18} />
            }

          </button>

        </div>

        <div
          className="
            flex
            flex-wrap
            gap-3
            mt-6
          "
        >

          {
            tags.map((tag, index) => (

              <div
                key={index}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-sm
                  text-cyan-300
                "
              >
                {tag}
              </div>

            ))
          }

        </div>

        <a
          href={preview}
          target="_blank"
          rel="noreferrer"
          className="
            mt-8
            inline-flex
            items-center
            gap-3
            px-6
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            font-bold
            hover:scale-105
            transition-all
            duration-300
          "
        >

          Open Preview

          <ExternalLink size={18} />

        </a>

      </div>

    </motion.div>
  );
}

export default ProjectCard;