import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "next/image";

import { Card } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Origin/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 gap-10 max-w-screen-xl">
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
    <Card {...args} />
  </div>
);

export const OriginProtocolCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OriginProtocolCard.args = {
  webProperty: "originprotocol",
  title: "Lucky Ducky NFTs",
  img: (
    <Image
      src="https://placekeanu.com/381/192"
      alt="keanu banner"
      width="400"
      height="200"
    />
  ),
  thumbnail: (
    <Image
      src="https://placekeanu.com/128/128"
      alt="keanu face"
      layout="fill"
      objectFit="cover"
    />
  ),
  body: "7,777 Lucky Duckies have left the pond and are getting into mischief!",
  linkText: "Visit luckyducky.xyz/market",
  linkHref: "https://google.com",
  linkText2: "Visit luckyducky.xyz/market",
  linkHref2: "https://google.com",
};

export const OUSDCard = Template.bind({});
OUSDCard.args = {
  webProperty: "ousd",
  title: "Lucky Ducky NFTs",
  img: (
    <Image
      src="https://placekeanu.com/381/192"
      alt="keanu banner"
      width="400"
      height="200"
    />
  ),
  thumbnail: (
    <Image
      src="https://placekeanu.com/128/128"
      alt="keanu face"
      layout="fill"
      objectFit="cover"
    />
  ),
  body: "7,777 Lucky Duckies have left the pond and are getting into mischief!",
  linkText: "Visit luckyducky.xyz/market",
  linkHref: "https://google.com",
};
OUSDCard.parameters = {
  backgrounds: {
    default: "dark",
  },
};

export const StoryCard = Template.bind({});
StoryCard.args = {
  webProperty: "story",
  title: "Past lives, new beginnings by Paris Hilton",
  img: (
    <Image
      src="https://placekeanu.com/381/192"
      alt="keanu banner"
      width="400"
      height="200"
    />
  ),
  thumbnail: (
    <Image
      src="https://placekeanu.com/128/128"
      alt="keanu face"
      layout="fill"
      objectFit="cover"
    />
  ),
  body: "3LAU's sale on Origin generated $11.7M in sales and holds the world record for the most successful music NFT of all time. Global media covered the historic event, with Forbes, Business Insider, Coindesk, and many other outlets heralding in the new age of NFTs with their coverage.",
  linkText: "$11.7 million dollars sale. First music NFT on the blockchain",
  linkHref: "https://google.com",
};

export const LaunchpadCard = Template.bind({});
LaunchpadCard.args = {
  webProperty: "launchpad",
  title: "Lucky Ducky NFTs",
  img: (
    <Image
      src="https://placekeanu.com/381/192"
      alt="keanu banner"
      width="400"
      height="200"
    />
  ),
  thumbnail: (
    <Image
      src="https://placekeanu.com/128/128"
      alt="keanu face"
      layout="fill"
      objectFit="cover"
    />
  ),
  body: "7,777 Lucky Duckies have left the pond and are getting into mischief!",
  linkText: "Visit luckyducky.xyz/market",
  linkHref: "https://google.com",
};
