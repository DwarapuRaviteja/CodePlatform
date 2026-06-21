import {useEffect, useState,} from "react";

import {FolderKanban,Trash2,Eye,} from "lucide-react";

import Navbar from "../components/layout/Navbar";

import API from "../services/api";

function MyProjects() {

  const [projects, setProjects] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects =
  async () => {

    try {

      const res =
        await API.get("/projects");

      setProjects(
        res.data.projects
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const handleDelete =
  async (id) => {

    try {

      await API.delete(
        `/projects/${id}`
      );

      setProjects((prev) =>
        prev.filter(
          (project) =>
            project._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div
      className="
        min-h-screen
        bg-[#050816]
        text-white
      "
    >

      <Navbar />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-32
        "
      >

        <div
          className="
            flex
            items-center
            gap-5
            mb-12
          "
        >

          <div
            className="
              w-20
              h-20
              rounded-[30px]
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              flex
              items-center
              justify-center
              glow
            "
          >

            <FolderKanban size={38} />

          </div>

          <div>

            <h1
              className="
                text-5xl
                font-black
              "
            >
              My Projects
            </h1>

            <p
              className="
                text-gray-400
                mt-3
              "
            >
              Manage your AI generated projects
            </p>

          </div>

        </div>

        {
          loading ? (

            <div
              className="
                text-center
                py-20
                text-gray-400
              "
            >
              Loading projects...
            </div>

          ) : projects.length === 0 ? (

            <div
              className="
                glass
                rounded-[35px]
                border
                border-white/10
                p-16
                text-center
              "
            >

              <h2
                className="
                  text-3xl
                  font-black
                "
              >
                No Projects Found
              </h2>

              <p
                className="
                  text-gray-400
                  mt-4
                "
              >
                Generate and save projects
                from the workspace.
              </p>

            </div>

          ) : (

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-8
              "
            >

              {
                projects.map((project) => (

                  <div
                    key={project._id}
                    className="
                      glass
                      rounded-[35px]
                      border
                      border-white/10
                      p-7
                    "
                  >

                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-5
                      "
                    >

                      <div>

                        <h2
                          className="
                            text-3xl
                            font-black
                          "
                        >
                          {project.title}
                        </h2>

                        <p
                          className="
                            text-gray-400
                            mt-4
                            leading-relaxed
                          "
                        >
                          {
                            project.description
                          }
                        </p>

                      </div>

                      <div
                        className="
                          flex
                          gap-3
                        "
                      >

                        <button
                          className="
                            p-3
                            rounded-2xl
                            bg-cyan-500
                            hover:bg-cyan-400
                            transition-all
                          "
                        >

                          <Eye size={18} />

                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              project._id
                            )
                          }
                          className="
                            p-3
                            rounded-2xl
                            bg-red-500
                            hover:bg-red-400
                            transition-all
                          "
                        >

                          <Trash2 size={18} />

                        </button>

                      </div>

                    </div>

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-3
                        mt-8
                      "
                    >

                      {
                        project.tags?.map(
                          (
                            tag,
                            index
                          ) => (

                            <div
                              key={index}
                              className="
                                px-4
                                py-2
                                rounded-full
                                bg-cyan-500/10
                                border
                                border-cyan-400/20
                                text-cyan-300
                                text-sm
                              "
                            >
                              {tag}
                            </div>

                          )
                        )
                      }

                    </div>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>

    </div>
  );
}

export default MyProjects;