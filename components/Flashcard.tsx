import React, { useState } from 'react';
import { Word } from '../types';
import { Volume2, RotateCw, BookOpen, Zap, Scale } from 'lucide-react';

interface FlashcardProps {
  word: Word;
  lang?: string;
}

export const Flashcard: React.FC<FlashcardProps> = ({ word, lang = 'en-US' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Always speak the German term regardless of definition language
    const utterance = new SpeechSynthesisUtterance(word.term);
    utterance.lang = "de-DE"; 
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      className="group perspective-1000 w-full max-w-md h-[500px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front of Card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow">
          <div className="absolute top-4 right-4 text-slate-300">
             <RotateCw size={20} />
          </div>
          <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
             <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider">{word.context || 'Word'}</span>
             {word.grammar && <span className="bg-emerald-50 text-emerald-600 text-xs px-2 py-1 rounded font-bold uppercase tracking-wider border border-emerald-100">{word.grammar}</span>}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">{word.term}</h3>
          
          <button 
            onClick={handleSpeak}
            className="p-3 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors mt-2"
          >
            <Volume2 size={28} />
          </button>
          <p className="mt-8 text-sm text-slate-500 font-medium uppercase tracking-wide">Tap to flip</p>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full backface-hidden bg-indigo-600 rounded-2xl shadow-lg p-8 flex flex-col justify-between rotate-y-180 text-white">
          <div className="overflow-y-auto scrollbar-hide h-full">
            <div className="flex items-center gap-2 mb-3 opacity-90">
              <BookOpen size={16} />
              <span className="text-xs font-semibold uppercase tracking-wider">Erklärung / Logic</span>
            </div>
            <p className="text-lg font-medium leading-relaxed mb-4 whitespace-pre-line">{word.definition}</p>
            
            {word.tips && (
              <div className="mb-4 bg-indigo-700/50 p-3 rounded-lg border border-indigo-400/30">
                 <div className="flex items-center gap-2 mb-1 text-yellow-300">
                    <Zap size={14} />
                    <span className="text-xs font-bold uppercase">Lifehack / Logic</span>
                 </div>
                 <p className="text-sm text-indigo-50">{word.tips}</p>
              </div>
            )}

            {word.grammar && (
              <div className="mb-4 bg-emerald-900/30 p-3 rounded-lg border border-emerald-400/30">
                 <div className="flex items-center gap-2 mb-1 text-emerald-300">
                    <Scale size={14} />
                    <span className="text-xs font-bold uppercase">Grammar</span>
                 </div>
                 <p className="text-sm text-emerald-50 font-mono">{word.grammar}</p>
              </div>
            )}

            <div className="w-full h-px bg-white/20 my-4"></div>
            
            <div className="mb-4">
               <p className="text-xs text-indigo-200 mb-1 uppercase tracking-wide">Beispiel:</p>
               <p className="text-indigo-50 italic text-base whitespace-pre-line">"{word.example}"</p>
            </div>
            
            {word.synonyms && word.synonyms.length > 0 && (
              <div className="mt-auto pt-2">
                <p className="text-xs text-indigo-200 mb-1">Synonyms:</p>
                <div className="flex flex-wrap gap-2">
                  {word.synonyms.map((syn, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">{syn}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};