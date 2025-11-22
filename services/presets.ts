
import { StudySet } from '../types';

export const DAY_1_PRESET: StudySet = {
  id: "day_1_prefixes",
  topic: "Day 1: Verben mit Präfixen (Logic)",
  lang: "de-DE",
  vocabulary: [
    {
      term: "ersetzen",
      definition: "DE: an die Stelle von etw. treten. RU: заменять (собой).",
      example: "LEDs ersetzen die alten Glühbirnen.",
      synonyms: ["austauschen"],
      context: "Funktion",
      tips: "DE: er- = Resultat/Ersatz. RU: er- = Результат или Замена."
    },
    {
      term: "zusetzen",
      definition: "DE: schaden/belasten oder hinzufügen. RU: донимать/вредить или добавлять.",
      example: "Die Hitze hat ihm zugesetzt.",
      synonyms: ["belasten", "hinzufügen"],
      context: "Gesundheit / Chemie",
      tips: "DE: zu- = Intensität (auf jmd) oder Addition. RU: zu- = Интенсивность воздействия или Добавление."
    },
    {
      term: "aussetzen",
      definition: "DE: kritisieren; Tiere auswildern. RU: иметь претензии (критиковать); выбрасывать (животных).",
      example: "Hast du etwas an mir auszusetzen?",
      synonyms: ["kritisieren"],
      context: "Kritik",
      grammar: "an + Dat",
      tips: "DE: aus- = raus (aus dem Haus/Schutz). RU: aus- = вон (лишать защиты)."
    },
    {
      term: "versetzen",
      definition: "DE: jemanden warten lassen (nicht kommen). RU: продинамить (не прийти на встречу).",
      example: "Er hat mich schon wieder versetzt.",
      synonyms: ["sitzen lassen"],
      context: "Verabredung",
      tips: "DE: ver- = Fehler/Änderung (falscher Ort). RU: ver- = Ошибка/Смещение."
    },
    {
      term: "entsetzen",
      definition: "DE: schockieren. RU: шокировать, приводить в ужас.",
      example: "Ich bin entsetzt über die Nachrichten.",
      synonyms: ["schockieren"],
      context: "Emotion",
      tips: "DE: ent- = weg aus der Norm. RU: ent- = выход из нормы (шок)."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Was bedeutet 'jemanden versetzen'?",
      options: ["Jemanden befördern", "Nicht zum Treffen kommen", "Etwas mischen", "Jemanden entlassen"],
      correctAnswerIndex: 1,
      explanation: "DE: Versetzen in diesem Kontext heißt 'nicht erscheinen'. RU: Versetzen здесь — не прийти на встречу."
    },
    {
      id: 2,
      question: "Wenn man etwas 'auszusetzen' hat, dann...",
      options: ["...lobt man.", "...kritisiert man.", "...pausiert man.", "...beginnt man."],
      correctAnswerIndex: 1,
      explanation: "DE: Etwas auszusetzen haben = kritisieren. RU: Иметь что 'выставить' (претензию)."
    }
  ]
};

export const GRAMMAR_PRESET: StudySet = {
  id: "day_2_grammar",
  topic: "Day 2: Partizipien & Lassen",
  lang: "de-DE",
  vocabulary: [
    {
      term: "das lachende Kind",
      definition: "DE: Partizip I (Aktiv). RU: Смеющийся ребенок (сам делает).",
      example: "Das lachende Kind spielt.",
      synonyms: ["aktiv"],
      context: "Partizip I",
      tips: "DE: Endung -nd = Aktiv/Gleichzeitig. RU: -nd = Актив (делает сам сейчас)."
    },
    {
      term: "die zu lösende Aufgabe",
      definition: "DE: Modales Partizip (muss gemacht werden). RU: Задача, которую НУЖНО решить.",
      example: "Das ist eine schwer zu lösende Aufgabe.",
      synonyms: ["Gerundiv"],
      context: "Notwendigkeit",
      tips: "DE: zu + Partizip I = Passiv + Müssen (Gerundiv). RU: zu + Partizip I = Пассив + Долженствование."
    },
    {
      term: "sich lassen (Reflexiv)",
      definition: "DE: Passiversatz (Möglichkeit). RU: 'Это можно сделать' (замена пассива).",
      example: "Das Fenster lässt sich nicht öffnen.",
      synonyms: ["kann gemacht werden"],
      context: "Passiv-Ersatz",
      tips: "DE: sich lassen = können + Passiv. RU: sich lassen = мочь быть сделанным."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Was drückt das Gerundiv aus? (die zu lösende Aufgabe)",
      options: ["Vergangenheit", "Notwendigkeit (muss)", "Wunsch", "Fähigkeit"],
      correctAnswerIndex: 1,
      explanation: "DE: Es bedeutet, dass die Aufgabe gelöst werden MUSS. RU: Означает, что задачу НУЖНО решить."
    }
  ]
};

export const DAY_3_PRESET: StudySet = {
  id: "day_3_syntax",
  topic: "Day 3: Infinitiv & Konnektoren",
  lang: "de-DE",
  vocabulary: [
    {
      term: "brauchen + zu",
      definition: "DE: Müssen (nur mit Negation/Einschränkung). RU: 'Нужно' (только в отрицании: 'тебе не нужно...').",
      example: "Du brauchst heute nicht zu arbeiten.",
      synonyms: ["müssen"],
      context: "Verneinung",
      grammar: "brauchen + zu + Infinitiv",
      tips: "DE: Wer brauchen ohne zu gebraucht... (Nur mit 'zu'!). RU: Brauchen требует 'zu', если есть 'nicht'/'nur'."
    },
    {
      term: "als vs wenn (Vergangenheit)",
      definition: "DE: Als = Einmalig. Wenn = Mehrmals. RU: Als = Однажды (когда). Wenn = Когда (много раз).",
      example: "Als ich Kind war (1x). Immer wenn ich dort war (oft).",
      synonyms: ["Zeit"],
      context: "Temporal",
      tips: "DE: Als = Einmaliger Punkt in Vergangenheit. RU: Als = Однократное событие в прошлом."
    },
    {
      term: "um ... zu",
      definition: "DE: Ziel/Absicht (gleiches Subjekt). RU: 'Чтобы' (для того, чтобы).",
      example: "Ich lerne Deutsch, um in Berlin zu arbeiten.",
      synonyms: ["damit"],
      context: "Finalsatz",
      tips: "DE: Nur wenn Subjekt identisch ist! Sonst 'damit'. RU: Только если подлежащее одно и то же! Иначе 'damit'."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Wann benutzt man 'als'?",
      options: ["Immer in der Zukunft", "Bei mehrmaligen Handlungen", "Bei einmaliger Handlung in der Vergangenheit", "Für Bedingungen"],
      correctAnswerIndex: 2,
      explanation: "DE: Als = Einmalig Vergangenheit. RU: Als используется только для однократных действий в прошлом."
    }
  ]
};

export const DAY_4_PRESET: StudySet = {
  id: "day_4_spelling",
  topic: "Day 4: Großschreibung & n-Deklination",
  lang: "de-DE",
  vocabulary: [
    {
      term: "das Lesen",
      definition: "DE: Substantiviertes Verb (Der Prozess). RU: Чтение (как процесс).",
      example: "Das Lesen macht Spaß.",
      synonyms: ["Lektüre"],
      context: "Substantivierung",
      tips: "DE: Artikel 'das' macht das Verb zum Nomen (groß). RU: Артикль 'das' превращает глагол в существительное."
    },
    {
      term: "beim Kochen",
      definition: "DE: Während des Kochens. RU: Во время готовки.",
      example: "Beim Kochen höre ich Musik.",
      synonyms: ["während"],
      context: "Zeit",
      tips: "DE: bei + dem = beim -> Nomen folgt (groß). RU: beim = при/во время -> следом идет существительное."
    },
    {
      term: "der Kollege (n-Deklination)",
      definition: "DE: Maskulin, bekommt -n in allen Fällen außer Nom. Sg. RU: Слабое склонение (везде -n, кроме Nom. Sg.).",
      example: "Ich sehe den Kollegen.",
      synonyms: ["Mitarbeiter"],
      context: "Grammatik",
      grammar: "Akk: den Kollegen",
      tips: "DE: Endet auf -e, ist maskulin -> n-Deklination. RU: Оканчивается на -e, мужской род -> n-Deklination."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Welches Wort gehört zur n-Deklination?",
      options: ["der Tisch", "der Polizist", "das Kind", "die Frau"],
      correctAnswerIndex: 1,
      explanation: "DE: Berufe auf -ist sind n-Deklination (den Polizisten). RU: Профессии на -ist относятся к n-Deklination."
    }
  ]
};

