import { GoogleGenAI } from "@google/genai";
import { Transaction } from "../types.ts";

export const getFinancialAdvice = async (transactions: Transaction[], query: string) => {
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : null;

  if (!apiKey) {
    return "AI Insights are currently unavailable. Please check your connection.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const summary = transactions.map(t => `${t.title}: ₹${t.amount} (${t.category})`).join(', ');
    const prompt = `
      You are the PayFlow Smart Assistant. Your goal is to provide elite financial insights to the user based on their transaction history.
      
      Transaction History:
      ${summary}
      
      User Query: ${query}
      
      Response Requirements:
      - Be professional, modern, and helpful.
      - Use English language only.
      - Format with markdown (bold, lists).
      - Keep the response under 100 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "PayFlow AI is currently processing other requests. Please try again in a moment.";
  }
};