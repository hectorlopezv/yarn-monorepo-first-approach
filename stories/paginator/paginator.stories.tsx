import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Paginator} from '@libprov/paginator'

export default {
  title: 'components/Paginator',
  component: Paginator,
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
} as ComponentMeta<typeof Paginator>

const Template: ComponentStory<typeof Paginator> = args => (
  <Paginator {...args} />
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
