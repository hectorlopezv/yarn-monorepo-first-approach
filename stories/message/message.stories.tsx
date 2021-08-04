import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {ModalMessage} from '@libprov/message'

export default {
  title: 'components/ModalMessage',
  component: ModalMessage,
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
} as ComponentMeta<typeof ModalMessage>

const Template: ComponentStory<typeof ModalMessage> = args => (
  <ModalMessage {...args} />
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
