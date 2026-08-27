import { createPortal } from "react-dom";
import { motion } from "motion/react";

import type {
    ReactNode,
    RefObject,
} from "react";

import LanguageSwitcher from "./LanguageSwitcher";

import type { Language } from "../content/types";


interface StoryOverlayProps {
    children: ReactNode;
    onClose: () => void;
    scrollRef: RefObject<HTMLDivElement | null>;

    language?: Language;
    setLanguage?: (language: Language) => void;
}


export default function StoryOverlay({
                                         children,
                                         onClose,
                                         scrollRef,
                                         language,
                                         setLanguage,
                                     }: StoryOverlayProps) {

    return createPortal(

        <motion.div
            className="story-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >

            {language && setLanguage && (
                <div className="story-overlay__language">
                    <LanguageSwitcher
                        language={language}
                        setLanguage={setLanguage}
                    />
                </div>
            )}

            <button
                className="story-overlay__close"
                type="button"
                onClick={onClose}
            >
                CLOSE
            </button>

            <div
                ref={scrollRef}
                className="story-overlay__scroll"
            >
                {children}
            </div>

        </motion.div>,

        document.body
    );
}