export const DAY_5_PRESET: StudySet = {
  id: "day_5_konjunktiv",
  topic: "Day 5: Konjunktiv & Konnektoren",
  lang: "de-DE",
  vocabulary: [
    {
      term: "indem",
      definition: "DE: Art und Weise (Wie?). RU: Тем, что (способ действия).",
      example: "Man spart Geld, indem man Preise vergleicht.",
      synonyms: ["dadurch dass"],
      context: "Instrumental",
      tips: "DE: Antwortet auf 'Wie?'. RU: Отвечает на вопрос 'Как/Каким образом?'."
    },
    {
      term: "seitdem",
      definition: "DE: Startpunkt in Vergangenheit bis jetzt. RU: С тех пор как.",
      example: "Seitdem ich hier wohne, bin ich glücklich.",
      synonyms: ["seit"],
      context: "Temporal",
      tips: "DE: Handlung dauert noch an. RU: Действие все еще продолжается."
    },
    {
      term: "hätte gemacht (Konj II)",
      definition: "DE: Irrealis Vergangenheit. RU: Сделал БЫ (но не сделал).",
      example: "Ich hätte das anders gemacht.",
      synonyms: ["Irrealis"],
      context: "Bedauern",
      tips: "DE: hätte/wäre + Partizip II. RU: Сожаление о прошлом."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Was drückt 'indem' aus?",
      options: ["Einen Grund (Warum)", "Einen Zeitpunkt (Wann)", "Ein Mittel / Art und Weise (Wie)", "Einen Gegensatz"],
      correctAnswerIndex: 2,
      explanation: "DE: Indem beschreibt, WIE man etwas erreicht. RU: Indem описывает СПОСОБ достижения цели."
    }
  ]
};

export const DAY_6_PRESET: StudySet = {
  id: "day_6_pronouns",
  topic: "Day 6: Indefinitpronomen & es",
  lang: "de-DE",
  vocabulary: [
    {
      term: "irgendein",
      definition: "DE: Einer, egal welcher (Singular). RU: Какой-то / Какой-нибудь (один).",
      example: "Hast du irgendein Buch für mich?",
      synonyms: ["beliebig"],
      context: "Unbestimmt",
      tips: "DE: Singular! Plural ist 'irgendwelche'. RU: Это единственное число! Мн.ч. - irgendwelche."
    },
    {
      term: "es (Platzhalter)",
      definition: "DE: Füllt Position 1. RU: Формальное подлежащее (заполняет пустоту).",
      example: "Es wird getanzt. / Heute wird getanzt.",
      synonyms: ["Subjekt"],
      context: "Grammatik",
      tips: "DE: 'Es' verschwindet, wenn etwas anderes auf Pos 1 steht. RU: 'Es' исчезает, если на 1 месте стоит другое слово."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Wann verschwindet das 'es' im Passivsatz?",
      options: ["Nie", "Wenn es in der Mitte steht (Satzumstellung)", "Immer", "Bei Fragen"],
      correctAnswerIndex: 1,
      explanation: "DE: 'Es wird getanzt' -> 'Hier wird getanzt' (es fällt weg). RU: При перестановке слов 'es' выпадает."
    }
  ]
};

export const DAY_7_PRESET: StudySet = {
  id: "day_7_passiv",
  topic: "Day 7: Passiv, -ig/-lich, Partikeln",
  lang: "de-DE",
  vocabulary: [
    {
      term: "täglich",
      definition: "DE: Jeden Tag (Frequenz). RU: Ежедневно (частота).",
      example: "Die tägliche Zeitung.",
      synonyms: ["jeden Tag"],
      context: "Adjektiv -lich",
      tips: "DE: -lich = Wiederholung (Wann?). RU: -lich = Повторение (Как часто?)."
    },
    {
      term: "dreitägig",
      definition: "DE: Dauert 3 Tage. RU: Трехдневный (длительность).",
      example: "Eine dreitägige Reise.",
      synonyms: ["Dauer"],
      context: "Adjektiv -ig",
      tips: "DE: -ig = Dauer (Wie lange?). RU: -ig = Длительность (Как долго?)."
    },
    {
      term: "bloß (Partikel)",
      definition: "DE: Warnung oder Ratlosigkeit. RU: 'Только' (угроза) или 'Же' (недоумение).",
      example: "Geh da bloß nicht hin! (Только не ходи туда!)",
      synonyms: ["nur", "ja"],
      context: "Emotion",
      tips: "DE: Macht Warnungen stärker. RU: Усиливает предупреждение или отчаяние."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Unterschied: 'tägig' vs 'täglich'?",
      options: ["Kein Unterschied", "tägig = Dauer, täglich = Frequenz", "tägig = Frequenz, täglich = Dauer", "beide bedeuten 'heute'"],
      correctAnswerIndex: 1,
      explanation: "DE: 3-tägig (Dauer), täglich (jeden Tag). RU: 3-tägig (длительность), täglich (частота)."
    }
  ]
};

export const DAY_8_PRESET: StudySet = {
  id: "day_8_prepositions",
  topic: "Day 8: in vs zu, Nullartikel",
  lang: "de-DE",
  vocabulary: [
    {
      term: "in den Supermarkt",
      definition: "DE: Hinein gehen (Gebäude betreten). RU: Внутрь супермаркета (войти).",
      example: "Ich gehe in den Supermarkt, um Milch zu kaufen.",
      synonyms: ["betreten"],
      context: "Wohin (Akk)",
      grammar: "in + Akk",
      tips: "DE: Fokus auf das Gebäudeinnere. RU: Фокус на входе внутрь."
    },
    {
      term: "zum Supermarkt",
      definition: "DE: In die Richtung/Zum Parkplatz. RU: К супермаркету (направление/к зданию).",
      example: "Ich fahre zum Supermarkt.",
      synonyms: ["Richtung"],
      context: "Wohin (Dat)",
      grammar: "zu + Dat",
      tips: "DE: Fokus auf das Ziel/Weg, nicht das Innere. RU: Фокус на направлении, а не нутре."
    },
    {
      term: "eigentlich",
      definition: "DE: In Wirklichkeit; Themawechsel. RU: Собственно; на самом деле.",
      example: "Eigentlich wollte ich das nicht.",
      synonyms: ["im Grunde"],
      context: "Partikel",
      tips: "DE: Schränkt eine Aussage ein. RU: Ограничивает утверждение (мягкое 'но')."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Ich fahre ___ Arbeit. (Was ist falsch?)",
      options: ["zur", "in die", "auf die", "nach"],
      correctAnswerIndex: 1,
      explanation: "DE: 'In die Arbeit' ist Umgangssprache/Falsch. Richtig: 'Zur Arbeit'. RU: 'In die Arbeit' — ошибка. Правильно 'Zur Arbeit'."
    }
  ]
};

