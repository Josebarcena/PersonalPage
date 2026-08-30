import { m } from "motion/react";

const metrics = [
    {
        label: "CONCURRENCY",
        value: "128",
    },
    {
        label: "TTFT",
        value: "662 MS",
    },
    {
        label: "GPU POWER",
        value: "202.5 W",
    },
    {
        label: "ENERGY",
        value: "45.4 J / 1K TOK",
    },
];


export default function LlmInferenceVisual() {

    return (
        <div className="llm-visual">

            <header className="llm-visual__header">
                <span>
                    LIVE INFERENCE
                </span>

                <span className="llm-visual__status">
                    <span className="llm-visual__status-dot" />
                    RTX 4080
                </span>
            </header>


            <div className="llm-visual__primary">

                <span className="llm-visual__label">
                    OUTPUT THROUGHPUT
                </span>


                <m.div
                    className="llm-visual__throughput"
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.7,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <strong>
                        4,405
                    </strong>

                    <span>
                        TOK / S
                    </span>
                </m.div>

            </div>


            <div className="llm-visual__chart">

                <svg
                    viewBox="0 0 500 120"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <m.path
                        d="
                            M 0 105
                            C 45 104, 60 92, 95 90
                            C 135 87, 145 67, 185 65
                            C 225 62, 245 39, 290 38
                            C 335 37, 350 22, 395 21
                            C 440 20, 470 18, 500 18
                        "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{
                            pathLength: 0,
                            opacity: 0,
                        }}
                        whileInView={{
                            pathLength: 1,
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.7,
                        }}
                        transition={{
                            duration: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />
                </svg>


                <div className="llm-visual__chart-axis">
                    <span>32</span>
                    <span>64</span>
                    <span>128</span>
                    <span>192</span>
                </div>


                <span className="llm-visual__chart-caption">
                    CONCURRENCY
                </span>

            </div>


            <div className="llm-visual__metrics">

                {metrics.map((metric, index) => (

                    <m.div
                        className="llm-visual__metric"
                        key={metric.label}
                        initial={{
                            opacity: 0,
                            x: -15,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.3 + index * 0.08,
                            duration: 0.45,
                        }}
                    >
                        <span>
                            {metric.label}
                        </span>

                        <strong>
                            {metric.value}
                        </strong>
                    </m.div>

                ))}

            </div>


            <div className="llm-visual__comparison">

                <div>
                    <span>
                        TRANSFORMERS
                    </span>

                    <strong>
                        1,616
                    </strong>

                    <small>
                        TOK / S
                    </small>

                    <m.div
                        className="llm-visual__bar"
                        initial={{
                            scaleX: 0,
                        }}
                        whileInView={{
                            scaleX: 0.367,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                        }}
                    />
                </div>


                <div>
                    <span>
                        vLLM
                    </span>

                    <strong>
                        4,405
                    </strong>

                    <small>
                        TOK / S
                    </small>

                    <m.div
                        className="llm-visual__bar"
                        initial={{
                            scaleX: 0,
                        }}
                        whileInView={{
                            scaleX: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.45,
                        }}
                    />
                </div>

            </div>


            <footer className="llm-visual__footer">
                <span>
                    HETEROGENEOUS WORKLOAD
                </span>

                <span>
                    02 / LAB
                </span>
            </footer>

        </div>
    );
}