import { useState } from "react";

import {
  Sparkles,
  Wand2,
  Loader2,
} from "lucide-react";

import API from "../../services/api";

function PromptPanel({
  setResponse,
}) {

  const [prompt,
    setPrompt] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const generateProject =
  async () => {

    if (!prompt.trim()) {

      return alert(
        "Please enter a prompt"
      );

    }

    try {

      setLoading(true);

      const storedHistory =
        JSON.parse(
          localStorage.getItem(
            "prompt-history"
          )
        ) || [];

      const updatedHistory = [
        prompt,
        ...storedHistory.filter(
          (item) =>
            item !== prompt
        ),
      ].slice(0, 20);

      localStorage.setItem(

        "prompt-history",

        JSON.stringify(
          updatedHistory
        )

      );

      const res =
        await API.post(
          "/generate",
          {
            prompt,
          }
        );

      if (!res.data.success) {

        throw new Error(
          "Generation failed"
        );

      }

      setResponse({

        prompt,

        html:
          res.data.html || "",

        css:
          res.data.css || "",

        js:
          res.data.js || "",

        explanation: {

          html:
            res.data.explanation
              ?.html || "",

          css:
            res.data.explanation
              ?.css || "",

          js:
            res.data.explanation
              ?.js || "",

        },

      });

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data
          ?.message ||

        "AI generation failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div
      className="
        glass
        rounded-[35px]
        border
        border-white/10
        p-6
      "
    >

      <div
        className="
          flex
          items-center
          gap-4
          mb-8
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

          <Sparkles size={30} />

        </div>

        <div>

          <h2
            className="
              text-3xl
              font-black
            "
          >
            AI Project Prompt
          </h2>

          <p className="text-gray-400 mt-2">
            Describe the project you want to build
          </p>

        </div>

      </div>

      <textarea
        rows={11}
        value={prompt}
        onChange={(e) =>
          setPrompt(
            e.target.value
          )
        }
        placeholder="
Create a futuristic portfolio website
with glassmorphism cards,
animated hero section,
responsive navbar,
dark theme and smooth scrolling...
        "
        className="
          w-full
          rounded-[30px]
          bg-white/5
          border
          border-white/10
          outline-none
          resize-none
          px-6
          py-5
          text-white
          placeholder:text-gray-500
          leading-relaxed
          focus:border-cyan-400
          transition-all
          duration-300
        "
      />

      <button
        onClick={generateProject}
        disabled={loading}
        className="
          w-full
          mt-6
          h-16
          rounded-[25px]
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          font-bold
          text-lg
          flex
          items-center
          justify-center
          gap-4
          hover:scale-[1.02]
          transition-all
          duration-300
          glow
        "
      >

        {
          loading ? (

            <>

              <Loader2
                size={22}
                className="
                  animate-spin
                "
              />

              Generating Project...

            </>

          ) : (

            <>

              <Wand2 size={22} />

              Generate AI Project

            </>

          )
        }

      </button>

    </div>
  );
}

export default PromptPanel;