export const DAY_9_PRESET: StudySet = {
  id: "day_9_particles",
  topic: "Day 9: nur/erst/schon, nicht/kein",
  lang: "de-DE",
  vocabulary: [
    {
      term: "erst (Zeit/Menge)",
      definition: "DE: Nicht früher als; weniger als erwartet (aber es wird mehr). RU: Только (еще только); пока лишь.",
      example: "Es ist erst 8 Uhr. (Еще только 8.)",
      synonyms: ["noch nicht länger"],
      context: "Optimistisch",
      tips: "DE: 'Erst' impliziert 'es kommt noch mehr'. 'Nur' ist ein Limit. RU: 'Erst' — это начало процесса. 'Nur' — это предел."
    },
    {
      term: "nur (Limit)",
      definition: "DE: Nicht mehr als (Limit). RU: Только (и больше не будет); всего лишь.",
      example: "Ich habe nur 5 Euro. (У меня всего 5 евро.)",
      synonyms: ["lediglich"],
      context: "Limitierend",
      tips: "DE: 'Nur' ist eine Grenze. RU: 'Nur' ограничивает."
    },
    {
      term: "nicht vs kein",
      definition: "DE: Kein für Nomen, Nicht für Verben/Adj. RU: Kein для сущ., Nicht для глаголов/прил.",
      example: "Ich spreche kein Deutsch (Nomen). Ich spreche nicht gut (Adverb).",
      synonyms: ["Verneinung"],
      context: "Negation",
      tips: "DE: Kannst du 'ein' sagen? Dann 'kein'. RU: Если можно подставить 'ein', то отрицаем через 'kein'."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Er ist ___ 5 Jahre alt (er ist noch jung).",
      options: ["nur", "erst", "schon", "noch"],
      correctAnswerIndex: 1,
      explanation: "DE: 'Erst' betont den Anfang/das Wachstum. RU: 'Erst' подчеркивает, что это только начало (он еще вырастет)."
    }
  ]
};

export const DAY_10_PRESET: StudySet = {
  id: "day_10_reflexive",
  topic: "Day 10: Reflexive & Zeitformen",
  lang: "de-DE",
  vocabulary: [
    {
      term: "sich (Dat) etwas waschen",
      definition: "DE: Teil des Körpers waschen. RU: Мыть СЕБЕ что-то (руки).",
      example: "Ich wasche mir die Hände.",
      synonyms: ["reinigen"],
      context: "Reflexiv Dativ",
      grammar: "sich (Dat) + Akk-Objekt",
      tips: "DE: Wenn ein Objekt (Hände) da ist, wird 'sich' zum Dativ (mir). RU: Если есть объект (руки), возвратное местоимение в Dativ (mir)."
    },
    {
      term: "sich (Akk) waschen",
      definition: "DE: Den ganzen Körper waschen. RU: Мыться (целиком).",
      example: "Ich wasche mich.",
      synonyms: ["duschen"],
      context: "Reflexiv Akkusativ",
      tips: "DE: Kein weiteres Objekt -> Akkusativ (mich). RU: Нет объекта -> Akkusativ (mich)."
    },
    {
      term: "nachdem",
      definition: "DE: Vorzeitigkeit (Schritt zurück). RU: После того как (шаг назад во времени).",
      example: "Nachdem er gegessen hatte, ging er.",
      synonyms: ["danach"],
      context: "Zeitenfolge",
      grammar: "Plusquamperfekt -> Präteritum",
      tips: "DE: Wenn Hauptsatz Präteritum, dann Nachdem-Satz Plusquamperfekt. RU: Если в главном прошедшее, после nachdem — предпрошедшее."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Ich putze ___ die Zähne.",
      options: ["mich", "mir", "sich", "uns"],
      correctAnswerIndex: 1,
      explanation: "DE: Zähne = Objekt. Also Dativ (mir). RU: Зубы — это объект. Значит, мне (Dativ, mir)."
    }
  ]
};

export const DAY_11_PRESET: StudySet = {
  id: "day_11_prefixes",
  topic: "Day 11: Präfix-Logik (be-, er-, ver-)",
  lang: "de-DE",
  vocabulary: [
    {
      term: "be- (Präfix)",
      definition: "DE: Macht Verben transitiv (braucht Akkusativ). RU: Делает глагол переходным (требует Akkusativ) / Контакт.",
      example: "antworten (Dat) -> beantworten (Akk).",
      synonyms: ["Kontakt"],
      context: "Transitivierung",
      tips: "DE: be- + Verb = Akkusativ-Zwang. RU: be- + глагол = нужен Akkusativ."
    },
    {
      term: "er- (Präfix)",
      definition: "DE: Resultat, Tod oder Beginn. RU: Результат, Смерть или Начало.",
      example: "erarbeiten (Resultat), erschießen (Tod).",
      synonyms: ["Ergebnis"],
      context: "Resultat",
      tips: "DE: er- ist final. RU: er- означает конец/итог."
    },
    {
      term: "ver- (Präfix)",
      definition: "DE: Fehler, Änderung, Zeit. RU: Ошибка, Изменение, Трата времени.",
      example: "sich verfahren (Fehler), verändern (Änderung).",
      synonyms: ["Fehler"],
      context: "Negativ/Wandel",
      tips: "DE: ver- oft negativ (Mistake). RU: ver- часто ошибка (как mis- в англ)."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Was bedeutet 'sich verschreiben'?",
      options: ["Viel schreiben", "Einen Fehler beim Schreiben machen", "Aufhören zu schreiben", "Schön schreiben"],
      correctAnswerIndex: 1,
      explanation: "DE: ver- = Fehler. RU: ver- = Ошибка."
    }
  ]
};

export const DAY_12_PRESET: StudySet = {
  id: "day_12_mixed_prefixes",
  topic: "Day 12: Trennbar vs Untrennbar (Drill)",
  lang: "de-DE",
  vocabulary: [
    {
      term: "umfahren (trennbar)",
      definition: "DE: um...fahren = Kollision. RU: Сбить (переехать). Betonung auf UM.",
      example: "Er fährt das Schild um. (Er hat es zerstört).",
      synonyms: ["kollidieren"],
      context: "Betonung UM",
      grammar: "hat umgefahren",
      tips: "DE: Betonung vorn = Physisch/Kaputt. RU: Ударение на приставку = Физическое действие/Сбил."
    },
    {
      term: "umfahren (untrennbar)",
      definition: "DE: umfahren = drumherum fahren. RU: Объехать. Betonung auf FAHREN.",
      example: "Er umfährt den Stau.",
      synonyms: ["ausweichen"],
      context: "Betonung STAMM",
      grammar: "hat umfahren (ohne ge-)",
      tips: "DE: Betonung hinten = Abstrakt/Elegant. RU: Ударение на корень = Абстрактно/Объезд."
    },
    {
      term: "übersetzen (trennbar)",
      definition: "DE: ans andere Ufer bringen. RU: Переправить (на другой берег).",
      example: "Die Fähre setzt über.",
      synonyms: ["rüberbringen"],
      context: "Physisch",
      grammar: "hat übergesetzt",
      tips: "DE: Physische Bewegung = Trennbar. RU: Физическое движение = Отделяемая."
    },
    {
      term: "übersetzen (untrennbar)",
      definition: "DE: Dolmetschen (Sprache). RU: Переводить (язык).",
      example: "Er übersetzt den Text.",
      synonyms: ["dolmetschen"],
      context: "Mental",
      grammar: "hat übersetzt",
      tips: "DE: Mentale Arbeit = Untrennbar. RU: Умственная работа = Неотделяемая."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Der Polizist hat den Stau ___.",
      options: ["umgefahren (kollidiert)", "umfahren (ausgewichen)"],
      correctAnswerIndex: 1,
      explanation: "DE: Er ist drumherum gefahren (untrennbar). RU: Он его объехал (неотделяемая)."
    }
  ]
};

export const DAY_13_PRESET: StudySet = {
  id: "day_13_syntax",
  topic: "Day 13: Irgend- & Relativsätze",
  lang: "de-DE",
  vocabulary: [
    {
      term: "irgendein (Singular)",
      definition: "DE: Einer (unbekannt). RU: Какой-то (один).",
      example: "Ist hier irgendein Arzt?",
      synonyms: ["einer"],
      context: "Singular",
      tips: "DE: Nur für Singular! RU: Только ед. число!"
    },
    {
      term: "irgendwelche (Plural)",
      definition: "DE: Mehrere (unbekannt). RU: Какие-то / Какие-нибудь (много).",
      example: "Hast du irgendwelche Fragen?",
      synonyms: ["welche"],
      context: "Plural",
      tips: "DE: Plural oder unzählbar. RU: Мн. число или неисчисляемое."
    },
    {
      term: "was (Relativ)",
      definition: "DE: Bezieht sich auf 'alles', 'nichts' oder ganzen Satz. RU: Что (относится к 'всё' или к предложению).",
      example: "Alles, was ich weiß. / Er kommt nicht, was mich ärgert.",
      synonyms: ["das, was"],
      context: "Relativsatz",
      tips: "DE: Nach 'alles', 'nichts', 'vieles' -> WAS. RU: После 'всё', 'ничего' -> WAS."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Alles, ___ ich sage, ist wahr.",
      options: ["das", "was", "welches", "wo"],
      correctAnswerIndex: 1,
      explanation: "DE: Nach 'alles' kommt immer 'was'. RU: После 'alles' всегда 'was'."
    }
  ]
};

