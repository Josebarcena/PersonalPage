import { createPortal } from "react-dom";
import { motion } from "motion/react";

import {
    useRef,
    type ReactNode,
    type RefObject,
    type WheelEvent,
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

    const endScrollCount = useRef(0);
    const wheelLocked = useRef(false);


    const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
        const element = scrollRef.current;

        if (!element) return;

        const isAtBottom =
            element.scrollTop + element.clientHeight >=
            element.scrollHeight - 2;

        // Si vuelve hacia arriba, reiniciamos el contador
        if (event.deltaY < 0) {
            endScrollCount.current = 0;
            return;
        }

        // Todavía no hemos llegado al final
        if (!isAtBottom || event.deltaY <= 0) {
            return;
        }

        // Evita que un único gesto del trackpad
        // genere muchos counts seguidos
        if (wheelLocked.current) {
            return;
        }

        wheelLocked.current = true;

        window.setTimeout(() => {
            wheelLocked.current = false;
        }, 400);

        endScrollCount.current += 1;

        if (endScrollCount.current >= 1) {
            endScrollCount.current = 0;
            onClose();
        }
    };


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
                onWheel={handleWheel}
            >
                {children}
            </div>
        </motion.div>,

        document.body
    );
}