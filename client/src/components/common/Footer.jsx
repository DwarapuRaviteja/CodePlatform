import { Github, Linkedin, Heart } from "lucide-react";

function Footer() {

  return (
    <footer
      className="
        w-full
        mt-24
        px-6
        pb-10
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
          p-10
          text-center
        "
      >

        <h2
          className="
            text-4xl
            md:text-5xl
            font-black
            gradient-text
            tracking-wide
          "
        >
          CREATED BY RAVITEJA
        </h2>

        <p
          className="
            text-gray-400
            mt-5
            text-lg
          "
        >
          Building futuristic AI-powered
          coding experiences using creativity,
          innovation, and modern web technologies.
        </p>

        <div
          className="
            flex
            items-center
            justify-center
            gap-8
            mt-10
          "
        >

          <a
            href="https://github.com/DwarapuRaviteja"
            target="_blank"
            rel="noreferrer"
            className="
              w-20
              h-20
              rounded-[25px]
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-cyan-500
              hover:scale-110
              transition-all
              duration-300
              glow
            "
          >

            <Github size={34} />

          </a>

          <a
            href="https://linkedin.com/in/raviteja-dwarapu-37b9b7323/"
            target="_blank"
            rel="noreferrer"
            className="
              w-20
              h-20
              rounded-[25px]
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-violet-500
              hover:scale-110
              transition-all
              duration-300
              glow
            "
          >

            <Linkedin size={34} />

          </a>

        </div>

        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            text-gray-400
          "
        >

          <Heart
            size={18}
            className="
              text-red-400
            "
          />

          Crafted with passion using React,
          AI and futuristic UI design.

        </div>

      </div>

    </footer>
  );
}

export default Footer;