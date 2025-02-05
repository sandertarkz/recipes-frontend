import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@workspace/ui/components/layout/header";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    navLinks: [
      { name: "Home", url: "/" },
      { name: "Recipes", url: "/recipes" },
      { name: "Login", url: "/login" },
      { name: "Register", url: "/register" },
    ],
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
