import { motion } from "framer-motion";

import {  Copy,  Check,  Code2,} from "lucide-react";

import { useState } from "react";

function CodePreviewCard({
  title,
  language,
  code,
}) {

  const [copied, setCopied] = useState(false);

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
        y: -8,
      }}
      transition={{
        duration: 0.3,
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
            gap-3
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-cyan-500
              flex
              items-center
              justify-center
            "
          >

            <Code2 size={20} />

          </div>

          <div>

            <h3
              className="
                text-xl
                font-bold
              "
            >
              {title}
            </h3>

            <p className="text-sm text-gray-400">
              {language}
            </p>

          </div>

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
          "
        >

          {
            copied
            ? <Check size={18} />
            : <Copy size={18} />
          }

        </button>

      </div>

      <pre
        className="
          overflow-x-auto
          p-6
          text-sm
          text-gray-300
          font-mono
          leading-relaxed
        "
      >

        <code>
          {code}
        </code>

      </pre>

    </motion.div>
  );
}

export default CodePreviewCard;