import { Github,  Linkedin,  Globe,} from "lucide-react";

function Footer() {

  return (
    <footer
      className="
        w-full
        border-t
        border-white/10
        mt-20
        px-6
        py-10
        bg-black/20
        backdrop-blur-lg
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-8
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-black
              gradient-text
            "
          >
            DevSphere AI
          </h2>

          <p
            className="
              text-gray-400
              mt-3
              max-w-md
              leading-relaxed
            "
          >
            AI-powered futuristic coding
            learning platform for generating,
            testing, and understanding projects.
          </p>

        </div>

        <div
          className="
            flex
            items-center
            gap-5
          "
        >

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-cyan-500
              transition-all
            "
          >
            <Github size={20} />
          </a>

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-cyan-500
              transition-all
            "
          >
            <Linkedin size={20} />
          </a>

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-cyan-500
              transition-all
            "
          >
            <Globe size={20} />
          </a>

        </div>

      </div>

      <div
        className="
          text-center
          text-gray-500
          mt-10
          text-sm
        "
      >
        © 2026 DevSphere AI. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;