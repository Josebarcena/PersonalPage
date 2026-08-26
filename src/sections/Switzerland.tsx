import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";

import { useRef } from "react";

import type { SiteContent } from "../content/types";


interface SwitzerlandProps {
    content: SiteContent;
}


export default function Switzerland({
                                        content,
                                    }: SwitzerlandProps) {

    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const backgroundOpacity = useTransform(
        scrollYProgress,
        [0, 0.06, 0.90, 1],
        [1, 1, 1, 0.65]
    );

    const backgroundScale = useTransform(
        scrollYProgress,
        [0, 1],
        [1.08, 1]
    );

    const locationOpacity = useTransform(
        scrollYProgress,
        [0, 0.08, 0.24, 0.32],
        [0, 1, 1, 0]
    );

    const locationY = useTransform(
        scrollYProgress,
        [0, 0.32],
        [80, -80]
    );

    const statementOpacity = useTransform(
        scrollYProgress,
        [0.28, 0.36, 0.48, 0.56],
        [0, 1, 1, 0]
    );

    const statementY = useTransform(
        scrollYProgress,
        [0.28, 0.56],
        [70, -70]
    );

    const textOpacity = useTransform(
        scrollYProgress,
        [0.52, 0.60, 0.82, 0.90],
        [0, 1, 1, 0]
    );

    const textY = useTransform(
        scrollYProgress,
        [0.52, 0.90],
        [60, -60]
    );

    const closingOpacity = useTransform(
        scrollYProgress,
        [0.78, 0.84, 0.96, 1],
        [0, 1, 1, 1]
    );

    return (
        <section
            ref={sectionRef}
            className="switzerland"
        >

            <div className="switzerland__sticky">
                <motion.div
                    className="switzerland__background"
                    style={{
                        opacity: backgroundOpacity,
                        scale: backgroundScale,
                    }}
                >
                    <img
                        src="/images/suisse.jpg"
                        alt=""
                        aria-hidden="true"
                    />
                </motion.div>

                <span className="switzerland__index">
                    {content.switzerland.section}
                </span>

                <motion.div
                    className="switzerland__location"
                    style={{
                        opacity: locationOpacity,
                        y: locationY,
                    }}
                >
                    <h2>{content.switzerland.place}</h2>
                        <span>{content.switzerland.country}</span>
                </motion.div>

                <div className="switzerland__statement-position">
                    <motion.div
                        className="switzerland__statement"
                        style={{
                            opacity: statementOpacity,
                            y: statementY,
                        }}
                    >
                        <span>{content.switzerland.statement.line1}</span>
                        <span>{content.switzerland.statement.line2}</span>
                    </motion.div>

                </div>

                <div className="switzerland__text-position">
                    <motion.div
                        className="switzerland__text"
                        style={{
                            opacity: textOpacity,
                            y: textY,
                        }}
                    >
                        <p>{content.switzerland.paragraph1}</p>
                        <p>{content.switzerland.paragraph2}</p>
                        <p>{content.switzerland.paragraph3}</p>
                    </motion.div>

                </div>

                <motion.div
                    className="switzerland__closing"
                    style={{
                        opacity: closingOpacity,
                    }}
                >
                    {content.switzerland.closing}
                </motion.div>
            </div>
        </section>
    );
}