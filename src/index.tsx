// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { DarkModeProvider } from './utils';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <DarkModeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </DarkModeProvider>
    </StrictMode>
);
