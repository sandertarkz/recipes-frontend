import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@workspace/ui/components/separator";

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator,
  args: {
    orientation: "horizontal",
    decorative: true,
  },
  argTypes: {
    orientation: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="flex flex-col space-y-4">
      <p>Above</p>
      <Separator {...args} />
      <p>Below</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex h-20 items-center space-x-4">
      <p>Left</p>
      <Separator {...args} />
      <p>Right</p>
    </div>
  ),
};

export const Playground: Story = {
  render: (args) => <Separator {...args} />,
};
