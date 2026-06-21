import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  LockKeyhole,
  Mail,
  ArrowRight,
} from "lucide-react";

import API from "../services/api";

function Login() {

  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({

      email: "",
      password: "",

    });

  const [loading,
    setLoading] =
    useState(false);

  const handleChange =
  (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res =
        await API.post(
          "/auth/login",
          formData
        );

      localStorage.setItem(

        "token",

        res.data.token

      );

      localStorage.setItem(

        "user",

        JSON.stringify(
          res.data.user
        )

      );

      navigate("/workspace");

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data
          ?.message ||

        "Login failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <div
      className="
        min-h-screen
        bg-[#050816]
        flex
        items-center
        justify-center
        px-6
      "
    >

      <div
        className="
          w-full
          max-w-xl
          glass
          rounded-[40px]
          border
          border-white/10
          p-10
        "
      >

        <div className="text-center">

          <h1
            className="
              text-5xl
              font-black
              gradient-text
            "
          >
            LEARN TO CODE
          </h1>

          <p
            className="
              text-gray-400
              mt-4
              text-lg
            "
          >
            Login to continue your AI coding journey
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="
            mt-10
            space-y-6
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              h-16
            "
          >

            <Mail
              size={22}
              className="
                text-cyan-400
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                bg-transparent
                outline-none
                flex-1
                text-white
                placeholder:text-gray-500
              "
            />

          </div>

          <div
            className="
              flex
              items-center
              gap-4
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              h-16
            "
          >

            <LockKeyhole
              size={22}
              className="
                text-violet-400
              "
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              className="
                bg-transparent
                outline-none
                flex-1
                text-white
                placeholder:text-gray-500
              "
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-16
              rounded-[24px]
              bg-gradient-to-r
              from-cyan-500
              to-violet-500
              font-bold
              text-lg
              flex
              items-center
              justify-center
              gap-4
              hover:scale-[1.02]
              transition-all
              duration-300
              glow
            "
          >

            Login

            <ArrowRight size={22} />

          </button>

        </form>

        <p
          className="
            text-center
            text-gray-400
            mt-8
          "
        >

          Don&apos;t have an account?

          <Link
            to="/register"
            className="
              text-cyan-400
              ml-2
              hover:underline
            "
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;