import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default:
        "https://i.pravatar.cc/200",
    },

    role: {
      type: String,
      default: "user",
    },

    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],

    promptHistory: [
      {
        prompt: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

  },

  {
    timestamps: true,
  }

);

const User =
  mongoose.model(
    "User",
    userSchema
  );

export default User;