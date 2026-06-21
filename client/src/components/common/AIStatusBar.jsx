import {  Wifi,  Cpu,  ShieldCheck,  Sparkles,} from "lucide-react";

function AIStatusBar() {

  const statusItems = [
    {
      icon: <Wifi size={18} />,
      label: "Connected",
      color: "text-green-400",
    },
    {
      icon: <Cpu size={18} />,
      label: "Gemini AI Active",
      color: "text-cyan-400",
    },
    {
      icon: <ShieldCheck size={18} />,
      label: "Secure Workspace",
      color: "text-violet-400",
    },
  ];

  return (
    <div
      className="
        w-full
        glass
        rounded-3xl
        border
        border-white/10
        px-6
        py-4
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-5
      "
    >

      <div
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
            bg-gradient-to-r
            from-cyan-500
            to-violet-500
            flex
            items-center
            justify-center
            glow
          "
        >

          <Sparkles size={22} />

        </div>

        <div>

          <h2
            className="
              text-2xl
              font-black
            "
          >
            DevSphere AI
          </h2>

          <p className="text-gray-400">
            AI coding environment running
          </p>

        </div>

      </div>

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-5
        "
      >

        {
          statusItems.map((item, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                px-5
                py-3
                rounded-2xl
                bg-white/5
                border
                border-white/10
              "
            >

              <div className={item.color}>
                {item.icon}
              </div>

              <span className="text-gray-300">
                {item.label}
              </span>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default AIStatusBar;