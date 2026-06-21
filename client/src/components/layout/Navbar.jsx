import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {

  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Workspace",
      path: "/workspace",
    },
    {
      name: "Playground",
      path: "/playground",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        px-6
        md:px-10
        py-5
      "
    >

      <div
        className="
          glass
          rounded-3xl
          px-6
          py-4
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
            gap-3
          "
        >

          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-cyan-500
              flex
              items-center
              justify-center
              glow
            "
          >
            <Code2 size={24} />
          </div>

          <div>
            <h1
              className="
                text-2xl
                font-black
                gradient-text
              "
            >
              DevSphere AI
            </h1>

            <p className="text-xs text-gray-400">
              AI Coding Platform
            </p>
          </div>

        </Link>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {
            navItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-5
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  font-medium

                  ${
                    location.pathname === item.path
                    ? "bg-cyan-500 text-white glow"
                    : "hover:bg-white/10 text-gray-300"
                  }
                `}
              >
                {item.name}
              </Link>

            ))
          }

        </div>

      </div>

    </motion.nav>
  );
}

export default Navbar;