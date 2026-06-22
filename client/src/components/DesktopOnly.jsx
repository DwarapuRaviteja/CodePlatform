import { Monitor } from "lucide-react";

function DesktopOnly() {

  const isMobile =
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );

  if (!isMobile) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        bg-[#050816]
        z-[99999]
        flex
        items-center
        justify-center
        p-8
      "
    >

      <div
        className="
          text-center
          max-w-md
        "
      >

        <Monitor
          size={80}
          className="mx-auto mb-8"
        />

        <h1
          className="
            text-4xl
            font-black
            text-white
            mb-6
          "
        >
          Desktop Mode Required
        </h1>

        <p
          className="
            text-gray-400
            text-lg
            leading-relaxed
          "
        >
          Please enable Desktop Site
          in your browser or use a
          laptop/desktop computer to
          access LEARN TO CODE.
        </p>

      </div>

    </div>
  );
}

export default DesktopOnly;
