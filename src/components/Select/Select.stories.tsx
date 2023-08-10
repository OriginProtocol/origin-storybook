import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from '.'
import { useState } from 'react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Origin/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => (
  <div className="w-96">
    <Select {...args} />
  </div>
)

export const SimpleSelect = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleSelect.args = {
  label: 'Simple Select',
  options: [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false }
  ]
}

export const DefaultSelect = Template.bind({})
DefaultSelect.args = {
  label: 'Select with initial value',
  initialValue: 3,
  options: [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false }
  ]
}

const ButtonTemplate: ComponentStory<typeof Select> = (args) => {
  const [val, setValue] = useState(0)
  return (
    <div className="w-96">
      <Select {...args} value={val} />
      <div className="pt-2 flex space-x-4">
        <button
          className="border rounded px-4 py-2"
          onClick={() => setValue(1)}
        >
          Set 0
        </button>
        <button
          className="border rounded px-4 py-2"
          onClick={() => setValue(2)}
        >
          Set 1
        </button>
      </div>
    </div>
  )
}

export const SetSelect = ButtonTemplate.bind({})

SetSelect.args = {
  label: 'Select with resettable value',
  initialValue: 3,
  options: [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false }
  ]
}
