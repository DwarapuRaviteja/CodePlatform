import {
  Code2,
} from "lucide-react";

function LoadingScreen() {

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-[#050816]
        flex
        items-center
        justify-center
      "
    >

      <div
        className="
          text-center
        "
      >

        <div
          className="
            w-32
            h-32
            rounded-[35px]
            bg-gradient-to-r
            from-cyan-500
            to-violet-500
            flex
            items-center
            justify-center
            mx-auto
            glow
            float-animation
          "
        >

          <Code2 size={60} />

        </div>

        <h1
          className="
            text-6xl
            font-black
            gradient-text
            mt-10
          "
        >
          LEARN TO CODE
        </h1>

        <p
          className="
            text-gray-400
            text-xl
            mt-5
          "
        >
          Initializing AI workspace...
        </p>

        <div
          className="
            w-72
            h-3
            rounded-full
            bg-white/10
            overflow-hidden
            mx-auto
            mt-10
          "
        >

          <div
            className="
              h-full
              w-full
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              animate-pulse
            "
          />

        </div>

      </div>

    </div>
  );
}

export default LoadingScreen;