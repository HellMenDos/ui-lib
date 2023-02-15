import React from 'react';
import {ButtonV2, ButtonV2Props} from './buttonV2';

export default {
    title: 'Example/ButtonV2',
    component: ButtonV2,
};

const Template = (args: ButtonV2Props) => <ButtonV2 {...args}>Button</ButtonV2>;

export const Default = Template.bind({});

Default.args = {
    variant: 'primary',
};

