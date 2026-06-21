import { Bell, User, LogOut, ExternalLink, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function WorkspaceTopbar() {

  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div
      className="
        w-full
        glass
        rounded-[35px]
        border
        border-white/10
        px-7
        py-5
        flex
        items-center
        justify-between
      "
    >

      {/* LEFT SECTION */}
      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        {/* ROCKET LOGO */}
        <div
          className="
            w-16
            h-16
            rounded-3xl
            bg-gradient-to-r
            from-cyan-500
            to-violet-500
            flex
            items-center
            justify-center
            shadow-[0_0_30px_rgba(59,130,246,0.5)]
          "
        >

          <Rocket size={30} />

        </div>

        {/* HEADING */}
        <div>

          <h1
            className="
              text-4xl
              font-black
              gradient-text
            "
          >
            LEARN TO CODE
          </h1>

          <p
            className="
              text-gray-400
              mt-2
            "
          >
            AI Coding Workspace
          </p>

        </div>

      </div>

      {/* RIGHT SECTION */}
      <div
        className="
          flex
          items-center
          gap-5
        "
      >

        {/* NOTIFICATION */}
        <button
          className="
            relative
            w-14
            h-14
            rounded-2xl
            glass
            border
            border-white/10
            flex
            items-center
            justify-center
          "
        >

          <Bell size={22} />

          <div
            className="
              absolute
              top-3
              right-3
              w-3
              h-3
              rounded-full
              bg-cyan-400
            "
          />

        </button>

        {/* PROFILE SECTION */}
        <div
          className="
            relative
            flex
            items-center
          "
        >

          {/* PROFILE BUTTON */}
          <button
            onClick={() =>
              setOpenProfile(!openProfile)
            }
            className={`
              flex
              items-center
              gap-4
              glass
              border
              border-white/10
              rounded-2xl
              px-5
              py-3
              hover:bg-white/10
              transition-all
              duration-500
              ${
                openProfile
                  ? "-translate-x-3"
                  : ""
              }
            `}
          >

            <div
              className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-violet-500
                flex
                items-center
                justify-center
              "
            >

              <User size={20} />

            </div>

            <div className="text-left">

              <h3 className="font-bold">
                {
                  user?.name ||
                  "Developer"
                }
              </h3>

              <p
                className="
                  text-sm
                  text-gray-400
                "
              >
                {
                  user?.email
                }
              </p>

            </div>

          </button>

          {/* RIGHT SIDE BUTTONS */}
          <div
            className={`
              flex
              items-center
              gap-3
              ml-3
              overflow-hidden
              transition-all
              duration-500
              ${
                openProfile
                  ? "opacity-100 max-w-[350px]"
                  : "opacity-0 max-w-0"
              }
            `}
          >

            {/* PLAYGROUND */}
            <button
              onClick={() =>
                window.open(
                  "/playground",
                  "_blank"
                )
              }
              className="
                h-14
                px-5
                rounded-2xl
                glass
                border
                border-white/10
                flex
                items-center
                gap-2
                hover:bg-white/10
                transition-all
                duration-300
                whitespace-nowrap
              "
            >

              <ExternalLink size={18} />

              TestCode

            </button>

            {/* LOGOUT */}
            <button
              onClick={logout}
              className="
                h-14
                px-5
                rounded-2xl
                bg-red-500
                hover:bg-red-400
                transition-all
                duration-300
                flex
                items-center
                gap-2
                whitespace-nowrap
              "
            >

              <LogOut size={18} />

              Logout

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default WorkspaceTopbar;