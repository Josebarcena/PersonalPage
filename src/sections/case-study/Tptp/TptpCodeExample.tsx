import { motion } from "motion/react";

import type {
    TptpCaseStudyContent,
} from "../../../content/types.ts";

interface Props {
    text: TptpCaseStudyContent;
}

const tptpCode = `fof(
    socrates_is_mortal,
    conjecture,
    mortal(socrates)
).

fof(
    humans_are_mortal,
    axiom,
    ![X] :
        (human(X) => mortal(X))
).`;

const pvsCode = `socrates: THEORY

BEGIN

human: [T -> bool]
mortal: [T -> bool]

humans_are_mortal: AXIOM
    FORALL (x: T):
        human(x) => mortal(x)

socrates_is_mortal: THEOREM
    mortal(socrates)

END socrates`;

export default function TptpCodeExample({
                                            text,
                                        }: Props) {

    return (
        <section className="code-comparison">

            <div className="case-section__index">
                {text.codeExample.section}
            </div>

            <header className="code-comparison__header">

                <h2>
                    {text.codeExample.title}
                </h2>

                <p>
                    {text.codeExample.description}
                </p>

            </header>

            <div className="code-comparison__grid">

                <motion.article
                    className="code-panel"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                >

                    <header className="code-panel__header">
                        <span>{text.codeExample.input}</span>
                        <span>TPTP</span>
                    </header>

                    <pre>
                        <code>{tptpCode}</code>
                    </pre>

                </motion.article>

                <div className="code-comparison__arrow">
                    →
                </div>

                <motion.article
                    className="code-panel"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.15 }}
                >

                    <header className="code-panel__header">
                        <span>{text.codeExample.output}</span>
                        <span>PVS</span>
                    </header>

                    <pre>
                        <code>{pvsCode}</code>
                    </pre>

                </motion.article>

            </div>

        </section>
    );
}