import type {SiteContent } from "../content/types";
import "../styles/projects/Tptp/tptp-project.css";

import TptpHero from "../sections/case-study/Tptp/TptpHero.tsx";
import TptpProblem from "../sections/case-study/Tptp/TptpProblem.tsx";
import TptpArchitecture from "../sections/case-study/Tptp/TptpArchitecture.tsx";
import TptpCodeExample from "../sections/case-study/Tptp/TptpCodeExample.tsx";
import TptpEngineering from "../sections/case-study/Tptp/TptpEngineering.tsx";
import TptpOutcome from "../sections/case-study/Tptp/TptpOutcome.tsx";


interface TptpProjectProps {
    content: SiteContent;
}

export default function TptpProject({
                                        content,
                                    }: TptpProjectProps) {

    const text = content.tptpCaseStudy;

    return (
        <main className="case-study">

            <TptpHero
                text={text}
            />

            <TptpProblem text={text} />

            <TptpArchitecture text={text} />

            <TptpCodeExample text={text} />

            <TptpEngineering text={text} />

            <TptpOutcome text={text} />

        </main>
    );
}