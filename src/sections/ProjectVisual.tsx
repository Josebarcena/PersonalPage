import {
    lazy,
    Suspense,
} from "react";

import "../styles/projects.css";

import type {ProjectVisual as ProjectVisualType,} from "../data/projects";

const TptpVisual = lazy(() => import("./projects/TptpVisual"));
const LlmInferenceVisual = lazy(() => import("./projects/LlmInferenceVisual"));
const SemanticCodeVisual = lazy(() => import("./projects/SemanticCodeVisual"));

interface ProjectVisualProps {
    visual: ProjectVisualType;
}

export default function ProjectVisual({
                                          visual,
                                      }: ProjectVisualProps) {

    let content = null;

    switch (visual) {
        case "tptp":
            content = <TptpVisual />;
            break;

        case "llm-inference":
            content = <LlmInferenceVisual />;
            break;

        case "semantic-code":
            content = <SemanticCodeVisual />;
            break;

        default:
            return null;
    }

    return (
        <Suspense fallback={null}>
            {content}
        </Suspense>
    );
}