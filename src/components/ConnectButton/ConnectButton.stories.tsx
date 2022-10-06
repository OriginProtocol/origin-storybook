import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConnectButton } from '.';
import { ConnectClient } from './ConnectClient';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/ConnectButton',
  component: ConnectButton,
  subcomponents: {
    ConnectClient
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    startOpen: {
      table: {
        disable: true
      }
    }
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
  startOpen: false
};

export const OpenConnectButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OpenConnectButton.args = {
  startOpen: true
};
