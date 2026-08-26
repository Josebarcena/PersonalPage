export type ProjectId =
    | "tptp-pvs"
    | "llm-inference"
    | "semantic-code";


export type ProjectVisual =
    | "tptp"
    | "llm-inference"
    | "semantic-code";


export interface Project {
    id: ProjectId;
    number: string;
    tags: string[];

    visual: ProjectVisual;

    github?: string;
    route?: string;
}


export const projects: Project[] = [

    {
        id: "tptp-pvs",

        number: "01",

        tags: [
            "C",
            "C++",
            "FLEX / BISON",
            "PARSING",
            "FORMAL METHODS",
        ],

        visual: "tptp",

        github:
            "https://github.com/Josebarcena/TPTP-PVS",

        route:
            "/work/tptp-pvs",
    },


    {
        id: "llm-inference",
        number: "02",
        tags: [
            "LLM INFERENCE",
            "PYTORCH",
            "vLLM",
            "CUDA",
            "GPU PROFILING",
            "PERFORMANCE",
        ],
        visual: "llm-inference",
        github:
            "https://github.com/Josebarcena/LLM-Inference-Performance-Lab",
        route:
            "/work/llm-inference",
    },


    {
        id: "semantic-code",

        number: "03",

        tags: [
            "PYTHON",
            "TREE-SITTER",
            "EMBEDDINGS",
            "FAISS",
            "CODE INTELLIGENCE",
        ],

        visual: "semantic-code",

        github:
            "https://github.com/Josebarcena/Semantic-Code-Intelligence-System",
    },

];