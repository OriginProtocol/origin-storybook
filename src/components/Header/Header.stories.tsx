import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from ".";

export default {
  title: "Origin/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const OriginProtocol = Template.bind({});
OriginProtocol.args = {
  webProperty: "originprotocol",
  mappedLinks: [
    {
      label: "Products",
      isButton: false,
      target: "_blank",
      order: 1,
      links: [
        {
          href: "https://ousd.com",
          label: "Origin Dollar",
          target: "_blank",
        },
        {
          href: "https://story.xyz",
          label: "Origin Story",
          target: "_blank",
        },
      ],
    },
    {
      isButton: false,
      label: "Company",
      target: "_self",
      href: "/company",
      order: 2,
      links: [],
    },
    {
      href: "/company",
      label: "Community",
      target: "_self",
      isButton: false,
      order: 3,
      links: [],
    },
  ],
};

export const OUSD = Template.bind({});
OUSD.args = {
  webProperty: "ousd",
  mappedLinks: [
    {
      href: "https://ousd.com",
      label: "Governance",
      isButton: false,
      order: 1,
      links: [],
    },
    {
      href: "https://ousd.com",
      label: "Docs",
      isButton: false,
      order: 3,
      links: [],
    },
    {
      href: "https://ousd.com",
      label: "FAQ",
      isButton: false,
      order: 3,
      links: [],
    },
    {
      href: "https://ousd.com",
      label: "OGV",
      isButton: false,
      order: 5,
      links: [],
    },
    {
      href: "https://google.com",
      label: "Connect Wallet",
      isButton: true,
      order: 6,
      links: [],
    },
  ],
};

OUSD.parameters = {
  backgrounds: {
    default: "dark",
  },
};

export const Story = Template.bind({});
Story.args = {
  webProperty: "story",
  mappedLinks: [
    {
      href: "https://story.xyz/blog",
      label: "Blog",
      isButton: false,
      order: 3,
      links: [],
    },
    {
      href: "https://api.originprotocol.com/dashboard",
      label: "Dashboard",
      isButton: false,
      order: 3,
      links: [],
      nofollow: true,
    },
    {
      href: "https://story.xyz/staking",
      label: "Rewards",
      isButton: false,
      order: 3,
      links: [],
      isHighlight: true,
    },
    {
      label: "OGN",
      isButton: false,
      highlightText: "Rewards",
      order: 4,
      links: [
        {
          href: "https://www.originprotocol.com/en/dashboard",
          label: "Dashboard",
          target: "_blank",
        },
        {
          href: "https://story.xyz/stake",
          label: "Rewards",
          target: "_blank",
          highlight: true,
        },
      ],
    },
    {
      href: "https://www.originprotocol.com/en/dashboard",
      label: "Buy OGN",
      isButton: true,
      order: 5,
      links: [],
      nofollow: true,
    },
    {
      href: "https://google.com",
      label: "Connect Wallet",
      isButton: true,
      order: 6,
      links: [],
    },
  ],
};
