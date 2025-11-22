
import React, { useState, useEffect } from 'react';
import { generateStudySet, getSuggestedTopics, lookupWord, generateWritingPrompt, evaluateWriting } from './services/gemini';
import { 
  DAY_1_PRESET, GRAMMAR_PRESET, DAY_3_PRESET, DAY_4_PRESET, DAY_5_PRESET, 
  DAY_6_PRESET, DAY_7_PRESET, DAY_8_PRESET, DAY_9_PRESET, DAY_10_PRESET, 
  DAY_11_PRESET, DAY_12_PRESET, DAY_13_PRESET, DAY_14_PRESET, DAY_15_PRESET,
  DAY_16_PRESET, DAY_17_PRESET, DAY_18_PRESET, DAY_19_PRESET, DAY_20_PRESET,
  DAY_21_PRESET, DAY_22_PRESET, DAY_23_PRESET, DAY_24_PRESET,
  DAY_25_PRESET, DAY_26_PRESET, DAY_27_PRESET, DAY_28_PRESET,
  DAY_29_PRESET, DAY_30_PRESET, DAY_31_PRESET, DAY_32_PRESET
} from './services/presets';
import { AppState, StudySet, TopicSuggestion, Word, TopicProgress, WritingFeedback } from './types';
import { getProgress, saveTopicProgress } from './services/storage';
import { Flashcard } from './components/Flashcard';
import { Button } from './components/Button';
import { 
  Brain, GraduationCap, ChevronRight, Sparkles, CheckCircle, XCircle, 
  ArrowRight, RefreshCcw, FileText, Home, Book, PlayCircle, PenTool, 
  Layers, BookOpenCheck, Search, Plus, Zap, Dumbbell, Scale, ChevronDown, ChevronUp,
  Trophy, Lock, Send
} from 'lucide-react';

