import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import type { Language, SiteContent } from "../content/types";
import HeroContact from "../components/HeroContact.tsx";

interface HeroProps {
    content: SiteContent;
    language: Language;
    setLanguage: (language: Language) => void;

    openMenu: () => void;
}

export default function Hero({
                                 content,
                                 language,
                                 setLanguage,
                                 openMenu,
                             }: HeroProps) {

    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    /*
     * LEFT CONTENT
     *
     * Starts disappearing after a little scrolling.
     */
    const contentOpacity = useTransform(
        scrollYProgress,
        [0, 0.35],
        [1, 0]
    );

    const contentY = useTransform(
        scrollYProgress,
        [0, 0.4],
        [0, -80]
    );

    const portraitScale = useTransform(
        scrollYProgress,
        [0, 0.65],
        [1, 1.08]
    );

    const portraitX = useTransform(
        scrollYProgress,
        [0, 0.65],
        ["0%", "10%"]
    );

    const portraitOpacity = useTransform(
        scrollYProgress,
        [0.45, 0.8],
        [1, 0]
    );

    const chromeOpacity = useTransform(
        scrollYProgress,
        [0, 0.25],
        [1, 0]
    );

    return (
        <section
            ref={heroRef}
            className="hero"
        >

            <div className="hero__sticky">

                <motion.div
                    className="hero__portrait"
                    style={{
                        scale: portraitScale,
                        x: portraitX,
                        opacity: portraitOpacity,
                    }}
                >
                    <img
                        src="/images/portrait.jpeg"
                        alt="Jose Barcena"
                    />
                </motion.div>


                <motion.header
                    className="hero__header"
                    style={{
                        opacity: chromeOpacity,
                    }}
                >

                    <span>JOSE BARCENA</span>

                    <div className="hero__top-right">
                        <button
                            className="hero__index-button"
                            onClick={openMenu}
                        >
                            INDEX
                        </button>
                        <nav className="language-selector">

                            {(["en", "es", "fr"] as Language[]).map((lang) => (
                                <button
                                    key={lang}
                                    className={
                                        language === lang
                                            ? "language-selector__button language-selector__button--active"
                                            : "language-selector__button"
                                    }
                                    onClick={() => setLanguage(lang)}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            ))}

                        </nav>

                    </div>

                </motion.header>


                <motion.div
                    className="hero__content"
                    style={{
                        opacity: contentOpacity,
                        y: contentY,
                    }}
                >

                    <h1 className="hero__title">
                        JOSE
                        <br />
                        MANUEL
                        <br />
                        BARCENA
                    </h1>

                    <div className="hero__intro">
                        <p>
                            {content.hero.role}
                            <br />
                            {content.hero.location}
                        </p>
                    </div>

                    <HeroContact />

                </motion.div>


                <motion.footer
                    className="hero__footer"
                    style={{
                        opacity: chromeOpacity,
                    }}
                >

                    <span>
                        {content.hero.location}
                    </span>

                    <span className="hero__scroll">
                        {content.hero.scroll}
                    </span>

                    <span>2026</span>

                </motion.footer>

            </div>

        </section>
    );
}