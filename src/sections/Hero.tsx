import {
    motion,
    useTransform,
} from "motion/react";

import { useRef } from "react";

import type { SiteContent } from "../content/types";
import HeroContact from "../components/HeroContact.tsx";
import { useSmoothScrollProgress } from "../components/SmoothScroll";


interface HeroProps {
    content: SiteContent;
    openMenu: () => void;
}


export default function Hero({
                                 content,
                                 openMenu,
                             }: HeroProps) {

    const heroRef = useRef<HTMLElement>(null);

    const scrollProgress = useSmoothScrollProgress({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const contentOpacity = useTransform(
        scrollProgress,
        [0, 0.20],
        [1, 0]
    );

    const portraitScale = useTransform(
        scrollProgress,
        [0, 0.45],
        [1, 1.03]
    );

    const portraitOpacity = useTransform(
        scrollProgress,
        [0.28, 0.50],
        [1, 0]
    );

    const chromeOpacity = useTransform(
        scrollProgress,
        [0, 0.16],
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
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcSet="/images/portrait-mobile.avif"
                            type="image/avif"
                        />

                        <img
                            src="/images/portrait.jpeg"
                            alt="Jose Barcena"
                            width={1200}
                            height={1600}
                            fetchPriority="high"
                            decoding="async"
                        />
                    </picture>
                </motion.div>


                <motion.header
                    className="hero__header"
                    style={{
                        opacity: chromeOpacity,
                    }}
                >
                    <div className="hero__top-left">
                        <span>JOSE BARCENA</span>

                        <button
                            className="hero__index-button"
                            onClick={openMenu}
                        >
                            INDEX +
                        </button>
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