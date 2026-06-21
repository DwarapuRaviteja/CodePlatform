import {  BrainCircuit,  Code2,  Sparkles,  Rocket,  MonitorPlay,  BookOpen,} from "lucide-react";

import FeatureCard from "./FeatureCard";

function FeatureGrid() {

  const features = [
    {
      icon: <BrainCircuit size={32} />,
      title: "AI Explanations",
      description:
        "Understand generated code with beginner-friendly explanations and learning guidance.",
    },
    {
      icon: <Code2 size={32} />,
      title: "Code Generation",
      description:
        "Generate modern frontend projects instantly using natural language prompts.",
    },
    {
      icon: <MonitorPlay size={32} />,
      title: "Live Playground",
      description:
        "Test HTML CSS and JavaScript instantly with live real-time rendering.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "3D Interface",
      description:
        "Experience futuristic glassmorphism layouts with interactive 3D animations.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Fast Workflow",
      description:
        "Build projects faster with AI-assisted coding and streamlined development.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Learning Focused",
      description:
        "Not only code generation but also practical learning and understanding.",
    },
  ];

  return (
    <section
      className="
        py-24
        px-6
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
        "
      >

        <div
          className="
            text-center
            mb-16
          "
        >

          <h2
            className="
              text-5xl
              font-black
            "
          >
            Platform
            <span className="gradient-text">
              {" "}Features
            </span>
          </h2>

          <p
            className="
              text-gray-400
              mt-5
              max-w-3xl
              mx-auto
              text-lg
            "
          >
            Everything you need to
            generate projects,
            learn development,
            and test applications
            in one futuristic workspace.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >

          {
            features.map((feature, index) => (

              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default FeatureGrid;