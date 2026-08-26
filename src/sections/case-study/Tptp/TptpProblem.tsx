import { motion } from "motion/react";

import type {
    TptpCaseStudyContent,
} from "../../../content/types.ts";

interface Props {
    text: TptpCaseStudyContent;
}

export default function TptpProblem({ text }: Props) {

    return (
        <section className="case-problem">

            <div className="case-section__index">
                {text.problem.section}
            </div>

            <motion.h2
                className="case-problem__title"
                initial={{
                    opacity: 0,
                    y: 70,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {text.problem.title}
            </motion.h2>

            <div className="case-problem__bottom">

                <div className="case-problem__statement">
                    {text.problem.statement}
                </div>

                <div className="case-problem__copy">

                    {text.problem.paragraphs.map(
                        (paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        )
                    )}

                </div>

            </div>

        </section>
    );
}