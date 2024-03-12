import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import { DarkModeProvider } from "../src/utils";
import { BrowserRouter } from "react-router-dom";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            disable: true,
            grid: { disable: true },
        },
        darkMode: {
            stylePreview: true,
            classTarget: "body",
            darkClass: "ui-dark-mode",
            lightClass: "ui-light-mode",
            dark: themes.dark,
            light: themes.light,
        },
    },
    decorators: [
        function _DarkModeWrapper(renderStory) {
            const darkMode = useDarkMode();

            return (
                <DarkModeProvider darkMode={darkMode}>
                    {renderStory()}
                </DarkModeProvider>
            );
        },
        function _RouterWrapper(renderStory) {
            return <BrowserRouter>{renderStory()}</BrowserRouter>;
        },
    ],
};

export default preview;