export default function App() {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [studySet, setStudySet] = useState<StudySet | null>(null);
  const [inputText, setInputText] = useState('');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  // Progress Tracking
  const [progressMap, setProgressMap] = useState<Record<string, TopicProgress>>({});
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionMistakes, setSessionMistakes] = useState<string[]>([]);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  
  // Writing Mode State
  const [writingIndex, setWritingIndex] = useState(0);
  const [writingInput, setWritingInput] = useState('');
  const [writingFeedback, setWritingFeedback] = useState<'correct' | 'incorrect' | null>(null);

  // Free Writing State
  const [freeWritingPrompt, setFreeWritingPrompt] = useState('');
  const [freeWritingInput, setFreeWritingInput] = useState('');
  const [freeWritingFeedback, setFreeWritingFeedback] = useState<WritingFeedback | null>(null);

  // Dictionary State
  const [searchTerm, setSearchTerm] = useState('');
  const [dictResult, setDictResult] = useState<Word | null>(null);
  const [myList, setMyList] = useState<Word[]>([]);
  const [expandedWordIndex, setExpandedWordIndex] = useState<number | null>(null);

  // Training State
  const [trainStreak, setTrainStreak] = useState(0);
  const [trainQuestion, setTrainQuestion] = useState<any>(null);
  const [trainFeedback, setTrainFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const suggestedTopics = getSuggestedTopics();

  // Load stats on mount
  useEffect(() => {
    const data = getProgress();
    setProgressMap(data);
  }, [appState]);

  const handleGenerate = async (text: string, isRawText: boolean) => {
    if (!text.trim()) return;
    setAppState(AppState.LOADING);
    setError(null);
    try {
      const data = await generateStudySet(text, isRawText);
      startSession(data);
    } catch (err) {
      setError((err as Error).message);
      setAppState(AppState.HOME);
    }
  };

  const startSession = (set: StudySet) => {
    setStudySet(set);
    // Reset Session Stats
    setSessionScore(0);
    setSessionMistakes([]);
    
    // Reset UI states
    setCurrentCardIndex(0);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setWritingIndex(0);
    setWritingInput('');
    setWritingFeedback(null);
    setError(null);
    
    setAppState(AppState.STUDY_VOCAB);
  };

  const completeSession = () => {
    if (!studySet) return;
    
    // Calculate final score based on Writing + Quiz
    // Assumption: Writing is 50% of score, Quiz is 50%
    // Writing mistakes are tracked in sessionMistakes
    // Quiz mistakes are calculated now
    
    let quizCorrect = 0;
    studySet.quiz.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswerIndex) quizCorrect++;
    });

    const totalQuestions = studySet.vocabulary.length + studySet.quiz.length;
    const writingCorrect = studySet.vocabulary.length - sessionMistakes.length;
    const totalCorrect = writingCorrect + quizCorrect;
    
    const finalScore = Math.round((totalCorrect / totalQuestions) * 100);
    
    // Identify mistakes for future drills
    // (Already tracking writing mistakes in sessionMistakes)
    
    saveTopicProgress(studySet.id, finalScore, sessionMistakes);
    setSessionScore(finalScore);
    setAppState(AppState.RESULTS);
  };

  // --- Dictionary Logic ---
  const handleLookup = async () => {
    if (!searchTerm.trim()) return;
    setIsLoading(true);
    setError(null);
    setDictResult(null);
    try {
       const result = await lookupWord(searchTerm);
       setDictResult(result);
    } catch (e) {
       setError("Could not find word. Try again.");
    } finally {
       setIsLoading(false);
    }
  };

  const addToMyList = () => {
    if (dictResult) {
      setMyList(prev => [...prev, dictResult]);
      setSearchTerm('');
      setDictResult(null);
    }
  };

  const toggleExpandWord = (index: number) => {
    if (expandedWordIndex === index) {
      setExpandedWordIndex(null);
    } else {
      setExpandedWordIndex(index);
    }
  };

  const trainMyList = () => {
    if (myList.length === 0) return;
    const customSet: StudySet = {
      id: "custom_list",
      topic: "My Custom List",
      lang: "de-DE",
      vocabulary: myList,
      quiz: []
    };
    startSession(customSet);
    setTrainStreak(0);
    setAppState(AppState.TRAINING);
  };

  // --- Free Writing Logic ---
  const handleStartFreeWriting = async () => {
    setAppState(AppState.LOADING);
    try {
      const prompt = await generateWritingPrompt();
      setFreeWritingPrompt(prompt);
      setFreeWritingInput('');
      setFreeWritingFeedback(null);
      setAppState(AppState.FREE_WRITING);
    } catch (e) {
      setError("Failed to load prompt.");
      setAppState(AppState.HOME);
    }
  };

  const handleSubmitWriting = async () => {
    if (!freeWritingInput.trim()) return;
    setIsLoading(true);
    try {
      const feedback = await evaluateWriting(freeWritingPrompt, freeWritingInput);
      setFreeWritingFeedback(feedback);
    } catch (e) {
      setError("Failed to evaluate writing.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- Infinite Training Logic (Drill) ---
  const generateTrainQuestion = () => {
    if (!studySet) return;
    const hasQuiz = studySet.quiz && studySet.quiz.length > 0;
    
    const type = hasQuiz ? Math.floor(Math.random() * 3) : Math.floor(Math.random() * 2);
    const vocab = studySet.vocabulary[Math.floor(Math.random() * studySet.vocabulary.length)];
    
    if (type < 2) {
       setTrainQuestion({
         type: 'vocab',
         data: vocab,
         mode: type === 0 ? 'de_ru' : 'ru_de'
       });
    } else {
       const quizQ = studySet.quiz[Math.floor(Math.random() * studySet.quiz.length)];
       setTrainQuestion({
         type: 'quiz',
         data: quizQ
       });
    }
    setTrainFeedback(null);
    setWritingInput('');
  };

  const checkTrainAnswer = (answer?: number) => {
     if (!trainQuestion) return;
     if (trainQuestion.type === 'quiz') {
        if (answer === trainQuestion.data.correctAnswerIndex) {
           setTrainFeedback('correct');
           setTrainStreak(s => s + 1);
        } else {
           setTrainFeedback('incorrect');
           setTrainStreak(0);
        }
     } else {
        const correct = trainQuestion.data.term.toLowerCase();
        const input = writingInput.trim().toLowerCase();
        if (input === correct || (correct.length > 5 && input.includes(correct.substring(0, correct.length - 2)))) {
           setTrainFeedback('correct');
           setTrainStreak(s => s + 1);
        } else {
           setTrainFeedback('incorrect');
           setTrainStreak(0);
        }
     }
  };

  useEffect(() => {
    if (appState === AppState.TRAINING && !trainQuestion) {
      generateTrainQuestion();
    }
  }, [appState]);

  // --- Logic for Writing Mode ---
  const checkWritingAnswer = () => {
    if (!studySet) return;
    const currentWord = studySet.vocabulary[writingIndex];
    const userInput = writingInput.trim().toLowerCase();
    const correct = currentWord.term.toLowerCase();
    
    if (userInput === correct || (correct.length > 15 && userInput.includes(correct.substring(5)))) {
      setWritingFeedback('correct');
    } else {
      setWritingFeedback('incorrect');
      setSessionMistakes(prev => [...prev, currentWord.term]);
    }
  };

  const nextWriting = () => {
    if (!studySet) return;
    if (writingIndex < studySet.vocabulary.length - 1) {
      setWritingIndex(prev => prev + 1);
      setWritingInput('');
      setWritingFeedback(null);
    } else {
      setAppState(AppState.QUIZ);
    }
  };

  // --- Logic for Quiz ---
  const handleQuizOptionSelect = (questionId: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  // --- Components ---

  const ProgressBar = ({ score }: { score: number }) => {
    let color = "bg-slate-200";
    if (score >= 80) color = "bg-green-500";
    else if (score >= 50) color = "bg-yellow-500";
    else if (score > 0) color = "bg-red-500";

    return (
      <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
        <div className={`h-full ${color} transition-all duration-500`} style={{ width: `${score}%` }}></div>
      </div>
    );
  };

  const renderHome = () => (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl mb-6 text-indigo-600">
          <GraduationCap size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          C1 Mastery
        </h1>
        <p className="text-slate-500 mb-8">Master German Logic & Grammar until it bounces off your teeth.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
           <Button onClick={() => setAppState(AppState.DICTIONARY)} icon={<Book size={18} />} variant="outline">
             AI Dictionary (Bilingual Tips)
           </Button>
           <Button onClick={handleStartFreeWriting} icon={<PenTool size={18} />} variant="secondary">
             Writing Practice
           </Button>
        </div>
      </div>

      {/* Curriculum Grid */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <BookOpenCheck className="text-teal-600" />
          Curriculum Progress
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {[
            DAY_1_PRESET, GRAMMAR_PRESET, DAY_3_PRESET, DAY_4_PRESET, DAY_5_PRESET,
            DAY_6_PRESET, DAY_7_PRESET, DAY_8_PRESET, DAY_9_PRESET, DAY_10_PRESET,
            DAY_11_PRESET, DAY_12_PRESET, DAY_13_PRESET, DAY_14_PRESET, DAY_15_PRESET,
            DAY_16_PRESET, DAY_17_PRESET, DAY_18_PRESET, DAY_19_PRESET, DAY_20_PRESET,
            DAY_21_PRESET, DAY_22_PRESET, DAY_23_PRESET, DAY_24_PRESET,
            DAY_25_PRESET, DAY_26_PRESET, DAY_27_PRESET, DAY_28_PRESET,
            DAY_29_PRESET, DAY_30_PRESET, DAY_31_PRESET, DAY_32_PRESET
          ].map((set, idx) => {
            const stats = progressMap[set.id];
            const score = stats?.score || 0;
            const isMastered = score === 100;
            // Unlock logic: first 3 always unlocked, then check previous score
            const prevSet = [
              DAY_1_PRESET, GRAMMAR_PRESET, DAY_3_PRESET, DAY_4_PRESET, DAY_5_PRESET,
              DAY_6_PRESET, DAY_7_PRESET, DAY_8_PRESET, DAY_9_PRESET, DAY_10_PRESET,
              DAY_11_PRESET, DAY_12_PRESET, DAY_13_PRESET, DAY_14_PRESET, DAY_15_PRESET,
              DAY_16_PRESET, DAY_17_PRESET, DAY_18_PRESET, DAY_19_PRESET, DAY_20_PRESET,
              DAY_21_PRESET, DAY_22_PRESET, DAY_23_PRESET, DAY_24_PRESET,
              DAY_25_PRESET, DAY_26_PRESET, DAY_27_PRESET, DAY_28_PRESET,
              DAY_29_PRESET, DAY_30_PRESET, DAY_31_PRESET, DAY_32_PRESET
            ][idx-1];
            
            const isLocked = idx > 0 && (!progressMap[prevSet?.id]?.score || progressMap[prevSet?.id].score < 50);

            return (
              <div 
                key={set.id}
                onClick={() => !isLocked && startSession(set)}
                className={`
                  relative overflow-hidden rounded-xl border p-5 flex flex-col justify-between h-44 transition-all
                  ${isLocked 
                    ? 'bg-slate-50 border-slate-200 opacity-70 cursor-not-allowed' 
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-400 cursor-pointer group'}
                `}
              >
                {isMastered && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-bl-lg uppercase">
                    Mastered
                  </div>
                )}
                <div className="flex items-center justify-between mb-3">
                   <div className={`
                     w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm transition-colors
                     ${isMastered ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}
                   `}>{idx + 1}</div>
                   {isLocked ? <Lock size={16} className="text-slate-300" /> : <PlayCircle size={18} className="text-indigo-300 group-hover:text-indigo-600" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 leading-tight mb-1">{set.topic.split(':')[1] || set.topic}</h3>
                  <ProgressBar score={score} />
                  <p className="text-[10px] text-slate-400 mt-1 text-right">{score}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Custom Input */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-4 text-indigo-700">
            <FileText size={24} />
            <h2 className="text-xl font-bold">AI Generator</h2>
          </div>
          <textarea
            className="w-full flex-grow p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 resize-none bg-slate-50 text-slate-700 text-sm mb-4"
            rows={4}
            placeholder="Paste German text or topic..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button 
            onClick={() => handleGenerate(inputText, inputText.length > 50)} 
            disabled={!inputText.trim()}
            className="w-full"
          >
            Generate Set
          </Button>
        </div>

        {/* Right: Quick Topics */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">Extra Topics</h2>
          {suggestedTopics.map((topic, idx) => (
            <button
              key={idx}
              onClick={() => handleGenerate(topic.title, false)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-xl transition-all group text-left"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{topic.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-800 group-hover:text-indigo-700">{topic.title}</h3>
                  <p className="text-xs text-slate-500">{topic.description}</p>
                </div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-indigo-500" size={20} />
            </button>
          ))}
        </div>
      </div>
      
      {error && (
        <div className="mt-8 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-center">
          {error}
        </div>
      )}
    </div>
  );

  const renderResults = () => {
    if (!studySet) return null;
    
    const isMastered = sessionScore === 100;
    
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-12">
          <div className={`inline-flex items-center justify-center p-6 rounded-full mb-6 ${isMastered ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
            {isMastered ? <Trophy size={64} /> : <RefreshCcw size={64} />}
          </div>
          
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2">{sessionScore}% Mastery</h2>
          <p className="text-slate-500 mb-8 text-lg">
            {isMastered ? "Perfekt! It bounces off your teeth!" : "Not quite there. Drill again to master it."}
          </p>

          {sessionMistakes.length > 0 && (
            <div className="bg-red-50 p-6 rounded-xl mb-8 text-left border border-red-100">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2"><XCircle size={18}/> Weak Points:</h4>
              <div className="flex flex-wrap gap-2">
                {sessionMistakes.map((m, i) => (
                  <span key={i} className="bg-white text-red-600 px-3 py-1 rounded-full text-sm border border-red-100 shadow-sm">{m}</span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Button 
              onClick={() => {
                // If mistakes, filter vocab to only mistakes for drill
                if (sessionMistakes.length > 0) {
                   const mistakeVocab = studySet.vocabulary.filter(v => sessionMistakes.includes(v.term));
                   setStudySet({ ...studySet, vocabulary: mistakeVocab, quiz: [] }); // Temporary Drill Set
                   setTrainStreak(0);
                   setAppState(AppState.TRAINING);
                } else {
                   // Restart full
                   startSession(studySet);
                }
              }} 
              className="w-full py-4 text-lg"
              icon={<Zap size={20} />}
            >
              {sessionMistakes.length > 0 ? "Smart Drill (Fix Mistakes)" : "Practice Again"}
            </Button>
            
            <Button variant="ghost" onClick={() => setAppState(AppState.HOME)}>
              Back to Curriculum
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderLoading = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <div className="relative bg-white p-4 rounded-full shadow-lg mb-6">
          <Sparkles className="text-indigo-600 animate-spin-slow" size={40} />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Processing...</h2>
      <p className="text-slate-500">AI is building your custom C1 content.</p>
    </div>
  );

  const renderDictionary = () => (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={() => setAppState(AppState.HOME)} icon={<Home size={18} />}>Back</Button>
        <h2 className="text-2xl font-bold text-indigo-800">AI Wörterbuch</h2>
        <div className="w-20"></div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
         <div className="flex gap-2">
            <input 
               className="flex-grow p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 text-lg"
               placeholder="Type a German word..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && handleLookup()}
            />
            <Button onClick={handleLookup} isLoading={isLoading} icon={<Search size={20} />}>
               Lookup
            </Button>
         </div>
      </div>

      {dictResult && (
         <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-600 animate-fade-in mb-8">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <div className="flex gap-2 mb-2">
                     <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">{dictResult.context}</span>
                     {dictResult.grammar && <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide border border-emerald-200">{dictResult.grammar}</span>}
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 mt-2">{dictResult.term}</h3>
               </div>
               <Button variant="secondary" onClick={addToMyList} icon={<Plus size={18} />}>Add to List</Button>
            </div>
            
            <p className="text-xl text-slate-700 mb-4 font-medium whitespace-pre-line">{dictResult.definition}</p>
            
            {dictResult.tips && (
               <div className="mb-4 bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-yellow-700 font-bold text-sm uppercase mb-1">
                     <Zap size={16} /> Logic / Lifehack
                  </div>
                  <p className="text-yellow-900">{dictResult.tips}</p>
               </div>
            )}

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 italic text-slate-600 whitespace-pre-line">
               {dictResult.example}
            </div>
         </div>
      )}

      {myList.length > 0 && (
         <div>
            <div className="flex justify-between items-center mb-4">
               <h3 className="text-lg font-bold text-slate-700">My List ({myList.length})</h3>
               <Button onClick={trainMyList} variant="primary" icon={<Dumbbell size={18} />}>Train List</Button>
            </div>
            <div className="grid gap-3">
               {myList.map((w, i) => {
                  const isExpanded = expandedWordIndex === i;
                  return (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all">
                       <div 
                          className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50"
                          onClick={() => toggleExpandWord(i)}
                       >
                          <div className="flex items-center gap-3">
                             <span className="font-bold text-slate-800 text-lg">{w.term}</span>
                             {w.grammar && <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100">{w.grammar}</span>}
                          </div>
                          <div className="text-slate-400">
                             {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </div>
                       </div>
                       
                       {isExpanded && (
                          <div className="px-4 pb-4 pt-0 animate-fade-in bg-slate-50/50">
                             <div className="h-px bg-slate-100 w-full mb-3"></div>
                             <p className="text-slate-700 mb-3 whitespace-pre-line">{w.definition}</p>
                             {w.tips && (
                                <div className="mb-3 text-sm text-amber-700 bg-amber-50 p-2 rounded border border-amber-100">
                                   <strong>💡 Logic:</strong> {w.tips}
                                </div>
                             )}
                             <p className="text-sm text-slate-500 italic">{w.example}</p>
                          </div>
                       )}
                    </div>
                  );
               })}
            </div>
         </div>
      )}
    </div>
  );

  const renderFreeWriting = () => {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => setAppState(AppState.HOME)} icon={<Home size={18} />}>
            Back
          </Button>
          <h2 className="text-2xl font-bold text-indigo-800 flex items-center gap-2">
            <PenTool /> Writing Practice
          </h2>
          <div className="w-20"></div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-6">
          <h3 className="text-slate-500 uppercase text-xs font-bold mb-2 tracking-wider">Your Prompt</h3>
          <p className="text-xl font-medium text-slate-800">{freeWritingPrompt}</p>
        </div>

        {!freeWritingFeedback ? (
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
             <textarea 
               className="w-full h-64 p-4 text-lg border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none bg-slate-50"
               placeholder="Schreiben Sie hier Ihre Antwort..."
               value={freeWritingInput}
               onChange={(e) => setFreeWritingInput(e.target.value)}
             />
             <div className="flex justify-between items-center mt-4">
                <span className="text-slate-400 text-sm">{freeWritingInput.split(/\s+/).filter(w => w.length > 0).length} words</span>
                <Button 
                  onClick={handleSubmitWriting} 
                  disabled={freeWritingInput.length < 10 || isLoading}
                  isLoading={isLoading}
                  icon={<Send size={18} />}
                >
                   Analyze Text
                </Button>
             </div>
          </div>
        ) : (
          <div className="space-y-6 animate-fade-in">
             {/* Score Card */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-700">C1 Score</h3>
                  <p className="text-slate-400 text-sm">Based on grammar & vocabulary</p>
                </div>
                <div className={`text-4xl font-extrabold ${freeWritingFeedback.score >= 80 ? 'text-green-600' : 'text-indigo-600'}`}>
                  {freeWritingFeedback.score}/100
                </div>
             </div>

             {/* General Feedback */}
             <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2"><Brain size={18}/> AI Feedback</h3>
                <p className="text-indigo-900 leading-relaxed whitespace-pre-line">{freeWritingFeedback.generalFeedback}</p>
             </div>

             {/* Corrections */}
             {freeWritingFeedback.corrections.length > 0 && (
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><XCircle size={18} className="text-red-500"/> Corrections</h3>
                  <div className="space-y-4">
                     {freeWritingFeedback.corrections.map((c, i) => (
                       <div key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                          <div className="flex flex-col md:flex-row gap-2 md:items-center mb-1">
                             <span className="line-through text-red-400 decoration-2">{c.original}</span>
                             <ArrowRight size={14} className="text-slate-300 hidden md:block" />
                             <span className="text-green-600 font-bold">{c.correction}</span>
                          </div>
                          <p className="text-xs text-slate-500">{c.explanation}</p>
                       </div>
                     ))}
                  </div>
               </div>
             )}

             {/* Vocab Suggestions */}
             {freeWritingFeedback.vocabSuggestions.length > 0 && (
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Sparkles size={18} className="text-amber-500"/> C1 Vocabulary Upgrades</h3>
                  <div className="grid gap-3">
                     {freeWritingFeedback.vocabSuggestions.map((v, i) => (
                       <div key={i} className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                          <div className="flex items-center gap-2 mb-1">
                             <span className="text-slate-500 text-sm">{v.original}</span>
                             <ArrowRight size={12} className="text-amber-300" />
                             <span className="text-amber-800 font-bold">{v.suggestion}</span>
                          </div>
                          <p className="text-xs text-amber-700">{v.nuance}</p>
                       </div>
                     ))}
                  </div>
               </div>
             )}

             <div className="flex justify-center pt-6">
                <Button onClick={handleStartFreeWriting} variant="outline">New Prompt</Button>
             </div>
          </div>
        )}
      </div>
    );
  };

  const renderTraining = () => {
    if (!trainQuestion) return <div className="p-12 text-center">Loading Trainer...</div>;
    
    return (
       <div className="max-w-2xl mx-auto px-4 py-12 flex flex-col items-center justify-center h-[80vh]">
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold">
             <Zap size={18} />
             <span>Streak: {trainStreak}</span>
          </div>
          <Button variant="ghost" className="absolute top-4 left-4" onClick={() => setAppState(AppState.STUDY_VOCAB)}>Stop</Button>

          <div className="w-full bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center relative overflow-hidden">
             <div className={`absolute top-0 left-0 w-full h-2 ${trainFeedback === 'correct' ? 'bg-green-500' : trainFeedback === 'incorrect' ? 'bg-red-500' : 'bg-indigo-500'} transition-colors duration-300`}></div>
             
             <h3 className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-8">
               {trainQuestion.type === 'quiz' ? 'Quiz Question' : 'Translate / Explain'}
             </h3>

             {trainQuestion.type === 'quiz' ? (
                <div>
                   <h2 className="text-xl font-bold mb-6">{trainQuestion.data.question}</h2>
                   <div className="grid gap-3">
                      {trainQuestion.data.options.map((opt: string, i: number) => (
                         <button 
                           key={i}
                           onClick={() => {
                              checkTrainAnswer(i);
                              if (i !== trainQuestion.data.correctAnswerIndex) {
                                setTimeout(() => generateTrainQuestion(), 3500);
                              } else {
                                setTimeout(() => generateTrainQuestion(), 1500);
                              }
                           }}
                           className={`p-4 rounded-xl border-2 transition-all font-medium ${trainFeedback ? (i === trainQuestion.data.correctAnswerIndex ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-100 text-slate-300') : 'border-slate-100 hover:border-indigo-500 hover:bg-indigo-50'}`}
                         >
                            {opt}
                         </button>
                      ))}
                   </div>
                   {trainFeedback && (
                      <div className="mt-6 p-4 bg-slate-50 rounded-xl text-slate-600 text-sm animate-fade-in">
                         <strong>Explanation:</strong> {trainQuestion.data.explanation}
                      </div>
                   )}
                </div>
             ) : (
                <div>
                   <h2 className="text-3xl font-bold mb-8">
                      {trainQuestion.mode === 'de_ru' ? trainQuestion.data.term : trainQuestion.data.definition.split('RU:')[1]?.split('.')[0] || "Translate this"}
                   </h2>
                   
                   {trainFeedback ? (
                      <div className="animate-fade-in text-left">
                         <div className={`text-2xl font-bold mb-4 text-center ${trainFeedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                            {trainQuestion.data.term}
                         </div>
                         
                         <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                           <p className="text-slate-800 whitespace-pre-line mb-2">{trainQuestion.data.definition}</p>
                           
                           {trainQuestion.data.grammar && (
                              <div className="mt-2 flex items-center gap-2 text-emerald-700 bg-emerald-50 p-2 rounded">
                                 <Scale size={14} /> <strong>Grammar:</strong> {trainQuestion.data.grammar}
                              </div>
                           )}
                           {trainQuestion.data.tips && (
                              <div className="mt-2 flex items-center gap-2 text-amber-700 bg-amber-50 p-2 rounded">
                                 <Zap size={14} /> <strong>Logic:</strong> {trainQuestion.data.tips}
                              </div>
                           )}
                         </div>
                         
                         <div className="flex justify-center">
                            <Button onClick={() => generateTrainQuestion()}>Next</Button>
                         </div>
                      </div>
                   ) : (
                      <input 
                        autoFocus
                        className="w-full text-center text-2xl p-4 border-b-2 border-slate-200 focus:border-indigo-500 focus:outline-none mb-8"
                        placeholder="Type answer..."
                        value={writingInput}
                        onChange={e => setWritingInput(e.target.value)}
                        onKeyDown={e => {
                           if (e.key === 'Enter') {
                              checkTrainAnswer();
                           }
                        }}
                      />
                   )}
                   {!trainFeedback && (
                     <div className="flex justify-center">
                       <Button onClick={() => {
                          setTrainFeedback('incorrect');
                       }} variant="ghost">Skip / Show Answer</Button>
                     </div>
                   )}
                </div>
             )}
          </div>
       </div>
    );
  };

  const renderStudyVocab = () => {
    if (!studySet) return null;
    const currentWord = studySet.vocabulary[currentCardIndex];

    return (
      <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col items-center h-full">
        <div className="w-full flex justify-between items-center mb-8">
          <Button variant="ghost" onClick={() => setAppState(AppState.HOME)} icon={<Home size={18} />}>
            Home
          </Button>
          <div className="text-center">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wide">Step 1: Learn Logic</h2>
            <p className="text-slate-900 font-semibold truncate max-w-xs">{studySet.topic}</p>
          </div>
          <div className="flex gap-2">
             <Button 
               variant="outline"
               onClick={() => {
                  setTrainStreak(0);
                  generateTrainQuestion();
                  setAppState(AppState.TRAINING);
               }}
               icon={<Zap size={18} />}
            >
               Quick Drill
            </Button>
             <Button 
               variant="secondary"
               onClick={() => setAppState(AppState.WRITING)}
               icon={<ArrowRight size={18} />}
            >
               Start Exam
            </Button>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center w-full">
          <Flashcard word={currentWord} lang={studySet.lang} />
          
          <div className="flex items-center gap-6 mt-12">
            <Button 
              variant="outline" 
              onClick={() => setCurrentCardIndex(Math.max(0, currentCardIndex - 1))}
              disabled={currentCardIndex === 0}
            >
              Zurück
            </Button>
            <span className="text-slate-400 font-mono text-sm">
              {currentCardIndex + 1} / {studySet.vocabulary.length}
            </span>
            <Button 
              variant="outline" 
              onClick={() => setCurrentCardIndex(Math.min(studySet.vocabulary.length - 1, currentCardIndex + 1))}
              disabled={currentCardIndex === studySet.vocabulary.length - 1}
            >
              Weiter
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderWriting = () => {
    if (!studySet) return null;
    const word = studySet.vocabulary[writingIndex];
    const progress = ((writingIndex) / studySet.vocabulary.length) * 100;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
         <div className="w-full flex justify-between items-center mb-6">
          <Button variant="ghost" onClick={() => setAppState(AppState.STUDY_VOCAB)} icon={<Layers size={18} />}>
            Back to Cards
          </Button>
          <div className="text-center">
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-wide">Step 2: Active Recall</h2>
            <p className="text-slate-400 text-xs">Type the correct German term</p>
          </div>
          <div className="w-12"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-8">
          <div className="bg-teal-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 text-center">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            {word.context || "General"}
          </span>
          
          <h3 className="text-lg md:text-xl font-medium text-slate-800 mb-6 leading-relaxed whitespace-pre-line">
            {word.definition}
          </h3>

          <div className="max-w-sm mx-auto">
            {writingFeedback === 'correct' ? (
              <div className="animate-fade-in">
                 <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-2xl mb-2">
                    <CheckCircle size={32} />
                    <span>Correct!</span>
                 </div>
                 <p className="text-slate-800 font-bold text-xl mb-6">{word.term}</p>
                 <Button onClick={nextWriting} className="w-full bg-green-600 hover:bg-green-700">
                   Next <ArrowRight size={18} />
                 </Button>
              </div>
            ) : (
              <div>
                 <input
                  type="text"
                  value={writingInput}
                  onChange={(e) => setWritingInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && checkWritingAnswer()}
                  className={`w-full text-center text-xl p-4 border-2 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ${writingFeedback === 'incorrect' ? 'border-red-300 bg-red-50 focus:ring-red-500' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'}`}
                  placeholder="Type German answer..."
                  autoFocus
                 />
                 {writingFeedback === 'incorrect' && (
                   <p className="text-red-500 mb-4 text-sm font-medium">Incorrect. {word.term}</p>
                 )}
                 
                 <div className="flex gap-3">
                   <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                         setWritingFeedback('incorrect');
                         setWritingInput(word.term);
                         setSessionMistakes(prev => [...prev, word.term]); // Track mistake
                      }}
                   >
                     Give Up
                   </Button>
                   <Button 
                      className="flex-1 bg-teal-600 hover:bg-teal-700"
                      onClick={checkWritingAnswer}
                   >
                     Check
                   </Button>
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    if (!studySet) return null;

    return (
      <div className="max-w-3xl mx-auto px-4 py-8 pb-20">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => setAppState(AppState.WRITING)}>
            Back
          </Button>
          <div className="text-center">
             <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wide">Step 3: Application</h2>
             <h2 className="text-2xl font-bold text-slate-900">Final Exam</h2>
          </div>
          <div className="w-24"></div>
        </div>

        <div className="space-y-8">
          {studySet.quiz.map((q, index) => {
            return (
              <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  <span className="text-indigo-500 mr-2">{index + 1}.</span>
                  {q.question}
                </h3>
                
                <div className="space-y-3">
                  {q.options.map((option, optIdx) => {
                    let btnClass = "w-full p-3 text-left rounded-lg border transition-all ";
                    
                    if (quizSubmitted) {
                      if (optIdx === q.correctAnswerIndex) {
                         btnClass += "bg-green-50 border-green-500 text-green-700 font-medium";
                      } else if (quizAnswers[q.id] === optIdx) {
                         btnClass += "bg-red-50 border-red-500 text-red-700";
                      } else {
                         btnClass += "border-slate-200 text-slate-400";
                      }
                    } else {
                      if (quizAnswers[q.id] === optIdx) {
                        btnClass += "bg-indigo-50 border-indigo-500 text-indigo-700 ring-1 ring-indigo-500";
                      } else {
                        btnClass += "border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleQuizOptionSelect(q.id, optIdx)}
                        disabled={quizSubmitted}
                        className={btnClass}
                      >
                        <div className="flex justify-between items-center">
                          <span>{option}</span>
                          {quizSubmitted && optIdx === q.correctAnswerIndex && <CheckCircle size={18} className="text-green-600" />}
                          {quizSubmitted && quizAnswers[q.id] === optIdx && optIdx !== q.correctAnswerIndex && <XCircle size={18} className="text-red-600" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {quizSubmitted && (
                  <div className="mt-4 p-3 bg-slate-50 rounded-lg text-sm text-slate-600 border border-slate-100">
                    <strong>Erklärung:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center pb-10">
          {!quizSubmitted ? (
            <Button 
              onClick={() => setQuizSubmitted(true)} 
              disabled={Object.keys(quizAnswers).length !== studySet.quiz.length}
              className="w-full max-w-xs"
            >
              Submit Exam
            </Button>
          ) : (
            <Button 
              onClick={completeSession} 
              className="w-full max-w-xs bg-indigo-600 hover:bg-indigo-700"
            >
              View Results & Mastery
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
       <nav className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 font-bold text-xl text-indigo-600 cursor-pointer" 
            onClick={() => setAppState(AppState.HOME)}
          >
            <GraduationCap />
            <span>C1 Mastery</span>
          </div>
          {studySet && appState !== AppState.HOME && appState !== AppState.FREE_WRITING && (
             <div className="text-sm text-slate-500 hidden sm:block">
                Topic: <span className="font-medium text-slate-900">{studySet.topic}</span>
             </div>
          )}
        </div>
      </nav>

      <main className="flex-grow">
        {appState === AppState.HOME && renderHome()}
        {appState === AppState.LOADING && renderLoading()}
        {appState === AppState.DICTIONARY && renderDictionary()}
        {appState === AppState.FREE_WRITING && renderFreeWriting()}
        {appState === AppState.TRAINING && renderTraining()}
        {appState === AppState.STUDY_VOCAB && renderStudyVocab()}
        {appState === AppState.WRITING && renderWriting()}
        {appState === AppState.QUIZ && renderQuiz()}
        {appState === AppState.RESULTS && renderResults()}
      </main>
    </div>
  );
}
