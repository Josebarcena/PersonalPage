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

                <pre className="code-background__block code-background__block--top">
{`fof(axiom_01, axiom,
    ![X,Y] :
        (human(X) => mortal(X))
).

cnf(clause_02, plain,
    ~p(X) | q(X)
).

fof(conjecture_01, conjecture,
    ?[X] :
        (mortal(X) & human(X))
).`}
                </pre>


                <pre className="code-background__block code-background__block--middle">
{`lexer
    ↓
parser
    ↓
syntax_tree
    ↓
semantic_analysis
    ↓
type_validation
    ↓
source_generation`}
                </pre>


                <pre className="code-background__block code-background__block--bottom">
{`theory_01: THEORY

BEGIN

    axiom_01: AXIOM
        FORALL (x: T):
            human(x) => mortal(x)

END theory_01`}
                </pre>

            </div>
        );
    }

    return null;
}