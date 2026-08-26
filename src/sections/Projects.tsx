import { motion } from "motion/react";
import { Link } from "react-router-dom";

import { projects } from "../data/projects";
import type { SiteContent } from "../content/types";

import CodeBackground from "../components/CodeBackground";
import ProjectVisual from "./ProjectVisual";

interface ProjectsProps {
    content: SiteContent;
}

export default function Projects({
                                     content,
                                 }: ProjectsProps) {

    return (
        <section
            id="work"
            className="projects"
        >

            {/* =====================================================
                SECTION HEADER
               ===================================================== */}

            <header className="projects__header">

                <span className="projects__index">
                    {content.work.section}
                </span>

                <h2 className="projects__heading">
                    {content.work.title}
                </h2>

            </header>


            {/* =====================================================
                PROJECT LIST
               ===================================================== */}

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

                            {/* =====================================
                                DECORATIVE BACKGROUND
                               ===================================== */}

                            {project.id === "tptp-pvs" && (
                                <CodeBackground variant="tptp" />
                            )}


                            {/* =====================================
                                PROJECT META
                               ===================================== */}

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


                            {/* =====================================
                                PROJECT CONTENT
                               ===================================== */}

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


                                {/* TPTP-specific technical areas */}

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


                            {/* =====================================
                                PROJECT VISUAL
                               ===================================== */}

                            <div className="project__visual">

                                <ProjectVisual
                                    visual={project.visual}
                                />

                            </div>


                            {/* =====================================
                                PROJECT LINKS
                               ===================================== */}

                            <div className="project__links">
                                {project.route && (
                                    <Link to={project.route}>
                                        <span className="project__link-index">01</span>
                                        {content.work.explore}
                                    </Link>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="project__link-index">02</span>
                                        {content.work.source}
                                    </a>
                                )}
                            </div>

                        </motion.article>

                    );
                })}

            </div>

        </section>
    );
}