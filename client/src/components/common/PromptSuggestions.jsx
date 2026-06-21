import { Sparkles } from "lucide-react";

function PromptSuggestions({
  onSelect,
}) {

  const prompts = [
    "Create futuristic portfolio website",
    "Build responsive hospital management dashboard",
    "Generate animated login page",
    "Create Netflix clone landing page",
    "Build glassmorphism calculator",
    "Generate weather app with API integration",
    "Create AI chatbot frontend UI",
    "Build modern ecommerce landing page",
  ];

  return (
    <div className="w-full">

      <div
        className="
          flex
          items-center
          gap-3
          mb-5
        "
      >

        <Sparkles
          size={20}
          className="text-cyan-400"
        />

        <h2
          className="
            text-xl
            font-bold
          "
        >
          Prompt Suggestions
        </h2>

      </div>

      <div
        className="
          flex
          flex-wrap
          gap-4
        "
      >

        {
          prompts.map((prompt, index) => (

            <button
              key={index}
              onClick={() => onSelect(prompt)}
              className="
                px-5
                py-3
                rounded-2xl
                glass
                border
                border-white/10
                hover:border-cyan-400
                hover:bg-cyan-500/10
                transition-all
                duration-300
                text-sm
                text-left
              "
            >
              {prompt}
            </button>

          ))
        }

      </div>

    </div>
  );
}

export default PromptSuggestions;