export const DAY_14_PRESET: StudySet = {
  id: "day_14_subjunctive",
  topic: "Day 14: Alle & Subjektive Modalverben",
  lang: "de-DE",
  vocabulary: [
    {
      term: "alle guten Freunde",
      definition: "DE: 'Alle' funktioniert wie ein bestimmter Artikel (die). RU: 'Alle' работает как определенный артикль -> слабые окончания (-en).",
      example: "Alle guten (wie 'die guten') Freunde.",
      synonyms: ["Sämtliche"],
      context: "Adjektivdeklination",
      tips: "DE: Nach 'alle' kommt -en (im Plural). RU: После 'alle' окончание -en (во мн.ч.)."
    },
    {
      term: "sollen (Subjektiv)",
      definition: "DE: Gerücht / Man sagt. RU: Говорят, что... (Чужие слова).",
      example: "Er soll sehr reich sein. (Говорят, он богат).",
      synonyms: ["Man sagt"],
      context: "Gerücht",
      tips: "DE: Quelle = Andere Leute. RU: Источник = Другие люди."
    },
    {
      term: "wollen (Subjektiv)",
      definition: "DE: Behauptung (Er sagt über sich). RU: Он утверждает, что... (часто ложь).",
      example: "Er will den Präsidenten kennen. (Он утверждает, что знает...)",
      synonyms: ["Er behauptet"],
      context: "Behauptung",
      tips: "DE: Quelle = Er selbst (Zweifel!). RU: Источник = Он сам (Сомнение!)."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Er ___ reich sein (Leute erzählen das).",
      options: ["will", "soll", "muss", "kann"],
      correctAnswerIndex: 1,
      explanation: "DE: Fremde Information = Sollen. RU: Чужая инфо (слухи) = Sollen."
    }
  ]
};

export const DAY_15_PRESET: StudySet = {
  id: "day_15_review",
  topic: "Day 15: B2/C1 Review - Passiv & Idiome",
  lang: "de-DE",
  vocabulary: [
    {
      term: "Vorgangspassiv (werden)",
      definition: "DE: Aktion geschieht jetzt. RU: Процесс (Окно открывают).",
      example: "Das Geschäft wird geöffnet.",
      synonyms: ["Prozess"],
      context: "Passiv Typ 1",
      tips: "DE: 'Werden' = Action. RU: 'Werden' = Действие."
    },
    {
      term: "Zustandspassiv (sein)",
      definition: "DE: Resultat ist fertig. RU: Результат (Магазин открыт).",
      example: "Das Geschäft ist geöffnet.",
      synonyms: ["Zustand"],
      context: "Passiv Typ 2",
      tips: "DE: 'Sein' = Fertig. RU: 'Sein' = Готово."
    },
    {
      term: "von (im Passiv)",
      definition: "DE: Täter = Lebewesen. RU: Агент = Человек/Животное.",
      example: "Der Brief wurde von mir geschrieben.",
      synonyms: ["Person"],
      context: "Täter",
      grammar: "von + Dat",
      tips: "DE: Von + Person. RU: Von для людей."
    },
    {
      term: "durch (im Passiv)",
      definition: "DE: Ursache = Sache/Mittel. RU: Причина/Средство = Вещь/Стихия.",
      example: "Das Haus wurde durch Feuer zerstört.",
      synonyms: ["Mittel"],
      context: "Ursache",
      grammar: "durch + Akk",
      tips: "DE: Durch + Sache. RU: Durch для предметов."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Das Fenster wurde ___ den Wind geöffnet.",
      options: ["von", "durch", "mit", "über"],
      correctAnswerIndex: 1,
      explanation: "DE: Wind ist eine Sache -> durch. RU: Ветер - это вещь -> durch."
    }
  ]
};

export const DAY_16_PRESET: StudySet = {
  id: "day_16_pronominal",
  topic: "Day 16: Pronominaladverbien & An-Verben",
  lang: "de-DE",
  vocabulary: [
    {
      term: "darauf (Pronominaladverb)",
      definition: "DE: Auf das (Sache/Situation). RU: На это (вещь/ситуация).",
      example: "Ich freue mich darauf. (Auf den Urlaub).",
      synonyms: ["auf das"],
      context: "Sache",
      tips: "DE: da + r + auf. Nur für Dinge! RU: Только для неодушевленных предметов! Для людей: auf ihn/sie."
    },
    {
      term: "auf ihn (Person)",
      definition: "DE: Auf die Person. RU: На него (человека).",
      example: "Ich freue mich auf ihn (den Freund).",
      synonyms: ["Person"],
      context: "Person",
      tips: "DE: Person = Präposition + Pronomen (nicht 'darauf'!). RU: Человек = Предлог + Местоимение (никаких 'da-')!"
    },
    {
      term: "sich gewöhnen an (+Akk)",
      definition: "DE: Prozess der Anpassung. RU: Привыкать к (чему-то).",
      example: "Ich habe mich an das Wetter gewöhnt.",
      synonyms: ["adaptieren"],
      context: "Verben mit 'an'",
      grammar: "an + Akk",
      tips: "DE: Wohin geht die Gewöhnung? (Richtung -> Akk). RU: На что направлено привыкание? (Куда? -> Akk)."
    },
    {
      term: "zweifeln an (+Dat)",
      definition: "DE: Unsicher sein. RU: Сомневаться в (чем-то).",
      example: "Ich zweifle an seiner Ehrlichkeit.",
      synonyms: ["nicht glauben"],
      context: "Verben mit 'an'",
      grammar: "an + Dat",
      tips: "DE: Wo ist der Zweifel? (Ort -> Dat). RU: Где находится сомнение? (Где? -> Dat)."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Ich warte ___ den Bus. Ich warte ___.",
      options: ["auf / darauf", "an / daran", "auf / auf ihn", "über / darüber"],
      correctAnswerIndex: 0,
      explanation: "DE: Bus = Sache -> darauf. RU: Автобус - вещь -> darauf."
    },
    {
      id: 2,
      question: "Ich warte ___ meinen Bruder. Ich warte ___.",
      options: ["auf / darauf", "auf / auf ihn", "an / an ihn", "mit / damit"],
      correctAnswerIndex: 1,
      explanation: "DE: Bruder = Person -> auf ihn (NICHT darauf!). RU: Брат - человек -> auf ihn (НЕ darauf!)."
    }
  ]
};

