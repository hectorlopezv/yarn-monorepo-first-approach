import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Smilef, SmilefProps} from "@libProv/smilef";

export default {
  title: 'components/Smilef',
  component: Smilef,
  argTypes: {
    sad: {
        name: 'sad',
        type: { name: 'boolean', required: true },
        defaultValue: false,
        description: 'make the face :( --> :)',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: false },
        },
        control: {
          type: 'boolean'
        }
      }
  }
} as ComponentMeta<typeof Smilef>;

const Template: ComponentStory<typeof Smilef> = (args) => <Smilef {...args} />;

export const Primary = Template.bind({});
Primary.args = {


};



export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
