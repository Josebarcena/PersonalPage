export type Language =
    | "en"
    | "es"
    | "fr";

export type ProjectId =
    | "tptp-pvs"
    | "llm-inference"
    | "semantic-code";


export interface ProjectContent {
    eyebrow: string;
    title: string;
    description: string;

    detail?: string;
    closing?: string;
}

export interface TptpCaseStudyContent {
    back: string;
    source: string;
    nextProject: string;

    hero: {
        category: string;
        eyebrow: string;
        context: string;
        description: string;
        scroll: string;
    };

    context: {
        section: string;
        title: string;
        paragraphs: string[];
    };

    problem: {
        section: string;
        title: string;
        statement: string;
        paragraphs: string[];
    };

    system: {
        section: string;
        title: string;
        description: string;
    };

    codeExample: {
        section: string;
        title: string;
        description: string;
        input: string;
        output: string;
    };

    engineering: {
        section: string;
        title: string;

        areas: {
            number: string;
            title: string;
            description: string;
        }[];
    };

    outcome: {
        section: string;
        title: string;
        paragraphs: string[];
    };
}

export interface LlmCaseStudyContent {
    back: string;
    source: string;

    hero: {
        category: string;
        eyebrow: string;
        title: string;
        description: string;
        hardware: string;
        scroll: string;
    };

    question: {
        section: string;
        title: string;
        description: string;
        metrics: string[];
    };

    saturation: {
        section: string;
        title: string;
        description: string;

        throughput: string;
        latency: string;
        ttft: string;
        conclusion: string;
    };

    padding: {
        section: string;
        title: string;
        description: string;

        before: string;
        after: string;
        improvement: string;
    };

    comparison: {
        section: string;
        title: string;
        description: string;
    };

    measurement: {
        section: string;
        title: string;
        value: string;
        description: string;
    };

    outcome: {
        section: string;
        title: string;
        paragraphs: string[];
    };
}

export interface SiteContent {

    /* HERO */

    hero: {
        role: string;
        location: string;
        scroll: string;
    };


    story: {
        section: string;
        place: string;
        country: string;
        born: string;
        curiosity: string;

        curiosityStatement: {
            line1: string;
            line2: string;
            line3: string;
            line4: string;
        };

        biography: {
            paragraph1: string;
            paragraph2: string;
            paragraph3: string;
            paragraph4: string;
            paragraph5: string;
            closing: string;

            asoc: string;
            mentor: string;
            council: string;
        };

        selfTaught: {
            line1: string;
            line2: string;
        };

        process: {
            break: string;
            understand: string;
            fix: string;
            again: string;
        };
    };

    switzerland: {
        section: string;
        place: string;
        country: string;

        statement: {
            line1: string;
            line2: string;
        };

        paragraph1: string;
        paragraph2: string;
        paragraph3: string;

        closing: string;
    };
    menu: {
        close: string;

        story: string;
        storyDescription: string;

        work: string;
        workDescription: string;

        contact: string;
        contactDescription: string;
    };

    work: {
        section: string;
        title: string;

        explore: string;
        source: string;

        projects: Record<ProjectId, ProjectContent>;
    };

    storyGate: {
        label: string;
        title: string;
        description: string;
        read: string;
        skip: string;
    };

    tptpCaseStudy: TptpCaseStudyContent;
    llmCaseStudy: LlmCaseStudyContent;
}