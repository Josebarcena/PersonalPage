import type { SiteContent } from "./types";

export const es: SiteContent = {
    hero: {
        role: "INGENIERO DE SOFTWARE",
        location: "VALAIS, SUIZA",
        scroll: "DESLIZA ↓",
    },

    story: {
        section: "01 / DONDE EMPEZÓ TODO",
        place: "A CORUÑA",
        country: "ESPAÑA",

        born:
            "Nací en A Coruña, en el noroeste de España.",

        curiosity:
            "La informática me ha despertado curiosidad desde que tengo memoria.",

        selfTaught: {
            line1: "ANTES DE SER UNA PROFESIÓN,",
            line2: "ERA ALGO QUE APRENDÍA POR MI CUENTA.",
        },

        process: {
            break: "ROMPER COSAS.",
            understand: "ENTENDER POR QUÉ.",
            fix: "ARREGLARLAS.",
            again: "VOLVER A INTENTARLO.",
        },

        curiosityStatement: {
            line1: "LA INFORMÁTICA",
            line2: "ME HA FASCINADO",
            line3: "DESDE QUE TENGO",
            line4: "MEMORIA.",
        },

        biography: {
            paragraph1:
                "Crecí en A Coruña, donde mi relación con la tecnología comenzó mucho antes de que llegase a planteármela como una profesión.",

            paragraph2:
                "La informática era, sobre todo, algo que exploraba por curiosidad. Aprendía por mi cuenta, experimentaba constantemente, rompía cosas más veces de las que probablemente debería y poco a poco descubrí que entender por qué algo había fallado solía interesarme más que conseguir simplemente que funcionase.",

            paragraph3:
                "Esa curiosidad acabó llevándome a estudiar Informática. La universidad me dio las bases que estaba buscando, pero algunas de las experiencias que más me marcaron ocurrieron fuera de las aulas.",

            paragraph4:
                "Fui uno de los impulsores de ASOC, una asociación universitaria creada por estudiantes para reunir a personas alrededor de la tecnología y de intereses comunes. También fui mentor de nuevos alumnos durante sus primeros pasos en la universidad y formé parte del Consejo de Estudiantes como representante del alumnado.",

            paragraph5:
                "Esas experiencias reforzaron algo que todavía conservo: disfruto entendiendo problemas difíciles, pero disfruto aún más trabajando junto a personas con suficiente curiosidad para cuestionarlos, compartir ideas y construir cosas juntos.",

            closing:
                "Y, con el tiempo, esa curiosidad acabaría llevándome bastante lejos de donde había empezado.",

            asoc: "COMUNIDAD UNIVERSITARIA",
            mentor: "MENTOR DE NUEVOS ALUMNOS",
            council: "REPRESENTANTE DE ESTUDIANTES",
        },
    },

    switzerland: {
        section: "02 / DONDE ESTOY AHORA",

        place: "VALAIS",
        country: "SUIZA",

        statement: {
            line1: "UN NUEVO LUGAR.",
            line2: "UNA NUEVA ETAPA.",
        },

        paragraph1:
            "Hoy vivo en Valais, Suiza. Venir aquí significó mucho más que cambiar de país; supuso adaptarme a un entorno diferente, descubrir otra cultura y comenzar una nueva etapa tanto personal como profesional.",

        paragraph2:
            "Ahora busco lo que viene después: problemas difíciles que merezca la pena entender, proyectos ambiciosos que merezca la pena construir y personas de las que pueda seguir aprendiendo. Me atraen especialmente los entornos de ingeniería donde se valora la curiosidad y existe espacio para cuestionar la solución más evidente.",

        paragraph3:
            "No me interesa construir cosas simplemente para poder enseñar otro proyecto. Lo que realmente me mantiene enganchado son los problemas que me obligan a profundizar, aprender algo que todavía no conozco y construir sistemas cuya propia complejidad haga que el proceso merezca la pena.",

        closing:
            "ESTOY PREPARADO PARA LO QUE VENGA.",
    },

    menu: {
        close: "CERRAR",

        story: "HISTORIA",
        storyDescription: "A Coruña → Valais",

        work: "PROYECTOS",
        workDescription: "Ingeniería & proyectos",

        contact: "CONTACTO",
        contactDescription: "Hablemos",
    },

    work: {
        section: "03 / PROYECTOS",

        title: "PROYECTOS.",

        explore: "VER PROYECTO",
        source: "CÓDIGO FUENTE",

        projects: {
            "tptp-pvs": {
                eyebrow: "MÉTODOS FORMALES & PROCESAMIENTO DE LENGUAJES",

                title: "TPTP → PVS",

                description:
                    "Un traductor de especificaciones formales con una arquitectura inspirada en compiladores, desarrollado en C/C++ con Flex/Bison. El sistema analiza entradas TPTP, construye una representación interna, realiza validación semántica y de tipos, gestiona errores y genera especificaciones equivalentes en PVS.",
            },

            "llm-inference": {
                eyebrow:
                    "INFERENCIA LLM / INGENIERÍA DE RENDIMIENTO",

                title:
                    "LLM INFERENCE PERFORMANCE LAB",

                description:
                    "Un laboratorio reproducible para estudiar cómo se comporta realmente la inferencia de modelos de lenguaje sobre GPU.",

                detail:
                    "El sistema mide throughput, latencia, TTFT, memoria, potencia y eficiencia energética bajo diferentes niveles de concurrencia, estrategias de batching y cargas de trabajo. Los experimentos comparan Transformers y vLLM para identificar dónde aparecen la saturación, el cómputo desperdiciado y los compromisos reales entre rendimiento y latencia.",

                closing:
                    "No es otro chatbot. Es un experimento de ingeniería de sistemas para entender qué ocurre cuando los modelos de lenguaje se enfrentan a hardware y cargas de trabajo reales.",
            },

            "semantic-code": {
                eyebrow:
                    "INTELIGENCIA DE CÓDIGO / RECUPERACIÓN SEMÁNTICA",

                title:
                    "SEMANTIC CODE INTELLIGENCE",

                description:
                    "Un sistema de recuperación consciente de la estructura del código, diseñado para buscar por significado en lugar de depender únicamente de coincidencias de texto.",

                detail:
                    "Los repositorios se analizan según el lenguaje de programación, se descomponen en unidades semánticas a nivel de funciones y clases, se transforman en embeddings y se indexan con FAISS para permitir consultas en lenguaje natural.",

                closing:
                    "Construido para herramientas de desarrollo e ingeniería de software asistida por IA, con parsing multilenguaje y análisis seguro de repositorios.",
            },
        },
    },

    tptpCaseStudy: {

        back: "JOSE BARCENA",
        source: "VER CÓDIGO",
        nextProject: "SIGUIENTE PROYECTO",

        hero: {
            category: "MÉTODOS FORMALES / 01",

            eyebrow:
                "DISEÑO DE COMPILADORES · MÉTODOS FORMALES",

            context:
                "INGENIERÍA INFORMÁTICA · TRABAJO DE FIN DE GRADO",

            description:
                "Un sistema inspirado en la arquitectura de un compilador para traducir especificaciones formales de TPTP a PVS, construido alrededor del análisis sintáctico, análisis semántico, validación y generación de código.",

            scroll: "DESLIZA",
        },

        context: {
            section: "01 / CONTEXTO",

            title:
                "UN TRADUCTOR ENTRE DOS MUNDOS FORMALES.",

            paragraphs: [
                "TPTP y PVS representan conocimiento formal de formas fundamentalmente diferentes. El proyecto nació de una pregunta práctica: ¿cómo traducir una especificación escrita para un ecosistema formal a otro sin perder la estructura y el significado que pretende expresar?",

                "Abordé el problema como un sistema de procesamiento de lenguajes, no como una colección de sustituciones de texto. El resultado fue un traductor desarrollado en C/C++ alrededor de un pipeline completo de análisis, desde el procesamiento léxico y sintáctico hasta la validación semántica y la generación de PVS.",
            ],
        },

        problem: {
            section: "02 / EL PROBLEMA",

            title:
                "TRADUCIR LA SINTAXIS ES LA PARTE FÁCIL.",

            statement:
                "SIGNIFICADO ≠ SINTAXIS",

            paragraphs: [
                "TPTP y PVS están diseñados para expresar conocimiento formal, pero no lo describen de la misma manera. Su sintaxis, sus sistemas de tipos y la representación de las construcciones lógicas son diferentes, por lo que una traducción válida no puede reducirse a transformar fragmentos de texto.",

                "Antes de generar PVS, el traductor necesita comprender qué representa la entrada TPTP. Los símbolos deben identificarse, las expresiones estructurarse, los tipos validarse y las relaciones semánticas comprobarse.",

                "Esto convirtió el proyecto en un problema mucho más cercano a la construcción de compiladores que a una conversión convencional entre formatos.",
            ],
        },

        codeExample: {
            section: "CÓDIGO / TRANSFORMACIÓN",

            title:
                "UN LENGUAJE ENTRA. OTRO SALE.",

            description:
                "El código generado es únicamente la última etapa. Antes de llegar a PVS, la especificación original ya ha sido analizada, representada internamente y validada por las etapas anteriores del pipeline.",

            input: "ENTRADA",
            output: "SALIDA",
        },

        engineering: {
            section: "04 / INGENIERÍA",

            title:
                "DISEÑADO PARA LOS ERRORES, NO SOLO PARA EL CASO IDEAL.",

            areas: [
                {
                    number: "01",
                    title: "PARSING",
                    description:
                        "Las reglas de la gramática transforman el flujo de tokens en representaciones estructuradas sobre las que puede razonar el resto del sistema.",
                },
                {
                    number: "02",
                    title: "ANÁLISIS SEMÁNTICO",
                    description:
                        "Las entradas sintácticamente válidas se comprueban frente a relaciones y restricciones que la gramática por sí sola no puede garantizar.",
                },
                {
                    number: "03",
                    title: "VALIDACIÓN DE TIPOS",
                    description:
                        "Los símbolos y expresiones se validan antes de generar código para evitar que construcciones incompatibles se propaguen silenciosamente hasta la salida.",
                },
                {
                    number: "04",
                    title: "RECUPERACIÓN DE ERRORES",
                    description:
                        "Las entradas inválidas se detectan en la etapa correspondiente y los mecanismos de recuperación conservan información útil sobre lo ocurrido.",
                },
                {
                    number: "05",
                    title: "GENERACIÓN DE CÓDIGO",
                    description:
                        "Solo las estructuras validadas alcanzan la etapa final, donde la representación interna se transforma en código PVS equivalente.",
                },
            ],
        },

        system: {
            section: "03 / EL SISTEMA",

            title:
                "DE CÓDIGO FUENTE A CÓDIGO FUENTE.",

            description:
                "Cada etapa tiene una responsabilidad definida. El análisis léxico, parsing, representación interna, validación semántica y generación permanecen separados para poder razonar sobre cada transformación de forma independiente.",
        },
        outcome: {
            section: "05 / RESULTADO",

            title:
                "MÁS QUE UN TRADUCTOR.",

            paragraphs: [
                "El sistema final traduce especificaciones formales de TPTP a PVS mediante un pipeline estructurado y validado.",

                "Más importante aún, el proyecto cambió mi forma de pensar sobre el software. Trabajar tan cerca de gramáticas, sistemas de tipos, gestión de errores y representaciones formales convirtió la corrección en algo concreto: una propiedad que debe diseñarse en cada etapa de un sistema.",
            ],
        },
    },

    llmCaseStudy: {

        back: "JOSE BARCENA",
        source: "VER CÓDIGO",

        hero: {
            category: "SISTEMAS LLM / 02",

            eyebrow:
                "INFERENCIA · RENDIMIENTO · GPU",

            title:
                "LABORATORIO DE RENDIMIENTO DE INFERENCIA LLM",

            description:
                "Un entorno reproducible para medir, analizar y optimizar la inferencia de modelos de lenguaje sobre GPUs NVIDIA. Construido para entender cómo el batching, la concurrencia, la heterogeneidad de los prompts y la configuración del runtime afectan al rendimiento real de un sistema de serving.",

            hardware:
                "RTX 4080 · QWEN 2.5 3B · FP16",

            scroll:
                "EXPLORAR EL EXPERIMENTO",
        },

        question: {
            section: "01 / LA PREGUNTA",

            title:
                "¿QUÉ OCURRE REALMENTE CUANDO UN LLM LLEGA A LA GPU?",

            description:
                "El objetivo no era construir otro chatbot. Era medir el sistema que existe debajo: cómo cambia el comportamiento de la inferencia cuando cambian la carga de trabajo, la concurrencia y la estrategia de planificación.",

            metrics: [
                "LATENCIA",
                "THROUGHPUT",
                "TTFT",
                "MEMORIA GPU",
                "POTENCIA",
                "ENERGÍA",
            ],
        },

        saturation: {
            section: "02 / SATURACIÓN",

            title:
                "MÁS CONCURRENCIA NO SIEMPRE SIGNIFICA MÁS RENDIMIENTO.",

            description:
                "El throughput aumentó con fuerza hasta que la GPU alcanzó un punto práctico de saturación alrededor de una concurrencia de 128. A partir de ahí, añadir más peticiones se tradujo principalmente en más tiempo de espera.",

            throughput:
                "+1.9% THROUGHPUT",

            latency:
                "+42.1% LATENCIA",

            ttft:
                "+59.6% TTFT",

            conclusion:
                "CONCURRENCIA 128 → 192",
        },

        padding: {
            section: "03 / PADDING",

            title:
                "EL PADDING NO ES GRATIS.",

            description:
                "Las peticiones con longitudes diferentes hicieron que el batching estático fuese cada vez menos eficiente. Agrupar prompts de longitudes similares redujo drásticamente el cómputo desperdiciado en la entrada.",

            before:
                "57.8%",

            after:
                "5.3%",

            improvement:
                "+12% THROUGHPUT",
        },

        comparison: {
            section: "04 / ESTÁTICO VS CONTINUO",

            title:
                "LA CARGA DE TRABAJO CAMBIA AL GANADOR.",

            description:
                "El batching estático con Transformers ofreció un rendimiento excelente en cargas offline homogéneas. Cuando las peticiones pasaron a tener longitudes heterogéneas, el batching continuo cambió completamente el resultado.",
        },

        measurement: {
            section: "05 / MEDICIÓN",

            title:
                "UN BENCHMARK SOLO ES ÚTIL SI SUS LIMITACIONES SON VISIBLES.",

            value:
                "27.8%",

            description:
                "El endpoint de chat de vLLM procesó más tokens de entrada medidos debido al chat template del modelo. Por tanto, la comparación no puede considerarse perfectamente idéntica a nivel de entrada tokenizada.",
        },

        outcome: {
            section: "06 / CONCLUSIONES",

            title:
                "LA CONFIGURACIÓN MÁS RÁPIDA NO SIEMPRE ES LA MEJOR.",

            paragraphs: [
                "Los experimentos mostraron que optimizar la inferencia depende fundamentalmente de la carga de trabajo. El batching estático puede dominar en condiciones homogéneas ideales, mientras que el batching continuo se vuelve mucho más efectivo cuando las longitudes y los patrones de llegada de las peticiones son heterogéneos.",

                "El proyecto evolucionó desde medir la latencia del modelo hasta estudiar el sistema completo de serving: planificación, saturación, utilización de GPU, potencia, eficiencia energética, estabilidad y los compromisos entre throughput y latencia percibida por el usuario.",
            ],
        },
    },
};