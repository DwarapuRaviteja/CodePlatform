import { useState } from "react";

import {Save,Loader2,Check,} from "lucide-react";

import API from "../../services/api";

function SaveProjectButton({
  projectData,
}) {

  const [loading, setLoading] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const handleSave =
  async () => {

    try {

      setLoading(true);

      await API.post(
        "/projects",
        projectData
      );

      setSaved(true);

      setTimeout(() => {

        setSaved(false);

      }, 2500);

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to save project"
      );

    } finally {

      setLoading(false);

    }

  };

  return (
    <button
      onClick={handleSave}
      disabled={loading}
      className={`
        px-6
        py-3
        rounded-2xl
        font-bold
        transition-all
        duration-300
        flex
        items-center
        gap-3

        ${
          saved
          ? "bg-green-500"
          : "bg-gradient-to-r from-cyan-500 to-violet-500"
        }
      `}
    >

      {
        loading ? (

          <>

            <Loader2
              size={18}
              className="animate-spin"
            />

            Saving...

          </>

        ) : saved ? (

          <>

            <Check size={18} />

            Saved

          </>

        ) : (

          <>

            <Save size={18} />

            Save Project

          </>

        )
      }

    </button>
  );
}

export default SaveProjectButton;