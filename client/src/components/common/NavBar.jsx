import { Link, useLocation } from "react-router-dom";
import { Code2, Sparkles } from "lucide-react";

function Navbar() {

  const location = useLocation();

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Workspace",
      path: "/workspace",
    },
    {
      title: "TestCode",
      path: "/playground",
    },
  ];

  return (
    <header
      className="
        w-full
        fixed
        top-0
        left-0
        z-50
        px-6
        pt-6
      "
    >

      <div
        className="
          max-w-[1600px]
          mx-auto
          glass
          rounded-[35px]
          border
          border-white/10
          px-8
          py-5
          flex
          items-center
          justify-between
        "
      >

        <Link
          to="/"
          className="
            flex
            items-center
            gap-5
          "
        >

          <div
            className="
              w-16
              h-16
              rounded-[24px]
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              flex
              items-center
              justify-center
              glow
            "
          >

            <Code2 size={30} />

          </div>

          <div>

            <h1
              className="
                text-4xl
                font-black
                gradient-text
                leading-none
              "
            >
              LEARN TO CODE
            </h1>

            <p
              className="
                text-gray-400
                mt-1
              "
            >
              AI Coding Workspace
            </p>

          </div>

        </Link>

        <nav
          className="
            flex
            items-center
            gap-4
          "
        >

          {
            navItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-6
                  py-3
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    location.pathname === item.path
                    ? "bg-cyan-500 text-white glow"
                    : "text-gray-300 hover:bg-white/10"
                  }
                `}
              >
                {item.title}
              </Link>

            ))
          }

          <Link
            to="/workspace"
            className="
              ml-4
              px-7
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              font-bold
              flex
              items-center
              gap-3
              hover:scale-105
              transition-all
              duration-300
              glow
            "
          >

            <Sparkles size={20} />

            Start Building

          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;