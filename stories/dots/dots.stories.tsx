import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {SliderTable} from '@libprov/dots'

export default {
  title: 'components/Dots',
  component: SliderTable,
  argTypes: {
    sad: {
      name: 'sad',
      type: {name: 'boolean', required: true},
      defaultValue: false,
      description: 'make the face :( --> :)',
      table: {
        type: {summary: 'boolean'},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof SliderTable>

const Template: ComponentStory<typeof SliderTable> = args => (
  <SliderTable {...args} />
)

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
