import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./";
import { Button } from "../Button";
import { Typography } from "../Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Origin/Modal",
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    open: {
      control: false,
    },
    setOpen: {
      control: false,
    },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(args.open);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Click me!
      </Button>
      <Modal {...args} open={open} setOpen={setOpen}>
        {args.children}
      </Modal>
    </div>
  );
};

export const SimpleModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleModal.args = {
  closeButtonLabel: "Close",
  children: <div>Simple text</div>,
  open: false,
};

export const SimpleOpenModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleOpenModal.args = {
  closeButtonLabel: "Close",
  children: <div>Simple Open text</div>,
  open: true,
};

export const ComplexModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ComplexModal.args = {
  closeButtonLabel: "Close",
  children: (
    <div className="flex flex-col space-y-2">
      <Typography.Body2>A formatted set of React Children</Typography.Body2>
      <Button>With</Button>
      <Button>buttons</Button>
    </div>
  ),
  open: false,
};

export const ComplexOpenModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ComplexOpenModal.args = {
  closeButtonLabel: "Close",
  children: (
    <div className="flex flex-col space-y-2">
      <Typography.Body2>A formatted set of React Children</Typography.Body2>
      <Button>With</Button>
      <Button>buttons</Button>
    </div>
  ),
  open: true,
};
