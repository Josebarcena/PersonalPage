import { motion } from "motion/react";
import type { SiteContent } from "../content/types";

interface StoryGateProps {
    content: SiteContent;
    onRead: () => void;
    onSkip: () => void;
}


export default function StoryGate({content, onRead, onSkip,}: StoryGateProps) {
    return (
        <motion.aside
            className="story-gate"
            initial={{
                opacity: 0,
                x: 80,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            exit={{
                opacity: 0,
                x: 80,
            }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <div className="story-gate__inner">

                <span className="story-gate__label">
                    {content.storyGate.label}
                </span>

                <h2 className="story-gate__title">
                    {content.storyGate.title}
                </h2>

                <p className="story-gate__description">
                    {content.storyGate.description}
                </p>

                <div className="story-gate__actions">

                    <button
                        type="button"
                        className="story-gate__button"
                        onClick={onRead}
                    >
                        {content.storyGate.read}
                    </button>

                    <button
                        type="button"
                        className="story-gate__button story-gate__button--muted"
                        onClick={onSkip}
                    >
                        {content.storyGate.skip}
                    </button>

                </div>

            </div>
        </motion.aside>
    );
}