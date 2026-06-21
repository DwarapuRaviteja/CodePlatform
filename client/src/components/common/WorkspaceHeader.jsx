import {  Sparkles,  Code2,  BrainCircuit,} from "lucide-react";

function WorkspaceHeader() {

  return (
    <div
      className="
        w-full
        glass
        rounded-[35px]
        border
        border-white/10
        p-7
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-8
      "
    >

      <div>

        <div
          className="
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            bg-cyan-500/10
            border
            border-cyan-400/20
            mb-5
          "
        >

          <Sparkles
            size={18}
            className="text-cyan-400"
          />

          <span className="text-gray-300">
            AI Workspace Active
          </span>

        </div>

        <h1
          className="
            text-4xl
            md:text-5xl
            font-black
            leading-tight
          "
        >

          Generate
          <span className="gradient-text">
            {" "}Projects{" "}
          </span>

          Instantly

        </h1>

        <p
          className="
            text-gray-400
            mt-5
            max-w-2xl
            leading-relaxed
            text-lg
          "
        >

          Describe your idea,
          generate frontend projects,
          understand the code,
          and test applications
          in real time.

        </p>

      </div>

      <div
        className="
          flex
          flex-wrap
          gap-5
        "
      >

        <div
          className="
            glass
            rounded-3xl
            px-6
            py-5
            min-w-[180px]
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-3xl
              bg-cyan-500
              flex
              items-center
              justify-center
              mb-4
            "
          >

            <Code2 size={26} />

          </div>

          <h3
            className="
              text-3xl
              font-black
            "
          >
            100+
          </h3>

          <p className="text-gray-400 mt-2">
            Project Templates
          </p>

        </div>

        <div
          className="
            glass
            rounded-3xl
            px-6
            py-5
            min-w-[180px]
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-3xl
              bg-violet-500
              flex
              items-center
              justify-center
              mb-4
            "
          >

            <BrainCircuit size={26} />

          </div>

          <h3
            className="
              text-3xl
              font-black
            "
          >
            AI
          </h3>

          <p className="text-gray-400 mt-2">
            Smart Explanations
          </p>

        </div>

      </div>

    </div>
  );
}

export default WorkspaceHeader;