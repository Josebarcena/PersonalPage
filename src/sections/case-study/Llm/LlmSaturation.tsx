import { m } from "motion/react";

import type {
    LlmCaseStudyContent,
} from "../../../content/types";


interface Props {
    text: LlmCaseStudyContent;
}


const points = [
    {
        concurrency: "32",
        throughput: "1,975",
        height: "35%",
    },
    {
        concurrency: "64",
        throughput: "—",
        height: "67%",
    },
    {
        concurrency: "128",
        throughput: "5,577",
        height: "98%",
    },
    {
        concurrency: "192",
        throughput: "+1.9%",
        height: "100%",
    },
];


export default function LlmSaturation({
                                          text,
                                      }: Props) {

    return (
        <section className="llm-saturation">

            <span className="llm-section-index">
                {text.saturation.section}
            </span>


            <header className="llm-saturation__header">

                <h2>
                    {text.saturation.title}
                </h2>

                <p>
                    {text.saturation.description}
                </p>

            </header>


            <div className="saturation-chart">

                {points.map((point, index) => (

                    <div
                        className="saturation-chart__column"
                        key={point.concurrency}
                    >

                        <span className="saturation-chart__value">
                            {point.throughput}
                        </span>


                        <div className="saturation-chart__track">

                            <m.div
                                className="saturation-chart__bar"
                                style={{
                                    height: point.height,
                                    transformOrigin: "bottom",
                                }}
                                initial={{
                                    scaleY: 0,
                                }}
                                whileInView={{
                                    scaleY: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.5,
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />

                        </div>


                        <span className="saturation-chart__concurrency">
                            {point.concurrency}
                        </span>

                    </div>

                ))}

            </div>


            <div className="saturation-tradeoff">

                <span>
                    {text.saturation.conclusion}
                </span>

                <strong>
                    {text.saturation.throughput}
                </strong>

                <strong>
                    {text.saturation.latency}
                </strong>

                <strong>
                    {text.saturation.ttft}
                </strong>

            </div>

        </section>
    );
}