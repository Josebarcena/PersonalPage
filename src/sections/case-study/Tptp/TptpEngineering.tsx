import type {
    TptpCaseStudyContent,
} from "../../../content/types.ts";

interface Props {
    text: TptpCaseStudyContent;
}

export default function TptpEngineering({
                                            text,
                                        }: Props) {

    return (
        <section className="case-engineering">

            <div className="case-section__index">
                {text.engineering.section}
            </div>

            <h2 className="case-engineering__title">
                {text.engineering.title}
            </h2>

            <div className="engineering-grid">

                {text.engineering.areas.map((area) => (

                    <article
                        className="engineering-card"
                        key={area.number}
                    >

                        <span className="engineering-card__number">
                            {area.number}
                        </span>

                        <h3>
                            {area.title}
                        </h3>

                        <p>
                            {area.description}
                        </p>

                    </article>

                ))}

            </div>

        </section>
    );
}