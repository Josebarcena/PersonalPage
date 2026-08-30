import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    AnimatePresence,
    motion,
} from "motion/react";

import { projects } from "../data/projects";
import type {  SiteContent,
    Language,} from "../content/types";

import CodeBackground from "../components/CodeBackground";
import StoryOverlay from "../components/StoryOverlay";

import ProjectVisual from "./ProjectVisual";

import LlmInferenceProject from "../pages/LlmInferenceProject";
import TptpProject from "../pages/TptpProject";

import "../styles/projects.css"
import "../styles/projects/project-responsive.css"

interface ProjectsProps {
    content: SiteContent;
    language: Language;
    setLanguage: (language: Language) => void;
}


export default function Projects({
                                     content,
                                     language,
                                     setLanguage,
                                 }: ProjectsProps) {

    const [openProject, setOpenProject] =
        useState<string | null>(null);

    const overlayScrollRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!openProject) {
            return;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow =
                previousOverflow;
        };

    }, [openProject]);
    const renderProjectStory = () => {

        switch (openProject) {

            case "llm-inference":
                return (
                    <LlmInferenceProject
                        content={content}
                    />
                );

            case "tptp-pvs":
                return (
                    <TptpProject
                        content={content}
                    />
                );

            default:
                return null;
        }
    };


    return (
        <>
            <section
                id="work"
                className="projects"
            >
                <header className="projects__header">

                    <span className="projects__index">
                        {content.work.section}
                    </span>

                    <h2 className="projects__heading">
                        {content.work.title}
                    </h2>

                </header>
                <div className="projects__list">

                    {projects.map((project) => {

                        const text =
                            content.work.projects[project.id];

                        return (

                            <motion.article
                                key={project.id}
                                className={`project project--${project.id}`}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.12,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {project.id === "tptp-pvs" && (
                                    <CodeBackground variant="tptp" />
                                )}
                                <div className="project__meta">

                                    <span className="project__number">
                                        {project.number}
                                    </span>

                                    <div className="project__tags">

                                        {project.tags.map((tag) => (
                                            <span key={tag}>
                                                {tag}
                                            </span>
                                        ))}

                                    </div>

                                </div>
                                <div className="project__content">

                                    <span className="project__eyebrow">
                                        {text.eyebrow}
                                    </span>

                                    <h3 className="project__title">
                                        {text.title}
                                    </h3>

                                    <p className="project__description">
                                        {text.description}
                                    </p>


                                    {text.detail && (
                                        <p className="project__detail">
                                            {text.detail}
                                        </p>
                                    )}


                                    {project.id === "tptp-pvs" && (

                                        <div className="project__details">

                                            <span>PARSING</span>
                                            <span>SEMANTIC ANALYSIS</span>
                                            <span>TYPE VALIDATION</span>
                                            <span>ERROR RECOVERY</span>
                                            <span>CODE GENERATION</span>

                                        </div>

                                    )}


                                    {text.closing && (
                                        <p className="project__closing">
                                            {text.closing}
                                        </p>
                                    )}

                                </div>
                                <div className="project__visual">

                                    <ProjectVisual
                                        visual={project.visual}
                                    />

                                </div>
                                <div className="project__links">

                                    {project.route && (
                                        <button
                                            type="button"
                                            className="project__explore"
                                            onClick={() =>
                                                setOpenProject(project.id)
                                            }
                                        >
                                            {content.work.explore}

                                            <span className="project__link-index">
                                                {"↗\uFE0E"}
                                            </span>
                                        </button>
                                    )}


                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {content.work.source}

                                            <span className="project__link-index">
                                                {"↗\uFE0E"}
                                            </span>
                                        </a>
                                    )}

                                </div>

                            </motion.article>
                        );
                    })}

                </div>

            </section>
            <AnimatePresence>
                {openProject && (

                    <StoryOverlay
                        onClose={() =>
                            setOpenProject(null)
                        }
                        scrollRef={overlayScrollRef}
                        language={language}
                        setLanguage={setLanguage}
                    >
                        {renderProjectStory()}
                    </StoryOverlay>

                )}
            </AnimatePresence>
        </>
    );
}