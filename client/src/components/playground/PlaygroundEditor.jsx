import Editor from "@monaco-editor/react";

function PlaygroundEditor({
  language,
  value,
  onChange,
}) {

  return (
    <div
      className="
        w-full
        h-full
        overflow-hidden
        rounded-3xl
      "
    >

      <Editor
        height="100%"
        theme="vs-dark"
        language={language}
        value={value}
        onChange={onChange}
        options={{
          fontSize: 14,

          minimap: {
            enabled: false,
          },

          automaticLayout: true,

          scrollBeyondLastLine: false,

          wordWrap: "on",

          smoothScrolling: true,

          cursorBlinking: "smooth",

          padding: {
            top: 20,
          },

          roundedSelection: true,

          formatOnPaste: true,

          formatOnType: true,
        }}
      />

    </div>
  );
}

export default PlaygroundEditor;