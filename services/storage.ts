
import { TopicProgress } from '../types';

const STORAGE_KEY = 'c1_challenge_progress';

export const getProgress = (): Record<string, TopicProgress> => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error("Failed to load progress", e);
    return {};
  }
};

export const saveTopicProgress = (topicId: string, score: number, mistakes: string[]) => {
  const current = getProgress();
  
  // Logic: We only overwrite score if it's higher, OR if we are re-training. 
  // For a "Challenge" app, let's save the latest attempt to reflect current knowledge.
  const entry: TopicProgress = {
    score: score,
    lastPlayed: Date.now(),
    mistakes: mistakes
  };

  const updated = { ...current, [topicId]: entry };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const getTopicStats = (topicId: string): TopicProgress | null => {
  const all = getProgress();
  return all[topicId] || null;
};