export const DAY_17_PRESET: StudySet = {
  id: "day_17_werden_logic",
  topic: "Day 17: Die Logik von 'werden' (wurden/worden/geworden)",
  lang: "de-DE",
  vocabulary: [
    {
      term: "worden (Passiv Perfekt)",
      definition: "DE: Hilfsverb für Passiv Perfekt. RU: Был (в пассиве).",
      example: "Das Haus ist gebaut worden.",
      synonyms: ["Passiv"],
      context: "Grammatik",
      tips: "DE: 'ge-' fällt weg bei Doppel-Perfekt im Passiv. RU: Приставка 'ge-' выпадает в пассивном перфекте."
    },
    {
      term: "geworden (Zustandsänderung)",
      definition: "DE: Hauptverb Perfekt (Änderung). RU: Стал (изменился).",
      example: "Er ist alt geworden.",
      synonyms: ["sich verändert"],
      context: "Aktiv",
      tips: "DE: Wenn 'werden' das einzige Verb ist -> geworden. RU: Если 'werden' смысловой глагол -> geworden."
    },
    {
      term: "würden (Konjunktiv II)",
      definition: "DE: Wunsch/Möglichkeit (würde + Infinitiv). RU: Бы (стал бы).",
      example: "Ich würde gerne kommen.",
      synonyms: ["Wunsch"],
      context: "Konjunktiv",
      tips: "DE: Umlaut 'ü' = Irreal/Wunsch. RU: Умляут = Нереальность/Желание."
    },
    {
      term: "wurden (Präteritum)",
      definition: "DE: Vergangenheit von werden (oder Passiv Präteritum). RU: Стали / Были (сделаны).",
      example: "Das Haus wurde gebaut. / Sie wurden Freunde.",
      synonyms: ["Vergangenheit"],
      context: "Präteritum",
      tips: "DE: Kein 'ü', kein 'ge' = Einfache Vergangenheit. RU: Без 'ü' и без 'ge' = Простое прошедшее."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Die Arbeit ist erledigt ___.",
      options: ["geworden", "worden", "wurden", "würden"],
      correctAnswerIndex: 1,
      explanation: "DE: Passiv Perfekt -> worden (ohne ge-). RU: Пассивный перфект -> worden (без ge-)."
    },
    {
      id: 2,
      question: "Er ist Arzt ___.",
      options: ["worden", "geworden", "wurde", "würde"],
      correctAnswerIndex: 1,
      explanation: "DE: Zustandsänderung (Aktiv) -> geworden. RU: Изменение состояния (Актив) -> geworden."
    }
  ]
};

export const DAY_18_PRESET: StudySet = {
  id: "day_18_transitive_needs",
  topic: "Day 18: Transitiv vs. Intransitiv & Bedarf",
  lang: "de-DE",
  vocabulary: [
    {
      term: "steigen (intransitiv)",
      definition: "DE: Selbst nach oben bewegen. RU: Подниматься (самому).",
      example: "Ich steige auf den Berg.",
      synonyms: ["klettern"],
      context: "Bewegung",
      grammar: "auf + Akk",
      tips: "DE: Kein Akkusativ-Objekt direkt danach. Braucht Präposition. RU: Нельзя сказать 'поднимать гору'. Нужен предлог 'на'."
    },
    {
      term: "besteigen (transitiv)",
      definition: "DE: Etwas (Akk) erklimmen. RU: Восходить НА (что-то).",
      example: "Ich besteige den Berg.",
      synonyms: ["erklimmen"],
      context: "Sport/Bergsteigen",
      grammar: "+ Akkusativ Objekt",
      tips: "DE: be- macht es transitiv -> Direktes Objekt. RU: be- делает глагол переходным -> Прямое дополнение."
    },
    {
      term: "das Bedürfnis",
      definition: "DE: Innerer Wunsch (Psychologisch). RU: Потребность (желание, внутреннее).",
      example: "Ich habe das Bedürfnis, mich auszuruhen.",
      synonyms: ["Wunsch"],
      context: "Gefühl",
      tips: "DE: Subjektiv/Emotional. RU: Субъективно/Эмоционально (хочется)."
    },
    {
      term: "der Bedarf",
      definition: "DE: Notwendigkeit (Objektiv/Materiell). RU: Спрос / Необходимость (нужно).",
      example: "Es besteht Bedarf an Fachkräften.",
      synonyms: ["Notwendigkeit"],
      context: "Wirtschaft",
      grammar: "an + Dat",
      tips: "DE: Objektiv/Markt. RU: Объективно/Рынок (надо)."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Er ___ den Mount Everest.",
      options: ["steigt", "besteigt", "stieg", "gestiegen"],
      correctAnswerIndex: 1,
      explanation: "DE: Mount Everest ist das Objekt -> transitiv (besteigen). RU: Эверест — это объект -> переходный глагол."
    }
  ]
};

export const DAY_19_PRESET: StudySet = {
  id: "day_19_confusing_nuances",
  topic: "Day 19: Feinheiten (nun/nur, Teil/Teil)",
  lang: "de-DE",
  vocabulary: [
    {
      term: "nun (Partikel)",
      definition: "DE: Jetzt (Konsequenz) oder 'Eben'. RU: Ну / Теперь (как следствие).",
      example: "Was machen wir nun?",
      synonyms: ["jetzt"],
      context: "Situation",
      tips: "DE: Nun = Jetzt + Emotion/Folge. RU: Nun = Сейчас + Эмоция/Итог."
    },
    {
      term: "der Teil (Menge/Abschnitt)",
      definition: "DE: Ein Stück vom Ganzen (abstrakt oder Menge). RU: Часть (доля, раздел).",
      example: "Der erste Teil des Buches.",
      synonyms: ["Part"],
      context: "Maskulin",
      tips: "DE: Der Teil = Abstrakt/Inhalt. RU: Der Teil = Содержание/Доля."
    },
    {
      term: "das Teil (Physisch)",
      definition: "DE: Ein Gegenstand (Ersatzteil, Ding). RU: Деталь / Штуковина.",
      example: "Mir fehlt ein Ersatzteil für das Auto.",
      synonyms: ["Stück"],
      context: "Neutrum",
      tips: "DE: Das Teil = Ding zum Anfassen. RU: Das Teil = Предмет, который можно потрогать."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Ich brauche ___ für meinen Motor.",
      options: ["den Teil", "das Teil"],
      correctAnswerIndex: 1,
      explanation: "DE: Motor-Teil ist ein physisches Objekt -> Das Teil. RU: Деталь мотора — физический предмет -> Das Teil."
    }
  ]
};

export const DAY_20_PRESET: StudySet = {
  id: "day_20_punctuation_speech",
  topic: "Day 20: Kommas & Indirekte Rede",
  lang: "de-DE",
  vocabulary: [
    {
      term: "er sei (Konj I)",
      definition: "DE: Indirekte Rede (neutral). RU: (Говорит), что он якобы...",
      example: "Er sagt, er sei krank.",
      synonyms: ["soll sein"],
      context: "Bericht",
      tips: "DE: Sei = Distanz (ich zitiere nur). RU: Sei = Дистанция (я только цитирую)."
    },
    {
      term: "er wäre (Konj II in Rede)",
      definition: "DE: Ersatz für Konj I (wenn identisch) oder Zweifel. RU: Замена Konj I или Сомнение.",
      example: "Sie sagten, sie wären (statt seien) bereit.",
      synonyms: ["würde sein"],
      context: "Indirekte Rede",
      tips: "DE: Nimm Konj II, wenn Konj I wie Indikativ klingt. RU: Используй Konj II, если Konj I совпадает с обычным настоящим."
    },
    {
      term: "Erweiterter Infinitiv (Komma)",
      definition: "DE: Zu + Infinitiv + Extra Wörter. RU: Инфинитив с 'zu' и зависимыми словами.",
      example: "Er hat vor, morgen nach Berlin zu fahren.",
      synonyms: ["Infinitivsatz"],
      context: "Kommaregel",
      tips: "DE: Besser immer Komma setzen! RU: Лучше всегда ставить запятую!"
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Er sagt, sie ___ (haben) keine Zeit. (Konjunktiv I)",
      options: ["hat", "hätte", "habe", "haben"],
      correctAnswerIndex: 2,
      explanation: "DE: Konjunktiv I von haben (3. Pers Sg) = habe. RU: Konjunktiv I от haben = habe."
    }
  ]
};

