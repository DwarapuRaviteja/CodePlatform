import {  generateProjectCode,} from "../services/geminiService.js";

export const generateCode =
  async (req, res) => {
    try {
      const { prompt } =
        req.body;

      if (
        !prompt ||
        !prompt.trim()
      ) {
        return res
          .status(400)
          .json({
            success: false,
            message:
              "Prompt is required",
          });
      }

      console.log(
        "Generating Project..."
      );

      const generated =
        await generateProjectCode(
          prompt
        );

      return res
        .status(200)
        .json({
          success: true,
          html:
            generated.html ||
            "",
          css:
            generated.css ||
            "",
          js:
            generated.js ||
            "",
          explanation:
            generated.explanation ||
            {
              html: "",
              css: "",
              js: "",
            },
        });
    } catch (error) {
      console.error(
        "Generate Error:"
      );
      console.error(error);

      return res
        .status(500)
        .json({
          success: false,
          message:
            error.message ||
            "AI generation failed",
        });
    }
  };