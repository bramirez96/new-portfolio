// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeProvider } from '../src/utils';

const preview: Preview = {
    parameters: {
        backgrounds: {
            disable: true,
            grid: { disable: true },
        },
        darkMode: {
            stylePreview: true,
            classTarget: 'body',
            darkClass: 'ui-dark-mode',
            lightClass: 'ui-light-mode',
            dark: themes.dark,
            light: themes.dark,
        },
    },

    decorators: [
        function _StorybookDocContainer(renderStory) {
            const darkMode = useDarkMode();

            return (
                <DarkModeProvider darkMode={darkMode}>
                    {renderStory()}
                </DarkModeProvider>
            );
        },
        function _StorybookRouter(renderStory) {
            return <BrowserRouter>{renderStory()}</BrowserRouter>;
        },
    ],
};

export default preview;
