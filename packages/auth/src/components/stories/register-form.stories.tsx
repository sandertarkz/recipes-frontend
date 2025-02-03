import type { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "@workspace/auth/components/register-form";

const meta = {
  title: "Auth/RegisterForm",
  component: RegisterForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
