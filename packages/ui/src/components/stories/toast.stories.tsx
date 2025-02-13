import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@workspace/ui/components/toaster";
import { ToastAction, ToastProvider } from "@workspace/ui/components/toast";
import { useToast } from "@workspace/ui/hooks/use-toast";

const meta: Meta<typeof Toaster> = {
  title: "UI/Toaster",
  component: Toaster,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "destructive"],
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast();
    return (
      <ToastProvider>
        <button
          onClick={() =>
            toast({
              title: "Success",
              description: "Your action was successful!",
              variant: "default",
            })
          }
        >
          Show Toast
        </button>
        <Toaster />
      </ToastProvider>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast();
    return (
      <ToastProvider>
        <button
          onClick={() =>
            toast({
              title: "Error",
              description: "An error occurred!",
              variant: "destructive",
            })
          }
        >
          Show Toast
        </button>
        <Toaster />
      </ToastProvider>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { toast } = useToast();
    return (
      <ToastProvider>
        <button
          onClick={() =>
            toast({
              title: "Error",
              description: "An error occurred!",
              variant: "destructive",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
          }
        >
          Show Toast
        </button>
        <Toaster />
      </ToastProvider>
    );
  },
};
