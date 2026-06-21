import {
  BrainCircuit,
  FileCode2,
  FileText,
  FileJson,
} from "lucide-react";

function ExplanationPanel({
  response,
}) {

  const explanations = [

    {
      id: "html",

      title:
        "HTML Explanation",

      icon: (
        <FileCode2
          size={22}
          className="
            text-orange-400
          "
        />
      ),

      content:
        response?.explanation
          ?.html ||

        "No HTML explanation available.",
    },

    {
      id: "css",

      title:
        "CSS Explanation",

      icon: (
        <FileText
          size={22}
          className="
            text-cyan-400
          "
        />
      ),

      content:
        response?.explanation
          ?.css ||

        "No CSS explanation available.",
    },

    {
      id: "js",

      title:
        "JavaScript Explanation",

      icon: (
        <FileJson
          size={22}
          className="
            text-yellow-400
          "
        />
      ),

      content:
        response?.explanation
          ?.js ||

        "No JavaScript explanation available.",
    },

  ];

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

          <BrainCircuit size={30} />

        </div>

        <div>

          <h2
            className="
              text-3xl
              font-black
            "
          >
            AI Explanations
          </h2>

          <p
            className="
              text-gray-400
              mt-2
            "
          >
            Understand generated code easily
          </p>

        </div>

      </div>

      <div
        className="
          space-y-6
          max-h-[700px]
          overflow-y-auto
          pr-2
        "
      >

        {
          explanations.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                className="
                  glass
                  rounded-3xl
                  border
                  border-white/10
                  p-5
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    mb-4
                  "
                >

                  {item.icon}

                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {item.title}
                  </h3>

                </div>

                <p
                  className="
                    text-gray-400
                    leading-relaxed
                    whitespace-pre-wrap
                  "
                >
                  {item.content}
                </p>

              </div>

            )
          )
        }

      </div>

    </div>
  );
}

export default ExplanationPanel;