import {
    lazy,
    Suspense,
    useEffect,
    useRef,
    useState,
} from "react";

import type {
    ProjectVisual as ProjectVisualType,
} from "../data/projects";


const TptpVisual = lazy(() => import("./projects/TptpVisual"));
const LlmInferenceVisual = lazy(() => import("./projects/LlmInferenceVisual"));
const SemanticCodeVisual = lazy(() => import("./projects/SemanticCodeVisual"));

interface ProjectVisualProps {visual: ProjectVisualType;}

export default function ProjectVisual({
                                          visual,
                                      }: ProjectVisualProps) {

    const containerRef =
        useRef<HTMLDivElement>(null);

    const [shouldLoad, setShouldLoad] =
        useState(false);


    useEffect(() => {

        const element = containerRef.current;

        if (!element) {
            return;
        }

        const observer =
            new IntersectionObserver(
                ([entry]) => {

                    if (entry.isIntersecting) {
                        setShouldLoad(true);
                        observer.disconnect();
                    }

                },
                {
                    rootMargin: "300px 0px",
                }
            );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };

    }, []);


    const renderVisual = () => {

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
    };


    return (
        <div
            ref={containerRef}
            className="project-visual-loader"
        >
            {shouldLoad && (
                <Suspense fallback={null}>
                    {renderVisual()}
                </Suspense>
            )}
        </div>
    );
}