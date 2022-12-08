import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Footer } from '.'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Footer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const OriginProtocolFooter = Template.bind({})
OriginProtocolFooter.args = {
  webProperty: 'originprotocol'
}

export const StoryFooter = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
StoryFooter.args = {
  webProperty: 'story'
}

export const OusdFooter = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OusdFooter.args = {
  webProperty: 'ousd'
}