export const DAY_21_PRESET: StudySet = {
  id: "day_21_possessive_dativ",
  topic: "Day 21: Possessive Relativsätze & Dativ I",
  lang: "de-DE",
  vocabulary: [
    {
      term: "dessen (Genitiv Relativ)",
      definition: "DE: Bezug auf Maskulinum/Neutrum. RU: Чей / Которого (от м.р./ср.р.).",
      example: "Der Mann, dessen Auto rot ist.",
      synonyms: ["sein"],
      context: "Besitz",
      tips: "DE: Der Mann -> Dessen. RU: Мужчина -> Его (dessen)."
    },
    {
      term: "deren (Genitiv Relativ)",
      definition: "DE: Bezug auf Femininum/Plural. RU: Чья / Которых (от ж.р./мн.ч.).",
      example: "Die Frau, deren Kind weint.",
      synonyms: ["ihr"],
      context: "Besitz",
      tips: "DE: Die Frau/Die Leute -> Deren. RU: Женщина/Люди -> Её/Их (deren)."
    },
    {
      term: "meinetwegen",
      definition: "DE: 1. Mir zuliebe. 2. Erlaubnis (genervt). RU: 1. Ради меня. 2. Ну и пусть (по-моему).",
      example: "Meinetwegen können wir gehen. (Von mir aus).",
      synonyms: ["von mir aus"],
      context: "Zustimmung",
      tips: "DE: Egal-Einstellung. RU: Пофигизм/Согласие."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Das sind die Nachbarn, ___ Hund bellt.",
      options: ["dessen", "deren", "denen", "die"],
      correctAnswerIndex: 1,
      explanation: "DE: Die Nachbarn (Plural) -> deren. RU: Соседи (мн.ч.) -> deren."
    }
  ]
};

export const DAY_22_PRESET: StudySet = {
  id: "day_22_exchange_nouns",
  topic: "Day 22: Tauschen/Wechseln & Nomen-Genus",
  lang: "de-DE",
  vocabulary: [
    {
      term: "tauschen",
      definition: "DE: Ware gegen Ware (Substanz). RU: Меняться (вещами).",
      example: "Wir tauschen Briefmarken.",
      synonyms: ["austauschen"],
      context: "Handel",
      tips: "DE: Ich gebe A, nehme B. RU: Я даю А, беру Б."
    },
    {
      term: "wechseln",
      definition: "DE: Geld (Währung), Kleidung, Ort. RU: Менять (деньги, одежду, место).",
      example: "Ich muss Geld wechseln. Reifen wechseln.",
      synonyms: ["ändern"],
      context: "Zustand",
      tips: "DE: Identischer Wert oder Erneuerung. RU: Тот же номинал или обновление."
    },
    {
      term: "der See vs die See",
      definition: "DE: Der See = Binnengewässer (Bodensee). Die See = Das Meer. RU: Der = Озеро. Die = Море.",
      example: "Wir baden im See. Wir fahren zur See.",
      synonyms: ["Gewässer"],
      context: "Geografie",
      tips: "DE: Der See ist 'drinnen' (Land). Die See ist 'draußen' (Meer). RU: Der See внутри суши. Die See снаружи."
    },
    {
      term: "der Band vs das Band",
      definition: "DE: Der Band = Buch. Das Band = Schnur. RU: Der = Том (книги). Das = Лента.",
      example: "Goethe, Band 1. Ein rotes Band.",
      synonyms: ["Buch/Schnur"],
      context: "Nomen",
      tips: "DE: Der dicke Band (Buch). Das dünne Band (Schnur). RU: Толстый том, тонкая лента."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Ich muss 100 Euro in Dollar ___.",
      options: ["tauschen", "wechseln", "vertauschen", "austauschen"],
      correctAnswerIndex: 1,
      explanation: "DE: Geld/Währung = wechseln. RU: Деньги/Валюта = wechseln."
    }
  ]
};

export const DAY_23_PRESET: StudySet = {
  id: "day_23_decisions",
  topic: "Day 23: Entscheiden, Beschließen & Selbst",
  lang: "de-DE",
  vocabulary: [
    {
      term: "sich entscheiden",
      definition: "DE: Wahl zwischen Optionen (A oder B?). RU: Решиться (выбрать из вариантов).",
      example: "Ich entscheide mich für das rote Kleid.",
      synonyms: ["wählen"],
      context: "Wahl",
      grammar: "für + Akk",
      tips: "DE: Option A vs Option B. RU: Опция А или Опция Б."
    },
    {
      term: "beschließen",
      definition: "DE: Einen Plan fassen (offiziell/fest). RU: Постановить / Принять решение (сделать что-то).",
      example: "Wir haben beschlossen, umzuziehen.",
      synonyms: ["festlegen"],
      context: "Plan",
      tips: "DE: Beschluss fassen (keine Auswahl, sondern Tat). RU: Принять решение действовать."
    },
    {
      term: "sich entschließen",
      definition: "DE: Nach langem Zögern tun. RU: Решиться (наконец-то).",
      example: "Er entschloss sich, zu kündigen.",
      synonyms: ["durchringen"],
      context: "Prozess",
      tips: "DE: Ent- = Prozess des 'Loslassens' von Zögern. RU: Процесс преодоления сомнений."
    },
    {
      term: "selbst vs selber",
      definition: "DE: Selbst = Schrift/Standard. Selber = Umgangssprache. RU: Selbst = Лит. Selber = Разг.",
      example: "Ich habe es selbst gemacht.",
      synonyms: ["eigenhändig"],
      context: "Stil",
      tips: "DE: Schreib 'selbst', sag 'selber'. RU: Пиши 'selbst', говори 'selber'."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Das Parlament hat das Gesetz ___.",
      options: ["entschieden", "beschlossen", "entschlossen", "verändert"],
      correctAnswerIndex: 1,
      explanation: "DE: Offizielle Beschlüsse = beschließen. RU: Официальные постановления = beschließen."
    }
  ]
};

export const DAY_24_PRESET: StudySet = {
  id: "day_24_dativ_adv",
  topic: "Day 24: Dativ Verben III & Nutzen",
  lang: "de-DE",
  vocabulary: [
    {
      term: "nützen (Dativ)",
      definition: "DE: Einen Vorteil bringen (Süddeutsch/AT/CH). RU: Быть полезным (кому-то).",
      example: "Das nützt mir nichts.",
      synonyms: ["bringen"],
      context: "Vorteil",
      grammar: "+ Dativ",
      tips: "DE: Wem nützt es? (Mir). RU: Кому полезно? (Мне)."
    },
    {
      term: "nutzen (Akkusativ)",
      definition: "DE: Etwas gebrauchen/verwenden. RU: Использовать (что-то).",
      example: "Ich nutze die Gelegenheit.",
      synonyms: ["verwenden"],
      context: "Gebrauch",
      grammar: "+ Akkusativ",
      tips: "DE: Wen/Was nutzen? (Die Chance). RU: Что использовать? (Шанс)."
    },
    {
      term: "ausweichen (+Dat)",
      definition: "DE: Platz machen, Kontakt vermeiden. RU: Уворачиваться / Избегать / Уступать дорогу.",
      example: "Er weicht der Frage aus.",
      synonyms: ["vermeiden"],
      context: "Konflikt/Verkehr",
      grammar: "+ Dativ",
      tips: "DE: Weg von 'ihm' (Dativ). RU: Уйти от 'него' (Dativ)."
    },
    {
      term: "widersprechen (+Dat)",
      definition: "DE: Dagegen reden. RU: Возражать (кому-то).",
      example: "Ich widerspreche dir.",
      synonyms: ["protestieren"],
      context: "Diskussion",
      grammar: "+ Dativ",
      tips: "DE: Gegen 'wen' reden? Nein, wem! (Dir). RU: Возражать КОМУ (Тебе)."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Das Auto ___ mir nichts, ich habe keinen Führerschein.",
      options: ["nutzt (benutzt)", "nützt (bringt Vorteil)", "braucht", "hat"],
      correctAnswerIndex: 1,
      explanation: "DE: Es bringt keinen Vorteil -> nützen (Dativ). RU: Не приносит пользы -> nützen."
    }
  ]
};

// --- NEW DAYS (25-32) ---

