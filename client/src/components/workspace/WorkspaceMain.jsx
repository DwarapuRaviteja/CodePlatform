import { useState } from "react";

import WorkspaceTopbar from "./WorkspaceTopbar";
import WorkspaceWelcome from "./WorkspaceWelcome";
import PromptPanel from "./PromptPanel";
import CodeEditorPanel from "./CodeEditorPanel";
import ExplanationPanel from "./ExplanationPanel";
import WorkspaceActions from "./WorkspaceActions";
import GeneratedFilesPanel from "./GeneratedFilesPanel";
import LivePreviewModal from "./LivePreviewModal";

function WorkspaceMain() {

  const [response,
    setResponse] =
    useState({

      prompt: "",

      html: "",

      css: "",

      js: "",

      explanation: {
        html: "",
        css: "",
        js: "",
      },

    });
  const [historyOpen, setHistoryOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [previewOpen,
    setPreviewOpen] =
    useState(false);

  const [activeFile,
    setActiveFile] =
    useState("html");

  const clearWorkspace = () => {

    setResponse({

      prompt: "",

      html: "",

      css: "",

      js: "",

      explanation: {
        html: "",
        css: "",
        js: "",
      },

    });

  };

  return (
    <div
      className="
        min-h-screen
        bg-[#050816]
        text-white
        px-6
        py-6
      "
    >

      <div
        className="
          max-w-[2200px]
          mx-auto
          space-y-6
        "
      >

        <WorkspaceTopbar />

        <WorkspaceActions
          response={response}
          onClear={clearWorkspace}
          onPreview={() =>
            setPreviewOpen(true)
          }
        />

        <div
          className="
          
            flex
    flex-col
    gap-6
    items-fill
          "
        >
          <div
            className="
            max-w-[1800px]
              h-[900px]
            "
          >

            {
              response.html ? (

                <CodeEditorPanel
  response={response}
  activeFile={activeFile}
/>

              ) : (

                <WorkspaceWelcome />

              )
            }

          </div>

          <div
            className="
              space-y-6
            "
          >

            <PromptPanel
              setResponse={setResponse}
            />

            

          </div>

          

          <div
            className="
              space-y-6
            "
          >

            <GeneratedFilesPanel
              response={response}
              activeFile={activeFile}
              setActiveFile={
                setActiveFile
              }
            />

            <ExplanationPanel
              response={response}
            />

          </div>

        </div>

      </div>

      <LivePreviewModal
        open={previewOpen}
        onClose={() =>
          setPreviewOpen(false)
        }
        response={response}
      />

    </div>
  );
}

export default WorkspaceMain;
