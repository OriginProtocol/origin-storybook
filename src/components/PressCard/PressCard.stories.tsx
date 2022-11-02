import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "next/image";

import { PressCard } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Origin/PressCard",
  component: PressCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PressCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PressCard> = (args) => (
  <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 gap-10 max-w-screen-xl">
    <PressCard {...args} />
    <PressCard {...args} />
    <PressCard {...args} />
    <PressCard {...args} />
    <PressCard {...args} />
  </div>
);

export const PressKit = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PressKit.args = {
  title: "Origin Protocol Press Kit",
  img: (
    <Image
      src="https://placekeanu.com/381/192"
      alt="keanu banner"
      width="400"
      height="200"
    />
  ),
  body: "7,777 Lucky Duckies have left the pond and are getting into mischief!",
  linkText: "Download SVG",
  linkHref: "https://google.com",
  linkText2: "Download PNG",
  linkHref2: "https://google.com",
};
