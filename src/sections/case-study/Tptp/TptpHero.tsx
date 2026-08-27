import TptpVisual from "../../projects/TptpVisual.tsx";

import type {
    TptpCaseStudyContent,
} from "../../../content/types.ts";


interface TptpHeroProps {
    text: TptpCaseStudyContent;
}


export default function TptpHero({
                                     text,
                                 }: TptpHeroProps) {

    return (
        <section className="case-hero">

            <header className="case-hero__header">
                <div className="case-hero__top-right">

                    <span>
                        {text.hero.category}
                    </span>

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