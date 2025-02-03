import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Layout } from "@workspace/layout/components/layout";

const meta = {
  title: "Layout/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    header: (
      <div style={{ background: "#eee", padding: "1rem", textAlign: "center" }}>
        Header Content
      </div>
    ),
    children: (
      <div style={{ background: "#ddd", padding: "1rem", textAlign: "center" }}>
        Main Content
      </div>
    ),
    footer: (
      <div style={{ background: "#eee", padding: "1rem", textAlign: "center" }}>
        Footer Content
      </div>
    ),
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
