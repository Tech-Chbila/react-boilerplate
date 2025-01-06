import { Meta, StoryObj } from '@storybook/react';
import { AutoComplete, AutoCompleteProps } from '../auto-complete';

const meta = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
    emptyMessage: 'No options available',
    placeholder: 'Type to search...',
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    options: { control: 'object' },
    emptyMessage: { control: 'text' },
    placeholder: { control: 'text' },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<AutoCompleteProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const NoOptions: Story = {
  args: {
    options: [],
  },
};
