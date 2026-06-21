import {  useEffect,  useState,} from "react";

import { History,Trash2,} from "lucide-react";

function PromptHistoryPanel({
  onReuse,
}) {

  const [history, setHistory] =
    useState([]);

  useEffect(() => {

    const storedHistory =
      JSON.parse(
        localStorage.getItem(
          "prompt-history"
        )
      ) || [];

    setHistory(storedHistory);

  }, []);

  const deletePrompt = (index) => {

    const updatedHistory =
      history.filter(
        (_, i) => i !== index
      );

    setHistory(updatedHistory);

    localStorage.setItem(
      "prompt-history",
      JSON.stringify(updatedHistory)
    );

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

          <History size={30} />

        </div>

        <div>

          <h2
            className="
              text-3xl
              font-black
            "
          >
            Prompt History
          </h2>

          <p className="text-gray-400 mt-2">
            Reuse previous prompts instantly
          </p>

        </div>

      </div>

      <div
        className="
          space-y-5
          max-h-[500px]
          overflow-y-auto
        "
      >

        {
          history.length === 0 ? (

            <div
              className="
                text-center
                text-gray-400
                py-10
              "
            >
              No prompt history found.
            </div>

          ) : (

            history.map(
              (prompt, index) => (

                <div
                  key={index}
                  className="
                    glass
                    rounded-3xl
                    border
                    border-white/10
                    p-5
                    flex
                    items-start
                    justify-between
                    gap-5
                  "
                >

                  <div>

                    <p
                      className="
                        text-gray-300
                        leading-relaxed
                      "
                    >
                      {prompt}
                    </p>

                  </div>

                  <div
                    className="
                      flex
                      gap-3
                    "
                  >

                    <button
                      onClick={() =>
                        onReuse(prompt)
                      }
                      className="
                        px-4
                        py-2
                        rounded-2xl
                        bg-cyan-500
                        hover:bg-cyan-400
                        transition-all
                        text-sm
                        font-medium
                      "
                    >
                      Reuse
                    </button>

                    <button
                      onClick={() =>
                        deletePrompt(index)
                      }
                      className="
                        p-3
                        rounded-2xl
                        bg-red-500
                        hover:bg-red-400
                        transition-all
                      "
                    >

                      <Trash2 size={18} />

                    </button>

                  </div>

                </div>

              )
            )

          )
        }

      </div>

    </div>
  );
}

export default PromptHistoryPanel;