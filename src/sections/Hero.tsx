import {
    m,
    useTransform,
} from "motion/react";

import { useRef } from "react";

import type { SiteContent } from "../content/types";

import HeroContact from "../components/HeroContact";
import { useSmoothScrollProgress } from "../components/SmoothScroll";

import "../styles/hero.css";


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

                <m.div
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

                        <source
                            media="(min-width: 768px)"
                            srcSet="/images/portrait.avif"
                            type="image/avif"
                        />

                        <img
                            src="/images/portrait.jpeg"
                            alt="Jose Barcena"
                            width={1536}
                            height={2048}
                            fetchPriority="high"
                            decoding="async"
                        />

                    </picture>
                </m.div>


                <m.header
                    className="hero__header"
                    style={{
                        opacity: chromeOpacity,
                    }}
                >
                    <div className="hero__top-left">
                        <span>JOSE BARCENA</span>

                        <button
                            type="button"
                            className="hero__index-button"
                            onClick={openMenu}
                        >
                            INDEX +
                        </button>

                    </div>
                </m.header>


                <m.div
                    className="hero__content"
                    style={{
                        opacity: contentOpacity,
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

                </m.div>


                <m.footer
                    className="hero__footer"
                    style={{
                        opacity: chromeOpacity,
                    }}
                >
                    <span>{content.hero.location}</span>
                    <span className="hero__scroll">{content.hero.scroll}</span>
                    <span>2026</span>

                </m.footer>

            </div>
        </section>
    );
}