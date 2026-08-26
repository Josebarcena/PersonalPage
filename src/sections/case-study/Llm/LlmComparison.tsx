import { motion } from "motion/react";

import type {
    LlmCaseStudyContent,
} from "../../../content/types";


interface Props {
    text: LlmCaseStudyContent;
}


const rows = [
    {
        label: "OUTPUT THROUGHPUT",
        transformers: "1,616 TOK/S",
        vllm: "4,405 TOK/S",
    },
    {
        label: "WORKLOAD COMPLETION",
        transformers: "30.41 S",
        vllm: "11.16 S",
    },
    {
        label: "GPU POWER",
        transformers: "252.6 W",
        vllm: "202.5 W",
    },
    {
        label: "ENERGY / 1K TOKENS",
        transformers: "156.5 J",
        vllm: "~45.4 J",
    },
];


export default function LlmComparison({
                                          text,
                                      }: Props) {

    return (
        <section className="llm-comparison">

            <span className="llm-section-index">
                {text.comparison.section}
            </span>


            <header className="llm-comparison__header">

                <h2>
                    {text.comparison.title}
                </h2>

                <p>
                    {text.comparison.description}
                </p>

            </header>


            <motion.div
                className="llm-comparison__result"
                initial={{
                    opacity: 0,
                    scale: 0.9,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.6,
                }}
                transition={{
                    duration: 0.8,
                }}
            >
                2.73×
            </motion.div>


            <div className="backend-comparison">

                <header className="backend-comparison__header">

                    <span />

                    <strong>
                        TRANSFORMERS
                    </strong>

                    <strong>
                        vLLM
                    </strong>

                </header>


                {rows.map((row) => (

                    <div
                        className="backend-comparison__row"
                        key={row.label}
                    >

                        <span>
                            {row.label}
                        </span>

                        <strong>
                            {row.transformers}
                        </strong>

                        <strong>
                            {row.vllm}
                        </strong>

                    </div>

                ))}

            </div>

        </section>
    );
}