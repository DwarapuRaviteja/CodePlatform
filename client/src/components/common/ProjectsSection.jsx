import ProjectCard from "./ProjectCard";

function ProjectsSection() {

  const projects = [
    {
      title: "AI Portfolio Website",
      description:
        "Modern futuristic portfolio website generated using AI prompts with glassmorphism UI and animations.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive",
      ],
      code:
`<section class="hero">
  <h1>AI Portfolio</h1>
</section>`,
      preview: "#",
    },
    {
      title: "Hospital Management UI",
      description:
        "Responsive hospital website with appointment system, dashboard, and clean healthcare interface.",
      tags: [
        "React",
        "Tailwind",
        "Dashboard",
      ],
      code:
`function App(){
  return <h1>Hospital UI</h1>
}`,
      preview: "#",
    },
    {
      title: "3D Landing Page",
      description:
        "Interactive landing page using animations, gradients, and immersive futuristic effects.",
      tags: [
        "Three.js",
        "Framer Motion",
        "UI",
      ],
      code:
`<div class="landing-page">
  3D Experience
</div>`,
      preview: "#",
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

            AI Generated
            <span className="gradient-text">
              {" "}Projects
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

            Explore futuristic
            frontend applications
            generated with DevSphere AI.

          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >

          {
            projects.map((project, index) => (

              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                code={project.code}
                preview={project.preview}
              />

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default ProjectsSection;