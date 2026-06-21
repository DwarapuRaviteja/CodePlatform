import { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";

import {
  ArrowLeft,
  Trash2,
  Save,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import LivePreviewCard from "../components/common/LivePreviewCard";

function Playground() {

  const navigate = useNavigate();

  const STORAGE_KEY =
    "testcode-playground";

  const EXPIRY_TIME =
    30 * 60 * 1000;

  const [html, setHtml] =
    useState("");

  const [css, setCss] =
    useState("");

  const [js, setJs] =
    useState("");

  const [activeTab,
    setActiveTab] =
    useState("html");

  useEffect(() => {

    const stored =
      JSON.parse(
        localStorage.getItem(
          STORAGE_KEY
        )
      );

    if (!stored) return;

    const isExpired =
      Date.now() - stored.savedAt >
      EXPIRY_TIME;

    if (isExpired) {

      localStorage.removeItem(
        STORAGE_KEY
      );

      return;

    }

    setHtml(stored.html || "");
    setCss(stored.css || "");
    setJs(stored.js || "");

  }, []);

  useEffect(() => {

    const saveTimeout =
      setTimeout(() => {

        localStorage.setItem(

          STORAGE_KEY,

          JSON.stringify({

            html,

            css,

            js,

            savedAt: Date.now(),

          })

        );

      }, 1000);

    return () =>
      clearTimeout(saveTimeout);

  }, [html, css, js]);

  const clearAll = () => {

    setHtml("");
    setCss("");
    setJs("");

    localStorage.removeItem(
      STORAGE_KEY
    );

  };

  const tabs = [
    {
      id: "html",
      label: "HTML",
      language: "html",
      value: html,
      setter: setHtml,
    },
    {
      id: "css",
      label: "CSS",
      language: "css",
      value: css,
      setter: setCss,
    },
    {
      id: "js",
      label: "JavaScript",
      language: "javascript",
      value: js,
      setter: setJs,
    },
  ];

  const currentTab =
    tabs.find(
      (tab) =>
        tab.id === activeTab
    );

  return (
    <div
      className="
        min-h-screen
        bg-[#050816]
        text-white
        px-6
        py-6
      "
    >

      <div
        className="
          max-w-[1800px]
          mx-auto
          space-y-6
        "
      >

        <div
          className="
            glass
            rounded-[35px]
            border
            border-white/10
            px-8
            py-5
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h1
              className="
                text-5xl
                font-black
                gradient-text
              "
            >
              TestCode
            </h1>

            <p
              className="
                text-gray-400
                mt-2
              "
            >
              Live coding playground
            </p>

          </div>

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <button
              onClick={() =>
                navigate(-1)
              }
              className="
                px-6
                py-3
                rounded-2xl
                glass
                border
                border-white/10
                flex
                items-center
                gap-3
                hover:bg-white/10
                transition-all
                duration-300
              "
            >

              <ArrowLeft size={18} />

              Back

            </button>

            <button
              className="
                px-6
                py-3
                rounded-2xl
                bg-cyan-500
                flex
                items-center
                gap-3
                font-semibold
              "
            >

              <Save size={18} />

              Auto Saved

            </button>

            <button
              onClick={clearAll}
              className="
                px-6
                py-3
                rounded-2xl
                bg-red-500
                hover:bg-red-400
                transition-all
                duration-300
                flex
                items-center
                gap-3
                font-semibold
              "
            >

              <Trash2 size={18} />

              Clear

            </button>

          </div>

        </div>

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
          "
        >

          <div
            className="
              glass
              rounded-[35px]
              border
              border-white/10
              overflow-hidden
              h-[850px]
              flex
              flex-col
            "
          >

            <div
              className="
                flex
                items-center
                gap-4
                px-6
                py-5
                border-b
                border-white/10
                bg-black/20
              "
            >

              {
                tabs.map((tab) => (

                  <button
                    key={tab.id}
                    onClick={() =>
                      setActiveTab(
                        tab.id
                      )
                    }
                    className={`
                      px-5
                      py-3
                      rounded-2xl
                      font-semibold
                      transition-all
                      duration-300

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
                  currentTab.language
                }
                value={
                  currentTab.value
                }
                onChange={(value) =>
                  currentTab.setter(
                    value || ""
                  )
                }
                options={{
                  minimap: {
                    enabled: false,
                  },

                  fontSize: 15,

                  automaticLayout: true,

                  wordWrap: "on",

                  scrollBeyondLastLine: false,

                  smoothScrolling: true,

                  padding: {
                    top: 20,
                  },
                }}
              />

            </div>

          </div>

          <div
            className="
              h-[850px]
            "
          >

            <LivePreviewCard
              html={html}
              css={css}
              js={js}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Playground;