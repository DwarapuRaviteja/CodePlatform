import {  Home,  LayoutDashboard,  Code2,  Sparkles,  Settings,} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: <Home size={20} />,
    },
    {
      title: "Workspace",
      path: "/workspace",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "Playground",
      path: "/playground",
      icon: <Code2 size={20} />,
    },
    {
      title: "AI Tools",
      path: "/workspace",
      icon: <Sparkles size={20} />,
    },
    {
      title: "Settings",
      path: "/",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div
      className="
        h-full
        w-[280px]
        glass
        border-r
        border-white/10
        p-5
        flex
        flex-col
      "
    >

      <div
        className="
          mb-10
        "
      >

        <h1
          className="
            text-3xl
            font-black
            gradient-text
          "
        >
          DevSphere AI
        </h1>

        <p className="text-gray-400 mt-2">
          AI Coding Platform
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
          menuItems.map((item, index) => (

            <Link
              key={index}
              to={item.path}
              className={`
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-2xl
                transition-all
                duration-300

                ${
                  location.pathname === item.path
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
                {item.title}
              </span>

            </Link>

          ))
        }

      </div>

      <div
        className="
          mt-auto
          p-5
          rounded-3xl
          bg-gradient-to-r
          from-cyan-500/20
          to-violet-500/20
          border
          border-white/10
        "
      >

        <h3
          className="
            text-xl
            font-bold
            mb-3
          "
        >
          AI Workspace
        </h3>

        <p
          className="
            text-gray-300
            text-sm
            leading-relaxed
          "
        >
          Generate projects,
          understand code,
          and test applications
          instantly.
        </p>

      </div>

    </div>
  );
}

export default Sidebar;