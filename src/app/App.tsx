// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomeTemplate } from "../components/templates";
import { useDarkModeContext } from "../utils";
import { Home, LookingGlass } from "../pages";

export function App() {
    const { darkMode } = useDarkModeContext();

    return (
        <div className={darkMode ? "ui-dark-mode" : ""}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/looking-glass" element={<LookingGlass />} />
                <Route path="/bio" element={<HomeTemplate />} />
                <Route path="/contact" element={<HomeTemplate />} />
            </Routes>
        </div>
    );
}

export default App;
