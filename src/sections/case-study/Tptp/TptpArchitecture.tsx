import { m } from "motion/react";

import type {
    TptpCaseStudyContent,
} from "../../../content/types";

import "../../../styles/projects/Tptp/tptp-architecture.css";


interface Props {
    text: TptpCaseStudyContent;
}


const pipeline = [
    "TPTP SOURCE",
    "LEXICAL ANALYSIS",
    "PARSER",
    "SYNTAX STRUCTURES",
    "SYMBOL TABLE",
    "SEMANTIC ANALYSIS",
    "TYPE VALIDATION",
    "PVS GENERATOR",
    "PVS SOURCE",
];


export default function TptpArchitecture({
                                             text,
                                         }: Props) {

    return (
        <section className="case-architecture">

            <div className="case-section__index case-section__index--light">
                {text.system.section}
            </div>


            <div className="case-architecture__header">

                <h2>
                    {text.system.title}
                </h2>

                <p>
                    {text.system.description}
                </p>

            </div>


            <div className="architecture-pipeline">

                {pipeline.map((stage, index) => (

                    <m.div
                        className="architecture-pipeline__stage"
                        key={stage}
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.8,
                        }}
                        transition={{
                            duration: 0.45,
                            delay: index * 0.06,
                        }}
                    >

                        <span className="architecture-pipeline__number">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="architecture-pipeline__name">
                            {stage}
                        </span>

                        {index !== pipeline.length - 1 && (
                            <span className="architecture-pipeline__arrow">
                                ↓
                            </span>
                        )}

                    </m.div>

                ))}

            </div>

        </section>
    );
}