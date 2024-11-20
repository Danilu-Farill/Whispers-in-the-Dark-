const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generateStory = async(keywords: string) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Crea una historia de terror con los siguientes temas: ${keywords}`,
    max_tokens: 500,
  });

  return response.data.choices[0].text;
};
