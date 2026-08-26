interface CodeBackgroundProps {
    variant?: "tptp" | "code";
}

export default function CodeBackground({
                                           variant = "tptp",
                                       }: CodeBackgroundProps) {

    if (variant === "tptp") {
        return (
            <div
                className="code-background"
                aria-hidden="true"
            >

                {/* TPTP INPUT */}
                <pre className="
                    code-background__block
                    code-background__block--tptp
                ">
{`fof(socrates_mortal, axiom,
    ![X] :
        (human(X) => mortal(X))
).

fof(socrates_human, axiom,
    human(socrates)
).

fof(conjecture_01, conjecture,
    mortal(socrates)
).`}
                </pre>


                {/* PVS OUTPUT */}
                <pre className="
                    code-background__block
                    code-background__block--pvs
                ">
{`socrates_mortal: THEORY

BEGIN

    human: [T -> bool]
    mortal: [T -> bool]

    axiom_01: AXIOM
        FORALL (x: T):
            human(x) =>
            mortal(x)

    socrates_human: AXIOM
        human(socrates)

    conjecture_01: CONJECTURE
        mortal(socrates)

END socrates_mortal`}
                </pre>

            </div>
        );
    }

    return null;
}