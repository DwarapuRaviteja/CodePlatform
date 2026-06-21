import { Copy, Check } from "lucide-react";
import { useState } from "react";

function CopyButton({ text }) {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {

        setCopied(false);

      }, 2000);

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <button
      onClick={handleCopy}
      className="
        p-3
        rounded-2xl
        bg-white/10
        hover:bg-cyan-500
        transition-all
        duration-300
        flex
        items-center
        justify-center
      "
    >

      {
        copied
        ? (
          <Check size={18} />
        )
        : (
          <Copy size={18} />
        )
      }

    </button>
  );
}

export default CopyButton;