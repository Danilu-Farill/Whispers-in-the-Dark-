import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateStory = async(keywords: string) => {
  const response = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `Crea una historia de terror con los siguientes temas: ${keywords}`,
    max_tokens: 500,
  });

  return response.choices[0].text;
};

export { openai };