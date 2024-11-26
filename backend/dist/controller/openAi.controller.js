"use strict";
// import { Request, Response } from "express";
// import { openai } from "../config/openai.config";
// export const generateStory = async(req: Request, res: Response) => {
//   try {
//     const { prompt } = req.body;  // El usuario puede enviar un tema o palabra clave
//     if (!prompt) {
//       return res.status(400).json({ message: "Por favor ingresa un tema para la historia." });
//     }
//     // Realizar la solicitud a OpenAI
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",  // Modelo GPT-3.5
//       prompt: `Escribe una historia de terror sobre: ${prompt}`,
//       max_tokens: 300,  // Máxima cantidad de palabras generadas
//       temperature: 0.7,  // Creatividad
//     });
//     const story = response.data.choices[0].text;
//     res.status(200).json({story: story.trim()});  // Historia generada
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({message: "Error generando la historia."});
//   }
// };
