import { motion } from "motion/react";
import "../../styles/projects/semantic/semantic-code-visual.css";

const results = [
    {
        rank: "01",
        path: "src/auth/service.py",
        type: "SEMANTIC MATCH",
    },
    {
        rank: "02",
        path: "src/api/middleware.py",
        type: "SEMANTIC MATCH",
    },
    {
        rank: "03",
        path: "src/security/jwt_manager.py",
        type: "SEMANTIC MATCH",
    },
];

const pipeline = [
    "PARSE",
    "CHUNK",
    "EMBED",
    "INDEX",
    "RETRIEVE",
];

export default function SemanticCodeVisual() {

    return (
        <div className="semantic-visual">

            {/* =========================================
                HEADER
               ========================================= */}

            <header className="semantic-visual__header">

                <span>
                    SEMANTIC SEARCH
                </span>

                <span>
                    FAISS / INDEX READY
                </span>

            </header>


            {/* =========================================
                QUERY
               ========================================= */}

            <div className="semantic-visual__query">

                <span className="semantic-visual__label">
                    NATURAL LANGUAGE QUERY
                </span>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                >
                    Where is authentication implemented?
                </motion.p>

            </div>


            {/* =========================================
                PIPELINE
               ========================================= */}

            <div className="semantic-visual__pipeline">

                {pipeline.map((step, index) => (

                    <motion.div
                        key={step}
                        className="semantic-visual__pipeline-step"
                        initial={{
                            opacity: 0.2,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.15 + index * 0.12,
                            duration: 0.4,
                        }}
                    >
                        <span>
                            {String(index + 1)
                                .padStart(2, "0")}
                        </span>

                        <strong>
                            {step}
                        </strong>

                    </motion.div>

                ))}

            </div>


            {/* =========================================
                RESULTS
               ========================================= */}

            <div className="semantic-visual__results">

                <div className="semantic-visual__results-header">
                    <span>RETRIEVED CODE</span>
                    <span>RANK</span>
                </div>


                {results.map((result, index) => (

                    <motion.div
                        key={result.path}
                        className="semantic-result"
                        initial={{
                            opacity: 0,
                            x: -18,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.7,
                        }}
                        transition={{
                            duration: 0.5,
                            delay:
                                0.55 +
                                index * 0.1,
                        }}
                    >

                        <div className="semantic-result__content">

                            <span>
                                {result.path}
                            </span>

                            <strong>
                                {result.rank}
                            </strong>

                        </div>

                        <span className="semantic-result__score">
                            {result.rank}
                        </span>

                    </motion.div>

                ))}

            </div>


            {/* =========================================
                LANGUAGES
               ========================================= */}

            <div className="semantic-visual__languages">

                <span>PYTHON / AST</span>
                <span>JS · TS / TREE-SITTER</span>
                <span>JAVA / TREE-SITTER</span>
                <span>C · C++ / TREE-SITTER</span>

            </div>


            {/* =========================================
                FOOTER
               ========================================= */}

            <footer className="semantic-visual__footer">

                <span>
                    STRUCTURE → MEANING
                </span>

                <span>
                    03 / SYSTEM
                </span>

            </footer>

        </div>
    );
}