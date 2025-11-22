
export interface Word {
  term: string;
  definition: string;
  example: string;
  synonyms: string[];
  context?: string;
  grammar?: string; // e.g. "auf + Akk"
  tips?: string;    // DE + RU logic explanations
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface StudySet {
  id: string; // Unique ID for tracking
  topic: string;
  lang?: string; // 'en-US', 'de-DE', etc.
  vocabulary: Word[];
  quiz: QuizQuestion[];
}

export interface TopicProgress {
  score: number; // 0 to 100
  lastPlayed: number; // Timestamp
  mistakes: string[]; // List of terms the user got wrong
}

export enum AppState {
  HOME = 'HOME',
  LOADING = 'LOADING',
  STUDY_VOCAB = 'STUDY_VOCAB',
  WRITING = 'WRITING',
  QUIZ = 'QUIZ',
  TRAINING = 'TRAINING',
  DICTIONARY = 'DICTIONARY',
  FREE_WRITING = 'FREE_WRITING',
  RESULTS = 'RESULTS'
}

export interface TopicSuggestion {
  title: string;
  description: string;
  icon: string;
}

export interface WritingFeedback {
  score: number;
  generalFeedback: string;
  corrections: {
    original: string;
    correction: string;
    explanation: string;
  }[];
  vocabSuggestions: {
    original: string;
    suggestion: string;
    nuance: string;
  }[];
}
