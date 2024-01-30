// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: [
        '../src/components/@(lib|atoms|molecules|organisms|templates)/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        'storybook-dark-mode',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: 'apps/portfolio/vite.config.ts',
            },
        },
    },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
