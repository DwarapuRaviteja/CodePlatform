import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(

  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    prompt: {
      type: String,
      required: true,
    },

    html: {
      type: String,
      default: "",
    },

    css: {
      type: String,
      default: "",
    },

    js: {
      type: String,
      default: "",
    },

    explanation: {
      html: {
        type: String,
        default: "",
      },

      css: {
        type: String,
        default: "",
      },

      js: {
        type: String,
        default: "",
      },
    },

    tags: [
      {
        type: String,
      },
    ],

    isPublic: {
      type: Boolean,
      default: false,
    },

    views: {
      type: Number,
      default: 0,
    },

    likes: {
      type: Number,
      default: 0,
    },

  },

  {
    timestamps: true,
  }

);

const Project =
  mongoose.model(
    "Project",
    projectSchema
  );

export default Project;