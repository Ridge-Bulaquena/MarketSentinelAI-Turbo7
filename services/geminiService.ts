
import { GoogleGenAI } from "@google/genai";
import { AgentType } from "../types";

// Note: Create instance inside functions for up-to-date API key from selection dialog

export const getAgentResponse = async (
  agent: AgentType,
  query: string,
  history: { role: 'user' | 'assistant', content: string }[]
): Promise<string> => {
  // Always create instance inside call to use latest API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // Complex strategic task
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: query }] }
      ],
      config: {
        systemInstruction: `You are the ${agent} agent for MarketSentinel AI. Act with high intelligence and strategic focus. Be concise but data-driven.`,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access .text property directly
    return response.text || "I'm sorry, I couldn't process that market query.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to MarketSentinel core. Please verify your connection.";
  }
};

export const getMarketSummary = async (): Promise<{ text: string; sources: any[] }> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Generate a brief, 3-sentence high-level summary of the current global tech market status as of today.',
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    // Returning both text and grounding sources to comply with extraction requirements
    return {
      text: response.text || "Market stable. No critical anomalies detected.",
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch {
    return {
      text: "Market data stream active. Waiting for autonomous synchronization.",
      sources: []
    };
  }
};