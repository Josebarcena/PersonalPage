import type { SiteContent } from "./types";

export const en: SiteContent = {
    hero: {
        role: "SOFTWARE ENGINEER",
        location: "VALAIS, SWITZERLAND",
        scroll: "SCROLL ↓",
    },

    story: {
        section: "01 / WHERE IT STARTED",
        place: "A CORUÑA",
        country: "SPAIN",

        born:
            "I was born in A Coruña, in the northwest of Spain.",

        curiosity:
            "I've been curious about computers for as long as I can remember.",

        selfTaught: {
            line1: "BEFORE IT WAS A CAREER,",
            line2: "IT WAS SOMETHING I TAUGHT MYSELF.",
        },

        process: {
            break: "BREAK THINGS.",
            understand: "FIGURE OUT WHY.",
            fix: "FIX THEM.",
            again: "TRY AGAIN.",
        },

        curiosityStatement: {
            line1: "I'VE BEEN CURIOUS",
            line2: "ABOUT COMPUTERS",
            line3: "FOR AS LONG AS",
            line4: "I CAN REMEMBER.",
        },

        biography: {
            paragraph1:
                "I grew up in A Coruña, where my relationship with technology started long before I ever thought of it as a career.",

            paragraph2:
                "Computers were something I explored mostly out of curiosity. I learned on my own, experimented constantly, broke things more often than I probably should have, and slowly discovered that understanding why something failed was usually more interesting than simply getting it to work.",

            paragraph3:
                "That curiosity eventually led me to study Computer Science. University gave me the foundations I was looking for, but some of the experiences that shaped me most happened outside the classroom.",

            paragraph4:
                "I helped start ASOC, a student-led university group built around bringing people together through technology and shared interests. I also mentored new students as they found their way through university and represented students as a member of the Student Council.",

            paragraph5:
                "Those experiences reinforced something that has stayed with me: I enjoy understanding difficult problems, but I enjoy even more working alongside people who are curious enough to question them, share ideas and build things together.",

            closing:
                "And eventually, that curiosity would take me far from where I started.",

            asoc: "STUDENT-LED COMMUNITY",
            mentor: "NEW STUDENT MENTOR",
            council: "STUDENT REPRESENTATIVE",
        },
    },

    switzerland: {
        section: "02 / WHERE I AM NOW",

        place: "VALAIS",
        country: "SWITZERLAND",

        statement: {
            line1: "A NEW PLACE.",
            line2: "A NEW CHAPTER.",
        },

        paragraph1:
            "Today, I'm based in Valais, Switzerland. Moving here meant more than changing countries; it meant stepping into a new environment, adapting to a different culture and beginning a new chapter both personally and professionally.",

        paragraph2:
            "I'm now looking for what comes next: difficult problems worth understanding, ambitious projects worth building and people I can keep learning from. I'm especially drawn to engineering environments where curiosity matters and where there is room to question the obvious solution.",

        paragraph3:
            "I don't spend my time building things simply to have another project to show. What keeps me interested are problems that force me to go deeper, learn something unfamiliar and build systems whose complexity makes the process itself worthwhile.",

        closing:
            "I'M READY FOR WHAT COMES NEXT.",
    },

    menu: {
        close: "CLOSE",

        story: "STORY",
        storyDescription: "A Coruña → Valais",

        work: "SELECTED WORK",
        workDescription: "Engineering & projects",

        contact: "CONTACT",
        contactDescription: "Get in touch",
    },

    storyGate: {
        label: "OPTIONAL CHAPTER",
        title: "BEFORE THE PROJECTS",
        description:
            "A short story about the places and experiences that shaped the work that follows.",
        read: "KEEP READING",
        skip: "SKIP TO PROJECTS",
    },

    work: {
        section: "03 / SELECTED WORK",

        title: "SELECTED WORK.",

        explore: "EXPLORE PROJECT",
        source: "SOURCE CODE",

        projects: {
            "tptp-pvs": {
                eyebrow: "FORMAL METHODS & LANGUAGE PROCESSING",

                title: "TPTP → PVS",

                description:
                    "A compiler-style translator for formal specifications, built in C/C++ with Flex/Bison. The system parses TPTP input, builds an internal representation and generates equivalent PVS specifications.",

                detail:
                    "The interesting part wasn't simply translating syntax. The translator had to preserve meaning across two different formal languages while detecting invalid input along the way. I implemented the pipeline around lexical and syntactic analysis, symbol and type validation, error recovery and source-to-source generation.",

                closing:
                    "Built as my final Computer Science degree project, with correctness and traceability treated as core engineering requirements rather than afterthoughts.",
            },

            "llm-inference": {
                eyebrow:
                    "LLM INFERENCE / PERFORMANCE ENGINEERING",

                title:
                    "LLM INFERENCE PERFORMANCE LAB",

                description:
                    "A reproducible performance lab for studying how language model inference actually behaves on GPU hardware.",

                detail:
                    "The system measures throughput, latency, TTFT, GPU memory, power consumption and energy efficiency across different concurrency levels, batching strategies and workloads. Experiments compare Transformers and vLLM to identify saturation points, wasted computation and the real trade-offs between throughput and latency.",

                closing:
                    "Not another chatbot. A systems engineering experiment built to understand what actually happens when language models meet real hardware and real workloads.",
            },

            "semantic-code": {
                eyebrow:
                    "CODE INTELLIGENCE / SEMANTIC RETRIEVAL",

                title:
                    "SEMANTIC CODE INTELLIGENCE",

                description:
                    "A structure-aware retrieval system for searching source code by meaning rather than exact text.",

                detail:
                    "Repositories are parsed according to their programming language, decomposed into function- and class-level semantic units, transformed into embeddings and indexed with FAISS for natural-language retrieval.",

                closing:
                    "Built for developer tooling and AI-assisted software engineering, with multi-language parsing and security-aware repository scanning.",
            },
        },
    },

    tptpCaseStudy: {

        back: "JOSE BARCENA",
        source: "VIEW SOURCE",
        nextProject: "NEXT PROJECT",

        hero: {
            category: "FORMAL METHODS / 01",

            eyebrow:
                "COMPILER DESIGN · FORMAL METHODS",

            context:
                "COMPUTER SCIENCE · FINAL DEGREE PROJECT",

            description:
                "A compiler-style system for translating formal specifications from TPTP into PVS, built around parsing, semantic analysis, validation and source generation.",

            scroll: "SCROLL",
        },

        context: {
            section: "01 / CONTEXT",

            title:
                "A TRANSLATOR BETWEEN FORMAL WORLDS.",

            paragraphs: [
                "TPTP and PVS represent formal knowledge in fundamentally different ways. The project began with a practical question: how can a specification written for one formal ecosystem be translated into another without losing the structure and meaning it was designed to express?",

                "I approached the problem as a language-processing system rather than a collection of text substitutions. The result was a translator built in C/C++ around a complete analysis pipeline, from lexical processing and parsing to semantic validation and PVS generation.",
            ],
        },

        problem: {
            section: "02 / THE PROBLEM",

            title:
                "TRANSLATING SYNTAX IS THE EASY PART.",

            statement:
                "MEANING ≠ SYNTAX",

            paragraphs: [
                "TPTP and PVS are both designed to express formal knowledge, but they do not describe it in the same way. Their syntax, type systems and representation of logical constructs differ, which means that a valid translation cannot be produced by simply mapping one piece of text to another.",

                "Before generating PVS, the translator needs to understand what the TPTP input represents. Symbols have to be identified, expressions structured, types validated and semantic relationships checked.",

                "This turned the project into a problem much closer to compiler construction than conventional format conversion.",
            ],
        },

        codeExample: {
            section: "SOURCE / TRANSFORMATION",

            title:
                "ONE LANGUAGE IN. ANOTHER OUT.",

            description:
                "The generated source is only the final step. Before reaching PVS, the original specification has already been parsed, represented internally and validated by the previous stages of the pipeline.",

            input: "INPUT",
            output: "OUTPUT",
        },

        engineering: {
            section: "04 / ENGINEERING",

            title:
                "BUILT AROUND FAILURE, NOT JUST THE HAPPY PATH.",

            areas: [
                {
                    number: "01",
                    title: "PARSING",
                    description:
                        "Grammar rules transform the token stream into structured representations that the rest of the system can reason about.",
                },
                {
                    number: "02",
                    title: "SEMANTIC ANALYSIS",
                    description:
                        "Syntactically valid input is checked for relationships and constraints that grammar alone cannot guarantee.",
                },
                {
                    number: "03",
                    title: "TYPE VALIDATION",
                    description:
                        "Symbols and expressions are validated before generation so incompatible constructs do not silently propagate into the output.",
                },
                {
                    number: "04",
                    title: "ERROR RECOVERY",
                    description:
                        "Invalid input is detected at the appropriate stage, while recovery mechanisms preserve useful information about what went wrong.",
                },
                {
                    number: "05",
                    title: "SOURCE GENERATION",
                    description:
                        "Only validated structures reach the final stage, where the internal representation is transformed into equivalent PVS source.",
                },
            ],
        },

        system: {
            section: "03 / THE SYSTEM",

            title:
                "FROM SOURCE TO SOURCE.",

            description:
                "Each stage has a defined responsibility. Lexical analysis, parsing, internal representation, semantic validation and generation remain separated so that each transformation can be reasoned about independently.",
        },
        outcome: {
            section: "05 / OUTCOME",

            title:
                "MORE THAN A TRANSLATOR.",

            paragraphs: [
                "The finished system translates formal specifications from TPTP into PVS through a structured and validated compilation pipeline.",

                "More importantly, the project changed the way I think about software. Working this close to grammars, type systems, error handling and formal representations made correctness something concrete: a property that has to be designed into every stage of a system.",
            ],
        },
    },

    llmCaseStudy: {

        back: "JOSE BARCENA",
        source: "VIEW SOURCE",

        hero: {
            category: "LLM SYSTEMS / 02",

            eyebrow:
                "INFERENCE · PERFORMANCE · GPU",

            title:
                "LLM INFERENCE PERFORMANCE LAB",

            description:
                "A reproducible framework for benchmarking, profiling and optimizing LLM inference on NVIDIA GPUs. Built to understand how batching, concurrency, prompt heterogeneity and runtime configuration affect real serving performance.",

            hardware:
                "RTX 4080 · QWEN 2.5 3B · FP16",

            scroll:
                "EXPLORE THE EXPERIMENT",
        },

        question: {
            section: "01 / THE QUESTION",

            title:
                "WHAT ACTUALLY HAPPENS WHEN AN LLM HITS THE GPU?",

            description:
                "The objective was not to build another chatbot. It was to measure the system underneath it: how inference behavior changes as workload shape, concurrency and scheduling strategy change.",

            metrics: [
                "LATENCY",
                "THROUGHPUT",
                "TTFT",
                "GPU MEMORY",
                "POWER",
                "ENERGY",
            ],
        },

        saturation: {
            section: "02 / SATURATION",

            title:
                "MORE CONCURRENCY DOESN'T ALWAYS MEAN MORE PERFORMANCE.",

            description:
                "Throughput scaled strongly until the GPU reached a practical saturation point around concurrency 128. Beyond it, additional requests mostly translated into additional waiting.",

            throughput:
                "+1.9% THROUGHPUT",

            latency:
                "+42.1% LATENCY",

            ttft:
                "+59.6% TTFT",

            conclusion:
                "128 → 192 CONCURRENCY",
        },

        padding: {
            section: "03 / PADDING",

            title:
                "PADDING ISN'T FREE.",

            description:
                "Mixed-length requests made static batching increasingly inefficient. Grouping prompts by similar length dramatically reduced wasted input computation.",

            before:
                "57.8%",

            after:
                "5.3%",

            improvement:
                "+12% THROUGHPUT",
        },

        comparison: {
            section: "04 / STATIC VS CONTINUOUS",

            title:
                "THE WORKLOAD CHANGES THE WINNER.",

            description:
                "Static Transformers batching performed extremely well for homogeneous offline workloads. Under heterogeneous requests, continuous batching changed the result completely.",
        },

        measurement: {
            section: "05 / MEASUREMENT",

            title:
                "A BENCHMARK IS ONLY USEFUL IF ITS LIMITATIONS ARE VISIBLE.",

            value:
                "27.8%",

            description:
                "The vLLM chat endpoint processed more measured input tokens because of the model chat template. The comparison therefore cannot be treated as perfectly identical at the tokenized-input level.",
        },

        outcome: {
            section: "06 / OUTCOME",

            title:
                "THE FASTEST CONFIGURATION ISN'T ALWAYS THE BEST ONE.",

            paragraphs: [
                "The experiments showed that inference optimization is fundamentally workload-dependent. Static batching can dominate under ideal homogeneous conditions, while continuous batching becomes dramatically more effective as request lengths and arrival patterns become heterogeneous.",

                "The project evolved from measuring model latency into studying the complete serving system: scheduling, saturation, GPU utilization, power, energy efficiency, stability and the trade-offs between throughput and user-facing latency.",
            ],
        },
    },

};