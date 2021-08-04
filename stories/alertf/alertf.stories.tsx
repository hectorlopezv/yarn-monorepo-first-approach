import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Alertf, IAlertFProps} from '@libprov/alertf'

export default {
  title: 'components/Alertf',
  component: Alertf,
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
} as ComponentMeta<typeof Alertf>

const Template: ComponentStory<typeof Alertf> = args => <Alertf {...args} />

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
