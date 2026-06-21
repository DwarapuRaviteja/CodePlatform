import { Sparkles } from "lucide-react";

function EmptyState() {

  return (
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-8
      "
    >

      <div
        className="
          w-24
          h-24
          rounded-[30px]
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
          flex
          items-center
          justify-center
          glow
          mb-8
        "
      >

        <Sparkles size={40} />

      </div>

      <h2
        className="
          text-3xl
          font-black
          mb-4
        "
      >
        Generate Your First Project
      </h2>

      <p
        className="
          text-gray-400
          max-w-md
          leading-relaxed
          text-lg
        "
      >

        Type a prompt in the workspace
        and DevSphere AI will generate
        frontend code,
        explanations,
        and interactive project structures.

      </p>

    </div>
  );
}

export default EmptyState;