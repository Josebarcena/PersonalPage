import { createPortal } from "react-dom";
import { m } from "motion/react";
import "../styles/story-overlay.css"

import {
    useRef,
    type ReactNode,
    type RefObject,
    type WheelEvent,
    type TouchEvent,
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

    const gestureRef = useRef({
        wheelLocked: false,
        touchStartY: 0,
        touchStartedAtBottom: false,
    });

    const handleWheel = (
        event: WheelEvent<HTMLDivElement>
    ) => {
        const element = scrollRef.current;

        if (!element) return;

        const isAtBottom =
            element.scrollTop + element.clientHeight >=
            element.scrollHeight - 2;

        if (event.deltaY < 0) return;

        if (!isAtBottom || event.deltaY <= 0) {
            return;
        }

        if (gestureRef.current.wheelLocked) {
            return;
        }

        gestureRef.current.wheelLocked = true;

        window.setTimeout(() => {
            gestureRef.current.wheelLocked = false;
        }, 400);

        onClose();
    };

    const handleTouchStart = (
        event: TouchEvent<HTMLDivElement>
    ) => {
        const element = scrollRef.current;

        if (!element) return;

        gestureRef.current.touchStartY =
            event.touches[0].clientY;

        gestureRef.current.touchStartedAtBottom =
            element.scrollTop + element.clientHeight >=
            element.scrollHeight - 4;
    };

    const handleTouchEnd = (
        event: TouchEvent<HTMLDivElement>
    ) => {
        const gesture = gestureRef.current;

        if (!gesture.touchStartedAtBottom) {
            return;
        }

        const touchEndY =
            event.changedTouches[0].clientY;

        const swipeDistance =
            gesture.touchStartY - touchEndY;

        if (swipeDistance > 50) {
            onClose();
        }

        gesture.touchStartedAtBottom = false;
    };

    return createPortal(
        <m.div
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
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {children}
            </div>
        </m.div>,

        document.body
    );
}