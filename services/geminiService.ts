
import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

export const initializeAi = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.info('API key for Gemini not found. AI features will be disabled.');
    return;
  }
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (error) {
    console.error('Failed to initialize Gemini SDK. AI features will be disabled.', error);
    ai = null;
  }
};

export const generateAiSummary = async (content: string): Promise<string | null> => {
  if (!ai) {
    return null;
  }
  
  try {
    const prompt = `Resume los siguientes puntos clave de un servicio de consultoría en una lista de 3 a 4 viñetas concisas y orientadas a beneficios para un ejecutivo ocupado. Extrae los resultados más importantes y medibles. El texto es: ${content}`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating AI summary:", error);
    return "No se pudo generar el resumen. Por favor, intente de nuevo más tarde.";
  }
};
