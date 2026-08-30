import LlmInferenceVisual
    from "../../projects/LlmInferenceVisual";

import type {LlmCaseStudyContent,} from "../../../content/types";


interface Props {
    text: LlmCaseStudyContent;
}


export default function LlmHero({
                                    text,
                                }: Props) {

    return (
        <section className="llm-hero">

            <header className="llm-hero__header">
                <div className="llm-hero__right">

                    <span>
                        {text.hero.category}
                    </span>

                </div>
            </header>


            <div className="llm-hero__title">

                <span>
                    {text.hero.eyebrow}
                </span>

                <h1>
                    LLM
                    <br />
                    INFERENCE
                    <br />
                    LAB
                </h1>

            </div>


            <div className="llm-hero__copy">

                <p>
                    {text.hero.description}
                </p>

                <span>
                    {text.hero.hardware}
                </span>

            </div>


            <div className="llm-hero__visual">
                <LlmInferenceVisual />
            </div>


            <footer className="llm-hero__footer">

                <span>
                    PYTORCH / TRANSFORMERS / vLLM
                </span>

                <span>
                    {text.hero.scroll} ↓
                </span>

                <span>
                    02 / LAB
                </span>

            </footer>

        </section>
    );
}