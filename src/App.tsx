import {
    lazy,
    Suspense,
    useEffect,
    useState,
} from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { en } from "./content/en";

import type {
    Language,
    SiteContent,
} from "./content/types";


const TptpProject = lazy(() =>
    import("./pages/TptpProject")
);

const LlmInferenceProject = lazy(() =>
    import("./pages/LlmInferenceProject")
);


function App() {

    const [language, setLanguage] =
        useState<Language>("en");

    const [text, setText] =
        useState<SiteContent>(en);


    useEffect(() => {

        if (language === "en") {
            setText(en);
            return;
        }

        let active = true;


        async function loadContent() {

            let nextContent: SiteContent;

            if (language === "es") {

                const { es } =
                    await import("./content/es");

                nextContent = es;

            } else {

                const { fr } =
                    await import("./content/fr");

                nextContent = fr;
            }


            if (active) {
                setText(nextContent);
            }
        }


        loadContent();


        return () => {
            active = false;
        };

    }, [language]);


    return (
        <Suspense fallback={null}>
            <Routes>

                <Route
                    path="/"
                    element={
                        <Home
                            content={text}
                            language={language}
                            setLanguage={setLanguage}
                        />
                    }
                />


                <Route
                    path="/work/tptp-pvs"
                    element={
                        <TptpProject
                            content={text}
                        />
                    }
                />


                <Route
                    path="/work/llm-inference"
                    element={
                        <LlmInferenceProject
                            content={text}
                        />
                    }
                />

            </Routes>
        </Suspense>
    );
}


export default App;