import type { Meta, StoryFn } from "@storybook/react";
import { PaginationControl } from "@workspace/ui/components/pagination";
import { useState } from "react";

const meta: Meta<typeof PaginationControl> = {
  title: "Components/PaginationControl",
  component: PaginationControl,
  argTypes: {
    totalPages: { control: "number" },
    currentPage: { control: "number" },
  },
};

export default meta;

const Template: StoryFn<typeof PaginationControl> = (args) => {
  const [page, setPage] = useState(args.currentPage);
  return (
    <PaginationControl
      {...args}
      currentPage={page}
      onPageChange={(newPage) => {
        setPage(newPage);
      }}
    />
  );
};

// Default Story
export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
};

// Story with current page in the middle
export const MiddlePage = Template.bind({});
MiddlePage.args = {
  totalPages: 20,
  currentPage: 10,
};

// Story with last page active
export const LastPage = Template.bind({});
LastPage.args = {
  totalPages: 15,
  currentPage: 15,
};
