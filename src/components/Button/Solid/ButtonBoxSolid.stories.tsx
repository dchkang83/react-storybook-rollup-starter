import type { Meta, StoryObj } from '@storybook/react';

import { ButtonBoxSolid } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ButtonBoxSolid> = {
  title: 'Components/Button/SolidButton',
  component: ButtonBoxSolid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ButtonBoxSolid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button1231',
    size: 'large',
    type: 'primary',
    state: 'enabled',
    error: false,
    // onClick: () => {
    //   alert('Primary test');
    // },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    size: 'large',
    type: 'secondary',
    state: 'enabled',
    error: false,
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Button',
    size: 'large',
    type: 'tertiary',
    state: 'enabled',
    error: false,
  },
};
