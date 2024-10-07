import axios from "axios";

const geminiApiUrl =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

export const sendMessageToGemini = async (prompt: string) => {
  try {
    const response = await axios.post(
      `${geminiApiUrl}?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response.data; // Ensure you're returning the data correctly
  } catch (error) {
    console.error("Error sending message to Gemini API:", error);
    throw error;
  }
};
