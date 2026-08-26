import { Link } from "react-router-dom";

import TptpVisual from "../../projects/TptpVisual.tsx";

import type {
    Language,
    TptpCaseStudyContent,
} from "../../../content/types.ts";

interface TptpHeroProps {
    text: TptpCaseStudyContent;
    language: Language;
    setLanguage: (language: Language) => void;
}

export default function TptpHero({
    text,
    language,
    setLanguage,
}: TptpHeroProps) {

    return (
        <section className="case-hero">

            <header className="case-hero__header">

                <Link
                    to="/"
                    className="case-hero__back"
                >
                    ← {text.back}
                </Link>

                <div className="case-hero__top-right">

                    <span>
                        {text.hero.category}
                    </span>

                    <nav className="language-selector">

                        {(["en", "es", "fr"] as Language[]).map(
                            (lang) => (
                                <button
                                    key={lang}
                                    className={
                                        language === lang
                                            ? "language-selector__button language-selector__button--active"
                                            : "language-selector__button"
                                    }
                                    onClick={() => setLanguage(lang)}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            )
                        )}

                    </nav>

                </div>

            </header>

            <div className="case-hero__intro">

                <span className="case-hero__eyebrow">
                    {text.hero.eyebrow}
                </span>

                <h1>
                    TPTP
                    <span>→</span>
                    PVS
                </h1>

            </div>

            <div className="case-hero__description">

                <span className="case-hero__context">
                    {text.hero.context}
                </span>

                <p>
                    {text.hero.description}
                </p>

            </div>

            <div className="case-hero__visual">
                <TptpVisual />
            </div>

            <footer className="case-hero__footer">

                <span>
                    C / C++ · FLEX / BISON
                </span>

                <span>
                    {text.hero.scroll} ↓
                </span>

                <span>
                    01 / 05
                </span>

            </footer>

        </section>
    );
}