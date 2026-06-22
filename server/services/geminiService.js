import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEYS = [
  process.env.GEMINI_KEY_1,
  process.env.GEMINI_KEY_2,
  process.env.GEMINI_KEY_3,
].filter(Boolean);

console.log(
  "Keys Loaded:",
  API_KEYS.length
);

export const generateProjectCode = async (
  prompt
) => {

  const finalPrompt = `
You are an expert frontend developer.

Generate a complete frontend project.

Requirements:
- HTML
- CSS
- JavaScript
- Responsive design
- Modern UI
- Clean code
- Beginner friendly

Return ONLY valid JSON.

Format:

{
  "html":"",
  "css":"",
  "js":"",
  "explanation":{
    "html":"",
    "css":"",
    "js":""
  }
}

USER REQUEST:
${prompt}
`;

  let lastError = null;

  for (
    let keyIndex = 0;
    keyIndex < API_KEYS.length;
    keyIndex++
  ) {

    try {

      console.log(
        `Using Gemini Key ${
          keyIndex + 1
        }`
      );

      const genAI =
        new GoogleGenerativeAI(
          API_KEYS[keyIndex]
        );

      const model =
        genAI.getGenerativeModel({
          model: "gemini-2.5-flash",
        });

      const result =
        await model.generateContent(
          finalPrompt
        );

      const rawText =
        result.response.text();

      const cleanedText =
        rawText
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

      console.log(
        "========== GEMINI RESPONSE =========="
      );

      console.log(
        cleanedText
      );

      console.log(
        "====================================="
      );

      try {

        return JSON.parse(
          cleanedText
        );

      } catch (jsonError) {

        console.log(
          "JSON Parse Error:",
          jsonError
        );

        console.log(
          cleanedText
        );

        throw new Error(
          "Gemini returned invalid JSON"
        );

      }

    } catch (error) {

      console.log(
        `Gemini Key ${
          keyIndex + 1
        } Failed:`,
        error.message
      );

      lastError = error;

      const message =
        error?.message || "";

      if (
        message.includes("429") ||
        error?.status === 429
      ) {

        console.log(
          "Rate limit reached. Switching API key..."
        );

        continue;

      }

      if (
        error?.status === 503
      ) {

        console.log(
          "Gemini temporarily unavailable. Trying next key..."
        );

        continue;

      }

      if (
        error.message ===
        "Gemini returned invalid JSON"
      ) {

        throw error;

      }

    }

  }

  if (lastError) {
    throw lastError;
  }

  throw new Error(
    "All Gemini API keys exhausted"
  );

};
