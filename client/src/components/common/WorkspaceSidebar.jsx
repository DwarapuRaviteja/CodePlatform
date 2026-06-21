import {  LayoutDashboard,  History,  Sparkles,  Code2,  Settings,  FolderKanban,} from "lucide-react";

function WorkspaceSidebar({
  active = "workspace",
}) {

  const items = [
    {
      id: "workspace",
      label: "Workspace",
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: "history",
      label: "Prompt History",
      icon: <History size={20} />,
    },
    {
      id: "templates",
      label: "Templates",
      icon: <Sparkles size={20} />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderKanban size={20} />,
    },
    {
      id: "playground",
      label: "Playground",
      icon: <Code2 size={20} />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div
      className="
        h-full
        glass
        rounded-[35px]
        border
        border-white/10
        p-5
        flex
        flex-col
      "
    >

      <div className="mb-10">

        <h2
          className="
            text-3xl
            font-black
            gradient-text
          "
        >
          DevSphere AI
        </h2>

        <p className="text-gray-400 mt-2">
          AI Coding Workspace
        </p>

      </div>

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

        {
          items.map((item) => (

            <button
              key={item.id}
              className={`
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-2xl
                transition-all
                duration-300
                text-left

                ${
                  active === item.id
                  ? "bg-cyan-500 glow"
                  : "hover:bg-white/5"
                }
              `}
            >

              {item.icon}

              <span
                className="
                  font-medium
                "
              >
                {item.label}
              </span>

            </button>

          ))
        }

      </div>

      <div
        className="
          mt-auto
          glass
          rounded-3xl
          p-5
          border
          border-cyan-400/20
        "
      >

        <h3
          className="
            text-xl
            font-bold
            mb-3
          "
        >
          AI Assistant
        </h3>

        <p
          className="
            text-gray-400
            text-sm
            leading-relaxed
          "
        >

          Generate responsive
          frontend projects
          and understand every
          line of code instantly.

        </p>

      </div>

    </div>
  );
}

export default WorkspaceSidebar;