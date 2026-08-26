import type { Language } from "../content/types";

interface LanguageSwitcherProps {
    language: Language;
    setLanguage: (language: Language) => void;
}

export default function LanguageSwitcher({
                                             language,
                                             setLanguage,
                                         }: LanguageSwitcherProps) {
    return (
        <nav
            className="language-switcher"
            aria-label="Language selector"
        >
            {(["en", "es", "fr"] as Language[]).map((lang) => (
                <button
                    key={lang}
                    type="button"
                    className={
                        language === lang
                            ? "language-switcher__button language-switcher__button--active"
                            : "language-switcher__button"
                    }
                    onClick={() => setLanguage(lang)}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </nav>
    );
}