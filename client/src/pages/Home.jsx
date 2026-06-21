import Navbar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

import {
  Sparkles,
  BrainCircuit,
  MonitorPlay,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Home() {

  const features = [
    {
      icon: <Sparkles size={30} />,
      title: "AI Code Generation",
      description:
        "Generate complete frontend projects instantly using AI prompts.",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "Learn Visually",
      description:
        "Understand every line of generated code with beginner-friendly explanations.",
    },
    {
      icon: <MonitorPlay size={30} />,
      title: "TestCode Playground",
      description:
        "Write and test live HTML CSS JavaScript projects in real time.",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-[#050816]
        text-white
        overflow-x-hidden
      "
    >

      <Navbar />

      <section
        className="
          pt-48
          px-6
        "
      >

        <div
          className="
            max-w-[1600px]
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          <div>

            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-2xl
                bg-white/5
                border
                border-white/10
                mb-8
              "
            >

              <Rocket
                size={20}
                className="
                  text-cyan-400
                "
              />

              AI Powered Coding Platform

            </div>

            <h1
              className="
                text-6xl
                md:text-7xl
                font-black
                leading-tight
              "
            >

              Learn Coding
              <span className="gradient-text">
                {" "}Smarter
              </span>

              <br />

              Build Faster
              <span className="gradient-text">
                {" "}With AI
              </span>

            </h1>

            <p
              className="
                text-gray-400
                text-xl
                leading-relaxed
                mt-10
                max-w-2xl
              "
            >

              LEARN TO CODE helps developers
              generate projects, understand concepts,
              test applications live, and improve
              coding skills using powerful AI tools.

            </p>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-6
                mt-12
              "
            >

              <Link
                to="/workspace"
                className="
                  px-8
                  py-5
                  rounded-[24px]
                  bg-gradient-to-r
                  from-cyan-500
                  to-violet-500
                  font-bold
                  text-lg
                  flex
                  items-center
                  gap-4
                  hover:scale-105
                  transition-all
                  duration-300
                  glow
                "
              >

                Start Building

                <ArrowRight size={22} />

              </Link>

              <Link
                to="/playground"
                target="_blank"
                className="
                  px-8
                  py-5
                  rounded-[24px]
                  glass
                  border
                  border-white/10
                  font-bold
                  text-lg
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                Open TestCode
              </Link>

            </div>

          </div>

          <div
            className="
              glass
              rounded-[45px]
              border
              border-white/10
              p-10
              glow
            "
          >

            <div
              className="
                rounded-[35px]
                bg-black/40
                border
                border-white/10
                overflow-hidden
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  px-6
                  py-5
                  border-b
                  border-white/10
                "
              >

                <div className="w-4 h-4 rounded-full bg-red-400" />
                <div className="w-4 h-4 rounded-full bg-yellow-400" />
                <div className="w-4 h-4 rounded-full bg-green-400" />

              </div>

              <div
                className="
                  p-8
                  font-mono
                  text-lg
                  leading-loose
                  text-gray-300
                "
              >

                <span className="text-cyan-400">
                  const
                </span>

                {" "}project = {"{"}

                <br />

                &nbsp;&nbsp;name:
                <span className="text-green-400">
                  {" "} "AI Portfolio"
                </span>

                ,

                <br />

                &nbsp;&nbsp;framework:
                <span className="text-green-400">
                  {" "} "React"
                </span>

                ,

                <br />

                &nbsp;&nbsp;animations:
                <span className="text-green-400">
                  {" "} "Framer Motion"
                </span>

                ,

                <br />

                &nbsp;&nbsp;generatedBy:
                <span className="text-violet-400">
                  {" "} "LEARN TO CODE"
                </span>

                <br />

                {"}"}

              </div>

            </div>

          </div>

        </div>

      </section>

      <section
        className="
          px-6
          mt-32
        "
      >

        <div
          className="
            max-w-[1600px]
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >

          {
            features.map((feature, index) => (

              <div
                key={index}
                className="
                  glass
                  rounded-[35px]
                  border
                  border-white/10
                  p-8
                  hover:translate-y-[-8px]
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-20
                    h-20
                    rounded-[28px]
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-500
                    flex
                    items-center
                    justify-center
                    glow
                    mb-8
                  "
                >

                  {feature.icon}

                </div>

                <h2
                  className="
                    text-3xl
                    font-black
                    mb-5
                  "
                >
                  {feature.title}
                </h2>

                <p
                  className="
                    text-gray-400
                    leading-relaxed
                    text-lg
                  "
                >
                  {feature.description}
                </p>

              </div>

            ))
          }

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Home;
