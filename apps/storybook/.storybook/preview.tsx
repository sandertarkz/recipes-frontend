import type { Preview } from "@storybook/react";
import "@workspace/ui/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => {
      return (
        <div
          className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
