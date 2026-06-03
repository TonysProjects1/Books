import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Initialize the Gemini SDK safely on the server side
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY is not defined. AI functionality will be unavailable until configured in Settings.");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON parsing middleware
  app.use(express.json());

  // API Route to summarize any classic book using Gemini 3.5 Flash with structured schema
  app.post("/api/library/summarize", async (req, res) => {
    try {
      const { title } = req.body;
      if (!title || typeof title !== "string" || !title.trim()) {
        res.status(400).json({ error: "A valid book title is required." });
        return;
      }

      if (!ai) {
        res.status(503).json({
          error: "Gemini API Client is not initialized. Please ensure GEMINI_API_KEY is set in Settings."
        });
        return;
      }

      const prompt = `Perform a highly sophisticated, erudite literary analysis and summary of the classic book or epic titled: "${title}".
Provide an academic and engaging analysis, extracting the central themes, most epic/climax moments (citing specific chapters/books/acts), major character profiles with archetypes, and famous, memorable, and profound quotes with their speakers and profound significance. Give the author, the era or year of completion, and a punchy one-sentence summary.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are a world-class literary critic and scholar. Your prose is intellectual, elegant, and deeply analytical. Provide comprehensive details and beautiful formatting. Do not assume any details; retrieve standard, canonical literary facts.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "The official, canonical title of the book" },
              author: { type: Type.STRING, description: "The full name of the author" },
              era: { type: Type.STRING, description: "The year of publication or historical era (e.g., 1884, c. 8th Century BCE)" },
              oneSentenceSummary: { type: Type.STRING, description: "A highly refined, single-sentence encapsulation of the core narrative tension" },
              introduction: { type: Type.STRING, description: "A sophisticated introduction analyzing the historical and literary significance of the work" },
              themes: {
                type: Type.ARRAY,
                description: "The 3 most vital and profound themes of the book",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING, description: "A poetic, precise title of the theme" },
                    description: { type: Type.STRING, description: "A detailed, deep analytical paragraph explaining how this theme plays out" },
                    quote: { type: Type.STRING, description: "An iconic quote, passage, or motif associated with this theme" }
                  },
                  required: ["name", "description"]
                }
              },
              epicMoments: {
                type: Type.ARRAY,
                description: "The 3 most legendary, epic, or climactic scenes of the work",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING, description: "The name of the spectacular moment" },
                    act: { type: Type.STRING, description: "Where the moment happens (e.g., Chapter 31, Book XXII, Act III)" },
                    description: { type: Type.STRING, description: "A rich literary recreation of the event, explaining the dramatic and thematic escalation" },
                    impact: { type: Type.STRING, description: "The thematic or structural impact of this climax on the overall narrative" }
                  },
                  required: ["title", "act", "description", "impact"]
                }
              },
              characterProfiles: {
                type: Type.ARRAY,
                description: "The 3 most central characters and their dramatic functions",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING, description: "The character's name" },
                    role: { type: Type.STRING, description: "Role in plot (e.g., Protagonist, Antagonist, Mentor)" },
                    archetype: { type: Type.STRING, description: "Philosophical archetype (e.g., Trickster Hero, Fatalist)" },
                    analysis: { type: Type.STRING, description: "An analytical paragraph on their growth, struggle, or thematic resonance" }
                  },
                  required: ["name", "role", "archetype", "analysis"]
                }
              },
              quotes: {
                type: Type.ARRAY,
                description: "3 iconic, authentic, and profound quotes from the text",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    text: { type: Type.STRING, description: "The exact, memorable quote text" },
                    speaker: { type: Type.STRING, description: "Who spoke or wrote it" },
                    significance: { type: Type.STRING, description: "The literary context and deeper philosophical meaning" }
                  },
                  required: ["text", "speaker", "significance"]
                }
              }
            },
            required: [
              "title",
              "author",
              "era",
              "oneSentenceSummary",
              "introduction",
              "themes",
              "epicMoments",
              "characterProfiles",
              "quotes"
            ]
          }
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response content generated from Gemini.");
      }

      const cleanJson = JSON.parse(responseText.trim());
      res.json(cleanJson);
    } catch (error: any) {
      console.error("Error in Gemini summarization:", error);
      res.status(500).json({
        error: "Failed to generate literary summary.",
        details: error.message || error
      });
    }
  });

  // Vite development middleware vs. static build hosting
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[The Grand Archive Server] Running on http://localhost:${PORT}`);
  });
}

startServer();