export const DAY_25_PRESET: StudySet = {
  id: "day_25_direction_logic",
  topic: "Day 25: Hin vs. Her & Raus/Rein",
  lang: "de-DE",
  vocabulary: [
    {
      term: "hin- (Präfix)",
      definition: "DE: Vom Sprecher WEG. RU: ТУДА (от говорящего).",
      example: "Geh bitte hin! (Geh weg von mir zu dem Ort).",
      synonyms: ["wegwärts"],
      context: "Richtung",
      tips: "DE: Hin ist hin (= kaputt/weg). RU: Hin - это 'прочь'."
    },
    {
      term: "her- (Präfix)",
      definition: "DE: Zum Sprecher HIN. RU: СЮДА (к говорящему).",
      example: "Komm bitte her! (Zu mir).",
      synonyms: ["zu mir"],
      context: "Richtung",
      tips: "DE: Her zu mir. RU: Her (Сюда) ко мне."
    },
    {
      term: "hinausgehen",
      definition: "DE: Nach draußen gehen (weg von hier). RU: Выйти (наружу, отсюда).",
      example: "Er geht hinaus (aus dem Zimmer).",
      synonyms: ["rausgehen"],
      context: "Bewegung",
      tips: "DE: Ich bin drinnen, er geht weg -> hinaus. RU: Я внутри, он уходит -> hinaus."
    },
    {
      term: "hereinkommen",
      definition: "DE: Nach drinnen kommen (zu mir). RU: Войти (внутрь, ко мне).",
      example: "Kommen Sie bitte herein!",
      synonyms: ["reinkommen"],
      context: "Einladung",
      tips: "DE: Ich bin drinnen, er kommt zu mir -> herein. RU: Я внутри, он идет ко мне -> herein."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Du bist im Haus. Dein Freund ist im Garten. Du rufst: 'Komm ___!'",
      options: ["hinaus", "herein", "hinunter", "hinüber"],
      correctAnswerIndex: 1,
      explanation: "DE: Er soll zu dir (nach drinnen) kommen -> herein. RU: Он должен прийти к тебе (внутрь) -> herein."
    }
  ]
};

export const DAY_26_PRESET: StudySet = {
  id: "day_26_mediopassiv",
  topic: "Day 26: Mediopassiv & 'Keule'",
  lang: "de-DE",
  vocabulary: [
    {
      term: "sich lesen (Mediopassiv)",
      definition: "DE: Man kann es gut lesen (Eigenschaft). RU: Читается (легко/хорошо).",
      example: "Das Buch liest sich gut.",
      synonyms: ["ist lesbar"],
      context: "Passiversatz",
      tips: "DE: Aktiv-Form, aber Passiv-Sinn. Das Buch liest nicht selbst! RU: Активная форма, пассивный смысл. Книга сама не читает!"
    },
    {
      term: "sich tragen (Kleidung)",
      definition: "DE: Es ist angenehm zu tragen. RU: Носится (об одежде).",
      example: "Die Jacke trägt sich angenehm.",
      synonyms: ["ist bequem"],
      context: "Passiversatz",
      tips: "DE: Die Jacke 'fühlt sich' gut an. RU: Куртка 'ощущается' хорошо."
    },
    {
      term: "die Chemiekeule",
      definition: "DE: Aggressive Medikamente/Chemie. RU: 'Убойная доза' химии/лекарств.",
      example: "Bei Erkältung nicht gleich die Chemiekeule nehmen.",
      synonyms: ["starke Arznei"],
      context: "Umgangssprache",
      tips: "DE: Keule = Waffe. Chemiekeule = Chemische Waffe gegen Krankheit. RU: Keule = Дубина. Химическая дубина против болезни."
    },
    {
      term: "auffinden",
      definition: "DE: Etwas Vermisstes/Verlorenes finden (Polizei/Rettung). RU: Обнаружить (разыскиваемое/потерянное).",
      example: "Der Vermisste wurde aufgefunden.",
      synonyms: ["entdecken"],
      context: "Offiziell",
      tips: "DE: auf- = offen/sichtbar machen. RU: auf- = вскрыть/обнаружить."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Dieser Stoff ___ sich sehr weich an.",
      options: ["fühlt", "spürt", "ist", "hat"],
      correctAnswerIndex: 0,
      explanation: "DE: 'Sich anfühlen' ist typisch für Mediopassiv-artige Beschreibungen. RU: 'Sich anfühlen' — ощущаться."
    }
  ]
};

export const DAY_27_PRESET: StudySet = {
  id: "day_27_adjectives_comp",
  topic: "Day 27: Adjektiv-Steigerung & Vergleich",
  lang: "de-DE",
  vocabulary: [
    {
      term: "so ... wie",
      definition: "DE: Gleichheit (Positiv). RU: Tak же ... как (Равенство).",
      example: "Er ist so schnell wie ich.",
      synonyms: ["genauso"],
      context: "Vergleich",
      tips: "DE: SO = WIE (Ebene 1). RU: SO = WIE (1 уровень)."
    },
    {
      term: "als (bei Komparativ)",
      definition: "DE: Ungleichheit (Komparativ). RU: Чем (при сравнении/неравенстве).",
      example: "Er ist schneller als ich.",
      synonyms: ["im Vergleich zu"],
      context: "Vergleich",
      tips: "DE: Anders = Als (A-A). RU: Иначе = Als."
    },
    {
      term: "immer besser",
      definition: "DE: Kontinuierliche Steigerung. RU: Всё лучше и лучше.",
      example: "Das Wetter wird immer besser.",
      synonyms: ["zunehmend"],
      context: "Prozess",
      tips: "DE: 'Immer' + Komparativ = Prozess. RU: 'Immer' + Сравнительная степень = Процесс."
    },
    {
      term: "je ... desto",
      definition: "DE: Proportionale Steigerung. RU: Чем ..., тем ...",
      example: "Je mehr ich lerne, desto mehr weiß ich.",
      synonyms: ["umso"],
      context: "Satzbau",
      tips: "DE: Je + Nebensatz (Verb Ende), Desto + Hauptsatz (Verb 2). RU: Je + Глагол в конце, Desto + Глагол на 2 месте."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Er ist größer ___ sein Vater.",
      options: ["wie", "als", "dann", "so"],
      correctAnswerIndex: 1,
      explanation: "DE: Ungleichheit (größer) braucht 'als'. RU: Неравенство требует 'als'."
    }
  ]
};

export const DAY_28_PRESET: StudySet = {
  id: "day_28_connectors_2",
  topic: "Day 28: Zweiteilige Konnektoren",
  lang: "de-DE",
  vocabulary: [
    {
      term: "sowohl ... als auch",
      definition: "DE: A und B (Doppel-Ja). RU: И ... и (Как то, так и это).",
      example: "Ich spreche sowohl Deutsch als auch Englisch.",
      synonyms: ["und"],
      context: "Positiv",
      tips: "DE: 1 + 1 = 2. Kein Komma! RU: 1 + 1. Без запятой!"
    },
    {
      term: "weder ... noch",
      definition: "DE: Nicht A und nicht B (Doppel-Nein). RU: Ни ... ни.",
      example: "Ich habe weder Zeit noch Geld.",
      synonyms: ["keines von beiden"],
      context: "Negativ",
      tips: "DE: 0 + 0 = 0. Verb meist Plural oder Singular (beides geht). RU: Отрицание обоих фактов."
    },
    {
      term: "zwar ..., aber",
      definition: "DE: Ja, ABER (Einschränkung). RU: Хотя (правда) ..., но.",
      example: "Er ist zwar nett, aber dumm.",
      synonyms: ["einerseits"],
      context: "Einschränkung",
      tips: "DE: Zwar gibt zu, Aber nimmt weg. RU: Zwar признает, Aber отнимает."
    },
    {
      term: "einerseits ... andererseits",
      definition: "DE: Pro und Contra. RU: С одной стороны ..., с другой стороны.",
      example: "Einerseits will ich, andererseits kann ich nicht.",
      synonyms: ["auf der einen Seite"],
      context: "Abwägung",
      tips: "DE: Position 1 im Satz! (Inversion). RU: Занимает 1 позицию (Инверсия)!"
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Ich trinke ___ Kaffee ___ Tee. (Ich mag beides nicht).",
      options: ["sowohl / als auch", "weder / noch", "entweder / oder", "zwar / aber"],
      correctAnswerIndex: 1,
      explanation: "DE: Doppelte Verneinung = weder...noch. RU: Двойное отрицание = weder...noch."
    }
  ]
};

