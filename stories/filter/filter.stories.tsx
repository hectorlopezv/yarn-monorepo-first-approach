import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {FilterSelect} from '@libprov/filter'

export default {
  title: 'components/FilterSelect',
  component: FilterSelect,
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
} as ComponentMeta<typeof FilterSelect>

const Template: ComponentStory<typeof FilterSelect> = args => (
  <FilterSelect {...args} />
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
