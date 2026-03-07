const quizData = [
  {
    "id": 1,
    "question": "Attività prescolare: primi obiettivi da raggiungere",
    "options": {
      "A": "Ambientamento e scivolamento con attività ludiche finalizzate",
      "B": "Imparare la disciplina e l’ordine con rigido controllo tecnico sulle esercitazioni",
      "C": "Stile libero con respirazione, dorso ed alcune bracciate a farfalla",
      "D": "Nessun obiettivo particolare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Ambientamento e scivolamento con attività ludiche finalizzate.",
    "category": "Attività speciali"
  },
  {
    "id": 2,
    "question": "Che cos’è il diving reflex?",
    "options": {
      "A": "È un riflesso arcaico che non perdiamo mai e che prevede la chiusura involontaria dell’epiglottide",
      "B": "È un riflesso arcaico che viene perso verso i 7-9 mesi dopo la nascita per trasformarsi in acqua in apnea volontaria",
      "C": "È un riflesso arcaico che viene perso dopo i tre anni per trasformarsi in apnea volontaria",
      "D": "È un riflesso condizionato"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. È un riflesso arcaico che viene perso verso i 7-9 mesi dopo la nascita per trasformarsi in acqua in apnea volontaria.",
    "category": "Attività speciali"
  },
  {
    "id": 3,
    "question": "Con i bambini in età prescolare il canale privilegiato per insegnare è costituito da:",
    "options": {
      "A": "Il gioco e la comunicazione verbale",
      "B": "Il gioco e l’imitazione",
      "C": "La sola comunicazione verbale",
      "D": "La motivazione endogena"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il gioco e l’imitazione.",
    "category": "Attività speciali"
  },
  {
    "id": 4,
    "question": "Cos’è un corso in acqua per bambini al di sotto dei 3 anni?",
    "options": {
      "A": "Un corso di nuoto",
      "B": "Un’attività motoria che favorisce uno sviluppo armonico dei bambini",
      "C": "Un’attività motoria che favorisce lo sviluppo delle abilità motorie",
      "D": "Una forma di avviamento allo sport"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Un’attività motoria che favorisce uno sviluppo armonico dei bambini.",
    "category": "Attività speciali"
  },
  {
    "id": 5,
    "question": "Differenze tra esercizio fisico e terapia acquatica per i disabili:",
    "options": {
      "A": "L’esercizio fisico e la terapia acquatica svolgono la stessa funzione",
      "B": "L’esercizio fisico lavora sulle caratteristiche residue del disabile, non sul danno fisico",
      "C": "Entrambe le attività devono essere svolte da personale specializzato",
      "D": "Entrambe sono attività di condizionamento acquatico generale per persone con mobilità limitata"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’esercizio fisico lavora sulle caratteristiche residue del disabile, non sul danno fisico.",
    "category": "Attività speciali"
  },
  {
    "id": 6,
    "question": "Dove deve posizionarsi l’istruttore dei gruppi prescolari?",
    "options": {
      "A": "Sul bordo vasca, in piedi",
      "B": "Sul bordo vasca, seduto",
      "C": "In acqua",
      "D": "È indifferente"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. In acqua.",
    "category": "Attività speciali"
  },
  {
    "id": 7,
    "question": "È uno degli obiettivi di un corso neonatale:",
    "options": {
      "A": "Porre le basi per la costruzione di un futuro atleta di livello",
      "B": "Il potenziamento del sistema cardio- circolatorio e muscolo-scheletrico",
      "C": "Il galleggiamento",
      "D": "Il raggiungimento dell’autonomia rispetto al genitore"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il raggiungimento dell’autonomia rispetto al genitore.",
    "category": "Attività speciali"
  },
  {
    "id": 8,
    "question": "I bambini nella fascia di età 18-24 mesi normalmente:",
    "options": {
      "A": "Galleggiano autonomamente",
      "B": "Razionalizzano le proprie paure",
      "C": "Affrontano spontaneamente l’argomento piscina",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "Attività speciali"
  },
  {
    "id": 9,
    "question": "Il bimbo di 4-10 mesi in acqua può:",
    "options": {
      "A": "Eseguire apnee guidate",
      "B": "Eseguire movimenti mirati degli arti",
      "C": "Galleggiare autonomamente",
      "D": "Allontanarsi dai genitori seguendo le indicazioni dell’istruttore"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Eseguire apnee guidate.",
    "category": "Attività speciali"
  },
  {
    "id": 10,
    "question": "In età prescolare quale deve essere il fine dell’attività in acqua?",
    "options": {
      "A": "L’apprendimento del nuoto",
      "B": "L’acquisizione di abilità motorie specifiche",
      "C": "L’adattamento all’acqua",
      "D": "Lo sviluppo delle capacità condizionali"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. L’adattamento all’acqua.",
    "category": "Attività speciali"
  },
  {
    "id": 11,
    "question": "In età prescolare quali sono gli obiettivi per un buon lavoro sullo schema corporeo?",
    "options": {
      "A": "Percezione dello spazio",
      "B": "Lateralità",
      "C": "Riconoscimento dei segmenti corporei",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "Attività speciali"
  },
  {
    "id": 12,
    "question": "In gravidanza, l’attività motoria in acqua:",
    "options": {
      "A": "Aumenta la possibilità di eventi traumatici",
      "B": "Allunga la durata del travaglio",
      "C": "Riduce le possibilità di eventi traumatici",
      "D": "Diminuisce il tono muscolare"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Riduce le possibilità di eventi traumatici.",
    "category": "Attività speciali"
  },
  {
    "id": 13,
    "question": "In quante fasce d’età è consigliabile suddividere i corsi di prima infanzia?",
    "options": {
      "A": "Non è consigliabile",
      "B": "In due fasce d’età (dai 4 ai 18 mesi e dai 18 ai 3 6mesi)",
      "C": "In tre fasce d’età (dai 4 ai 10 mesi, dai 10 ai 24 mesi e dai 24 ai 36 mesi)",
      "D": "In quattro fasce d’età (dai 4 ai 10 mesi, dai 10 ai 18 mesi, dai 18 ai 24 mesi e dai 24 ai 36 mesi)"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. In quattro fasce d’età (dai 4 ai 10 mesi, dai 10 ai 18 mesi, dai 18 ai 24 mesi e dai 24 ai 36 mesi).",
    "category": "Attività speciali"
  },
  {
    "id": 14,
    "question": "In un corso di prima infanzia la figura dell’istruttore è quella di:",
    "options": {
      "A": "Suggeritore, guida, supporto ed animatore",
      "B": "Insegnante delle tecniche delle nuotate",
      "C": "Osservatore",
      "D": "Correttore"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Suggeritore, guida, supporto ed animatore.",
    "category": "Attività speciali"
  },
  {
    "id": 15,
    "question": "In un corso di prima infanzia la presenza del genitore e assolutamente necessaria ed indispensabile:",
    "options": {
      "A": "Mai",
      "B": "In tutte e quattro le fasce d’età (dai 4 ai 36 mesi)",
      "C": "Soprattutto nelle prime tre fasce d’eta (dai 4 ai 24 mesi)",
      "D": "Soprattutto nelle prime due fasce d’eta (dai 4 ai 18 mesi)"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Soprattutto nelle prime due fasce d’eta (dai 4 ai 18 mesi).",
    "category": "Attività speciali"
  },
  {
    "id": 16,
    "question": "In un corso di prima infanzia per un’organizzazione efficiente è consigliabile:",
    "options": {
      "A": "Dividere i bambini in fasce d’età",
      "B": "Dividere i bambini in base al loro livello di motricità",
      "C": "Unire tutti i bambini da 0 a 3 anni",
      "D": "Non creare alcun tipo di divisione o gerarchia"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Dividere i bambini in fasce d’età.",
    "category": "Attività speciali"
  },
  {
    "id": 17,
    "question": "Indica i principali obiettivi dell’attività in acqua per bambini di tre anni:",
    "options": {
      "A": "Favorire lo sviluppo psicomotorio, cognitivo e socio – affettivo del bambino",
      "B": "Apprendere le tecniche delle nuotate",
      "C": "Favorire lo sviluppo delle capacità coordinative",
      "D": "Far acquisire al bambino un rapporto naturale e positivo con l’acqua"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Favorire lo sviluppo psicomotorio, cognitivo e socio – affettivo del bambino.",
    "category": "Attività speciali"
  },
  {
    "id": 18,
    "question": "Iniziare l’insegnamento del nuoto in età prescolare:",
    "options": {
      "A": "È utile perché consente di specializzare prima gli allievi e di raggiungere prima risultati agonistici",
      "B": "Non è di nessuna utilità",
      "C": "Favorisce un più intenso sviluppo della forza",
      "D": "Favorisce il formarsi di una migliore coordinazione acquatica dovuta alla plasticità del sistema nervoso"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Favorisce il formarsi di una migliore coordinazione acquatica dovuta alla plasticità del sistema nervoso.",
    "category": "Attività speciali"
  },
  {
    "id": 19,
    "question": "L’attività fisica in acqua per la donna in gravidanza prevede:",
    "options": {
      "A": "Esercizi di tonificazione solo in acqua alta con ritmi elevati e pochi minuti di rilassamento finale",
      "B": "Esercizi di tonificazione per tutto il corpo con ritmi blandi, con prevalenza di esercizi che ricercano l’extra-rotazione delle anche. Esercizi di rilassamento e di respirazione",
      "C": "Esercizi di tonificazione per tutto il corpo con ritmi blandi, con prevalenza di esercizi che ricercano l’intra-rotazione delle anche",
      "D": "Esercizi di resistenza alla forza"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Esercizi di tonificazione per tutto il corpo con ritmi blandi, con prevalenza di esercizi che ricercano l’extra-rotazione delle anche. Esercizi di rilassamento e di respirazione.",
    "category": "Attività speciali"
  },
  {
    "id": 20,
    "question": "L’attività motoria adattata è:",
    "options": {
      "A": "L’attività sportiva praticata dai soggetti diversamente abili",
      "B": "L’insieme degli esercizi proponibili in una piscina che dipende dal tipo di vasca e dai sussidi didattici a disposizione.",
      "C": "L’attività proposta che più si adatta alle preferenze degli allievi",
      "D": "L’attività preferita dall’istruttore"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’attività sportiva praticata dai soggetti diversamente abili.",
    "category": "Attività speciali"
  },
  {
    "id": 21,
    "question": "L’attività motoria in acqua per gli anziani riduce:",
    "options": {
      "A": "La pressione venosa agli arti inferiori, con miglioramento del ritorno venoso al cuore",
      "B": "La densità ossea agli arti inferiori, con miglioramento del ritorno venoso al cuore",
      "C": "La pressione venosa agli arti inferiori, con miglioramento del ritorno venoso al cervello",
      "D": "L’aspettativa di vita"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La pressione venosa agli arti inferiori, con miglioramento del ritorno venoso al cuore.",
    "category": "Attività speciali"
  },
  {
    "id": 22,
    "question": "L’epilessia è una disabilità di natura:",
    "options": {
      "A": "Fisico-motoria",
      "B": "Psico-fisica",
      "C": "Da deformazione cranio-spinale",
      "D": "Sensoriale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Psico-fisica.",
    "category": "Attività speciali"
  },
  {
    "id": 23,
    "question": "L’immaturità nella funzionalità motoria incide sullo sviluppo cognitivo e socio - affettivo del bambino di tre anni?",
    "options": {
      "A": "Dipende dalla personalità del bambino e dal contesto educativo in cui è inserito",
      "B": "Non incide",
      "C": "Incide sicuramente",
      "D": "Incide esclusivamente sullo sviluppo cognitivo e motorio"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Dipende dalla personalità del bambino e dal contesto educativo in cui è inserito.",
    "category": "Attività speciali"
  },
  {
    "id": 24,
    "question": "La classificazione funzionale del nuoto agonistico per disabili:",
    "options": {
      "A": "È composta da 12 classi",
      "B": "Valuta l’handicap fisico",
      "C": "Non valuta il gesto sportivo",
      "D": "Permette handicap diversi nella stessa classe, ma con funzionalità simile"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. È composta da 12 classi.",
    "category": "Attività speciali"
  },
  {
    "id": 25,
    "question": "La paresi cerebrale si manifesta:",
    "options": {
      "A": "Prima della nascita",
      "B": "Durante il parto",
      "C": "Nel primo anno di vita",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti 3.",
    "category": "Attività speciali"
  },
  {
    "id": 26,
    "question": "La tetraplegia è causata da una:",
    "options": {
      "A": "Lesione toracica",
      "B": "Lesione cervicale",
      "C": "Lesione sacro-coccigea",
      "D": "Lesione lombare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Lesione cervicale.",
    "category": "Attività speciali"
  },
  {
    "id": 27,
    "question": "Nel lavoro in acqua con persone diversamente abili è necessario:",
    "options": {
      "A": "Avere dei rudimenti di medicina generale",
      "B": "Possedere una laurea in scienze motorie",
      "C": "Essere dei buoni nuotatori",
      "D": "Mettersi in ascolto dell’allievo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Mettersi in ascolto dell’allievo.",
    "category": "Attività speciali"
  },
  {
    "id": 28,
    "question": "Nel nuoto in gravidanza la temperatura dell’acqua consigliata è:",
    "options": {
      "A": "Tra 23 e 25°C",
      "B": "Tra 27 e 30°C",
      "C": "Tra 35 e 37°C",
      "D": "Oltre 37°C"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Tra 27 e 30°C.",
    "category": "Attività speciali"
  },
  {
    "id": 29,
    "question": "Nel nuoto per la terza e quarta età, il primo obiettivo da perseguire è quello di",
    "options": {
      "A": "Rendere l’anziano il più autosufficiente possibile",
      "B": "Programmare un allenamento a fini agonistici",
      "C": "Potenziare le capacità condizionali e coordinative",
      "D": "Fare attività acquatica basata sulla patologia dell’anziano"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Rendere l’anziano il più autosufficiente possibile.",
    "category": "Attività speciali"
  },
  {
    "id": 30,
    "question": "Nell’attività natatoria per la terza età:",
    "options": {
      "A": "Ci sono dei cambiamenti evidenti nell’individuo che comunque non rappresentano un limite all’attività sportiva",
      "B": "Uno degli obiettivi è il rallentamento del decadimento organico dovuto all’invecchiamento",
      "C": "Non ci sono particolari rischi legati all’età",
      "D": "Gli obiettivi da raggiungere devono essere in linea con quelli richiesti alle altre fasce di età perché tutti sono potenzialmente in grado di poter nuotare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Uno degli obiettivi è il rallentamento del decadimento organico dovuto all’invecchiamento.",
    "category": "Attività speciali"
  },
  {
    "id": 31,
    "question": "Nella fascia di età prescolare l’apprendimento avviene principalmente grazie a:",
    "options": {
      "A": "Spiegazioni verbali",
      "B": "Gioco ed imitazione",
      "C": "Cooperazione",
      "D": "Competizione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gioco ed imitazione.",
    "category": "Attività speciali"
  },
  {
    "id": 32,
    "question": "Obiettivi da perseguire nell’insegnamento alla terza e quarta età:",
    "options": {
      "A": "Socializzazione",
      "B": "Alleggerire il lavoro articolare",
      "C": "Ricondizionamento fisico",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "Attività speciali"
  },
  {
    "id": 33,
    "question": "Obiettivo dell’attività prescolare è:",
    "options": {
      "A": "Adattamento degli schemi motori terrestri all’ambiente acquatico",
      "B": "Coordinazione fine",
      "C": "Tecnica dei quattro stili",
      "D": "Sviluppo condizionale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Adattamento degli schemi motori terrestri all’ambiente acquatico.",
    "category": "Attività speciali"
  },
  {
    "id": 34,
    "question": "Per un bambino di tre anni il canale privilegiato di insegnamento è:",
    "options": {
      "A": "Il gioco strutturato",
      "B": "La spiegazione verbale",
      "C": "Gli esercizi tecnico – didattici finalizzati all’ apprendimento di abilità motorie specifiche",
      "D": "Il gioco libero"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il gioco strutturato.",
    "category": "Attività speciali"
  },
  {
    "id": 35,
    "question": "Punti essenziali della pedagogia inclusiva:",
    "options": {
      "A": "Tutti possono imparare",
      "B": "La diversità è un punto di forza",
      "C": "Cooperazione sinergica delle agenzie educative",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti 4.",
    "category": "Attività speciali"
  },
  {
    "id": 36,
    "question": "Qual è il tratto caratterizzante del bambino di 3-4 anni?",
    "options": {
      "A": "Pensiero intuitivo",
      "B": "Altruismo",
      "C": "Piena consapevolezza del corpo",
      "D": "Egocentrismo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Egocentrismo.",
    "category": "Attività speciali"
  },
  {
    "id": 37,
    "question": "Qual è l’obiettivo principale nell’attività neonatale in acqua?",
    "options": {
      "A": "Che il bambino impari a nuotare precocemente",
      "B": "Si tratta di un’attività priva di obiettivi specifici",
      "C": "Dare al bambino anche piccolissimi strumenti per mettersi in situazione di sicurezza in acqua in caso di caduta accidentale",
      "D": "Favorire la relazione della coppia genitore-bambino attraverso l’elemento acqua"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Favorire la relazione della coppia genitore-bambino attraverso l’elemento acqua.",
    "category": "Attività speciali"
  },
  {
    "id": 38,
    "question": "Quale dei seguenti è un beneficio dell’attività in acqua per una donna in gravidanza?",
    "options": {
      "A": "Aumento della mobilità articolare.",
      "B": "Aumento della capacità coordinativa.",
      "C": "Diminuzione del ritmo cardiaco",
      "D": "Irrobustimento del feto"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Aumento della mobilità articolare..",
    "category": "Attività speciali"
  },
  {
    "id": 39,
    "question": "Quale delle seguenti affermazioni è sempre veritiera?",
    "options": {
      "A": "A tutela della propria salute e di quella del bambino è opportuno che la donna in gravidanza sospenda la pratica sportiva",
      "B": "L’attività fisica non ha conseguenze benefiche sul normale sviluppo del feto",
      "C": "La donna in gravidanza può praticare solo sport di endurance",
      "D": "La donna in gravidanza può condurre una vita pressoché normale, tranne in quei casi ove subentrano problematiche particolari o vere e proprie patologie"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La donna in gravidanza può condurre una vita pressoché normale, tranne in quei casi ove subentrano problematiche particolari o vere e proprie patologie.",
    "category": "Attività speciali"
  },
  {
    "id": 40,
    "question": "Quale delle seguenti è una finalità specifica dell’attività acquatica in gravidanza?",
    "options": {
      "A": "Allenamento aerobico",
      "B": "Decontrazione del bacino",
      "C": "Profilassi delle trombosi venose e del gonfiore da liquidi",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "Attività speciali"
  },
  {
    "id": 41,
    "question": "Quale di questi non è un vantaggio dell’attività motoria acquatica nella terza età?",
    "options": {
      "A": "Riduzione del rischio traumatologico",
      "B": "Riduzione del sovraccarico sull’apparato locomotore",
      "C": "Marcato sviluppo coordinativo",
      "D": "Miglioramento del ritorno venoso"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Marcato sviluppo coordinativo.",
    "category": "Attività speciali"
  },
  {
    "id": 42,
    "question": "Quale fra i seguenti non è un obiettivo specifico dell’attività in acqua per bambini di età compresa fra 4 e 36 mesi ?",
    "options": {
      "A": "Rafforzamento del legame genitore- figlio",
      "B": "Miglioramento delle condizioni fisiche del bambino",
      "C": "Presa di confidenza con l’acqua",
      "D": "Sviluppo delle capacità coordinative"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sviluppo delle capacità coordinative.",
    "category": "Attività speciali"
  },
  {
    "id": 43,
    "question": "Quale tra questi è uno dei cambiamenti più rilevanti legati all’invecchiamento?",
    "options": {
      "A": "Aumento della funzionalità cardio- respiratoria e muscolare",
      "B": "Aumento delle capacità di autoregolazione metabolica",
      "C": "Riduzione dell’attività neuro- muscolare",
      "D": "Riduzione della perdita di massa ossea"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Riduzione dell’attività neuro- muscolare.",
    "category": "Attività speciali"
  },
  {
    "id": 44,
    "question": "Quali aspetti possono creare un disincentivo all’attività in un soggetto anziano?",
    "options": {
      "A": "La ricerca di un punto di incontro fra esigenze didattiche ed esigenze dell’utente",
      "B": "L’inadeguatezza della proposta, della struttura e la rigidità",
      "C": "L’attenzione massima posta all’inadeguatezza fisica dell’utente",
      "D": "La composizione di gruppi per motivazione e condizioni di funzionalità"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’inadeguatezza della proposta, della struttura e la rigidità.",
    "category": "Attività speciali"
  },
  {
    "id": 45,
    "question": "Quali sono considerate popolazioni speciali?",
    "options": {
      "A": "Gestanti, neonatale, prescolare, terza età, disabili",
      "B": "Atleti e disabili",
      "C": "Terza età e bambini",
      "D": "Pallanuotisti e sincronette"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Gestanti, neonatale, prescolare, terza età, disabili.",
    "category": "Attività speciali"
  },
  {
    "id": 46,
    "question": "Quali sono i principali obiettivi da raggiungere nei gruppi di attività prescolare?",
    "options": {
      "A": "Nessun obiettivo, solo gioco e divertimento",
      "B": "Ambientamento e scivolamento con attività ludiche finalizzate",
      "C": "Stile libero con respirazione, dorso ed alcune bracciate a farfalla",
      "D": "Imparare la disciplina e l’ordine"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Ambientamento e scivolamento con attività ludiche finalizzate.",
    "category": "Attività speciali"
  },
  {
    "id": 47,
    "question": "Quali sono le problematiche dell’attività fisica determinate all’invecchiamento?",
    "options": {
      "A": "Aumento della capacità aerobica",
      "B": "Possibilità solo di sforzi di breve durata",
      "C": "Riduzione della funzionalità cardio- respiratoria e muscolare",
      "D": "Possibilità di effettuare solo lavoro anaerobici alattacidi"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Riduzione della funzionalità cardio- respiratoria e muscolare.",
    "category": "Attività speciali"
  },
  {
    "id": 48,
    "question": "Quanti tipi di menomazione fisica sono classificati dal movimento paralimpico?",
    "options": {
      "A": "4",
      "B": "8",
      "C": "12",
      "D": "16"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 8.",
    "category": "Attività speciali"
  },
  {
    "id": 49,
    "question": "Un bambino di 4 anni apprende soprattutto attraverso:",
    "options": {
      "A": "Ripetizioni automatiche e inconsapevoli",
      "B": "Gioco strutturato, gioco simbolico e di movimento",
      "C": "Spiegazioni e dimostrazioni dell’istruttore",
      "D": "Esercizi tecnico-coordinativi specifici"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gioco strutturato, gioco simbolico e di movimento.",
    "category": "Attività speciali"
  },
  {
    "id": 50,
    "question": "Un’adeguata attività motoria oltre i 60 anni",
    "options": {
      "A": "Migliora il livello delle capacità motorie e la forza",
      "B": "Migliora il livello delle capacità motorie e la componente psicologica",
      "C": "Migliora solo la componente psicologica",
      "D": "Non apporta alcun miglioramento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Migliora il livello delle capacità motorie e la componente psicologica.",
    "category": "Attività speciali"
  },
  {
    "id": 51,
    "question": "Uno dei cambiamenti più evidenti legati all’invecchiamento è:",
    "options": {
      "A": "Perdita di massa magra e riduzione percentuale dell’acqua intracellulare",
      "B": "Perdita di massa grassa e riduzione percentuale dell’acqua intracellulare",
      "C": "Perdita di massa magra e scomparsa dell’acqua intracellulare",
      "D": "Perdita di massa magra e aumento percentuale dell’acqua intracellulare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Perdita di massa magra e riduzione percentuale dell’acqua intracellulare.",
    "category": "Attività speciali"
  },
  {
    "id": 52,
    "question": "Nella contrazione isotonica:",
    "options": {
      "A": "Non viene effettuato il movimento delle leve ossee",
      "B": "Rimane costante la velocità di movimento",
      "C": "Il carico è superiore alla forza sviluppata dal muscolo",
      "D": "Rimane costante il carico"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Rimane costante il carico 6.",
    "category": "Biofisiologia"
  },
  {
    "id": 53,
    "question": "All’atrio destro il sangue arriva:",
    "options": {
      "A": "Dal ventricolo destro",
      "B": "Dalle vene cave",
      "C": "Dalle vene polmonari",
      "D": "Nessuna delle risposte è corretta"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dalle vene cave.",
    "category": "Biofisiologia"
  },
  {
    "id": 54,
    "question": "Caratteristiche delle ossa corte:",
    "options": {
      "A": "Lunghezza domina sulle altre due dimensioni",
      "B": "Le tre dimensioni sono nello stesso ordine di grandezza",
      "C": "Nessuna caratteristica particolare",
      "D": "Lunghezza e larghezza sono assai prevalenti rispetto allo spessore"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Le tre dimensioni sono nello stesso ordine di grandezza.",
    "category": "Biofisiologia"
  },
  {
    "id": 55,
    "question": "Caratteristiche delle ossa lunghe:",
    "options": {
      "A": "Lunghezza domina sulle altre due dimensioni",
      "B": "Le tre dimensioni sono nello stesso ordine di grandezza",
      "C": "Nessuna caratteristica particolare",
      "D": "Lunghezza e larghezza sono assai prevalenti rispetto allo spessore"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Lunghezza domina sulle altre due dimensioni.",
    "category": "Biofisiologia"
  },
  {
    "id": 56,
    "question": "Caratteristiche delle ossa piatte:",
    "options": {
      "A": "Lunghezza domina sulle altre due dimensioni",
      "B": "Le tre dimensioni sono nello stesso ordine di grandezza",
      "C": "Nessuna caratteristica particolare",
      "D": "Lunghezza e larghezza sono assai prevalenti rispetto allo spessore"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Lunghezza e larghezza sono assai prevalenti rispetto allo spessore.",
    "category": "Biofisiologia"
  },
  {
    "id": 57,
    "question": "Che cosa sono gli alveoli?",
    "options": {
      "A": "Cavità del naso preposte alla funzione di umidificare l’aria entrante",
      "B": "Minuscoli organi che secernano il liquido alveolare",
      "C": "Organelli monociliati dell’apparato digerente",
      "D": "Parti terminali dell’apparato respiratorio attraverso i quali avvengono gli scambi gassosi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Parti terminali dell’apparato respiratorio attraverso i quali avvengono gli scambi gassosi.",
    "category": "Biofisiologia"
  },
  {
    "id": 58,
    "question": "Che funzioni ha la cassa toracica?",
    "options": {
      "A": "Di permettere la respirazione",
      "B": "Di permettere la funzione del cuore",
      "C": "Di galleggiamento",
      "D": "Di proteggere cuore e polmoni e permettere la respirazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Di proteggere cuore e polmoni e permettere la respirazione.",
    "category": "Biofisiologia"
  },
  {
    "id": 59,
    "question": "Componenti delle articolazioni mobili:",
    "options": {
      "A": "Cartilagine articolare, liquido sinoviale, legamenti, capsula articolare",
      "B": "Cartilagine articolare, legamenti e disco cartilagineo",
      "C": "Nessuna dinamica articolare",
      "D": "Osso, muscolo scheletrico, tendine"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Cartilagine articolare, liquido sinoviale, legamenti, capsula articolare.",
    "category": "Biofisiologia"
  },
  {
    "id": 60,
    "question": "Componenti delle articolazioni semimobili:",
    "options": {
      "A": "Cartilagine articolare, liquido sinoviale, legamenti, capsula articolare",
      "B": "Osso, muscolo scheletrico, tendine",
      "C": "Cartilagine articolare, legamenti e disco cartilagineo",
      "D": "Nessuna dinamica articolare"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Cartilagine articolare, legamenti e disco cartilagineo.",
    "category": "Biofisiologia"
  },
  {
    "id": 61,
    "question": "Cos’è la frequenza cardiaca?",
    "options": {
      "A": "Il numero di contrazioni ventricolari nell’unità di tempo (minuto)",
      "B": "La quantità di sangue emessa dal cuore nell’unità di tempo (minuto)",
      "C": "La pressione arteriosa misurata nel tempo (minuto)",
      "D": "Il numero di morti causate da patologie cardiache nell’unità di tempo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il numero di contrazioni ventricolari nell’unità di tempo (minuto).",
    "category": "Biofisiologia"
  },
  {
    "id": 62,
    "question": "Cos’è la frequenza respiratoria?",
    "options": {
      "A": "Il numero degli atti respiratori che si eseguono in una giornata",
      "B": "Il numero degli atti respiratori che si eseguono in un minuto",
      "C": "La capacità dell’individuo di respirare",
      "D": "La durata temporale di un singolo atto respiratorio"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il numero degli atti respiratori che si eseguono in un minuto.",
    "category": "Biofisiologia"
  },
  {
    "id": 63,
    "question": "Cosa non è trasportato dall’apparato circolatorio?",
    "options": {
      "A": "Impulsi nervosi",
      "B": "Sostanze nutritive",
      "C": "Anticorpi",
      "D": "Prodotti di rifiuto"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Impulsi nervosi.",
    "category": "Biofisiologia"
  },
  {
    "id": 64,
    "question": "Cosa sono gli alveoli?",
    "options": {
      "A": "Cavità del naso preposte ad umidificare l’aria in entrata",
      "B": "Minuscoli organi che secernono il liquidi alveolare",
      "C": "Organelli monociliati dell’apparato digerente",
      "D": "Parti terminali dell’apparato respiratorio attraverso le quali avvengono gli scambi gassosi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Parti terminali dell’apparato respiratorio attraverso le quali avvengono gli scambi gassosi.",
    "category": "Biofisiologia"
  },
  {
    "id": 65,
    "question": "Cosa sono l’actina e la miosina?",
    "options": {
      "A": "Due tipi di articolazioni",
      "B": "Due diversi tipi di fibre muscolari",
      "C": "Dei principi alimentari",
      "D": "Dei miofilamenti che costituiscono le miofibrille muscolari"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dei miofilamenti che costituiscono le miofibrille muscolari.",
    "category": "Biofisiologia"
  },
  {
    "id": 66,
    "question": "Definizione di articolazione:",
    "options": {
      "A": "Punti di collegamento tra due ossa",
      "B": "Organi che compongono il sistema scheletrico",
      "C": "Parte del muscolo costituita da tessuto connettivo che lo collega all’osso",
      "D": "Distribuzione topografica dei vasi sanguigni"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Punti di collegamento tra due ossa.",
    "category": "Biofisiologia"
  },
  {
    "id": 67,
    "question": "Definizione di cellula:",
    "options": {
      "A": "L’unità fondamentale del vivente",
      "B": "L’unione funzionale di cellule simili",
      "C": "La struttura di tessuti organizzati per svolgere una funzione",
      "D": "Costituente base della materia"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’unità fondamentale del vivente.",
    "category": "Biofisiologia"
  },
  {
    "id": 68,
    "question": "Definizione di legamenti",
    "options": {
      "A": "Punti di collegamento tra due ossa",
      "B": "Tessuti particolarmente densi",
      "C": "Parte del muscolo costituita da tessuto connettivo che lo collega all’osso",
      "D": "Struttura connettiva che mantiene in contatto due capi ossei"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Struttura connettiva che mantiene in contatto due capi ossei.",
    "category": "Biofisiologia"
  },
  {
    "id": 69,
    "question": "Definizione di organo:",
    "options": {
      "A": "L’unione funzionale di cellule simili",
      "B": "Costituente base della materia",
      "C": "La struttura di tessuti organizzati per svolgere una funzione",
      "D": "La struttura complessa composta da organi diversi per soddisfare una funzione superiore"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La struttura di tessuti organizzati per svolgere una funzione.",
    "category": "Biofisiologia"
  },
  {
    "id": 70,
    "question": "Definizione di ossa:",
    "options": {
      "A": "Punti di collegamento tra due ossa",
      "B": "Parti che compongono il sistema scheletrico",
      "C": "Sistema di organi che ha la funzione di sostegno del corpo e protezione degli organi interni",
      "D": "Tessuti particolarmente densi"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Parti che compongono il sistema scheletrico.",
    "category": "Biofisiologia"
  },
  {
    "id": 71,
    "question": "Definizione di scheletro:",
    "options": {
      "A": "Organi che compongono il sistema scheletrico",
      "B": "Sistema di organi che ha la funzione di sostegno del corpo e protezione degli organi interni",
      "C": "Parte del muscolo costituita da tessuto connettivo che lo collega all’osso",
      "D": "Struttura polimorfica complessa"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Sistema di organi che ha la funzione di sostegno del corpo e protezione degli organi interni.",
    "category": "Biofisiologia"
  },
  {
    "id": 72,
    "question": "Definizione di sistema di organi:",
    "options": {
      "A": "L’unione funzionale di cellule simili",
      "B": "La struttura di tessuti organizzati per svolgere una funzione",
      "C": "Costituente base della materia",
      "D": "La struttura complessa composta da organi diversi per soddisfare una funzione superiore"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La struttura complessa composta da organi diversi per soddisfare una funzione superiore.",
    "category": "Biofisiologia"
  },
  {
    "id": 73,
    "question": "Definizione di tendini:",
    "options": {
      "A": "Punti di collegamento tra due ossa",
      "B": "Tessuti particolarmente densi",
      "C": "Parti che compongono il sistema scheletrico",
      "D": "Tessuto connettivo che collega il muscolo all’osso"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tessuto connettivo che collega il muscolo all’osso.",
    "category": "Biofisiologia"
  },
  {
    "id": 74,
    "question": "Definizione di tessuto:",
    "options": {
      "A": "L’unità fondamentale del vivente",
      "B": "L’unione funzionale di cellule simili",
      "C": "La struttura di tessuti organizzati per svolgere una funzione",
      "D": "Costituente base della materia"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’unione funzionale di cellule simili.",
    "category": "Biofisiologia"
  },
  {
    "id": 75,
    "question": "Definizione di tono muscolare:",
    "options": {
      "A": "Sezione trasversa del muscolo",
      "B": "Lunghezza del muscolo a riposo",
      "C": "Attività muscolare riflessa e costante che mantiene l'assetto posturale del corpo opponendosi alla forza di gravità",
      "D": "Percentuale di fibre rosse presenti nel muscolo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Attività muscolare riflessa e costante che mantiene l'assetto posturale del corpo opponendosi alla forza di gravità.",
    "category": "Biofisiologia"
  },
  {
    "id": 76,
    "question": "Dopo la perdita di quanta acqua l’organismo inizia ad accusare sintomi di disidratazione?",
    "options": {
      "A": "0,2-0,3%",
      "B": "2-3%",
      "C": "20-30%",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 2-3%.",
    "category": "Biofisiologia"
  },
  {
    "id": 77,
    "question": "Dove si trova il sistema vestibolare e a cosa serve?",
    "options": {
      "A": "Nel naso e serve per sentire gli odori",
      "B": "Nelle orecchie e serve per raccogliere i suoni",
      "C": "Nelle orecchie e serve ad informare sulla posizione della testa",
      "D": "Sulla cute e determina la sensopercezione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Nelle orecchie e serve ad informare sulla posizione della testa.",
    "category": "Biofisiologia"
  },
  {
    "id": 78,
    "question": "Durante la fase di inspirazione:",
    "options": {
      "A": "Il diaframma si abbassa",
      "B": "Il diaframma si alza",
      "C": "Il cuore aumenta i battiti",
      "D": "Il cuore diminuisce i battiti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il diaframma si abbassa.",
    "category": "Biofisiologia"
  },
  {
    "id": 79,
    "question": "Elementi che compongono la cellula:",
    "options": {
      "A": "Membrana cellulare, citoplasma, organuli cellulari",
      "B": "Membrana e nucleo",
      "C": "Membrana cellulare e nucleo",
      "D": "Citoplasma e nucleo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Membrana cellulare, citoplasma, organuli cellulari.",
    "category": "Biofisiologia"
  },
  {
    "id": 80,
    "question": "Gli scambi gassosi a livello polmonare avvengono tra:",
    "options": {
      "A": "Bronchioli e capillari",
      "B": "Capillari e alveoli",
      "C": "Alveoli e vene",
      "D": "Arterie e vene"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Capillari e alveoli.",
    "category": "Biofisiologia"
  },
  {
    "id": 81,
    "question": "Gli scambi respiratori avvengono:",
    "options": {
      "A": "A livello delle cavità nasali",
      "B": "Nei bronchi",
      "C": "Negli alveoli",
      "D": "Nell’esofago"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Negli alveoli.",
    "category": "Biofisiologia"
  },
  {
    "id": 82,
    "question": "I fattori che condizionano l’accrescimento sono:",
    "options": {
      "A": "Endogeni ed esogeni",
      "B": "Muscolari ed energetici",
      "C": "Genetici e psicologici",
      "D": "Antropologici e sociali"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Endogeni ed esogeni.",
    "category": "Biofisiologia"
  },
  {
    "id": 83,
    "question": "I muscoli abduttori:",
    "options": {
      "A": "Permettono il movimento di allontanamento dalla linea mediana",
      "B": "Permettono il movimento di avvicinamento alla line mediana",
      "C": "Permettono il movimento di rotazione verso la linea mediana",
      "D": "Sono deputati alla mimica facciale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Permettono il movimento di allontanamento dalla linea mediana.",
    "category": "Biofisiologia"
  },
  {
    "id": 84,
    "question": "I muscoli fasici",
    "options": {
      "A": "Hanno la funzione di sostegno, quindi governano la postura, hanno fibre corte oblique e contengono più fibre rosse e quindi lente",
      "B": "Hanno la funzione dinamica di movimento e contengono più fibre bianche per cui più rapide",
      "C": "Comprendono tutti i muscoli che concorrono al medesimo movimento",
      "D": "Sono muscoli involontari"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Hanno la funzione dinamica di movimento e contengono più fibre bianche per cui più rapide.",
    "category": "Biofisiologia"
  },
  {
    "id": 85,
    "question": "I muscoli si inseriscono sulle ossa tramite:",
    "options": {
      "A": "Incastri",
      "B": "Le cartilagini",
      "C": "I legamenti",
      "D": "I tendini"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. I tendini.",
    "category": "Biofisiologia"
  },
  {
    "id": 86,
    "question": "I muscoli volontari",
    "options": {
      "A": "Sono quelli cardiaci",
      "B": "Sono quelli scheletrici",
      "C": "Sono quelli lisci",
      "D": "Non esistono"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Sono quelli scheletrici.",
    "category": "Biofisiologia"
  },
  {
    "id": 87,
    "question": "I segnali che arrivano dalla periferia al sistema nervoso centrale sono detti:",
    "options": {
      "A": "Efferenti",
      "B": "Afferenti",
      "C": "Dipende dalle situazioni",
      "D": "Nessuna delle precedenti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Afferenti.",
    "category": "Biofisiologia"
  },
  {
    "id": 88,
    "question": "I valori normali di pressione arteriosa in un adulto sono:",
    "options": {
      "A": "Inferiori a 170/120",
      "B": "Inferiori a 160/110",
      "C": "Inferiori a 150/100",
      "D": "Inferiori a 140/90"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Inferiori a 140/90.",
    "category": "Biofisiologia"
  },
  {
    "id": 89,
    "question": "Il cuore è un muscolo cavo formato da:",
    "options": {
      "A": "Quattro cavità separate tra loro (atri e ventricoli)",
      "B": "Quattro cavità comunicanti tra loro",
      "C": "Due cavità separate in senso longitudinale",
      "D": "Due cavità comunicanti tra loro"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Quattro cavità separate tra loro (atri e ventricoli).",
    "category": "Biofisiologia"
  },
  {
    "id": 90,
    "question": "Il cuore è:",
    "options": {
      "A": "Un muscolo striato involontario",
      "B": "Un organo volontario",
      "C": "Una metafora",
      "D": "Un muscolo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un muscolo striato involontario.",
    "category": "Biofisiologia"
  },
  {
    "id": 91,
    "question": "Il cuore è:",
    "options": {
      "A": "Un organo muscolare, incavo, contrattile",
      "B": "Un apparato complesso",
      "C": "Un organo muscolare, cavo, contrattile",
      "D": "Un organo muscolare, incavo, retrattile"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Un organo muscolare, cavo, contrattile.",
    "category": "Biofisiologia"
  },
  {
    "id": 92,
    "question": "Il diaframma è:",
    "options": {
      "A": "Un muscolo respiratorio",
      "B": "Un muscolo scheletrico",
      "C": "Un muscolo addominale",
      "D": "Un muscolo facciale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un muscolo respiratorio.",
    "category": "Biofisiologia"
  },
  {
    "id": 93,
    "question": "Il glicogeno è:",
    "options": {
      "A": "Uno zucchero semplice",
      "B": "Uno zucchero grezzo",
      "C": "La fonte energetica direttamente utilizzabile dall’organismo",
      "D": "Un glucide complesso immagazzinato nel fegato"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un glucide complesso immagazzinato nel fegato 10.",
    "category": "Biofisiologia"
  },
  {
    "id": 94,
    "question": "Il metabolismo è:",
    "options": {
      "A": "L’assorbimento dei principi alimentari",
      "B": "Il trasporto dei principi alimentari",
      "C": "Il complesso di reazioni chimiche vitali dell’organismo umano",
      "D": "L’utilizzo dei grassi da parte dell’organismo umano"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Il complesso di reazioni chimiche vitali dell’organismo umano.",
    "category": "Biofisiologia"
  },
  {
    "id": 95,
    "question": "Il muscolo scheletrico è organizzato:",
    "options": {
      "A": "In fasci, fascicoli, e miofibrille",
      "B": "In grosse strutture contrattili",
      "C": "In aggregati omogenei",
      "D": "In fasci, fascicoli, fibre e miofibrille"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. In fasci, fascicoli, fibre e miofibrille.",
    "category": "Biofisiologia"
  },
  {
    "id": 96,
    "question": "Il sistema nervoso autonomo (SNA) è composto di:",
    "options": {
      "A": "Encefalo e midollo spinale",
      "B": "Due parti, il parasimpatico e l’ortosimpatico",
      "C": "Nervi e muscoli",
      "D": "Coni e bastoncelli"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Due parti, il parasimpatico e l’ortosimpatico.",
    "category": "Biofisiologia"
  },
  {
    "id": 97,
    "question": "Il sistema nervoso centrale è costituito da:",
    "options": {
      "A": "Nervi spinali e midollo spinale",
      "B": "Miosina e actina",
      "C": "Unità spinali",
      "D": "Encefalo e midollo spinale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Encefalo e midollo spinale.",
    "category": "Biofisiologia"
  },
  {
    "id": 98,
    "question": "Il sistema nervoso centrale rappresenta:",
    "options": {
      "A": "Il protoplasma",
      "B": "L’insieme delle terminazioni nervose collegate agli analizzatori",
      "C": "Il più importante sistema di regolazione e coordinazione: è la sede di tutte le funzioni mentali compresi il pensiero",
      "D": "Il principale organo del corpo umano"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Il più importante sistema di regolazione e coordinazione: è la sede di tutte le funzioni mentali compresi il pensiero.",
    "category": "Biofisiologia"
  },
  {
    "id": 99,
    "question": "Il sistema nervoso si divide in:",
    "options": {
      "A": "Generale e speciale",
      "B": "Centrale e periferico",
      "C": "Muscolare e scheletrico",
      "D": "Condizionale e coordinativo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Centrale e periferico.",
    "category": "Biofisiologia"
  },
  {
    "id": 100,
    "question": "Il sistema scheletrico svolge funzioni di:",
    "options": {
      "A": "Protezione",
      "B": "Protezione e movimento",
      "C": "Sostegno e movimento",
      "D": "Protezione, sostegno e movimento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Protezione, sostegno e movimento.",
    "category": "Biofisiologia"
  },
  {
    "id": 101,
    "question": "Il sistema termoregolatore è composto da:",
    "options": {
      "A": "Recettori, centro termoregolatore, organi effettori",
      "B": "Analizzatori, centro effettore, organi termoregolatori",
      "C": "Effettori, centro termoregolatore, organi analizzatori",
      "D": "Centro analizzatore, effettori, organi recettori"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Recettori, centro termoregolatore, organi effettori.",
    "category": "Biofisiologia"
  },
  {
    "id": 102,
    "question": "Il trasporto dell’ossigeno dai polmoni al muscolo avviene tramite:",
    "options": {
      "A": "Il plasma",
      "B": "Gli eritrociti (globuli rossi)",
      "C": "I leucociti (globuli bianchi)",
      "D": "Le piastrine"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gli eritrociti (globuli rossi).",
    "category": "Biofisiologia"
  },
  {
    "id": 103,
    "question": "In ambienti eccessivamente caldi e umidi, in assenza di opportuna ventilazione, si può rimanere vittime di:",
    "options": {
      "A": "Colpo di sole",
      "B": "Ustione",
      "C": "Colpo di calore",
      "D": "Idrocuzione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Colpo di calore.",
    "category": "Biofisiologia"
  },
  {
    "id": 104,
    "question": "In un adulto, a riposo, il cuore pulsa alla frequenza di:",
    "options": {
      "A": "70-80 battiti al minuto",
      "B": "140-160 battiti al minuto",
      "C": "30-40 battiti al minuto",
      "D": "Oltre 160 battiti al minuto"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 70-80 battiti al minuto.",
    "category": "Biofisiologia"
  },
  {
    "id": 105,
    "question": "In un’inspirazione la gabbia toracica si espande, ed il diaframma:",
    "options": {
      "A": "Si alza",
      "B": "Si riempie",
      "C": "Si abbassa",
      "D": "Si svuota"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Si abbassa.",
    "category": "Biofisiologia"
  },
  {
    "id": 106,
    "question": "In una contrazione isometrica il muscolo:",
    "options": {
      "A": "Si contrae mantenendo la stessa lunghezza",
      "B": "Si contrae accorciandosi",
      "C": "Si contrae allungandosi",
      "D": "Si allunga contraendosi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Si contrae mantenendo la stessa lunghezza.",
    "category": "Biofisiologia"
  },
  {
    "id": 107,
    "question": "In una contrazione muscolare isocinetica rimane costante:",
    "options": {
      "A": "La tensione",
      "B": "La velocità angolare",
      "C": "Il consumo energetico",
      "D": "La direzione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La velocità angolare.",
    "category": "Biofisiologia"
  },
  {
    "id": 108,
    "question": "In una respirazione a riposo si immettono in ogni inspirazione circa:",
    "options": {
      "A": "150 ml di aria",
      "B": "500 ml di aria",
      "C": "5000 ml di aria",
      "D": "Oltre 5000 ml di aria"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 500 ml di aria.",
    "category": "Biofisiologia"
  },
  {
    "id": 109,
    "question": "L’alimentazione soddisfa necessità:",
    "options": {
      "A": "Affettive",
      "B": "Energetiche",
      "C": "Cognitive",
      "D": "Sociali"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Energetiche.",
    "category": "Biofisiologia"
  },
  {
    "id": 110,
    "question": "L’apparato circolatorio ha funzione di:",
    "options": {
      "A": "Sostegno",
      "B": "Protezione",
      "C": "Trasporto",
      "D": "Coordinazione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Trasporto.",
    "category": "Biofisiologia"
  },
  {
    "id": 111,
    "question": "L’apparato locomotore è costituito da:",
    "options": {
      "A": "Ossa, articolazioni e muscoli scheletrici",
      "B": "Ossa e articolazioni",
      "C": "Ossa, articolazioni, muscoli scheletrici e muscolo cardiaco",
      "D": "Ossa, articolazioni, organi interni"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Ossa, articolazioni e muscoli scheletrici.",
    "category": "Biofisiologia"
  },
  {
    "id": 112,
    "question": "L’apparato respiratorio:",
    "options": {
      "A": "Ha la funzione di permettere l’ingresso di ossigeno nell’organismo e l’espulsione dell’anidride carbonica, al fine di fornire ossigeno da utilizzare nel processo di respirazione cellulare.",
      "B": "Ha la funzione di produrre energia",
      "C": "Ha funzione di sostentamento",
      "D": "Ha funzione anabolica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Ha la funzione di permettere l’ingresso di ossigeno nell’organismo e l’espulsione dell’anidride carbonica, al fine di fornire ossigeno da utilizzare nel processo di respirazione cellulare..",
    "category": "Biofisiologia"
  },
  {
    "id": 113,
    "question": "L’apparto cardiocircolatorio:",
    "options": {
      "A": "È costituito da cuore, vasi sanguigni e polmoni",
      "B": "È costituito da cuore, vasi sanguigni, in cui scorre il sangue",
      "C": "Include quattro tipi di vasi: arterie, capillari, vene ed assoni",
      "D": "Assolve funzioni endocrine"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. È costituito da cuore, vasi sanguigni, in cui scorre il sangue.",
    "category": "Biofisiologia"
  },
  {
    "id": 114,
    "question": "L’auxologia è:",
    "options": {
      "A": "La scienza che studia l’accrescimento e la maturazione somatica",
      "B": "La scienza che studia il movimento",
      "C": "Un approccio speculativo alla tecnica",
      "D": "Un tipo di lavoro muscolare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La scienza che studia l’accrescimento e la maturazione somatica.",
    "category": "Biofisiologia"
  },
  {
    "id": 115,
    "question": "L’energia per la contrazione muscolare è fornita:",
    "options": {
      "A": "Dalla demolizione delle proteine dei glucidi",
      "B": "Dalla risintesi dell’adenosintrifosfato",
      "C": "Dalla scissione dell’emoglobina",
      "D": "Dalla scissione dell’adenosintrifosfato"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dalla scissione dell’adenosintrifosfato.",
    "category": "Biofisiologia"
  },
  {
    "id": 116,
    "question": "L’idrocuzione, comunemente chiamata colpo d’acqua, è una sincope acquatica dovuta a quali fattori?",
    "options": {
      "A": "Termico e digestivo",
      "B": "Termico, traumatico, allergico e digestivo",
      "C": "Dovuti all’età avanzata",
      "D": "Psicologico e fisiologico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Termico, traumatico, allergico e digestivo.",
    "category": "Biofisiologia"
  },
  {
    "id": 117,
    "question": "La capacità vitale è:",
    "options": {
      "A": "La quantità di sangue pompata dal cuore ogni minuto",
      "B": "La misura del torace in massima inspirazione",
      "C": "Il massimo volume di aria che viene inspirato ed espirato durante un atto respiratorio forzato",
      "D": "Il tempo massimo di resistenza in apnea"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Il massimo volume di aria che viene inspirato ed espirato durante un atto respiratorio forzato.",
    "category": "Biofisiologia"
  },
  {
    "id": 118,
    "question": "La caratteristica di base dell’apparato muscolare è:",
    "options": {
      "A": "L’elasticità",
      "B": "La flessibilità",
      "C": "La solidità",
      "D": "La contrattilità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La contrattilità 12.",
    "category": "Biofisiologia"
  },
  {
    "id": 119,
    "question": "La contrazione del muscolo scheletrico avviene grazie:",
    "options": {
      "A": "All’allontanamento reciproco dei filamenti di actina e miosina",
      "B": "All’avvicinamento e sovrapposizione reciproca dei filamenti di actina e miosina",
      "C": "All’avvicinamento delle miofibrille l’una all’altra",
      "D": "All’avvicinamento delle fibre bianche alle fibre rosse"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. All’avvicinamento e sovrapposizione reciproca dei filamenti di actina e miosina.",
    "category": "Biofisiologia"
  },
  {
    "id": 120,
    "question": "La fosfocreatina:",
    "options": {
      "A": "È utilizzata negli ultimi istanti di un lavoro muscolare",
      "B": "È rigenerata durante il riposo",
      "C": "Produce acido lattico",
      "D": "Necessita della presenza di ossigeno"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. È rigenerata durante il riposo.",
    "category": "Biofisiologia"
  },
  {
    "id": 121,
    "question": "La frequenza respiratoria è:",
    "options": {
      "A": "La quantità di aria inspirata al minuto",
      "B": "Il numero di atti respiratori al minuto",
      "C": "Il massimo volume di aria che viene inspirato ed espirato durante un atto respiratorio forzato",
      "D": "Il tempo massimo di resistenza in apnea"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il numero di atti respiratori al minuto.",
    "category": "Biofisiologia"
  },
  {
    "id": 122,
    "question": "La funzione del sangue è quella di:",
    "options": {
      "A": "Trasportare l’ossigeno",
      "B": "Trasportare l’ossigeno e l’anidride carbonica",
      "C": "Trasportare sostanze nutritive",
      "D": "Fluidificare la muscolatura"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Trasportare l’ossigeno.",
    "category": "Biofisiologia"
  },
  {
    "id": 123,
    "question": "La maggior parte delle leve ossee è di:",
    "options": {
      "A": "Prima specie",
      "B": "Seconda specie",
      "C": "Terza specie",
      "D": "Quarta specie"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Terza specie.",
    "category": "Biofisiologia"
  },
  {
    "id": 124,
    "question": "La normale frequenza cardiaca in un adulto a riposo è:",
    "options": {
      "A": "40-55",
      "B": "60-80",
      "C": "80-120",
      "D": "100-140"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 60-80.",
    "category": "Biofisiologia"
  },
  {
    "id": 125,
    "question": "La percentuale di grasso corporeo negli uomini, rispetto al peso totale, è del:",
    "options": {
      "A": "10-12%",
      "B": "13-15%",
      "C": "15-18%",
      "D": "19-22%"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 10-12%.",
    "category": "Biofisiologia"
  },
  {
    "id": 126,
    "question": "La percentuale di grasso corporeo nelle donne, rispetto al peso totale, è del:",
    "options": {
      "A": "0-15%",
      "B": "15-20%",
      "C": "20-22%",
      "D": "23-25 %"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 15-20%.",
    "category": "Biofisiologia"
  },
  {
    "id": 127,
    "question": "La piccola circolazione è il percorso sanguigno che collega:",
    "options": {
      "A": "Cuore e polmoni",
      "B": "I capillari",
      "C": "Cuore e capillari",
      "D": "Capillari e arteriole"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Cuore e polmoni.",
    "category": "Biofisiologia"
  },
  {
    "id": 128,
    "question": "La quantità di sangue nel corpo umano, rispetto al peso totale, ammonta a:",
    "options": {
      "A": "8%",
      "B": "10%",
      "C": "12%",
      "D": "15%"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 8%.",
    "category": "Biofisiologia"
  },
  {
    "id": 129,
    "question": "La ventilazione polmonare avviene per:",
    "options": {
      "A": "La contrazione del muscolo diaframma",
      "B": "La contrazione del diaframma e dei muscoli intercostali",
      "C": "La contrazione della muscolatura addominale",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La contrazione del diaframma e dei muscoli intercostali.",
    "category": "Biofisiologia"
  },
  {
    "id": 130,
    "question": "Le arterie sono:",
    "options": {
      "A": "Vasi sanguigni che vanno dai capillari al cuore",
      "B": "Vasi che trasportano sangue ricco di ossigeno",
      "C": "Vasi che trasportano sangue povero di ossigeno",
      "D": "Vasi sanguigni che vanno dal cuore ai capillari"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Vasi sanguigni che vanno dal cuore ai capillari 13.",
    "category": "Biofisiologia"
  },
  {
    "id": 131,
    "question": "Le emorragie esterne possono interessare:",
    "options": {
      "A": "Le braccia e le gambe",
      "B": "Gli arti, il torace e l’addome",
      "C": "Gli organi interni",
      "D": "Il midollo osseo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gli arti, il torace e l’addome.",
    "category": "Biofisiologia"
  },
  {
    "id": 132,
    "question": "Le fibre muscolari che esprimono forza e velocità sono:",
    "options": {
      "A": "Quelle rosse",
      "B": "Quelle intermedie",
      "C": "Quelle violacee",
      "D": "Quelle bianche"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Quelle bianche.",
    "category": "Biofisiologia"
  },
  {
    "id": 133,
    "question": "Le fibre muscolari rosse:",
    "options": {
      "A": "Sono più lente e più resistenti",
      "B": "Sono lente e poco resistenti",
      "C": "Sono poco resistenti e molto veloci",
      "D": "Sono più veloci e più resistenti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sono più lente e più resistenti.",
    "category": "Biofisiologia"
  },
  {
    "id": 134,
    "question": "Le fibre muscolari sono:",
    "options": {
      "A": "In alcuni muscoli solo bianche",
      "B": "In alcuni muscoli solo rosse",
      "C": "In alcuni muscoli violacee",
      "D": "Bianche e rosse in ogni muscolo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Bianche e rosse in ogni muscolo.",
    "category": "Biofisiologia"
  },
  {
    "id": 135,
    "question": "Le informazioni tattili appartengono alla sensibilità:",
    "options": {
      "A": "Esterocettiva",
      "B": "Propriocettiva",
      "C": "Interocettiva",
      "D": "Intuitiva"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Esterocettiva.",
    "category": "Biofisiologia"
  },
  {
    "id": 136,
    "question": "Le proteine sono formate da:",
    "options": {
      "A": "Fospolipidi",
      "B": "Acido deossiribonucleico",
      "C": "Aminoacidi",
      "D": "Polisaccaridi"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Aminoacidi.",
    "category": "Biofisiologia"
  },
  {
    "id": 137,
    "question": "Le vie respiratorie sono costituite da:",
    "options": {
      "A": "Naso, bocca, faringe, laringe, trachea, bronchi",
      "B": "Bocca, gola, polmoni",
      "C": "Bronchi, bronchioli, alveoli",
      "D": "Naso, bocca"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Naso, bocca, faringe, laringe, trachea, bronchi.",
    "category": "Biofisiologia"
  },
  {
    "id": 138,
    "question": "Negli alveoli polmonari avviene:",
    "options": {
      "A": "Il contatto tra vie aeree superiori e inferiori",
      "B": "Scambio gassoso con i capillari polmonari",
      "C": "Il passaggio dei neuroni",
      "D": "La reazione immunitaria"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Scambio gassoso con i capillari polmonari.",
    "category": "Biofisiologia"
  },
  {
    "id": 139,
    "question": "Nell’attività di resistenza:",
    "options": {
      "A": "Si devono reintegrare carboidrati e proteine",
      "B": "Si devono reintegrare liquidi e carboidrati",
      "C": "Si devono reintegrare proteine e sali minerali",
      "D": "Si devono reintegrare vitamine e proteine"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Si devono reintegrare liquidi e carboidrati.",
    "category": "Biofisiologia"
  },
  {
    "id": 140,
    "question": "Nella contrazione concentrica il muscolo:",
    "options": {
      "A": "Rimane della stessa lunghezza",
      "B": "Si accorcia",
      "C": "Si allunga",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Si accorcia.",
    "category": "Biofisiologia"
  },
  {
    "id": 141,
    "question": "Nella fase espiratoria:",
    "options": {
      "A": "La trachea si irrigidisce",
      "B": "I muscoli intercostali e il diaframma si rilasciano",
      "C": "I muscoli intercostali e il diaframma si contraggono",
      "D": "Svolge un ruolo fondamentale l’esofago"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. I muscoli intercostali e il diaframma si rilasciano.",
    "category": "Biofisiologia"
  },
  {
    "id": 142,
    "question": "Nelle vene scorre sangue generalmente:",
    "options": {
      "A": "Ricco di ossigeno",
      "B": "Da distribuire a tutto l’organismo nel grande circolo",
      "C": "Nel quale sono presenti ossigeno e anidride carbonica in egual misura",
      "D": "Povero di ossigeno"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Povero di ossigeno.",
    "category": "Biofisiologia"
  },
  {
    "id": 143,
    "question": "Per gittata cardiaca si intende",
    "options": {
      "A": "La forza che il sangue esercita sulla parete dei vasi",
      "B": "La quantità di sangue che passa nei tessuti al minuto",
      "C": "La quantità di sangue pompato al ventricolo al minuto",
      "D": "Il numero dei battiti al minuto"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La quantità di sangue pompato al ventricolo al minuto.",
    "category": "Biofisiologia"
  },
  {
    "id": 144,
    "question": "Qual è il corretto ordine, dalla più semplice alla più complessa, delle seguenti strutture?",
    "options": {
      "A": "Cellula, tessuto, organo, sistema",
      "B": "Sistema, cellula, organo, tessuto",
      "C": "Cellula, organo, sistema, tessuto",
      "D": "Tessuto, cellula,, sistema, organo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Cellula, tessuto, organo, sistema.",
    "category": "Biofisiologia"
  },
  {
    "id": 145,
    "question": "Qual è l’unità di misura del metabolismo?",
    "options": {
      "A": "La caloria",
      "B": "Il picco di lattato",
      "C": "La sommatoria tra il consumo di ossigeno e le pulsazioni cardiache",
      "D": "Il Newton"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La caloria.",
    "category": "Biofisiologia"
  },
  {
    "id": 146,
    "question": "Qual è la parte del cuore da cui prende avvio il grande circolo sanguigno?",
    "options": {
      "A": "Il ventricolo sinistro",
      "B": "L’atrio sinistro",
      "C": "Il ventricolo destro",
      "D": "L’atrio destro"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il ventricolo sinistro.",
    "category": "Biofisiologia"
  },
  {
    "id": 147,
    "question": "Qual è la sede degli scambi respiratori?",
    "options": {
      "A": "Bronchioli",
      "B": "Bronchi",
      "C": "Alveoli",
      "D": "Trachea"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Alveoli.",
    "category": "Biofisiologia"
  },
  {
    "id": 148,
    "question": "Quale di queste affermazioni è corretta?",
    "options": {
      "A": "Le fibre rosse sono meno forti ma più resistenti delle bianche",
      "B": "Le fibre bianche hanno principalmente metabolismo aerobico",
      "C": "Le fibre rosse sono meno irrorate dal sangue delle bianche",
      "D": "Le fibre bianche hanno principalmente funzione di sostegno"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Le fibre rosse sono meno forti ma più resistenti delle bianche.",
    "category": "Biofisiologia"
  },
  {
    "id": 149,
    "question": "Quale di questi sistemi fa innalzare la frequenza cardiaca?",
    "options": {
      "A": "Sistema nervoso simpatico",
      "B": "Sistema nervoso parasimpatico",
      "C": "Sistema nervoso volontario",
      "D": "Nessuna delle precedenti risposte"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sistema nervoso simpatico.",
    "category": "Biofisiologia"
  },
  {
    "id": 150,
    "question": "Quale muscolo interviene principalmente nella meccanica respiratoria?",
    "options": {
      "A": "Bicipite",
      "B": "Diaframma",
      "C": "Tricipite",
      "D": "Quadricipite"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Diaframma.",
    "category": "Biofisiologia"
  },
  {
    "id": 151,
    "question": "Quale tra le seguenti funzioni non è svolta dall’apparato osteoarticolare?",
    "options": {
      "A": "Produzione di globuli rossi",
      "B": "Trasmissione di impulsi",
      "C": "Sostegno",
      "D": "Protezione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Trasmissione di impulsi.",
    "category": "Biofisiologia"
  },
  {
    "id": 152,
    "question": "Quale, tra i seguenti, è un tipo di muscolo?",
    "options": {
      "A": "Striato",
      "B": "Grasso",
      "C": "Rosso",
      "D": "Allungato"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Striato.",
    "category": "Biofisiologia"
  },
  {
    "id": 153,
    "question": "Quali di questi principi alimentari è calorico?",
    "options": {
      "A": "Acqua",
      "B": "Vitamine",
      "C": "Sali minerali",
      "D": "Proteine"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Proteine.",
    "category": "Biofisiologia"
  },
  {
    "id": 154,
    "question": "Quali sono i fattori che influenzano la forza massimale di un muscolo?",
    "options": {
      "A": "La lunghezza e la sezione trasversa delle fibre che lo compongono",
      "B": "La capacità di reclutamento di unità motorie da parte del sistema nervoso",
      "C": "Il numero delle fibre che lo compongono",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "Biofisiologia"
  },
  {
    "id": 155,
    "question": "Quali sono i principi alimentari?",
    "options": {
      "A": "Proteine - grassi o lipidi - glucidi o carboidrati - sali minerali - vitamine - acqua",
      "B": "Mangiare sano – Svolgere regolare attività fisica – Riposare",
      "C": "Vitamina A – Vitamina B – Vitamina C",
      "D": "Stomaco – intestino tenue – intestino crasso"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Proteine - grassi o lipidi - glucidi o carboidrati - sali minerali - vitamine - acqua.",
    "category": "Biofisiologia"
  },
  {
    "id": 156,
    "question": "Quali tipi di ossa sono contenute nello scheletro?",
    "options": {
      "A": "Lunghe",
      "B": "Piatte e corte",
      "C": "Lunghe, piatte e corte",
      "D": "Lunghe, piatte, corte e sferiche"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Lunghe, piatte e corte.",
    "category": "Biofisiologia"
  },
  {
    "id": 157,
    "question": "Sono muscoli del corpo umano:",
    "options": {
      "A": "Omero, ulna, radio, sterno",
      "B": "Fegato cuore, intestino, stomaco",
      "C": "Tricipite, gastrocnemio, gran dorsale",
      "D": "Dura madre, perineo, scroto"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Tricipite, gastrocnemio, gran dorsale.",
    "category": "Biofisiologia"
  },
  {
    "id": 158,
    "question": "Sono organi interni del corpo umano",
    "options": {
      "A": "Omero, ulna, radio, sterno",
      "B": "Fegato cuore, intestino, stomaco",
      "C": "Tricipite, gastrocnemio, gran dorsale",
      "D": "Dura madre, perineo, scroto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Fegato cuore, intestino, stomaco.",
    "category": "Biofisiologia"
  },
  {
    "id": 159,
    "question": "Sono ossa del corpo umano:",
    "options": {
      "A": "Omero, ulna, radio, sterno",
      "B": "Fegato cuore, intestino, stomaco",
      "C": "Tricipite, gastrocnemio, gran dorsale",
      "D": "Dura madre, perineo, scroto"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Omero, ulna, radio, sterno.",
    "category": "Biofisiologia"
  },
  {
    "id": 160,
    "question": "Un adulto a riposo consuma in un minuto la seguente quantità di ossigeno:",
    "options": {
      "A": "0,03 litri",
      "B": "0,30 litri",
      "C": "3 litri",
      "D": "30 litri"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 0,30 litri.",
    "category": "Biofisiologia"
  },
  {
    "id": 161,
    "question": "Un atto respiratorio è composto:",
    "options": {
      "A": "Dalla fase d’inspirazione, d’espirazione e dalla breve pausa frapposta",
      "B": "Dalla fase d’inspirazione, d’espirazione e dalla lunga pausa frapposta",
      "C": "Dalla fase d’espirazione e dalla breve pausa frapposta",
      "D": "Da presa, trazione, spinta, recupero"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Dalla fase d’inspirazione, d’espirazione e dalla breve pausa frapposta.",
    "category": "Biofisiologia"
  },
  {
    "id": 162,
    "question": "Una caloria equivale a:",
    "options": {
      "A": "1 Joule",
      "B": "2,4 Joule",
      "C": "4,2 Joule",
      "D": "10 Joule"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. 4,2 Joule.",
    "category": "Biofisiologia"
  },
  {
    "id": 163,
    "question": "Una contrazione muscolare pliometrica è:",
    "options": {
      "A": "Concentrica esplosiva",
      "B": "Concentrica progressiva",
      "C": "Eccentrica progressiva",
      "D": "Eccentrica esplosiva"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Concentrica esplosiva.",
    "category": "Biofisiologia"
  },
  {
    "id": 164,
    "question": "Una contrazione si definisce isometrica quando:",
    "options": {
      "A": "Il muscolo non consuma energia",
      "B": "Il muscolo si contrae ma non si accorcia",
      "C": "Il muscolo non si contrae",
      "D": "Il muscolo ha un crampo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il muscolo si contrae ma non si accorcia.",
    "category": "Biofisiologia"
  },
  {
    "id": 165,
    "question": "Una modalità contrattile nella quale il muscolo si contrae ma non produce movimento è detta:",
    "options": {
      "A": "Eccentrica",
      "B": "Concentrica",
      "C": "Isometrica",
      "D": "Isotonica"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Isometrica.",
    "category": "Biofisiologia"
  },
  {
    "id": 166,
    "question": "A quale attività corrisponde la seguente definizione: lezione che prevede l’utilizzo di movimenti base dell’atletica leggera e di altri lavori di preparazione generale, alternati con movimenti specifici o del nuoto o di bonificazione generale, al fine di conseguire un reale effetto allenante?",
    "options": {
      "A": "Aquathletic",
      "B": "Aquaswimtraining",
      "C": "Aqua interval training",
      "D": "Aqua soft"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Aquathletic.",
    "category": "Fitness in acqua"
  },
  {
    "id": 167,
    "question": "A quale tipo di utente è più adatta l’aquafitness?",
    "options": {
      "A": "All’amatore",
      "B": "A chi cerca l’allenamento e la performance",
      "C": "A chi vuole imparare a nuotare",
      "D": "A chi deve conseguire il brevetto di assistente bagnanti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. All’amatore.",
    "category": "Fitness in acqua"
  },
  {
    "id": 168,
    "question": "A quale tipo di utente è più adatto l’aquaswimtraining?",
    "options": {
      "A": "A chi cerca l’allenamento e la performance",
      "B": "All’amatore",
      "C": "Al pallanuotista",
      "D": "All’assistente bagnanti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. A chi cerca l’allenamento e la performance.",
    "category": "Fitness in acqua"
  },
  {
    "id": 169,
    "question": "Cosa deve conoscere un istruttore di aquagym?",
    "options": {
      "A": "La profondità dell’acqua",
      "B": "I tempi minimi e massimi di esecuzione del gesto",
      "C": "I nomi degli allievi",
      "D": "I codici di comunicazione del nuoto agonistico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. I tempi minimi e massimi di esecuzione del gesto.",
    "category": "Fitness in acqua"
  },
  {
    "id": 170,
    "question": "Gli attrezzi utilizzati in aquafitness si suddividono in:",
    "options": {
      "A": "Cinture, cavigliere, manubri e tubi",
      "B": "Attrezzi galleggianti, di resistenza, e per il galleggiamento",
      "C": "Piccoli, medi e grandi",
      "D": "Utili e palliativi"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Attrezzi galleggianti, di resistenza, e per il galleggiamento.",
    "category": "Fitness in acqua"
  },
  {
    "id": 171,
    "question": "Il fitness in acqua si suddivide in due grandi categorie:",
    "options": {
      "A": "Aquarelax e aquagym",
      "B": "Aquafitness e aquatraining",
      "C": "Acqua alta e acqua bassa",
      "D": "Ginnastica in acqua e aquagym"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Aquafitness e aquatraining.",
    "category": "Fitness in acqua"
  },
  {
    "id": 172,
    "question": "In cosa si differenziano le lezioni di ginnastica in acqua svolte in acqua bassa rispetto a quelle in acqua alta?",
    "options": {
      "A": "Assenza degli ausili didattici",
      "B": "Tipologia delle esercitazioni proposte",
      "C": "Presenza dell’accompagnamento di una base musicale",
      "D": "Utilizzo di attrezzi"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Tipologia delle esercitazioni proposte.",
    "category": "Fitness in acqua"
  },
  {
    "id": 173,
    "question": "L’aquatic gym è caratterizzata da:",
    "options": {
      "A": "L’utilizzo della musica come elemento determinante la velocità di esecuzione della coreografia",
      "B": "L’utilizzo della musica come elemento determinante la velocità di esecuzione degli esercizi",
      "C": "L’utilizzo della musica come elemento determinante la velocità di esecuzione dei movimenti",
      "D": "L’utilizzo della musica come sottofondo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’utilizzo della musica come elemento determinante la velocità di esecuzione degli esercizi.",
    "category": "Fitness in acqua"
  },
  {
    "id": 174,
    "question": "L’aquatraining è un’attività",
    "options": {
      "A": "Di intensità medio-alta, rivolta a chi ricerca l’allenamento e la performance",
      "B": "Elementare, introduttiva al mondo del fitness acquatico",
      "C": "Che mira principalmente al mantenimento dell’efficienza fisica",
      "D": "Rivolta ad un pubblico amatoriale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Di intensità medio-alta, rivolta a chi ricerca l’allenamento e la performance.",
    "category": "Fitness in acqua"
  },
  {
    "id": 175,
    "question": "La ginnastica in acqua si può fare in:",
    "options": {
      "A": "Acqua bassa",
      "B": "Acqua bassa- alta",
      "C": "Acqua bassa-media",
      "D": "Acqua bassa-media-alta"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Acqua bassa-media-alta.",
    "category": "Fitness in acqua"
  },
  {
    "id": 176,
    "question": "Le cinture sono uno strumento basilare per il lavoro di fitness in acqua alta:",
    "options": {
      "A": "Sì",
      "B": "No",
      "C": "A volte",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sì.",
    "category": "Fitness in acqua"
  },
  {
    "id": 177,
    "question": "Nel fitness in acqua il lavoro degli arti superiori",
    "options": {
      "A": "Rappresenta il contenuto principale della lezione",
      "B": "Non ha alcuna finalità",
      "C": "Viene utilizzato soltanto per esercizi specifici",
      "D": "È di notevole importanza nel mantenimento della postura e dell’equilibrio"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. È di notevole importanza nel mantenimento della postura e dell’equilibrio.",
    "category": "Fitness in acqua"
  },
  {
    "id": 178,
    "question": "Nell’aquagym come si differenzia il concetto di resistenza in un lavoro a terra e in un lavoro in acqua?",
    "options": {
      "A": "A terra si spinge verso l’alto contro la forza di gravità, in acqua verso il basso contro la spinta idrostatica",
      "B": "È indifferente",
      "C": "A terra si spinge verso il basso in sintonia con la forza di gravità, in acqua verso l’alto in sintonia con la spinta idrostatica",
      "D": "A terra si sfrutta la spinta idrostatica, in acqua si sfrutta la gravità"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. A terra si spinge verso l’alto contro la forza di gravità, in acqua verso il basso contro la spinta idrostatica.",
    "category": "Fitness in acqua"
  },
  {
    "id": 179,
    "question": "Nell’aquaswimtraining la difficoltà dell’esercizio aumenta o diminuisce in funzione di:",
    "options": {
      "A": "Posizione del corpo",
      "B": "Posizione del capo",
      "C": "Posizione degli arti superiori",
      "D": "Posizione degli arti inferiori"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Posizione degli arti superiori.",
    "category": "Fitness in acqua"
  },
  {
    "id": 180,
    "question": "Nella fase centrale di una lezione di ginnastica in acqua, bisogna:",
    "options": {
      "A": "Proporre esercizi opportunamente programmati in relazione all’obiettivo",
      "B": "Evitare esercizi con intensità troppo blanda o sottosoglia",
      "C": "Preoccuparsi che gli esercizi vengano eseguiti biomeccanicamente in modo corretto",
      "D": "Tutte le risposte precedenti sono corrette"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti sono corrette.",
    "category": "Fitness in acqua"
  },
  {
    "id": 181,
    "question": "Nella ginnastica in acqua, per fare resistenza occorre lavorare:",
    "options": {
      "A": "Spingendo verso l’alto",
      "B": "Spingendo verso il basso",
      "C": "In modo circolare",
      "D": "Spingendo in alto e in basso in alternanza"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Spingendo in alto e in basso in alternanza.",
    "category": "Fitness in acqua"
  },
  {
    "id": 182,
    "question": "Parametri e variabili che possono influire su una lezione di ginnastica in acqua:",
    "options": {
      "A": "L’istruttore, la musica, tipo di vasca",
      "B": "L’inquadramento professionale dell’istruttore",
      "C": "La musica, il bordo, la strumentazione",
      "D": "La profondità, la tipologia di allievi, la temperatura dell’acqua"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La profondità, la tipologia di allievi, la temperatura dell’acqua.",
    "category": "Fitness in acqua"
  },
  {
    "id": 183,
    "question": "Parlando di ginnastica in acqua o a terra:",
    "options": {
      "A": "La massa corporea non condiziona l’esecuzione di un esercizio a terra",
      "B": "La massa corporea non condiziona l’esecuzione di un esercizio in acqua",
      "C": "La massa corporea non condiziona l’esecuzione di un esercizio a terra",
      "D": "Non vi è alcuna differenza"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La massa corporea non condiziona l’esecuzione di un esercizio a terra.",
    "category": "Fitness in acqua"
  },
  {
    "id": 184,
    "question": "Per un istruttore di ginnastica in acqua, quale tra queste caratteristiche è più importante?",
    "options": {
      "A": "Capacità di mostrare un gesto tecnico",
      "B": "Saper utilizzare la musica",
      "C": "Conoscere gli attrezzi",
      "D": "Capacità condizionali"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Capacità di mostrare un gesto tecnico.",
    "category": "Fitness in acqua"
  },
  {
    "id": 185,
    "question": "Quale tipo di lezione viene strutturata in ripetizioni di blocchi uniti ed è definita precoreografata?",
    "options": {
      "A": "L’aquatic gym style",
      "B": "L’aquatic gym",
      "C": "L’aquaswimtraining",
      "D": "L’aerobica in acqua"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. L’aerobica in acqua.",
    "category": "Fitness in acqua"
  },
  {
    "id": 186,
    "question": "Suddivisione di una lezione di aquafitness.",
    "options": {
      "A": "Riscaldamento, ripetizione di esercizi conosciuti, defaticamento",
      "B": "Riscaldamento, esercizi specifici, defaticamento.",
      "C": "Presa, trazione, spinta, recupero",
      "D": "Riscaldamento, fase centrale, defaticamento e/o stretching"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Riscaldamento, fase centrale, defaticamento e/o stretching.",
    "category": "Fitness in acqua"
  },
  {
    "id": 187,
    "question": "Tutti quei movimenti di assestamento che servono a fermare i flussi d’acqua, a riprendere l’equilibrio ed a consentire di poter terminare un movimento e/o predisporre quello successivo, vengono definiti come:",
    "options": {
      "A": "Movimenti di transizione",
      "B": "Movimenti di traslazione",
      "C": "Movimenti di trasformazione",
      "D": "Movimenti di torsione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Movimenti di transizione.",
    "category": "Fitness in acqua"
  },
  {
    "id": 188,
    "question": "Un lavoro di aquagym in acqua bassa si svolge:",
    "options": {
      "A": "Con acqua ad altezza ginocchia",
      "B": "Con acqua profonda max 0,80 cm",
      "C": "Con l’acqua ad un’altezza tra l’ombelico e il petto",
      "D": "Con acqua ad altezza cosce"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Con l’acqua ad un’altezza tra l’ombelico e il petto.",
    "category": "Fitness in acqua"
  },
  {
    "id": 189,
    "question": "Una coreografia deve essere sviluppata in forma:",
    "options": {
      "A": "Graduale e crescente",
      "B": "Graduale e decrescente",
      "C": "Non graduale e alternata",
      "D": "Estemporanea e libertaria"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Graduale e crescente.",
    "category": "Fitness in acqua"
  },
  {
    "id": 190,
    "question": "Attività terrestre ed acquatica:",
    "options": {
      "A": "Differiscono per temperatura differente dei due elementi",
      "B": "Sono analoghe in quanto ciò che si apprende a terra è semplicemente applicabile in acqua in posizione orizzontale (le abilità motorie sono trasferibili)",
      "C": "A terra è tutto più difficile a causa della forza di gravità",
      "D": "In acqua andranno creati presupposti differenti per poter apprendere nuove abilità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. In acqua andranno creati presupposti differenti per poter apprendere nuove abilità 18.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 191,
    "question": "Attraverso quale percorso l’uomo diventa nuotatore?",
    "options": {
      "A": "Deve conoscere il principio di Archimede",
      "B": "Deve avere capacità innate",
      "C": "Deve avere una struttura fisica adeguata",
      "D": "Deve fare esperienze motorie specifiche"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Deve fare esperienze motorie specifiche.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 192,
    "question": "Come possono essere definiti gli schemi motori di base?",
    "options": {
      "A": "Capacità condizionali",
      "B": "Unità primarie del movimento umano",
      "C": "Unità secondarie del movimento umano",
      "D": "Capacità coordinative generali"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Unità primarie del movimento umano.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 193,
    "question": "Come si applica il principio di multilateralità mirata?",
    "options": {
      "A": "Diversificando più possibile gli esercizi con il maggior numero possibile di esperienze motorie, sia positive sia negative",
      "B": "Variando continuamente le lezioni così gli allievi si divertono con cose sempre diverse",
      "C": "Favorendo, attraverso la variazione degli stimoli positivi, l’esplorazione del ventaglio di esperienze motorie acquatiche, con consapevolezza",
      "D": "Riproponendo con costanza sempre gli stessi stimoli, con l’obbiettivo di instaurare l’indispensabile meccanicità dei movimenti, fondamentale nei processi di apprendimento"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Favorendo, attraverso la variazione degli stimoli positivi, l’esplorazione del ventaglio di esperienze motorie acquatiche, con consapevolezza.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 194,
    "question": "Come si sviluppano le abilità acquatiche?",
    "options": {
      "A": "L’individuo se adeguatamente stimolato, sviluppa autonomamente le abilità",
      "B": "Casualmente",
      "C": "L’individuo anche non stimolato sviluppa le abilità acquatiche",
      "D": "Le abilità motorie acquatiche devono essere apprese dall’individuo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Le abilità motorie acquatiche devono essere apprese dall’individuo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 195,
    "question": "Come sono inquadrati i tecnici nella FIN?",
    "options": {
      "A": "Al momento del loro tesseramento SIT",
      "B": "Al momento del conseguimento del titolo di istruttore",
      "C": "Al momento delle decisioni in merito del comitato regionale",
      "D": "Al momento della richiesta"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Al momento del loro tesseramento SIT.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 196,
    "question": "Con la nuova cultura , si è passati da una fase di addestramento ad una di educazione acquatica. Quali termini si possono utilizzare per descrivere questo concetto?",
    "options": {
      "A": "Automatizzazione del gesto- coordinazione-sensopercezione",
      "B": "Rispetto delle fasi sensibili- ampliamento mappa motoria- multilateralità",
      "C": "Avviamento-ambientamento- progressioni didattiche",
      "D": "Addestramento al nuoto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Rispetto delle fasi sensibili- ampliamento mappa motoria- multilateralità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 197,
    "question": "Cosa s’intende per sensopercezione?",
    "options": {
      "A": "Presupposto della prestazione sportiva",
      "B": "Processo di scoperta, analisi ed elaborazione di informazioni e sensazioni attraverso l’integrazione di afferenze provenienti dagli analizzatori",
      "C": "Varietà di stimoli proposti; deve essere massima dal punto di vista spaziale, temporale, della varietà",
      "D": "Capacità coordinativa speciale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Processo di scoperta, analisi ed elaborazione di informazioni e sensazioni attraverso l’integrazione di afferenze provenienti dagli analizzatori.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 198,
    "question": "Cosa sono gli schemi motori acquatici?",
    "options": {
      "A": "Dei movimenti naturali ( come gli schemi motori di base )",
      "B": "Delle abilità motorie apprese in forma cosciente",
      "C": "Schemi di gioco, con movimenti preordinati, utilizzati nella pallanuoto",
      "D": "Acquisizioni acquatiche elementari apprese in forma autonoma ( senza l’intervento dell’istruttore )"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Delle abilità motorie apprese in forma cosciente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 199,
    "question": "Cosa sono le capacità motorie?",
    "options": {
      "A": "Presupposti, potenzialità funzionali e motorie per l’apprendimento di abilità motorie",
      "B": "Modelli di movimento basati sugli schemi motori",
      "C": "Azioni motorie che realizzano una data tecnica sportiva",
      "D": "Elementi essenziali del movimento facenti capo le abilità motorie"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Presupposti, potenzialità funzionali e motorie per l’apprendimento di abilità motorie.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 200,
    "question": "Cosa sono le diversificazioni didattiche?",
    "options": {
      "A": "Continua diversificazione degli stimolii",
      "B": "Utilizzo di supporti (tavoletta, pull- buoy)",
      "C": "Avvicendamento degli istruttori",
      "D": "Variazione di registri comunicativi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Continua diversificazione degli stimolii.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 201,
    "question": "Cosa sono le fasi sensibili?",
    "options": {
      "A": "Capacità di differenziazione cinestetica",
      "B": "Periodi della vita particolarmente favorevoli allo sviluppo degli esercizi sensopercettivi",
      "C": "Periodi nella crescita particolarmente favorevoli allo sviluppo della forza",
      "D": "Fasi dello sviluppo psicofisico durante le quali si può lavorare con più efficacia sulle funzioni psicomotorie, sulle capacità fisiche, coordinative e cognitivo-affettive"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Fasi dello sviluppo psicofisico durante le quali si può lavorare con più efficacia sulle funzioni psicomotorie, sulle capacità fisiche, coordinative e cognitivo-affettive.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 202,
    "question": "Da cosa dipendono le criticità del percorso motorio acquatico?",
    "options": {
      "A": "Dalle peculiarità del mezzo e dal fatto che l’uomo non è un animale acquatico",
      "B": "Dalle condizioni ambientali e da eventuali barriere alla comunicazione",
      "C": "Dalle progressioni didattiche adottate dalla scuola nuoto federale",
      "D": "È un percorso che non presenta alcuna criticità"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Dalle peculiarità del mezzo e dal fatto che l’uomo non è un animale acquatico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 203,
    "question": "I fattori che condizionano l’accrescimento sono:",
    "options": {
      "A": "Fattori endogeni ed esogeni",
      "B": "Fattori muscolari ed energetici",
      "C": "Fattori genetici e psicologici",
      "D": "Fattori alimentarie psicologici"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Fattori endogeni ed esogeni.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 204,
    "question": "Il bagaglio motorio è:",
    "options": {
      "A": "Capacità di organizzare una azione motoria",
      "B": "L’equipaggiamento dell’atleta agonista",
      "C": "Il vissuto emotivo legato alla pratica sportiva",
      "D": "Raccolta di tutte le esperienze motorie vissute che hanno lasciato una traccia nel sistema nervoso centrale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Raccolta di tutte le esperienze motorie vissute che hanno lasciato una traccia nel sistema nervoso centrale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 205,
    "question": "Il procedimento euristico è:",
    "options": {
      "A": "Processo di scoperta, analisi ed elaborazione di informazioni e sensazioni",
      "B": "Una strategia applicabile agli sport di situazione",
      "C": "Rappresenta il presupposto fondamentale per il progressivo affinamento del gesto",
      "D": "Qualsiasi procedimento non rigoroso (a carattere approssimativo, intuitivo, analogico, ecc) che consente di prevedere e rendere plausibile un risultato"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Qualsiasi procedimento non rigoroso (a carattere approssimativo, intuitivo, analogico, ecc) che consente di prevedere e rendere plausibile un risultato 20.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 206,
    "question": "Il ruolo dell’istruttore è:",
    "options": {
      "A": "Insegnare solo il gesto tecnico",
      "B": "Essere una figura di riferimento in piano vasca",
      "C": "Assistere alla sicurezza dei natanti",
      "D": "Pleonastico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Essere una figura di riferimento in piano vasca.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 207,
    "question": "In cosa consiste un apprendimento?",
    "options": {
      "A": "Nella modifica del comportamento di fronte ad un problema",
      "B": "Esecuzione corretta di un esercizio",
      "C": "Nella correzione di uno stile",
      "D": "Nel conseguimento di un brevetto tecnico"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Nella modifica del comportamento di fronte ad un problema.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 208,
    "question": "Indica l’ordine corretto delle fasi di una lezione di nuoto:",
    "options": {
      "A": "Riscaldamento – nucleo didattico – rinforzo nucleo didattico – rinforzo lezione precedente",
      "B": "Riscaldamento – rinforzo lezione precedente – nucleo didattico – rinforzo nucleo didattico",
      "C": "Rinforzo lezione precedente – riscaldamento – rinforzo nucleo didattico – nucleo didattico",
      "D": "Presa – trazione – spinta - recupero"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Riscaldamento – rinforzo lezione precedente – nucleo didattico – rinforzo nucleo didattico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 209,
    "question": "Insegnare a nuotare significa prima di tutto:",
    "options": {
      "A": "Trasmettere delle tecniche",
      "B": "Educare indipendentemente dall’acqua",
      "C": "Educare all’acqua",
      "D": "Educare attraverso l’acqua"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Educare attraverso l’acqua.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 210,
    "question": "L’adattamento è:",
    "options": {
      "A": "Capacità di esercitare un controllo dinamico dell’azione motoria all’interno di una situazione, che può presentare continue variazioni",
      "B": "Capacità di esercitare un controllo emotivo durante una prestazione sportiva",
      "C": "Capacità di conformarsi alle aspettative dell’insegnante",
      "D": "Capacità di adattarsi alle diverse temperature dell’acqua"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Capacità di esercitare un controllo dinamico dell’azione motoria all’interno di una situazione, che può presentare continue variazioni.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 211,
    "question": "L’apprendimento deve avvenire con:",
    "options": {
      "A": "Elasticità e trasferibilità",
      "B": "Rigidità e intrasferibilità",
      "C": "Chiusura e incomunicabilità",
      "D": "Rapidità ed efficienza"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Elasticità e trasferibilità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 212,
    "question": "L’apprendimento:",
    "options": {
      "A": "È un’esercitazione",
      "B": "È un processo psichico",
      "C": "È un’abilità motoria",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. È un processo psichico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 213,
    "question": "L’attività motoria svolta in situazione di apprendimento deve costituire un carico motorio conforme ai principi di:",
    "options": {
      "A": "Intuizione",
      "B": "Imitazione",
      "C": "Esaltazione",
      "D": "Multilateralità e polivalenza"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Multilateralità e polivalenza.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 214,
    "question": "L’azione educativa al nuoto si concretizza attraverso due strade, quali?",
    "options": {
      "A": "Educazione al nuoto - educazione attraverso il nuoto",
      "B": "Educazione al nuoto - educazione sul nuoto",
      "C": "Educazione al nuoto - educazione per il nuoto",
      "D": "Educazione sul nuoto - educazione nel nuoto"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Educazione al nuoto - educazione attraverso il nuoto.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 215,
    "question": "L’esercizio fisico contribuisce a sviluppare:",
    "options": {
      "A": "Il corpo e la psiche del bambino",
      "B": "La resistenza ai carichi di lavoro",
      "C": "Il sistema endocrino",
      "D": "Il controllo dell’ansia"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il corpo e la psiche del bambino.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 216,
    "question": "L’età biologica:",
    "options": {
      "A": "Corrisponde all’età cronologica",
      "B": "Valuta il tempo trascorso dalla nascita",
      "C": "Non è conoscibile",
      "D": "È la vera età psicofisica e rispecchia il livello di maturazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. È la vera età psicofisica e rispecchia il livello di maturazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 217,
    "question": "La cultura comprende:",
    "options": {
      "A": "Esplorazione, galleggiamento, propulsione grezza",
      "B": "Tecnica degli stili e dei tuffi",
      "C": "Acquisizione delle sole capacità condizionali",
      "D": "La preparazione dell’insegnante"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Esplorazione, galleggiamento, propulsione grezza.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 218,
    "question": "La multilateralità:",
    "options": {
      "A": "È l’utilizzo di una vasta gamma di esercizi per le capacità condizionali",
      "B": "Consente nella pratica di più discipline sportive",
      "C": "Può essere generale e mirata",
      "D": "C - Può essere generale, specifica e mirata"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. C - Può essere generale, specifica e mirata.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 219,
    "question": "La parola abilità è il fulcro:",
    "options": {
      "A": "Della scuola di nuoto",
      "B": "Della scuola di nuoto sincronizzato",
      "C": "Della scuola di nuoto per salvamento",
      "D": "Della scuola delle abilità acquatiche"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Della scuola delle abilità acquatiche.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 220,
    "question": "La prestazione è:",
    "options": {
      "A": "Esito misurabile della contrazione muscolare",
      "B": "Esito misurabile di un’azione sportiva completa",
      "C": "Esito misurabile della velocità di gara",
      "D": "Esito misurabile di un test lattacidemico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Esito misurabile di un’azione sportiva completa.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 221,
    "question": "La rappresentazione cognitiva di posizione ed estensione del corpo nello spazio si dice:",
    "options": {
      "A": "Schema motorio",
      "B": "Schema corporeo",
      "C": "Schema semplice",
      "D": "Schema olistico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Schema corporeo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 222,
    "question": "La sensibilità con cui si tratta l’acqua o si è in rapporto (simbiosi) con essa, determina l’efficienza e l’efficacia delle azioni(e in futuro delle prestazioni). Tutto questo è determinato da:",
    "options": {
      "A": "La coordinazione",
      "B": "La sensopercezione",
      "C": "Le abilità acquatiche",
      "D": "La poliedricità"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La sensopercezione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 223,
    "question": "La sensopercezione è:",
    "options": {
      "A": "Attività conoscitiva che permette di percepire gli stimoli provenienti dagli analizzatori",
      "B": "Un esercizio per migliorare la sensibilità degli allievi",
      "C": "Un insieme di stimoli atti a migliorare la prestazione",
      "D": "Una capacità condizionale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Attività conoscitiva che permette di percepire gli stimoli provenienti dagli analizzatori.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 224,
    "question": "La varietà di stimoli proposti, che deve essere massima dal punto di vista spaziale, temporale, della varietà, viene definita:",
    "options": {
      "A": "Polisportività",
      "B": "Multidisciplinarità",
      "C": "Multipolarità",
      "D": "Multilateralità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Multilateralità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 225,
    "question": "Le abilità motorie:",
    "options": {
      "A": "Sono identificabili come tecniche sportive",
      "B": "Non sono relazionabili alle capacità coordinative",
      "C": "Sono delle abilità innate presenti in ogni individuo",
      "D": "Sono legate esclusivamente ad aspetti condizionali"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sono identificabili come tecniche sportive.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 226,
    "question": "Le abilità motorie:",
    "options": {
      "A": "Sono dei presupposti di prestazione che con il tempo si automatizzano",
      "B": "Non sono relazionabili alle capacità coordinative",
      "C": "Sono delle abilità innate presenti in ogni individuo",
      "D": "Non fanno riferimento alle tecniche"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sono dei presupposti di prestazione che con il tempo si automatizzano.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 227,
    "question": "Le capacità coordinative sono legate allo sviluppo del:",
    "options": {
      "A": "Sistema nervoso",
      "B": "Apparato respiratorio",
      "C": "Core business",
      "D": "Apparato muscolare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sistema nervoso.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 228,
    "question": "Le capacità motorie educate ed orientate sono:",
    "options": {
      "A": "La mobilità articolare",
      "B": "Le capacità coordinative",
      "C": "Le capacità condizionali",
      "D": "Abilità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Abilità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 229,
    "question": "Le difficoltà che si possono incontrare nell’insegnamento delle virate generalmente sono dovute:",
    "options": {
      "A": "Alla correzione delle cause degli errori anziché concentrarsi sugli effetti che generano le difficoltà",
      "B": "Al fatto che si tratta di movenze impossibili da acquisire in fase di ambientamento",
      "C": "Al fatto che le virate devono essere apprese come abilità motorie distinte e meccanizzate adeguatamente",
      "D": "Al fatto che le virate devono essere apprese come insieme di abilità motorie semplici integrate fra loro attraverso lo stimolo e l’adattamento consapevole"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Al fatto che le virate devono essere apprese come insieme di abilità motorie semplici integrate fra loro attraverso lo stimolo e l’adattamento consapevole.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 230,
    "question": "Le fasi sensibili sono:",
    "options": {
      "A": "Periodi dello sviluppo caratterizzati da significativi miglioramenti per determinate capacità",
      "B": "Periodi dello sviluppo caratterizzati da significativi miglioramenti di tutte le capacità motorie",
      "C": "Periodi di particolare fragilità emotiva",
      "D": "Periodi dello sviluppo svantaggiosi per gli apprendimenti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Periodi dello sviluppo caratterizzati da significativi miglioramenti per determinate capacità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 231,
    "question": "Le società che intendono praticare gli sport acquatici nell’ambito della FIN:",
    "options": {
      "A": "Devono associarsi",
      "B": "Devono presentare la piscina",
      "C": "Devono richiedere la qualifica di Scuola nuoto federale",
      "D": "Devono affiliarsi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Devono affiliarsi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 232,
    "question": "Le tecniche sportive (quattro stili, virate, partenze, ecc.) sono:",
    "options": {
      "A": "Fasi di coordinazione fine",
      "B": "Capacità coordinative",
      "C": "Abilità motorie",
      "D": "Schemi motori acquatici"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Abilità motorie.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 233,
    "question": "Lo schema corporeo è:",
    "options": {
      "A": "La rappresentazione mentale nell’ambiente acqua",
      "B": "La consapevolezza della posizione del proprio corpo nella rana e nella farfalla",
      "C": "L’insieme delle capacità motorie",
      "D": "Rappresentazione e consapevolezza della posizione e dell’estensione del corpo nello spazio"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Rappresentazione e consapevolezza della posizione e dell’estensione del corpo nello spazio.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 234,
    "question": "Lo sviluppo della competenza motoria:",
    "options": {
      "A": "Non è in relazione con il talento sportivo",
      "B": "Precede il talento sportivo",
      "C": "Coincide con il talento sportivo",
      "D": "Segue il talento sportivo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Precede il talento sportivo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 235,
    "question": "Nella scuola nuoto vengono sviluppate maggiormente le capacità condizionali o quelle coordinative?",
    "options": {
      "A": "Entrambe alla pari",
      "B": "Capacità coordinative",
      "C": "Capacità condizionali",
      "D": "Nessuna delle due"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Capacità coordinative.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 236,
    "question": "Per cultura si intende:",
    "options": {
      "A": "L’insieme delle conoscenze sull’elemento acqua",
      "B": "La conoscenza dei prodotti usati per igienizzare l’acqua della piscina",
      "C": "Il livello scolastico medio degli allievi",
      "D": "Un percorso acquatico dove multilateralità, senso percezione e abilità sono i punti fondamentali"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un percorso acquatico dove multilateralità, senso percezione e abilità sono i punti fondamentali 23.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 237,
    "question": "Per imparare le tecniche degli stili, è più importante avere:",
    "options": {
      "A": "Buone capacità coordinative",
      "B": "Buone capacità condizionali",
      "C": "Buon ambientamento acquatico",
      "D": "Struttura fisica imponente"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Buon ambientamento acquatico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 238,
    "question": "Per multilateralità s’intende:",
    "options": {
      "A": "L’apprendimento del maggior numero di processi motori differenziando le esercitazioni",
      "B": "La proposta di molteplici esercizi",
      "C": "La proposta di esercizi volti allo sviluppo della lateralità",
      "D": "La variazione quantitativa della proposta in ricerca della specializzazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’apprendimento del maggior numero di processi motori differenziando le esercitazioni.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 239,
    "question": "Per quanti anni un allievo istruttore può mantenere la qualifica senza aggiornamento?",
    "options": {
      "A": "2 anni",
      "B": "3 anni",
      "C": "4 anni",
      "D": "5 anni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 3 anni.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 240,
    "question": "Per superare la concezione meccanicistica che costringe l’allievo in un percorso obbligato di avviamento – propulsione grezza – correzioni –progressione didattica dei 4 stili, bisogna perseguire gli obiettivi di fondo:",
    "options": {
      "A": "Flessibilità e trasferibilità delle abilità apprese – Strutturazione di una mappa motoria ricca ed elastica – Sviluppo di una competenza motoria",
      "B": "Durezza ed intrasferibilità delle abilità apprese – Strutturazione di una mappa motoria rigida ed analitica – Sviluppo condizionale",
      "C": "Progressione didattica del dorso e delfino",
      "D": "Capacità condizionali e coordinative"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Flessibilità e trasferibilità delle abilità apprese – Strutturazione di una mappa motoria ricca ed elastica – Sviluppo di una competenza motoria.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 241,
    "question": "Qual è il percorso formativo di un tecnico nella FIN?",
    "options": {
      "A": "Corsi istituzionali, inquadramento nelle società sportive, aggiornamenti obbligatori, specializzazioni",
      "B": "Corsi facoltativi, aggiornamenti periodici, valutazioni intermedie",
      "C": "Non esiste un percorso specifico",
      "D": "Inquadramento come atleti, tecnici, dirigenti sportivi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Corsi istituzionali, inquadramento nelle società sportive, aggiornamenti obbligatori, specializzazioni.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 242,
    "question": "Qual è la conseguenza di un approccio meccanicistico alla scuola d’acqua?",
    "options": {
      "A": "Nessuna",
      "B": "Completo fallimento didattico",
      "C": "Specializzazione precoce",
      "D": "Irrigidimento della mappa motoria"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Irrigidimento della mappa motoria.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 243,
    "question": "Qual è la premessa indispensabile per insegnare a nuotare?",
    "options": {
      "A": "Conoscere bene i propri allievi",
      "B": "Conoscere le caratteristiche psicofisiche di chi deve apprendere",
      "C": "Conoscere bene la tecnica natatoria",
      "D": "Conoscere sé stessi"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Conoscere le caratteristiche psicofisiche di chi deve apprendere.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 244,
    "question": "Quale delle seguenti affermazioni è errata?",
    "options": {
      "A": "Il settore salvamento è un organo del SIT",
      "B": "Il SIT si sviluppa in un’organizzazione centrale e una periferica",
      "C": "Il SIT è un organo tecnico della FIN",
      "D": "Gli allenatori di nuoto appartengono al SIT nazionale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il settore salvamento è un organo del SIT.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 245,
    "question": "Quale fase è assente nello sviluppo delle abilità motorie acquatiche?",
    "options": {
      "A": "Maturazione",
      "B": "Apprendimento",
      "C": "Sviluppo",
      "D": "Perfezionamento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Maturazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 246,
    "question": "Quale termine rappresenta il fulcro della scuola di abilità acquatiche?",
    "options": {
      "A": "Tecnica",
      "B": "Azione",
      "C": "Prestazione",
      "D": "Abilità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Abilità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 247,
    "question": "Quale tra i seguenti è un obiettivo specifico di un corso di nuoto?",
    "options": {
      "A": "Lo sviluppo di capacità sensopercettive e coordinative speciali",
      "B": "Lo sviluppo della forza muscolare",
      "C": "L’assumere una corretta postura",
      "D": "La crescita staturo-ponderale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Lo sviluppo di capacità sensopercettive e coordinative speciali.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 248,
    "question": "Quale tra le seguenti categorie non fa parte della FIN?",
    "options": {
      "A": "Atleti",
      "B": "Istruttori di nuoto",
      "C": "Cronometristi",
      "D": "Dirigenti sociali"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Cronometristi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 249,
    "question": "Quali aree compongono la personalità del soggetto?",
    "options": {
      "A": "morfologico-funzionale, intellettivo- cognitiva affettivo-emotiva, sociale",
      "B": "morfologico-funzionale, emotivo- empatica, intellettivo-cognitiva, socio-economica",
      "C": "emotivo-empatica, intellettivo- cognitiva, comunicativa, sociale",
      "D": "psicologica, sociale, emotiva, comunicativa"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. morfologico-funzionale, intellettivo- cognitiva affettivo-emotiva, sociale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 250,
    "question": "Quali delle seguenti non è una competenza della FIN?",
    "options": {
      "A": "Procurare i mezzi per partecipare alle competizioni natatorie e alle Olimpiadi",
      "B": "Organizzare i campionati del mondo di nuoto",
      "C": "Prevenzione e repressione del doping",
      "D": "Organizzazione dei campionati italiani di nuoto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Organizzare i campionati del mondo di nuoto.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 251,
    "question": "Quali di questi soggetti non fanno parte della FIN?",
    "options": {
      "A": "Medici sociali",
      "B": "Giudici",
      "C": "Atleti",
      "D": "Cronometristi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Cronometristi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 252,
    "question": "Quali parametri vanno considerati per determinare le potenzialità di un allievo?",
    "options": {
      "A": "Assetti e posture, livello del tono muscolare, coordinazione volontaria, organizzazione motoria",
      "B": "Motivazione, costituzione, coordinazione",
      "C": "Aspetti staturo-ponderali e neuro- fisiologici",
      "D": "Età anagrafica in relazione all’età biologica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Assetti e posture, livello del tono muscolare, coordinazione volontaria, organizzazione motoria.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 253,
    "question": "Quali sono gli obiettivi del nucleo didattico di una lezione di scuola nuoto?",
    "options": {
      "A": "Allenare in maniera efficace tutte le capacità condizionali",
      "B": "Verificare in maniera oggettiva gli obbiettivi raggiunti e consolidare le nuove abilità motorie acquisite",
      "C": "Migliorare la comunicazione tra istruttore e allievo",
      "D": "Stimolare le capacità coordinative con nuove esperienze motorie da trasformare in abilità motorie"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Stimolare le capacità coordinative con nuove esperienze motorie da trasformare in abilità motorie 25.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 254,
    "question": "Quali sono gli organi centrali della FIN?",
    "options": {
      "A": "L’assemblea nazionale, il presidente, il consiglio federale, il consiglio di presidenza, il collegio dei revisori dei conti",
      "B": "Le assemblee regionali, i presidenti regionali, i comitati regionali, i collegi regionali dei revisori dei conti, le assemblee provinciali, i presidenti provinciali, i comitati provinciali, i delegati provinciali, i fiduciari locali",
      "C": "Parlamento, senato, corte costituzionale",
      "D": "Il settore istruzione tecnica, il settore sanitario, il gruppo ufficiali gara, il settore squadre nazionali, il settore nuoto per tutti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’assemblea nazionale, il presidente, il consiglio federale, il consiglio di presidenza, il collegio dei revisori dei conti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 255,
    "question": "Quali sono gli organi tecnici della FIN?",
    "options": {
      "A": "L’assemblea nazionale, il presidente, il consiglio federale, il consiglio di presidenza, il collegio dei revisori dei conti",
      "B": "Le assemblee regionali, i presidenti regionali, i comitati regionali, i collegi regionali dei revisori dei conti, le assemblee provinciali, i presidenti provinciali, i comitati provinciali, i delegati provinciali, i fiduciari locali",
      "C": "Parlamento, senato, corte costituzionale",
      "D": "Il settore istruzione tecnica, il settore sanitario, il gruppo ufficiali gara, il settore squadre nazionali, il settore nuoto per tutti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’assemblea nazionale, il presidente, il consiglio federale, il consiglio di presidenza, il collegio dei revisori dei conti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 256,
    "question": "Quali sono gli scopi che si propone la FIN?",
    "options": {
      "A": "Formare gli istruttori",
      "B": "Organizzare eventi",
      "C": "Conquistare titoli olimpici",
      "D": "Promuovere, organizzare, disciplinare e diffondere le discipline natatorie"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Promuovere, organizzare, disciplinare e diffondere le discipline natatorie.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 257,
    "question": "Quali sono i doveri dei tecnici?",
    "options": {
      "A": "Di esercitare con lealtà sportiva le loro attività, osservando i principi, le norme e le consuetudini sportive nonché il Codice di comportamento sportivo",
      "B": "Di competere contro le altre attività sportive per finalizzare le utenze agli sport acquatici",
      "C": "Di perseguire la performance dei propri atleti",
      "D": "Di modificare i regolamenti, le norme e le consuetudini sportive nel caso si dimostrassero in contraddizione con i regolamenti federali"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Di esercitare con lealtà sportiva le loro attività, osservando i principi, le norme e le consuetudini sportive nonché il Codice di comportamento sportivo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 258,
    "question": "Quali sono i vantaggi derivanti dalla conoscenza delle fasi sensibili?",
    "options": {
      "A": "Evitare interventi pericolosi, permettere il miglior risultato, sfruttare l’occasione quando si propone e accettare il futuro nelle sue complicazioni",
      "B": "Possibilità di ottenere precocemente performance soddisfacenti",
      "C": "Evitare interventi tardivi, permettere il miglior risultato, consentire la gratificazione del miglioramento evidente, evitare stress funzionali o emotivi derivanti da un lavoro non idoneo o dalla frustrazione di non ottenere miglioramenti",
      "D": "Rispettare l’allievo nel suo diritto al divertimento, al differimento della fatica, all’evitamento dei problemi legati all’agonismo e alla ricerca della prestazione precoce"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Evitare interventi tardivi, permettere il miglior risultato, consentire la gratificazione del miglioramento evidente, evitare stress funzionali o emotivi derivanti da un lavoro non idoneo o dalla frustrazione di non ottenere miglioramenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 259,
    "question": "Quali sono la figura e il ruolo dell’istruttore?",
    "options": {
      "A": "Leader autoritario",
      "B": "Tecnico federale",
      "C": "Capo istituzionale del gruppo, motivatore",
      "D": "Leader lassista"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Capo istituzionale del gruppo, motivatore.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 260,
    "question": "Quali sono le discipline regolamentate dalla FIN?",
    "options": {
      "A": "Nuoto – pallanuoto",
      "B": "Nuoto – nuoto per salvamento – nuoto sincronizzato",
      "C": "Nuoto – nuoto pinnato – pallanuoto – tuffi – nuoto sincronizzato – nuoto per salvamento",
      "D": "Nuoto – pallanuoto – tuffi – nuoto sincronizzato – nuoto per salvamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Nuoto – pallanuoto – tuffi – nuoto sincronizzato – nuoto per salvamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 261,
    "question": "Quante abilità motorie si possono apprendere?",
    "options": {
      "A": "Più di 50",
      "B": "Meno di 20",
      "C": "Tra 20 e 50",
      "D": "Infinite"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Più di 50.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 262,
    "question": "Quante sono le abilità motorie del nuoto?",
    "options": {
      "A": "Quattro (gli stili)",
      "B": "Tante quante se ne apprendono",
      "C": "Due (partenza e virata)",
      "D": "Nessuna"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Tante quante se ne apprendono.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 263,
    "question": "Saltare è:",
    "options": {
      "A": "Una particolare capacità condizionale",
      "B": "Un’abilità motoria",
      "C": "Uno schema motorio di base",
      "D": "Una capacità coordinativa speciale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Uno schema motorio di base.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 264,
    "question": "Un’abilità motoria è:",
    "options": {
      "A": "Una predisposizione al movimento",
      "B": "Un’abilità innata",
      "C": "Un’abilità appresa",
      "D": "Nessuna delle tre opzioni"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Un’abilità appresa.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 265,
    "question": "I periodi della vita nei quali si apprende più facilmente una particolare capacità si chiamano:",
    "options": {
      "A": "Fasi particolari",
      "B": "Fasi sensibili",
      "C": "Periodi costanti",
      "D": "Fasi olistiche"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Fasi sensibili.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 266,
    "question": "A dorso le braccia si muovono:",
    "options": {
      "A": "In sequenza, prima uno e poi l’altro",
      "B": "Liberamente",
      "C": "Quando un braccio entra l’altro è a metà recupero",
      "D": "In opposizione, un braccio entra in acqua e l’altro esce"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. In opposizione, un braccio entra in acqua e l’altro esce.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 267,
    "question": "A stile libero, dopo la partenza e dopo ogni virata, per quanto è consentito rimanere in completa immersione?",
    "options": {
      "A": "Non c’è nessun limite",
      "B": "10 metri",
      "C": "15 metri",
      "D": "25 metri"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. 15 metri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 268,
    "question": "Affinché un bambino acquisisca un buon galleggiamento bisogna:",
    "options": {
      "A": "Che sappia nuotare almeno il crawl e il dorso",
      "B": "Che abbia acquisito una buona educazione respiratoria",
      "C": "Che trascorrano almeno sei mesi di ambientamento",
      "D": "Che sia ben rilassato"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Che sia ben rilassato.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 269,
    "question": "Ambientamento e acquaticità:",
    "options": {
      "A": "Sono la stessa cosa",
      "B": "L’ambientamento è legato a caratteristiche psicologiche, l’acquaticità a caratteristiche tecniche",
      "C": "Sono caratteristiche indipendenti tra di loro, da sviluppare con esercizi differenti",
      "D": "Una buona acquaticità è un presupposto per ottenere un buon ambientamento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’ambientamento è legato a caratteristiche psicologiche, l’acquaticità a caratteristiche tecniche.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 270,
    "question": "Ambientamento significa:",
    "options": {
      "A": "Rimanere molto tempo in acqua",
      "B": "Acquisire un rapporto naturale con l’acqua e stare bene in acqua",
      "C": "Nuotare veloci",
      "D": "Entusiasmo e amicizia"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Acquisire un rapporto naturale con l’acqua e stare bene in acqua.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 271,
    "question": "Anelli della catena della sopravvivenza nel giusto ordine:",
    "options": {
      "A": "RCP – attivazione del 118 – defibrillazione – trattamenti avanzati",
      "B": "Trattamenti avanzati – defibrillazione – RCP – attivazione del 118",
      "C": "Attivazione del 118 – RCP – trattamenti avanzati – defibrillazione",
      "D": "Attivazione del 118 – RCP – defibrillazione – trattamenti avanzati"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Attivazione del 118 – RCP – defibrillazione – trattamenti avanzati.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 272,
    "question": "BLS (Basic Life Support) è:",
    "options": {
      "A": "L’insieme delle manovre da effettuare solamente nei casi di ostruzione delle vie aeree",
      "B": "L’acronimo di Biological Lifelearning Swimming",
      "C": "L’insieme delle tecniche da usare nella rianimazione",
      "D": "il complesso delle differenti nuotate di base da usare nell’avvicinamento e nel trasporto del pericolante"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. L’insieme delle tecniche da usare nella rianimazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 273,
    "question": "Caratteristiche della respirazione in acqua:",
    "options": {
      "A": "Si espira e si inspira dal naso",
      "B": "Si inspira e si espira dalla bocca",
      "C": "Si inspira dal naso e si espira dalla bocca",
      "D": "Si inspira dalla bocca si espira dalla bocca o dal naso"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Si inspira dalla bocca si espira dalla bocca o dal naso.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 274,
    "question": "Ciambelle, braccioli, tavolette, tubi, ecc., sono:",
    "options": {
      "A": "Sussidi didattici",
      "B": "Oggetti di plastica galleggianti",
      "C": "Oggetti per giocare in piscina",
      "D": "Oggetti rituali"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sussidi didattici.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 275,
    "question": "Come ci si comporta in caso di emergenza che renda necessario evacuare la piscina?",
    "options": {
      "A": "Mettersi in salvo",
      "B": "Far uscire gli allievi in ordine e indirizzarli verso l’uscita di emergenza",
      "C": "Allertare il servizio di emergenza e mettersi in salvo",
      "D": "Far uscire gli allievi mettendoli in fila, contandoli e accompagnandoli verso l’uscita d’emergenza"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Far uscire gli allievi mettendoli in fila, contandoli e accompagnandoli verso l’uscita d’emergenza 28.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 276,
    "question": "Come comportarsi nel caso di una forte emorragia esterna?",
    "options": {
      "A": "Non fare nulla",
      "B": "Mettere a sedere l’infortunato con del ghiaccio sulla testa",
      "C": "Perdere conoscenza",
      "D": "Tamponare la ferita e avvisare il pronto soccorso"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tamponare la ferita e avvisare il pronto soccorso.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 277,
    "question": "Come si allertano i soccorsi del 118?",
    "options": {
      "A": "Si telefona fornendo i propri dati anagrafici, località e caratteristiche dell’incidente",
      "B": "Si telefona fornendo le caratteristiche dell’incidente e la località",
      "C": "Si telefona fornendo i propri dati anagrafici",
      "D": "Si telefona fornendo informazioni confuse"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Si telefona fornendo i propri dati anagrafici, località e caratteristiche dell’incidente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 278,
    "question": "Come si costruisce un progetto didattico?",
    "options": {
      "A": "Affidandosi al buon senso e fare quello che si è sempre fatto",
      "B": "Utilizzando percorsi sperimentati e progressioni didattiche",
      "C": "Applicando i codici di comunicazione federali",
      "D": "Definendo degli obiettivi appropriati e scegliendo esercizi orientati per raggiungerli"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Definendo degli obiettivi appropriati e scegliendo esercizi orientati per raggiungerli.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 279,
    "question": "Come si costruisce una lezione?",
    "options": {
      "A": "Stabilendo una scaletta usando degli indicatori e immaginando esercizi adeguati agli obiettivi",
      "B": "Proponendo progressioni didattiche dal semplice al difficile",
      "C": "Cogliendo al momento l’ispirazione",
      "D": "Chiedendo consiglio a un collega più esperto"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Stabilendo una scaletta usando degli indicatori e immaginando esercizi adeguati agli obiettivi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 280,
    "question": "Come si effettua la selezione dei talenti:",
    "options": {
      "A": "Attraverso considerazioni del genitore",
      "B": "Attraverso gare sociali, istruttori e allenatori",
      "C": "Attraverso desideri personali",
      "D": "Attraverso il consiglio dei compagni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Attraverso gare sociali, istruttori e allenatori.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 281,
    "question": "Come si può alzare il livello di sicurezza in piscina?",
    "options": {
      "A": "Stendendo un protocollo della sicurezza a cui tutti devono attenersi",
      "B": "Incaricando istruttori molto attenti e severi",
      "C": "Creando un clima coercitivo",
      "D": "Esercitandosi con la procedura BLS"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Stendendo un protocollo della sicurezza a cui tutti devono attenersi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 282,
    "question": "Con che frequenza si deve inspirare nuotando a dorso?",
    "options": {
      "A": "Ogni 4 bracciate",
      "B": "Ogni 3 bracciate",
      "C": "Ogni 2 bracciate",
      "D": "Ogni bracciata"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Ogni 2 bracciate.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 283,
    "question": "Contenuti della ginnastica prenatatoria per la fascia di età della scuola primaria, sono:",
    "options": {
      "A": "Ginnastica analitica",
      "B": "Ginnastica con piccoli attrezzi",
      "C": "Forza massimale",
      "D": "Circuiti e giochi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Circuiti e giochi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 284,
    "question": "Cos’è il GUG?",
    "options": {
      "A": "Un organo tecnico della F.I.N.",
      "B": "L’organizzazione sindacale dei giudici di gara",
      "C": "Il gruppo che si occupa di formare i tecnici",
      "D": "Un comando dello starter"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un organo tecnico della F.I.N..",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 285,
    "question": "Cos’è il SIT?",
    "options": {
      "A": "Settore istruzione tecnica",
      "B": "Settore interno telematico",
      "C": "Swimming international team",
      "D": "Squadra italiana tuffi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Settore istruzione tecnica.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 286,
    "question": "Cos’è il SIT?",
    "options": {
      "A": "Il gruppo che si occupa di formare i giudici di gara",
      "B": "L’organizzazione sindacale dei tecnici",
      "C": "Un ente di promozione sportiva",
      "D": "Un organo tecnico della FIN"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un organo tecnico della FIN.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 287,
    "question": "Cos’è importante nella nuotata a crawl, dorso e farfalla?",
    "options": {
      "A": "Le pause nelle azioni",
      "B": "La continuità delle azioni, evitando pause a fine ed inizio bracciata",
      "C": "Delle forti decelerazioni nella fase di spinta",
      "D": "La respirazione ogni due bracciate"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La continuità delle azioni, evitando pause a fine ed inizio bracciata.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 288,
    "question": "Cos’è la programmazione didattica?",
    "options": {
      "A": "Un vincolo che i gestori utilizzano per standardizzare il lavoro dell’istruttore",
      "B": "Una suddivisione degli apprendimenti nel tempo",
      "C": "Una successione razionale di progressioni",
      "D": "Un sistema per immaginare e seguire un percorso formativo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un sistema per immaginare e seguire un percorso formativo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 289,
    "question": "Cos’è un protocollo della sicurezza?",
    "options": {
      "A": "La procedura BLS",
      "B": "Un insieme di norme e comportamenti standard a cui attenersi",
      "C": "Il regolamento di iscrizione ai corsi di nuoto",
      "D": "Un opuscolo contenente informazioni generali sul funzionamento della struttura"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Un insieme di norme e comportamenti standard a cui attenersi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 290,
    "question": "Cosa deve contenere il protocollo della sicurezza?",
    "options": {
      "A": "L’elenco degli allievi dei corsi",
      "B": "La sequenza della procedura BLS",
      "C": "Un atlante anatomico",
      "D": "Poche norme ma chiare ed efficaci"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Poche norme ma chiare ed efficaci.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 291,
    "question": "Cosa non va fatto in una situazione di emergenza?",
    "options": {
      "A": "Spostare il paziente",
      "B": "Somministrare alcolici o comunque da bere",
      "C": "Caricare il paziente su una macchina di passaggio per trasportarlo in ospedale",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 292,
    "question": "Cosa rappresentano queste sigle: FINA, LEN, COMEN, COLAN, ILS, ILSE?",
    "options": {
      "A": "Società sportive affiliate alla FIN",
      "B": "Procedure internazionali di sicurezza",
      "C": "Standard costruttivi degli impianti natatori",
      "D": "Federazioni e istituzioni sportive alle quali la FIN è affiliata"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Federazioni e istituzioni sportive alle quali la FIN è affiliata.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 293,
    "question": "Cosa si fa quando un allievo dice di stare male?",
    "options": {
      "A": "Gli si dice che non è nulla",
      "B": "Si valuta la situazione",
      "C": "Si grida aiuto",
      "D": "Si allerta immediatamente il STE"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Si valuta la situazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 294,
    "question": "Cosa si prevede che un bambino sappia fare nella prima fase di ambientamento?",
    "options": {
      "A": "Si sappia tuffare dal bordo autonomamente e riemerge da solo",
      "B": "Abbia un buon rilassamento corporeo",
      "C": "Sappia spostarsi lungo il bordo autonomamente",
      "D": "Nuoti per 25m con tecnica a piacere senza interruzioni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Abbia un buon rilassamento corporeo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 295,
    "question": "Da che cosa può essere determinata la squalifica per una virata a rana?",
    "options": {
      "A": "Mani che toccano il muro in modo non contemporaneo",
      "B": "Recupero delle braccia con le mani fuori dall’acqua",
      "C": "Riemergere dopo i 15 metri",
      "D": "Mani che toccano il muro non alla stessa altezza"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Mani che toccano il muro in modo non contemporaneo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 296,
    "question": "Definizione di ambientamento.",
    "options": {
      "A": "Il periodo in cui un allievo prende confidenza con l’ambiente acquatico",
      "B": "Il momento dell’iscrizione a un corso",
      "C": "La lunga esperienza motoria che porta un allievo a padroneggiare i suoi movimenti in acqua, vivendo desideri, superando paure, incontrando relazioni positive e scoprendo nuove cognizioni di sé",
      "D": "L’esperienza di apprendimento del nuoto attraverso attività ludiche"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La lunga esperienza motoria che porta un allievo a padroneggiare i suoi movimenti in acqua, vivendo desideri, superando paure, incontrando relazioni positive e scoprendo nuove cognizioni di sé.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 297,
    "question": "Definizione di trauma:",
    "options": {
      "A": "Effetto lesivo provocato su un organismo vivente da parte di un’azione meccanica esterna",
      "B": "Lesione che determina un’interruzione della continuità della cute",
      "C": "Perdita di sangue dal sistema circolatorio",
      "D": "Allontanamento temporaneo di due capi articolari delle estremità delle ossa di un’articolazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Effetto lesivo provocato su un organismo vivente da parte di un’azione meccanica esterna.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 298,
    "question": "Dopo ogni partenza ed ogni virata, tranne in uno stile, a quanti metri deve emergere dall’acqua il nuotatore e con quale parte del corpo?",
    "options": {
      "A": "Entro 15 metri con il capo",
      "B": "Entro 15 metri con il baricentro del corpo",
      "C": "Entro 10 metri con la parte più avanzata del corpo",
      "D": "Entro 10 metri con il capo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Entro 15 metri con il capo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 299,
    "question": "Dopo una lunga esposizione ai raggi solari a capo scoperto, potrebbe verificarsi:",
    "options": {
      "A": "Colpo di calore",
      "B": "Idrocuzione",
      "C": "Ustione",
      "D": "Colpo di sole"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Colpo di sole.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 300,
    "question": "Durante il recupero delle gambe a rana, quale parte del corpo provoca il maggior attrito frontale?",
    "options": {
      "A": "La testa",
      "B": "Il petto",
      "C": "La coscia",
      "D": "I gomiti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il petto.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 301,
    "question": "Durante l’ambientamento è importante:",
    "options": {
      "A": "Far superare fastidi fobie e paure",
      "B": "Spiegare subito le prime forme propulsive",
      "C": "Far sistemare i bambini vicino la scaletta per far superare loro la paura",
      "D": "Non congratularsi con i bambini anche se hanno raggiunto un piccolo traguardo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Far superare fastidi fobie e paure.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 302,
    "question": "Durante l’apprendimento dei fondamentali di pallanuoto gli errori sono da imputare più frequentemente a:",
    "options": {
      "A": "Un’errata presentazione del modello visivo",
      "B": "Un’errata percezione di tutti i feed- back da parte dell’allievo",
      "C": "Un uso improprio dell’analizzatore visivo",
      "D": "All’approfondimento del gesto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Un’errata percezione di tutti i feed- back da parte dell’allievo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 303,
    "question": "Durante la fase di ambientamento l’allievo:",
    "options": {
      "A": "Impara a nuotare",
      "B": "Sfrutta inizialmente gli schemi motori terrestri nell’ambiente acquatico",
      "C": "Sfrutta da subito gli schemi motori acquatici",
      "D": "Deve fare esercizi di coordinazione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Sfrutta inizialmente gli schemi motori terrestri nell’ambiente acquatico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 304,
    "question": "Durante la nuotata è normale inspirare attraverso:",
    "options": {
      "A": "La bocca",
      "B": "La bocca ed il naso",
      "C": "La cute",
      "D": "Solo con il naso"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La bocca.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 305,
    "question": "Durante la prima lezione, in fase di ambientamento, l’istruttore come prima cosa:",
    "options": {
      "A": "Deve insegnare subito il galleggiamento",
      "B": "Deve far ambientare i propri allievi in acqua alta",
      "C": "Deve provvedere a far conoscere il nuovo ambiente (spogliatoi, piscina, istruttore ecc.) ai nuovi arrivati.",
      "D": "Deve insegnare la respirazione nella forma più ludica possibile"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Deve provvedere a far conoscere il nuovo ambiente (spogliatoi, piscina, istruttore ecc.) ai nuovi arrivati..",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 306,
    "question": "Durante le sedute di ginnastica educativa e prenatatoria, per un gruppo di bambini in età della scuola primaria, è fondamentale sviluppare e affinare:",
    "options": {
      "A": "Forza e resistenza.",
      "B": "Capacità di: controllo motorio, apprendimento, capacità di adattamento e trasformazione del movimento.",
      "C": "Schemi motori di base",
      "D": "Orientamento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Capacità di: controllo motorio, apprendimento, capacità di adattamento e trasformazione del movimento..",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 307,
    "question": "Durante una lezione la dimostrazione dell’insegnante deve avvenire:",
    "options": {
      "A": "Di spalle agli allievi fuori dall’acqua",
      "B": "A specchio fuori dall’acqua",
      "C": "Di spalle gli allievi su un rialzo",
      "D": "Solamente a voce"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. A specchio fuori dall’acqua.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 308,
    "question": "È importante che l’istruttore entri in acqua durante l’impostazione dello scivolamento sul dorso in vasca piccola?",
    "options": {
      "A": "Sì, ma solo se l’esercizio è impostato in acqua alta",
      "B": "No, perché l’allievo non si abituerebbe mai a farlo da solo",
      "C": "No, perché l’istruttore non deve mai perdere di vista gli altri allievi",
      "D": "Sì, perché trasmette sicurezza all’allievo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sì, perché trasmette sicurezza all’allievo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 309,
    "question": "È un errore più grave nella nuotata a farfalla:",
    "options": {
      "A": "Fermare le braccia davanti alla testa per effettuare il secondo colpo di gambe",
      "B": "Non effettuare il secondo colpo di gambe",
      "C": "Non far entrare le braccia in linea con le spalle",
      "D": "Non effettuare la respirazione laterale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Fermare le braccia davanti alla testa per effettuare il secondo colpo di gambe.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 310,
    "question": "Fasi della bracciata a stile libero:",
    "options": {
      "A": "Presa, trazione, recupero",
      "B": "Presa, trazione, recupero aereo",
      "C": "Presa, spinta, recupero",
      "D": "Presa, trazione, spinta, recupero"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Presa, trazione, spinta, recupero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 311,
    "question": "Figure necessariamente presenti in una Scuola nuoto federale:",
    "options": {
      "A": "Direttore sportivo- coordinatore – istruttori",
      "B": "Capo istruttori – assistente bagnanti - allenatori",
      "C": "Istruttori - assistente bagnanti – coordinatori",
      "D": "Maestro di salvamento – allenatore – istruttori"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Direttore sportivo- coordinatore – istruttori.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 312,
    "question": "Funzioni della gambata nel crawl:",
    "options": {
      "A": "Propulsivo e di riequilibrio",
      "B": "Propulsivo, di galleggiamento e stabilizzante",
      "C": "Recupero, presa, trazione e spinta",
      "D": "Ristoro muscolare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Propulsivo, di galleggiamento e stabilizzante.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 313,
    "question": "Gli ausili didattici vanno utilizzati in modo maggiore e continuativo per:",
    "options": {
      "A": "La didattica delle nuotate",
      "B": "I galleggiamenti statici",
      "C": "Il potenziamento a secco",
      "D": "Il lavoro di tipo multilaterale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il lavoro di tipo multilaterale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 314,
    "question": "Gli esercizi nella fase del consolidamento devono essere:",
    "options": {
      "A": "Brevi e poco differenziati",
      "B": "Brevi e molto differenziati",
      "C": "Lunghi e ripetitivi",
      "D": "Lunghi e molto differenziati"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Lunghi e ripetitivi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 315,
    "question": "Gli esercizi nella fase della conoscenza devono essere:",
    "options": {
      "A": "Brevi e poco differenziati",
      "B": "Brevi e molto differenziati",
      "C": "Lunghi e ripetitivi",
      "D": "Lunghi e molto differenziati"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Brevi e molto differenziati.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 316,
    "question": "Gli esercizi nella fase della scoperta devono essere:",
    "options": {
      "A": "Brevi e poco differenziati",
      "B": "Brevi e molto differenziati",
      "C": "Lunghi e ripetitivi",
      "D": "Lunghi e molto differenziati"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Brevi e poco differenziati.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 317,
    "question": "Gli obiettivi affettivi indicano:",
    "options": {
      "A": "Ciò che l’allievo deve sapere",
      "B": "Ciò che l’allievo deve provare davanti ad una situazione",
      "C": "Come l’allievo si deve comportare",
      "D": "I brevetti tecnici"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Ciò che l’allievo deve provare davanti ad una situazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 318,
    "question": "Gli obiettivi cognitivi indicano:",
    "options": {
      "A": "Ciò che l’allievo deve sapere",
      "B": "Ciò che l’allievo deve saper fare",
      "C": "Ciò che l’allievo deve provare davanti ad una situazione",
      "D": "I brevetti tecnici"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Ciò che l’allievo deve sapere.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 319,
    "question": "Gli obiettivi dell’educazione respiratoria sono:",
    "options": {
      "A": "Ossigenare il sangue",
      "B": "Controllo delle apnee, delle inspirazioni/espirazioni in acqua",
      "C": "Immergersi e rimanere sott’acqua per molto tempo",
      "D": "Costituzione, coordinazione, controllo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Controllo delle apnee, delle inspirazioni/espirazioni in acqua.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 320,
    "question": "Gli obiettivi finali sono:",
    "options": {
      "A": "Obiettivi esposti in termini generali che si possono raggiungere in tempi lunghi",
      "B": "Obiettivi espressi con una certa specificità che si possono ottenere in periodi valutabili in mesi",
      "C": "I brevetti tecnici",
      "D": "Obiettivi espressi in operazioni concrete raggiungibili nei tempi di una unità didattica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Obiettivi esposti in termini generali che si possono raggiungere in tempi lunghi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 321,
    "question": "Gli obiettivi intermedi sono:",
    "options": {
      "A": "Obiettivi esposti in termini generali che si possono raggiungere in tempi lunghi",
      "B": "Obiettivi espressi con una certa specificità che si possono ottenere in periodi valutabili in mesi",
      "C": "Obiettivi espressi in operazioni concrete raggiungibili nei tempi di una unità didattica",
      "D": "I brevetti tecnici"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Obiettivi espressi con una certa specificità che si possono ottenere in periodi valutabili in mesi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 322,
    "question": "Gli obiettivi motori indicano:",
    "options": {
      "A": "Ciò che l’allievo deve sapere",
      "B": "Ciò che l’allievo deve saper fare",
      "C": "Come l’allievo si deve comportare",
      "D": "I brevetti tecnici"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Ciò che l’allievo deve saper fare.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 323,
    "question": "Gli obiettivi operativi sono:",
    "options": {
      "A": "Obiettivi esposti in termini generali che si possono raggiungere in tempi lunghi",
      "B": "Progressioni didattiche",
      "C": "Obiettivi espressi con una certa specificità che si possono ottenere in periodi valutabili in mesi",
      "D": "Obiettivi espressi in operazioni concrete raggiungibili nei tempi di una unità didattica"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Obiettivi espressi in operazioni concrete raggiungibili nei tempi di una unità didattica.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 324,
    "question": "Gli organi della FIN sono:",
    "options": {
      "A": "Gli organi periferici e centrali",
      "B": "Gli organi centrali ed internazionali",
      "C": "Gli organi ministeriali",
      "D": "Gli organi centrali, periferici e di giustizia"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Gli organi centrali, periferici e di giustizia.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 325,
    "question": "Grazie a quale principio fisico il corpo umano galleggia in acqua?",
    "options": {
      "A": "Principio di gravità",
      "B": "Principio di azione e reazione",
      "C": "Principio di Archimede",
      "D": "Principio di Bernoulli"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Principio di Archimede.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 326,
    "question": "I livelli tecnici minimi previsti dalla scuola nuoto federale sono:",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. 5.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 327,
    "question": "I prerequisiti per l’insegnamento della virata a crawl sono:",
    "options": {
      "A": "Saper effettuare la capovolta",
      "B": "Possedere una buona tecnica in almeno tre stili",
      "C": "Inserire il gesto tecnico subito dopo il tuffo di partenza",
      "D": "Buone capacità anaerobiche alattacide"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Saper effettuare la capovolta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 328,
    "question": "I principali obiettivi della ginnastica educativa sono:",
    "options": {
      "A": "Consolidamento delle capacità condizionali e sviluppo della resistenza alla forza",
      "B": "Acquisizione a secco delle tecniche di nuotata",
      "C": "Controllo della respirazione in fase di apnea, sviluppo della forza, controllo visivo",
      "D": "Sviluppo degli schemi motori di base, sviluppo dello schema corporeo, miglioramento delle capacità coordinative"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sviluppo degli schemi motori di base, sviluppo dello schema corporeo, miglioramento delle capacità coordinative.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 329,
    "question": "Il coordinatore della scuola nuoto:",
    "options": {
      "A": "Rappresenta la società, definisce gli obiettivi sulla base delle risorse disponibili",
      "B": "Pone in essere le indicazioni della direzione",
      "C": "Programma e attua la preparazione delle squadre agonistiche",
      "D": "Sviluppa autonomamente il proprio percorso didattico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Pone in essere le indicazioni della direzione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 330,
    "question": "Il crawl prevede movimenti:",
    "options": {
      "A": "Simmetrici",
      "B": "Simultanei",
      "C": "Isometrici",
      "D": "Alternati"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Alternati.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 331,
    "question": "Il galleggiamento dipende principalmente:",
    "options": {
      "A": "Dalla viscosità del liquido",
      "B": "Dal risucchio o vortice",
      "C": "Dalla costituzione corporea",
      "D": "Dalla quantità di aria nei polmoni"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dalla quantità di aria nei polmoni.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 332,
    "question": "Il galleggiamento statico può essere definito come:",
    "options": {
      "A": "La posizione in cui centro di gravità e baricentro coincidono",
      "B": "La posizione in cui la spinta di galleggiamento si trova più in alto del baricentro",
      "C": "L’equilibrio olistico fra uomo e acqua",
      "D": "La posizione di equilibrio tra baricentro e centro di gravità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La posizione di equilibrio tra baricentro e centro di gravità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 333,
    "question": "Il movimento degli arti inferiori, nella nuotata a rana, si distingue in (nell’ordine):",
    "options": {
      "A": "Scivolamento, spinta e recupero",
      "B": "Flessione, spinta e scivolamento",
      "C": "Flessione, scivolamento e spinta",
      "D": "Presa, trazione, recupero"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Flessione, spinta e scivolamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 334,
    "question": "Il raggiungimento degli obiettivi dell’ambientamento si deducono dal fatto che:",
    "options": {
      "A": "Il soggetto in acqua non ha paura",
      "B": "Il soggetto in acqua è rilassato e padroneggia in modo elementare il suo corpo",
      "C": "Il soggetto in acqua si sposta dal bordo alla corsia in maniera autonoma",
      "D": "Il soggetto consegue uno o più brevetti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il soggetto in acqua è rilassato e padroneggia in modo elementare il suo corpo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 335,
    "question": "Il recupero delle braccia a rana è:",
    "options": {
      "A": "Propulsivo",
      "B": "Stabilizzante",
      "C": "Alternato",
      "D": "Veloce"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Veloce 34.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 336,
    "question": "Il recupero delle braccia nella nuotata a farfalla inizia:",
    "options": {
      "A": "Durante la respirazione",
      "B": "All’inizio della trazione",
      "C": "Alla fine della spinta",
      "D": "Durante la fase di scivolamento"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Alla fine della spinta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 337,
    "question": "Il rollio è un movimento di spalle e busto sull’asse sagittale, si esegue:",
    "options": {
      "A": "In fase di partenza",
      "B": "Nella rana",
      "C": "Nello stile libero e nel dorso",
      "D": "Nella farfalla"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Nello stile libero e nel dorso.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 338,
    "question": "Il torpedo è un attrezzo che si usa",
    "options": {
      "A": "Come ausilio didattico nell’ambientamento",
      "B": "Nel Salvamento",
      "C": "Nel nuoto per disabili",
      "D": "Nel nuoto sincronizzato"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Nel Salvamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 339,
    "question": "Il trudgen è:",
    "options": {
      "A": "Una nuotata a crawl, ma con le gambe a farfalla",
      "B": "Una nuotata a crawl, ma con le gambe che effettuano un colpo di gambe a rana o sforbiciano",
      "C": "Una nuotata a dorso con l’azione delle braccia simultanea",
      "D": "Una nuotata a farfalla con le gambe a rana"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Una nuotata a crawl, ma con le gambe che effettuano un colpo di gambe a rana o sforbiciano.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 340,
    "question": "In caso di attivazione del STE cosa si deve comunicare, nell’ordine?",
    "options": {
      "A": "Luogo, condizioni del pericolante e recapito telefonico",
      "B": "Luogo, recapito telefonico e condizioni del pericolante",
      "C": "Condizioni del pericolante, recapito telefonico e luogo",
      "D": "Età, peso, statura, livello tecnico del pericolante"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Luogo, condizioni del pericolante e recapito telefonico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 341,
    "question": "In caso di incidente in piscina quale numero telefonico è necessario usare per innescare la cosiddetta catena della sopravvivenza?",
    "options": {
      "A": "112",
      "B": "113",
      "C": "117",
      "D": "118"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. 118.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 342,
    "question": "In che cosa consiste la revisione della programmazione didattica?",
    "options": {
      "A": "Rielaborazione di tutte le fasi della programmazione",
      "B": "Rifacimento di tutta la programmazione",
      "C": "Sostituzione dei supporti didattici",
      "D": "Rielaborazione degli elementi che si ritengono migliorabili"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Rielaborazione degli elementi che si ritengono migliorabili.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 343,
    "question": "In che posizione si trova il gomito, rispetto alla mano, nel recupero a stile libero?",
    "options": {
      "A": "Più in alto",
      "B": "Allo stesso livello",
      "C": "Più in basso",
      "D": "È indifferente"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Più in alto.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 344,
    "question": "In quale nuotata non c’è il limite dei 15 metri subacquei in fase di partenza e dopo ogni virata?",
    "options": {
      "A": "Stile libero",
      "B": "Dorso",
      "C": "Rana",
      "D": "Farfalla"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Rana.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 345,
    "question": "In quale ordine si svolge la staffetta 4x100 metri mista?",
    "options": {
      "A": "Farfalla – dorso – rana – stile libero",
      "B": "Dorso – rana – farfalla – stile libero",
      "C": "Dorso - farfalla – rana - stile libero",
      "D": "Stile libero – dorso – rana - farfalla"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dorso – rana – farfalla – stile libero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 346,
    "question": "In quali nuotate si esegue il rollio?",
    "options": {
      "A": "Rana e farfalla",
      "B": "Nessuna",
      "C": "Crawl e dorso",
      "D": "Crawl e farfalla"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Crawl e dorso.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 347,
    "question": "In termini giuridici, chi è responsabile?",
    "options": {
      "A": "Chi assume su di sé l’onere del rischio e delle conseguenze provocate dal proprio comportamento",
      "B": "Chi si fa carico del risarcimento economico conseguente a un dato comportamento",
      "C": "L’oggetto dell’azione della magistratura",
      "D": "Chi accetta di assumere la responsabilità delle proprie azioni"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Chi assume su di sé l’onere del rischio e delle conseguenze provocate dal proprio comportamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 348,
    "question": "In un ciclo completo di braccia a farfalla, quante battute di gambe si eseguono normalmente?",
    "options": {
      "A": "Una",
      "B": "Due",
      "C": "Tre",
      "D": "Nessuna, le gambe vengono trascinate dal movimento del tronco"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Due.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 349,
    "question": "In un massaggio cardiaco si comprime ritmicamente il torace ad una frequenza di:",
    "options": {
      "A": "10 - 15 colpi al minuto",
      "B": "30 - 50 colpi al minuto",
      "C": "80 -100 colpi al minuto",
      "D": "150 - 180 colpi al minuto"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. 80 -100 colpi al minuto.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 350,
    "question": "In una gara a stile libero un concorrente può rimanere in completa immersione:",
    "options": {
      "A": "Per tutta la distanza che deve coprire",
      "B": "Mai",
      "C": "Alla partenza ed alle virate, per un massimo di 10 metri",
      "D": "Alla partenza ed alle virate, per un massimo di 15 metri"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Alla partenza ed alle virate, per un massimo di 15 metri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 351,
    "question": "In una gara di misti individuali o di staffetta mista, la frazione a stile libero è intesa come:",
    "options": {
      "A": "Nuotare tassativamente a crawl",
      "B": "Nuotare uno stile qualsiasi",
      "C": "Nuotare uno stile qualsiasi anche subacqueo",
      "D": "Nuotare uno stile che non sia la farfalla, il dorso, la rana"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Nuotare uno stile che non sia la farfalla, il dorso, la rana.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 352,
    "question": "In una gara di nuoto quante partenze sono previste?",
    "options": {
      "A": "Due (la seconda comunque valida)",
      "B": "Una (comunque valida)",
      "C": "Tre (la terza comunque valida)",
      "D": "Quattro (la quarta comunque valida)"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Una (comunque valida).",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 353,
    "question": "In una gara di stile libero individuale è possibile nuotare:",
    "options": {
      "A": "In qualsiasi modo",
      "B": "Solo a crawl",
      "C": "Tirandosi alla corda separatrice",
      "D": "Spingendosi dal fondo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. In qualsiasi modo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 354,
    "question": "In una gara, in quali nuotate è possibile fermarsi in piedi sul fondo della vasca senza incorrere in una squalifica?",
    "options": {
      "A": "Non è possibile in nessuno stile",
      "B": "Solo nello stile libero",
      "C": "Solo stile libero e dorso",
      "D": "Nella rana"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Solo nello stile libero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 355,
    "question": "Indica alcuni segnali che evidenziano la paura:",
    "options": {
      "A": "Stato di tensione generale, rigidità, silenzio, ritardo nelle reazioni, esagerata percezione del freddo",
      "B": "Dichiarazioni esplicite",
      "C": "Perdita di conoscenza",
      "D": "Ribellione, disattenzione, ipercinesia"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Stato di tensione generale, rigidità, silenzio, ritardo nelle reazioni, esagerata percezione del freddo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 356,
    "question": "Indica le principali cause di paura:",
    "options": {
      "A": "Esperienza diretta negativa dell’acqua",
      "B": "Esperienza diretta negativa dell’acqua, esperienze indirette, imitazione dei comportamenti di altri",
      "C": "Esperienze raccontate circa la pericolosità dell’acqua",
      "D": "Tradizioni familiari"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Esperienza diretta negativa dell’acqua, esperienze indirette, imitazione dei comportamenti di altri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 357,
    "question": "Inserire il gioco durante la lezione significa:",
    "options": {
      "A": "Utilizzarlo come strumento didattico",
      "B": "Creare un diversivo che aiuta a vincere le paure",
      "C": "Premiare gli allievi",
      "D": "Rilassarsi in vista del turno successivo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Utilizzarlo come strumento didattico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 358,
    "question": "L’acronimo che indica la procedura di rianimazione è:",
    "options": {
      "A": "BLS",
      "B": "BDSM",
      "C": "IRS",
      "D": "SDS"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. BLS.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 359,
    "question": "L’ambientamento in acqua alta:",
    "options": {
      "A": "Stimola maggiormente la ricerca degli equilibri",
      "B": "Si può fare, ma solo con ciambelle, braccioli e/o altri sussidi didattici",
      "C": "Rappresenta la modalità ottimale",
      "D": "Non si può fare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Stimola maggiormente la ricerca degli equilibri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 360,
    "question": "L’ambientamento:",
    "options": {
      "A": "Non è necessario",
      "B": "È importante per conoscere l’ambiente piscina",
      "C": "È importante solo con i bambini di massimo 6 anni",
      "D": "È la fase fondamentale della scuola nuoto"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. È la fase fondamentale della scuola nuoto.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 361,
    "question": "L’analisi della situazione iniziale è la fase della programmazione didattica nella quale:",
    "options": {
      "A": "Si analizza il contesto per fare delle scelte",
      "B": "Si immagina come dovrà essere il nostro allievo dopo un certo periodo di esperienza",
      "C": "Si definiscono le tappe delle varie progressioni didattiche",
      "D": "Si scelgono le strategie migliori per arrivare agli obiettivi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Si analizza il contesto per fare delle scelte.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 362,
    "question": "L’insegnamento delle nuotate a secco:",
    "options": {
      "A": "È indispensabile per il corretto apprendimento delle nuotate in acqua",
      "B": "È molto utile perché crea i presupposti per l’apprendimento in acqua",
      "C": "Risulta utile solo per l’apprendimento delle nuotate a rana e farfalla",
      "D": "È inutile, vista la posizione del corpo e la diversa densità dell’aria rispetto all’acqua"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. È inutile, vista la posizione del corpo e la diversa densità dell’aria rispetto all’acqua.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 363,
    "question": "L’inspirazione nella nuotata a rana si effettua:",
    "options": {
      "A": "Al termine della fase di trazione",
      "B": "Durante la fase di presa",
      "C": "Durante la fase di spinta",
      "D": "Durante la fase di recupero"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Al termine della fase di trazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 364,
    "question": "L’istruttore deve stimolare la fantasia e l’attenzione del bambino attraverso:",
    "options": {
      "A": "Una proposta di esercizi per la respirazione",
      "B": "La propria autorevolezza",
      "C": "Un tuffo dal blocco di partenza",
      "D": "Il gioco"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il gioco.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 365,
    "question": "L’istruttore deve:",
    "options": {
      "A": "Gridare",
      "B": "Tenere il gruppo ordinato e in assoluto silenzio",
      "C": "Vincere",
      "D": "Sapere, saper fare, saper far fare, saper essere, saper comunicare"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sapere, saper fare, saper far fare, saper essere, saper comunicare.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 366,
    "question": "L’istruttore nella fase del consolidamento dovrebbe:",
    "options": {
      "A": "Essere attento alla relazione",
      "B": "Concentrarsi sull’esercizio",
      "C": "Lavorare anche a secco",
      "D": "Vigilare sull’esecuzione corretta"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Vigilare sull’esecuzione corretta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 367,
    "question": "L’istruttore nella fase della conoscenza dovrebbe:",
    "options": {
      "A": "Essere attento alla relazione",
      "B": "Concentrarsi sull’esercizio",
      "C": "Lavorare anche a secco",
      "D": "Vigilare sull’esecuzione corretta"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Concentrarsi sull’esercizio.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 368,
    "question": "L’istruttore nella fase della scoperta dovrebbe:",
    "options": {
      "A": "Essere attento alla relazione",
      "B": "Concentrarsi sull’esercizio",
      "C": "Lavorare anche a secco",
      "D": "Vigilare sull’esecuzione corretta"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Essere attento alla relazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 369,
    "question": "L’obiettivo di una programmazione deve essere:",
    "options": {
      "A": "Formulato in positivo",
      "B": "Basato esclusivamente su aspetti tecnico-didattici",
      "C": "Limitato nel tempo.",
      "D": "Definito grazie a criterio, razionalità, casualità"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Formulato in positivo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 370,
    "question": "L’obiettivo principale di un corso di nuoto è:",
    "options": {
      "A": "Sviluppare le capacità condizionali",
      "B": "Acquisire una postura corretta",
      "C": "Massimizzare la performance",
      "D": "Sviluppare capacità senso-percettive e coordinative speciali"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sviluppare capacità senso-percettive e coordinative speciali.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 371,
    "question": "L’organizzazione della singola lezione:",
    "options": {
      "A": "Non deve mai avere il requisito dell’estemporaneità",
      "B": "Deve prevedere una ripetizione sistematica di esercizi",
      "C": "Non deve prevedere momenti di svago, gli allievi potrebbero distrarsi dal compito",
      "D": "Deve prevedere lunghe pause per consentire la rielaborazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Non deve mai avere il requisito dell’estemporaneità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 372,
    "question": "L’organizzazione didattica della lezione è costituita da:",
    "options": {
      "A": "Scoperta, conoscenza e consolidamento",
      "B": "Presa, trazione, spinta e recupero",
      "C": "Introduzione, consolidamento, apprendimento e conclusiva/ricreativa",
      "D": "Pianificazione degli strumenti e dei metodi"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Introduzione, consolidamento, apprendimento e conclusiva/ricreativa.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 373,
    "question": "L’organizzazione si può definire come:",
    "options": {
      "A": "Una procedura flessibile che controlla e verifica il lavoro per stabilire tempi e modi dell’intervento",
      "B": "Un procedere unilaterale di proposte volte al raggiungimento dell’obiettivo",
      "C": "Una progressione di esercizi finalizzati al miglioramento della situazione iniziale",
      "D": "Un insieme di procedure codificate e standardizzate"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Una procedura flessibile che controlla e verifica il lavoro per stabilire tempi e modi dell’intervento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 374,
    "question": "L’overarm è:",
    "options": {
      "A": "Una nuotata a dorso con gambe rana",
      "B": "Una nuotata a dorso con gambe a delfino",
      "C": "Una tecnica di tiro della pallanuoto",
      "D": "Una nuotata sul fianco"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Una nuotata sul fianco.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 375,
    "question": "La fabulazione è:",
    "options": {
      "A": "L’arte di creare e raccontare storie",
      "B": "Una pratica medica",
      "C": "Uno stile comunicativo",
      "D": "Una modalità fondamentale di apprendimento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’arte di creare e raccontare storie.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 376,
    "question": "La fase propulsiva della bracciata a rana si divide in:",
    "options": {
      "A": "Appoggio-presa, trazione, spinta e recupero",
      "B": "Spinta, allungo, distensione, recupero",
      "C": "Appoggio, allungo",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Nessuna delle risposte precedenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 377,
    "question": "La fase propulsiva più significativa della gambata nel crawl è:",
    "options": {
      "A": "La fase ascensionale",
      "B": "La fase terminale",
      "C": "La fase discendente",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La fase discendente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 378,
    "question": "La fase propulsiva più significativa della gambata nel dorso è:",
    "options": {
      "A": "La fase ascensionale",
      "B": "La fase discendente",
      "C": "La fase obliqua",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La fase ascensionale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 379,
    "question": "La forza di gravità in acqua:",
    "options": {
      "A": "Non si manifesta",
      "B": "Si manifesta ed è bilanciata dalla spinta idrostatica",
      "C": "Si manifesta ed è superiore a quella riscontrata sulla terra",
      "D": "Risulta utile per il galleggiamento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Si manifesta ed è bilanciata dalla spinta idrostatica.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 380,
    "question": "La frustata verso il basso della gambata a farfalla provoca:",
    "options": {
      "A": "Il sollevamento del bacino del nuotatore",
      "B": "L’abbassamento del bacino del nuotatore",
      "C": "Un brusco scartamento",
      "D": "Il sollevamento di tutto il corpo del nuotatore"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il sollevamento del bacino del nuotatore.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 381,
    "question": "La ginnastica prenatatoria:",
    "options": {
      "A": "È proponibile in tutte le fasce d’età",
      "B": "Serve per migliorare le capacità condizionali in età infantile",
      "C": "È da escludere nella terza età",
      "D": "È inutile"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. È proponibile in tutte le fasce d’età.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 382,
    "question": "La nuotata a farfalla prevede un’azione braccia/gambe:",
    "options": {
      "A": "Alternata",
      "B": "Asimmetrica",
      "C": "Aciclica",
      "D": "Ciclica"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Ciclica.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 383,
    "question": "La peculiarità tecnica del piede a martello è caratteristica del colpo di gambe a:",
    "options": {
      "A": "Farfalla",
      "B": "Rana",
      "C": "Dorso",
      "D": "Crawl"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Rana.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 384,
    "question": "La posizione laterale di sicurezza si adotta quando la persona da soccorrere:",
    "options": {
      "A": "Non è cosciente, presenta spontanea attività cardiaca ed assenza di quella respiratoria",
      "B": "Non è più in vita",
      "C": "Non è cosciente ma presenta spontaneamente attività respiratorie e cardiache",
      "D": "È cosciente ma denuncia difficoltà respiratorie"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Non è cosciente ma presenta spontaneamente attività respiratorie e cardiache.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 385,
    "question": "La pratica della pallanuoto favorisce:",
    "options": {
      "A": "La socializzazione e la cooperazione, lo sviluppo di abilità motorie",
      "B": "Lo sviluppo della fase di egocentrismo",
      "C": "Lo sviluppo di abilità motorie e della muscolatura degli arti superiori",
      "D": "L’utilizzo di ausili didattici, per esempio il pallone"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La socializzazione e la cooperazione, lo sviluppo di abilità motorie.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 386,
    "question": "La procedura o protocollo internazionale BLS consente di:",
    "options": {
      "A": "Chiamare i soccorsi sanitari di emergenza (118)",
      "B": "Attivare il primo soccorso",
      "C": "Gestire le conseguenze legali di un infortunio",
      "D": "Effettuare le manovre di rianimazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Effettuare le manovre di rianimazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 387,
    "question": "La respirazione in acqua è:",
    "options": {
      "A": "Inconsapevole e automatica",
      "B": "Normale e disinvolta",
      "C": "Problematica e angosciante",
      "D": "Forzata e cosciente"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Forzata e cosciente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 388,
    "question": "La respirazione nella nuotata a rana avviene:",
    "options": {
      "A": "Terminata la fase di presa",
      "B": "All’inizio della trazione",
      "C": "Tra il termine della trazione e l’inizio del recupero",
      "D": "Ogni due cicli di bracciata"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. All’inizio della trazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 389,
    "question": "La scelta degli esercizi è la fase della programmazione didattica in cui:",
    "options": {
      "A": "Si immagina come dovrà essere il nostro allievo dopo un certo periodo di esperienza",
      "B": "Si definiscono le tappe della varie progressioni didattiche",
      "C": "Si scelgono le strategie migliori per arrivare agli obiettivi",
      "D": "Si valutano i risultati ottenuti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Si valutano i risultati ottenuti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 390,
    "question": "La scelta dei mezzi e dei metodi è la fase della programmazione didattica in cui:",
    "options": {
      "A": "Si immagina come dovrà essere il nostro allievo dopo un certo periodo di esperienza",
      "B": "Si acquista il materiale didattico",
      "C": "Si scelgono le strategie migliori per arrivare agli obiettivi",
      "D": "Si fa un piano di interventi rispetto al tempo a disposizione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Si scelgono le strategie migliori per arrivare agli obiettivi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 391,
    "question": "La singola lezione di nuoto in quali fasi è suddivisa?",
    "options": {
      "A": "Introduzione, ambientazione, apprendimento e conclusione",
      "B": "Introduzione, consolidamento, apprendimento e conclusione",
      "C": "Introduzione, consolidamento, apprendimento, verifica e conclusione",
      "D": "Introduzione, ambientazione, consolidamento e conclusione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Introduzione, consolidamento, apprendimento e conclusione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 392,
    "question": "La sommersione e la conseguente asfissia, con inondazione polmonare si dice:",
    "options": {
      "A": "Idrocuzione",
      "B": "Emorragia",
      "C": "Idrofobia",
      "D": "Annegamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Annegamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 393,
    "question": "Le distanze olimpiche a stile libero sono:",
    "options": {
      "A": "200 e 400 metri",
      "B": "4x100 e 4x200 metri",
      "C": "50 e 100 metri",
      "D": "Tutte le risposte precedenti sono corrette"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti sono corrette.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 394,
    "question": "Le fasi dell’apprendimento sono:",
    "options": {
      "A": "Scoperta, conoscenza e consolidamento",
      "B": "Gioco, scoperta e conoscenza",
      "C": "Lettura e studio",
      "D": "Gioco, conoscenza e studio"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Scoperta, conoscenza e consolidamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 395,
    "question": "Le fasi di una bracciata:",
    "options": {
      "A": "Subiscono piccole pause per incrementi di forza",
      "B": "Sono uguali in tutti gli stili",
      "C": "A livello generale sono presa, trazione, spinta e recupero",
      "D": "Sono regolate prevalentemente dalle informazioni dell’analizzatore ottico e sono presa, trazione, spinta e recupero"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. A livello generale sono presa, trazione, spinta e recupero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 396,
    "question": "Le fasi fondamentali della bracciata sono generalmente:",
    "options": {
      "A": "Ascendente e discendente",
      "B": "Recupero, presa e trazione",
      "C": "Presa, trazione e recupero",
      "D": "Presa, trazione, spinta e recupero"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Presa, trazione, spinta e recupero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 397,
    "question": "Le nuotate simmetriche sono:",
    "options": {
      "A": "Dorso e crawl",
      "B": "Farfalla e rana",
      "C": "Dorso e Farfalla",
      "D": "Crawl e rana"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Farfalla e rana.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 398,
    "question": "Le remate del nuoto sincronizzato nella scuola nuoto sono utili per:",
    "options": {
      "A": "Prendere confidenza con l’acqua",
      "B": "Affinare la sensibilità",
      "C": "Sviluppare le capacità e le abilità necessarie al nuoto sincronizzato",
      "D": "Non sono utili"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Affinare la sensibilità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 399,
    "question": "Le remate sono:",
    "options": {
      "A": "Esercizi specifici dell’aquaswimtraining",
      "B": "Tecniche specifiche del nuoto per salvamento",
      "C": "Andature eseguite con gli arti inferiori ai fini dell’avanzamento",
      "D": "Movimenti degli arti superiori utili per il mantenimento dell’equilibrio"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Movimenti degli arti superiori utili per il mantenimento dell’equilibrio.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 400,
    "question": "Lo scivolamento nella nuotata a rana ha una funzione:",
    "options": {
      "A": "Propulsiva",
      "B": "Equilibratrice",
      "C": "Fissativa",
      "D": "Stabilizzatrice"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Fissativa.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 401,
    "question": "Lo strumento più adatto per vincere la paura è:",
    "options": {
      "A": "Il gioco",
      "B": "La compagnia di un genitore che assicuri serenità al bambino",
      "C": "Il gioco abbinato da subito a tecniche specifiche",
      "D": "La realizzazione di un’attività poco emozionante e rischiosa"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il gioco.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 402,
    "question": "Mettere nel giusto ordine le seguenti fasi di un processo didattico:",
    "options": {
      "A": "Analisi della situazione di partenza, definizione degli obiettivi, scelta di mezzi e metodi, valutazione finale",
      "B": "Definizione degli obiettivi, scelta di mezzi e metodi, analisi della situazione di partenza, valutazione finale",
      "C": "Scelta di mezzi e metodi, analisi della situazione di partenza, definizione degli obiettivi, valutazione finale",
      "D": "Definizione degli obiettivi, analisi della situazione di partenza, valutazione finale, definizione degli obiettivi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Analisi della situazione di partenza, definizione degli obiettivi, scelta di mezzi e metodi, valutazione finale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 403,
    "question": "Nel bambino la paura viene rimossa con:",
    "options": {
      "A": "L’entrare solo quando lo chiede",
      "B": "Esperienze positive",
      "C": "Spiegazioni dell’istruttore",
      "D": "La presenza dei genitori"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Esperienze positive.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 404,
    "question": "Nel crawl la coordinazione classica per ogni ciclo di braccia prevede:",
    "options": {
      "A": "Sei battute di gambe",
      "B": "Due battute di gambe",
      "C": "Quattro battute di gambe",
      "D": "Dieci battute di gambe"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sei battute di gambe.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 405,
    "question": "Nel crawl la fase più efficace agli effetti propulsivi è:",
    "options": {
      "A": "La presa",
      "B": "La trazione",
      "C": "La spinta",
      "D": "La fase aerea"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La spinta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 406,
    "question": "Nel crawl, la bracciata si effettua a:",
    "options": {
      "A": "Gomito flesso sia nel recupero che nella fase subacquea",
      "B": "Gomito disteso sia nel recupero che nella fase subacquea",
      "C": "Braccio teso",
      "D": "Gomito disteso nel recupero e flesso nella fase subacquea"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Gomito flesso sia nel recupero che nella fase subacquea.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 407,
    "question": "Nel crawl:",
    "options": {
      "A": "L’azione propulsiva è ripartita in modo uguale tra gambe e braccia",
      "B": "Tra spinta e recupero, in determinate condizioni è preferibile effettuare una piccolissima pausa",
      "C": "La fase di trazione è la più importante ai fini della propulsione",
      "D": "Il recupero avviene fuori dall’acqua, con il braccio flesso, i muscoli decontratti , il gomito alto e la mano che sfiora l’acqua"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il recupero avviene fuori dall’acqua, con il braccio flesso, i muscoli decontratti , il gomito alto e la mano che sfiora l’acqua 41.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 408,
    "question": "Nel crawl:",
    "options": {
      "A": "L’azione propulsiva è ripartita in modo uguale tra gambe e braccia",
      "B": "Braccia e gambe contribuiscono in egual maniera alla propulsione",
      "C": "È importante la posizione del gomito alto e avanzato nella fase di trazione",
      "D": "Tra spinta e recupero, in determinate condizioni è preferibile effettuare una piccola pausa"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. È importante la posizione del gomito alto e avanzato nella fase di trazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 409,
    "question": "Nel crawl:",
    "options": {
      "A": "È importante che l’atleta inspiri per tutto il tratto subacqueo della bracciata.",
      "B": "L’allungamento del corpo incide poco sullo scivolamento.",
      "C": "La testa deve essere tenuta alta per garantire la miglior posizione idrodinamica.",
      "D": "Tra spinta e recupero ci deve essere continuità."
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tra spinta e recupero ci deve essere continuità..",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 410,
    "question": "Nel dorso è un errore più grave:",
    "options": {
      "A": "Non effettuare il rollio",
      "B": "Fermare la bracciata lungo i fianchi",
      "C": "Muovere le gambe a bicicletta",
      "D": "Nuotare con il capo leggermente sollevato sull’acqua"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Fermare la bracciata lungo i fianchi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 411,
    "question": "Nel dorso la bracciata è:",
    "options": {
      "A": "Gomito flesso sia nella fase aerea che in quella subacquea",
      "B": "Gomito disteso nella fase aerea e flesso in quella subacquea",
      "C": "Gomito disteso nella fase aerea e in quella subacquea",
      "D": "Braccio teso"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gomito disteso nella fase aerea e flesso in quella subacquea.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 412,
    "question": "Nel dorso la coordinazione respiratoria:",
    "options": {
      "A": "Non ha molta importanza in quanto la bocca è sempre fuori dall’acqua e non influisce sul rendimento della nuotata",
      "B": "È corretto ritmarla ed automatizzarla per avere scambio d’aria frequente e assicurare una buona ossigenazione del sangue",
      "C": "Si può respirare ogni 6/8 bracciate, indipendentemente dalla frequenza",
      "D": "È importante unicamente nelle distanze gara dei 100 e 200 metri dorso, nei 50 metri si può anche non respirare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. È corretto ritmarla ed automatizzarla per avere scambio d’aria frequente e assicurare una buona ossigenazione del sangue.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 413,
    "question": "Nel dorso, al termine della fase di recupero, come entra in acqua la mano?",
    "options": {
      "A": "Con il dorso",
      "B": "Con il palmo rivolto verso il corpo del nuotatore",
      "C": "Con il palmo della mano rivolto verso l’esterno",
      "D": "Con il palmo rivolto verso il basso"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Con il palmo della mano rivolto verso l’esterno.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 414,
    "question": "Nel dorso, le braccia, si trovano sempre in posizione:",
    "options": {
      "A": "Contrapposta",
      "B": "Parallela",
      "C": "Libera",
      "D": "Perpendicolare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Contrapposta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 415,
    "question": "Nel dorso, nella fase di spinta è importante:",
    "options": {
      "A": "Esprimere il minimo della forza",
      "B": "Esprimere il massimo della forza",
      "C": "Creare una pausa prima dell’inizio del recupero",
      "D": "Respirare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Esprimere il massimo della forza.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 416,
    "question": "Nel galleggiamento statico supino in che posizione sono le braccia rispetto al corpo?",
    "options": {
      "A": "In alto",
      "B": "In fuori",
      "C": "Lungo i fianchi",
      "D": "In basso"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. In fuori.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 417,
    "question": "Nel kick (o pull kick) del nuoto sincronizzato il movimento effettuato dalle gambe è:",
    "options": {
      "A": "A forbice",
      "B": "Alternato",
      "C": "Bicicletta",
      "D": "A rana"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. A rana.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 418,
    "question": "Nel nuoto sincronizzato la posizione dell’alligatore si effettua:",
    "options": {
      "A": "Solo da proni",
      "B": "Solo da supini",
      "C": "Sia proni che supini",
      "D": "Sul fianco"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Sia proni che supini.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 419,
    "question": "Nel processo di ambientamento si segue quale ordine?",
    "options": {
      "A": "Immersione-scivolamento- galleggiamento-rilassamento- educazione respiratoria",
      "B": "Immersione-rilassamento- scivolamento-educazione respiratoria-galleggiamento",
      "C": "Educazione respiratoria- galleggiamento-rilassamento- scivolamento-immersione",
      "D": "Immersione-rilassamento-educazione respiratoria-galleggiamento- scivolamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Immersione-rilassamento-educazione respiratoria-galleggiamento- scivolamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 420,
    "question": "Nel tuffo, per entrare in acqua in modo dolce (senza spanciare) bisogna:",
    "options": {
      "A": "Flettere la testa in avanti",
      "B": "Spingere con le gambe molto forte dal bordo o dal blocco",
      "C": "Non tuffarsi",
      "D": "Trattenere l’aria più possibile"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Flettere la testa in avanti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 421,
    "question": "Nell’ambientamento degli adulti:",
    "options": {
      "A": "Si propongono attività uguali a quelle dei bambini",
      "B": "Non è necessario utilizzare la vasca didattica",
      "C": "È indispensabile la tavoletta",
      "D": "Si può utilizzare un approccio maggiormente cognitivo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Si può utilizzare un approccio maggiormente cognitivo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 422,
    "question": "Nell’ambientamento in acqua alta l’istruttore deve essere:",
    "options": {
      "A": "Fuori dall’acqua",
      "B": "In acqua",
      "C": "Una lezione fuori, una in acqua",
      "D": "È indifferente"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Fuori dall’acqua.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 423,
    "question": "Nell’ambientamento quale di queste situazioni è utile?",
    "options": {
      "A": "Avere bene in mente schemi rigidi e precisi",
      "B": "Iniziare in maniera precoce l’impostazione della nuotata",
      "C": "Una leadership autoritaria",
      "D": "L’impostazione della attività in maniera giocosa"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. L’impostazione della attività in maniera giocosa.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 424,
    "question": "Nell’ambito della ginnastica educativa e prenatatoria quale è il complesso articolare la cui mobilità è meno stimolabile?",
    "options": {
      "A": "Complesso articolare del ginocchio",
      "B": "Complesso articolare della colonna vertebrale",
      "C": "Complesso articolare tibio–tarsico",
      "D": "Complesso articolare scapolo- omerale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Complesso articolare del ginocchio.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 425,
    "question": "Nell’insegnamento del nuoto il gioco può essere utilizzato come:",
    "options": {
      "A": "Strumento per sviluppare la motricità innata dell’individuo e come mezzo per l’apprendimento di tecniche motorie più complesse",
      "B": "Ricompensa per un’esercitazione od un allenamento ben svolto",
      "C": "Pausa per permettere agli allievi di scaricare la tensione e riacquisire le giuste motivazioni all’apprendimento",
      "D": "Mezzo per ammansire i genitori degli allievi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Strumento per sviluppare la motricità innata dell’individuo e come mezzo per l’apprendimento di tecniche motorie più complesse.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 426,
    "question": "Nell’insegnamento della bracciata a dorso bisogna verificare che:",
    "options": {
      "A": "La respirazione venga effettuata solo con il naso",
      "B": "Il recupero venga effettuato a braccio disteso e ben alto, con mano rilassata",
      "C": "La trazione avvenga in profondità, e non lateralmente",
      "D": "Le gambe si muovano simmetricamente"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il recupero venga effettuato a braccio disteso e ben alto, con mano rilassata.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 427,
    "question": "Nell’insegnamento della farfalla è bene procedere:",
    "options": {
      "A": "Con brevi tratti molto veloci",
      "B": "Con tratti anche lunghi ma nuotati correttamente",
      "C": "Con serie piramidali",
      "D": "Con ripetute di almeno 50 metri, per una corretta assimilazione del gesto tecnico"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Con brevi tratti molto veloci.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 428,
    "question": "Nell’insegnamento delle quattro nuotate qual è lo stile che si insegna partendo dall’azione degli arti inferiori?",
    "options": {
      "A": "Rana",
      "B": "Crawl",
      "C": "Farfalla",
      "D": "Dorso"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Rana.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 429,
    "question": "Nell’insegnamento di una nuotata cosa è opportuno curare inizialmente?",
    "options": {
      "A": "Costanza, precisione e fluidità dei movimenti",
      "B": "Caratteristiche elementari del movimento",
      "C": "Struttura di base, ritmo ed accoppiamento dei movimenti",
      "D": "Coordinazione e controllo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Struttura di base, ritmo ed accoppiamento dei movimenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 430,
    "question": "Nell’organizzazione di una singola lezione si deve dedicare più tempo a:",
    "options": {
      "A": "La fase di introduzione",
      "B": "La fase di consolidamento",
      "C": "La fase di apprendimento",
      "D": "La fase di rinforzo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La fase di apprendimento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 431,
    "question": "Nella bracciata a crawl e a dorso è utile effettuare una pausa nell’azione delle braccia?",
    "options": {
      "A": "No",
      "B": "Sì",
      "C": "Dipende dalla capacità di resistenza aerobica del soggetto",
      "D": "Sì a crawl, no a dorso"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. No.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 432,
    "question": "Nella didattica della farfalla s’inizia insegnando:",
    "options": {
      "A": "Il colpo di gambe per ricercare il movimento del bacino",
      "B": "Tutto insieme per facilitare la comprensione tecnica",
      "C": "La bracciata, che è il principale fattore di avanzamento",
      "D": "È indifferente perché è uno stile facile da imparare"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La bracciata, che è il principale fattore di avanzamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 433,
    "question": "Nella didattica della farfalla, il termine delfinizzazione significa:",
    "options": {
      "A": "Movimento degli arti durante la nuotata",
      "B": "Il momento della respirazione",
      "C": "L’atteggiamento mentale che il nuotatore deve assumere",
      "D": "Gli esercizi da proporre per ottenere un movimento ondulatorio del corpo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Gli esercizi da proporre per ottenere un movimento ondulatorio del corpo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 434,
    "question": "Nella farfalla è obbligatorio eseguire una respirazione:",
    "options": {
      "A": "Ogni ciclo di bracciata",
      "B": "Ogni due cicli di bracciata",
      "C": "Due per ciclo di bracciata",
      "D": "Non c’è nessun obbligo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Non c’è nessun obbligo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 435,
    "question": "Nella farfalla il ritmo braccia/gambe va insegnato:",
    "options": {
      "A": "Da subito per aiutare il principiante a velocizzare la nuotata",
      "B": "Dopo l’età puberale quando vi è un aumento sostanziale della forza",
      "C": "Solo agli allievi giovani",
      "D": "Non va insegnato, si definisce con l’evoluzione della nuotata"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Non va insegnato, si definisce con l’evoluzione della nuotata.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 436,
    "question": "Nella farfalla la battuta di gambe deve essere, pena squalifica:",
    "options": {
      "A": "Libera",
      "B": "Armoniosa",
      "C": "Simmetrica, simultanea e con i piedi tassativamente alla stessa altezza",
      "D": "Simmetrica, simultanea anche se con i piedi non alla stessa altezza"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Simmetrica, simultanea anche se con i piedi non alla stessa altezza.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 437,
    "question": "Nella farfalla, la respirazione avviene:",
    "options": {
      "A": "Durante il recupero",
      "B": "Quando se ne ha bisogno",
      "C": "Durante la fase di appoggio/presa",
      "D": "Durante la fase di spinta"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Durante la fase di spinta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 438,
    "question": "Nella farfalla, terminata la trazione le mani spingono con forza verso:",
    "options": {
      "A": "Il Petto",
      "B": "L’esterno",
      "C": "I fianchi",
      "D": "L’alto"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. I fianchi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 439,
    "question": "Nella farfalla:",
    "options": {
      "A": "Tutti i movimenti devono essere eseguiti simmetricamente",
      "B": "Tutti i movimenti devono essere eseguiti asimmetricamente",
      "C": "La fase di spinta delle braccia è fondamentale per l’avanzamento",
      "D": "Il recupero non va coordinato con l’azione delle gambe"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Tutti i movimenti devono essere eseguiti simmetricamente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 440,
    "question": "Nella fase del consolidamento:",
    "options": {
      "A": "Si incontra il problema da risolvere",
      "B": "Si sperimenta la soluzione",
      "C": "Si memorizza la soluzione",
      "D": "Si attende un’illuminazione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Si memorizza la soluzione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 441,
    "question": "Nella fase della conoscenza:",
    "options": {
      "A": "Si incontra il problema da risolvere",
      "B": "Si sperimenta la soluzione",
      "C": "Si memorizza la soluzione",
      "D": "Si attende un’illuminazione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Si sperimenta la soluzione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 442,
    "question": "Nella fase della scoperta:",
    "options": {
      "A": "Si incontra il problema da risolvere",
      "B": "Si sperimenta la soluzione",
      "C": "Si memorizza la soluzione",
      "D": "Si attende un’illuminazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Si incontra il problema da risolvere.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 443,
    "question": "Nella fase di consolidamento:",
    "options": {
      "A": "La durata è di circa 20 minuti",
      "B": "Aumenta l’attenzione degli allievi perché aumentano le difficoltà in modo da predisporli alla fase successiva",
      "C": "Troviamo il nucleo centrale della lezione",
      "D": "Le nuove informazioni devono essere pianificate e ponderate"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Aumenta l’attenzione degli allievi perché aumentano le difficoltà in modo da predisporli alla fase successiva.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 444,
    "question": "Nella fase di trazione della bracciata a crawl il gomito deve essere:",
    "options": {
      "A": "Più basso rispetto alla mano",
      "B": "Disteso",
      "C": "Più alto rispetto alla mano",
      "D": "Più avanti rispetto alla mano"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Più alto rispetto alla mano.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 445,
    "question": "Nella fase iniziale dell’insegnamento della nuotata a crawl è più importante verificare:",
    "options": {
      "A": "La giusta flessione del gomito durante la trazione",
      "B": "La continuità delle azioni e l’assenza di pause",
      "C": "La flessione del gomito durante il recupero",
      "D": "La traiettoria subacquea a S del braccio"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La continuità delle azioni e l’assenza di pause.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 446,
    "question": "Nella fase subacquea a rana dopo la virata la corretta sequenza dei movimenti è:",
    "options": {
      "A": "Spinta dal bordo, azione di braccia, gambata rana, recupero delle braccia",
      "B": "Presa/appoggio, trazione, spinta, recupero",
      "C": "Spinta dal bordo, gambata a delfino, azione delle braccia, recupero, gambata rana",
      "D": "Spinta dal bordo, bracciata, colpo di gambe a delfino, recupero delle braccia, gambata rana"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Spinta dal bordo, bracciata, colpo di gambe a delfino, recupero delle braccia, gambata rana.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 447,
    "question": "Nella ginnastica prenatatoria l’allenamento del complesso articolare della colonna vertebrale:",
    "options": {
      "A": "È importante perché questa struttura svolge il ruolo di asse portante per il capo, il tronco e per gli arti inferiori",
      "B": "Deve essere effettuato sempre a intensità medio-basse",
      "C": "Non prevede controindicazioni",
      "D": "È importante perché questa struttura svolge il ruolo di asse portante per il capo, il tronco e per gli arti superiori"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. È importante perché questa struttura svolge il ruolo di asse portante per il capo, il tronco e per gli arti superiori.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 448,
    "question": "Nella ginnastica prenatatoria, si cura:",
    "options": {
      "A": "La mobilità articolare",
      "B": "Lo sviluppo delle capacità condizionali",
      "C": "La tecnica di nuotata a secco",
      "D": "Lo stretching"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La mobilità articolare.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 449,
    "question": "Nella nuotata a crawl che tipo di movimenti si eseguono sia con gli arti superiori sia con gli arti inferiori?",
    "options": {
      "A": "Alternato e ciclico",
      "B": "Simultaneo e ciclico",
      "C": "Simultaneo e simmetrico",
      "D": "Simmetrico e alternato"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Alternato e ciclico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 450,
    "question": "Nella nuotata a crawl, per ottimizzare la tecnica, la mano dovrebbe uscire:",
    "options": {
      "A": "All’altezza dell’anca",
      "B": "All’altezza della coscia",
      "C": "All’altezza del ginocchio",
      "D": "All’altezza della spalla"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. All’altezza della coscia.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 451,
    "question": "Nella nuotata a dorso che funzione ha, nella parte finale della spinta, l’azione della mano verso il basso?",
    "options": {
      "A": "Propulsiva",
      "B": "Stabilizzatrice",
      "C": "Liberatoria",
      "D": "Alternativa"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Liberatoria.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 452,
    "question": "Nella nuotata a dorso:",
    "options": {
      "A": "Non è presente il rollio",
      "B": "Durante tutta la prima fase della bracciata il gomito deve essere in linea con la mano e il poso",
      "C": "Durante tutta la prima fase della bracciata si deve mantenere il gomito più alto della mano e del polso",
      "D": "Non è importante la continuità del movimento"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Durante tutta la prima fase della bracciata si deve mantenere il gomito più alto della mano e del polso.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 453,
    "question": "Nella nuotata a farfalla la fase subacquea della bracciata è formata da:",
    "options": {
      "A": "Appoggio-presa/trazione/ spinta",
      "B": "Presa/trazione/recupero",
      "C": "Appoggio-presa/spinta/recupero",
      "D": "Presa/recupero"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Appoggio-presa/trazione/ spinta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 454,
    "question": "Nella nuotata a farfalla la respirazione avviene:",
    "options": {
      "A": "Al termine della fase di recupero",
      "B": "In fase di spinta",
      "C": "Ogni quattro colpi di gambe",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Nessuna delle risposte precedenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 455,
    "question": "Nella nuotata a farfalla, i movimenti degli arti superiori e inferiori sono:",
    "options": {
      "A": "Simmetrici e alternati",
      "B": "Simultanei e simmetrici",
      "C": "Simultanei e alternati",
      "D": "Alternati e equilibrati"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Simultanei e simmetrici.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 456,
    "question": "Nella nuotata a farfalla, il secondo colpo di gambe che funzione ha?",
    "options": {
      "A": "Propulsiva",
      "B": "Stabilizzatrice",
      "C": "Equilibratrice",
      "D": "Conservatrice"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Propulsiva.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 457,
    "question": "Nella nuotata a farfalla:",
    "options": {
      "A": "La prima battuta delle gambe non si relaziona al movimento delle braccia",
      "B": "Il capo esce per la respirazione prima che la mani oltrepassano la linea delle spalle",
      "C": "Il capo esce per la respirazione dopo che la mani oltrepassano la linea delle spalle",
      "D": "Il capo può uscire per la respirazione indipendentemente dalla posizione delle mani"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Il capo esce per la respirazione dopo che la mani oltrepassano la linea delle spalle.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 458,
    "question": "Nella nuotata a rana l’inspirazione avviene quando:",
    "options": {
      "A": "Sia gli arti inferiori che quelli superiori sono completamente distesi",
      "B": "Le spalle si trovano sopra la superficie dell’acqua",
      "C": "Le braccia sono distese e le gambe sono flesse",
      "D": "Le mani sono in fase di appoggio/presa"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Le spalle si trovano sopra la superficie dell’acqua.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 459,
    "question": "Nella nuotata a rana la gamba inizia a flettersi sulla coscia:",
    "options": {
      "A": "Nella fase di presa della bracciata",
      "B": "Tra la trazione e il recupero delle braccia",
      "C": "Alla fine del recupero delle braccia",
      "D": "Quando il corpo è in completa estensione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Alla fine del recupero delle braccia.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 460,
    "question": "Nella nuotata a rana le fasi della bracciata sono:",
    "options": {
      "A": "Trazione, spinta, recupero, presa",
      "B": "Spinta, trazione, recupero",
      "C": "Presa, trazione, spinta, recupero",
      "D": "Presa, trazione, recupero"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Presa, trazione, recupero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 461,
    "question": "Nella nuotata a rana, la respirazione è:",
    "options": {
      "A": "Frontale",
      "B": "Come si preferisce",
      "C": "Alternata",
      "D": "Laterale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Frontale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 462,
    "question": "Nella nuotata a rana, tutti i movimenti degli arti vengono eseguiti:",
    "options": {
      "A": "Asincroni",
      "B": "Sott’acqua",
      "C": "Simultaneamente",
      "D": "Simmetricamente"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Simmetricamente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 463,
    "question": "Nella nuotata con trasporto del pericolante quale tipo di battuta gambe è preferibile utilizzare?",
    "options": {
      "A": "Crawl",
      "B": "Farfalla",
      "C": "Rana",
      "D": "Bicicletta"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Bicicletta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 464,
    "question": "Nella nuotata dorso l’azione subacquea degli arti superiori si distingue in:",
    "options": {
      "A": "Appoggio/presa, trazione e spinta",
      "B": "Trazione e spinta",
      "C": "Appoggio/presa e spinta",
      "D": "Trazione, spinta, recupero"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Appoggio/presa, trazione e spinta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 465,
    "question": "Nella pallanuoto quali sono i mezzi a disposizione per la fase di attacco?",
    "options": {
      "A": "I lanci, i marcamenti e i tiri",
      "B": "I lanci, gli spostamenti, le intercettazioni del pallone e i tiri",
      "C": "I lanci, gli spostamenti, i tiri e le segnature",
      "D": "I lanci, gli spostamenti e i tiri"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. I lanci, gli spostamenti e i tiri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 466,
    "question": "Nella pallanuoto si distinguono due fasi, l’attacco e la difesa.Per l’attacco quali mezzi tecnici deve avere a disposizione la squadra?",
    "options": {
      "A": "Marcamento – lancio – tiro",
      "B": "Forza – resistenza – velocità",
      "C": "Intercettamento del pallone – marcamento – lancio",
      "D": "Lanci – spostamento – tiro"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Lanci – spostamento – tiro.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 467,
    "question": "Nella pallanuoto, quale fondamentale viene utilizzato per le partenze?",
    "options": {
      "A": "Bicicletta",
      "B": "Trudgen",
      "C": "Gambata a Stile Libero",
      "D": "Remata (sculling)"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Trudgen.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 468,
    "question": "Nella partenza a rana quante battute di gambe a delfino sono ammesse:",
    "options": {
      "A": "Nessuna",
      "B": "Quante se ne vogliono, purché si riemerga entro i 15 metri",
      "C": "Una",
      "D": "Al massimo due"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Una.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 469,
    "question": "Nella programmazione didattica che posto occupa la fase dell’ambientamento?",
    "options": {
      "A": "Primo",
      "B": "Secondo",
      "C": "Terzo",
      "D": "Ultimo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Primo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 470,
    "question": "Nella progressione didattica per la rana, è importante curare la fase di scivolamento?",
    "options": {
      "A": "No, perché lo scivolamento è una dote innata",
      "B": "Sì, ma solo nelle gare molto veloci",
      "C": "Sì, perché è una caratteristica essenziale dello stile",
      "D": "No, perché l’avanzamento viene, per la maggior parte, dal colpo di gambe"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Sì, perché è una caratteristica essenziale dello stile.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 471,
    "question": "Nella rana il colpo di gambe è:",
    "options": {
      "A": "A velocità costante",
      "B": "In accelerazione",
      "C": "A velocità uniforme",
      "D": "Pressoché inifluente"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. In accelerazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 472,
    "question": "Nella rana la fase di recupero delle braccia è:",
    "options": {
      "A": "Subacquea",
      "B": "Aerea",
      "C": "Parzialmente subacquea",
      "D": "Ellittica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Subacquea.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 473,
    "question": "Nella rana la fase di spinta della bracciata:",
    "options": {
      "A": "Non è mai presente",
      "B": "Non è mai assente",
      "C": "È fondamentale",
      "D": "È presente dopo alcuni particolari movimenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. È presente dopo alcuni particolari movimenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 474,
    "question": "Nella rana la respirazione è:",
    "options": {
      "A": "Come si vuole",
      "B": "Obliqua",
      "C": "Laterale",
      "D": "Frontale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Frontale 47.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 475,
    "question": "Nella rana, la velocità di spostamento della mano è massima durante:",
    "options": {
      "A": "La Spinta",
      "B": "La Trazione",
      "C": "Il recupero",
      "D": "La remata verso l’interno"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La remata verso l’interno.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 476,
    "question": "Nella rana:",
    "options": {
      "A": "La fase attiva della gambata avviene mentre le braccia si estendono in avanti",
      "B": "La coordinazione ha un’importanza minore rispetto al dorso",
      "C": "È fondamentale che la trazione inizi quando le gambe non sono completamente distese",
      "D": "La trazione è ottimale se la profondità delle mani è di circa 25-30 cm."
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La fase attiva della gambata avviene mentre le braccia si estendono in avanti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 477,
    "question": "Nella remata standard del nuoto sincronizzato (galleggiamento supino e braccia flesse lungo i fianchi) per spostarsi in direzione della testa la mano deve essere:",
    "options": {
      "A": "In flessione palmare con le dita più basse rispetto al polso",
      "B": "In flessione dorsale con le dita più alte rispetto al polso",
      "C": "Distesa in linea con l’avambraccio",
      "D": "A martello"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. In flessione dorsale con le dita più alte rispetto al polso.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 478,
    "question": "Nella virata a dorso, cosa non è consentito fare in posizione prona?",
    "options": {
      "A": "Muovere le braccia",
      "B": "Espirare",
      "C": "Muovere la testa",
      "D": "Muovere le gambe"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Muovere le gambe.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 479,
    "question": "Nella virata a rana il tocco delle mani sulla parete come deve avvenire?",
    "options": {
      "A": "Simultaneamente",
      "B": "È sufficiente solo il tocco di una mano",
      "C": "Basta toccare la parete con una qualsiasi parte del corpo",
      "D": "Tassativamente sotto il pelo dell’acqua"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Simultaneamente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 480,
    "question": "Nella virata a rana:",
    "options": {
      "A": "È consentita l’azione dall’alto verso il basso degli arti inferiori",
      "B": "È consentito toccare il bordo con le mani a differenti altezze",
      "C": "È consigliabile affondare le spalle nella fase di entrata",
      "D": "È consigliabile ridurre l’angolo tra coscia e gamba per avere un colpo di gambe più efficace"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. È consentito toccare il bordo con le mani a differenti altezze.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 481,
    "question": "Nelle gare a farfalla la distanza più lunga è:",
    "options": {
      "A": "400 metri",
      "B": "200 metri",
      "C": "100 metri",
      "D": "50 metri"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 200 metri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 482,
    "question": "Nello stile libero è un errore più grave:",
    "options": {
      "A": "Respirare ogni 4 bracciate",
      "B": "Effettuare la passata subacquea con le dita leggermente aperte",
      "C": "Nuotare con le gambe che battono poco",
      "D": "Respirare frontalmente invece che lateralmente"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Respirare frontalmente invece che lateralmente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 483,
    "question": "Obblighi dell’istruttore:",
    "options": {
      "A": "Diligenza, prudenza, perizia",
      "B": "Epica, etica, etnica, pathos",
      "C": "Prudenza, giustizia, fortezza, temperanza",
      "D": "Costituzione, condizione, coordinazione, controllo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Diligenza, prudenza, perizia.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 484,
    "question": "Organizzare un corso di nuoto significa:",
    "options": {
      "A": "Seguire esclusivamente le progressioni didattiche prestabilite",
      "B": "Proporre esercizi sempre più difficili",
      "C": "Lavorare seguendo il principio della casualità",
      "D": "Avere ben chiari gli obiettivi che si vogliono perseguire"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Avere ben chiari gli obiettivi che si vogliono perseguire.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 485,
    "question": "Per acquisire un efficiente ritmo respiratorio quale di queste capacità bisogna padroneggiare correttamente?",
    "options": {
      "A": "Trattenere l’aria",
      "B": "Svuotare completamente i polmoni",
      "C": "Soffiare bocca/naso",
      "D": "Nessuna delle precedenti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Svuotare completamente i polmoni.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 486,
    "question": "Per evitare incidenti l’istruttore non deve mai:",
    "options": {
      "A": "Perdere di vista gli allievi",
      "B": "Contare gli allievi",
      "C": "Parlare con i colleghi",
      "D": "Lasciar scadere il tesserino"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Perdere di vista gli allievi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 487,
    "question": "Per evitare incidenti l’istruttore non deve mai:",
    "options": {
      "A": "Distrarsi",
      "B": "Voltare le spalle agli allievi",
      "C": "Assentarsi",
      "D": "Tutte le voci precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le voci precedenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 488,
    "question": "Per facilitare il galleggiamento gli arti devono essere",
    "options": {
      "A": "Rigidamente distesi",
      "B": "Flessi",
      "C": "Distesi e rilassati",
      "D": "In continuo movimento per spostare l’acqua"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Distesi e rilassati.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 489,
    "question": "Per il raggiungimento degli obiettivi dell’attività motoria in acqua è consigliato dividere i gruppi:",
    "options": {
      "A": "Secondo parametri oggettivi (misurazioni antropometriche: altezza, ampiezza braccia, peso, ecc)",
      "B": "Tra maschi e femmine",
      "C": "Per livello tecnico/capacità",
      "D": "Per simpatia"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Per livello tecnico/capacità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 490,
    "question": "Per quale distanza massima è permesso ad un concorrente di rimanere completamente immerso dopo la partenza e dopo ogni virata nelle gare di stile libero dorso e farfalla?",
    "options": {
      "A": "12,5 metri",
      "B": "15 metri",
      "C": "10 metri",
      "D": "25 metri"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 15 metri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 491,
    "question": "Per quale motivo è opportuno prevedere l’insegnamento della farfalla come ultimo dei quattro stili?",
    "options": {
      "A": "Perché necessita di buoni livelli di forza e resistenza",
      "B": "Perché ha elevati gradi di difficoltà coordinativa",
      "C": "Perché ci vogliono abilità acquatiche particolari",
      "D": "Perché i movimenti di tipo ondulatorio creano scompensi alla colonna vertebrale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Perché necessita di buoni livelli di forza e resistenza.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 492,
    "question": "Per quale motivo il recupero delle braccia nella farfalla deve avvenire a braccia distese?",
    "options": {
      "A": "Perché è il movimento più semplice",
      "B": "Per evitare un eccessivo innalzamento delle spalle",
      "C": "Per effettuare una trazione più efficace",
      "D": "Per non incorrere in una squalifica"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Per evitare un eccessivo innalzamento delle spalle.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 493,
    "question": "Per quali delle seguenti discipline acquatiche è fondamentale l’apprendimento della bicicletta?",
    "options": {
      "A": "Nuoto in acque libere-tuffi da grandi altezze",
      "B": "Nuoto-pallanuoto-nuoto sincronizzato",
      "C": "Tuffi-pallanuoto-nuoto sincronizzato",
      "D": "Pallanuoto-nuoto sincronizzato- salvamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Pallanuoto-nuoto sincronizzato- salvamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 494,
    "question": "Per un buon galleggiamento è fondamentale:",
    "options": {
      "A": "L’uso dei braccioli",
      "B": "L’uso del bastone ricurvo",
      "C": "La presenza dell’istruttore o del genitore",
      "D": "Il rilassamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il rilassamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 495,
    "question": "Per un ciclo completo delle braccia a farfalla quante gambate sono necessarie?",
    "options": {
      "A": "Nessuna",
      "B": "Due",
      "C": "Tre",
      "D": "Quattro"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Due.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 496,
    "question": "Perché è importante conoscere le tecniche di primo soccorso?",
    "options": {
      "A": "Per ampliare le proprie conoscenze e il bagaglio culturale",
      "B": "Per avere più prestigio fra i tecnici brevettati",
      "C": "Per acquisire gli indispensabili crediti formativi",
      "D": "Per effettuare un corretto intervento in caso di necessità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Per effettuare un corretto intervento in caso di necessità 49.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 497,
    "question": "Perché è importante far svolgere agli allievi attività di immersione in acqua fonda ?",
    "options": {
      "A": "Per imparare a raccogliere gli oggetti dal fondo ed essere capaci di immergere le testa",
      "B": "Per conoscere lo spazio sottostante e sentire che l’acqua spinge verso l’alto",
      "C": "Perché è piacevole ed insegna a soffiare",
      "D": "Non è opportuno svolgere questo tipo di esercitazioni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Per conoscere lo spazio sottostante e sentire che l’acqua spinge verso l’alto.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 498,
    "question": "Perché la rana è lo stile più lento?",
    "options": {
      "A": "Perché la posizione in acqua è più inclinata rispetto agli altri stili",
      "B": "Perché è uno stile discontinuo",
      "C": "Perché la testa rompe la superficie dell’acqua ad ogni bracciata",
      "D": "Perché non c’è la fase di spinta nella bracciata"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Perché è uno stile discontinuo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 499,
    "question": "Principale problema che s’incontra nell’insegnamento del dorso:",
    "options": {
      "A": "Impostazione della posizione dei piedi",
      "B": "Posizione in acqua seduta",
      "C": "Spinta delle braccia sufficiente per la propulsione",
      "D": "Coordinazione tra bracciata e respirazione laterale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Posizione in acqua seduta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 500,
    "question": "Principale problema che s’incontra nell’insegnamento della farfalla:",
    "options": {
      "A": "Impostazione della posizione dei piedi",
      "B": "Posizione in acqua seduta",
      "C": "Spinta delle braccia sufficiente per la propulsione",
      "D": "Coordinazione tra bracciata e respirazione laterale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Spinta delle braccia sufficiente per la propulsione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 501,
    "question": "Principale problema che s’incontra nell’insegnamento della rana:",
    "options": {
      "A": "Impostazione della posizione dei piedi",
      "B": "Posizione in acqua seduta",
      "C": "Spinta delle braccia sufficiente per la propulsione",
      "D": "Coordinazione tra bracciata e respirazione laterale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Impostazione della posizione dei piedi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 502,
    "question": "Principale problema che s’incontra nell’insegnamento dello stile libero:",
    "options": {
      "A": "Impostazione della posizione dei piedi",
      "B": "Posizione in acqua seduta",
      "C": "Spinta delle braccia sufficiente per la propulsione",
      "D": "Coordinazione tra bracciata e respirazione laterale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Coordinazione tra bracciata e respirazione laterale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 503,
    "question": "Principio indispensabile della nuotata a crawl è:",
    "options": {
      "A": "Il sollevamento della testa per agevolare la respirazione",
      "B": "La continuità delle azioni",
      "C": "L’eliminazione del rollio del tronco",
      "D": "L’inserimento di una pauso dopo la spinta di ciascun braccio per sfruttare lo scivolamento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La continuità delle azioni.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 504,
    "question": "Qual è il momento in cui è più probabile possa accadere un incidente in piscina?",
    "options": {
      "A": "Nella fase di ginnastica prenatatoria",
      "B": "Nella fase di riscaldamento in acqua",
      "C": "Nel cambio tra un turno e l’altro",
      "D": "Durante l’insegnamento delle gambe a rana"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Nel cambio tra un turno e l’altro.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 505,
    "question": "Qual è l’elemento indispensabile per eseguire un tuffo?",
    "options": {
      "A": "Saltare più in alto possibile",
      "B": "Controllare lo sbilanciamento in avanti",
      "C": "Saper trattenere il respiro (apnea)",
      "D": "Tenere il naso chiuso"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Controllare lo sbilanciamento in avanti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 506,
    "question": "Qual è l’esercizio che presenta maggiori difficoltà di esecuzione per l’allievo nell’apprendimento dello stile libero?",
    "options": {
      "A": "Battuta di gambe",
      "B": "Bracciata",
      "C": "Scivolo",
      "D": "Respirazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Respirazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 507,
    "question": "Qual è l’obiettivo della scuola nuoto federale?",
    "options": {
      "A": "L’insegnamento delle quattro nuotate regolamentari",
      "B": "La strutturazione e la realizzazione di un progetto di total quality",
      "C": "L’erogazione di contributi da parte della FIN alle società affiliate",
      "D": "Il censimento delle società affiliate presenti sul territorio nazionale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La strutturazione e la realizzazione di un progetto di total quality.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 508,
    "question": "Qual è la corretta sequenza degli stili nelle gare di misti individuali?",
    "options": {
      "A": "Dorso – rana – farfalla – crawl",
      "B": "Crawl – dorso – rana – farfalla",
      "C": "Farfalla – dorso – rana – crawl",
      "D": "Dorso – farfalla – crawl – rana"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Farfalla – dorso – rana – crawl.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 509,
    "question": "Qual è la fase più propulsiva nella nuotata a stile libero?",
    "options": {
      "A": "La spinta",
      "B": "La trazione",
      "C": "iI recupero",
      "D": "La presa"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La spinta.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 510,
    "question": "Qual è la funzione principale della gambata a stile libero?",
    "options": {
      "A": "Equilibratrice",
      "B": "Propulsiva",
      "C": "Rilassante",
      "D": "Stabilizzatrice"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Stabilizzatrice.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 511,
    "question": "Qual è la parte del corpo che viene maggiormente utilizzata per eseguire le remate ?",
    "options": {
      "A": "Piedi",
      "B": "Mani",
      "C": "Braccia",
      "D": "Testa"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Mani.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 512,
    "question": "Qual è la posizione più corretta della testa nuotando a dorso?",
    "options": {
      "A": "Raccolta verso il petto",
      "B": "In linea con il corpo",
      "C": "Retroflessa",
      "D": "Girata su un fianco"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. In linea con il corpo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 513,
    "question": "Qual è la prima forma di galleggiamento che è opportuno insegnare?",
    "options": {
      "A": "Orizzontale",
      "B": "Verticale",
      "C": "Orizzontale o verticale senza differenza",
      "D": "La facciamo scegliere al nostro allievo in relazione alle proprie attitudini"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Orizzontale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 514,
    "question": "Qual è la progressione corretta delle fasi dell’ambientamento in vasca didattica (acqua bassa)?",
    "options": {
      "A": "Approccio con l’acqua, immersione del viso e respirazione, galleggiamenti",
      "B": "Immersione del viso e respirazioni, galleggiamenti, approccio con l’acqua, prime propulsioni",
      "C": "Approccio con l’acqua, immersione del viso e respirazione, galleggiamenti, gli scivolamenti, prime propulsioni.",
      "D": "Approccio con l’acqua, immersione d viso e respirazione, galleggiamenti, prime propulsioni"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Approccio con l’acqua, immersione del viso e respirazione, galleggiamenti, gli scivolamenti, prime propulsioni..",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 515,
    "question": "Qual è la sequenza degli stili nella staffetta 4x100 mista?",
    "options": {
      "A": "Farfalla, Dorso, Rana, Stile Libero",
      "B": "Dorso, rana, farfalla, stile libero",
      "C": "Stile libero, farfalla, rana, dorso",
      "D": "A piacere degli atleti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dorso, rana, farfalla, stile libero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 516,
    "question": "Qual è la successione delle nuotate nella gara dei 100 metri misti individuali?",
    "options": {
      "A": "Rana – dorso – delfino – stile libero",
      "B": "Farfalla – dorso – rana – stile libero",
      "C": "Farfalla – rana – dorso – stile libero",
      "D": "Stile libero – dorso – rana - farfalla"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Farfalla – dorso – rana – stile libero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 517,
    "question": "Qual è lo stile che assicura la massima velocità di spostamento in acqua?",
    "options": {
      "A": "Il dorso",
      "B": "Il trudgeon",
      "C": "La farfalla",
      "D": "Il crawl"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il crawl.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 518,
    "question": "Qual è un connotato che deve caratterizzare il modello didattico della scuola nuoto per adulti?",
    "options": {
      "A": "La flessibilità a fronte di particolari problematiche individuali",
      "B": "La rigida aderenza alle progressioni didattiche stabilite",
      "C": "La costruzione di un sincero rapporto di amicizia",
      "D": "La relazione fondata su un asettico rapporto professionale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La flessibilità a fronte di particolari problematiche individuali.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 519,
    "question": "Quale aspetto della pallanuoto aiuta lo sviluppo dei processi cognitivi?",
    "options": {
      "A": "L’utilizzo delle tecniche di pallanuoto",
      "B": "Lo spirito di squadra",
      "C": "L’ideazione e attivazione di strategie tattiche",
      "D": "L’ampliamento delle abilità motorie"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. L’ampliamento delle abilità motorie.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 520,
    "question": "Quale dei seguenti campi gara è omologabile?",
    "options": {
      "A": "m. 50x21",
      "B": "m. 33,33 x 15",
      "C": "m. 25x10",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 521,
    "question": "Quale delle seguenti affermazioni sulla nuotata a dorso non è corretta?",
    "options": {
      "A": "Posizione orizzontale e postura rilassata, posizione idrodinamica",
      "B": "Testa appoggiata sull’acqua",
      "C": "Movimenti alternati e ciclici",
      "D": "Bacino leggermente affondato"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Bacino leggermente affondato.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 522,
    "question": "Quale delle seguenti azioni non è causa di squalifica in una gara a rana?",
    "options": {
      "A": "Ruotare sul dorso",
      "B": "Superare la linea dei 15 metri durante la fase subacquea di nuotata",
      "C": "Effettuare movimenti alternati delle braccia o delle gambe",
      "D": "Portare i gomiti oltre la superficie dell’acqua (ad eccezione dell’ultima bracciata di ogni vasca e durante la virata)"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Superare la linea dei 15 metri durante la fase subacquea di nuotata.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 523,
    "question": "Quale fra le seguenti esercitazioni comporta il maggiore rischio di infortunio?",
    "options": {
      "A": "Nuotata di sole gambe con tavoletta",
      "B": "Galleggiamento statico",
      "C": "Respirazioni a bordo vasca",
      "D": "Tuffi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tuffi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 524,
    "question": "Quale rapporto esiste nella nuotata a farfalla tra bracciate e gambate?",
    "options": {
      "A": "1/1",
      "B": "1/2",
      "C": "2/1",
      "D": "3/2"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 1/2.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 525,
    "question": "Quale rapporto esiste nella nuotata a rana tra bracciate e gambate?",
    "options": {
      "A": "1/1",
      "B": "2/1",
      "C": "4/1",
      "D": "6/1"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 1/1.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 526,
    "question": "Quale segnale indica al nuotatore l’avvicinarsi della parete verticale durante una competizione?",
    "options": {
      "A": "L’alternanza di colori nella corsia",
      "B": "Un segnale acustico",
      "C": "La T nera disegnata sul fondo della vasca a 2 metri dal bordo",
      "D": "La T nera disegnata sul fondo della vasca a 1 metro dal bordo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La T nera disegnata sul fondo della vasca a 2 metri dal bordo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 527,
    "question": "Quale tra i seguenti elementi può influenzare maggiormente l’efficacia della nuotata a farfalla?",
    "options": {
      "A": "Frequenza",
      "B": "Profondità",
      "C": "Ampiezza",
      "D": "Continuità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Continuità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 528,
    "question": "Quale tra i seguenti non è un obiettivo della ginnastica educativa e prenatatoria?",
    "options": {
      "A": "Apprendimento delle componenti gestuali delle nuotate",
      "B": "Stimolazione delle capacità motorie in senso generale",
      "C": "Facilitazione della socializzazione",
      "D": "Elevare il tono funzionale di base in vista dell’attività in acqua"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Apprendimento delle componenti gestuali delle nuotate.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 529,
    "question": "Quale, fra queste distanze gara, non è prevista dal regolamento federale?",
    "options": {
      "A": "Staffetta 4x100 metri stile libero",
      "B": "Staffetta 4x200 metri stile libero",
      "C": "Staffetta 4x400 metri stile libero",
      "D": "Staffetta 4x100 metri mista"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Staffetta 4x400 metri stile libero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 530,
    "question": "Quali accorgimenti vanno adottati per svolgere in sicurezza la prima lezione in acqua alta?",
    "options": {
      "A": "Restare in acqua con il gruppo per essere pronti per le emergenze.",
      "B": "Chiamare un altro istruttore per vigilare insieme sul gruppo.",
      "C": "Usare metà vasca o poco meno per il lavoro così da essere facilitati nel controllo e fornirsi di bastone.",
      "D": "Usare 5/6 metri di corsia, rimanere fuori dall’acqua e non perdere di vista il gruppo."
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Usare 5/6 metri di corsia, rimanere fuori dall’acqua e non perdere di vista il gruppo. 52.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 531,
    "question": "Quali cautele bisogna adottare nell’esecuzione dei tuffi?",
    "options": {
      "A": "Nessuna",
      "B": "Munirsi di fischietto",
      "C": "Si ordinano gli allievi in fila",
      "D": "Si ordinano gli allievi in fila e si controlla che l’area sia sgombra"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Si ordinano gli allievi in fila e si controlla che l’area sia sgombra.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 532,
    "question": "Quali delle seguenti norme vanno tenute in considerazione nella gestione di un centro natatorio?",
    "options": {
      "A": "Normative tecniche UNI",
      "B": "Norme CONI per l’impiantistica sportiva",
      "C": "Regolamenti FINA",
      "D": "Tutte le precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le precedenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 533,
    "question": "Quali di questi errori è più grave e quindi va corretto prima?",
    "options": {
      "A": "Un errore di traiettoria della mano sott’acqua",
      "B": "Una battuta di gambe deficitaria",
      "C": "Un errore di ritmo respiratorio",
      "D": "Un errore nel recupero"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Un errore di ritmo respiratorio.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 534,
    "question": "Quali fra i seguenti fattori di rischio attengono direttamente alla responsabilità dell’istruttore?",
    "options": {
      "A": "Strutturali",
      "B": "Organizzativi",
      "C": "Comportamentali",
      "D": "Motivazionali"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Comportamentali.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 535,
    "question": "Quali possono essere le finalità di una scuola nuoto federale?",
    "options": {
      "A": "Ricreativa, agonistica, didattica",
      "B": "Didattica, ricreativa, sociale",
      "C": "Aggregativa, motivazionale, sociale",
      "D": "Solo agonistica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Ricreativa, agonistica, didattica.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 536,
    "question": "Quali sono gli obiettivi dell’educazione respiratoria?",
    "options": {
      "A": "Ristrutturazione dei sistemi di riferimento",
      "B": "Controllo dell’apnea e degli scambi respiratori",
      "C": "Immersione del corpo in acqua",
      "D": "Far trascorrere i primi minuti di lezione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Controllo dell’apnea e degli scambi respiratori.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 537,
    "question": "Quali sono i benefici della ginnastica educativa e prenatatoria?",
    "options": {
      "A": "Sviluppa le capacità motorie, eleva il tono funzionale di base dei sistemi organici centrali, prepara le strutture muscolare e articolare e stimola lo sviluppo di alcune caratteristiche delle diverse aree della personalità",
      "B": "Sviluppa le capacità coordinative, prepara le strutture muscolare e articolare e stimola lo sviluppo di alcune caratteristiche delle diverse aree della personalità",
      "C": "Nessuno in particolare",
      "D": "Stimola lo sviluppo di alcune caratteristiche delle diverse aree della personalità"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sviluppa le capacità motorie, eleva il tono funzionale di base dei sistemi organici centrali, prepara le strutture muscolare e articolare e stimola lo sviluppo di alcune caratteristiche delle diverse aree della personalità.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 538,
    "question": "Quali sono le caratteristiche sport-specifiche del nuoto sincronizzato?",
    "options": {
      "A": "Forza, resistenza, mobilità articolare",
      "B": "Rapidità, coordinazione oculo- manuale, resistenza alla velocità",
      "C": "Velocità, mobilità articolare, resistenza alla forza",
      "D": "Compattezza, solidità, abnegazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Forza, resistenza, mobilità articolare.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 539,
    "question": "Quali sono le cause più frequenti di incidente in piscina?",
    "options": {
      "A": "Cadute, urti, affondamenti",
      "B": "Idrocuzione, colpo di calore, arresto cardiaco",
      "C": "Cadute, colpi d’arma da fuoco, affondamenti",
      "D": "Cadute, urti, elettrocuzione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Cadute, urti, affondamenti.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 540,
    "question": "Quali sono le dimensioni di una vasca indoor per il nuoto?",
    "options": {
      "A": "25x16,50 metri",
      "B": "30x20 metri",
      "C": "20x15 metri",
      "D": "25x10 metri"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 25x16,50 metri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 541,
    "question": "Quali sono le distanze di gara a dorso in vasca da 25m?",
    "options": {
      "A": "50, 100 e 200 m",
      "B": "100, 150 e 200 m",
      "C": "50, 100 e 400 m",
      "D": "100, 200 e 400 m"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 50, 100 e 200 m.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 542,
    "question": "Quali sono le distanze di gara a rana in vasca da 25m?",
    "options": {
      "A": "50, 100 e 200 m",
      "B": "100, 150 e 200 m",
      "C": "50, 100 e 250 m",
      "D": "100, 200 e 400 m"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 50, 100 e 200 m.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 543,
    "question": "Quali sono le distanze olimpiche nel dorso?",
    "options": {
      "A": "100, 200, 400 metri",
      "B": "50, 100, 200, 400 metri",
      "C": "100, 200, 4x100 metri",
      "D": "100, 200 metri"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. 100, 200 metri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 544,
    "question": "Quali sono le fasi della programmazione in ordine corretto?",
    "options": {
      "A": "Analisi della situazione - Definizione dell’obiettivo - Scelta dei metodi - Verifica dei risultati",
      "B": "Definizione dell’obiettivo – Verifica dei risultati – Analisi della situazione – Scelta dei metodi",
      "C": "Scelta dei metodi – Analisi della situazione – Definizione dell’obiettivo – Verifica dei risultati",
      "D": "Verifica dei risultati – Scelta dei metodi – Analisi della situazione – Definizione dell’obiettivo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Analisi della situazione - Definizione dell’obiettivo - Scelta dei metodi - Verifica dei risultati.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 545,
    "question": "Quali sono le parti del corpo coinvolte nella propulsione della gambata a rana?",
    "options": {
      "A": "Piede",
      "B": "Coscia - gamba – piede",
      "C": "Gamba-piede",
      "D": "Piede - caviglia - gamba"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Piede - caviglia - gamba.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 546,
    "question": "Quali sono le principali caratteristiche della bracciata a rana?",
    "options": {
      "A": "Presa e Trazioni veloci, Recupero lento",
      "B": "Presa veloce, Trazione e Recupero lento",
      "C": "Presa e Trazione in accelerazione, Recupero veloce e scivolamento",
      "D": "Presa, Trazione e Recupero alla stessa velocità"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Presa e Trazione in accelerazione, Recupero veloce e scivolamento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 547,
    "question": "Quali sono le principali tecniche di trasporto del pericolante?",
    "options": {
      "A": "Nuotatore stanco, presa a stile libero, presa al capo, trasporto laterale",
      "B": "Nuotatore stanco, tuck, appoggio/pressione",
      "C": "Nuotatore stanco, trasporto laterale, presa al capo, presa a ranetta",
      "D": "Nuotatore stanco, presa al petto, presa al capo, trasporto laterale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Nuotatore stanco, presa al petto, presa al capo, trasporto laterale.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 548,
    "question": "Quali sono, nel giusto ordine, le fasi della bracciata a rana?",
    "options": {
      "A": "Presa, trazione, spinta, recupero",
      "B": "Presa, spinta, recupero",
      "C": "Presa, trazione, recupero",
      "D": "Trazione, spinta, recupero"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Presa, trazione, recupero.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 549,
    "question": "Quali tra i seguenti è un obiettivo di un corso di nuoto?",
    "options": {
      "A": "Lo sviluppo di capacità senso- percettive e coordinative",
      "B": "Lo sviluppo della forza muscolare",
      "C": "L’assumere una corretta postura",
      "D": "Lo sviluppo delle masse muscolari"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Lo sviluppo di capacità senso- percettive e coordinative.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 550,
    "question": "Quali tra i seguenti obiettivi formativi fanno parte della fase di ambientamento?",
    "options": {
      "A": "Respirazione a crawl con bracciate elementari e battuta di gambe",
      "B": "Respirazioni e forme elementari di propulsione",
      "C": "Tuffo di testa dal blocco",
      "D": "Virate tecniche a crawl e dorso"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Respirazioni e forme elementari di propulsione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 551,
    "question": "Quali tra quelli elencati non sono criteri di selezione?",
    "options": {
      "A": "Fattori antropometrici ed ereditari",
      "B": "Fattori coordinativo- cognitivi",
      "C": "Fattori termoregolatori",
      "D": "Capacità di apprendimento rapido"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Fattori termoregolatori.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 552,
    "question": "Quando è opportuno insegnare la respirazione laterale a stile libero?",
    "options": {
      "A": "Quando l’allievo ha imparato la nuotata completa",
      "B": "Quando l’allievo ha imparato la bracciata in forma grezza",
      "C": "Subito, durante la didattica della bracciata",
      "D": "In qualsiasi momento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Quando l’allievo ha imparato la bracciata in forma grezza.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 553,
    "question": "Quando proporre il tuffo?",
    "options": {
      "A": "Quando l’allievo immerge il capo",
      "B": "Alla fine dell’ambientamento",
      "C": "Dopo aver appreso almeno una nuotata",
      "D": "In qualsiasi momento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Quando l’allievo immerge il capo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 554,
    "question": "Quando s’inserisce la respirazione nella bracciata a rana?",
    "options": {
      "A": "Alla fine della spinta",
      "B": "Durante la spinta",
      "C": "Alla fine della trazione",
      "D": "All’inizio della trazione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Alla fine della trazione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 555,
    "question": "Quando si può ritenere che la fase dell’ambientamento sia superata?",
    "options": {
      "A": "Appena l’allievo ha acquisito una buona padronanza dell’acqua.",
      "B": "Quando l’allievo si sa tuffare",
      "C": "Quando l’allievo galleggia sul petto e sul dorso, affonda e si sa spostare con il corpo rilassato",
      "D": "Quando l’allievo sa rimanere almeno 30 secondi in apnea"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Quando l’allievo galleggia sul petto e sul dorso, affonda e si sa spostare con il corpo rilassato.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 556,
    "question": "Quando si verifica il colpo di calore?",
    "options": {
      "A": "In caso di presenza di ossigeno",
      "B": "In luoghi molto assolati",
      "C": "In ambienti particolarmente noiosi",
      "D": "In ambienti eccessivamente caldi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. In ambienti eccessivamente caldi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 557,
    "question": "Quante sono le fasi della bracciata a stile libero?",
    "options": {
      "A": "3",
      "B": "2",
      "C": "5",
      "D": "4"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. 4.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 558,
    "question": "Quanti giocatori della stessa squadra sono in campo contemporaneamente durante una partita di pallanuoto ufficiale?",
    "options": {
      "A": "11",
      "B": "5",
      "C": "7",
      "D": "9"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. 7.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 559,
    "question": "Respirazione terrestre ed acquatica differiscono principalmente:",
    "options": {
      "A": "Per i tempi di inspirazione ed espirazione",
      "B": "Per il differente utilizzo di bocca/naso",
      "C": "Per le difficoltà nell’inspirazione, in quanto il viso deve uscire dall’acqua",
      "D": "Perché l’espirazione è forzata in quanto deve vincere la maggior pressione dell’acqua"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Perché l’espirazione è forzata in quanto deve vincere la maggior pressione dell’acqua.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 560,
    "question": "Riscaldamento, rinforzo lezione precedente, introduzione nuove proposte, attivazione, nucleo aerobico, recupero (o defaticamento) e rinforzo sono:",
    "options": {
      "A": "Le fasi della singola lezione per gruppi di scuola nuoto evoluti: ed è fondamentale affrontarne almeno quattro per ogni lezione, facendole ruotare per variare il lavoro del gruppo",
      "B": "Le fasi della programmazione del periodo: indispensabili all’insegnante per pianificare le proprie didattiche e metodologie nel periodo di insegnamento in un gruppo",
      "C": "Le fasi della singola lezione per gruppi di scuola nuoto evoluti; e la loro applicazione costante nelle lezioni garantisce la concatenazione degli stimoli, lezione dopo lezione, assicurando i principi di gradualità di progressività",
      "D": "Le fasi della singola lezione per gruppi di scuola nuoto evoluti; e la loro applicazione costante nelle lezioni favorisce la concatenazione degli stimoli, lezione dopo lezione, unitamente all’applicazione dei principi di gradualità e progressività"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Le fasi della singola lezione per gruppi di scuola nuoto evoluti; e la loro applicazione costante nelle lezioni favorisce la concatenazione degli stimoli, lezione dopo lezione, unitamente all’applicazione dei principi di gradualità e progressività.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 561,
    "question": "Scoperta, conoscenza e consolidamento sono:",
    "options": {
      "A": "Funzioni del sistema nervoso",
      "B": "Capacità coordinative speciali",
      "C": "Caratteristiche dell’intelletto",
      "D": "Fasi dell’apprendimento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Fasi dell’apprendimento.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 562,
    "question": "Se un allievo non ha ancora acquisito la corretta posizione di scivolamento prono e supino, è corretto introdurre le prime propulsioni degli arti inferiori?",
    "options": {
      "A": "Sì, perché in tal modo si aiuta il galleggiamento",
      "B": "Dipende se la lezione si svolge in acqua alta o in acqua bassa",
      "C": "No, perché molto probabilmente l’azione delle gambe sarà eseguita scorrettamente",
      "D": "Sì, ma solo con i bambini al di sotto dei 6 anni"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. No, perché molto probabilmente l’azione delle gambe sarà eseguita scorrettamente.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 563,
    "question": "Se un atleta iscritto nella gara dei 100 metri stile libero nuota a rana in che sanzione incorre?",
    "options": {
      "A": "Squalifica per nuotata irregolare",
      "B": "Squalifica per partenza anticipata",
      "C": "Nessuna",
      "D": "Viene deferito agli organi competenti"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Nessuna.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 564,
    "question": "Se un bambino non ha assimilato bene la posizione di scivolamento prona e supina, possiamo ugualmente insegnare la battuta di gambe?",
    "options": {
      "A": "Si, perché così aiutiamo il galleggiamento",
      "B": "No perché altrimenti la battuta di gambe sarà tecnicamente errata",
      "C": "Sì ma solo con i bambini molto piccoli",
      "D": "Dipende se siamo in vasca piccola o in vasca grande"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. No perché altrimenti la battuta di gambe sarà tecnicamente errata.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 565,
    "question": "Sono esercizi per imparare a controllare la respirazione:",
    "options": {
      "A": "Aprire gli occhi sott’acqua, sentire sott’acqua, toccare il compagno e copiare la posizione",
      "B": "Nuotate di sole braccia con o senza pull-buoy",
      "C": "Stare fermi in posizione verticale, stare fermi in posizione raggruppata, stare fermi in posizione rovesciata, passare da una posizione ad un’altra senza fare sforzi",
      "D": "Soffiare con il naso, tenere il fiato per 10 secondi in immersione, prendere aria dalla bocca e soffiarla dal naso, eseguire 20 respirazioni in immersione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Soffiare con il naso, tenere il fiato per 10 secondi in immersione, prendere aria dalla bocca e soffiarla dal naso, eseguire 20 respirazioni in immersione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 566,
    "question": "Sono esercizi per imparare a galleggiare:",
    "options": {
      "A": "Immersione completa, immersioni con aiuti, immersioni in semicapovolta, raccolta di oggetti sul fondo",
      "B": "Stare fermi in posizione verticale, stare fermi in posizione raggruppata, stare fermi in posizione rovesciata, passare da una posizione ad un’altra senza fare sforzi",
      "C": "Saltare in acqua, riprodurre una posizione in aria, tuffarsi da posizione in ginocchio, tuffarsi di testa",
      "D": "Tuffi dal blocco, apnee prolungate"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Stare fermi in posizione verticale, stare fermi in posizione raggruppata, stare fermi in posizione rovesciata, passare da una posizione ad un’altra senza fare sforzi.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 567,
    "question": "Sono esercizi per imparare a immergersi:",
    "options": {
      "A": "Gioco dei nomi, ricognizioni della vasca, esercizi di movimento in vasca piccoli, spostamenti lungo il bordo",
      "B": "Immersione completa, immersioni con aiuti, immersioni in semicapovolta, raccolta di oggetti sul fondo",
      "C": "Spostarsi con la spinta dal bordo, arrivare alla corsia a sole gambe, scivolare sul dorso, usare braccia e gambe per raggiungere un punto, nuotare 25 m a gambe dorso",
      "D": "Tuffi dal blocco"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Immersione completa, immersioni con aiuti, immersioni in semicapovolta, raccolta di oggetti sul fondo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 568,
    "question": "Sono esercizi per imparare a spostarsi in acqua:",
    "options": {
      "A": "Immersione completa, immersioni con aiuti, immersioni in semicapovolta, raccolta di oggetti sul fondo",
      "B": "Arrivare ad un punto con la spinta dal bordo, arrivare alla corsia a sole gambe, scivolare sul dorso, usare braccia e gambe per raggiungere un punto, nuotare 25 m a gambe dorso",
      "C": "Saltare in acqua, riprodurre una posizione in aria, tuffarsi da posizione in ginocchio, tuffarsi di testa"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Arrivare ad un punto con la spinta dal bordo, arrivare alla corsia a sole gambe, scivolare sul dorso, usare braccia e gambe per raggiungere un punto, nuotare 25 m a gambe dorso.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 569,
    "question": "Sono esercizi per imparare a tuffarsi:",
    "options": {
      "A": "Immersione completa, immersioni con aiuti, immersioni in semicapovolta, raccolta di oggetti sul fondo",
      "B": "Training autogeno, visualizzazione mentale",
      "C": "Aprire gli occhi sott’acqua, sentire sott’acqua, toccare il compagno e copiare la posizione",
      "D": "Saltare in acqua, riprodurre una posizione in aria, tuffarsi da posizione in ginocchio, tuffarsi di testa"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Saltare in acqua, riprodurre una posizione in aria, tuffarsi da posizione in ginocchio, tuffarsi di testa.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 570,
    "question": "Sono esercizi per l’accoglienza:",
    "options": {
      "A": "Gioco dei nomi, ricognizioni della vasca, esercizi di movimento in vasca piccoli, spostamenti lungo il bordo",
      "B": "Immersione completa, immersioni con aiuti, immersioni in semicapovolta, raccolta di oggetti sul fondo",
      "C": "Non sono necessari esercizi specifici",
      "D": "Soffiare con il naso, tenere il fiato per 10 secondi in immersione, prendere aria dalla bocca e soffiarla dal naso, eseguire 20 respirazioni in immersione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Gioco dei nomi, ricognizioni della vasca, esercizi di movimento in vasca piccoli, spostamenti lungo il bordo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 571,
    "question": "Sono esercizi per la sensopercezione in acqua:",
    "options": {
      "A": "Immersione completa, immersioni con aiuti, immersioni in semicapovolta, raccolta di oggetti sul fondo",
      "B": "Aprire gli occhi sott’acqua, sentire sott’acqua, toccare il compagno e copiare la posizione",
      "C": "Soffiare con il naso, tenere il fiato per 10 secondi in immersione, prendere aria dalla bocca e soffiarla dal naso, eseguire 20 respirazioni in immersione",
      "D": "Apnee prolungate, lavori di gambe con tavoletta"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Aprire gli occhi sott’acqua, sentire sott’acqua, toccare il compagno e copiare la posizione.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 572,
    "question": "Sono obiettivi intermedi dell’ambientamento:",
    "options": {
      "A": "Avvicinamento all’acqua, scivolamenti e insegnamento del nuoto",
      "B": "Immersione, respirazione, spostamenti in acqua",
      "C": "Pagamento della quota mensile, consegna del certificato medico",
      "D": "Accoglienza, percepire in acqua, controllare la respirazione, controllare il galleggiamento, sapersi immergere,sapersi spostare, saltare in acqua e tuffarsi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Accoglienza, percepire in acqua, controllare la respirazione, controllare il galleggiamento, sapersi immergere,sapersi spostare, saltare in acqua e tuffarsi 57.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 573,
    "question": "Su quali distanze, in vasca da 50 metri, possono essere ottenuti primati nazionali nella disciplina dei misti individuali?",
    "options": {
      "A": "50, 100, 200 metri",
      "B": "4x100 metri",
      "C": "100, 200, 400 metri",
      "D": "200, 400 metri"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. 200, 400 metri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 574,
    "question": "Tra gli obiettivi formativi del secondo livello troviamo:",
    "options": {
      "A": "Il rafforzamento delle capacità condizionali",
      "B": "Il controllo respiratorio",
      "C": "Lo sviluppo del senso agonistico",
      "D": "Quelle esercitazioni proposte anche se non compatibili con le capacità dell’allievo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il controllo respiratorio.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 575,
    "question": "Tra i vari motivi la ginnastica prenatatoria è importante perché:",
    "options": {
      "A": "Effettuandosi in altri ambienti della piscina incrementa il processo di ambientamento",
      "B": "Stimola elementi che trovano condizioni di massima efficienza sia fuori che dentro l’acqua",
      "C": "Consente di sovrapporre due turni di scuola nuoto",
      "D": "Consente di elevare il tono muscolare e di preparare le strutture periferiche all’attività natatoria"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Consente di elevare il tono muscolare e di preparare le strutture periferiche all’attività natatoria.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 576,
    "question": "Un esercizio è in forma competitiva:",
    "options": {
      "A": "Quando si propone un problema motorio e l’allievo deve trovare il modo di risolverlo",
      "B": "Quando il fine dell’azione non è l’azione stessa ma uno di contenuto ludico",
      "C": "Quando il fine dell’azione non è l’azione stessa ma la gratificazione ottenuta con la vittoria",
      "D": "Lo deve sempre essere"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Quando il fine dell’azione non è l’azione stessa ma la gratificazione ottenuta con la vittoria.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 577,
    "question": "Un esercizio è in forma di gioco:",
    "options": {
      "A": "Quando si propone un problema motorio e l’allievo deve trovare il modo di risolverlo",
      "B": "Quando il fine dell’azione non è l’azione stessa ma uno di contenuto ludico",
      "C": "Quando il fine dell’azione non è l’azione stessa ma la gratificazione ottenuta con la vittoria",
      "D": "Lo deve sempre essere"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Quando il fine dell’azione non è l’azione stessa ma uno di contenuto ludico.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 578,
    "question": "Un esercizio è in forma di situazione problema quando:",
    "options": {
      "A": "Quando si propone un problema motorio e l’allievo deve trovare il modo di risolverlo",
      "B": "Quando il fine dell’azione non è l’azione stessa ma uno di contenuto ludico",
      "C": "Quando il fine dell’azione non è l’azione stessa ma la gratificazione ottenuta con la vittoria",
      "D": "Lo deve sempre essere"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Quando si propone un problema motorio e l’allievo deve trovare il modo di risolverlo.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 579,
    "question": "Un esercizio è riuscito quando:",
    "options": {
      "A": "È stato provato da tutti",
      "B": "È riproducibile da tutti ogni volta che viene richiesto",
      "C": "È stato eseguito dai migliori del gruppo",
      "D": "Permette di conseguire un brevetto tecnico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. È riproducibile da tutti ogni volta che viene richiesto.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 580,
    "question": "Un esperto nuotatore può esercitare funzioni di assistente bagnanti senza avere conseguito il titolo specifico?",
    "options": {
      "A": "Sì",
      "B": "Sì, se dimostra di essere tesserato FIN da almeno 10 anni",
      "C": "Sì, se è stato tesserato come agonista",
      "D": "No"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. No.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 581,
    "question": "Un nuotatore viene squalificato se:",
    "options": {
      "A": "Nuotando a stile libero effettua due colpi di gambe a delfino dopo la virata",
      "B": "Dopo la partenza a dorso non riemerge entro i 15 metri",
      "C": "Al momento dell’a posto si trova sul blocco con i piedi non allineati",
      "D": "Nell’effettuare la virata a rana inserisce una bracciata subacquea ed un colpo di gambe"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dopo la partenza a dorso non riemerge entro i 15 metri.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 582,
    "question": "Una piscina per poter ospitare manifestazioni agonistiche della FIN deve:",
    "options": {
      "A": "Essere affiliata",
      "B": "Essere promossa",
      "C": "Essere confortevole",
      "D": "Essere omologata"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Essere omologata.",
    "category": "La cultura dell'acqua"
  },
  {
    "id": 583,
    "question": "A quale età avviene lo sviluppo prevalente delle capacità coordinative?",
    "options": {
      "A": "Prima dei 5 anni",
      "B": "Dai 14 ai 18 anni",
      "C": "Dopo i 18 anni",
      "D": "Dai 5 ai 12 anni"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dai 5 ai 12 anni.",
    "category": "Metodologia"
  },
  {
    "id": 584,
    "question": "Apprendiamo movimenti consapevolmente quando:",
    "options": {
      "A": "Copiamo le soluzioni di un altro",
      "B": "Intuiamo un movimento nuovo mentre siamo in azione",
      "C": "L’istruttore guida un nostro movimento",
      "D": "Ci rappresentiamo un movimento e lo riproduciamo individuando come punti di riferimento elementi percettivi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Ci rappresentiamo un movimento e lo riproduciamo individuando come punti di riferimento elementi percettivi.",
    "category": "Metodologia"
  },
  {
    "id": 585,
    "question": "Apprendiamo movimenti per condizionamento quando:",
    "options": {
      "A": "Copiamo le soluzioni di un altro",
      "B": "Intuiamo un movimento nuovo mentre siamo in azione",
      "C": "L’istruttore guida un nostro movimento",
      "D": "Ripetiamo soluzioni che precedentemente avevano recato un beneficio"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Ripetiamo soluzioni che precedentemente avevano recato un beneficio.",
    "category": "Metodologia"
  },
  {
    "id": 586,
    "question": "Apprendiamo movimenti per imitazione quando:",
    "options": {
      "A": "Copiamo le soluzioni di un altro",
      "B": "Intuiamo un movimento nuovo mentre siamo in azione",
      "C": "L’istruttore guida il nostro movimento",
      "D": "Ci rappresentiamo un movimento e lo riproduciamo individuando come punti di riferimento elementi percettivi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Copiamo le soluzioni di un altro.",
    "category": "Metodologia"
  },
  {
    "id": 587,
    "question": "Apprendiamo movimenti per prove ed errori quando:",
    "options": {
      "A": "Copiamo le soluzioni di un altro",
      "B": "Intuiamo un movimento nuovo mentre siamo in azione",
      "C": "L’istruttore guida un nostro movimento",
      "D": "Ci rappresentiamo un movimento e lo riproduciamo individuando come punti di riferimento elementi percettivi"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Intuiamo un movimento nuovo mentre siamo in azione.",
    "category": "Metodologia"
  },
  {
    "id": 588,
    "question": "Caratteristiche essenziali delle quattro nuotate (crawl, dorso, farfalla, rana):",
    "options": {
      "A": "Ampiezza, continuità e ritmo.",
      "B": "Stabilità nella struttura e variabilità nei dettagli.",
      "C": "Stabilità nei dettagli e variabilità nella struttura",
      "D": "Non esistono caratteristiche comuni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Stabilità nella struttura e variabilità nei dettagli..",
    "category": "Metodologia"
  },
  {
    "id": 589,
    "question": "Che cos’è la capacità di resistenza?",
    "options": {
      "A": "La capacità di resistere alla fatica nell’eseguire molte volte un medesimo gesto",
      "B": "La capacità di resistere alla fatica in esercitazioni di lunga durata",
      "C": "La capacità di resistere alla fatica nell’eseguire molte volte un breve sforzo",
      "D": "La capacita di resistere alla fatica mantenendo a lungo una buona coordinazione del gesto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La capacità di resistere alla fatica in esercitazioni di lunga durata.",
    "category": "Metodologia"
  },
  {
    "id": 590,
    "question": "Che cosa è la supercompensazione?",
    "options": {
      "A": "Una tabella valutativa per stabilire l’incremento delle capacità coordinative",
      "B": "Una tecnica basata sulla respirazione per compensare il consumo di ossigeno dopo una seduta di allenamento",
      "C": "Una capacità condizionale",
      "D": "Un principio dell’allenamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un principio dell’allenamento.",
    "category": "Metodologia"
  },
  {
    "id": 591,
    "question": "Che cosa è più efficace per la correzione di un errore?",
    "options": {
      "A": "Ipercorrezione",
      "B": "Esercizi volti a migliorare la sensibilità dell’allievo",
      "C": "Dimostrazioni corrette del movimento",
      "D": "Spiegazioni tecniche dettagliate"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Esercizi volti a migliorare la sensibilità dell’allievo.",
    "category": "Metodologia"
  },
  {
    "id": 592,
    "question": "Che cosa s’intende per analizzatore vestibolare?",
    "options": {
      "A": "Una struttura che ci informa sulle accelerazioni del corpo",
      "B": "Una struttura dalla quale riceviamo informazioni sulle tensione dei muscoli",
      "C": "Un sinonimo di feedback",
      "D": "Una struttura che fornisce l’informazione relativa alle pressioni esercitate sulle varie parti del corpo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Una struttura che ci informa sulle accelerazioni del corpo.",
    "category": "Metodologia"
  },
  {
    "id": 593,
    "question": "Che errore non va commesso nell’allenamento giovanile?",
    "options": {
      "A": "Proporre i programmi degli atleti adulti in forma ridotta",
      "B": "Preconizzare alcune fasi dello sviluppo motorio",
      "C": "Automatizzare rigidamente il gesto tecnico",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "Metodologia"
  },
  {
    "id": 594,
    "question": "Che tipo di scambi termici avvengono in acqua?",
    "options": {
      "A": "Per conduzione e per convezione",
      "B": "Per irraggiamento e conduzione",
      "C": "Per convezione e per irraggiamento",
      "D": "Per regolazione e rifinitura"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Per conduzione e per convezione.",
    "category": "Metodologia"
  },
  {
    "id": 595,
    "question": "Chi governa e gestisce gli analizzatori?",
    "options": {
      "A": "Il cervello",
      "B": "L’apparato osteo-articolare",
      "C": "Il cuore",
      "D": "L’apparato del Golgi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il cervello.",
    "category": "Metodologia"
  },
  {
    "id": 596,
    "question": "Classificazione della forza:",
    "options": {
      "A": "Forza massimale, forza rapida, resistenza alla forza",
      "B": "Forza massimale, resistenza rapida, resistenza veloce",
      "C": "La forza non può essere classificata",
      "D": "Nel nuoto abbiamo una forza massima e una forza veloce"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Forza massimale, forza rapida, resistenza alla forza.",
    "category": "Metodologia"
  },
  {
    "id": 597,
    "question": "Com’è classificabile una virata nel nuoto?",
    "options": {
      "A": "Schema motorio di base",
      "B": "Capacità coordinativa generale",
      "C": "Capacità coordinativa speciale",
      "D": "Abilità motoria"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Abilità motoria 60.",
    "category": "Metodologia"
  },
  {
    "id": 598,
    "question": "Come può essere sviluppata la resistenza di breve durata ?",
    "options": {
      "A": "Con la preacrobatica intensiva",
      "B": "Con il metodo continuo",
      "C": "Con il metodo delle ripetizioni in serie",
      "D": "Con diverse serie di tuffi di partenza"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Con il metodo delle ripetizioni in serie.",
    "category": "Metodologia"
  },
  {
    "id": 599,
    "question": "Come si può definire il carico fisico?",
    "options": {
      "A": "L’insieme degli stimoli allenanti",
      "B": "La durata delle esercitazioni",
      "C": "Il rapporto tra esercitazioni e recupero",
      "D": "La specificità delle esercitazioni"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’insieme degli stimoli allenanti.",
    "category": "Metodologia"
  },
  {
    "id": 600,
    "question": "Come si può definire il nuoto?",
    "options": {
      "A": "Sport acquatico ad alta valenza educativa e coordinativa",
      "B": "Sport educativo con spiccate capacità condizionali e coordinative",
      "C": "Sport preventivo ai paramorfismi, di resistenza alla forza e alla velocità",
      "D": "Sport ciclico di resistenza alla forza ad elevata valenza coordinativa"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sport ciclico di resistenza alla forza ad elevata valenza coordinativa.",
    "category": "Metodologia"
  },
  {
    "id": 601,
    "question": "Come si rendono coscienti le informazioni?",
    "options": {
      "A": "Con un lavoro molto ripetitivo",
      "B": "Con allenamenti mirati alla percezione",
      "C": "Con un esecuzione perfetta",
      "D": "Con una dialettica raffinata"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Con allenamenti mirati alla percezione.",
    "category": "Metodologia"
  },
  {
    "id": 602,
    "question": "Come viene classificata la forza?",
    "options": {
      "A": "Forza massimale, forza rapida, forza veloce, forza minima e resistenza alla forza",
      "B": "Forza massimale, forza rapida, forza veloce e forza minima",
      "C": "Forza massimale, forza rapida o veloce e resistenza alla forza",
      "D": "Forza massimale, forza minima, forza rapida e resistenza alla forza"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Forza massimale, forza rapida o veloce e resistenza alla forza.",
    "category": "Metodologia"
  },
  {
    "id": 603,
    "question": "Con quale attività si realizza lo sviluppo delle capacità coordinative?",
    "options": {
      "A": "Multilaterale",
      "B": "Multimediale",
      "C": "Multidisciplinare",
      "D": "Multitecnica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Multilaterale.",
    "category": "Metodologia"
  },
  {
    "id": 604,
    "question": "Correre è:",
    "options": {
      "A": "Una predisposizione al movimento",
      "B": "Uno schema motorio di base",
      "C": "Uno schema motorio evoluto",
      "D": "Nessuna delle tre opzioni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Uno schema motorio di base.",
    "category": "Metodologia"
  },
  {
    "id": 605,
    "question": "Correre è:",
    "options": {
      "A": "Una predisposizione al movimento",
      "B": "Uno stato mentale",
      "C": "Uno schema motorio di base",
      "D": "Uno schema motorio evoluto"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Uno schema motorio di base.",
    "category": "Metodologia"
  },
  {
    "id": 606,
    "question": "Corretta procedura di correzione dell’errore:",
    "options": {
      "A": "Individuazione – destrutturazione del gesto – programma motorio e prima esecuzione – feedback e nuovo programma motorio – esecuzioni successive e nuovi feedback – output di migliore qualità",
      "B": "Individuazione – programma motorio e prima esecuzione – destrutturazione del gesto – feedback e nuovo programma motorio – esecuzioni successive e nuovi feedback – output di migliore qualità",
      "C": "Programma motorio e prima esecuzione – individuazione – destrutturazione del gesto – feedback e nuovo programma motorio – esecuzioni successive e nuovi feedback – output di migliore qualità",
      "D": "Programma motorio e prima esecuzione – individuazione – feedback e nuovo programma motorio – esecuzioni successive e nuovi feedback – destrutturazione del gesto - output di migliore qualità"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Individuazione – destrutturazione del gesto – programma motorio e prima esecuzione – feedback e nuovo programma motorio – esecuzioni successive e nuovi feedback – output di migliore qualità.",
    "category": "Metodologia"
  },
  {
    "id": 607,
    "question": "Cos’è il controllo, inteso come fattore della prestazione?",
    "options": {
      "A": "La capacità di controllare e monitorare il proprio corpo e l’ambiente circostante",
      "B": "L’insieme dei processi emotivi, cognitivi e motivazionali",
      "C": "L’insieme dei processi emotivi e cognitivi",
      "D": "La capacità di saper controllare la fatica durante ripetuti impegni di forza"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’insieme dei processi emotivi, cognitivi e motivazionali.",
    "category": "Metodologia"
  },
  {
    "id": 608,
    "question": "Cos’è il tono muscolare?",
    "options": {
      "A": "La forza di un muscolo",
      "B": "L’angolazione reciproca dei muscoli scheletrici",
      "C": "La sezione trasversale di un muscolo",
      "D": "Il grado di tensione a riposo di un muscolo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il grado di tensione a riposo di un muscolo.",
    "category": "Metodologia"
  },
  {
    "id": 609,
    "question": "Cos’è la resistenza aerobica?",
    "options": {
      "A": "La capacità condizionale che garantisce di effettuare sforzi di lunga durata nella massima economia delle funzioni",
      "B": "La capacità coordinativa grazie alla quale possiamo aumentare la frequenza dei nostri movimenti",
      "C": "La capacità motoria che assicura di tollerare a lungo la fatica resistendo all’accumulo dell’acido lattico prodotto",
      "D": "La capacità tipica del velocista"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La capacità condizionale che garantisce di effettuare sforzi di lunga durata nella massima economia delle funzioni.",
    "category": "Metodologia"
  },
  {
    "id": 610,
    "question": "Cos’è la supercompensazione?",
    "options": {
      "A": "Un sistema gratificante per gli allievi",
      "B": "Una limitazione all’adattamento dei carichi positivi",
      "C": "Un principio che regola l’adattamento coordinativo",
      "D": "Un processo di adattamento dell’organismo ad uno stimolo allenante"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un processo di adattamento dell’organismo ad uno stimolo allenante.",
    "category": "Metodologia"
  },
  {
    "id": 611,
    "question": "Cos’è un movimento di transizione?",
    "options": {
      "A": "Un movimento accessorio inserito dopo l’insegnamento di un gesto delle gambe",
      "B": "Un movimento per predisporsi a quello successivo",
      "C": "Un movimento concluso, inserito in una sequenza programmata",
      "D": "Un movimento irrilevante ai fini della propulsione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un movimento accessorio inserito dopo l’insegnamento di un gesto delle gambe.",
    "category": "Metodologia"
  },
  {
    "id": 612,
    "question": "Cos’è una fase sensibile?",
    "options": {
      "A": "Un periodo di malessere generalizzato",
      "B": "Un periodo particolarmente adatto per lo sviluppo di determinate capacità",
      "C": "Un momento di stasi della crescita",
      "D": "Un periodo poco favorevole per lo sviluppo di determinate capacità"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Un periodo particolarmente adatto per lo sviluppo di determinate capacità.",
    "category": "Metodologia"
  },
  {
    "id": 613,
    "question": "Cosa s’intende per capacità di reazione?",
    "options": {
      "A": "La capacità ad eseguire rapidamente azioni motorie adeguate in risposta ad un segnale",
      "B": "La capacità di variare i movimenti del corpo nello spazio e nel tempo in risposta ad un segnale",
      "C": "La capacità di regolare la propria concentrazione",
      "D": "La capacità di coordinare tra loro i movimenti parziali del corpo reagendo ad un segnale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La capacità ad eseguire rapidamente azioni motorie adeguate in risposta ad un segnale.",
    "category": "Metodologia"
  },
  {
    "id": 614,
    "question": "Cosa s’intende per densità?",
    "options": {
      "A": "La quantità di materia presente in un volume",
      "B": "la forza esercitata da un fluido in quiete su ogni superficie a contatto con esso",
      "C": "La viscosità dell’acqua",
      "D": "È quella forza che si oppone al movimento di un corpo in un fluido"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La quantità di materia presente in un volume.",
    "category": "Metodologia"
  },
  {
    "id": 615,
    "question": "Cosa s’intende per equilibrio?",
    "options": {
      "A": "La funzione che consente di stare in una posizione",
      "B": "I movimenti che consentono la stabilità",
      "C": "La postura che si assume",
      "D": "La stabilità emotiva"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La funzione che consente di stare in una posizione.",
    "category": "Metodologia"
  },
  {
    "id": 616,
    "question": "Cosa s’intende per età funzionale?",
    "options": {
      "A": "L’espressione dell’interazione tra età biologica e quella psicologica",
      "B": "La capacità di adattamento individuale",
      "C": "La mera età dettata dal calendario",
      "D": "L’età di acquisizione degli schemi motori di base"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’espressione dell’interazione tra età biologica e quella psicologica.",
    "category": "Metodologia"
  },
  {
    "id": 617,
    "question": "Cosa s’intende per forza rapida?",
    "options": {
      "A": "Capacità di resistere alla fatica con la maggior rapidità possibile",
      "B": "Capacità di resistere alla rapidità con la maggior forza possibile",
      "C": "Capacità di produrre una forza da elevata a massima nel più breve tempo possibile",
      "D": "Si sviluppa nei bambini di massimo 6 anni"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Capacità di produrre una forza da elevata a massima nel più breve tempo possibile.",
    "category": "Metodologia"
  },
  {
    "id": 618,
    "question": "Cosa s’intende per indipendenza segmentarla?",
    "options": {
      "A": "La capacità di eseguire movimenti inconsci",
      "B": "La capacità di percepire e controllare i segmenti corporei impegnati nel movimento in maniera indipendente",
      "C": "La capacità dell’allievo di percepire il proprio movimento in maniera globale ed indifferenziata",
      "D": "La capacità di frazionare l’esercizio nelle sue componenti fondamentali"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La capacità di percepire e controllare i segmenti corporei impegnati nel movimento in maniera indipendente.",
    "category": "Metodologia"
  },
  {
    "id": 619,
    "question": "Cosa s’intende per pressione idrostatica?",
    "options": {
      "A": "La quantità di materia presente in un volume",
      "B": "La forza esercitata da un fluido in quiete su ogni superficie a contatto con esso",
      "C": "La viscosità dell’acqua",
      "D": "È quella forza che si oppone al movimento di un corpo in un fluido"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La forza esercitata da un fluido in quiete su ogni superficie a contatto con esso.",
    "category": "Metodologia"
  },
  {
    "id": 620,
    "question": "Cosa s’intende per resistenza in acqua?",
    "options": {
      "A": "La quantità di materia presente in un volume",
      "B": "La forza esercitata da un fluido in quiete su ogni superficie a contatto con esso",
      "C": "La viscosità dell’acqua",
      "D": "È quella forza che si oppone al movimento di un corpo in un fluido"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. È quella forza che si oppone al movimento di un corpo in un fluido.",
    "category": "Metodologia"
  },
  {
    "id": 621,
    "question": "Cosa si intende per resistenza alla forza?",
    "options": {
      "A": "La forza più elevata che il sistema neuromuscolare può esprimere",
      "B": "La forza quanto più vicina possibile alla più elevata che il sistema neuromuscolare può esprimere",
      "C": "La capacità dell’organismo di opporsi alla fatica durante prestazioni di forza",
      "D": "La capacità dell’organismo di opporsi alla resistenza durante prestazioni di forza rimanendo in regime aerobico"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La capacità dell’organismo di opporsi alla fatica durante prestazioni di forza.",
    "category": "Metodologia"
  },
  {
    "id": 622,
    "question": "Cosa sono i fondamentali tecnici?",
    "options": {
      "A": "Tecniche di nuoto formatesi con numerose ripetizioni automatiche",
      "B": "Fattori che determinano la capacità di apprendimento",
      "C": "Azioni motorie automatizzate mediante ripetizioni consapevoli",
      "D": "Tecniche natatorie di atleti evoluti"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Azioni motorie automatizzate mediante ripetizioni consapevoli.",
    "category": "Metodologia"
  },
  {
    "id": 623,
    "question": "Cosa sono le abilità motorie?",
    "options": {
      "A": "Competenze relative a gesti motori specifici (azioni), si costruiscono sulle capacità coordinative e sono tante quante se ne possono apprendere",
      "B": "Il presupposto per l’organizzazione e la regolazione del movimento: si dividono in generali e speciali e sono tante quante se ne possono apprendere",
      "C": "Le competenze raggiunte in una specifica sequenza di movimenti (azioni), si costruiscono sulle capacità condizionali e sono tante quante se ne possono apprendere",
      "D": "Movimenti mediamente finalizzati"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Competenze relative a gesti motori specifici (azioni), si costruiscono sulle capacità coordinative e sono tante quante se ne possono apprendere.",
    "category": "Metodologia"
  },
  {
    "id": 624,
    "question": "Cosa sono le capacità motorie?",
    "options": {
      "A": "Abilità specifiche del singolo sport",
      "B": "Abilità trasferibili a diverse discipline sportive",
      "C": "Presupposti motori fondamentali dell’essere umano",
      "D": "Indici ottimali riferiti alla costituzione somatica dell’individuo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Presupposti motori fondamentali dell’essere umano.",
    "category": "Metodologia"
  },
  {
    "id": 625,
    "question": "Da cosa è composto un analizzatore?",
    "options": {
      "A": "Dagli organi recettori",
      "B": "Dalle strutture muscolo-tendinee",
      "C": "Da due o più recettori e un sistema di trasmissione",
      "D": "Da due o più recettori, vie di comunicazione del segnale, centri del sistema nervoso deputati alla decodificazione di segnali"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Da due o più recettori, vie di comunicazione del segnale, centri del sistema nervoso deputati alla decodificazione di segnali.",
    "category": "Metodologia"
  },
  {
    "id": 626,
    "question": "Definizione di resistenza aerobica:",
    "options": {
      "A": "La capacità di protrarre nel tempo la prestazione sportiva",
      "B": "La capacità di ricostituire l’ATP",
      "C": "La capacità di superare la soglia aerobica",
      "D": "La capacità di raggiungere un alto livello di prestazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La capacità di protrarre nel tempo la prestazione sportiva.",
    "category": "Metodologia"
  },
  {
    "id": 627,
    "question": "Degli stimoli fisici troppo distanti tra loro comportano:",
    "options": {
      "A": "Adattamenti momentanei e non permanenti",
      "B": "Adattamenti condizionati",
      "C": "Nessun adattamento",
      "D": "Ottimizzazione degli effetti della supercompensazione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Nessun adattamento.",
    "category": "Metodologia"
  },
  {
    "id": 628,
    "question": "Dopo il cambio di direzione nella virata a stile libero, come deve avvenire la spinta del corpo?",
    "options": {
      "A": "Già in posizione prona, ruotando prima della spinta dal bordo",
      "B": "Già in posizione prona, ruotando durante la spinta dal bordo",
      "C": "Con il piede dominante",
      "D": "Su un fianco, effettuando la rotazione durante lo scivolamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Su un fianco, effettuando la rotazione durante lo scivolamento.",
    "category": "Metodologia"
  },
  {
    "id": 629,
    "question": "Dove si inseriscono le correzioni e i nuovi apprendimenti?",
    "options": {
      "A": "Nella zona di sforzo fisico bassissimo",
      "B": "Nella zona di sforzo fisico altissimo",
      "C": "A secco",
      "D": "Nella zona di sforzo fisico medio alto"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Nella zona di sforzo fisico bassissimo.",
    "category": "Metodologia"
  },
  {
    "id": 630,
    "question": "Durante la fase di apprendimento motorio della coordinazione grezza, quali aspetti degli elementi fondamentali del movimento bisogna tenere in considerazione?",
    "options": {
      "A": "Ampiezza e continuità",
      "B": "Forza e velocità",
      "C": "Precisione e perfezione",
      "D": "Motivazione e condizione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Ampiezza e continuità.",
    "category": "Metodologia"
  },
  {
    "id": 631,
    "question": "È giusto richiedere sin dall’inizio l’esecuzione ad alta velocità di nuotate grezze?",
    "options": {
      "A": "Sì, perché così viene arricchito il patrimonio genetico di fibre bianche",
      "B": "Sì, sempre",
      "C": "Sì, ma solo con allievi molto coordinati",
      "D": "No, perché non è ancora stata raggiunta la piena indipendenza segmentaria"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. No, perché non è ancora stata raggiunta la piena indipendenza segmentaria.",
    "category": "Metodologia"
  },
  {
    "id": 632,
    "question": "Fra i modelli di allenamento che cosa indica la sigla C2?",
    "options": {
      "A": "Tolleranza al lattato",
      "B": "Esercizi di velocità",
      "C": "Picco di lattato",
      "D": "Intensità intorno alla soglia anaerobica"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Picco di lattato.",
    "category": "Metodologia"
  },
  {
    "id": 633,
    "question": "Gli adattamenti generati dall’allenamento:",
    "options": {
      "A": "Dipendono dalle caratteristiche dell’allenamento svolto",
      "B": "Sono transitori per quanto riguardano le capacità condizionali",
      "C": "Rispettano eterocronismi differenti",
      "D": "Tutte le precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le precedenti.",
    "category": "Metodologia"
  },
  {
    "id": 634,
    "question": "Gli analizzatori si classificano in:",
    "options": {
      "A": "Primari e secondari",
      "B": "Ottico, acustico, tattile, cinestesico, labirintico",
      "C": "Ottico e acustico",
      "D": "Volontari e involontari"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Ottico, acustico, tattile, cinestesico, labirintico.",
    "category": "Metodologia"
  },
  {
    "id": 635,
    "question": "Gli analizzatori sono:",
    "options": {
      "A": "Strutture deputate alla selezione di stimoli",
      "B": "Schemi che analizzano i movimenti",
      "C": "Strutture di informazioni per correggere gli errori",
      "D": "Abilità acquatiche apprese in forma cosciente"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Strutture deputate alla selezione di stimoli.",
    "category": "Metodologia"
  },
  {
    "id": 636,
    "question": "Gli analizzatori:",
    "options": {
      "A": "Trasmettono informazioni al SNC",
      "B": "Segnalano la stanchezza muscolare",
      "C": "Sono presenti solo in età adulta",
      "D": "Sono presenti solo durante l’infanzia"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Trasmettono informazioni al SNC.",
    "category": "Metodologia"
  },
  {
    "id": 637,
    "question": "Gli effetti del carico sono:",
    "options": {
      "A": "Immediati, permanenti, cumulativi",
      "B": "Immediati e cumulativi ma non permanenti",
      "C": "Permanenti e immediati ma non cumulativi",
      "D": "Immediati e permanenti ma non cumulativi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Immediati, permanenti, cumulativi.",
    "category": "Metodologia"
  },
  {
    "id": 638,
    "question": "Gli errori possono essere generati da:",
    "options": {
      "A": "Scarso livello di attenzione",
      "B": "Inadeguata rappresentazione mentale del gesto",
      "C": "Scarsa propriocezione",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "Metodologia"
  },
  {
    "id": 639,
    "question": "Gli esercizi di coordinazione devono essere rapportati:",
    "options": {
      "A": "Al grado di istruzione tecnica dell’allievo",
      "B": "Al grado di istruzione tecnica dell’istruttore",
      "C": "Al livello di interesse manifestato dall’allievo",
      "D": "Al livello tecnico del corso"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Al grado di istruzione tecnica dell’allievo.",
    "category": "Metodologia"
  },
  {
    "id": 640,
    "question": "Gli obiettivi fondamentali nella didattica della bracciata a crawl sono:",
    "options": {
      "A": "Ampiezza e frequenza della bracciata",
      "B": "Cura dei giusti angoli e traiettorie",
      "C": "Recupero rilassato e giusta posizione del capo",
      "D": "Cura della continuità delle azioni, corretto ritmo ed ampiezza"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Cura della continuità delle azioni, corretto ritmo ed ampiezza.",
    "category": "Metodologia"
  },
  {
    "id": 641,
    "question": "Gli schemi motori acquatici sono:",
    "options": {
      "A": "Schemi che subiscono variazioni in base al sesso e all’età degli allievi",
      "B": "Fondamentali ai fini dello star bene in acqua e tra questi ricordiamo la capacità di immergersi, rilassarsi, spostarsi, galleggiare ecc.",
      "C": "Fondamentali ai fini dello star bene in acqua e tra questi ricordiamo la capacità di immergersi, saltare, strisciare, camminare, chiudere gli occhi ecc.",
      "D": "Schemi non sempre determinanti per lo stare bene in acqua"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Fondamentali ai fini dello star bene in acqua e tra questi ricordiamo la capacità di immergersi, rilassarsi, spostarsi, galleggiare ecc..",
    "category": "Metodologia"
  },
  {
    "id": 642,
    "question": "I fattori della prestazione sono:",
    "options": {
      "A": "Forza, resistenza, velocità",
      "B": "Centrati sulla mobilità articolare e la forza",
      "C": "Coordinazione, Condizione, Costituzione, Capacità",
      "D": "Coordinazione, Costituzione, Condizione, Controllo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Coordinazione, Costituzione, Condizione, Controllo.",
    "category": "Metodologia"
  },
  {
    "id": 643,
    "question": "I meccanismi preposti alla risintesi dell’ATP sono:",
    "options": {
      "A": "Infiniti",
      "B": "Relazionabili all’età dell’atleta",
      "C": "Due",
      "D": "Tre"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tre.",
    "category": "Metodologia"
  },
  {
    "id": 644,
    "question": "I parametri del carico sono:",
    "options": {
      "A": "Ampiezza, continuità e ritmo",
      "B": "Intensità, densità, durata, volume: anche se il volume è il parametro prioritario di importanza",
      "C": "Intensità, densità, durata, volume: con priorità uguali di importanza",
      "D": "Nella scuola nuoto non ci si deve porre il problema"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Intensità, densità, durata, volume: con priorità uguali di importanza.",
    "category": "Metodologia"
  },
  {
    "id": 645,
    "question": "I preadolescenti, dal punto di vista del sistema cardio-circolatorio, sono caratterizzati da:",
    "options": {
      "A": "Una scarsa capacità di adattamento",
      "B": "Nessuna capacità di adattamento",
      "C": "Buone capacità di adattamento",
      "D": "Buone capacità di adattamento ma solo nei maschi"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Buone capacità di adattamento.",
    "category": "Metodologia"
  },
  {
    "id": 646,
    "question": "Il beccheggio è:",
    "options": {
      "A": "Il movimento attorno all’asse sagittale",
      "B": "Il movimento attorno all’asse trasversale",
      "C": "Il movimento attorno all’asse longitudinale",
      "D": "L’ondulazione del corpo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il movimento attorno all’asse trasversale.",
    "category": "Metodologia"
  },
  {
    "id": 647,
    "question": "Il carico esterno è misurabile con:",
    "options": {
      "A": "Metri percorsi",
      "B": "Frequenza cardiaca",
      "C": "Intensità dello sforzo",
      "D": "Intertempi di percorrenza"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Metri percorsi.",
    "category": "Metodologia"
  },
  {
    "id": 648,
    "question": "Il carico fisico è:",
    "options": {
      "A": "L’insieme degli stimoli di allenamento che non provocano la risposta adattativa dell’organismo",
      "B": "L’insieme degli stimoli di allenamento",
      "C": "stimoli di allenamento che non fanno riferimento all’intervallo di recupero",
      "D": "L’insieme degli stimoli di allenamento che non fanno riferimento alla frequenza settimanale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’insieme degli stimoli di allenamento.",
    "category": "Metodologia"
  },
  {
    "id": 649,
    "question": "Il galleggiamento del corpo avviene quando:",
    "options": {
      "A": "Il suo peso specifico è minore del peso specifico dell’acqua",
      "B": "Il suo peso specifico è maggiore del peso specifico dell’acqua",
      "C": "Si esercita una pressione verso il basso utilizzando movimenti di remata",
      "D": "Vengono applicati sostegni al baricentro"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il suo peso specifico è minore del peso specifico dell’acqua.",
    "category": "Metodologia"
  },
  {
    "id": 650,
    "question": "Il massimo livello di coordinazione è:",
    "options": {
      "A": "Quello che ci permette di nuotare lunghe distanze",
      "B": "Quello stabilito dal regolamento tecnico",
      "C": "Quello che consente nuovi e più fini movimenti",
      "D": "Quello che si riscontra nella fase della coordinazione grezza"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Quello che consente nuovi e più fini movimenti.",
    "category": "Metodologia"
  },
  {
    "id": 651,
    "question": "Il meccanismo anaerobico alattacido:",
    "options": {
      "A": "Interessa i substrati ATP+CP",
      "B": "Ha durata di 20 secondi",
      "C": "Riguarda la minima potenza energetica",
      "D": "Se interessa la scissione del glicogeno dura circa 20-30 minuti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Interessa i substrati ATP+CP.",
    "category": "Metodologia"
  },
  {
    "id": 652,
    "question": "Il meccanismo energetico aerobico interviene prevalentemente:",
    "options": {
      "A": "Nei lavori di lunga durata e intensità moderata",
      "B": "Nei lavori di breve durata e intensità elevata",
      "C": "Nei tuffi",
      "D": "Nelle apnee"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Nei lavori di lunga durata e intensità moderata.",
    "category": "Metodologia"
  },
  {
    "id": 653,
    "question": "Il metabolismo aerobico:",
    "options": {
      "A": "Utilizza la fosfocreatina",
      "B": "Necessita della presenza di ossigeno",
      "C": "Produce acido lattico",
      "D": "È tipico degli sport di brevissima e breve durata"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Necessita della presenza di ossigeno.",
    "category": "Metodologia"
  },
  {
    "id": 654,
    "question": "Il movimento volontario in acqua:",
    "options": {
      "A": "Non è soggetto alla forza di gravità, è generato da agonisti e antagonisti, è frenato dalla resistenza in acqua",
      "B": "È soggetto alla forza di gravità, è generato dai muscoli agonisti, non è frenato dalla resistenza in acqua",
      "C": "Ha le stesse caratteristiche di quello sulla terraferma",
      "D": "È soggetto alla forza di gravità, è controllato dal muscolo controgravitario, la contrazione è maggiore all’inizio del movimento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Non è soggetto alla forza di gravità, è generato da agonisti e antagonisti, è frenato dalla resistenza in acqua.",
    "category": "Metodologia"
  },
  {
    "id": 655,
    "question": "Il perfezionamento della tecnica si propone di:",
    "options": {
      "A": "Rendere più armonico il gesto natatorio",
      "B": "Aumentare l’efficacia della propulsione",
      "C": "Rendere lo stile più adeguato al regolamento federale",
      "D": "Rendere la nuotata esteticamente gradevole"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Aumentare l’efficacia della propulsione.",
    "category": "Metodologia"
  },
  {
    "id": 656,
    "question": "Il principio di Archimede dice che:",
    "options": {
      "A": "Ad ogni azione corrisponde una reazione uguale e contraria",
      "B": "E=mc^2",
      "C": "Quando avviene un aumento nella pressione in un punto di un fluido confinato, tale aumento viene trasmesso anche ad ogni punto del contenitore",
      "D": "Un corpo immerso in un fluido riceve una spinta verticale, dal basso verso l’alto, pari al peso del fluido da esso spostato"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un corpo immerso in un fluido riceve una spinta verticale, dal basso verso l’alto, pari al peso del fluido da esso spostato.",
    "category": "Metodologia"
  },
  {
    "id": 657,
    "question": "Il progressivo incremento del carico, in generale, come deve avvenire?",
    "options": {
      "A": "Prima aumenta l’intensità, poi il volume",
      "B": "Prima aumenta il volume, poi l’intensità",
      "C": "Prima aumenta la densità, poi il volume",
      "D": "Intensità e volume aumentano contemporaneamente e in uguale misura"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Prima aumenta il volume, poi l’intensità.",
    "category": "Metodologia"
  },
  {
    "id": 658,
    "question": "Il rendimento meccanico di un notatore evoluto è circa:",
    "options": {
      "A": "1,0-1.2%",
      "B": "2,0-2,4%",
      "C": "10,0-12,0%",
      "D": "20,0-24,0%"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. 10,0-12,0%.",
    "category": "Metodologia"
  },
  {
    "id": 659,
    "question": "Il rollio è:",
    "options": {
      "A": "L’ondulazione del corpo",
      "B": "Il movimento attorno all’asse sagittale",
      "C": "Il movimento attorno all’asse trasversale",
      "D": "Il movimento attorno all’asse longitudinale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il movimento attorno all’asse longitudinale.",
    "category": "Metodologia"
  },
  {
    "id": 660,
    "question": "Il rollio nello stile libero:",
    "options": {
      "A": "Si effettua sempre",
      "B": "Si effettua solo nelle distanze lunghe",
      "C": "Si effettua solo nelle distanze brevi",
      "D": "Si effettua solo se la coordinazione è due colpi di gambe per un ciclo di bracciata"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Si effettua sempre.",
    "category": "Metodologia"
  },
  {
    "id": 661,
    "question": "Il talento sportivo dipende da:",
    "options": {
      "A": "Incremento delle capacità condizionali",
      "B": "Nurturing neonatale",
      "C": "Esclusivamente dall’affinamento della tecnica delle nuotate",
      "D": "Sviluppo di senso percezione, coordinazione e tecnica"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sviluppo di senso percezione, coordinazione e tecnica.",
    "category": "Metodologia"
  },
  {
    "id": 662,
    "question": "In che modo è possibile definire il carico interno determinato da un’esercitazione?",
    "options": {
      "A": "Attraverso il numero delle ripetizioni del singolo esercizio",
      "B": "Attraverso una RMF",
      "C": "Attraverso il calcolo delle frequenze di bracciata",
      "D": "Attraverso il calcolo della frequenza cardiaca"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Attraverso il calcolo della frequenza cardiaca.",
    "category": "Metodologia"
  },
  {
    "id": 663,
    "question": "In che relazione devono essere quantità ed intensità in un buon allenamento?",
    "options": {
      "A": "Elevata Intensità ed elevata quantità",
      "B": "Ridotta Intensità ed elevata quantità",
      "C": "Ridotta Intensità e ridotta quantità",
      "D": "Non hanno alcuna relazione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Ridotta Intensità ed elevata quantità.",
    "category": "Metodologia"
  },
  {
    "id": 664,
    "question": "In cosa consiste lo schema corporeo?",
    "options": {
      "A": "La percezione del proprio corpo nello spazio e nel tempo",
      "B": "Un’immagine di sé, vera rappresentazione topologica del corpo nello spazio",
      "C": "In una rappresentazione anatomicamente dettagliata del corpo dell’allievo",
      "D": "Una rappresentazione cognitiva della posizione e dell’estensione del corpo nello spazio, dell’organizzazione gerarchica dei singoli segmenti corporei, in relazione ai dati provenienti dal mondo interno ed esterno, finalizzata all’organizzazione dell’azione nello spazio"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Una rappresentazione cognitiva della posizione e dell’estensione del corpo nello spazio, dell’organizzazione gerarchica dei singoli segmenti corporei, in relazione ai dati provenienti dal mondo interno ed esterno, finalizzata all’organizzazione dell’azione nello spazio 68.",
    "category": "Metodologia"
  },
  {
    "id": 665,
    "question": "In quale dei seguenti allenamenti si utilizza il sistema energetico anaerobico alattacido?",
    "options": {
      "A": "C3",
      "B": "B1",
      "C": "A2",
      "D": "C2"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. C3.",
    "category": "Metodologia"
  },
  {
    "id": 666,
    "question": "In quale fascia d’età si sviluppa la forza rapida?",
    "options": {
      "A": "Tra i 5 e gli 8 anni",
      "B": "Tra gli 8 e i 12 anni",
      "C": "Tra i 12 e i 16 anni",
      "D": "Oltre i 16 anni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Tra gli 8 e i 12 anni.",
    "category": "Metodologia"
  },
  {
    "id": 667,
    "question": "In quale fascia di età è consigliabile sviluppare le capacità coordinative?",
    "options": {
      "A": "Dai 16 anni in poi",
      "B": "Dai 6 agli 11 anni",
      "C": "Dagli 0 ai 5 anni",
      "D": "Non c’è un periodo particolare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dai 6 agli 11 anni.",
    "category": "Metodologia"
  },
  {
    "id": 668,
    "question": "In regime di C1 si lavora su:",
    "options": {
      "A": "Intensità intorno alla soglia anaerobica",
      "B": "Picco di lattato",
      "C": "Tolleranza al lattato",
      "D": "Intensità intorno al massimo consumo di ossigeno"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Tolleranza al lattato.",
    "category": "Metodologia"
  },
  {
    "id": 669,
    "question": "In una gara a farfalla è possibile nuotare sul fianco?",
    "options": {
      "A": "Sì",
      "B": "No",
      "C": "Solo nella vasca di ritorno",
      "D": "Solo nella fase subacquea"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Solo nella fase subacquea.",
    "category": "Metodologia"
  },
  {
    "id": 670,
    "question": "Individuare a quale concetto corrisponde la seguente definizione: sono le capacità di dosare, ottimizzare ed adattare il comportamento dell’uomo nello svolgere diversi compiti motori, mediante l’opportuna distribuzione temporale e spaziale degli impegni muscolari, in accordo alle sue capacità condizionali",
    "options": {
      "A": "Le capacità cinestesiche",
      "B": "Gli analizzatori",
      "C": "Le fasi sensibili",
      "D": "Le capacità coordinative"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Le capacità coordinative.",
    "category": "Metodologia"
  },
  {
    "id": 671,
    "question": "Inspirazione ed espirazione hanno gli stessi tempi esecutivi in acqua?",
    "options": {
      "A": "Sì, sempre",
      "B": "Dipende dagli stili",
      "C": "No, l’inspirazione ha un tempo minore",
      "D": "No, l’espirazione ha un tempo minore"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. No, l’inspirazione ha un tempo minore.",
    "category": "Metodologia"
  },
  {
    "id": 672,
    "question": "L’allenamento giovanile, in particolare per gli Esordienti B, è finalizzato:",
    "options": {
      "A": "Al raggiungimento della performance",
      "B": "All’incremento delle capacità coordinative",
      "C": "Al perfezionamento della tecnica",
      "D": "Alla convocazione nelle rappresentative regionali"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. All’incremento delle capacità coordinative.",
    "category": "Metodologia"
  },
  {
    "id": 673,
    "question": "L’allenamento specifico della forza può iniziare:",
    "options": {
      "A": "Mai",
      "B": "A 8 – 10 anni",
      "C": "A 11 – 12 anni",
      "D": "A 13 – 15 anni"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. A 13 – 15 anni.",
    "category": "Metodologia"
  },
  {
    "id": 674,
    "question": "L’apprendimento della tecnica è influenzato da fattori:",
    "options": {
      "A": "Coordinativi e condizionali",
      "B": "Interni ed esterni",
      "C": "Muscolari ed organici",
      "D": "Alimentari e psicologici"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Coordinativi e condizionali.",
    "category": "Metodologia"
  },
  {
    "id": 675,
    "question": "L’apprendimento motorio passa attraverso tre fasi:",
    "options": {
      "A": "Fase della coordinazione grezza, coordinazione globale e coordinazione disponibile",
      "B": "Fase della coordinazione grezza, coordinazione fine e disponibilità variabile",
      "C": "Fase della coordinazione grezza, coordinazione globale e coordinazione analitica",
      "D": "Fase della costituzione – condizione – coordinazione - controllo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Fase della coordinazione grezza, coordinazione fine e disponibilità variabile.",
    "category": "Metodologia"
  },
  {
    "id": 676,
    "question": "L’attivazione di un sistema energetico piuttosto che un altro dipende:",
    "options": {
      "A": "Dal livello di allenamento",
      "B": "Dalla produzione di adrenalina",
      "C": "Dal momento della giornata",
      "D": "Dalle caratteristiche dell’esercizio fisico e dallo stato nutrizionale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dalle caratteristiche dell’esercizio fisico e dallo stato nutrizionale 69.",
    "category": "Metodologia"
  },
  {
    "id": 677,
    "question": "L’attività sportiva per l’adolescente può:",
    "options": {
      "A": "Essere considerata uno svago",
      "B": "Avere influenza sul piano fisico ma non su quello cognitivo",
      "C": "Migliorare l’immagine corporea",
      "D": "(Solo negli sport di squadra) Sviluppare l’ambito socio-affettivo e relazionale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Migliorare l’immagine corporea.",
    "category": "Metodologia"
  },
  {
    "id": 678,
    "question": "L’equilibrio in acqua si ottiene:",
    "options": {
      "A": "Mantenendo una posizione consona e reagendo allo squilibrio con una contrazione contro laterale",
      "B": "Con la frequenza di un corso intensivo",
      "C": "In posizione verticale in rilassamento generale in altre posizioni opportune mantenendo una posizione consona",
      "D": "Solo in galleggiamento prono e supino"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. In posizione verticale in rilassamento generale in altre posizioni opportune mantenendo una posizione consona.",
    "category": "Metodologia"
  },
  {
    "id": 679,
    "question": "L’equilibrio:",
    "options": {
      "A": "È la capacità di eseguire un compito motorio mantenendo il corpo in equilibrio statico",
      "B": "È la capacità di eseguire un compito motorio mantenendo il corpo in equilibrio dinamico",
      "C": "È regolato prevalentemente dalle informazioni dell’analizzatore cinestesico e tattile",
      "D": "È regolato prevalentemente dalle informazioni dell’analizzatore ottico e vestibolare"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. È regolato prevalentemente dalle informazioni dell’analizzatore cinestesico e tattile.",
    "category": "Metodologia"
  },
  {
    "id": 680,
    "question": "L’errore sportivo è:",
    "options": {
      "A": "L’esecuzione involontariamente diversa dalla richiesta tecnica avuta",
      "B": "Il risultato di una distrazione",
      "C": "L’allontanamento dal modello prestativo",
      "D": "L’interpretazione non corretta della richiesta tecnica"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. L’allontanamento dal modello prestativo.",
    "category": "Metodologia"
  },
  {
    "id": 681,
    "question": "L’espressione motoria tipica dei bambini e dei preadolescenti è:",
    "options": {
      "A": "La rapidità",
      "B": "La forza",
      "C": "La tenacia",
      "D": "La resistenza"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La rapidità.",
    "category": "Metodologia"
  },
  {
    "id": 682,
    "question": "L’insieme delle strutture cerebrali deputate al controllo del movimento si chiama:",
    "options": {
      "A": "Sistema di raccolta, progettazione e regolazione del movimento",
      "B": "Sistema sensibile",
      "C": "Sistema olistico",
      "D": "Sistema sensomotorio"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sistema sensomotorio.",
    "category": "Metodologia"
  },
  {
    "id": 683,
    "question": "L’interruzione della battuta di gambe a crawl è solitamente imputabile a:",
    "options": {
      "A": "Limitata rotazione spalle durante la respirazione che provoca la rotazione dell’anca con conseguente incrocio delle gambe",
      "B": "Pigrizia mentale del nuotatore",
      "C": "Mancanza di coordinazione braccia/gambe",
      "D": "Minore propulsione della bracciata"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Mancanza di coordinazione braccia/gambe.",
    "category": "Metodologia"
  },
  {
    "id": 684,
    "question": "L’ontogenesi della motricità si compone di due fasi, quali?",
    "options": {
      "A": "Maturazione anatomica – maturazione funzionale",
      "B": "Maturazione organica – maturazione psichica",
      "C": "Maturazione biologica – maturazione chimico-fisica",
      "D": "Maturazione endogena – maturazione esogena"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Maturazione anatomica – maturazione funzionale.",
    "category": "Metodologia"
  },
  {
    "id": 685,
    "question": "L’organizzazione delle sensazioni relative al proprio corpo in rapporto con i dati del mondo esterno definisce:",
    "options": {
      "A": "Lo schema corporeo",
      "B": "Le capacità coordinative",
      "C": "Lo schema motorio",
      "D": "L’età biologica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Lo schema corporeo.",
    "category": "Metodologia"
  },
  {
    "id": 686,
    "question": "La coordinazione è la capacità di:",
    "options": {
      "A": "Mantenere o riacquistare con il corpo una posizione stabile in differenti situazioni statiche o dinamiche",
      "B": "Compiere atti motori utilizzando la massima escursione articolare",
      "C": "Regolare e dosare il complesso degli impegni muscolari onde ottenere l’azione con rapidità, precisione e armonia",
      "D": "Ottimizzare il rapporto peso/potenza"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Regolare e dosare il complesso degli impegni muscolari onde ottenere l’azione con rapidità, precisione e armonia.",
    "category": "Metodologia"
  },
  {
    "id": 687,
    "question": "La differenziazione cinestesica è:",
    "options": {
      "A": "Un particolare analizzatore",
      "B": "Una capacità condizionale non sempre allenabile",
      "C": "Una capacità coordinativa speciale",
      "D": "Una capacità coordinativa generale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Una capacità coordinativa speciale.",
    "category": "Metodologia"
  },
  {
    "id": 688,
    "question": "La diminuzione della frequenza cardiaca a riposo è sinonimo di:",
    "options": {
      "A": "Uno stato di affaticamento",
      "B": "Un incombente collasso cardiocircolatorio",
      "C": "Una migliore efficienza funzionale",
      "D": "Una aumentata diffusione periferica del plasma"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Una migliore efficienza funzionale.",
    "category": "Metodologia"
  },
  {
    "id": 689,
    "question": "La fase della coordinazione fine:",
    "options": {
      "A": "Consente un movimento più fluido, armonico e compiuto",
      "B": "Non conosce momenti di stasi",
      "C": "Non è influenzata da fattori di disturbo",
      "D": "È l’ultimo stadio del processo di apprendimento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Consente un movimento più fluido, armonico e compiuto.",
    "category": "Metodologia"
  },
  {
    "id": 690,
    "question": "La fase della coordinazione grezza:",
    "options": {
      "A": "È caratterizzata dall’attività di comprensione del compito motorio",
      "B": "Non è subordinata alla dimostrazione pratica",
      "C": "Migliora se non si effettuano ripetizioni riuscite e corrette",
      "D": "È secondo una capacità coordinativa speciale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. È caratterizzata dall’attività di comprensione del compito motorio.",
    "category": "Metodologia"
  },
  {
    "id": 691,
    "question": "La fase della disponibilità variabile è:",
    "options": {
      "A": "La fase in cui la rappresentazione del movimento diventa più completa",
      "B": "L’ultimo stadio del processo di apprendimento",
      "C": "Lo stadio intermedio in cui è importante variare la disponibilità delle proprie abilità",
      "D": "La fase in cui viene, erroneamente, automatizzato l’errore"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’ultimo stadio del processo di apprendimento.",
    "category": "Metodologia"
  },
  {
    "id": 692,
    "question": "La formazione di abilità motorie contribuisce a sviluppare le capacità coordinative?",
    "options": {
      "A": "Solo nell’apprendimento delle tecniche",
      "B": "Sì, in base alle fasi sensibili",
      "C": "Sempre, in ogni caso",
      "D": "No, le capacità coordinative si sviluppano in modo autonomo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Sempre, in ogni caso.",
    "category": "Metodologia"
  },
  {
    "id": 693,
    "question": "La forza è:",
    "options": {
      "A": "Una capacità condizionale",
      "B": "Una capacità coordinativa",
      "C": "Una caratteristica genetica",
      "D": "Una capacità mista"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Una capacità condizionale.",
    "category": "Metodologia"
  },
  {
    "id": 694,
    "question": "La forza può essere:",
    "options": {
      "A": "Coordinata, psicologica, breve",
      "B": "Intensa, lieve, media",
      "C": "Condizionale, motoria, tenue",
      "D": "Massimale, resistente, veloce"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Massimale, resistente, veloce.",
    "category": "Metodologia"
  },
  {
    "id": 695,
    "question": "La frequenza cardiaca:",
    "options": {
      "A": "Va controllata perché aiuta a valutare il diverso grado di affaticamento degli allievi",
      "B": "Deve rimanere ai livelli elevati durante tutta la lezione",
      "C": "Deve rimanere a livelli simili a quelli che di hanno durante il riposo",
      "D": "È uguale per tutti i soggetti che effettuano gli stessi esercizi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Va controllata perché aiuta a valutare il diverso grado di affaticamento degli allievi.",
    "category": "Metodologia"
  },
  {
    "id": 696,
    "question": "La lentezza della nuotata a rana è prevalentemente dovuta a:",
    "options": {
      "A": "Extrarotazione dei piedi durante il colpo di gambe",
      "B": "Mancanza della fase di spinta degli arti inferiori",
      "C": "Recupero subacqueo degli arti inferiori",
      "D": "Alternanza delle azioni propulsive su un assetto di galleggiamento non ideale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Alternanza delle azioni propulsive su un assetto di galleggiamento non ideale.",
    "category": "Metodologia"
  },
  {
    "id": 697,
    "question": "La mobilità articolare è:",
    "options": {
      "A": "L’esecuzione veloce di movimenti ampi",
      "B": "La capacità di eseguire movimenti con la massima ampiezza",
      "C": "La capacità di eseguire movimenti con la massima velocità",
      "D": "Una circostanza che aumenta l’economia del gesto e facilita l’affaticamento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La capacità di eseguire movimenti con la massima ampiezza.",
    "category": "Metodologia"
  },
  {
    "id": 698,
    "question": "La mobilità articolare è:",
    "options": {
      "A": "La capacità di compiere azioni rapidamente",
      "B": "La capacità di compiere gesti con la massima escursione",
      "C": "La capacità di muovere gli arti singolarmente",
      "D": "La capacità d vincere una resistenza in un tempo breve"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La capacità di compiere gesti con la massima escursione.",
    "category": "Metodologia"
  },
  {
    "id": 699,
    "question": "La motivazione:",
    "options": {
      "A": "È alla base dell’apprendimento",
      "B": "È legata all’età dell’individuo",
      "C": "Non conosce fattori inibenti",
      "D": "Può essere trascurata relativamente all’apprendimento tecnico"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. È alla base dell’apprendimento.",
    "category": "Metodologia"
  },
  {
    "id": 700,
    "question": "La motricità si basa:",
    "options": {
      "A": "Sulle funzioni del SNC e degli organi di senso",
      "B": "Sull’attività della muscolatura",
      "C": "Sull’intelligenza speculativa",
      "D": "Sulle funzioni organiche e muscolari"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sulle funzioni del SNC e degli organi di senso.",
    "category": "Metodologia"
  },
  {
    "id": 701,
    "question": "La multilateralità può essere di tipo:",
    "options": {
      "A": "Simbolico",
      "B": "Motorio e propedeutico",
      "C": "Proteico",
      "D": "Generale e mirato"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Generale e mirato.",
    "category": "Metodologia"
  },
  {
    "id": 702,
    "question": "La multilateralità può essere salvaguardata, durante l’allenamento:",
    "options": {
      "A": "Attraverso esercizi che prevedano il nuoto in tutti gli stili",
      "B": "Attraverso la sintesi di due principi : ricchezza di mezzi e alternanza di esercizi",
      "C": "Facendo nuotare ai giovani tutte le distanze a stile libero",
      "D": "Attraverso l’utilizzo di serie di allenamento molto frazionate"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Attraverso la sintesi di due principi : ricchezza di mezzi e alternanza di esercizi.",
    "category": "Metodologia"
  },
  {
    "id": 703,
    "question": "La percezione è:",
    "options": {
      "A": "La funzione che ci permette di raccogliere informazioni relative a ciò che succede dentro il nostro corpo e a quello che succede all’esterno",
      "B": "La stimolazione sensoriale che non raggiunge i livelli della coscienza",
      "C": "La funzione che indica il livello di tensione di un muscolo scheletrico",
      "D": "Una capacità coordinativa speciale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La funzione che ci permette di raccogliere informazioni relative a ciò che succede dentro il nostro corpo e a quello che succede all’esterno.",
    "category": "Metodologia"
  },
  {
    "id": 704,
    "question": "La prestazione motoria dipende da:",
    "options": {
      "A": "Costituzione, condizione, coordinazione e valutazione",
      "B": "Costituzione, condizione, sperequazione e controllo",
      "C": "Costituzione, valutazione, sperequazione e coordinazione",
      "D": "Costituzione, condizione, coordinazione e controllo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Costituzione, condizione, coordinazione e controllo 72.",
    "category": "Metodologia"
  },
  {
    "id": 705,
    "question": "La programmazione consente di:",
    "options": {
      "A": "Definire procedure e mezzi per favorire l’apprendimento",
      "B": "Definire la crescita della personalità dell’allievo",
      "C": "Abbreviare la progressione didattica",
      "D": "Programmare un ruolo più attivo dell’allievo più dotato"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Definire procedure e mezzi per favorire l’apprendimento.",
    "category": "Metodologia"
  },
  {
    "id": 706,
    "question": "La resistenza d’onda è dovuta:",
    "options": {
      "A": "Alla particolare resistenza della superficie dell’acqua.",
      "B": "Ai movimenti circolari dell’acqua che risucchiano il corpo.",
      "C": "Ai movimenti superficiali dell’acqua che condizionano l’avanzata. del corpo",
      "D": "Alla percentuale di massa grassa del nuotatore"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Ai movimenti superficiali dell’acqua che condizionano l’avanzata. del corpo.",
    "category": "Metodologia"
  },
  {
    "id": 707,
    "question": "La resistenza di attrito è dovuta:",
    "options": {
      "A": "Alla superficie del piano perpendicolare all’asse di avanzamento",
      "B": "Allo sfregamento del corpo con le molecole d’acqua",
      "C": "Ai movimenti superficiali dell’acqua che condizionano l’avanzata. del corpo",
      "D": "Alla percentuale di massa grassa del nuotatore"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Allo sfregamento del corpo con le molecole d’acqua.",
    "category": "Metodologia"
  },
  {
    "id": 708,
    "question": "La resistenza di superficie o tensione superficiale è dovuta:",
    "options": {
      "A": "Alla particolare resistenza della superficie dell’acqua",
      "B": "Ai movimenti circolari dell’acqua che risucchiano il corpo",
      "C": "Allo sfregamento del corpo con le molecole d’acqua",
      "D": "Alla percentuale di massa grassa del nuotatore"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Alla particolare resistenza della superficie dell’acqua.",
    "category": "Metodologia"
  },
  {
    "id": 709,
    "question": "La resistenza di vortice, o turbolenza, è dovuta:",
    "options": {
      "A": "Alla superficie del piano perpendicolare all’asse di avanzamento",
      "B": "Ai movimenti circolari dell’acqua che risucchiano il corpo",
      "C": "Ai movimenti superficiali dell’acqua che condizionano l’avanzata del corpo",
      "D": "Alla percentuale di massa grassa del nuotatore"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Ai movimenti circolari dell’acqua che risucchiano il corpo.",
    "category": "Metodologia"
  },
  {
    "id": 710,
    "question": "La resistenza è:",
    "options": {
      "A": "Una capacità coordinativa",
      "B": "Una capacità condizionale",
      "C": "Una condizione psicomotoria",
      "D": "Una tecnica psicologica"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Una capacità condizionale.",
    "category": "Metodologia"
  },
  {
    "id": 711,
    "question": "La resistenza frontale all’avanzamento in acqua è dovuta",
    "options": {
      "A": "Alla superficie del piano perpendicolare all’asse di avanzamento",
      "B": "Alla particolare resistenza della superficie dell’acqua",
      "C": "Ai movimenti circolari dell’acqua che risucchiano il corpo",
      "D": "Alla tipologia di prodotti usati per la clorazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Alla superficie del piano perpendicolare all’asse di avanzamento.",
    "category": "Metodologia"
  },
  {
    "id": 712,
    "question": "La resistenza frontale, raddoppiando la velocità di avanzamento, aumenta di:",
    "options": {
      "A": "2 volte",
      "B": "3 volte",
      "C": "4 volte",
      "D": "8volte"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. 4 volte.",
    "category": "Metodologia"
  },
  {
    "id": 713,
    "question": "La sensazione è:",
    "options": {
      "A": "La è la funzione che ci permette di raccogliere informazioni relative a ciò che succede dentro il nostro corpo e a quello che succede all’esterno",
      "B": "Una componente della prestazione",
      "C": "La stimolazione sensoriale che non raggiunge i livelli della coscienza",
      "D": "La premonizione di eventi futuri"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La stimolazione sensoriale che non raggiunge i livelli della coscienza.",
    "category": "Metodologia"
  },
  {
    "id": 714,
    "question": "La sensopercezione è:",
    "options": {
      "A": "Un’attività conoscitiva che permette di percepire gli stimoli provenienti dagli analizzatori",
      "B": "Un esercizio per migliorare la sensibilità degli allievi",
      "C": "Una capacità condizionale",
      "D": "Un insieme di stimoli atti a migliorare la prestazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un’attività conoscitiva che permette di percepire gli stimoli provenienti dagli analizzatori.",
    "category": "Metodologia"
  },
  {
    "id": 715,
    "question": "La spinta di galleggiamento è:",
    "options": {
      "A": "La forza applicata al baricentro",
      "B": "La forza applicata al centro di galleggiamento",
      "C": "La combinazione tra forza di gravità e peso corporeo",
      "D": "La forza espressa dalla gambata"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La forza applicata al centro di galleggiamento.",
    "category": "Metodologia"
  },
  {
    "id": 716,
    "question": "La supercompensazione è:",
    "options": {
      "A": "Un processo mediante il quale il disagio provoca una situazione di fatica , cui segue una reazione ricostruttiva che supera la fatica precedente",
      "B": "Un processo in relazione al quale tutte le fatiche vengono superate attraverso stimolazioni muscolari",
      "C": "Un processo di ricostruzione dello stimolo a seguito di carichi di lavoro di tipo C2",
      "D": "Il processo mediante il quale lo stimolo provoca una condizione di disagio (la fatica), cui segue una reazione ricostruttiva che supera il livello precedente alla stimolazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il processo mediante il quale lo stimolo provoca una condizione di disagio (la fatica), cui segue una reazione ricostruttiva che supera il livello precedente alla stimolazione.",
    "category": "Metodologia"
  },
  {
    "id": 717,
    "question": "La tecnica della nuotata a dorso prevede che:",
    "options": {
      "A": "Le braccia siano perfettamente opposte",
      "B": "Un braccio entri in acqua prima dell’inizio della parte finale di spinta dell’altro",
      "C": "La velocità condizioni le fasi della bracciata",
      "D": "Siano deliberamente escluse esercitazioni sulla respirazione (il capo è emerso)"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Un braccio entri in acqua prima dell’inizio della parte finale di spinta dell’altro.",
    "category": "Metodologia"
  },
  {
    "id": 718,
    "question": "La tecnica di partenza denominata track start permette:",
    "options": {
      "A": "Di aggrappare entrambi i piedi al blocco",
      "B": "Un movimento più spettacolare",
      "C": "Di avere più equilibrio sul blocco",
      "D": "Di applicare la spinta per un tempo più lungo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Di avere più equilibrio sul blocco.",
    "category": "Metodologia"
  },
  {
    "id": 719,
    "question": "La tecnica natatoria ottimale è:",
    "options": {
      "A": "Stabile nella struttura e variabile nei dettagli",
      "B": "Stabile nei dettagli e variabile nella struttura",
      "C": "Stabile nella struttura e nei dettagli",
      "D": "Variabile nella struttura e nei dettagli"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Stabile nella struttura e variabile nei dettagli.",
    "category": "Metodologia"
  },
  {
    "id": 720,
    "question": "La track start è",
    "options": {
      "A": "Un movimento che nella pallanuoto serve a smarcarsi",
      "B": "Il passaggio di posizione da gambe allungate a gambe fuori nel nuoto sincronizzato",
      "C": "La partenza dal blocco dove i piedi non sono allineati",
      "D": "Una presa per il trasporto del manichino nel salvamento sportivo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La partenza dal blocco dove i piedi non sono allineati.",
    "category": "Metodologia"
  },
  {
    "id": 721,
    "question": "La variazione di un esercizio in una progressione didattica stimola maggiormente le capacità:",
    "options": {
      "A": "Vestibolari",
      "B": "Coordinative",
      "C": "Visive",
      "D": "Condizionali"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Coordinative.",
    "category": "Metodologia"
  },
  {
    "id": 722,
    "question": "La velocità di una bracciata a crawl è:",
    "options": {
      "A": "Non misurabile",
      "B": "La stessa in ogni fase",
      "C": "Progressivamente accelerata",
      "D": "Progressivamente decelerata"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Progressivamente accelerata.",
    "category": "Metodologia"
  },
  {
    "id": 723,
    "question": "La velocità è:",
    "options": {
      "A": "La capacità di eseguire un gesto nel minor tempo possibile",
      "B": "La capacità che ci permette di essere rapidi",
      "C": "La capacità che ci permette di coordinare i movimenti",
      "D": "Una capacità coordinativi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La capacità di eseguire un gesto nel minor tempo possibile.",
    "category": "Metodologia"
  },
  {
    "id": 724,
    "question": "Le capacità condizionali dipendono principalmente:",
    "options": {
      "A": "Da aspetti di tipo fisiologico, energetico, biochimico",
      "B": "Da aspetti neuronali dettati dal sistema nervoso centrale",
      "C": "Da aspetti socio-educativi",
      "D": "Da aspetti energetici, biologici, fisiologici e coordinativi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Da aspetti energetici, biologici, fisiologici e coordinativi.",
    "category": "Metodologia"
  },
  {
    "id": 725,
    "question": "Le capacità condizionali si sviluppano:",
    "options": {
      "A": "Da appena nati",
      "B": "Dai 10 anni",
      "C": "Dai 4 ai 10 anni",
      "D": "Esclusivamente in età adulta"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dai 10 anni.",
    "category": "Metodologia"
  },
  {
    "id": 726,
    "question": "Le capacità condizionali sono capacità fisiche determinate da:",
    "options": {
      "A": "Fattori energetici",
      "B": "Fattori psicologici",
      "C": "Fattori antropologici",
      "D": "Fattori neurologici"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Fattori energetici.",
    "category": "Metodologia"
  },
  {
    "id": 727,
    "question": "Le capacità coordinative devono essere esercitate a partire da:",
    "options": {
      "A": "8 anni",
      "B": "5/6 anni",
      "C": "12 anni",
      "D": "10 anni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 5/6 anni.",
    "category": "Metodologia"
  },
  {
    "id": 728,
    "question": "Le capacità coordinative dipendono:",
    "options": {
      "A": "Dalla sensibilità muscolare",
      "B": "Dalla funzionalità del sistema nervoso",
      "C": "Dall’apparato cardiocorcolatorio",
      "D": "Dall’età biologica"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dalla funzionalità del sistema nervoso.",
    "category": "Metodologia"
  },
  {
    "id": 729,
    "question": "Le capacità coordinative generali riguardano:",
    "options": {
      "A": "Forza, resistenza, velocità",
      "B": "Orientamento, ritmo, mobilità articolare",
      "C": "Destrezza, equilibrio, elasticità dei movimenti",
      "D": "Apprendimento, controllo, trasformazione dei movimenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Apprendimento, controllo, trasformazione dei movimenti.",
    "category": "Metodologia"
  },
  {
    "id": 730,
    "question": "Le capacità coordinative:",
    "options": {
      "A": "Controllano, regolano ed organizzano il movimento",
      "B": "Sono legate ad aspetti antropometrici ed energetici",
      "C": "Sono legate al sistema nervoso centrale ma non periferico",
      "D": "Controllano primariamente il movimento di arti inferiori e superiori"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Controllano, regolano ed organizzano il movimento.",
    "category": "Metodologia"
  },
  {
    "id": 731,
    "question": "Le capacità motorie sono classificate in:",
    "options": {
      "A": "Coordinative, compensative, condizionali",
      "B": "Coordinative e condizionali",
      "C": "Coordinative, condizionali ed intermedie",
      "D": "Capacità di compiere o inibire movimenti"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Coordinative, condizionali ed intermedie.",
    "category": "Metodologia"
  },
  {
    "id": 732,
    "question": "Le capacità motorie sono:",
    "options": {
      "A": "Apprendimento motorio",
      "B": "Mobilità articolare, coordinazione, condizione",
      "C": "Forza, resistenza, velocità",
      "D": "Costituzione, condizione, coordinazione, controllo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Mobilità articolare, coordinazione, condizione.",
    "category": "Metodologia"
  },
  {
    "id": 733,
    "question": "Le capacità sensopercettive dipendono da:",
    "options": {
      "A": "L’istruttore",
      "B": "L’ambiente",
      "C": "L’individuo",
      "D": "Le capacità coordinative"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. L’individuo.",
    "category": "Metodologia"
  },
  {
    "id": 734,
    "question": "Le capacità sensopercettive sono la base per la costruzione della:",
    "options": {
      "A": "Abilità",
      "B": "Tecnica",
      "C": "Tattica",
      "D": "Affettività"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Tecnica.",
    "category": "Metodologia"
  },
  {
    "id": 735,
    "question": "Le esercitazioni sulla multilateralità incrementano:",
    "options": {
      "A": "Lo sviluppo condizionale",
      "B": "Lo sviluppo coordinativo",
      "C": "I fattori allenanti",
      "D": "La mobilità articolare dei distretti coinvolti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Lo sviluppo coordinativo.",
    "category": "Metodologia"
  },
  {
    "id": 736,
    "question": "Le fasi dello sviluppo della coordinazione sono:",
    "options": {
      "A": "Controllo, adattamento e trasformazione",
      "B": "Coordinazione grezza, coordinazione fine e disponibilità variabile",
      "C": "Iniziale, intermedia e finale",
      "D": "Intensità, densità, volume"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Coordinazione grezza, coordinazione fine e disponibilità variabile.",
    "category": "Metodologia"
  },
  {
    "id": 737,
    "question": "Le fasi sensibili:",
    "options": {
      "A": "Sono legate all’attività degli analizzatori",
      "B": "Servono per migliorare la sensibilità all’acqua",
      "C": "Sono solo ipotizzate",
      "D": "Sono periodi dello sviluppo in cui alcuni stimoli provocano miglioramenti significativi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Sono periodi dello sviluppo in cui alcuni stimoli provocano miglioramenti significativi.",
    "category": "Metodologia"
  },
  {
    "id": 738,
    "question": "Le resistenze all’avanzamento, nel nuoto, sono in numero di:",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 3.",
    "category": "Metodologia"
  },
  {
    "id": 739,
    "question": "Le strutture incaricate alla selezione di stimoli si chiamano:",
    "options": {
      "A": "Selezionatori",
      "B": "Analizzatori",
      "C": "Elaboratori",
      "D": "Commutatori"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Analizzatori.",
    "category": "Metodologia"
  },
  {
    "id": 740,
    "question": "Lo schema corporeo è:",
    "options": {
      "A": "Lo schema del sistema osteo- articolare",
      "B": "Lo schema logico per organizzare la proposta di esercizi in acqua o in palestra",
      "C": "L’immagine che ognuno ha del proprio corpo in relazione con il mondo esterno",
      "D": "L’immagine esterna del nostro corpo che non può essere percepita"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. L’immagine che ognuno ha del proprio corpo in relazione con il mondo esterno.",
    "category": "Metodologia"
  },
  {
    "id": 741,
    "question": "Lo sviluppo delle capacità coordinative è importante nel nuoto:",
    "options": {
      "A": "Perché aiuta ad elaborare meglio la sensopercezione acquatica",
      "B": "Perché incrementa le capacità di adattamento all’acqua",
      "C": "Perché favorisce l’incremento della resistenza",
      "D": "Perché favorisce l’accrescimento staturo-ponderale (legge di Stratz)"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Perché aiuta ad elaborare meglio la sensopercezione acquatica.",
    "category": "Metodologia"
  },
  {
    "id": 742,
    "question": "Nel crawl dopo il recupero aereo la mano che entra in acqua rispetto alla linea mediana del corpo è:",
    "options": {
      "A": "Inclinata con il palmo rivolto verso l’esterno",
      "B": "Piatta e scivola verso avanti con il palmo rivolto verso il basso",
      "C": "Inclinata con il palmo rivolto verso l’interno",
      "D": "Tesa e piatta"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Inclinata con il palmo rivolto verso l’esterno.",
    "category": "Metodologia"
  },
  {
    "id": 743,
    "question": "Nel crawl la fase finale di spinta subacquea degli arti superiori avviene:",
    "options": {
      "A": "Verso il basso per maggiore stabilità",
      "B": "In modo costante per senso ritmico",
      "C": "In accelerazione",
      "D": "Dal basso verso l’alto"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. In accelerazione.",
    "category": "Metodologia"
  },
  {
    "id": 744,
    "question": "Nel dorso, il rollio si esegue per ottenere:",
    "options": {
      "A": "Rispetto dei regolamenti tecnici",
      "B": "Bracciata più potente in quanto i muscoli lavorano in condizioni biomeccaniche più vantaggiose",
      "C": "Coordinazione 2/6",
      "D": "Facilitazione nel posizionamento della testa, in questo modo si riesce a tenerla più bassa appoggiata all’acqua"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Bracciata più potente in quanto i muscoli lavorano in condizioni biomeccaniche più vantaggiose.",
    "category": "Metodologia"
  },
  {
    "id": 745,
    "question": "Nel nuoto la tecnica ha come obiettivo:",
    "options": {
      "A": "Efficacia ed economicità del gesto",
      "B": "Rapidità del gesto",
      "C": "Massima forza massimale applicabile",
      "D": "La distribuzione razionale dei carichi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Efficacia ed economicità del gesto.",
    "category": "Metodologia"
  },
  {
    "id": 746,
    "question": "Nel nuoto quali sono le articolazioni più stimolate?",
    "options": {
      "A": "Polso, gomito, ginocchio e tibio- tarsica",
      "B": "Falangi, gomito, coxo-femorale",
      "C": "SNC",
      "D": "Scapolo-omerale, colonna vertebrale, coxo-femorale e tibio-tarsica"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Scapolo-omerale, colonna vertebrale, coxo-femorale e tibio-tarsica.",
    "category": "Metodologia"
  },
  {
    "id": 747,
    "question": "Nel rapporto tra capacità e abilità motorie:",
    "options": {
      "A": "L’apprendimento delle abilità motorie precede quello delle capacità coordinative",
      "B": "Le abilità motorie si basano esclusivamente sulle capacità condizionali",
      "C": "Le abilità motorie si costruiscono sulle capacità motorie ma il loro esercizio aiuta lo sviluppo di queste ultime",
      "D": "Non esistono rapporti strutturali tra capacità ed abilità motorie"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Le abilità motorie si costruiscono sulle capacità motorie ma il loro esercizio aiuta lo sviluppo di queste ultime.",
    "category": "Metodologia"
  },
  {
    "id": 748,
    "question": "Nell’allenamento giovanile quale tipo di forza è corretto sviluppare?",
    "options": {
      "A": "Forza massimale",
      "B": "Forza rapida e veloce",
      "C": "Resistenza alla forza",
      "D": "Forza multilaterale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Forza rapida e veloce.",
    "category": "Metodologia"
  },
  {
    "id": 749,
    "question": "Nell’esercizio di lunga durata:",
    "options": {
      "A": "L’energia è fornita dal meccanismo aerobico",
      "B": "Si accumula acido lattico che impedisce di proseguire il lavoro",
      "C": "Si utilizzano acidi grassi e proteine",
      "D": "Si utilizza prevalentemente la fosfocreatina disponibile a livello muscolare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’energia è fornita dal meccanismo aerobico.",
    "category": "Metodologia"
  },
  {
    "id": 750,
    "question": "Nella battuta di gambe prona e supina, la propulsione è:",
    "options": {
      "A": "Nulla, la gambata ha solo funzione di equilibrio",
      "B": "Fornita dalla pianta del piede che schiaccia l’acqua",
      "C": "Massimale",
      "D": "Fornita dal dorso del piede"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Fornita dal dorso del piede.",
    "category": "Metodologia"
  },
  {
    "id": 751,
    "question": "Nella correzione di un errore nella bracciata a stile libero, bisogna concedere priorità a:",
    "options": {
      "A": "Continuità - ritmo",
      "B": "Angoli - traiettorie",
      "C": "Presa - appoggio",
      "D": "Fase aerea (recupero)"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Continuità - ritmo.",
    "category": "Metodologia"
  },
  {
    "id": 752,
    "question": "Nella farfalla la gambata propulsiva avviene:",
    "options": {
      "A": "All’inizio della fase inspiratoria",
      "B": "All’entrata in acqua delle mani",
      "C": "Nella fase finale della trazione",
      "D": "Durante la fase di trazione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. All’entrata in acqua delle mani.",
    "category": "Metodologia"
  },
  {
    "id": 753,
    "question": "Nella farfalla le mani appena entrano in acqua:",
    "options": {
      "A": "Spingono verso il basso (downsweep)",
      "B": "Tirano verso fuori (outsweep)",
      "C": "Tirano fino alle spalle",
      "D": "Affondano repentinamente"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Tirano verso fuori (outsweep).",
    "category": "Metodologia"
  },
  {
    "id": 754,
    "question": "Nella fase di coordinazione grezza cosa è bene correggere?:",
    "options": {
      "A": "I dettagli",
      "B": "Gli errori grossolani e i dettagli",
      "C": "Tutto il possibile",
      "D": "Gli errori grossolani"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Gli errori grossolani.",
    "category": "Metodologia"
  },
  {
    "id": 755,
    "question": "Nella fase di spinta nel dorso, il palmo della mano è rivolto",
    "options": {
      "A": "Verso i piedi",
      "B": "Verso il fianco",
      "C": "Verso l’alto",
      "D": "Verso il basso"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Verso i piedi.",
    "category": "Metodologia"
  },
  {
    "id": 756,
    "question": "Nella fase subacquea a rana dopo la virata la corretta sequenza dei movimenti è:",
    "options": {
      "A": "Presa, trazione, spinta, recupero",
      "B": "Spinta dal bordo, azione di braccia gambata rana recupero delle braccia",
      "C": "Spinta dal bordo, gambata a delfino, azione delle braccia, recupero, gambata rana",
      "D": "Spinta dal bordo, bracciata, colpo di gambe a delfino recupero delle braccia, gambata rana"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Spinta dal bordo, bracciata, colpo di gambe a delfino recupero delle braccia, gambata rana 77.",
    "category": "Metodologia"
  },
  {
    "id": 757,
    "question": "Nella nuotata a crawl cosa è importante?",
    "options": {
      "A": "Consentire alla mano, durante il recupero, di sfiorare l’acqua per non perdere il contatto con la stessa",
      "B": "Effettuare l’ultima parte della passata subacquea con un azione accelerata",
      "C": "Consentire al braccio di guidare il recupero",
      "D": "Consentire alla mano, durante il recupero, di sfiorare l’acqua per prepararsi alla fase di presa"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Effettuare l’ultima parte della passata subacquea con un azione accelerata.",
    "category": "Metodologia"
  },
  {
    "id": 758,
    "question": "Nella nuotata a crawl quando deve iniziare la rotazione del capo?",
    "options": {
      "A": "Prima che l’arto opposto sia entrato in acqua",
      "B": "Quando l’arto opposto inizia la fase di spinta",
      "C": "Quando l’arto opposto è in fase di recupero",
      "D": "Dopo che l’arto opposto è entrato in acqua"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dopo che l’arto opposto è entrato in acqua.",
    "category": "Metodologia"
  },
  {
    "id": 759,
    "question": "Nella nuotata a dorso l’esercizio definito opposizione di fase è un:",
    "options": {
      "A": "Esercizio di esclusione",
      "B": "Esercizio di perfezionamento",
      "C": "Esercizio di specializzazione",
      "D": "Esercizio inutile"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Esercizio di perfezionamento.",
    "category": "Metodologia"
  },
  {
    "id": 760,
    "question": "Nella nuotata a rana il recupero degli arti inferiori avviene:",
    "options": {
      "A": "Quando le braccia sono in fase di trazione",
      "B": "Quando le braccia sono nella fase del recupero",
      "C": "Quando le braccia sono in fase di spinta",
      "D": "Quando le braccia sono in fase di presa/appoggio"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Quando le braccia sono nella fase del recupero.",
    "category": "Metodologia"
  },
  {
    "id": 761,
    "question": "Nella nuotata a rana si può considerare errore:",
    "options": {
      "A": "Inserire una pausa dopo il recupero di ogni bracciata",
      "B": "Sovrapporre l’azione propulsiva delle braccia a quella delle gambe",
      "C": "Effettuare uno scivolamento dopo ogni gambata",
      "D": "Respirare frontalmente"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Sovrapporre l’azione propulsiva delle braccia a quella delle gambe.",
    "category": "Metodologia"
  },
  {
    "id": 762,
    "question": "Nella nuotata a stile libero, un concorrente può rimanere in completa immersione:",
    "options": {
      "A": "Per tutta la distanza che deve coprire",
      "B": "Mai",
      "C": "Per i primi 12,5 metri (mezza vasca)",
      "D": "Alla partenza ed alle virate, per un massimo di 15 metri"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Alla partenza ed alle virate, per un massimo di 15 metri.",
    "category": "Metodologia"
  },
  {
    "id": 763,
    "question": "Nella preparazione infantile e giovanile, la formazione condizionale deve mirare allo sviluppo di:",
    "options": {
      "A": "Forza veloce, resistenza anaerobica e resistenza alla forza",
      "B": "Forza rapida, resistenza aerobica e resistenza alla forza",
      "C": "Forza rapida, resistenza anaerobica e resistenza alla forza",
      "D": "Forza rapida, resistenza aerobica e resistenza alla fatica"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Forza rapida, resistenza aerobica e resistenza alla forza.",
    "category": "Metodologia"
  },
  {
    "id": 764,
    "question": "Nella rana effettuare un forte sollevamento del busto consente al nuotatore:",
    "options": {
      "A": "Il recupero degli avambracci fuori dall’acqua",
      "B": "Il recupero delle braccia fuori dall’acqua",
      "C": "Di facilitare la fase di inspirazione durante il ciclo di bracciata",
      "D": "Di controllare meglio gli avversari"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il recupero degli avambracci fuori dall’acqua.",
    "category": "Metodologia"
  },
  {
    "id": 765,
    "question": "Nella realizzazione del progetto d’azione, all’interno della programmazione dello schema motorio, possiamo affermare che:",
    "options": {
      "A": "La riformulazione del progetto d’azione si verifica spontaneamente",
      "B": "Una volta formato lo schema motorio esso è immodificabile per tutta la vita del soggetto.",
      "C": "È possibile una riformulazione del progetto d’azione e quindi dello schema motorio attraverso un confronto tra risultato atteso e risultato reale dell’azione",
      "D": "È possibile una riformulazione del progetto d’azione senza alcuna verifica del risultato"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. È possibile una riformulazione del progetto d’azione e quindi dello schema motorio attraverso un confronto tra risultato atteso e risultato reale dell’azione.",
    "category": "Metodologia"
  },
  {
    "id": 766,
    "question": "Nella resistenza aerobica l’intensità dell’andatura è:",
    "options": {
      "A": "Molto blanda",
      "B": "Intorno al massimo consumo di ossigeno",
      "C": "Tolleranza al lattato",
      "D": "Velocità submassimale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Molto blanda.",
    "category": "Metodologia"
  },
  {
    "id": 767,
    "question": "Nella scuola nuoto è corretto far eseguire esercizi di:",
    "options": {
      "A": "Forza rapida",
      "B": "Resistenza alla forza",
      "C": "Resistenza rapida",
      "D": "Resistenza alla velocità"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Forza rapida.",
    "category": "Metodologia"
  },
  {
    "id": 768,
    "question": "Nella tecnica del dorso la fase di spinta della bracciata termina:",
    "options": {
      "A": "Verso il basso",
      "B": "Verso l’alto",
      "C": "Verso l’esterno",
      "D": "Contro il corpo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Verso il basso.",
    "category": "Metodologia"
  },
  {
    "id": 769,
    "question": "Nelle esercitazioni definite di potenza aerobica la frequenza cardiaca è:",
    "options": {
      "A": "130-150 Battiti per minuto",
      "B": "170-190 Battiti per minuto",
      "C": "150-170 Battiti per minuto",
      "D": "Oltre 190 battiti per minuto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 170-190 Battiti per minuto.",
    "category": "Metodologia"
  },
  {
    "id": 770,
    "question": "Nello stile libero la fase di spinta dell’arto superiore avviene",
    "options": {
      "A": "Dopo la fase aerea",
      "B": "Dopo l’appoggio-presa",
      "C": "Prima della trazione",
      "D": "Dopo la trazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dopo la trazione.",
    "category": "Metodologia"
  },
  {
    "id": 771,
    "question": "Nuotare con gli occhi chiusi è un esercizio coordinativo di che tipo?",
    "options": {
      "A": "Di esclusione",
      "B": "Di accoppiamento",
      "C": "Di differenziazione",
      "D": "Di pronazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Di esclusione.",
    "category": "Metodologia"
  },
  {
    "id": 772,
    "question": "Nuotare per brevi tratti molto veloci alternati a tratti lenti è un’attività di tipo:",
    "options": {
      "A": "Aerobico",
      "B": "Anaerobico alattacido",
      "C": "Anaerobico lattacido",
      "D": "Tecnico-coordinativo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Anaerobico alattacido.",
    "category": "Metodologia"
  },
  {
    "id": 773,
    "question": "Parametri fisiologici delle esercitazioni A1-A2",
    "options": {
      "A": "Frequenza cardiaca 150-180 bpm – lattacidemia 2,5-3 mmol/l",
      "B": "Frequenza cardiaca < 150 bpm - lattacidemia < 2,5 mmol/l",
      "C": "Frequenza cardiaca massimale – lattacidemia massimale",
      "D": "Frequenza cardiaca > 180 bpm – lattacidemia > 2,5 mmol/l"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Frequenza cardiaca 150-180 bpm – lattacidemia 2,5-3 mmol/l.",
    "category": "Metodologia"
  },
  {
    "id": 774,
    "question": "Per allenare la forza rapida gli sforzi devono essere:",
    "options": {
      "A": "Brevissimi (3-9 secondi)",
      "B": "Brevi (10-15 secondi)",
      "C": "Medi (18-30 secondi)",
      "D": "Lunghi (oltre il minuto)"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Brevissimi (3-9 secondi).",
    "category": "Metodologia"
  },
  {
    "id": 775,
    "question": "Per allenare la resistenza bisogna:",
    "options": {
      "A": "Nuotare velocemente per lunghi tratti",
      "B": "Nuotare velocemente per brevi tratti",
      "C": "Nuotare lentamente per brevi tratti",
      "D": "Nuotare lentamente per lunghi tratti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Nuotare lentamente per lunghi tratti.",
    "category": "Metodologia"
  },
  {
    "id": 776,
    "question": "Per carico fisico esterno, intendiamo",
    "options": {
      "A": "La frequenza cardiaca mantenuta in allenamento",
      "B": "La quantità di lavoro che si svolge all’aperto",
      "C": "La massima sopportazione allo sforzo dell’organismo",
      "D": "La quantità degli esercizi di allenamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La quantità degli esercizi di allenamento.",
    "category": "Metodologia"
  },
  {
    "id": 777,
    "question": "Per fattori di prestazione s’intendono:",
    "options": {
      "A": "L’insieme delle capacità generali dell’individuo",
      "B": "Le risorse interne dell’individuo",
      "C": "I principi dell’allenamento",
      "D": "La costituzione, la condizione, la coordinazione e la mobilità articolare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’insieme delle capacità generali dell’individuo.",
    "category": "Metodologia"
  },
  {
    "id": 778,
    "question": "Per formare la struttura di base del nuotatore bisogna curare:",
    "options": {
      "A": "L’affinamento del gesto",
      "B": "Le esercitazioni analitiche",
      "C": "Il benessere e il buonumore del gruppo",
      "D": "Il ritmo e l’ampiezza del gesto"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il ritmo e l’ampiezza del gesto.",
    "category": "Metodologia"
  },
  {
    "id": 779,
    "question": "Per incrementare il carico si varia prima:",
    "options": {
      "A": "Il volume e l’intensità",
      "B": "La durata ed il volume",
      "C": "L’intensità e la densità",
      "D": "La durata e la densità"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La durata ed il volume.",
    "category": "Metodologia"
  },
  {
    "id": 780,
    "question": "Per lo sviluppo della sensopercezione è utile:",
    "options": {
      "A": "Amplificare o inibire le informazioni provenienti dagli analizzatori",
      "B": "Esercitarsi sulle singole azioni delle nuotate",
      "C": "Stimolare i differenti meccanismi energetici",
      "D": "Curare al massimo la comunicazione non verbale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Amplificare o inibire le informazioni provenienti dagli analizzatori.",
    "category": "Metodologia"
  },
  {
    "id": 781,
    "question": "Per lo sviluppo della sensopercezione è utile:",
    "options": {
      "A": "Amplificare o inibire le informazioni provenienti dagli analizzatori",
      "B": "Esercitarsi sulle singole azioni delle nuotate",
      "C": "Aumentare le ripetute",
      "D": "Utilizzare un’ampia gamma di esercizi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Amplificare o inibire le informazioni provenienti dagli analizzatori.",
    "category": "Metodologia"
  },
  {
    "id": 782,
    "question": "Per provocare nuovi adattamenti a livello più elevato, un carico di lavoro deve:",
    "options": {
      "A": "Sviluppare sempre il suo massimale",
      "B": "Stabilizzarsi nel tempo",
      "C": "Progressivamente crescere",
      "D": "Decrescere progressivamente"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Progressivamente crescere.",
    "category": "Metodologia"
  },
  {
    "id": 783,
    "question": "Per unità di base del movimento intendiamo:",
    "options": {
      "A": "Le capacità condizionali",
      "B": "Gli schemi motori di base",
      "C": "Le fasi delle bracciate nei diversi stili",
      "D": "Le capacità coordinative"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Le capacità coordinative.",
    "category": "Metodologia"
  },
  {
    "id": 784,
    "question": "Perché lo stile libero è la nuotata più veloce?",
    "options": {
      "A": "Perché si possono fare la virate a capovolta senza toccare con le mani",
      "B": "Perché è la nuotata in cui il nuotatore può applicare la massima potenza angolare con un azione propulsiva continua",
      "C": "Perché l’azione propulsiva delle gambe è particolarmente efficace",
      "D": "Perché a differenza che negli altri stili, si nuota sempre in superficie"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Perché è la nuotata in cui il nuotatore può applicare la massima potenza angolare con un azione propulsiva continua.",
    "category": "Metodologia"
  },
  {
    "id": 785,
    "question": "Qual è il momento di maggiore difficoltà nella virata a dorso ?",
    "options": {
      "A": "Uscita dalla fase subacquea",
      "B": "Rotazione al muro",
      "C": "Avvicinamento al muro e calcolo della giusta distanza",
      "D": "Nessuna difficoltà particolare perché è una virata molto facile da eseguire"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Avvicinamento al muro e calcolo della giusta distanza.",
    "category": "Metodologia"
  },
  {
    "id": 786,
    "question": "Qual è il presupposto biologico fondamentale per lo sviluppo della coordinazione?",
    "options": {
      "A": "La maturazione sessuale",
      "B": "Lo sviluppo delle masse muscolari",
      "C": "L’incremento della funzionalità cardiocircolatoria",
      "D": "La funzionalità del sistema nervoso centrale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La funzionalità del sistema nervoso centrale.",
    "category": "Metodologia"
  },
  {
    "id": 787,
    "question": "Qual è l’allenamento tipico del periodo che va dall’età prepuberale all’adolescenza?",
    "options": {
      "A": "Di formazione",
      "B": "Di costruzione",
      "C": "Di prestazione",
      "D": "Di controllo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Di costruzione.",
    "category": "Metodologia"
  },
  {
    "id": 788,
    "question": "Qual è l’analizzatore sensoriale che invia al SNC le informazioni sulle tensioni muscolari?",
    "options": {
      "A": "Labirintico",
      "B": "Vestibolare",
      "C": "Cinestetico",
      "D": "Tattile"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Cinestetico.",
    "category": "Metodologia"
  },
  {
    "id": 789,
    "question": "Qual è l’articolazione più sollecitata nel nuoto?",
    "options": {
      "A": "Gomito",
      "B": "Anca",
      "C": "Ginocchio",
      "D": "Spalla"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Spalla.",
    "category": "Metodologia"
  },
  {
    "id": 790,
    "question": "Qual è l’età cronologica in cui gli stimoli per la velocità, o rapidità, possono avere maggiore efficacia?",
    "options": {
      "A": "Tra i 2 ed i 4 anni",
      "B": "Tra i 3 ed i 6 anni",
      "C": "Tra i 6 ed i 13/14anni",
      "D": "Dopo i 14 anni"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Tra i 6 ed i 13/14anni.",
    "category": "Metodologia"
  },
  {
    "id": 791,
    "question": "Qual è la fascia di età ottimale per l’allenamento delle capacità coordinative?",
    "options": {
      "A": "6-12 anni",
      "B": "Dai 12 ani in su",
      "C": "3-6 anni",
      "D": "0-6 anni"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 6-12 anni.",
    "category": "Metodologia"
  },
  {
    "id": 792,
    "question": "Qual è la fase più propulsiva della gambata a rana?",
    "options": {
      "A": "La fase di chiusura",
      "B": "L’azione calciata",
      "C": "Entrambe perché continue",
      "D": "La fase di chiusura e riallineamento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’azione calciata.",
    "category": "Metodologia"
  },
  {
    "id": 793,
    "question": "Qual è la frequenza cardiaca da raggiungere per allenare le capacità condizionali?",
    "options": {
      "A": "120 battiti/minuto",
      "B": "La massimale (220-età)",
      "C": "70% - 90% della frequenza cardiaca massimale",
      "D": "Non più del 70% della frequenza cardiaca massimale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. 70% - 90% della frequenza cardiaca massimale.",
    "category": "Metodologia"
  },
  {
    "id": 794,
    "question": "Qual è la giusta definizione di abilità motoria?",
    "options": {
      "A": "La capacità del soggetto di eseguire azioni motorie complesse che necessitano di una certa dose di forza",
      "B": "Un’azione motoria automatizzata tramite ripetizioni consapevoli, che può essere eseguita senza l’intervento cosciente dell’allievo",
      "C": "La possibilità dell’individuo di creare strategie motorie per la realizzazione dello scopo prefissato",
      "D": "Uno schema motorio di base"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Un’azione motoria automatizzata tramite ripetizioni consapevoli, che può essere eseguita senza l’intervento cosciente dell’allievo.",
    "category": "Metodologia"
  },
  {
    "id": 795,
    "question": "Qual è la temperatura dell’acqua migliore per attività motorie intense e prolungate?",
    "options": {
      "A": "27-28° C",
      "B": "30-31° C",
      "C": "32-33° C",
      "D": "34-35° C"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. 27-28° C.",
    "category": "Metodologia"
  },
  {
    "id": 796,
    "question": "Quale combustibile viene prevalentemente utilizzato dal meccanismo anaerobico lattacido?",
    "options": {
      "A": "Zuccheri",
      "B": "Proteine",
      "C": "Grassi",
      "D": "Vitamine"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Zuccheri.",
    "category": "Metodologia"
  },
  {
    "id": 797,
    "question": "Quale dei seguenti non è un criterio di selezione dei talenti da avviare all’attività agonistica?",
    "options": {
      "A": "Parametro ereditario (caratteristiche morfologiche dei genitori)",
      "B": "Livello di sviluppo delle capacità coordinative e dell’immagine motoria",
      "C": "Fattori psicologici e motivazionali",
      "D": "Primato personale sui 25 metri stile libero"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Primato personale sui 25 metri stile libero.",
    "category": "Metodologia"
  },
  {
    "id": 798,
    "question": "Quale delle seguenti affermazioni è corretta?",
    "options": {
      "A": "Le capacità coordinative si sviluppano maggiormente fra quattro e sei anni",
      "B": "Le capacità condizionali non mostrano differenze fra i sessi",
      "C": "Le capacità condizionali sono sempre sensibili all’allenamento, anche generale",
      "D": "Le capacità coordinative sono forza, resistenza e velocità"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Le capacità condizionali sono sempre sensibili all’allenamento, anche generale.",
    "category": "Metodologia"
  },
  {
    "id": 799,
    "question": "Quale delle seguenti affermazioni sulla supercompensazione è corretta?",
    "options": {
      "A": "Determina un adattamento che si conclude con l’applicazione dello stimolo",
      "B": "Necessita di un tempo adeguato per potersi esprimere",
      "C": "Necessita di un uno stimolo non necessariamente intenso",
      "D": "Gli adattamenti sono permanenti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Necessita di un tempo adeguato per potersi esprimere.",
    "category": "Metodologia"
  },
  {
    "id": 800,
    "question": "Quale delle seguenti affermazioni sulle virate non è corretta?",
    "options": {
      "A": "Si costruiscono su abilità motorie semplici che hanno le loro fondamenta nella fase di ambientamento",
      "B": "Vanno affrontate esclusivamente nei gruppi evoluti perché troppo difficili da apprendere nei gruppi intermedi di scuola nuoto",
      "C": "In ogni livello di scuola nuoto vengono allenate, anche se non nella forma completa, comunque nei singoli elementi che le compongono",
      "D": "Nella scuola nuoto è inutile insegnare le virate in quanto sono un’abilità tipica del nuoto agonistico"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Si costruiscono su abilità motorie semplici che hanno le loro fondamenta nella fase di ambientamento.",
    "category": "Metodologia"
  },
  {
    "id": 801,
    "question": "Quale delle seguenti è una capacità coordinativa generale?",
    "options": {
      "A": "Di equilibrio",
      "B": "Di orientamento",
      "C": "Di controllo",
      "D": "Di reazione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Di controllo.",
    "category": "Metodologia"
  },
  {
    "id": 802,
    "question": "Quale delle seguenti può essere una causa di errore?",
    "options": {
      "A": "Fattori cinematici",
      "B": "Dinamica del gesto",
      "C": "Coordinazione inter- ed intramuscolare",
      "D": "Tutte le risposte precedenti"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutte le risposte precedenti.",
    "category": "Metodologia"
  },
  {
    "id": 803,
    "question": "Quale di questi elementi incide maggiormente nella mancata coordinazione della nuotata a farfalla?",
    "options": {
      "A": "Recupero lento delle braccia",
      "B": "Discontinuità della bracciata",
      "C": "Doppio colpo di gambe",
      "D": "Nessuno dei precedenti"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Discontinuità della bracciata.",
    "category": "Metodologia"
  },
  {
    "id": 804,
    "question": "Quale di questi errori è più grave, e quindi va corretto prima?",
    "options": {
      "A": "Un errore di traiettoria della mano sott’acqua",
      "B": "Una battuta di gambe deficitaria",
      "C": "Un errore di ritmo respiratorio",
      "D": "Un errore nel recupero"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Un errore di ritmo respiratorio.",
    "category": "Metodologia"
  },
  {
    "id": 805,
    "question": "Quale di questi particolari rende del tutto inefficace il colpo di gambe a rana?",
    "options": {
      "A": "Ginocchia troppo strette",
      "B": "Piedi fuori dall’acqua",
      "C": "Gambe eccessivamente larghe",
      "D": "Discontinuità del movimento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Piedi fuori dall’acqua.",
    "category": "Metodologia"
  },
  {
    "id": 806,
    "question": "Quale è la prima fase da rispettare per un corretto processo di apprendimento motorio?",
    "options": {
      "A": "Comunicazione e comprensione del gesto da effettuare",
      "B": "Automatizzazione del gesto",
      "C": "Intimorire gli allievi",
      "D": "Sviluppi della coordinazione fine"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Comunicazione e comprensione del gesto da effettuare.",
    "category": "Metodologia"
  },
  {
    "id": 807,
    "question": "Quale fascia di età è ritenuta la migliore per lo sviluppo delle capacità coordinative?",
    "options": {
      "A": "Dai 5/6 ai 10/11 anni",
      "B": "Dai 14 ai 18 anni",
      "C": "Dai 2 ai 4 anni",
      "D": "Dai 20 ai 30 anni"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Dai 5/6 ai 10/11 anni.",
    "category": "Metodologia"
  },
  {
    "id": 808,
    "question": "Quale fra i seguenti non è uno schema motorio di base?",
    "options": {
      "A": "Strisciare",
      "B": "Rotolare",
      "C": "Galleggiare",
      "D": "Arrampicare"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Galleggiare.",
    "category": "Metodologia"
  },
  {
    "id": 809,
    "question": "Quale fra queste affermazioni sul metabolismo aerobico è errata?",
    "options": {
      "A": "È l’ultimo metabolismo che entra in funzione",
      "B": "Permette performance di lunga durata e bassa intensità",
      "C": "Produce grosse quantità di acido lattico",
      "D": "Richiede la presenza dell’ossigeno"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Produce grosse quantità di acido lattico.",
    "category": "Metodologia"
  },
  {
    "id": 810,
    "question": "Quale tra i seguenti non è un metodo didattico?",
    "options": {
      "A": "Globale",
      "B": "Grezzo",
      "C": "Analitico",
      "D": "Analitico Segmentario"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Grezzo.",
    "category": "Metodologia"
  },
  {
    "id": 811,
    "question": "Quale tra le seguenti affermazioni è corretta?",
    "options": {
      "A": "Le abilità motorie sono lo sviluppo delle capacità motorie",
      "B": "Capacità motorie ed abilità motorie non definiscono il talento",
      "C": "Le capacità motorie sono prerequisiti del movimento",
      "D": "Le abilità motorie sono il presuopposto delle capacità motorie"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Le abilità motorie sono lo sviluppo delle capacità motorie.",
    "category": "Metodologia"
  },
  {
    "id": 812,
    "question": "Quale tra le seguenti è una capacità condizionale?",
    "options": {
      "A": "Il ritmo della bracciata",
      "B": "L’orientamento",
      "C": "La velocità",
      "D": "Il galleggiamento"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La velocità.",
    "category": "Metodologia"
  },
  {
    "id": 813,
    "question": "Quale tra le seguenti è una capacità condizionale?",
    "options": {
      "A": "La resistenza all’orientamento",
      "B": "Il ritmo della bracciata",
      "C": "La forza resistente",
      "D": "Il galleggiamento"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La forza resistente.",
    "category": "Metodologia"
  },
  {
    "id": 814,
    "question": "Quale tra le seguenti è una capacità coordinativa generale?",
    "options": {
      "A": "Capacità di equilibrio",
      "B": "Capacità di adattamento e trasformazione",
      "C": "Capacità di ritmizzazione",
      "D": "Capacità di comprensione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Capacità di adattamento e trasformazione.",
    "category": "Metodologia"
  },
  {
    "id": 815,
    "question": "Quale tra queste è la capacità coordinativa più importante per il nuoto?",
    "options": {
      "A": "Capacità di reazione",
      "B": "Capacità cinestesica",
      "C": "Ritmo",
      "D": "Orientamento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Capacità cinestesica.",
    "category": "Metodologia"
  },
  {
    "id": 816,
    "question": "Quale tra questi analizzatori ha il ruolo di maggiore importanza nel nuoto?",
    "options": {
      "A": "Acustico",
      "B": "Tattile",
      "C": "Cinestetico",
      "D": "Ottico"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Cinestetico.",
    "category": "Metodologia"
  },
  {
    "id": 817,
    "question": "Quale tra questi particolari va corretto prioritariamente?",
    "options": {
      "A": "La battuta di gambe",
      "B": "Le pause ed il ritmo",
      "C": "L’ingresso della mano in acqua",
      "D": "Il rollio"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Le pause ed il ritmo.",
    "category": "Metodologia"
  },
  {
    "id": 818,
    "question": "Quale, tra i seguenti, non è un meccanismo di produzione dell’energia?",
    "options": {
      "A": "Aerobico glicolitico",
      "B": "Aerobico",
      "C": "Anaerobico alattacido",
      "D": "Anaerobico lattacido"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Aerobico glicolitico.",
    "category": "Metodologia"
  },
  {
    "id": 819,
    "question": "Quale, tra le seguenti, è una capacità coordinativa generale?",
    "options": {
      "A": "Capacità di equilibrio",
      "B": "Capacita di controllo segmentario",
      "C": "Capacità di orientamento",
      "D": "Capacità di direzione e controllo motorio"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Capacità di direzione e controllo motorio.",
    "category": "Metodologia"
  },
  {
    "id": 820,
    "question": "Quale, tra le seguenti, non è un’espressione della forza?",
    "options": {
      "A": "Forza massima",
      "B": "Forza coordinata",
      "C": "Forza resistente",
      "D": "Forza rapida"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Forza coordinata.",
    "category": "Metodologia"
  },
  {
    "id": 821,
    "question": "Quali dei seguenti elementi non fanno parte degli analizzatori?",
    "options": {
      "A": "Recettori specifici",
      "B": "Vie nervose afferenti",
      "C": "Centri sensoriali",
      "D": "Miofibrille"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Miofibrille.",
    "category": "Metodologia"
  },
  {
    "id": 822,
    "question": "Quali di questi sport sono di coordinazione a mappa rigida?",
    "options": {
      "A": "Calcio – Ciclismo – Pallavolo",
      "B": "Corsa - Pugilato – Pallacanestro",
      "C": "Ciclismo – Nuoto – Canottaggio",
      "D": "Pallavolo – Pallacanestro – Nuoto"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Ciclismo – Nuoto – Canottaggio.",
    "category": "Metodologia"
  },
  {
    "id": 823,
    "question": "Quali metodi sono efficaci per lo sviluppo della forza rapida?",
    "options": {
      "A": "Sforzi di intensità medio-bassa, durata adeguata, pause brevi",
      "B": "Sforzi coscienti ad elevata intensità",
      "C": "Sovraccarichi",
      "D": "Training autogeno"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Sforzi coscienti ad elevata intensità.",
    "category": "Metodologia"
  },
  {
    "id": 824,
    "question": "Quali sfere sono investite dalla supercompensazione?",
    "options": {
      "A": "Biologica, vegetativa, coordinativa",
      "B": "Biologica, psicologica, pedagogica",
      "C": "Psicologica, vegetativa, coordinativa",
      "D": "Vegetativa, coordinativa, etimologica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Biologica, vegetativa, coordinativa.",
    "category": "Metodologia"
  },
  {
    "id": 825,
    "question": "Quali sono gli analizzatori coinvolti nel movimento?",
    "options": {
      "A": "Muscolare, scheletrico, articolare",
      "B": "Cardiocircolatorio e respiratorio",
      "C": "Cinestesico, stato dinamico, tattile, visivo, uditivo",
      "D": "Cinestesico e stato dinamico"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Cinestesico, stato dinamico, tattile, visivo, uditivo.",
    "category": "Metodologia"
  },
  {
    "id": 826,
    "question": "Quali sono gli analizzatori?",
    "options": {
      "A": "Acustico, ottico, corporale, cinestesico, interno",
      "B": "Acustico, ottico, tattile, vestibolare, cinestesico",
      "C": "Acustico, vestibolare, tattile, esterno, corporale",
      "D": "Statico, dinamico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Acustico, ottico, tattile, vestibolare, cinestesico.",
    "category": "Metodologia"
  },
  {
    "id": 827,
    "question": "Quali sono gli aspetti strutturali di una nuotata?",
    "options": {
      "A": "Continuità, ampiezza, ritmo",
      "B": "Forza, velocità, resistenza",
      "C": "Capacità coordinative generali e speciali",
      "D": "Condizione, coordinazione, controllo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Continuità, ampiezza, ritmo.",
    "category": "Metodologia"
  },
  {
    "id": 828,
    "question": "Quali sono gli strumenti per effettuare la selezione dei talenti?",
    "options": {
      "A": "Considerazioni del genitore",
      "B": "Gare sociali, istruttori e allenatori",
      "C": "Desideri personali",
      "D": "Consiglio dei compagni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gare sociali, istruttori e allenatori.",
    "category": "Metodologia"
  },
  {
    "id": 829,
    "question": "Quali sono i fattori della prestazione sportiva?",
    "options": {
      "A": "Forza – resistenza – velocità",
      "B": "Costituzione - condizione - coordinazione – controllo",
      "C": "Capacità condizionali e coordinative (generali e speciali)",
      "D": "Antropometria – motivazione – disponibilità"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Costituzione - condizione - coordinazione – controllo.",
    "category": "Metodologia"
  },
  {
    "id": 830,
    "question": "Quali sono i parametri del carico?",
    "options": {
      "A": "Volume, durata, densità, intensità e multilateralità",
      "B": "Durata, densità, intensità e multilateralità",
      "C": "Costituzione, condizione, coordinazione, controllo",
      "D": "Volume, durata, densità e intensità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Volume, durata, densità e intensità.",
    "category": "Metodologia"
  },
  {
    "id": 831,
    "question": "Quali sono i requisiti fondamentali delle nuotate elementari?",
    "options": {
      "A": "Movimenti fini",
      "B": "Ritmo e variazioni di velocità",
      "C": "Rapidità di spostamento",
      "D": "Continuità delle azioni ed ampiezza del gesto"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Continuità delle azioni ed ampiezza del gesto.",
    "category": "Metodologia"
  },
  {
    "id": 832,
    "question": "Quali sono le capacità condizionali?",
    "options": {
      "A": "Resistenza, forza, volume",
      "B": "Capacità motorie speciali",
      "C": "Forza, resistenza, intensità",
      "D": "Forza, resistenza, velocità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Forza, resistenza, velocità.",
    "category": "Metodologia"
  },
  {
    "id": 833,
    "question": "Quali sono le capacità coordinative generali?",
    "options": {
      "A": "Ambientamento motorio, apprendimento motorio, controllo motorio",
      "B": "Apprendimento motorio, controllo motorio, adattamento e trasformazione dei movimenti",
      "C": "Costituzione, condizione, coordinazione, controllo Apprendimento motorio generale, analitico motorio e segmentario"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Apprendimento motorio, controllo motorio, adattamento e trasformazione dei movimenti.",
    "category": "Metodologia"
  },
  {
    "id": 834,
    "question": "Quali sono le condizioni dell’analizzatore uditivo in acqua?",
    "options": {
      "A": "Riduzione delle capacità, impossibilità di controllare lo spazio d’azione",
      "B": "Aumento delle quantità di stimolazione",
      "C": "Invariate rispetto alla terraferma",
      "D": "Riduzione delle capacità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Riduzione delle capacità.",
    "category": "Metodologia"
  },
  {
    "id": 835,
    "question": "Quali sono le condizioni dell’analizzatore visivo in acqua?",
    "options": {
      "A": "Riduzione delle capacità, impossibilità di controllare lo spazio d’azione",
      "B": "Aumento delle quantità di stimolazione",
      "C": "Invariate rispetto alla terraferma",
      "D": "Riduzione delle capacità"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Riduzione delle capacità, impossibilità di controllare lo spazio d’azione.",
    "category": "Metodologia"
  },
  {
    "id": 836,
    "question": "Quali sono le condizioni più opportune per lo sviluppo delle capacità coordinative?",
    "options": {
      "A": "Eseguire fondamentali di uno sport in forma precisa",
      "B": "Insistere solo sullo sviluppo dell’equilibrio",
      "C": "Ripetere un movimento identico, numerose volte",
      "D": "Apprendimento di abilità motorie diverse"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Apprendimento di abilità motorie diverse.",
    "category": "Metodologia"
  },
  {
    "id": 837,
    "question": "Quali sono le evoluzioni fisiologiche che differenziano un allenamento di contenuto aerobico da un allenamento di sforzo più intenso?",
    "options": {
      "A": "Aumento della frequenza cardiaca e incremento dell’acido lattico",
      "B": "Maggior intervento delle fibre rosse",
      "C": "Aumento della frequenza cardiaca e nessun accumulo di acido lattico",
      "D": "Situazione di equilibrio tra produzione e smaltimento di acido lattico"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Aumento della frequenza cardiaca e incremento dell’acido lattico.",
    "category": "Metodologia"
  },
  {
    "id": 838,
    "question": "Quali sono le informazioni che raccogliamo dall’analizzatore cinestesico?",
    "options": {
      "A": "Pressione e calore",
      "B": "Onde sonore",
      "C": "Posizione di una parte del corpo rispetto ad un’altra e stato di tensione di un muscolo",
      "D": "Posizione della testa rispetto al centro di gravità"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Posizione di una parte del corpo rispetto ad un’altra e stato di tensione di un muscolo.",
    "category": "Metodologia"
  },
  {
    "id": 839,
    "question": "Quali sono le informazioni che raccogliamo dall’analizzatore statico-dinamico?",
    "options": {
      "A": "Onde sonore",
      "B": "Segnali luminosi",
      "C": "Posizione di una parte del corpo rispetto ad un’altra e stato di tensione di un muscolo",
      "D": "Posizione della testa rispetto al centro di gravità"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Posizione della testa rispetto al centro di gravità 84.",
    "category": "Metodologia"
  },
  {
    "id": 840,
    "question": "Quali sono le informazioni che raccogliamo dall’analizzatore tattile?",
    "options": {
      "A": "Onde sonore",
      "B": "Segnali luminosi",
      "C": "Pressione e calore",
      "D": "Posizione di una parte del corpo rispetto a un’altra e stato di tensione di un muscolo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Pressione e calore.",
    "category": "Metodologia"
  },
  {
    "id": 841,
    "question": "Quali sono le informazioni che raccogliamo dall’analizzatore uditivo?",
    "options": {
      "A": "Segnali luminosi",
      "B": "Pressione e calore",
      "C": "Onde sonore",
      "D": "Posizione della testa rispetto al centro di gravità"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Onde sonore.",
    "category": "Metodologia"
  },
  {
    "id": 842,
    "question": "Quali sono le informazioni che raccogliamo dall’analizzatore visivo?",
    "options": {
      "A": "Segnali luminosi",
      "B": "Onde sonore",
      "C": "Pressione e calore",
      "D": "Sapori e odori"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Segnali luminosi.",
    "category": "Metodologia"
  },
  {
    "id": 843,
    "question": "Quali sono le tappe dello sviluppo dello schema corporeo?",
    "options": {
      "A": "Infanzia, fanciullezza, giovinezza, età adulta",
      "B": "Corpo subìto, corpo vissuto, corpo percepito, corpo rappresentato",
      "C": "Corpo amato, corpo percepito, corpo rappresentato",
      "D": "Corpo bambino, corpo adolescente, corpo adulto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Corpo subìto, corpo vissuto, corpo percepito, corpo rappresentato.",
    "category": "Metodologia"
  },
  {
    "id": 844,
    "question": "Quali tra i seguenti errori relativi ai quattro stili vanno corretti per primi?",
    "options": {
      "A": "Errori di respirazione",
      "B": "Errori di traiettoria",
      "C": "Errori di ritmo",
      "D": "Errori di ampiezza"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Errori di respirazione.",
    "category": "Metodologia"
  },
  {
    "id": 845,
    "question": "Quali tra i seguenti sono schemi motori di base?",
    "options": {
      "A": "Flettere, circondurre, estendere",
      "B": "Rotolare, arrampicarsi, correre",
      "C": "Contrarre, distendere",
      "D": "Organizzare produrre, valutare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Rotolare, arrampicarsi, correre.",
    "category": "Metodologia"
  },
  {
    "id": 846,
    "question": "Quali tra le seguenti può essere considerata una capacità condizionale?",
    "options": {
      "A": "Il galleggiamento",
      "B": "Il ritmo della bracciata",
      "C": "La velocità di comprensione",
      "D": "La forza resistente"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La forza resistente.",
    "category": "Metodologia"
  },
  {
    "id": 847,
    "question": "Quali tra le seguenti, può essere considerata una capacità condizionale?",
    "options": {
      "A": "Il galleggiamento",
      "B": "La prossemica",
      "C": "La rapidità",
      "D": "La velocità di apprendimento"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La rapidità.",
    "category": "Metodologia"
  },
  {
    "id": 848,
    "question": "Quali tra questi è un criterio di selezione per l’attività preagonistica?",
    "options": {
      "A": "Conoscenza delle distanze di gara",
      "B": "Fattori psicologici e motivazionali",
      "C": "Rapporto tra massa grassa e massa magra",
      "D": "Senso tattico"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Fattori psicologici e motivazionali.",
    "category": "Metodologia"
  },
  {
    "id": 849,
    "question": "Quali tra questi è uno schema motorio acquatico?",
    "options": {
      "A": "Scivolamento supino",
      "B": "Corsa",
      "C": "Appoggio plantare",
      "D": "Salto a piedi uniti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Scivolamento supino.",
    "category": "Metodologia"
  },
  {
    "id": 850,
    "question": "Quali tra questi sono schemi motori di base?",
    "options": {
      "A": "Rotolare, arrampicarsi, correre",
      "B": "Flettere, circondurre, estendere",
      "C": "Organizzare, produrre, valutare",
      "D": "Fare, far fare, essere"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Rotolare, arrampicarsi, correre.",
    "category": "Metodologia"
  },
  {
    "id": 851,
    "question": "Quando abbiamo la certezza che un errore sia stato corretto?",
    "options": {
      "A": "Quando l’allievo esegue il corretto movimento a secco",
      "B": "Quando guidiamo il movimento dell’allievo in acqua",
      "C": "Quando il movimento corretto diventa un gesto volontario da parte dell’allievo",
      "D": "Mai"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Quando il movimento corretto diventa un gesto volontario da parte dell’allievo.",
    "category": "Metodologia"
  },
  {
    "id": 852,
    "question": "Quando è consigliabile far eseguire esercizi di coordinazione?",
    "options": {
      "A": "Sin dalla prima lezione in vasca alta",
      "B": "Quando le forme globali delle nuotate sono state ben apprese ed automatizzate",
      "C": "Non appena gli allievi hanno acquisito le prime forme di propulsione",
      "D": "Sempre"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Quando le forme globali delle nuotate sono state ben apprese ed automatizzate.",
    "category": "Metodologia"
  },
  {
    "id": 853,
    "question": "Quando vengono inseriti due colpi di gambe a farfalla all’interno di un ciclo di bracciata?",
    "options": {
      "A": "Uno alla fine della fase di recupero quando le mani entrano in acqua e uno subito dopo lo scivolamento in fase di presa",
      "B": "Uno alla fine della fase di recupero quando le mani entrano in acqua e uno nella fase di spinta",
      "C": "Uno durante la fase di trazione e uno alla fine della fase di presa",
      "D": "Uno dopo la fase di presa e uno dopo la fase di recupero quando le mani entrano in acqua"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Uno durante la fase di trazione e uno alla fine della fase di presa.",
    "category": "Metodologia"
  },
  {
    "id": 854,
    "question": "Quella di adattamento e trasformazione è:",
    "options": {
      "A": "Un’attitudine individuale",
      "B": "Una capacità condizionale non sempre allenabile",
      "C": "Una capacità coordinativa speciale",
      "D": "Una capacità coordinativa generale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Una capacità coordinativa speciale.",
    "category": "Metodologia"
  },
  {
    "id": 855,
    "question": "Sotto il profilo dell’organizzazione motoria, il principio cefalo-caudale insegna che lo sviluppo avviene rispettando quale subordinazione?",
    "options": {
      "A": "Gambe - busto - braccia - testa",
      "B": "Testa - busto - braccia - gambe",
      "C": "Busto - gambe - braccia – testa",
      "D": "Braccia – gambe – testa - busto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Testa - busto - braccia - gambe.",
    "category": "Metodologia"
  },
  {
    "id": 856,
    "question": "Strisciare è:",
    "options": {
      "A": "Uno schema motorio di base",
      "B": "Una tecnica appresa",
      "C": "Un’abilità motoria di secondo grado",
      "D": "Uno schema motorio evoluto"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Uno schema motorio evoluto.",
    "category": "Metodologia"
  },
  {
    "id": 857,
    "question": "Su quale base si effettua la scelta degli atleti?",
    "options": {
      "A": "Capacità di apprendimento rapido",
      "B": "Fattori sociali",
      "C": "Fattori relazioni",
      "D": "Capacità di ambientamento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Capacità di apprendimento rapido.",
    "category": "Metodologia"
  },
  {
    "id": 858,
    "question": "Tra gli esercizi di specializzazione a dorso a cosa serve la doppia bracciata?",
    "options": {
      "A": "A tenere la testa ferma",
      "B": "A enfatizzare il rollio e a velocizzare il recupero",
      "C": "A migliorare la coordinazione con le gambe",
      "D": "Insegna la posizione del gomito alto e a enfatizzare la presa"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Insegna la posizione del gomito alto e a enfatizzare la presa.",
    "category": "Metodologia"
  },
  {
    "id": 859,
    "question": "Tra gli esercizi di specializzazione della farfalla a cosa serve utilizzo della gambata a stile libero?",
    "options": {
      "A": "A sviluppare i muscoli del grande tronco",
      "B": "A enfatizzare il rollio e a velocizzare il recupero",
      "C": "A migliorare la coordinazione tra le braccia e la testa",
      "D": "A ridurre le ondulazioni e a stimolare una bracciata senza pause"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. A ridurre le ondulazioni e a stimolare una bracciata senza pause.",
    "category": "Metodologia"
  },
  {
    "id": 860,
    "question": "Tra i fattori della prestazione troviamo il controllo; cos’è?",
    "options": {
      "A": "La capacità di controllare e monitorare il proprio corpo e l’ambiente circostante",
      "B": "Uno schema motorio di base",
      "C": "L’insieme dei processi emotivi, cognitivi e motivazionali",
      "D": "L’insieme dei processi emotivi e cognitivi"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. L’insieme dei processi emotivi, cognitivi e motivazionali.",
    "category": "Metodologia"
  },
  {
    "id": 861,
    "question": "Tra i parametri del carico fisico, cos’è la densità?",
    "options": {
      "A": "La quantità di sforzo che un organismo produce nell’eseguire un esercizio",
      "B": "Il comportamento temporale del tempo di stimolo e di riposo in una unità di allenamento",
      "C": "Il livello dell’impegno richiesto al soggetto rispetto alle sue capacità massimali",
      "D": "Un parametro che indica il comportamento evolutivo della frequenza di un particolare sforzo con il relativo adattamento"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il comportamento temporale del tempo di stimolo e di riposo in una unità di allenamento.",
    "category": "Metodologia"
  },
  {
    "id": 862,
    "question": "Tra quelle elencate quali sono le condizioni che favoriscono lo sviluppo delle capacità coordinative?",
    "options": {
      "A": "Che siano eseguite tecniche precise, scelte tra i fondamentali del nuoto",
      "B": "Che gli esercizi proposti diventino immediatamente più difficili e più complicati",
      "C": "Che venga utilizzato un allenamento ricco di stimoli motori",
      "D": "Che ogni esercizio venga ripetuto, identico, numerose volte"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Che venga utilizzato un allenamento ricco di stimoli motori.",
    "category": "Metodologia"
  },
  {
    "id": 863,
    "question": "Un esercizio è non strutturato quando:",
    "options": {
      "A": "Si definiscono tutti i dettagli dell’esecuzione",
      "B": "Si definiscono alcuni aspetti dell’esecuzione e altri sono lasciati alla scelta dell’allievo",
      "C": "Non prevede la fase di recupero",
      "D": "Non si richiede nessuna esecuzione ma si agisce sul contesto per stimolare l’azione dell’allievo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Non si richiede nessuna esecuzione ma si agisce sul contesto per stimolare l’azione dell’allievo.",
    "category": "Metodologia"
  },
  {
    "id": 864,
    "question": "Un esercizio è semi-strutturato quando:",
    "options": {
      "A": "Si definiscono tutti i dettagli dell’esecuzione",
      "B": "Prevede la fase di recupero",
      "C": "Si definiscono alcuni aspetti dell’esecuzione e altri sono lasciati alla scelta dell’allievo",
      "D": "Non si richiede nessuna esecuzione ma si agisce sul contesto per stimolare l’azione dell’allievo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Si definiscono alcuni aspetti dell’esecuzione e altri sono lasciati alla scelta dell’allievo.",
    "category": "Metodologia"
  },
  {
    "id": 865,
    "question": "Un esercizio è strutturato quando:",
    "options": {
      "A": "Si definiscono tutti i dettagli dell’esecuzione",
      "B": "Prevede la fase di recupero",
      "C": "Si definiscono alcuni aspetti dell’esecuzione e altri sono lasciati alla scelta dell’allievo",
      "D": "Non si richiede nessuna esecuzione ma si agisce sul contesto per stimolare l’azione dell’allievo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Si definiscono tutti i dettagli dell’esecuzione.",
    "category": "Metodologia"
  },
  {
    "id": 866,
    "question": "Un modello di movimento ben consolidato nella mente, facilmente riproducibile, è detto:",
    "options": {
      "A": "Schema complesso",
      "B": "Schema corporeo",
      "C": "Schema tattico",
      "D": "Schema motorio"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Schema motorio.",
    "category": "Metodologia"
  },
  {
    "id": 867,
    "question": "Un’elevata mobilità articolare comporta:",
    "options": {
      "A": "Delle difficoltà nella fase di recupero aereo",
      "B": "Una migliore sensibilità in acqua",
      "C": "Una nuotata più fluida ed economica",
      "D": "Nessun vantaggio o svantaggio particolare"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Una nuotata più fluida ed economica.",
    "category": "Metodologia"
  },
  {
    "id": 868,
    "question": "A che fascia di età corrisponde la seconda infanzia?",
    "options": {
      "A": "Oltre i 12 anni",
      "B": "Da 5 a 18 mesi",
      "C": "Da 7 a 12 anni",
      "D": "Da 2 a 6 anni"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Da 2 a 6 anni.",
    "category": "Psicopedagogia"
  },
  {
    "id": 869,
    "question": "A quali delle seguenti parole è collegabile la comunicazione non verbale?",
    "options": {
      "A": "Il gioco",
      "B": "La prossemica",
      "C": "L’ansia da prestazione",
      "D": "La leadership"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La prossemica.",
    "category": "Psicopedagogia"
  },
  {
    "id": 870,
    "question": "Caratteristiche di un bambino da 0 a 3 anni",
    "options": {
      "A": "Motricità volontaria",
      "B": "Motricità involontaria",
      "C": "Strutturazione percettiva e coscienza del proprio corpo",
      "D": "Immagine sintetica del corpo, rappresentazione decentrata, rappresentazione mentale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Strutturazione percettiva e coscienza del proprio corpo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 871,
    "question": "Caratteristiche di un bambino da 3 a 7 anni",
    "options": {
      "A": "Motricità volontaria",
      "B": "Motricità involontaria",
      "C": "Strutturazione percettiva e coscienza del proprio corpo",
      "D": "Immagine sintetica del corpo, rappresentazione decentrata, rappresentazione mentale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Motricità volontaria.",
    "category": "Psicopedagogia"
  },
  {
    "id": 872,
    "question": "Caratteristiche di un bambino da 7 a 12 anni",
    "options": {
      "A": "Motricità volontaria",
      "B": "Motricità involontaria",
      "C": "Strutturazione percettiva e coscienza del proprio corpo",
      "D": "Immagine sintetica del corpo, rappresentazione decentrata, rappresentazione mentale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Immagine sintetica del corpo, rappresentazione decentrata, rappresentazione mentale.",
    "category": "Psicopedagogia"
  },
  {
    "id": 873,
    "question": "Che cosa si deve intendere per frustrazione?",
    "options": {
      "A": "Un tratto caratteristico della personalità degli adolescenti",
      "B": "La percezione dell’impedimento a soddisfare bisogni e aspirazioni",
      "C": "Il desiderio di soffrire",
      "D": "L’autolesionismo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La percezione dell’impedimento a soddisfare bisogni e aspirazioni.",
    "category": "Psicopedagogia"
  },
  {
    "id": 874,
    "question": "Come minimizzare i fallimenti?",
    "options": {
      "A": "Valutare il risultato, non l’autore",
      "B": "Consolare direttamente l’allievo",
      "C": "Riprendere immediatamente il lavoro dopo la crisi",
      "D": "Ridurre al minimo le fasi di gioco"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Valutare il risultato, non l’autore.",
    "category": "Psicopedagogia"
  },
  {
    "id": 875,
    "question": "Comunicare significa:",
    "options": {
      "A": "Saper parlare bene",
      "B": "Mimare",
      "C": "Comprendere",
      "D": "Mettere in comune"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Mettere in comune.",
    "category": "Psicopedagogia"
  },
  {
    "id": 876,
    "question": "Cos’è il messaggio di contenuto?",
    "options": {
      "A": "Ciò che l’emittente intende trasmettere rappresentato dal significato del codice utilizzato",
      "B": "tutte quelle informazioni che arrivano al destinatario circa l’andamento della relazione tra i due comunicandi, espressi dal linguaggio del corpo",
      "C": "ciò che l’emissario comprende del contenuto espresso dal codice",
      "D": "Una figura retorica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Ciò che l’emittente intende trasmettere rappresentato dal significato del codice utilizzato.",
    "category": "Psicopedagogia"
  },
  {
    "id": 877,
    "question": "Cos’è il messaggio di relazione?",
    "options": {
      "A": "Ciò che l’emittente intende trasmettere rappresentato dal significato del codice utilizzato",
      "B": "Una figura retorica",
      "C": "Tutte quelle informazioni che arrivano al destinatario circa l’andamento della relazione tra i due comunicandi, espressi dal linguaggio del corpo",
      "D": "Ciò che l’emissario comprende del contenuto espresso dal codice"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Tutte quelle informazioni che arrivano al destinatario circa l’andamento della relazione tra i due comunicandi, espressi dal linguaggio del corpo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 878,
    "question": "Cos’è l’autostima?",
    "options": {
      "A": "Una valutazione personale",
      "B": "L’incoraggiamento dell’istruttore",
      "C": "La considerazione che un individuo ha di sé stesso",
      "D": "L’uso della lode come rinforzo positivo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La considerazione che un individuo ha di sé stesso.",
    "category": "Psicopedagogia"
  },
  {
    "id": 879,
    "question": "Cos’è un feedback?",
    "options": {
      "A": "Un’informazione di ritorno",
      "B": "Un processo di controllo motorio",
      "C": "Un metodo di comunicazione",
      "D": "Un supporto didattico"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un’informazione di ritorno.",
    "category": "Psicopedagogia"
  },
  {
    "id": 880,
    "question": "Cosa s’intende per autostima?",
    "options": {
      "A": "Il processo soggettivo e duraturo che porta il soggetto a apprezzare se stesso tramite la decisione di valorizzare se stesso",
      "B": "Il livello di soddisfazione percepito",
      "C": "Il processo soggettivo e duraturo che porta il soggetto a valutare e apprezzare se stesso tramite l’auto approvazione del proprio valore personale, fondato su quello che uno vede di sé",
      "D": "Il processo soggettivo che porta un soggetto alla miglior prestazione possibile nella gara obiettivo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Il processo soggettivo e duraturo che porta il soggetto a valutare e apprezzare se stesso tramite l’auto approvazione del proprio valore personale, fondato su quello che uno vede di sé.",
    "category": "Psicopedagogia"
  },
  {
    "id": 881,
    "question": "Cosa s’intende per linguaggio del corpo?",
    "options": {
      "A": "Postura, gesti, movimenti, espressioni e mimica che contraddicono la comunicazione verbale",
      "B": "Postura, gesti, movimenti, espressioni e mimica che accompagnano la parola e rendendo la comunicazione più comunicativa esprimendo il messaggio di relazione",
      "C": "Postura, gesti, movimenti, espressioni e mimica che accompagnano la parola e rendendo la comunicazione incomprensibile",
      "D": "L’insieme delle capacità coordinative e condizionali"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Postura, gesti, movimenti, espressioni e mimica che accompagnano la parola e rendendo la comunicazione più comunicativa esprimendo il messaggio di relazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 882,
    "question": "Cosa s’intende per linguaggio?",
    "options": {
      "A": "La lingua che si usa nella comunicazione",
      "B": "Il sistema di segni articolato da una grammatica e una sintassi che consente la comunicazione",
      "C": "Il sistema di segni con cui si rende più efficiente una comunicazione",
      "D": "L’inflessione linguistica"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il sistema di segni articolato da una grammatica e una sintassi che consente la comunicazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 883,
    "question": "Cosa significa comportamento modulare dell’istruttore?",
    "options": {
      "A": "Comportarsi in base alle varie esigenze, considerando il ruolo di educatore",
      "B": "Essere autoritari",
      "C": "Essere permissivi",
      "D": "Essere indifferenti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Comportarsi in base alle varie esigenze, considerando il ruolo di educatore.",
    "category": "Psicopedagogia"
  },
  {
    "id": 884,
    "question": "Da cosa è caratterizzato il processo di sviluppo?",
    "options": {
      "A": "Dalla successione di fasi di accelerazione/decelerazione",
      "B": "Dalla presenza di sole fasi di accelerazione seguite da ristrutturazione cognitiva, motoria, affettiva",
      "C": "Dall’alternanza di fasi di accelerazione/decelerazione e crisi",
      "D": "Dall’assenza di variabilità individuale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Dall’alternanza di fasi di accelerazione/decelerazione e crisi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 885,
    "question": "Da cosa origina il concetto di unità psicofisica?",
    "options": {
      "A": "Emerge dalla constatazione che il corpo è un oggetto a stretto contatto con la psiche",
      "B": "Emerge dalla constatazione che il corpo umano non è mai corpo in senso oggettivo e la psiche non ha alcun senso se non si fonda e si costituisce attraverso e insieme al corpo",
      "C": "Emerge dalla constatazione che la psiche è l’elemento che differenzia e determina ogni essere umano",
      "D": "Dagli studi di Meinel"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Emerge dalla constatazione che il corpo umano non è mai corpo in senso oggettivo e la psiche non ha alcun senso se non si fonda e si costituisce attraverso e insieme al corpo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 886,
    "question": "Definizione di canale:",
    "options": {
      "A": "Il contenuto della comunicazione",
      "B": "Il sistema di segni usato per comunicare",
      "C": "La scelta del registro da utilizzare",
      "D": "Il mezzo fisico attraversato dalla comunicazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Il mezzo fisico attraversato dalla comunicazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 887,
    "question": "Definizione di codice:",
    "options": {
      "A": "La fonte del messaggio. Nel caso di comunicazione umana è il soggetto che intende comunicare",
      "B": "Il sistema di segni usato per comunicare",
      "C": "Il mezzo fisico attraversato dalla comunicazione",
      "D": "Raccolta di abbreviazioni utili per comunicare sinteticamente"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Il sistema di segni usato per comunicare.",
    "category": "Psicopedagogia"
  },
  {
    "id": 888,
    "question": "Definizione di contesto:",
    "options": {
      "A": "La fonte del messaggio",
      "B": "Codice di riferimento",
      "C": "Il sistema di segni usato per comunicare",
      "D": "La situazione che rende comprensibile una comunicazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La situazione che rende comprensibile una comunicazione 89.",
    "category": "Psicopedagogia"
  },
  {
    "id": 889,
    "question": "Definizione di destinatario:",
    "options": {
      "A": "Il contenuto della comunicazione",
      "B": "Beneficiario della comunicazione",
      "C": "Colui al quale è indirizzato il messaggio",
      "D": "Il sistema di segni usato per comunicare"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Colui al quale è indirizzato il messaggio.",
    "category": "Psicopedagogia"
  },
  {
    "id": 890,
    "question": "Definizione di emittente:",
    "options": {
      "A": "La fonte del messaggio",
      "B": "Colui al quale è indirizzato il messaggio",
      "C": "Il contenuto della comunicazione",
      "D": "Il sistema di segni usato per comunicare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La fonte del messaggio.",
    "category": "Psicopedagogia"
  },
  {
    "id": 891,
    "question": "Definizione di messaggio:",
    "options": {
      "A": "Il contenuto della comunicazione",
      "B": "Il sistema di segni usato per comunicare",
      "C": "Registro",
      "D": "La situazione che rende comprensibile una comunicazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il contenuto della comunicazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 892,
    "question": "È una forma di apprendimento fondamentale:",
    "options": {
      "A": "Apprendimento per imitazione",
      "B": "Apprendimento per deduzione",
      "C": "Apprendimento per interpretazione",
      "D": "Apprendimento per costrizione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Apprendimento per imitazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 893,
    "question": "Elementi fondamentali per la strutturazione di un adeguato metodo di lavoro sono:",
    "options": {
      "A": "Atteggiamento ipercritico da parte dell’insegnante",
      "B": "Ricerca di assoluta precisione nell’apprendimento del particolare specifico",
      "C": "Casualità degli interventi didattici",
      "D": "Globalità dell’apprendimento, clima affettivo/ relazionale positivo, gestione del gruppo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Globalità dell’apprendimento, clima affettivo/ relazionale positivo, gestione del gruppo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 894,
    "question": "Il bambino, per adattarsi alle varie situazioni del mondo esterno, deve avere:",
    "options": {
      "A": "Un ambiente che lo stimoli",
      "B": "Una mente olistica",
      "C": "Coscienza e conoscenza del proprio corpo",
      "D": "Dei bravi genitori"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Coscienza e conoscenza del proprio corpo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 895,
    "question": "Il concetto di apprendimento è strettamente collegato al concetto di:",
    "options": {
      "A": "Motivazione",
      "B": "Memorizzazione",
      "C": "Intelligenza",
      "D": "Comprendonio"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Motivazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 896,
    "question": "Il concetto di sé è:",
    "options": {
      "A": "La valutazione che si ha circa le svariate informazioni che riguardano il sé",
      "B": "L’insieme di tutti gli elementi a cui una persona fa riferimento per descrivere sé stessa",
      "C": "Il complesso di tutte le valutazioni che una persona ha ricevuto sul proprio conto",
      "D": "Una capacità coordinativa speciale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’insieme di tutti gli elementi a cui una persona fa riferimento per descrivere sé stessa.",
    "category": "Psicopedagogia"
  },
  {
    "id": 897,
    "question": "Il linguaggio del corpo, i paralinguaggi fanno parte della:",
    "options": {
      "A": "Comunicazione verbale",
      "B": "Dinamica comunicativa",
      "C": "Prossemica",
      "D": "Comunicazione non verbale"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Comunicazione non verbale.",
    "category": "Psicopedagogia"
  },
  {
    "id": 898,
    "question": "Il messaggio è:",
    "options": {
      "A": "Il contenuto della comunicazione",
      "B": "Un sistema di simboli",
      "C": "Colui che avvia la comunicazione",
      "D": "Colui che riceve la comunicazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il contenuto della comunicazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 899,
    "question": "Il paralinguaggio mostra:",
    "options": {
      "A": "Il ceto sociale",
      "B": "Gli stati emotivi o affettivi",
      "C": "L’espressività della persona",
      "D": "Il grado di sviluppo coordinativo"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gli stati emotivi o affettivi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 900,
    "question": "Il paralinguaggio:",
    "options": {
      "A": "Non cambia il significato verbale di una frase",
      "B": "In taluni soggetti non è presente",
      "C": "Accompagna l’espressione verbale",
      "D": "Non dipende da stati emotivi o affettivi"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Accompagna l’espressione verbale.",
    "category": "Psicopedagogia"
  },
  {
    "id": 901,
    "question": "Il percorso didattico e le modalità relazionali devono essere:",
    "options": {
      "A": "Oggetto di contrattazione fra istruttore e allievi",
      "B": "Elementi della comunicazione",
      "C": "Determinati e gestiti dall’istruttore",
      "D": "Affidati al caso"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Determinati e gestiti dall’istruttore.",
    "category": "Psicopedagogia"
  },
  {
    "id": 902,
    "question": "Il principio guida dell’insegnamento è la convinzione che:",
    "options": {
      "A": "Nessun allievo può realmente imparare",
      "B": "Ciascun allievo deve fare da sé",
      "C": "Non esistono convinzioni",
      "D": "Tutti gli allievi possono imparare"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Tutti gli allievi possono imparare.",
    "category": "Psicopedagogia"
  },
  {
    "id": 903,
    "question": "Il raggiungimento di un obiettivo è legato al concetto di:",
    "options": {
      "A": "Ambientamento",
      "B": "Gareggiare",
      "C": "Costituzione",
      "D": "Motivazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Motivazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 904,
    "question": "Il ruolo all’interno di un’organizzazione è:",
    "options": {
      "A": "Il risultato delle attitudini e della loro applicazione, unite alla volontà di comportarsi in un dato modo e all’interesse per le conseguenze delle azioni che compie",
      "B": "La tipologia contrattuale applicata",
      "C": "L’assunzione di responsabilità personale richiesta da una certa mansione e dai suoi obiettivi",
      "D": "L’insieme organico dei compiti assegnati"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. L’assunzione di responsabilità personale richiesta da una certa mansione e dai suoi obiettivi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 905,
    "question": "Il ruolo dell’istruttore è:",
    "options": {
      "A": "Insegnare con scrupolo il gesto tecnico",
      "B": "Essere una figura di riferimento in vasca per i propri allievi",
      "C": "Assistere alla sicurezza dei nuotatori",
      "D": "Riflettere sul tutto"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Essere una figura di riferimento in vasca per i propri allievi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 906,
    "question": "Il tempo di apprendimento è dovuto a:",
    "options": {
      "A": "Capacità personali",
      "B": "Capacità personali, desiderio di imparare, tempo di applicazione",
      "C": "Bravura del maestro",
      "D": "Durata della singola lezione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Capacità personali, desiderio di imparare, tempo di applicazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 907,
    "question": "In quale fase dello sviluppo si ha difficoltà a percepire correttamente il proprio corpo?",
    "options": {
      "A": "Seconda infanzia",
      "B": "Fanciullezza",
      "C": "Preadolescenza e adolescenza",
      "D": "Maturità"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Preadolescenza e adolescenza.",
    "category": "Psicopedagogia"
  },
  {
    "id": 908,
    "question": "In tema di apprendimento, quale di queste affermazioni è appropriata?",
    "options": {
      "A": "L’apprendimento dipende dalle capacità cognitive del soggetto",
      "B": "Non esiste atto cognitivo che prescinda o che non sia preceduto da una componente emotiva",
      "C": "L’apprendimento dipende sicuramente da molti fattori,ma soprattutto dalla capacità dell’istruttore di gestire la disciplina all’interno del gruppo",
      "D": "L’apprendimento non è quantificabile"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Non esiste atto cognitivo che prescinda o che non sia preceduto da una componente emotiva.",
    "category": "Psicopedagogia"
  },
  {
    "id": 909,
    "question": "In un messaggio inviato, l’aspetto non verbale della comunicazione incide per:",
    "options": {
      "A": "Circa il 10%",
      "B": "Circa il 30%",
      "C": "Circa il 50%",
      "D": "Circa il 90%"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Circa il 90%.",
    "category": "Psicopedagogia"
  },
  {
    "id": 910,
    "question": "Indica quali effetti l’attività sportiva produce sulla personalità:",
    "options": {
      "A": "Miglioramento dell’autostima e minore autonomia",
      "B": "Miglioramento dell’autostima e maggiore autonomia",
      "C": "Senso di superiorità e narcisismo",
      "D": "Tendenza alla competitività"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Miglioramento dell’autostima e maggiore autonomia.",
    "category": "Psicopedagogia"
  },
  {
    "id": 911,
    "question": "L’apprendimento è facilitato:",
    "options": {
      "A": "Dalla qualità della comunicazione tra allievo e istruttore",
      "B": "Dalla motivazione",
      "C": "Dalla famiglia",
      "D": "Dalla genetica"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dalla motivazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 912,
    "question": "L’apprendimento è fortemente influenzato:",
    "options": {
      "A": "Dall’ambiente della piscina",
      "B": "Dalla motivazione",
      "C": "Dall’età",
      "D": "Dal sesso"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dalla motivazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 913,
    "question": "L’apprendimento è:",
    "options": {
      "A": "L’attuazione consapevole di un principio didattico",
      "B": "L’applicazione sistematica di un automatismo",
      "C": "La consapevolezza dell’io corporeo",
      "D": "L’applicazione di un esercizio dimostrato dall’istruttore"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’attuazione consapevole di un principio didattico.",
    "category": "Psicopedagogia"
  },
  {
    "id": 914,
    "question": "L’apprendimento può essere definito come:",
    "options": {
      "A": "Un cambiamento di comportamento",
      "B": "Un’acquisizione di conoscenze",
      "C": "Una realtà oggettiva esterna",
      "D": "L’insieme delle condizioni ambientali"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un cambiamento di comportamento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 915,
    "question": "L’apprendimento si realizza attraverso:",
    "options": {
      "A": "Casualità e causalità",
      "B": "Scoperta – conoscenza – consolidamento",
      "C": "Conoscenza – scoperta – esecuzione",
      "D": "Comunicazione – motivazione – esecuzione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Scoperta – conoscenza – consolidamento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 916,
    "question": "L’area affettivo-emotiva della personalità:",
    "options": {
      "A": "Riguarda l’insieme dei rapporti che si creano tra l’individuo e le persone che vivono con lui",
      "B": "Riguarda il rapporto con i genitori",
      "C": "Riguarda il senso di appartenenza e di coesione, lo spirito di emulazione e il rispetto degli altri.",
      "D": "Riguarda la capacità di ricevere informazioni dall’esterno del proprio corpo ed elaborare delle risposte sotto forma di movimento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Riguarda l’insieme dei rapporti che si creano tra l’individuo e le persone che vivono con lui.",
    "category": "Psicopedagogia"
  },
  {
    "id": 917,
    "question": "L’aspetto realizzativo è legato al concetto di",
    "options": {
      "A": "Motivazione",
      "B": "Competizione",
      "C": "Interdizione",
      "D": "Sicurezza in acqua"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Motivazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 918,
    "question": "L’azione educativa del nuoto si concretizza attraverso:",
    "options": {
      "A": "L’insegnamento dell’istruttore",
      "B": "L’educazione al nuoto e l’educazione attraverso il nuoto",
      "C": "Il rispetto delle regole",
      "D": "L’apprendimento degli stili"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. L’educazione al nuoto e l’educazione attraverso il nuoto.",
    "category": "Psicopedagogia"
  },
  {
    "id": 919,
    "question": "L’empatia:",
    "options": {
      "A": "Agevola la comunicazione",
      "B": "Non influisce sulla comunicazione",
      "C": "Rallenta la comunicazione",
      "D": "È una capacità coordinativa speciale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Agevola la comunicazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 920,
    "question": "L’intelligenza preconcettuale si sviluppa:",
    "options": {
      "A": "Dai 18 mesi ai 7 anni",
      "B": "Verso i 7 anni",
      "C": "Dopo i 7 anni",
      "D": "Appena nati"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Dai 18 mesi ai 7 anni.",
    "category": "Psicopedagogia"
  },
  {
    "id": 921,
    "question": "L’intelligenza sensomotoria si sviluppa:",
    "options": {
      "A": "Appena nati",
      "B": "Durante i primi 18 mesi di vita",
      "C": "Dopo i 18 mesi di vita",
      "D": "In corrispondenza della pubertà"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Durante i primi 18 mesi di vita.",
    "category": "Psicopedagogia"
  },
  {
    "id": 922,
    "question": "L’istruttore assume un atteggiamento direttivo:",
    "options": {
      "A": "Quando si pone in posizione di diversità rispetto al gruppo e ne assume la conduzione",
      "B": "Quando applica una logica sfumata (fuzzy)",
      "C": "Quando si pone in condizione di vicinanza con il gruppo ma ne assume la leadership",
      "D": "Quando si pone in condizione di parità e interagisce con il gruppo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Quando si pone in posizione di diversità rispetto al gruppo e ne assume la conduzione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 923,
    "question": "L’istruttore assume un atteggiamento non direttivo:",
    "options": {
      "A": "Quando si pone in posizione di diversità rispetto al gruppo e ne assume la conduzione",
      "B": "Quando applica una logica sfumata (fuzzy)",
      "C": "Quando si pone in condizione di vicinanza con il gruppo ma ne assume la leadership",
      "D": "Quando si pone in condizione di parità e interagisce con il gruppo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Quando si pone in condizione di parità e interagisce con il gruppo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 924,
    "question": "L’Istruttore nel rapporto con l’allievo:",
    "options": {
      "A": "Deve sapere, saper fare e saper far fare",
      "B": "Deve umiliarlo",
      "C": "Deve proporre esercizi adeguati",
      "D": "Deve curare la tecnica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Deve sapere, saper fare e saper far fare.",
    "category": "Psicopedagogia"
  },
  {
    "id": 925,
    "question": "L’istruttore:",
    "options": {
      "A": "È il leader del gruppo",
      "B": "Utilizza la leadership per orientare il gruppo verso un obiettivo",
      "C": "È parte integrante del gruppo",
      "D": "Deve prestare attenzione ai soli aspetti tecnici"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Utilizza la leadership per orientare il gruppo verso un obiettivo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 926,
    "question": "L’obiettivo della programmazione di un percorso didattico deve essere:",
    "options": {
      "A": "Irraggiungibile ed indipendente dal livello di partenza dell’allievo",
      "B": "Raggiungibile per il tecnico ed indipendente dal livello di partenza dell’allievo",
      "C": "Ecologico per l’allievo e formulato in termini sensorialmente basati",
      "D": "Ecologico per l’allievo e formulato in negativo"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Ecologico per l’allievo e formulato in termini sensorialmente basati.",
    "category": "Psicopedagogia"
  },
  {
    "id": 927,
    "question": "La comunicazione a due vie è caratterizzata da:",
    "options": {
      "A": "Presenza di emittente, messaggio, ricevente e feed-back verbale o non verbale",
      "B": "Possibilità di confronto verbale tra trasmittente e ricevente",
      "C": "Utilizzo di strumenti ricetrasmittenti",
      "D": "Verbosità e non verbosità"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Presenza di emittente, messaggio, ricevente e feed-back verbale o non verbale.",
    "category": "Psicopedagogia"
  },
  {
    "id": 928,
    "question": "La comunicazione è:",
    "options": {
      "A": "Il passaggio di informazioni verbali tra due soggetti",
      "B": "La capacità di esprimere i propri pensieri",
      "C": "Un processo monocanale",
      "D": "Un processo attivo di elaborazione di informazioni, di codifiche e di decodifiche"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un processo attivo di elaborazione di informazioni, di codifiche e di decodifiche.",
    "category": "Psicopedagogia"
  },
  {
    "id": 929,
    "question": "La comunicazione è:",
    "options": {
      "A": "Verbale e non verbale",
      "B": "Digitale e analogica",
      "C": "Corporea",
      "D": "Prossimale o distale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Verbale e non verbale.",
    "category": "Psicopedagogia"
  },
  {
    "id": 930,
    "question": "La comunicazione si divide in:",
    "options": {
      "A": "Verbale e non verbale",
      "B": "Digitale e analogica",
      "C": "Corporea e visiva",
      "D": "Tattile e olfattiva"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Verbale e non verbale.",
    "category": "Psicopedagogia"
  },
  {
    "id": 931,
    "question": "La comunicazione verbale è:",
    "options": {
      "A": "La capacità di saper informare nel modo più semplice l’allievo",
      "B": "La capacità di esprimere correttamente e adeguatamente il proprio pensiero attraverso il linguaggio",
      "C": "La capacità di gestire e comandare il proprio corpo",
      "D": "Una capacità coordinativa speciale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. La capacità di esprimere correttamente e adeguatamente il proprio pensiero attraverso il linguaggio.",
    "category": "Psicopedagogia"
  },
  {
    "id": 932,
    "question": "La fanciullezza va:",
    "options": {
      "A": "Oltre i 14 anni",
      "B": "Dagli 11 ai 14 anni",
      "C": "Dai 3 ai 6 anni",
      "D": "Dai 6 agli 11 anni"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dai 6 agli 11 anni 93.",
    "category": "Psicopedagogia"
  },
  {
    "id": 933,
    "question": "La figura del leader all’interno del gruppo di lavoro è:",
    "options": {
      "A": "Una figura scomoda, che mette i bastoni tra le ruote a tutto quello che cerchiamo di fare durante l’insegnamento, va combattuta e indebolita",
      "B": "Colui che esprime una personalità carismatica in grado di soddisfare le esigenze di tutti i membri del gruppo",
      "C": "Un modello di vita",
      "D": "Una figura carismatica, in genere il più dotato dal punto di vista prestazionale, pertanto sarà il soggetto del nostro interesse previlegiato"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Colui che esprime una personalità carismatica in grado di soddisfare le esigenze di tutti i membri del gruppo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 934,
    "question": "La forma d’insegnamento più efficace è:",
    "options": {
      "A": "Stimolare l’allievo a riprodurre fedelmente la tecnica di nuotata del suo istruttore",
      "B": "Far ripetere all’allievo, fino alla meccanizzazione, il movimento in acqua",
      "C": "Correggere gli errori del movimento appena si manifestano",
      "D": "Stimolare l’allievo ad una riflessione cosciente e continua sul proprio movimento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Stimolare l’allievo ad una riflessione cosciente e continua sul proprio movimento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 935,
    "question": "La motivazione è:",
    "options": {
      "A": "Il bisogno di muoversi e fare sport",
      "B": "Ciò che spinge un individuo ad imparare a nuotare",
      "C": "L’insieme dei fattori che avviano e indirizzano le azioni di un soggetto",
      "D": "Necessaria per i bambini"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. L’insieme dei fattori che avviano e indirizzano le azioni di un soggetto.",
    "category": "Psicopedagogia"
  },
  {
    "id": 936,
    "question": "La motivazione intrinseca è:",
    "options": {
      "A": "Lo stimolo a partecipare interno al soggetto e decade con rapidità",
      "B": "Lo stimolo a partecipare esterno al soggetto e decade con difficoltà",
      "C": "Lo stimolo a partecipare interno al soggetto e decade con difficoltà",
      "D": "Lo stimolo a partecipare dietro costrizione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Lo stimolo a partecipare interno al soggetto e decade con difficoltà.",
    "category": "Psicopedagogia"
  },
  {
    "id": 937,
    "question": "La motivazione:",
    "options": {
      "A": "È legata all’età dell’individuo",
      "B": "Dipende dal percorso filogenetico",
      "C": "È alla base dell’apprendimento",
      "D": "Non conosce fattori inibenti"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. È alla base dell’apprendimento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 938,
    "question": "La personalità viene definita come:",
    "options": {
      "A": "Una sintesi originale, dinamica e relativamente stabile dei modi di essere e di agire dell’individuo",
      "B": "Lo sviluppo biologico che evidenzia i fenomeni di maturazione di organi ed apparati",
      "C": "Il carattere",
      "D": "La capacità di apprendimento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Una sintesi originale, dinamica e relativamente stabile dei modi di essere e di agire dell’individuo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 939,
    "question": "La prima infanzia va:",
    "options": {
      "A": "Da 0 a 3 anni",
      "B": "Da 3 a 6 anni",
      "C": "Da 6 a 11 anni",
      "D": "Dai 12 anni"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Da 0 a 3 anni.",
    "category": "Psicopedagogia"
  },
  {
    "id": 940,
    "question": "La prossemica studia:",
    "options": {
      "A": "La gestione dello spazio tra sé e gli altri",
      "B": "I linguaggi del corpo",
      "C": "L’utilizzo della voce e le sue modulazioni",
      "D": "Il funzionamento della comunicazione verbale"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. La gestione dello spazio tra sé e gli altri.",
    "category": "Psicopedagogia"
  },
  {
    "id": 941,
    "question": "La prossemica:",
    "options": {
      "A": "Accompagna l’espressione verbale come intensità, ritmo, la velocità e l’intonazione",
      "B": "Definisce il modo in cui una persona inconsapevolmente struttura lo spazio tra sé e gli altri nel corso delle interazioni sociali",
      "C": "Riguarda la capacità di ricevere informazioni dall’esterno del proprio corpo ed elaborare delle risposte sotto forma di movimento.",
      "D": "È una caratteristica del linguaggio verbale"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Definisce il modo in cui una persona inconsapevolmente struttura lo spazio tra sé e gli altri nel corso delle interazioni sociali.",
    "category": "Psicopedagogia"
  },
  {
    "id": 942,
    "question": "La prossemica:",
    "options": {
      "A": "È inconsapevole perché tiene conto dei fattori motivazionali",
      "B": "È consapevole",
      "C": "È inconsapevole",
      "D": "È consapevole perché tiene conto dei fattori motivazionali"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. È inconsapevole.",
    "category": "Psicopedagogia"
  },
  {
    "id": 943,
    "question": "La qualità del servizio nel lavoro dell’istruttore è data da:",
    "options": {
      "A": "Capacità d’insegnamento e rispettabilità",
      "B": "Capacità di relazione e procedure che si adottano nello svolgere il lavoro",
      "C": "Abbigliamento e portamento dell’istruttore",
      "D": "Tempo di apprendimento delle abilità tecniche"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Capacità di relazione e procedure che si adottano nello svolgere il lavoro.",
    "category": "Psicopedagogia"
  },
  {
    "id": 944,
    "question": "La seconda infanzia va:",
    "options": {
      "A": "Dai 3 ai 6 anni",
      "B": "Prima dei 3 anni",
      "C": "Dopo 6 anni",
      "D": "Nessuna delle risposte precedenti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Dai 3 ai 6 anni.",
    "category": "Psicopedagogia"
  },
  {
    "id": 945,
    "question": "La valutazione delle informazioni che derivano dal concetto di sé costituisce:",
    "options": {
      "A": "L’autostima",
      "B": "La depressione",
      "C": "La formazione",
      "D": "L’aggiornamento"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. L’autostima.",
    "category": "Psicopedagogia"
  },
  {
    "id": 946,
    "question": "Le aspettative che gli istruttori di nuoto nutrono nei confronti dei propri allievi:",
    "options": {
      "A": "Influenzano positivamente o negativamente l’ apprendimento",
      "B": "Non hanno effetti sull’ apprendimento",
      "C": "Influenzano l’apprendimento ma non in modo rilevante",
      "D": "Sono pregiudizi che vanno combattuti"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Influenzano positivamente o negativamente l’ apprendimento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 947,
    "question": "Le dinamiche comunicative possono essere di tre livelli:",
    "options": {
      "A": "Comunicazione verbale, comunicazione non verbale, paralinguaggi",
      "B": "Ansia, inferiorità, frustrazione",
      "C": "Simboliche, olistiche, materiche",
      "D": "Verbali, transferali, psicologiche"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Comunicazione verbale, comunicazione non verbale, paralinguaggi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 948,
    "question": "Le forme fondamentali per l’apprendimento sono:",
    "options": {
      "A": "Apprendimento per imitazione, condizionamento, per prove ed errori, per intuizione, per comprensione",
      "B": "Apprendimento per imitazione, condizionamento, per prove ed errori, per intuizione, per ricostruzione",
      "C": "Apprendimento per determinazione",
      "D": "Apprendimento per imitazione, condizionamento, per prove ed errori, per intuizione, per decifrazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Apprendimento per imitazione, condizionamento, per prove ed errori, per intuizione, per comprensione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 949,
    "question": "Le mansioni in un’organizzazione corrispondono a:",
    "options": {
      "A": "Il risultato delle attitudini e della loro applicazione, unite alla volontà di comportarsi in un dato modo e all’interesse per le conseguenze delle azioni che compie.",
      "B": "La tipologia contrattuale applicata",
      "C": "L’assunzione di responsabilità personale richiesta da una certa mansione e dai suoi obiettivi",
      "D": "L’insieme organico dei compiti assegnati"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. L’insieme organico dei compiti assegnati 95.",
    "category": "Psicopedagogia"
  },
  {
    "id": 950,
    "question": "Le motivazioni generate da necessità proprie dell’individuo si chiamano:",
    "options": {
      "A": "Motivazioni estrinseche",
      "B": "Motivazioni personali",
      "C": "Motivazioni sociali",
      "D": "Motivazioni intrinseche"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Motivazioni intrinseche.",
    "category": "Psicopedagogia"
  },
  {
    "id": 951,
    "question": "Le motivazioni generate dall’ambiente che circonda l’individuo, si chiamano:",
    "options": {
      "A": "Motivazioni intrinseche",
      "B": "Pressioni esogene",
      "C": "Motivazioni sociali",
      "D": "Motivazioni estrinseche"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Motivazioni sociali.",
    "category": "Psicopedagogia"
  },
  {
    "id": 952,
    "question": "Lo stadio dell’intelligenza sensomotoria si colloca fra:",
    "options": {
      "A": "0-14 mesi",
      "B": "15-18 mesi",
      "C": "19-59 mesi",
      "D": "6-11 anni"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. 15-18 mesi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 953,
    "question": "Lo sviluppo cognitivo, emotivo ed affettivo è un processo:",
    "options": {
      "A": "Statico",
      "B": "Dinamico",
      "C": "Solo endogeno",
      "D": "Solo esogeno"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dinamico.",
    "category": "Psicopedagogia"
  },
  {
    "id": 954,
    "question": "Nel gioco simbolico gli oggetti:",
    "options": {
      "A": "Sono interpretati in funzione dell’immaginazione",
      "B": "Sono utilizzati per lo scopo per il quale sono stati realizzati",
      "C": "Sono inutili",
      "D": "Sono dannosi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Sono interpretati in funzione dell’immaginazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 955,
    "question": "Nel modello formale di comunicazione l’emittente è:",
    "options": {
      "A": "Il contenuto della comunicazione",
      "B": "Un sistema di simboli",
      "C": "Colui che avvia la comunicazione",
      "D": "Colui che riceve la comunicazione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Colui che avvia la comunicazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 956,
    "question": "Nel processo di insegnamento/apprendimento la valutazione deve essere intesa come:",
    "options": {
      "A": "Misurazione oggettiva del rendimento dell’allievo",
      "B": "Momento di discussione e confronto tra insegnante e allievo sui risultati ottenuti",
      "C": "Elemento fondamentale per il corretto svolgimento del suddetto processo",
      "D": "Riconoscimento dell’efficacia del lavoro dell’insegnante"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Elemento fondamentale per il corretto svolgimento del suddetto processo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 957,
    "question": "Nel ruolo di istruttore bisogna:",
    "options": {
      "A": "Valutare, indirizzare e motivare gli allievi",
      "B": "Dare maggiore risalto agli aspetti tecnici",
      "C": "Dare maggiore risalto agli aspetti psicologici",
      "D": "Tenere nota dei tempi"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Valutare, indirizzare e motivare gli allievi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 958,
    "question": "Nella relazione allievo/istruttore in che percentuale, approssimativamente, si usa il linguaggio non verbale?",
    "options": {
      "A": "10%",
      "B": "50%",
      "C": "35%",
      "D": "90%"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. 90%.",
    "category": "Psicopedagogia"
  },
  {
    "id": 959,
    "question": "Nelle prime lezioni, per attirare l’attenzione nel proporre un esercizio, l’istruttore deve soprattutto:",
    "options": {
      "A": "Spiegarlo bene",
      "B": "Dimostrarlo",
      "C": "Far vedere un filmato",
      "D": "Adottare una leadership autoritaria"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Dimostrarlo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 960,
    "question": "Parlando di comunicazione possiamo affermare che l’istruttore di nuoto:",
    "options": {
      "A": "Deve dare molta importanza al proprio atteggiamento di ascolto, fase fondamentale per poi non compiere leggerezze nella risposta",
      "B": "Se troppo impegnato può liquidare velocemente l’allievo qualsiasi sia la richiesta",
      "C": "Non deve necessariamente essere un bon comunicatore",
      "D": "Usa come strumento di lavoro esclusivamente la voce, altre forme parallele di comunicazione sono solo secondarie"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Deve dare molta importanza al proprio atteggiamento di ascolto, fase fondamentale per poi non compiere leggerezze nella risposta.",
    "category": "Psicopedagogia"
  },
  {
    "id": 961,
    "question": "Per accrescere l’autostima degli allievi può essere opportuno:",
    "options": {
      "A": "Ridimensionare le aspettative",
      "B": "Mantenere le aspettative invariate",
      "C": "Aumentare le aspettative",
      "D": "Cambiare completamente oggetto dell’attenzione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Ridimensionare le aspettative.",
    "category": "Psicopedagogia"
  },
  {
    "id": 962,
    "question": "Per attivare l’attenzione nel proporre un esercizio, è importante:",
    "options": {
      "A": "Spiegarlo bene",
      "B": "Inibire gli allievi",
      "C": "Proporlo durante la ginnastica prenatatoria",
      "D": "Dimostrarlo correttamente"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Dimostrarlo correttamente.",
    "category": "Psicopedagogia"
  },
  {
    "id": 963,
    "question": "Per creare legami affettivi positivi occorre:",
    "options": {
      "A": "Non dare troppa confidenza agli allievi",
      "B": "Prendere informazioni sulla vita privata degli allievi",
      "C": "Giocare spesso coi propri allievi",
      "D": "Conoscere gli allievi e trattarli singolarmente secondo le loro caratteristiche personali"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Conoscere gli allievi e trattarli singolarmente secondo le loro caratteristiche personali.",
    "category": "Psicopedagogia"
  },
  {
    "id": 964,
    "question": "Per frustrazione s’intende:",
    "options": {
      "A": "Una caratteristica tipica dell’adolescenza",
      "B": "Una reazione aggressiva verso gli avversari",
      "C": "La percezione dell’impedimento a soddisfare le proprie aspirazioni"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La percezione dell’impedimento a soddisfare le proprie aspirazioni.",
    "category": "Psicopedagogia"
  },
  {
    "id": 965,
    "question": "Per gratificare gli allievi occorre:",
    "options": {
      "A": "Utilizzare continuamente premi e punizioni",
      "B": "Lavorare per una relazione interpersonale soddisfacente",
      "C": "Dosare premi e punizioni",
      "D": "Istituire piccole gare interne"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Lavorare per una relazione interpersonale soddisfacente.",
    "category": "Psicopedagogia"
  },
  {
    "id": 966,
    "question": "Per insegnare occorre:",
    "options": {
      "A": "Disporre delle conoscenze necessarie",
      "B": "Creare un legame affettivo, disporre un piano di apprendimento progressivo e realizzarlo",
      "C": "Disporre dei mezzi adatti",
      "D": "Intimidire l’allievo per conquistarne l’assoluta attenzione"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Creare un legame affettivo, disporre un piano di apprendimento progressivo e realizzarlo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 967,
    "question": "Per motivazione s’intende:",
    "options": {
      "A": "L’esigenza di immaginare, rappresentare, sognare ad occhi aperti",
      "B": "I motivi che spingono un allievo ad iscriversi in piscina",
      "C": "L’esigenza di emergere, dominare, prevalere sull’altro inteso come estraneo contrapposto a se",
      "D": "La causa di un comportamento, ciò che può determinare il manifestarsi, la forza, la direzione e la persistenza di un comportamento"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La causa di un comportamento, ciò che può determinare il manifestarsi, la forza, la direzione e la persistenza di un comportamento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 968,
    "question": "Per sviluppo cognitivo s’intende:",
    "options": {
      "A": "La maturazione della personalità",
      "B": "La crescita del sistema nervoso",
      "C": "Lo sviluppo degli organi e apparati",
      "D": "Lo sviluppo delle attività intellettive"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Lo sviluppo delle attività intellettive.",
    "category": "Psicopedagogia"
  },
  {
    "id": 969,
    "question": "Per un fanciullo dai 6 agli 11 anni il gioco è prevalentemente:",
    "options": {
      "A": "Simbolico (lo scopo è quello di applicare i propri schemi motori ad oggetti nuovi o situazioni immaginarie) e consente la drammatizzazione di situazioni emotivamente rilevanti.",
      "B": "Di movimento (lo scopo è quello di ripetere uno schema motorio appreso in precedenza per appropriarsene definitivamente) o imitativo",
      "C": "Libero",
      "D": "Caratterizzato dalle regole: capacità di cooperare, socializzare; aumentano i giochi di costruzione (realizzazione di capanne, oggetti)"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Caratterizzato dalle regole: capacità di cooperare, socializzare; aumentano i giochi di costruzione (realizzazione di capanne, oggetti).",
    "category": "Psicopedagogia"
  },
  {
    "id": 970,
    "question": "Professionalità dell’istruttore di nuoto è sinonimo di:",
    "options": {
      "A": "Massima competenza tecnica",
      "B": "Conoscenza tecnico didattica – Capacità comunicativa e relazionale",
      "C": "Massima conoscenza della didattica e grande capacità comunicativa",
      "D": "Carisma e autorevolezza"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Conoscenza tecnico didattica – Capacità comunicativa e relazionale.",
    "category": "Psicopedagogia"
  },
  {
    "id": 971,
    "question": "Qual è la distanza definita sociale, che l’istruttore adotta se deve dare disposizioni generali?",
    "options": {
      "A": "100 metri",
      "B": "10 metri",
      "C": "40 centimetri",
      "D": "120 centimetri"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. 120 centimetri.",
    "category": "Psicopedagogia"
  },
  {
    "id": 972,
    "question": "Quale delle seguenti motivazioni allo sport è primaria nei bambini?",
    "options": {
      "A": "Estetica",
      "B": "Aggregazione sociale",
      "C": "Gioco",
      "D": "Affettiva"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Gioco.",
    "category": "Psicopedagogia"
  },
  {
    "id": 973,
    "question": "Quale di queste affermazioni relative alla comunicazione è corretta?",
    "options": {
      "A": "La comunicazione verbale è la più efficace nell’ambiente piscina e da essa dipende la comprensione consapevole della richiesta esecutiva da parte dell’allievo",
      "B": "La comunicazione è inutile",
      "C": "La comunicazione verbale è caratterizzata da: linguaggio del corpo, prossemica e paralinguaggio.",
      "D": "Nel medesimo contesto, una corretta comunicazione verbale può essere invalidata da una comunicazione non verbale inefficiente"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Nel medesimo contesto, una corretta comunicazione verbale può essere invalidata da una comunicazione non verbale inefficiente.",
    "category": "Psicopedagogia"
  },
  {
    "id": 974,
    "question": "Quale forma di intelligenza si sviluppa, tipicamente, durante i primi 18 mesi di vita?",
    "options": {
      "A": "Intelligenza senso motoria",
      "B": "Intelligenza preconcettuale",
      "C": "Intelligenza operatoria",
      "D": "Intelligenza simbolica"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Intelligenza senso motoria.",
    "category": "Psicopedagogia"
  },
  {
    "id": 975,
    "question": "Quale tra le seguenti affermazioni, inerenti la psicologia dei gruppi, è vera?",
    "options": {
      "A": "La leadership è una persona all’ interno del gruppo",
      "B": "La leadership è una caratteristica specifica del leader",
      "C": "Il manifestarsi di una leadership è deleterio per l’equilibrio endogeno del gruppo",
      "D": "La leadership è esercitata dall’ istruttore per condurre il gruppo verso un fine comune"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. La leadership è esercitata dall’ istruttore per condurre il gruppo verso un fine comune.",
    "category": "Psicopedagogia"
  },
  {
    "id": 976,
    "question": "Quale tra le seguenti affermazioni, inerenti la psicologia dei gruppi, è vera?",
    "options": {
      "A": "La leadership è una persona all’interno del gruppo",
      "B": "La leadership è una caratteristica specifica del leader",
      "C": "La leadership è utilizzata dall’istruttore per condurre il gruppo verso un fine comune",
      "D": "L’istruttore deve esercitare una leadership democratica a prescindere dalla situazione"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. La leadership è utilizzata dall’istruttore per condurre il gruppo verso un fine comune.",
    "category": "Psicopedagogia"
  },
  {
    "id": 977,
    "question": "Quale tra le seguenti aree non contribuisce in maniera determinante nella formazione della personalità dell’individuo?",
    "options": {
      "A": "Area affettivo/emotiva",
      "B": "Area perimetrale",
      "C": "Area antropometrica",
      "D": "Area sociale"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Area antropometrica.",
    "category": "Psicopedagogia"
  },
  {
    "id": 978,
    "question": "Quali elementi della personalità dell’individuo rientrano nell’area morfologico-funzionale?",
    "options": {
      "A": "L’insieme dei rapporti che si creano tra l’individuo e le persone che vivono con lui",
      "B": "La relazione con gli altri attraverso il corpo",
      "C": "Le capacità coordinative",
      "D": "Le caratteristiche della struttura e del funzionamento dell’organismo"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Le caratteristiche della struttura e del funzionamento dell’organismo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 979,
    "question": "Quali possono essere i disturbi di una comunicazione?",
    "options": {
      "A": "Condizione, costituzione, coordinazione, controllo",
      "B": "Rumore, perdita d’informazione, fraintendimento",
      "C": "Rumore, luce, umidità",
      "D": "Tanti quanti se ne possono immaginare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Rumore, perdita d’informazione, fraintendimento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 980,
    "question": "Quali possono essere le reazioni del ricevente una comunicazione?",
    "options": {
      "A": "Conferma, negazione, disconferma, squalifica",
      "B": "Negazione, rabbia, contrattazione, depressione, accettazione",
      "C": "Presa, trazione, spinta, recupero",
      "D": "Introduzione, apprendimento, consolidamento, ricreazione"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Conferma, negazione, disconferma, squalifica.",
    "category": "Psicopedagogia"
  },
  {
    "id": 981,
    "question": "Quali sono gli aspetti che influiscono nello sviluppo della personalità?",
    "options": {
      "A": "Biologici e psicologici",
      "B": "Biologici, meccanici, cognitivi, sociali, affettivi, metabolici",
      "C": "Biologici e innati",
      "D": "Biologici, psicologici, cognitivi, socio- affettivi"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Biologici, psicologici, cognitivi, socio- affettivi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 982,
    "question": "Quali sono gli elementi della comunicazione?",
    "options": {
      "A": "Emittente, messaggio, destinatario, codice, canale, contesto",
      "B": "Grammatica, semantica e sintattica",
      "C": "Creatività, sensibilità e intraprendenza",
      "D": "Emittente e ricevente"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Emittente, messaggio, destinatario, codice, canale, contesto.",
    "category": "Psicopedagogia"
  },
  {
    "id": 983,
    "question": "Quali sono i contenuti della comunicazione non verbale?",
    "options": {
      "A": "Conferma, disconferma e negazione",
      "B": "Conferma e negazione",
      "C": "Affermazione, negazione, rigetto",
      "D": "Presa, trazione, spinta, recupero"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Conferma, disconferma e negazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 984,
    "question": "Quali sono le barriere della comunicazione a livello di canale?",
    "options": {
      "A": "Il destinatario non conosce il codice o attribuisce al segno un significato diverso",
      "B": "Difficoltà linguistiche",
      "C": "Eccessiva distanza tra emittente e destinatario, rumore tra emittente e destinatario",
      "D": "Significati diversi rispetto a quelli conosciuti abitualmente"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Eccessiva distanza tra emittente e destinatario, rumore tra emittente e destinatario.",
    "category": "Psicopedagogia"
  },
  {
    "id": 985,
    "question": "Quali sono le barriere della comunicazione a livello di codice?",
    "options": {
      "A": "Il destinatario non conosce il codice o attribuisce al segno un significato diverso",
      "B": "Eccessiva distanza tra emittente e destinatario, rumore tra emittente e destinatario",
      "C": "Rumore e caos",
      "D": "Significati diversi rispetto a quelli conosciuti abitualmente"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Il destinatario non conosce il codice o attribuisce al segno un significato diverso.",
    "category": "Psicopedagogia"
  },
  {
    "id": 986,
    "question": "Quali tra queste modalità comunicative appartiene al linguaggio del corpo?",
    "options": {
      "A": "Contatto visivo",
      "B": "Gestualità",
      "C": "Far divertire gli allievi",
      "D": "Mobilità articolare"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gestualità.",
    "category": "Psicopedagogia"
  },
  {
    "id": 987,
    "question": "Quali tra queste sono motivazioni primarie?",
    "options": {
      "A": "Studio e ricerca",
      "B": "Gioco e agonismo",
      "C": "Attenzione e concentrazione",
      "D": "Corpo e psiche"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Gioco e agonismo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 988,
    "question": "Quando si comunica si trasmettono messaggi:",
    "options": {
      "A": "Di tipo verbale, transferale e psicologico",
      "B": "Esclusivamente di tipo verbale",
      "C": "Di tipo verbale e psicologico",
      "D": "Di tipo tecnico"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Di tipo verbale, transferale e psicologico.",
    "category": "Psicopedagogia"
  },
  {
    "id": 989,
    "question": "Regola fondamentale dell’istruttore-educatore è:",
    "options": {
      "A": "Educare all’acqua attraverso l’acqua, soddisfando i bisogni reali delle persone in considerazione delle motivazioni, del benessere e del divertimento",
      "B": "Instaurare la tecnica degli stili nella maniera più accurata possibile",
      "C": "Ottenere performance elevate",
      "D": "Educare i gruppi di scuola nuoto nella maniera più autoritaria possibile al fine di favorire la gestione delle persone in maniera uniforme ed oggettiva"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Educare all’acqua attraverso l’acqua, soddisfando i bisogni reali delle persone in considerazione delle motivazioni, del benessere e del divertimento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 990,
    "question": "Saper comunicare significa anche saper:",
    "options": {
      "A": "Comandare",
      "B": "Obbedire",
      "C": "Prevedere",
      "D": "Ascoltare"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Ascoltare 99.",
    "category": "Psicopedagogia"
  },
  {
    "id": 991,
    "question": "Secondo una corretta definizione il gruppo è:",
    "options": {
      "A": "Un insieme dinamico di individui che si percepiscono vicendevolmente, più o meno indipendenti per qualche aspetto",
      "B": "Una squadra vincente",
      "C": "Un insieme di individui",
      "D": "Un insieme di persone legate da reciproca simpatia"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un insieme dinamico di individui che si percepiscono vicendevolmente, più o meno indipendenti per qualche aspetto.",
    "category": "Psicopedagogia"
  },
  {
    "id": 992,
    "question": "Soddisfare l’altro o aver piacere dal lavoro che si svolge:",
    "options": {
      "A": "Sono condizioni per imparare bene",
      "B": "Sono motivazioni necessarie all’apprendimento",
      "C": "Sono motivazioni che accelerano i tempi di apprendimento",
      "D": "Sono attitudini personali"
    },
    "answer": "B",
    "explanation": "La risposta corretta è B. Sono motivazioni necessarie all’apprendimento.",
    "category": "Psicopedagogia"
  },
  {
    "id": 993,
    "question": "Tendenze tipiche del pensiero infantile:",
    "options": {
      "A": "Egocentrismo, realismo, animismo, finalismo",
      "B": "Ecumenismo, realismo, irredentismo",
      "C": "Olismo, ecumenismo, realismo, animismo",
      "D": "Olismo, realismo, misticismo, onanismo"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Egocentrismo, realismo, animismo, finalismo.",
    "category": "Psicopedagogia"
  },
  {
    "id": 994,
    "question": "Tra le seguenti, quale area caratterizza in modo marcato la personalità di un individuo?",
    "options": {
      "A": "Area razionale",
      "B": "Area spontanea",
      "C": "Area istintiva",
      "D": "Area affettivo/emotiva"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Area affettivo/emotiva.",
    "category": "Psicopedagogia"
  },
  {
    "id": 995,
    "question": "Tra le seguenti, quale è una forma fondamentale di apprendimento?",
    "options": {
      "A": "Leggere",
      "B": "Per induzione",
      "C": "Per prove ed errori",
      "D": "Correre"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Per prove ed errori.",
    "category": "Psicopedagogia"
  },
  {
    "id": 996,
    "question": "Tra le seguenti, quale è una forma fondamentale di apprendimento?",
    "options": {
      "A": "Ascoltare",
      "B": "Ripetere",
      "C": "Apprendimento per intuizione",
      "D": "Memorizzare"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Apprendimento per intuizione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 997,
    "question": "Tra le seguenti, quale è una forma fondamentale di apprendimento?",
    "options": {
      "A": "Per imitazione",
      "B": "Rotolare",
      "C": "Per coercizione",
      "D": "Ricordare"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Per imitazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 998,
    "question": "Un corretto metodo educativo - didattico dovrebbe essere basato:",
    "options": {
      "A": "Sulle rispondenza alle elevate pretese di genitori e insegnanti",
      "B": "Sulla totale autonomia lasciata all’allievo",
      "C": "Sulla possibilità di sperimentare esperienze di successo e sulla presenza di rinforzi positivi",
      "D": "Sui ripetuti interventi volti ad evidenziare errori ed imprecisioni"
    },
    "answer": "C",
    "explanation": "La risposta corretta è C. Sulla possibilità di sperimentare esperienze di successo e sulla presenza di rinforzi positivi.",
    "category": "Psicopedagogia"
  },
  {
    "id": 999,
    "question": "Un opportuno clima psicologico implica:",
    "options": {
      "A": "Un’atmosfera serena e ludica che sollecita la partecipazione",
      "B": "Un complesso di tecniche per il condizionamento psicologico",
      "C": "Una disponibilità aggressiva verso le gare",
      "D": "Una leadership autoritaria"
    },
    "answer": "A",
    "explanation": "La risposta corretta è A. Un’atmosfera serena e ludica che sollecita la partecipazione.",
    "category": "Psicopedagogia"
  },
  {
    "id": 1000,
    "question": "Una barriera della comunicazione è:",
    "options": {
      "A": "Un muro che impedisce la comunicazione",
      "B": "Un malfunzionamento degli analizzatori",
      "C": "Un atteggiamento di un individuo che si oppone alla comunicazione",
      "D": "Un ostacolo di qualsiasi genere che interrompe o riduce il flusso dell’informazione"
    },
    "answer": "D",
    "explanation": "La risposta corretta è D. Un ostacolo di qualsiasi genere che interrompe o riduce il flusso dell’informazione 100.",
    "category": "Psicopedagogia"
  }
];
