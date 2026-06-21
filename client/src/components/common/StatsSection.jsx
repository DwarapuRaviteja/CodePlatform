import StatsCard from "./StatsCard";

function StatsSection() {

  const stats = [
    {
      number: "10K+",
      title: "Generated Projects",
      description:
        "AI-generated frontend projects and coding examples created instantly.",
    },
    {
      number: "24/7",
      title: "AI Assistance",
      description:
        "Get coding help, explanations, and project generation anytime.",
    },
    {
      number: "100%",
      title: "Interactive Learning",
      description:
        "Understand concepts visually with real-time playground testing.",
    },
    {
      number: "3D",
      title: "Modern Experience",
      description:
        "Futuristic glassmorphism interface with immersive animations.",
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

            Why Choose
            <span className="gradient-text">
              {" "}DevSphere AI
            </span>

          </h2>

          <p
            className="
              mt-5
              text-gray-400
              text-lg
              max-w-3xl
              mx-auto
            "
          >

            Experience modern AI-assisted
            coding workflows with
            learning-focused tools,
            futuristic UI,
            and live project testing.

          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {
            stats.map((item, index) => (

              <StatsCard
                key={index}
                number={item.number}
                title={item.title}
                description={item.description}
              />

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default StatsSection;