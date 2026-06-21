import {  Play,  Code2,  MonitorPlay,} from "lucide-react";

function PlaygroundHeader() {

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

          <Play
            size={18}
            className="text-cyan-400"
          />

          <span className="text-gray-300">
            Live Playground Active
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

          Test
          <span className="gradient-text">
            {" "}Your Code{" "}
          </span>

          Live

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

          Write HTML,
          CSS,
          and JavaScript,
          then instantly preview
          the output in real time
          using the integrated playground.

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
            HTML
          </h3>

          <p className="text-gray-400 mt-2">
            Structure Editor
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

            <MonitorPlay size={26} />

          </div>

          <h3
            className="
              text-3xl
              font-black
            "
          >
            Live
          </h3>

          <p className="text-gray-400 mt-2">
            Real-Time Preview
          </p>

        </div>

      </div>

    </div>
  );
}

export default PlaygroundHeader;