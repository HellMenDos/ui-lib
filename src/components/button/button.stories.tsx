import React from 'react';
import Button from './button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: { control: 'select', options: ['filled', 'circled', 'simple'] }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  backgroundType: 'simple',
};

export const Gradient = Template.bind({});

Gradient.args = {
  backgroundType: 'gradient',
};

