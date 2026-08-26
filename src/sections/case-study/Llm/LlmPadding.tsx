import { motion } from "motion/react";

import type {
    LlmCaseStudyContent,
} from "../../../content/types";


interface Props {
    text: LlmCaseStudyContent;
}


const before = [
    100,
    38,
    72,
    21,
    48,
    91,
];

const after = [
    100,
    91,
    72,
    68,
    48,
    44,
];


export default function LlmPadding({
                                       text,
                                   }: Props) {

    return (
        <section className="llm-padding">

            <span className="llm-section-index">
                {text.padding.section}
            </span>


            <header className="llm-padding__header">

                <h2>
                    {text.padding.title}
                </h2>

                <p>
                    {text.padding.description}
                </p>

            </header>


            <div className="padding-comparison">

                <div className="padding-demo">

                    <header>
                        <span>MIXED LENGTH</span>

                        <strong>
                            {text.padding.before}
                        </strong>
                    </header>

                    <div className="padding-demo__requests">

                        {before.map((width, index) => (

                            <div
                                className="padding-request"
                                key={index}
                            >
                                <motion.span
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{
                                        width: `${width}%`,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.06,
                                    }}
                                />
                            </div>

                        ))}

                    </div>

                    <span className="padding-demo__label">
                        INPUT PADDING
                    </span>

                </div>


                <div className="padding-comparison__arrow">
                    →
                </div>


                <div className="padding-demo">

                    <header>
                        <span>LENGTH BUCKETING</span>

                        <strong>
                            {text.padding.after}
                        </strong>
                    </header>

                    <div className="padding-demo__requests">

                        {after.map((width, index) => (

                            <div
                                className="padding-request"
                                key={index}
                            >
                                <motion.span
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{
                                        width: `${width}%`,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay:
                                            0.3 +
                                            index * 0.06,
                                    }}
                                />
                            </div>

                        ))}

                    </div>

                    <span className="padding-demo__improvement">
                        {text.padding.improvement}
                    </span>

                </div>

            </div>

        </section>
    );
}