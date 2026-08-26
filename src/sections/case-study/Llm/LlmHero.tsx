import { Link } from "react-router-dom";

import LlmInferenceVisual
    from "../../projects/LlmInferenceVisual";

import type {
    Language,
    LlmCaseStudyContent,
} from "../../../content/types";


interface Props {
    text: LlmCaseStudyContent;
    language: Language;
    setLanguage: (language: Language) => void;
}


export default function LlmHero({
                                    text,
                                    language,
                                    setLanguage,
                                }: Props) {

    return (
        <section className="llm-hero">

            <header className="llm-hero__header">

                <Link to="/">
                    ← {text.back}
                </Link>

                <div className="llm-hero__right">

                    <span>
                        {text.hero.category}
                    </span>

                    <nav className="language-selector">

                        {(["en", "es", "fr"] as Language[])
                            .map((lang) => (

                                <button
                                    key={lang}
                                    className={
                                        language === lang
                                            ? "language-selector__button language-selector__button--active"
                                            : "language-selector__button"
                                    }
                                    onClick={() =>
                                        setLanguage(lang)
                                    }
                                >
                                    {lang.toUpperCase()}
                                </button>

                            ))}

                    </nav>

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