import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "motion/react";

import App from "./App.tsx";

import "./styles/global.css";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <LazyMotion features={domAnimation}>
                <ScrollToTop />
                <App />
            </LazyMotion>
        </BrowserRouter>
    </StrictMode>,
);