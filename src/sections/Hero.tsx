import {
    motion,
    useTransform,
} from "motion/react";

import { useRef } from "react";

import type { Language, SiteContent } from "../content/types";
import HeroContact from "../components/HeroContact.tsx";
import { useSmoothScrollProgress } from "../components/SmoothScroll";


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

    const scrollProgress = useSmoothScrollProgress({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const contentOpacity = useTransform(
        scrollProgress,
        [0, 0.30],
        [1, 0]
    );

    const portraitScale = useTransform(
        scrollProgress,
        [0, 0.65],
        [1, 1.03]
    );

    const portraitOpacity = useTransform(
        scrollProgress,
        [0.42, 0.72],
        [1, 0]
    );

    const chromeOpacity = useTransform(
        scrollProgress,
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
                        opacity: portraitOpacity,
                        willChange: "transform, opacity",
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
                        willChange: "opacity",
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
                        willChange: "opacity",
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
                        willChange: "opacity",
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