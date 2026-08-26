import type {
    LlmCaseStudyContent,
} from "../../../content/types";


interface Props {
    text: LlmCaseStudyContent;
}


export default function LlmMeasurement({
                                           text,
                                       }: Props) {

    return (
        <section className="llm-measurement">

            <span className="llm-section-index">
                {text.measurement.section}
            </span>

            <div className="llm-measurement__value">
                {text.measurement.value}
            </div>

            <div className="llm-measurement__content">

                <h2>
                    {text.measurement.title}
                </h2>

                <p>
                    {text.measurement.description}
                </p>

            </div>

        </section>
    );
}