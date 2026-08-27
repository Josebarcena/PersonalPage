import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TptpProject from "./pages/TptpProject";
import LlmInferenceProject
    from "./pages/LlmInferenceProject";

import { en } from "./content/en";
import { es } from "./content/es";
import { fr } from "./content/fr";

import type { Language, SiteContent } from "./content/types";


const content: Record<Language, SiteContent> = {
    en,
    es,
    fr,
};


function App() {

    const [language, setLanguage] =
        useState<Language>("en");

    const text: SiteContent = content[language];

    return (
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
    );
}

export default App;