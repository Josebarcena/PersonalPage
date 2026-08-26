import type {
    LlmCaseStudyContent,
} from "../../../content/types";


interface Props {
    text: LlmCaseStudyContent;
}


export default function LlmQuestion({
                                        text,
                                    }: Props) {

    return (
        <section className="llm-question">

            <span className="llm-section-index">
                {text.question.section}
            </span>

            <h2>
                {text.question.title}
            </h2>

            <div className="llm-question__bottom">

                <div className="llm-question__metrics">

                    {text.question.metrics.map(
                        (metric, index) => (

                            <span key={metric}>
                                {String(index + 1)
                                    .padStart(2, "0")}

                                {" / "}

                                {metric}
                            </span>

                        )
                    )}

                </div>

                <p>
                    {text.question.description}
                </p>

            </div>

        </section>
    );
}