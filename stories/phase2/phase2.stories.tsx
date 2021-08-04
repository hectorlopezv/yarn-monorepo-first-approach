import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Phase2} from '@libprov/phase2'

export default {
  title: 'components/Phase2',
  component: Phase2,
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
} as ComponentMeta<typeof Phase2>

const Template: ComponentStory<typeof Phase2> = args => <Phase2 {...args} />

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
