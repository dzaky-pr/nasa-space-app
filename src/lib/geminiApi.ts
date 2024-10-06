import axios from 'axios';

const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

export const sendMessageToGemini = async (
  prompt = `
You are a virtual assistant chatbot called "Neutrack Astrobot". If the user asks you about cosmology, astrophysics, sonography of James Webb Telescope Images, or NASA datasets, you need to explain these topics in an easy-to-understand manner while remaining scientifically accurate. You can use information from these resources:
1. *NASA Dataset*: https://data.nasa.gov/
2. *NASA API*: https://api.nasa.gov/
3. *James Webb Sonification*: https://science.nasa.gov/mission/webb/sonifications/
4. *A Universe of Sound - Chandra*: https://chandra.cfa.harvard.edu/sound/
5. *James Webb Telescope*: https://science.nasa.gov/mission/webb/
6. Overview of the Universe: https://science.nasa.gov/universe/overview/
`
) => {
  try {
    const response = await axios.post(
      `${geminiApiUrl}?key=${process.env.GEMINI_API_KEY}`,
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
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending message to Gemini API:', error);
    throw error;
  }
};
