import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      message:
        "DevSphere AI completely changed the way I learn coding. The AI explanations and live playground are extremely useful.",
      image:
        "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sophia Lee",
      role: "UI Designer",
      message:
        "The futuristic interface and instant code generation make development much faster and more interactive.",
      image:
        "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Daniel Carter",
      role: "Student",
      message:
        "I finally understood HTML CSS and JavaScript through the explanation system and live testing features.",
      image:
        "https://i.pravatar.cc/150?img=15",
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

            What Users
            <span className="gradient-text">
              {" "}Say
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

            Developers,
            students,
            and creators are using
            DevSphere AI to build,
            learn,
            and test projects faster.

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
            testimonials.map((item, index) => (

              <TestimonialCard
                key={index}
                name={item.name}
                role={item.role}
                message={item.message}
                image={item.image}
              />

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default TestimonialsSection;