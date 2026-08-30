export default function HeroContact() {
    return (
        <div className="hero-contact">

            <div className="hero-contact__header">
                <span className="hero-contact__label">
                    CONTACT
                </span>

                            <a
                                href="/cv/Jose_Barcena_CV.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="hero-contact__cv"
                            >
                                CV {"↗\uFE0E"}
                            </a>
                        </div>
            <div className="hero-contact__details">

                <a href="mailto:josebarcena98@gmail.com">
                    josebarcena98@gmail.com
                </a>



                <a href="tel:+41764373549">
                    +41 76 437 35 49
                </a>


            </div>

            <div className="hero-contact__bottom">

                <div className="hero-contact__socials">

                    {/* GitHub */}
                    <a
                        href="https://github.com/Josebarcena"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.33c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.03c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
                            />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/jose-manuel-barcena-anido"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M5.34 3.5A1.84 1.84 0 1 1 1.66 3.5a1.84 1.84 0 0 1 3.68 0ZM2 7h3.67v12H2V7Zm5.96 0h3.52v1.64h.05c.49-.93 1.69-1.91 3.48-1.91 3.72 0 4.41 2.45 4.41 5.64V19h-3.67v-5.88c0-1.4-.03-3.21-1.96-3.21-1.96 0-2.26 1.53-2.26 3.11V19H7.96V7Z"
                            />
                        </svg>
                    </a>

                </div>



            </div>

        </div>
    );
}