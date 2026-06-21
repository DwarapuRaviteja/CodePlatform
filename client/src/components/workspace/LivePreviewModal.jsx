import {  X,  MonitorPlay,} from "lucide-react";

function LivePreviewModal({
  open,
  onClose,
  response,
}) {

  if (!open) return null;

  const srcDoc = `
    <!DOCTYPE html>

    <html lang="en">

      <head>

        <meta charset="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <style>

          body{
            margin:0;
            padding:0;
            overflow:auto;
            font-family:sans-serif;
          }

          ${response.css}

        </style>

      </head>

      <body>

        ${response.html}

        <script>

          try{

            ${response.js}

          }

          catch(error){

            console.error(error);

          }

        <\\/script>

      </body>

    </html>
  `;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        bg-black/70
        backdrop-blur-md
        flex
        items-center
        justify-center
        p-6
      "
    >

      <div
        className="
          w-full
          max-w-7xl
          h-[90vh]
          glass
          rounded-[40px]
          border
          border-white/10
          overflow-hidden
          flex
          flex-col
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            px-7
            py-5
            border-b
            border-white/10
            bg-black/20
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
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

              <MonitorPlay size={30} />

            </div>

            <div>

              <h2
                className="
                  text-3xl
                  font-black
                "
              >
                Live Preview
              </h2>

              <p className="text-gray-400 mt-2">
                Real-time generated application
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="
              w-14
              h-14
              rounded-2xl
              bg-red-500
              hover:bg-red-400
              transition-all
              duration-300
              flex
              items-center
              justify-center
            "
          >

            <X size={22} />

          </button>

        </div>

        <div className="flex-1 bg-white">

          <iframe
            title="preview"
            srcDoc={srcDoc}
            sandbox="allow-scripts"
            className="
              w-full
              h-full
              border-0
            "
          />

        </div>

      </div>

    </div>
  );
}

export default LivePreviewModal;