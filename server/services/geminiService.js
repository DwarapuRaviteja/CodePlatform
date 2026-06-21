import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";
console.log("USING GEMINI SERVICE FILE");
console.log(
  "Loaded Key:",
  process.env.GEMINI_API_KEY
);
const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const generateProjectCode = async (
  prompt
) => {
  const model =
    genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

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

  let result;

  for (
    let attempt = 1;
    attempt <= 3;
    attempt++
  ) {
    try {
      result =
        await model.generateContent(
          finalPrompt
        );

      break;
    } catch (error) {
      console.log(
        `Gemini Attempt ${attempt}:`,
        error.message
      );

      if (
        error.status === 503 &&
        attempt < 3
      ) {
        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              3000
            )
        );

        continue;
      }

      throw error;
    }
  }

  const rawText =
    result.response.text();

  const cleanedText =
    rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

  try {

  console.log(
    "========== GEMINI RESPONSE =========="
  );

  console.log(cleanedText);

  console.log(
    "====================================="
  );

  return JSON.parse(cleanedText);

} catch (error) {

  console.log(
    "JSON Parse Error:",
    error
  );

  console.log(
    "Failed JSON:"
  );

  console.log(cleanedText);

  throw new Error(
    "Gemini returned invalid JSON"
  );
}
};