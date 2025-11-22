
import { GoogleGenAI, Type } from "@google/genai";
import { StudySet, Word, QuizQuestion, TopicSuggestion, WritingFeedback } from '../types';

// Safely retrieve API key from environment or fallback to empty string to prevent runtime crashes
const getApiKey = (): string => {
  try {
    // @ts-ignore - process might not be defined in browser
    return (typeof process !== "undefined" && process.env && process.env.API_KEY) || '';
  } catch (e) {
    return '';
  }
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });
const MODEL_NAME = "gemini-2.5-flash";

// Schema for Vocabulary List
const vocabularySchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      term: { type: Type.STRING },
      definition: { type: Type.STRING, description: "DE definition + RU Translation" },
      example: { type: Type.STRING },
      synonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
      context: { type: Type.STRING },
      grammar: { type: Type.STRING },
      tips: { type: Type.STRING, description: "MUST BE BILINGUAL: 'DE: ... RU: ...'" }
    },
    required: ["term", "definition", "example", "synonyms"]
  }
};

// Schema for Quiz
const quizSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      id: { type: Type.INTEGER },
      question: { type: Type.STRING },
      options: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING }, 
        description: "4 possible answers" 
      },
      correctAnswerIndex: { type: Type.INTEGER, description: "0-based index of the correct answer" },
      explanation: { type: Type.STRING, description: "Bilingual explanation (DE/RU)" }
    },
    required: ["id", "question", "options", "correctAnswerIndex", "explanation"]
  }
};

// Schema for Dictionary Lookup
const dictionarySchema = {
  type: Type.OBJECT,
  properties: {
    term: { type: Type.STRING },
    definition: { type: Type.STRING, description: "Detailed Meaning in DE and precise RU translation." },
    example: { type: Type.STRING, description: "2-3 sentences showing different contexts." },
    synonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
    context: { type: Type.STRING, description: "Style: Formal/Colloquial/etc" },
    grammar: { type: Type.STRING, description: "CRITICAL: Exact Preposition + Case (e.g. 'sich freuen auf + Akk'). If noun: Gender/Plural." },
    tips: { type: Type.STRING, description: "Lifehack/Logic: Explain in DE AND RU. e.g., 'DE: Ver- bedeutet Fehler. RU: Ver- означает ошибку.'" }
  },
  required: ["term", "definition", "example", "synonyms", "context", "grammar", "tips"]
};

// Schema for Writing Feedback
const writingFeedbackSchema = {
  type: Type.OBJECT,
  properties: {
    score: { type: Type.INTEGER, description: "Score out of 100 based on C1 criteria" },
    generalFeedback: { type: Type.STRING, description: "General comments in German with Russian translation in brackets." },
    corrections: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          original: { type: Type.STRING },
          correction: { type: Type.STRING },
          explanation: { type: Type.STRING, description: "Explain the grammar rule briefly (DE/RU)." }
        }
      }
    },
    vocabSuggestions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          original: { type: Type.STRING },
          suggestion: { type: Type.STRING, description: "A more C1-level alternative" },
          nuance: { type: Type.STRING, description: "Why is this word better?" }
        }
      }
    }
  },
  required: ["score", "generalFeedback", "corrections", "vocabSuggestions"]
};

export const generateStudySet = async (inputData: string, isRawText: boolean): Promise<StudySet> => {
  if (!apiKey) throw new Error("API Key missing. Please configure environment.");

  const promptContext = isRawText 
    ? `Analyze the following text and extract 8 advanced C1/C2 level vocabulary words found in or relevant to this text: "${inputData}".`
    : `Generate a list of 8 advanced C1/C2 level vocabulary words related to the topic: "${inputData}".`;

  const vocabPrompt = `${promptContext} 
  Then, create a short definition (DE+RU), an example sentence, provide synonyms, and usage context for each.
  CRITICAL: The 'tips' field must explain the logic (Prefix meaning, Etymology, Mnemonic) in BOTH German AND Russian.
  For grammar, specify Case/Preposition clearly.`;

  try {
    // 1. Generate Vocabulary
    const vocabResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: vocabPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: vocabularySchema,
        systemInstruction: "You are an expert German C1 tutor for Russian speakers. You explain concepts simply and logically ('idiot-proof'). Use 'DE:' and 'RU:' prefixes in definitions and tips."
      }
    });

    const vocabData = JSON.parse(vocabResponse.text || "[]") as Word[];

    // 2. Generate Quiz based on the vocabulary
    const quizPrompt = `Based on these vocabulary words: ${vocabData.map(w => w.term).join(', ')}. 
    Create 5 multiple-choice questions. Some should test definition, others usage in context.
    Provide the explanation in both German and Russian.`;

    const quizResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: quizPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        systemInstruction: "You are an expert language tutor. Create challenging C1 questions. Explanations must be DE and RU."
      }
    });

    const quizData = JSON.parse(quizResponse.text || "[]") as QuizQuestion[];

    return {
      id: `gen_${Date.now()}`,
      topic: isRawText ? "Analysis of Provided Text" : inputData,
      lang: "de-DE",
      vocabulary: vocabData,
      quiz: quizData
    };

  } catch (error) {
    console.error("Error generating study set:", error);
    throw new Error("Failed to generate content. Check API quota or connection.");
  }
};

