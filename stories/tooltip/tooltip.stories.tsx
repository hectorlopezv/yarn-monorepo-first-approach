import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {ToolTipc_SC} from '@libprov/tooltip'

export default {
  title: 'components/ToolTipc_SC',
  component: ToolTipc_SC,
  argTypes: {
    text: {
      name: 'text',
      type: {name: 'string', required: true},
      defaultValue: '',
      description: 'text for tooltip',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: ''},
      },
      control: {
        type: 'text',
      },
    },
    isMobile: {
      name: 'isMobile',
      type: {name: 'boolean', required: true},
      defaultValue: '',
      description: 'its mobile or not',
      table: {
        type: {summary: 'string'},
        defaultValue: {summary: ''},
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof ToolTipc_SC>

const Template: ComponentStory<typeof ToolTipc_SC> = args => (
  <div
    style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <ToolTipc_SC {...args} icon={'fa fa-info-circle'} />
  </div>
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
