import type { Language, SiteContent } from "../content/types";

import TptpHero from "../sections/case-study/Tptp/TptpHero.tsx";
import TptpProblem from "../sections/case-study/Tptp/TptpProblem.tsx";
import TptpArchitecture from "../sections/case-study/Tptp/TptpArchitecture.tsx";
import TptpCodeExample from "../sections/case-study/Tptp/TptpCodeExample.tsx";
import TptpEngineering from "../sections/case-study/Tptp/TptpEngineering.tsx";
import TptpOutcome from "../sections/case-study/Tptp/TptpOutcome.tsx";

import "../styles/case-study.css";

interface TptpProjectProps {
    content: SiteContent;
    language: Language;
    setLanguage: (language: Language) => void;
}

export default function TptpProject({
                                        content,
                                        language,
                                        setLanguage,
                                    }: TptpProjectProps) {

    const text = content.tptpCaseStudy;

    return (
        <main className="case-study">

            <TptpHero
                text={text}
                language={language}
                setLanguage={setLanguage}
            />

            <TptpProblem text={text} />

            <TptpArchitecture text={text} />

            <TptpCodeExample text={text} />

            <TptpEngineering text={text} />

            <TptpOutcome text={text} />

        </main>
    );
}