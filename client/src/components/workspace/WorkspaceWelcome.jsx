import {
  Sparkles,
  BrainCircuit,
  Code2,
} from "lucide-react";

function WorkspaceWelcome() {

  const cards = [
    {
      icon: (
        <Sparkles
          size={30}
          className="
            text-cyan-400
          "
        />
      ),

      title:
        "Generate Projects",

      description:
        "Create responsive frontend projects instantly using AI prompts.",
    },

    {
      icon: (
        <BrainCircuit
          size={30}
          className="
            text-violet-400
          "
        />
      ),

      title:
        "Learn Visually",

      description:
        "Understand generated code using beginner-friendly explanations.",
    },

    {
      icon: (
        <Code2
          size={30}
          className="
            text-pink-400
          "
        />
      ),

      title:
        "Practice Faster",

      description:
        "Experiment, edit and test projects using TestCode playground.",
    },
  ];

  return (
    <div
      className="
        h-full
        glass
        rounded-[40px]
        border
        border-white/10
        p-10
        flex
        flex-col
        justify-center
      "
    >

      <div
        className="
          text-center
        "
      >


        <h1
          className="
            text-6xl
            font-black
            mt-10
            leading-tight
          "
        >

          Welcome To
          <span className="gradient-text">
            {" "}LEARN TO CODE
          </span>

        </h1>

        <p
          className="
            text-gray-400
            text-xl
            leading-relaxed
            max-w-3xl
            mx-auto
            mt-8
          "
        >

          Generate projects using AI,
          understand code visually,
          improve frontend skills,
          and practice coding inside
          a futuristic workspace.

        </p>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          mt-20
        "
      >

        {
          cards.map((card, index) => (

            <div
              key={index}
              className="
                glass
                rounded-[30px]
                border
                border-white/10
                p-8
                hover:translate-y-[-6px]
                transition-all
                duration-300
              "
            >

              <div
                className="
                  mb-6
                "
              >
                {card.icon}
              </div>

              <h2
                className="
                  text-2xl
                  font-black
                  mb-4
                "
              >
                {card.title}
              </h2>

              <p
                className="
                  text-gray-400
                  leading-relaxed
                "
              >
                {card.description}
              </p>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default WorkspaceWelcome;