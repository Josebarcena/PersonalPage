import type {
    LlmCaseStudyContent,
} from "../../../content/types";


interface Props {
    text: LlmCaseStudyContent;
}


export default function LlmOutcome({
                                       text,
                                   }: Props) {

    return (
        <section className="llm-outcome">

            <span className="llm-section-index">
                {text.outcome.section}
            </span>

            <h2>
                {text.outcome.title}
            </h2>

            <div className="llm-outcome__bottom">

                <div className="llm-outcome__stack">

                    <span>PYTHON</span>
                    <span>PYTORCH</span>
                    <span>TRANSFORMERS</span>
                    <span>vLLM</span>
                    <span>CUDA</span>
                    <span>NVIDIA</span>
                    <span>ASYNCIO</span>
                    <span>GPU TELEMETRY</span>

                </div>


                <div className="llm-outcome__copy">

                    {text.outcome.paragraphs.map(
                        (paragraph, index) => (

                            <p key={index}>
                                {paragraph}
                            </p>

                        )
                    )}

                </div>

            </div>


            <footer>

                <a
                    href="https://github.com/Josebarcena/LLM-Inference-Performance-Lab"
                    target="_blank"
                    rel="noreferrer"
                >
                    {text.source} ↗
                </a>

            </footer>

        </section>
    );
}