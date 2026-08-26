import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

import type { SiteContent } from "../content/types";

interface MenuProps {
    open: boolean;
    onClose: () => void;
    onOpenStory: () => void;
    content: SiteContent;
}

export default function Menu({
                                 open,
                                 onClose,
                                 onOpenStory,
                                 content,
                             }: MenuProps) {

    /*
     * Prevent the page behind the menu from scrolling.
     */
    useEffect(() => {
        if (!open) {
            return;
        }

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);


    const navigateTo = (id: string) => {
        onClose();

        window.setTimeout(() => {
            document
                .getElementById(id)
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 250);
    };


    const openStory = () => {
        onClose();

        /*
         * Let the menu start its exit animation
         * before opening the story overlay.
         */
        window.setTimeout(() => {
            onOpenStory();
        }, 250);
    };


    return (
        <AnimatePresence>

            {open && (
                <motion.div
                    className="menu"
                    initial={{
                        x: "100%",
                    }}
                    animate={{
                        x: 0,
                    }}
                    exit={{
                        x: "100%",
                    }}
                    transition={{
                        duration: 0.55,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                >

                    <header className="menu__header">

                        <span>JOSE BARCENA</span>

                        <button
                            className="menu__close"
                            type="button"
                            onClick={onClose}
                        >
                            {content.menu.close} ×
                        </button>

                    </header>


                    <nav className="menu__navigation">

                        {/* OPTIONAL STORY */}

                        <button
                            className="menu__item"
                            type="button"
                            onClick={openStory}
                        >
                            <span className="menu__number">
                                01
                            </span>

                            <span className="menu__item-content">
                                <strong>
                                    {content.menu.story}
                                </strong>

                                <small>
                                    {content.menu.storyDescription}
                                </small>
                            </span>
                        </button>


                        {/* WORK */}

                        <button
                            className="menu__item"
                            type="button"
                            onClick={() => navigateTo("work")}
                        >
                            <span className="menu__number">
                                02
                            </span>

                            <span className="menu__item-content">
                                <strong>
                                    {content.menu.work}
                                </strong>

                                <small>
                                    {content.menu.workDescription}
                                </small>
                            </span>
                        </button>

                    </nav>


                    <footer className="menu__footer">

                        <a
                            href="/Jose-Barcena-CV.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CV
                        </a>

                        <div className="menu__socials">

                            <a
                                href="https://github.com/Josebarcena"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GITHUB
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jose-manuel-barcena-anido"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LINKEDIN
                            </a>

                        </div>

                    </footer>

                </motion.div>
            )}

        </AnimatePresence>
    );
}