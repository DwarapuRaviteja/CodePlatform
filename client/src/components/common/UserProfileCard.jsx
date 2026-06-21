import { motion } from "framer-motion";

import {  Mail,  Globe,  Github,  Linkedin,} from "lucide-react";

function UserProfileCard({
  name = "Developer",
  role = "Frontend Developer",
  bio = "Passionate about AI-powered web development and futuristic UI experiences.",
  image = "https://i.pravatar.cc/200",
  email = "developer@example.com",
  website = "#",
  github = "#",
  linkedin = "#",
}) {

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        relative
        glass
        rounded-[35px]
        p-8
        border
        border-white/10
        overflow-hidden
      "
    >

      <div
        className="
          absolute
          top-0
          right-0
          w-52
          h-52
          bg-cyan-500/10
          rounded-full
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
        "
      >

        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          <img
            src={image}
            alt={name}
            className="
              w-32
              h-32
              rounded-[30px]
              object-cover
              border
              border-white/10
              shadow-2xl
            "
          />

          <h2
            className="
              text-3xl
              font-black
              mt-6
            "
          >
            {name}
          </h2>

          <p
            className="
              text-cyan-400
              font-medium
              mt-2
            "
          >
            {role}
          </p>

          <p
            className="
              text-gray-400
              mt-5
              leading-relaxed
              max-w-md
            "
          >
            {bio}
          </p>

        </div>

        <div
          className="
            mt-10
            space-y-4
          "
        >

          <a
            href={`mailto:${email}`}
            className="
              flex
              items-center
              gap-4
              glass
              rounded-2xl
              px-5
              py-4
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >

            <Mail size={20} />

            <span>{email}</span>

          </a>

          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-4
              glass
              rounded-2xl
              px-5
              py-4
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >

            <Globe size={20} />

            <span>Website</span>

          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-4
              glass
              rounded-2xl
              px-5
              py-4
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >

            <Github size={20} />

            <span>GitHub</span>

          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              flex
              items-center
              gap-4
              glass
              rounded-2xl
              px-5
              py-4
              hover:border-cyan-400
              transition-all
              duration-300
            "
          >

            <Linkedin size={20} />

            <span>LinkedIn</span>

          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default UserProfileCard;