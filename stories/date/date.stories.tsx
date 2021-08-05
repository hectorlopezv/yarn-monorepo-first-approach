import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Date_SC} from '@libprov/date'
import moment from 'moment'
export default {
  title: 'components/Date_SC',
  component: Date_SC,
  argTypes: {
    sad: {
      name: 'label',
      type: {name: 'string', required: true},
      defaultValue: false,
      description: 'change the label',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: 'hello im label'},
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Date_SC>

const Template: ComponentStory<typeof Date_SC> = args => {
  const [date, setdate] = useState(null)
  const dateHandler = value => {
    setdate(moment(value))
  }
  return (
    <Date_SC
      minDateSelector={null}
      maxDateSelector={null}
      disabled={false}
      Date={date}
      handleChange={dateHandler}
      {...args}
    />
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
