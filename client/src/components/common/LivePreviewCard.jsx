import {
  MonitorPlay,
} from "lucide-react";

function LivePreviewCard({
  html,
  css,
  js,
}) {

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
            font-family:sans-serif;
            overflow:auto;
          }

          ${css}

        </style>

      </head>

      <body>

        ${html}

        <script>

          try{

            ${js}

          }

          catch(error){

            console.error(error);

          }

        <\/script>

      </body>

    </html>
  `;

  return (
    <div
      className="
        glass
        rounded-[35px]
        border
        border-white/10
        overflow-hidden
        h-full
        flex
        flex-col
      "
    >

      <div
        className="
          px-6
          py-5
          border-b
          border-white/10
          flex
          items-center
          gap-4
          bg-black/20
        "
      >

        <div
          className="
            w-16
            h-16
            rounded-[25px]
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

          <p
            className="
              text-gray-400
              mt-2
            "
          >
            Real-time application preview
          </p>

        </div>

      </div>

      <div
        className="
          flex-1
          bg-white
        "
      >

        <iframe
          title="live-preview"
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
  );
}

export default LivePreviewCard;