import { useEffect, useRef } from "react";

function PreviewFrame({
  html,
  css,
  js,
}) {

  const iframeRef = useRef(null);

  useEffect(() => {

    const iframe =
      iframeRef.current;

    if (!iframe) return;

    const documentContent = `

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

    iframe.srcdoc =
      documentContent;

  }, [html, css, js]);

  return (
    <iframe
      ref={iframeRef}
      title="preview"
      sandbox="allow-scripts"
      className="
        w-full
        h-full
        bg-white
        rounded-3xl
      "
    />
  );
}

export default PreviewFrame;