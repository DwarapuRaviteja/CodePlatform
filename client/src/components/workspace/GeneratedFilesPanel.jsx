import { Copy, Check } from "lucide-react";
import { useState } from "react";

function GeneratedFilesPanel({ response }) {
  const [copied, setCopied] = useState("");

  const copyCode = (text, type) => {
    navigator.clipboard.writeText(text);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  const files = [
    {
      title: "HTML",
      type: "html",
      code: response.html || "// HTML code will appear here",
    },
    {
      title: "CSS",
      type: "css",
      code: response.css || "/* CSS code will appear here */",
    },
    {
      title: "JavaScript",
      type: "js",
      code: response.js || "// JavaScript code will appear here",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-5
      "
    >
      {files.map((file) => (
        <div
          key={file.type}
          className="
            glass
            rounded-[25px]
            border
            border-white/10
            overflow-hidden
            bg-white/5
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              px-4
              py-3
              border-b
              border-white/10
            "
          >
            <h3
              className="
                font-bold
                text-lg
                text-white
              "
            >
              {file.title}
            </h3>

            <button
              onClick={() =>
                copyCode(
                  file.code,
                  file.type
                )
              }
              className="
                text-cyan-400
                hover:scale-110
                transition-all
              "
            >
              {copied === file.type ? (
                <Check size={18} />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>

          <div
            className="
              h-[450px]
              overflow-y-auto
              p-4
            "
          >
            <pre
              className="
                text-sm
                text-gray-300
                whitespace-pre-wrap
                break-words
              "
            >
              <code>
  {typeof file.code === "string"
    ? file.code
    : JSON.stringify(
        file.code,
        null,
        2
      )}
</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GeneratedFilesPanel;