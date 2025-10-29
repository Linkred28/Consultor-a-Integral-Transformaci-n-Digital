import { GoogleGenAI, Chat } from "@google/genai";

let chat: Chat | null = null;

export async function initChat(): Promise<Chat> {
    if (chat) {
        return chat;
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
    
    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: "You are Metodiko AI, an expert assistant for Metodiko, a consultancy specializing in integral consulting and digital transformation. Your tone should be professional, concise, and helpful. Answer questions about the company's services (process optimization, logistics, HR, technology, sales, data governance), benefits, and approach. Encourage users to contact the company for a detailed consultation. Do not answer questions outside of this scope.",
        },
    });

    return chat;
}
