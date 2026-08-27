import type {
    SiteContent,
} from "../content/types";

import LlmHero
    from "../sections/case-study/Llm/LlmHero";

import LlmQuestion
    from "../sections/case-study/Llm/LlmQuestion";

import LlmSaturation
    from "../sections/case-study/Llm/LlmSaturation";

import LlmPadding
    from "../sections/case-study/Llm/LlmPadding";

import LlmComparison
    from "../sections/case-study/Llm/LlmComparison";

import LlmMeasurement
    from "../sections/case-study/Llm/LlmMeasurement";

import LlmOutcome
    from "../sections/case-study/Llm/LlmOutcome";

import "../styles/projects/llm/llm-case-study.css";


interface Props {
    content: SiteContent;
}


export default function LlmInferenceProject({
                                                content,
                                            }: Props) {

    const text = content.llmCaseStudy;

    return (
        <main className="llm-case">

            <LlmHero
                text={text}
            />

            <LlmQuestion text={text} />

            <LlmSaturation text={text} />

            <LlmPadding text={text} />

            <LlmComparison text={text} />

            <LlmMeasurement text={text} />

            <LlmOutcome text={text} />

        </main>
    );
}