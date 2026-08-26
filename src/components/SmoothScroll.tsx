import {
    useScroll,
    useSpring,
    type MotionValue,
    type UseScrollOptions,
} from "motion/react";

import type { RefObject } from "react";


interface UseSmoothScrollProgressOptions {
    target: RefObject<HTMLElement | null>;
    container?: RefObject<HTMLElement | null>;

    offset?: UseScrollOptions["offset"];

    stiffness?: number;
    damping?: number;
    mass?: number;
}


export function useSmoothScrollProgress({
                                            target,
                                            container,
                                            offset = ["start start", "end end"],
                                            stiffness = 400,
                                            damping = 50,
                                            mass = 0.1,
                                        }: UseSmoothScrollProgressOptions): MotionValue<number> {

    const { scrollYProgress } = useScroll({
        target,
        container,
        offset,
    });

    return useSpring(scrollYProgress, {
        stiffness,
        damping,
        mass,
    });
}