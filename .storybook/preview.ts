import type { Preview } from "@storybook/react";

import '../src/index.css';

const preview: Preview = {
  args: { theme: 'dark' },
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
