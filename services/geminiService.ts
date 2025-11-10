// Fix: Refactored to align with Gemini API best practices.
import { GoogleGenAI, Type } from '@google/genai';

// Per coding guidelines, the API key must be obtained exclusively from the environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export interface QuoteEstimate {
  minEstimate: number;
  maxEstimate: number;
  currency: string;
  summary: string;
}

export const getQuoteEstimate = async (description: string): Promise<QuoteEstimate> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Project Description: "${description}"`,
      config: {
        systemInstruction: 'You are an AI assistant for AgroMining Solutions, a company specializing in industrial processing solutions in South Africa. Your task is to provide a rough, non-binding cost estimate in South African Rand (ZAR) based on a project description.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            minEstimate: { type: Type.NUMBER, description: 'The minimum estimated cost for the project in ZAR.' },
            maxEstimate: { type: Type.NUMBER, description: 'The maximum estimated cost for the project in ZAR.' },
            currency: { type: Type.STRING, description: 'The currency of the estimate, which must be "ZAR".' },
            summary: { type: Type.STRING, description: 'A brief explanation of the factors influencing the cost.' },
          },
          required: ['minEstimate', 'maxEstimate', 'currency', 'summary'],
        },
      },
    });

    const jsonString = response.text;
    const parsedResponse = JSON.parse(jsonString);
    return parsedResponse as QuoteEstimate;

  } catch (error) {
    console.error("Error fetching quote estimate from Gemini API:", error);
    throw new Error("Failed to get an estimate. The AI assistant might be unavailable. Please try again later.");
  }
};
