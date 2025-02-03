import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@workspace/layout/components/container"; // Adjust the path based on your project structure

const meta = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an example container.",
  },
};
