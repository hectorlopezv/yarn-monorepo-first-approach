import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Phase1} from '@libprov/phase1'

export default {
  title: 'components/Phase1',
  component: Phase1,
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
} as ComponentMeta<typeof Phase1>

const Template: ComponentStory<typeof Phase1> = args => <Phase1 {...args} />

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
