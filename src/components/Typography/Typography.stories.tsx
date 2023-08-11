/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryFn } from '@storybook/react'

import { GradientText, Typography } from '.'
import { GradientTextProps } from './GradientText'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Typography>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Typography> = (args) => (
  <div>
    <Typography.H1 {...args} children="Typography.H1" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 72px / 4.5rem, lineHeight: 85px / 5.3125rem, fontWeight: 700,
      fontFamily: 'Saelic'
    </div>
    <br />
    <Typography.H2 {...args}>
      Typography.H2 with{' '}
      <GradientText webProperty="originprotocol" text="Gradient Text" />
    </Typography.H2>
    <div className="text-xs opacity-50 mt-2">
      fontSize: 64px / 4rem, lineHeight: 80px / 5rem, fontWeight: 500,
      fontFamily: 'Saelic'
    </div>
    <br />
    <Typography.H3 {...args}>
      Typography.H3 with{' '}
      <GradientText webProperty="ousd" text="Gradient Text" />
    </Typography.H3>
    <div className="text-xs opacity-50 mt-2">
      fontSize: 56px / 3.5rem, lineHeight: 64px / 4rem, fontWeight: 500,
      fontFamily: 'Saelic'
    </div>
    <br />
    <Typography.H4 {...args}>
      Typography.H4 with{' '}
      <GradientText webProperty="story" text="Gradient Text" />
    </Typography.H4>
    <div className="text-xs opacity-50 mt-2">
      fontSize: 48px / 3rem, lineHeight: 64px / 4rem, fontWeight: 500,
      fontFamily: 'Saelic'
    </div>
    <br />
    <Typography.H5 {...args} children="Typography.H5" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 40px / 2.5rem, lineHeight: 48px / 3rem, fontWeight: 500,
      fontFamily: 'Saelic'
    </div>
    <br />
    <Typography.H6 {...args} children="Typography.H6" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 32px / 2rem, lineHeight: 36px / 2.25rem, fontWeight: 500,
      fontFamily: 'Saelic'
    </div>
    <br />
    <Typography.H7 {...args} children="Typography.H7" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 24px / 1.5rem, lineHeight: 24px / 1.5rem, fontWeight: 500,
      fontFamily: 'Saelic'
    </div>
    <br />
    <Typography.Body {...args} children="Typography.Body" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 20px / 1.25rem, lineHeight: 28px / 1.75rem, fontWeight: 400,
      fontFamily: 'Inter'
    </div>
    <br />
    <Typography.Body2 {...args} children="Typography.Body2" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 16px / 1rem, lineHeight: 24px / 1.5rem, fontWeight: 400,
      fontFamily: 'Inter'
    </div>
    <br />
    <Typography.Title {...args} children="Typography.Title" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 16px / 1rem, lineHeight: 24px / 1.5rem, fontWeight: 700,
      fontFamily: 'Inter'
    </div>
    <br />
    <Typography.Title2 {...args} children="Typography.Title2" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 12px / 1rem, lineHeight: 16px / 1rem, fontWeight: 700,
      fontFamily: 'Inter'
    </div>
    <br />
    <Typography.Caption {...args} children="Typography.Caption" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 14px / 0.875rem, lineHeight: 20px / 1.25rem, fontWeight: 400,
      fontFamily: 'Inter', opacity: 0.75
    </div>
    <br />
    <Typography.Caption2 {...args} children="Typography.Caption2" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 12px / 0.75rem, lineHeight: 16px / 1rem, fontWeight: 400,
      fontFamily: 'Inter', opacity: 0.75
    </div>
    <br />
    <Typography.Label {...args} children="Typography.Label" />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 14px / 0.875rem, lineHeight: 20px / 1.25rem, fontWeight: 400,
      fontFamily: 'Inter', textTransform: 'capitalize'
    </div>
    <br />
    <Typography.Link
      {...args}
      href="https://google.com"
      children="Typography.Link"
    />
    <div className="text-xs opacity-50 mt-2">
      fontSize: 16px / 1rem, lineHeight: 24px / 1.5rem, fontWeight: 700,
      fontFamily: 'Inter', color: rgba(0, 116, 240)
    </div>
    <br />
    <Typography {...args} children="Typography base (uses body)" />
  </div>
)
export const Types = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Types.args = {
  children: 'Heading 1'
}

const GradientTextDisplay = ({
  textOptions
}: {
  textOptions: GradientTextProps[]
}) => (
  <div>
    {textOptions.map((gradientTextProps, i) => (
      <Typography.Body key={`gradient-text-${i}`}>
        Some text with <GradientText {...gradientTextProps} />
      </Typography.Body>
    ))}
  </div>
)

const textOptions: GradientTextProps[] = [
  {
    text: 'Gradient text default for originprotocol',
    webProperty: 'originprotocol'
  },
  {
    text: 'Gradient text default for ousd',
    webProperty: 'ousd'
  },
  {
    text: 'Gradient text default for story',
    webProperty: 'story'
  },
  {
    text: 'Gradient text with custom gradient colors',
    webProperty: 'story',
    gradients: ['#AFA1FF', '#F68BFF', '#FD9AC2']
  }
]

const GradientTemplate: StoryFn<typeof GradientText> = () => (
  <div>
    {textOptions.map((gradientTextProps, i) => (
      <Typography.Body key={`gradient-text-${i}`}>
        Some text with <GradientText {...gradientTextProps} />
      </Typography.Body>
    ))}
  </div>
)

export const Gradients = GradientTemplate.bind({})
Gradients.args = {
  text: "Ignore this, it's not being used",
  webProperty: 'originprotocol'
}