export const lookupWord = async (word: string): Promise<Word> => {
  if (!apiKey) throw new Error("API Key missing. Please configure environment.");

  const prompt = `Analyze the German word/phrase: "${word}".
  
  1. **DEFINITION**: Provide the definition in German AND a precise Russian translation.
  2. **GRAMMAR**: This is crucial. 
     - If it's a VERB: List the Preposition + Case (e.g., 'achten auf + Akk'). Mention if it is reflexive (Akk/Dat).
     - If it's a NOUN: Gender and Plural.
  3. **TIPS / LIFEHACK**: Explain the LOGIC. 
     - Break down prefixes (e.g., ver- = mistake).
     - Explain it in BOTH German and Russian.
     - Use the structure: "DE: ... RU: ..."
  4. **EXAMPLE**: Provide 2-3 short sentences showing different nuances.
  
  Output JSON matching the schema.`;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: dictionarySchema,
        systemInstruction: "You are a strict German C1 tutor for Russian speakers. You explain things 'like for an idiot' - very simply, using logic and word math. Provide tips in DE and RU."
      }
    });

    return JSON.parse(response.text || "{}") as Word;
  } catch (error) {
    console.error("Dictionary lookup failed", error);
    throw new Error("Dictionary lookup failed.");
  }
};

export const generateWritingPrompt = async (): Promise<string> => {
  if (!apiKey) throw new Error("API Key missing. Please configure environment.");

  const prompt = "Generate a thought-provoking C1-level discussion prompt/topic for a German essay. It should be complex enough to require connectors (je...desto, zwar...aber) and advanced vocabulary. Output ONLY the German prompt string.";
  
  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    return response.text || "Diskutieren Sie die Vor- und Nachteile der Globalisierung.";
  } catch (error) {
    return "Beschreiben Sie eine Situation, in der Sie eine schwierige Entscheidung treffen mussten.";
  }
};

export const evaluateWriting = async (prompt: string, text: string): Promise<WritingFeedback> => {
  if (!apiKey) throw new Error("API Key missing. Please configure environment.");

  const evaluationPrompt = `
  Act as a strict German C1 Examiner. Analyze the following student text based on the prompt: "${prompt}".
  
  Student Text:
  "${text}"

  Provide feedback in JSON format:
  1. score: 0-100.
  2. generalFeedback: Summary of strengths/weaknesses (DE & RU).
  3. corrections: Specific grammar/spelling mistakes.
  4. vocabSuggestions: Suggest C1 synonyms for simple words used (e.g. if they used 'machen', suggest 'durchführen').
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: evaluationPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: writingFeedbackSchema
      }
    });

    return JSON.parse(response.text || "{}") as WritingFeedback;
  } catch (error) {
    console.error("Writing evaluation failed", error);
    throw new Error("Could not evaluate writing.");
  }
};

export const getSuggestedTopics = (): TopicSuggestion[] => [
  { title: "Klimawandel und Umwelt", description: "Nachhaltigkeit, Energie und Naturschutz.", icon: "🌱" },
  { title: "Digitalisierung", description: "KI, Datenschutz und soziale Medien.", icon: "🤖" },
  { title: "Globalisierung", description: "Wirtschaft, Handel und internationale Beziehungen.", icon: "🌍" },
  { title: "Arbeitswelt der Zukunft", description: "Homeoffice, Karriere und Work-Life-Balance.", icon: "💼" },
  { title: "Psychologie & Gesellschaft", description: "Verhalten, mentale Gesundheit und Zusammenleben.", icon: "🧠" }
];
