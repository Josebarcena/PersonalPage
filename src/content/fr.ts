import type { SiteContent } from "./types";

export const fr: SiteContent = {
    hero: {
        role: "INGÉNIEUR LOGICIEL",
        location: "VALAIS, SUISSE",
        scroll: "DÉFILER ↓",
    },

    story: {
        section: "01 / LÀ OÙ TOUT A COMMENCÉ",
        place: "LA COROGNE",
        country: "ESPAGNE",

        born:
            "Je suis né à La Corogne, dans le nord-ouest de l'Espagne.",

        curiosity:
            "L'informatique éveille ma curiosité depuis aussi longtemps que je me souvienne.",

        selfTaught: {
            line1: "AVANT D'ÊTRE UN MÉTIER,",
            line2: "C'ÉTAIT QUELQUE CHOSE QUE J'APPRENAIS PAR MOI-MÊME.",
        },

        process: {
            break: "CASSER DES CHOSES.",
            understand: "COMPRENDRE POURQUOI.",
            fix: "LES RÉPARER.",
            again: "RÉESSAYER.",
        },

        curiosityStatement: {
            line1: "L'INFORMATIQUE",
            line2: "ME FASCINE",
            line3: "DEPUIS AUSSI LOIN",
            line4: "QUE JE ME SOUVIENNE.",
        },

        biography: {
            paragraph1:
                "J'ai grandi à La Corogne, où ma relation avec la technologie a commencé bien avant que je l'envisage comme un métier.",

            paragraph2:
                "L'informatique était avant tout quelque chose que j'explorais par curiosité. J'apprenais par moi-même, j'expérimentais constamment, je cassais probablement un peu trop de choses et j'ai peu à peu découvert que comprendre pourquoi quelque chose ne fonctionnait pas m'intéressait souvent davantage que de simplement réussir à le faire fonctionner.",

            paragraph3:
                "Cette curiosité m'a finalement conduit à étudier l'informatique. L'université m'a apporté les bases que je recherchais, mais certaines des expériences qui m'ont le plus marqué ont eu lieu en dehors des cours.",

            paragraph4:
                "J'ai participé à la création d'ASOC, une association universitaire créée par des étudiants pour rassembler des personnes autour de la technologie et d'intérêts communs. J'ai également accompagné de nouveaux étudiants lors de leurs premiers pas à l'université et représenté les étudiants au sein du Conseil des étudiants.",

            paragraph5:
                "Ces expériences ont renforcé quelque chose qui m'accompagne encore aujourd'hui : j'aime comprendre des problèmes difficiles, mais j'apprécie encore davantage de travailler avec des personnes suffisamment curieuses pour les questionner, partager leurs idées et construire des choses ensemble.",

            closing:
                "Et, avec le temps, cette curiosité allait m'emmener loin de là où tout avait commencé.",

            asoc: "COMMUNAUTÉ ÉTUDIANTE",
            mentor: "MENTOR DE NOUVEAUX ÉTUDIANTS",
            council: "REPRÉSENTANT DES ÉTUDIANTS",
        },
    },

    switzerland: {
        section: "02 / LÀ OÙ JE SUIS AUJOURD'HUI",

        place: "VALAIS",
        country: "SUISSE",

        statement: {
            line1: "UN NOUVEAU LIEU.",
            line2: "UN NOUVEAU CHAPITRE.",
        },

        paragraph1:
            "Aujourd'hui, je vis en Valais, en Suisse. Venir ici a représenté bien plus qu'un changement de pays : il a fallu m'adapter à un nouvel environnement, découvrir une autre culture et commencer une nouvelle étape, aussi bien personnelle que professionnelle.",

        paragraph2:
            "Je cherche maintenant ce qui viendra ensuite : des problèmes difficiles qui méritent d'être compris, des projets ambitieux qui méritent d'être construits et des personnes auprès desquelles je peux continuer à apprendre. Je suis particulièrement attiré par les environnements d'ingénierie où la curiosité compte et où il est possible de remettre en question la solution la plus évidente.",

        paragraph3:
            "Construire quelque chose simplement pour ajouter un projet de plus ne m'intéresse pas vraiment. Ce qui me motive, ce sont les problèmes qui m'obligent à aller plus loin, à apprendre quelque chose de nouveau et à construire des systèmes dont la complexité rend le processus lui-même intéressant.",

        closing:
            "JE SUIS PRÊT POUR LA SUITE.",
    },

    menu: {
        close: "FERMER",

        story: "HISTOIRE",
        storyDescription: "La Corogne → Valais",

        work: "PROJETS",
        workDescription: "Ingénierie & projets",

        contact: "CONTACT",
        contactDescription: "Me contacter",
    },

    work: {
        section: "03 / PROJETS",

        title: "PROJETS.",

        explore: "VOIR LE PROJET",
        source: "CODE SOURCE",

        projects: {
            "tptp-pvs": {
                eyebrow: "MÉTHODES FORMELLES & TRAITEMENT DES LANGAGES",

                title: "TPTP → PVS",

                description:
                    "Un traducteur de spécifications formelles basé sur une architecture de type compilateur, développé en C/C++ avec Flex/Bison. Le système analyse des entrées TPTP, construit une représentation interne, effectue des validations sémantiques et de types, gère les erreurs et génère des spécifications PVS équivalentes.",
            },

            "llm-inference": {
                eyebrow:
                    "INFÉRENCE LLM / INGÉNIERIE DE PERFORMANCE",

                title:
                    "LLM INFERENCE PERFORMANCE LAB",

                description:
                    "Un laboratoire reproductible conçu pour étudier le comportement réel de l'inférence de modèles de langage sur GPU.",

                detail:
                    "Le système mesure le throughput, la latence, le TTFT, la mémoire, la puissance et l'efficacité énergétique sous différents niveaux de concurrence, stratégies de batching et charges de travail. Les expériences comparent Transformers et vLLM afin d'identifier la saturation, le calcul inutile et les compromis réels entre performance et latence.",

                closing:
                    "Ce n'est pas un chatbot de plus. C'est une expérience d'ingénierie système visant à comprendre ce qui se passe lorsque les modèles de langage rencontrent du matériel et des charges de travail réels.",
            },

            "semantic-code": {
                eyebrow:
                    "CODE INTELLIGENCE / RECHERCHE SÉMANTIQUE",

                title:
                    "SEMANTIC CODE INTELLIGENCE",

                description:
                    "Un système de recherche sensible à la structure du code, conçu pour rechercher par signification plutôt que de dépendre uniquement de correspondances textuelles.",

                detail:
                    "Les dépôts sont analysés selon leur langage de programmation, décomposés en unités sémantiques au niveau des fonctions et des classes, transformés en embeddings puis indexés avec FAISS pour permettre des recherches en langage naturel.",

                closing:
                    "Conçu pour les outils de développement et l'ingénierie logicielle assistée par IA, avec parsing multilingue et analyse sécurisée des dépôts.",
            },
        },
    },
    tptpCaseStudy: {

        back: "JOSE BARCENA",
        source: "VOIR LE CODE",
        nextProject: "PROJET SUIVANT",

        hero: {
            category: "MÉTHODES FORMELLES / 01",

            eyebrow:
                "CONCEPTION DE COMPILATEURS · MÉTHODES FORMELLES",

            context:
                "INFORMATIQUE · PROJET DE FIN D'ÉTUDES",

            description:
                "Un système inspiré de l'architecture d'un compilateur pour traduire des spécifications formelles de TPTP vers PVS, construit autour de l'analyse syntaxique, de l'analyse sémantique, de la validation et de la génération de code.",

            scroll: "DÉFILER",
        },

        context: {
            section: "01 / CONTEXTE",

            title:
                "UN TRADUCTEUR ENTRE DEUX MONDES FORMELS.",

            paragraphs: [
                "TPTP et PVS représentent les connaissances formelles de manières fondamentalement différentes. Le projet est né d'une question pratique : comment traduire une spécification écrite pour un écosystème formel vers un autre sans perdre la structure et le sens qu'elle cherche à exprimer ?",

                "J'ai abordé le problème comme un système de traitement des langages plutôt que comme une série de substitutions textuelles. Le résultat est un traducteur développé en C/C++ autour d'un pipeline d'analyse complet, du traitement lexical et syntaxique jusqu'à la validation sémantique et la génération de PVS.",
            ],
        },

        problem: {
            section: "02 / LE PROBLÈME",

            title:
                "TRADUIRE LA SYNTAXE EST LA PARTIE FACILE.",

            statement:
                "SENS ≠ SYNTAXE",

            paragraphs: [
                "TPTP et PVS sont tous deux conçus pour exprimer des connaissances formelles, mais ils ne les décrivent pas de la même manière. Leur syntaxe, leurs systèmes de types et leur représentation des constructions logiques diffèrent, ce qui signifie qu'une traduction valide ne peut pas se limiter à transformer du texte.",

                "Avant de générer du PVS, le traducteur doit comprendre ce que représente l'entrée TPTP. Les symboles doivent être identifiés, les expressions structurées, les types validés et les relations sémantiques vérifiées.",

                "Le projet est ainsi devenu un problème beaucoup plus proche de la conception d'un compilateur que d'une conversion conventionnelle entre formats.",
            ],
        },

        codeExample: {
            section: "CODE / TRANSFORMATION",

            title:
                "UN LANGAGE ENTRE. UN AUTRE EN SORT.",

            description:
                "Le code généré n'est que la dernière étape. Avant d'atteindre PVS, la spécification originale a déjà été analysée, représentée en interne et validée par les étapes précédentes du pipeline.",

            input: "ENTRÉE",
            output: "SORTIE",
        },

        engineering: {
            section: "04 / INGÉNIERIE",

            title:
                "CONÇU POUR GÉRER LES ERREURS, PAS SEULEMENT LE CAS IDÉAL.",

            areas: [
                {
                    number: "01",
                    title: "ANALYSE SYNTAXIQUE",
                    description:
                        "Les règles de grammaire transforment le flux de tokens en représentations structurées sur lesquelles le reste du système peut raisonner.",
                },
                {
                    number: "02",
                    title: "ANALYSE SÉMANTIQUE",
                    description:
                        "Les entrées syntaxiquement valides sont vérifiées selon des relations et des contraintes que la grammaire seule ne peut pas garantir.",
                },
                {
                    number: "03",
                    title: "VALIDATION DES TYPES",
                    description:
                        "Les symboles et les expressions sont validés avant la génération afin d'éviter que des constructions incompatibles se propagent jusqu'à la sortie.",
                },
                {
                    number: "04",
                    title: "RÉCUPÉRATION D'ERREURS",
                    description:
                        "Les entrées invalides sont détectées à l'étape appropriée et les mécanismes de récupération conservent des informations utiles sur l'erreur.",
                },
                {
                    number: "05",
                    title: "GÉNÉRATION DE CODE",
                    description:
                        "Seules les structures validées atteignent l'étape finale, où la représentation interne est transformée en code PVS équivalent.",
                },
            ],
        },

        system: {
            section: "03 / LE SYSTÈME",

            title:
                "DU CODE SOURCE AU CODE SOURCE.",

            description:
                "Chaque étape possède une responsabilité définie. L'analyse lexicale, le parsing, la représentation interne, la validation sémantique et la génération restent séparés afin que chaque transformation puisse être analysée indépendamment.",
        },

        outcome: {
            section: "05 / RÉSULTAT",

            title:
                "PLUS QU'UN TRADUCTEUR.",

            paragraphs: [
                "Le système final traduit des spécifications formelles de TPTP vers PVS au moyen d'un pipeline de compilation structuré et validé.",

                "Plus important encore, ce projet a changé ma manière de penser le logiciel. Travailler au plus près des grammaires, des systèmes de types, de la gestion des erreurs et des représentations formelles a rendu la notion de correction très concrète : une propriété qui doit être intégrée à chaque étape d'un système.",
            ],
        },
    },

    llmCaseStudy: {

        back: "JOSE BARCENA",
        source: "VOIR LE CODE",

        hero: {
            category: "SYSTÈMES LLM / 02",

            eyebrow:
                "INFÉRENCE · PERFORMANCE · GPU",

            title:
                "LABORATOIRE DE PERFORMANCE D'INFÉRENCE LLM",

            description:
                "Un environnement reproductible pour mesurer, profiler et optimiser l'inférence de modèles de langage sur GPU NVIDIA. Conçu pour comprendre comment le batching, la concurrence, l'hétérogénéité des prompts et la configuration du runtime influencent les performances réelles d'un système de serving.",

            hardware:
                "RTX 4080 · QWEN 2.5 3B · FP16",

            scroll:
                "EXPLORER L'EXPÉRIENCE",
        },

        question: {
            section: "01 / LA QUESTION",

            title:
                "QUE SE PASSE-T-IL RÉELLEMENT LORSQU'UN LLM ARRIVE SUR LE GPU ?",

            description:
                "L'objectif n'était pas de construire un chatbot de plus. Il s'agissait de mesurer le système sous-jacent : comprendre comment le comportement de l'inférence évolue lorsque la charge de travail, la concurrence et la stratégie d'ordonnancement changent.",

            metrics: [
                "LATENCE",
                "THROUGHPUT",
                "TTFT",
                "MÉMOIRE GPU",
                "PUISSANCE",
                "ÉNERGIE",
            ],
        },

        saturation: {
            section: "02 / SATURATION",

            title:
                "PLUS DE CONCURRENCE NE SIGNIFIE PAS TOUJOURS PLUS DE PERFORMANCE.",

            description:
                "Le throughput a fortement progressé jusqu'à ce que le GPU atteigne un point de saturation pratique autour d'une concurrence de 128. Au-delà, les requêtes supplémentaires se sont principalement traduites par davantage d'attente.",

            throughput:
                "+1.9% THROUGHPUT",

            latency:
                "+42.1% LATENCE",

            ttft:
                "+59.6% TTFT",

            conclusion:
                "CONCURRENCE 128 → 192",
        },

        padding: {
            section: "03 / PADDING",

            title:
                "LE PADDING N'EST PAS GRATUIT.",

            description:
                "Les requêtes de longueurs différentes ont rendu le batching statique de moins en moins efficace. Regrouper les prompts de longueurs similaires a considérablement réduit le calcul inutile sur les entrées.",

            before:
                "57.8%",

            after:
                "5.3%",

            improvement:
                "+12% THROUGHPUT",
        },

        comparison: {
            section: "04 / STATIQUE VS CONTINU",

            title:
                "LA CHARGE DE TRAVAIL CHANGE LE GAGNANT.",

            description:
                "Le batching statique avec Transformers s'est montré extrêmement performant sur des charges offline homogènes. Avec des requêtes hétérogènes, le batching continu a complètement changé le résultat.",
        },

        measurement: {
            section: "05 / MESURE",

            title:
                "UN BENCHMARK N'EST UTILE QUE SI SES LIMITES SONT VISIBLES.",

            value:
                "27.8%",

            description:
                "L'endpoint de chat de vLLM a traité davantage de tokens d'entrée mesurés en raison du chat template du modèle. La comparaison ne peut donc pas être considérée comme parfaitement identique au niveau des entrées tokenisées.",
        },

        outcome: {
            section: "06 / CONCLUSIONS",

            title:
                "LA CONFIGURATION LA PLUS RAPIDE N'EST PAS TOUJOURS LA MEILLEURE.",

            paragraphs: [
                "Les expériences ont montré que l'optimisation de l'inférence dépend fondamentalement de la charge de travail. Le batching statique peut dominer dans des conditions homogènes idéales, tandis que le batching continu devient nettement plus efficace lorsque les longueurs et les rythmes d'arrivée des requêtes deviennent hétérogènes.",

                "Le projet a évolué d'une simple mesure de la latence du modèle vers l'étude du système de serving dans son ensemble : ordonnancement, saturation, utilisation du GPU, puissance, efficacité énergétique, stabilité et compromis entre throughput et latence perçue par l'utilisateur.",
            ],
        },
    },

};