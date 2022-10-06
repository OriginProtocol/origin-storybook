import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConnectButton } from '.';
import { ConnectClient } from './ConnectClient';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/ConnectButton',
  component: ConnectButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof ConnectButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConnectButton> = (args) => (
  <div>
    <ConnectClient coinbaseAppName='some test app'>
      <ConnectButton {...args} />
    </ConnectClient>
  </div>
)

export const SimpleConnectButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleConnectButton.args = {
  alchemyKey: process.env.ALCHEMY_API_KEY
};
