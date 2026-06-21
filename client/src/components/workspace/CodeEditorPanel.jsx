import { useState } from "react";
import Editor from "@monaco-editor/react";

import {  Copy,  Check,  Download,  Code2,} from "lucide-react";

function CodeEditorPanel({
  response,
  activeFile = "html",
}) {
  const [copied, setCopied] =
    useState(false);

  const fileMap = {
    html: {
      label: "HTML",
      language: "html",
      code: response?.html || "",
    },

    css: {
      label: "CSS",
      language: "css",
      code: response?.css || "",
    },

    js: {
      label: "JavaScript",
      language: "javascript",
      code: response?.js || "",
    },
  };

  // SAFE FALLBACK
  const current =
    fileMap[activeFile] ||
    fileMap.html;

  const handleCopy =
    async () => {
      try {
        await navigator.clipboard.writeText(
          current.code
        );

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

  const downloadCode = () => {
    const extensions = {
      html: "html",
      css: "css",
      js: "js",
    };

    const blob = new Blob(
      [current.code],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      `generated.${
        extensions[
          activeFile
        ] || "html"
      }`;

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="
        glass
        rounded-[35px]
        border
        border-white/10
        overflow-hidden
        h-full
        flex
        flex-col
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-5
          px-6
          py-5
          border-b
          border-white/10
          bg-black/20
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              w-16
              h-16
              rounded-[28px]
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              flex
              items-center
              justify-center
              glow
            "
          >
            <Code2 size={28} />
          </div>

          <div>
            <h2
              className="
                text-3xl
                font-black
              "
            >
              {current.label} Editor
            </h2>

            <p
              className="
                text-gray-400
                mt-2
              "
            >
              AI generated source code
            </p>
          </div>
        </div>

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <button
            onClick={handleCopy}
            className="
              p-4
              rounded-2xl
              bg-white/5
              hover:bg-cyan-500
              transition-all
              duration-300
            "
          >
            {copied ? (
              <Check size={20} />
            ) : (
              <Copy size={20} />
            )}
          </button>

          <button
            onClick={downloadCode}
            className="
              p-4
              rounded-2xl
              bg-cyan-500
              hover:bg-cyan-400
              transition-all
              duration-300
            "
          >
            <Download size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1">
        <Editor
          height="100%"
          theme="vs-dark"
          language={
            current.language
          }
          value={
            typeof current.code ===
            "string"
              ? current.code
              : JSON.stringify(
                  current.code,
                  null,
                  2
                )
          }
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 14,
            automaticLayout: true,
            wordWrap: "on",
            smoothScrolling: true,
            scrollBeyondLastLine:
              false,
            padding: {
              top: 20,
            },
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;

