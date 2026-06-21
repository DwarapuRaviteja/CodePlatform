import { useState } from "react";

import Editor from "@monaco-editor/react";

import {  Code2,  Download,} from "lucide-react";

import CopyButton from "../common/CopyButton";

function CodeOutputPanel({ response }) {

  const [activeTab, setActiveTab] = useState("html");

  const tabs = [
    {
      id: "html",
      label: "HTML",
      language: "html",
    },
    {
      id: "css",
      label: "CSS",
      language: "css",
    },
    {
      id: "js",
      label: "JavaScript",
      language: "javascript",
    },
  ];

  const getCurrentCode = () => {

    if (!response) return "";

    return response[activeTab] || "";

  };

  const downloadCode = () => {

    const code = getCurrentCode();

    const extensions = {
      html: "html",
      css: "css",
      js: "js",
    };

    const blob = new Blob(
      [code],
      { type: "text/plain" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download =
      `generated-code.${extensions[activeTab]}`;

    a.click();

    URL.revokeObjectURL(url);

  };

  return (
    <div
      className="
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
          px-5
          py-4
          border-b
          border-white/10
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
              bg-violet-500
              flex
              items-center
              justify-center
            "
          >
            <Code2 size={20} />
          </div>

          <div>

            <h2
              className="
                text-2xl
                font-bold
              "
            >
              Generated Code
            </h2>

            <p className="text-sm text-gray-400">
              AI generated output
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

          <CopyButton text={getCurrentCode()} />

          <button
            onClick={downloadCode}
            className="
              p-3
              rounded-2xl
              bg-cyan-500
              hover:bg-cyan-400
              transition-all
            "
          >
            <Download size={18} />
          </button>

        </div>

      </div>

      <div
        className="
          flex
          items-center
          gap-3
          px-5
          py-4
          border-b
          border-white/10
        "
      >

        {
          tabs.map((tab) => (

            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-5
                py-2.5
                rounded-2xl
                transition-all
                duration-300
                font-medium

                ${
                  activeTab === tab.id
                  ? "bg-cyan-500 glow"
                  : "bg-white/5 hover:bg-white/10"
                }
              `}
            >
              {tab.label}
            </button>

          ))
        }

      </div>

      <div className="flex-1">

        <Editor
          height="100%"
          theme="vs-dark"
          language={
            tabs.find(
              (tab) => tab.id === activeTab
            )?.language
          }
          value={getCurrentCode()}
          options={{
            fontSize: 14,
            minimap: {
              enabled: false,
            },
            wordWrap: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: {
              top: 20,
            },
          }}
        />

      </div>

    </div>
  );
}

export default CodeOutputPanel;