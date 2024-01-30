// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomeTemplate } from '../components/templates';
import { useDarkModeContext } from '../utils';

export function App() {
    const { darkMode } = useDarkModeContext();

    return (
        <div className={darkMode ? 'ui-dark-mode' : ''}>
            <Routes>
                <Route path="/" element={<HomeTemplate />} />
                <Route path="/bio" element={<HomeTemplate />} />
                <Route path="/contact" element={<HomeTemplate />} />
                {/*<Route*/}
                {/*    path="/page-2"*/}
                {/*    element={*/}
                {/*        <div>*/}
                {/*            <Link to="/">*/}
                {/*                Click here to go back to root page.*/}
                {/*            </Link>*/}
                {/*        </div>*/}
                {/*    }*/}
                {/*/>*/}
            </Routes>
            {/* END: routes */}
        </div>
    );
}

export default App;
