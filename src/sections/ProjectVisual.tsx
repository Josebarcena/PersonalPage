import TptpVisual from "./projects/TptpVisual.tsx";
import LlmInferenceVisual from "./projects/LlmInferenceVisual";
import SemanticCodeVisual from "./projects/SemanticCodeVisual";

import type {
    ProjectVisual as ProjectVisualType,
} from "../data/projects";


interface ProjectVisualProps {
    visual: ProjectVisualType;
}


export default function ProjectVisual({
                                          visual,
                                      }: ProjectVisualProps) {

    switch (visual) {

        case "tptp":
            return <TptpVisual />;

        case "llm-inference":
            return <LlmInferenceVisual />;

        case "semantic-code":
            return <SemanticCodeVisual />;
            
        default:
            return null;
    }
}