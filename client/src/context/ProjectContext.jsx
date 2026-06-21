import {  createContext,  useContext,  useState,} from "react";

const ProjectContext =
  createContext();

export const ProjectProvider = ({
  children,
}) => {

  const [projects, setProjects] =
    useState([]);

  const [currentProject,
    setCurrentProject] =
    useState(null);

  const addProject = (
    project
  ) => {

    setProjects((prev) => [
      project,
      ...prev,
    ]);

  };

  const removeProject = (
    id
  ) => {

    setProjects((prev) =>
      prev.filter(
        (project) =>
          project._id !== id
      )
    );

  };

  const updateProject = (
    updatedProject
  ) => {

    setProjects((prev) =>
      prev.map((project) =>

        project._id ===
        updatedProject._id

          ? updatedProject

          : project

      )
    );

  };

  return (
    <ProjectContext.Provider
      value={{

        projects,

        setProjects,

        currentProject,

        setCurrentProject,

        addProject,

        removeProject,

        updateProject,

      }}
    >

      {children}

    </ProjectContext.Provider>
  );
};

export const useProjects = () => {

  return useContext(
    ProjectContext
  );

};