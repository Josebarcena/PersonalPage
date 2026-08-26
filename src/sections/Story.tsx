import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";

import { useRef } from "react";

import type { SiteContent } from "../content/types";


interface StoryProps {
    content: SiteContent;
}


export default function Story({ content }: StoryProps) {
    const storyRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: storyRef,
        offset: ["start start", "end end"],
    });

    const backgroundOpacity = useTransform(
        scrollYProgress,
        [0, 0.10, 0.30, 0.44, 0.54, 0.88, 1],
        [0.15, 0.62, 0.40, 0.20, 0.42, 0.36, 0.32]
    );

    const backgroundScale = useTransform(
        scrollYProgress,
        [0, 1],
        [1.08, 1]
    );

    const indexOpacity = useTransform(
        scrollYProgress,
        [0, 0.35],
        [0, 1]
    );

    const locationOpacity = useTransform(
        scrollYProgress,
        [0, 0.08, 0.20, 0.30],
        [0, 1, 1, 0]
    );

    const locationY = useTransform(
        scrollYProgress,
        [0, 0.30],
        [80, -80]
    );

    const textOpacity = useTransform(
        scrollYProgress,
        [0.05, 0.12, 0.20, 0.30],
        [0, 1, 1, 0]
    );

    const textY = useTransform(
        scrollYProgress,
        [0.05, 0.30],
        [50, -50]
    );

    const curiosityOpacity = useTransform(
        scrollYProgress,
        [0.18, 0.24, 0.38, 0.44],
        [0, 1, 1, 0]
    );

    const curiosityY = useTransform(
        scrollYProgress,
        [0.18, 0.44],
        [80, -80]
    );

    const biographyOpacity = useTransform(
        scrollYProgress,
        [0.48, 0.54, 0.88, 0.94],
        [0, 1, 1, 0]
    );

    const biographyY = useTransform(
        scrollYProgress,
        [0.48, 0.54, 0.88, 0.94],
        [60, 0, 0, -60]
    );

    return (
        <section
            id="story"
            ref={storyRef}
            className="story"
        >

            <div className="story__sticky">
                <motion.div
                    className="story__background"
                    style={{
                        opacity: backgroundOpacity,
                        scale: backgroundScale,
                    }}
                >
                    <img
                        src="/images/coruna.jpg"
                        alt=""
                        aria-hidden="true"
                    />
                </motion.div>
                <motion.span
                    className="story__index"
                    style={{
                        opacity: indexOpacity,
                    }}
                >
                    {content.story.section}
                </motion.span>
                <motion.div
                    className="story__location"
                    style={{
                        y: locationY,
                        opacity: locationOpacity,
                    }}
                >

                    <h2>
                        {content.story.place}
                    </h2>

                    <span>
                        {content.story.country}
                    </span>

                    <div className="story__coordinates">
                        43.3623° N
                        <br />
                        8.4115° W
                    </div>

                </motion.div>
                <motion.div
                    className="story__text"
                    style={{
                        y: textY,
                        opacity: textOpacity,
                    }}
                >

                    <p>{content.story.born}</p>

                    <p>{content.story.curiosity}</p>

                </motion.div>
                <div className="story__statement">

                    <motion.div
                        className="story__statement-content"
                        style={{
                            opacity: curiosityOpacity,
                            y: curiosityY,
                        }}
                    >
                        <span>{content.story.curiosityStatement.line1}</span>
                        <span>{content.story.curiosityStatement.line2}</span>
                        <span>{content.story.curiosityStatement.line3}</span>
                        <span>{content.story.curiosityStatement.line4}</span>
                    </motion.div>
                </div>
                <div className="story__biography-position">
                    <motion.div
                        className="story__biography"
                        style={{
                            opacity: biographyOpacity,
                            y: biographyY,
                        }}
                    >
                        <div className="story__biography-main">
                            <p>{content.story.biography.paragraph1}</p>
                            <p>{content.story.biography.paragraph2}</p>
                            <p>{content.story.biography.paragraph3}</p>
                            <p>{content.story.biography.paragraph4}</p>
                            <p>{content.story.biography.paragraph5}</p>
                        </div>
                        <aside className="story__biography-notes">
                            <div className="story__note">
                                <strong>ASOC</strong>
                                <span>{content.story.biography.asoc}</span>
                            </div>
                            <div className="story__note">
                                <strong>MENTOR</strong>
                                <span>{content.story.biography.mentor}</span>
                            </div>
                            <div className="story__note">
                                <strong>STUDENT COUNCIL</strong>
                                <span>{content.story.biography.council}</span>
                            </div>
                        </aside>
                        <p className="story__biography-closing">{content.story.biography.closing}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}