export const DAY_29_PRESET: StudySet = {
  id: "day_29_comm_strategies",
  topic: "Day 29: Kommunikationsstrategien & Umschreibung",
  lang: "de-DE",
  vocabulary: [
    {
      term: "das Ding / das Zeug",
      definition: "DE: Vage Wörter für 'Sache'. RU: Штука / Вещь / Ерунда (когда забыл слово).",
      example: "Gib mir mal das Ding da.",
      synonyms: ["Gegenstand"],
      context: "Umgangssprache",
      tips: "DE: Nutze es, wenn das Wort fehlt, aber zeige darauf. RU: Используй, если забыл слово, но укажи жестом."
    },
    {
      term: "im Sinne von",
      definition: "DE: Das bedeutet... (Erklärung). RU: В смысле... (что означает).",
      example: "Es ist günstig, im Sinne von billig.",
      synonyms: ["bedeutet"],
      context: "Definition",
      tips: "DE: Brücke zur Erklärung. RU: Мостик к объяснению."
    },
    {
      term: "sprich",
      definition: "DE: Das heißt (Konkretisierung). RU: То есть / Иначе говоря.",
      example: "Er ist insolvent, sprich pleite.",
      synonyms: ["das heißt"],
      context: "Erklärung",
      tips: "DE: Kurz für 'sozusagen'. RU: Кратко для 'так сказать'."
    },
    {
      term: "quasi / sozusagen",
      definition: "DE: Füllwörter für Ungenauigkeit. RU: Как бы / Так сказать.",
      example: "Er ist quasi mein Chef.",
      synonyms: ["gewissermaßen"],
      context: "Füllwort",
      tips: "DE: Macht Aussagen weicher/ungefähr. RU: Смягчает утверждение (делает приблизительным)."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Du weißt das Wort nicht. Was sagst du?",
      options: ["Ich schweige.", "Wie sagt man... das Ding, mit dem man schreibt?", "Das ist verboten.", "Nichts."],
      correctAnswerIndex: 1,
      explanation: "DE: Umschreibung ist die beste Strategie (C1). RU: Описание/Перефразирование — лучшая стратегия (C1)."
    }
  ]
};

export const DAY_30_PRESET: StudySet = {
  id: "day_30_fugens",
  topic: "Day 30: Das Fugen-S (Bindungs-S)",
  lang: "de-DE",
  vocabulary: [
    {
      term: "die Liebesheirat",
      definition: "DE: Liebe + s + Heirat. RU: Брак по любви (соединительное s).",
      example: "Es war eine Liebesheirat.",
      synonyms: ["Kompositum"],
      context: "Wortbildung",
      tips: "DE: Liebe (Feminin) + s? Ausnahme! Meist nach -ung, -heit, -keit, -ion. RU: Обычно s после суффиксов -ung, -heit и т.д."
    },
    {
      term: "der Arbeitstag",
      definition: "DE: Arbeit + s + Tag. RU: Рабочий день.",
      example: "Ein langer Arbeitstag.",
      synonyms: ["Werktag"],
      context: "Wortbildung",
      tips: "DE: Arbeit (Fem) bekommt oft ein Fugen-S. RU: Arbeit (ж.р.) часто получает Fugen-S."
    },
    {
      term: "der Mondschein",
      definition: "DE: Mond + (kein s) + Schein. RU: Лунный свет (без s).",
      example: "Im Mondschein.",
      synonyms: ["Licht"],
      context: "Wortbildung",
      tips: "DE: Maskuline Nomen auf -d/-t oft ohne S. RU: Муж. род на -d/-t часто без S."
    },
    {
      term: "die Einkaufsliste",
      definition: "DE: Einkauf + s + Liste. RU: Список покупок.",
      example: "Ich habe die Einkaufsliste vergessen.",
      synonyms: ["Zettel"],
      context: "Wortbildung",
      tips: "DE: Vom Genitiv: des Einkaufs -> Einkaufsliste. RU: От Родительного падежа: des Einkaufs."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Welches Wort ist richtig?",
      options: ["Geburtstag", "Geburttag", "Geburtetag", "Geburtsstag"],
      correctAnswerIndex: 0,
      explanation: "DE: Die Geburt -> Der Geburtstag (s). RU: Geburt + s + Tag."
    }
  ]
};

export const DAY_31_PRESET: StudySet = {
  id: "day_31_nominalization",
  topic: "Day 31: Nominalisierung (Profi-Stil)",
  lang: "de-DE",
  vocabulary: [
    {
      term: "wegen des Regens",
      definition: "DE: Statt 'weil es regnet'. RU: Из-за дождя (вместо 'потому что идет дождь').",
      example: "Wegen des Regens bleiben wir hier.",
      synonyms: ["aufgrund"],
      context: "Kausal",
      grammar: "wegen + Gen",
      tips: "DE: Kausalsatz -> Präposition + Nomen. RU: Придаточное -> Предлог + Сущ."
    },
    {
      term: "bei Ankunft",
      definition: "DE: Statt 'wenn wir ankommen'. RU: По прибытии (вместо 'когда мы прибудем').",
      example: "Bei Ankunft bitte melden.",
      synonyms: ["wenn ankommen"],
      context: "Temporal",
      grammar: "bei + Dat",
      tips: "DE: Wenn-Satz -> Bei + Nomen. RU: Если/Когда -> Bei + Сущ."
    },
    {
      term: "durch Lesen",
      definition: "DE: Statt 'indem man liest'. RU: Чтением / Путем чтения.",
      example: "Man lernt durch Lesen.",
      synonyms: ["indem"],
      context: "Modal",
      grammar: "durch + Akk",
      tips: "DE: Indem-Satz -> Durch + Nomen. RU: Indem -> Durch + Сущ."
    },
    {
      term: "trotz der Kälte",
      definition: "DE: Statt 'obwohl es kalt ist'. RU: Несмотря на холод.",
      example: "Trotz der Kälte gehe ich raus.",
      synonyms: ["obwohl"],
      context: "Konzessiv",
      grammar: "trotz + Gen",
      tips: "DE: Obwohl-Satz -> Trotz + Nomen. RU: Obwohl -> Trotz + Сущ."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Forme um: 'Weil er krank ist.' -> '___ seiner Krankheit.'",
      options: ["Trotz", "Wegen", "Bei", "Durch"],
      correctAnswerIndex: 1,
      explanation: "DE: Weil (Grund) = Wegen (Grund). RU: Weil = Wegen."
    }
  ]
};

export const DAY_32_PRESET: StudySet = {
  id: "day_32_abbreviations",
  topic: "Day 32: Abkürzungen & Chat-Speak",
  lang: "de-DE",
  vocabulary: [
    {
      term: "bzw. (beziehungsweise)",
      definition: "DE: oder / genauer gesagt. RU: Соответственно / или / точнее.",
      example: "Ich nehme Tee bzw. Kaffee.",
      synonyms: ["oder"],
      context: "Schriftlich",
      tips: "DE: Verbindet Alternativen. RU: Связывает альтернативы."
    },
    {
      term: "d.h. (das heißt)",
      definition: "DE: das bedeutet. RU: то есть / это значит.",
      example: "Er ist krank, d.h. er kommt nicht.",
      synonyms: ["bedeutet"],
      context: "Erklärung",
      tips: "DE: Erklärt das Vorherige genauer. RU: Уточняет предыдущее."
    },
    {
      term: "usw. (und so weiter)",
      definition: "DE: etc. RU: и так далее.",
      example: "Äpfel, Birnen, Bananen usw.",
      synonyms: ["etc."],
      context: "Aufzählung",
      tips: "DE: Immer am Ende einer Liste. RU: Всегда в конце списка."
    },
    {
      term: "z.B. (zum Beispiel)",
      definition: "DE: beispielsweise. RU: например.",
      example: "Viele Tiere, z.B. Hunde.",
      synonyms: ["bspw."],
      context: "Beispiel",
      tips: "DE: Vor dem Beispiel. RU: Перед примером."
    }
  ],
  quiz: [
    {
      id: 1,
      question: "Was bedeutet 'ggf.'?",
      options: ["gegebenenfalls (eventuell)", "gegenüber", "gegangen", "gegründet"],
      correctAnswerIndex: 0,
      explanation: "DE: Gegebenenfalls = wenn der Fall eintritt (vielleicht). RU: При необходимости / Возможно."
    }
  ]
};
