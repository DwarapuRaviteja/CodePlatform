import Project from "../models/Project.js";

import User from "../models/User.js";

export const createProject =
async (req, res) => {

  try {

    const {
      title,
      description,
      prompt,
      html,
      css,
      js,
      explanation,
      tags,
    } = req.body;

    const project =
      await Project.create({

        user: req.user._id,

        title,

        description,

        prompt,

        html,

        css,

        js,

        explanation,

        tags,

      });

    await User.findByIdAndUpdate(

      req.user._id,

      {
        $push: {
          projects: project._id,
        },
      }

    );

    return res.status(201).json({

      success: true,

      project,

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create project",
    });

  }

};

export const getProjects =
async (req, res) => {

  try {

    const projects =
      await Project.find({

        user: req.user._id,

      }).sort({
        createdAt: -1,
      });

    return res.status(200).json({

      success: true,

      projects,

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });

  }

};

export const getSingleProject =
async (req, res) => {

  try {

    const project =
      await Project.findOne({

        _id: req.params.id,

        user: req.user._id,

      });

    if (!project) {

      return res.status(404).json({

        success: false,

        message: "Project not found",

      });

    }

    return res.status(200).json({

      success: true,

      project,

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      success: false,

      message: "Failed to fetch project",

    });

  }

};

export const deleteProject =
async (req, res) => {

  try {

    const project =
await Project.findOne({

  _id: req.params.id,

  user: req.user._id,

});
    if (!project) {

      return res.status(404).json({
        success: false,
        message: "Project not found",
      });

    }

    await project.deleteOne();

    return res.status(200).json({

      success: true,

      message: "Project deleted",

    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });

  }

};
