import { useState } from "react";

import Menu from "../components/Menu";

import Hero from "../sections/Hero";
import Story from "../sections/Story";
import Switzerland from "../sections/Switzerland";
import Projects from "../sections/Projects";

import type {
    Language,
    SiteContent,
} from "../content/types";


interface HomeProps {
    content: SiteContent;
    language: Language;
    setLanguage: (language: Language) => void;
}


export default function Home({
                                 content,
                                 language,
                                 setLanguage,
                             }: HomeProps) {

    const [menuOpen, setMenuOpen] =
        useState(false);

    return (
        <main>

            <Hero
                content={content}
                language={language}
                setLanguage={setLanguage}
                openMenu={() => setMenuOpen(true)}
            />

            <Story content={content} />

            <Switzerland content={content} />

            <Projects content={content} />

            <Menu
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                content={content}
            />

        </main>
    );
}