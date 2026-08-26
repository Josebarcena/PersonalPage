import { motion } from "motion/react";

export default function TptpVisual() {

    const items = [
        "TPTP INPUT",
        "LEXER / PARSER",
        "SYNTAX TREE",
        "SEMANTIC VALIDATION",
        "PVS GENERATION",
        "PVS OUTPUT",
    ];

    return (
        <div className="tptp-visual">

            <div className="tptp-visual__pipeline">

                {items.map((item, index) => (

                    <motion.div
                        key={item}
                        className="tptp-visual__step"
                        initial={{
                            opacity: 0,
                            x: -18,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.7,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.07,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <span className="tptp-visual__step-number">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="tptp-visual__step-name">
                            {item}
                        </span>

                        <span className="tptp-visual__step-arrow">
                            ↓
                        </span>

                    </motion.div>

                ))}

            </div>


            <div className="tptp-visual__footer">
                <span>TPTP</span>
                <span>TRANSLATION PIPELINE</span>
                <span>PVS</span>
            </div>

        </div>
    );
}