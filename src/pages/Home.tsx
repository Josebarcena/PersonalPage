import {
    lazy,
    Suspense,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    AnimatePresence,
    useMotionValueEvent,
    useScroll,
} from "motion/react";

const Menu = lazy(() => import("../components/Menu"));
const StoryGate = lazy(() => import("../components/StoryGate"));
const StoryOverlay = lazy(() => import("../components/StoryOverlay"));

import LanguageSwitcher from "../components/LanguageSwitcher";

import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

import type {
    Language,
    SiteContent,
} from "../content/types";


const Story = lazy(() => import("../sections/Story"));
const Switzerland = lazy(() => import("../sections/Switzerland"));


interface HomeProps {
    content: SiteContent;
    language: Language;
    setLanguage: (language: Language) => void;
}


export default function Home({
                                 content,
                                 language,
                                 setLanguage,
                             }: HomeProps) {

    const [menuOpen, setMenuOpen] =
        useState(false);

    const [gateOpen, setGateOpen] =
        useState(false);

    const [gateDismissed, setGateDismissed] =
        useState(() => {
            return (
                sessionStorage.getItem(
                    "storyGateDismissed"
                ) === "true"
            );
        });

    const [storyOpen, setStoryOpen] =
        useState(false);


    const gateTriggerRef =
        useRef<HTMLDivElement>(null);

    const storyScrollRef =
        useRef<HTMLDivElement>(null);


    const { scrollYProgress } = useScroll({
        target: gateTriggerRef,
        offset: ["start end", "end center"],
    });


    const dismissGate = () => {
        sessionStorage.setItem(
            "storyGateDismissed",
            "true"
        );

        setGateDismissed(true);
    };


    const openStory = () => {
        setGateOpen(false);

        dismissGate();

        setStoryOpen(true);
    };


    const skipStory = () => {
        setGateOpen(false);

        dismissGate();
    };


    const closeStory = () => {
        setStoryOpen(false);
    };

    useMotionValueEvent(
        scrollYProgress,
        "change",
        (progress) => {
            if (
                progress > 0.25 &&
                !gateDismissed &&
                !storyOpen &&
                !gateOpen
            ) {
                setGateOpen(true);
            }
        }
    );

    useEffect(() => {
        if (
            !gateOpen ||
            gateDismissed ||
            storyOpen
        ) {
            return;
        }

        const startScroll = window.scrollY;

        const handleWindowScroll = () => {
            const travelled =
                window.scrollY - startScroll;

            const dismissThreshold =
                window.innerHeight;

            if (travelled >= dismissThreshold) {
                setGateOpen(false);
                dismissGate();
            }
        };

        window.addEventListener(
            "scroll",
            handleWindowScroll,
            {
                passive: true,
            }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleWindowScroll
            );
        };
    }, [
        gateOpen,
        gateDismissed,
        storyOpen,
    ]);

    useEffect(() => {
        if (!storyOpen) {
            return;
        }

        const container =
            storyScrollRef.current;

        if (!container) {
            return;
        }

        const handleStoryScroll = () => {
            const remainingScroll =
                container.scrollHeight -
                container.scrollTop -
                container.clientHeight;

            const closeThreshold = 100;

            if (
                remainingScroll <=
                closeThreshold
            ) {
                setStoryOpen(false);
            }
        };

        container.addEventListener(
            "scroll",
            handleStoryScroll,
            {
                passive: true,
            }
        );

        return () => {
            container.removeEventListener(
                "scroll",
                handleStoryScroll
            );
        };
    }, [storyOpen]);


    return (
        <main>

            <LanguageSwitcher
                language={language}
                setLanguage={setLanguage}
            />


            <Hero
                content={content}
                openMenu={() =>
                    setMenuOpen(true)
                }
            />


            <div
                ref={gateTriggerRef}
                className="story-gate-trigger"
                aria-hidden="true"
            />


            <Projects
                content={content}
                language={language}
                setLanguage={setLanguage}
            />

            <Suspense fallback={null}>
                <AnimatePresence>
                    {gateOpen && (
                        <StoryGate
                            content={content}
                            onRead={openStory}
                            onSkip={skipStory}
                        />
                    )}
                </AnimatePresence>
            </Suspense>

            <Suspense fallback={null}>
                <AnimatePresence>
                    {storyOpen && (
                        <StoryOverlay
                            onClose={closeStory}
                            scrollRef={storyScrollRef}
                        >
                            <Suspense fallback={null}>

                                <Story
                                    content={content}
                                    scrollContainer={
                                        storyScrollRef
                                    }
                                />

                                <Switzerland
                                    content={content}
                                    scrollContainer={
                                        storyScrollRef
                                    }
                                />

                            </Suspense>
                        </StoryOverlay>
                    )}
                </AnimatePresence>
            </Suspense>

            <Suspense fallback={null}>
                {menuOpen && (
                    <Menu
                        open={menuOpen}
                        onClose={() =>
                            setMenuOpen(false)
                        }
                        onOpenStory={openStory}
                        content={content}
                    />
                )}
            </Suspense>

        </main>
    );
}