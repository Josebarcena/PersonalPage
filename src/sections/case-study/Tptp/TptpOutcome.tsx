import { Link } from "react-router-dom";

import type {
    TptpCaseStudyContent,
} from "../../../content/types.ts";

interface Props {
    text: TptpCaseStudyContent;
}

export default function TptpOutcome({
                                        text,
                                    }: Props) {

    return (
        <section className="case-outcome">

            <div className="case-section__index">
                {text.outcome.section}
            </div>

            <h2 className="case-outcome__title">
                {text.outcome.title}
            </h2>

            <div className="case-outcome__content">

                <div className="case-outcome__copy">

                    {text.outcome.paragraphs.map(
                        (paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        )
                    )}

                </div>

                <div className="case-outcome__meta">

                    <span>C</span>
                    <span>C++</span>
                    <span>FLEX / BISON</span>
                    <span>PARSING</span>
                    <span>FORMAL METHODS</span>
                    <span>SEMANTIC ANALYSIS</span>

                </div>

            </div>

            <footer className="case-outcome__footer">

                <a
                    href="https://github.com/Josebarcena/TPTP-PVS"
                    target="_blank"
                    rel="noreferrer"
                >
                    {text.source} ↗
                </a>

                <Link to="/">
                    ← {text.back}
                </Link>

            </footer>

        </section>
    );
}