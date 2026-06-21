import {
  Eye,
  Trash2,
  FolderDown,
} from "lucide-react";

function WorkspaceActions({
  response,
  onClear,
  onPreview,
}) {

  const downloadProject = () => {

    const htmlFile = `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Generated Project</title>

<style>
${response.css}
</style>

</head>

<body>

${response.html}

<script>
${response.js}
<\/script>

</body>
</html>
`;

    const blob =
      new Blob(
        [htmlFile],
        {
          type: "text/html",
        }
      );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "generated-project.html";

    a.click();

    URL.revokeObjectURL(url);

  };

  return (
    <div
      className="
        glass
        rounded-[35px]
        border
        border-white/10
        px-7
        py-5
        flex
        flex-wrap
        items-center
        justify-between
        gap-6
      "
    >

      <div>

        <h2
          className="
            text-3xl
            font-black
          "
        >
          AI Workspace
        </h2>

        <p
          className="
            text-gray-400
            mt-2
          "
        >
          Generate, preview and download projects
        </p>

      </div>

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-4
        "
      >

        <button
          onClick={onPreview}
          disabled={!response.html}
          className="
            px-6
            py-4
            rounded-2xl
            bg-cyan-500
            hover:bg-cyan-400
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            duration-300
            flex
            items-center
            gap-3
            font-semibold
          "
        >

          <Eye size={20} />

          Live Preview

        </button>

        <button
          onClick={downloadProject}
          disabled={!response.html}
          className="
            px-6
            py-4
            rounded-2xl
            bg-violet-500
            hover:bg-violet-400
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            duration-300
            flex
            items-center
            gap-3
            font-semibold
          "
        >

          <FolderDown size={20} />

          Download

        </button>

        <button
          onClick={onClear}
          className="
            px-6
            py-4
            rounded-2xl
            bg-red-500
            hover:bg-red-400
            transition-all
            duration-300
            flex
            items-center
            gap-3
            font-semibold
          "
        >

          <Trash2 size={20} />

          Clear Workspace

        </button>

      </div>

    </div>
  );
}

export default WorkspaceActions;