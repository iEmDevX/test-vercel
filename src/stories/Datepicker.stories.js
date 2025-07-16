import { Datepicker } from '../src/components';

export default {
  title: 'UI/Datepicker',
  component: Datepicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'date-changed' },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field'
    },
    value: {
      control: 'date',
      description: 'Initial selected date'
    }
  },
};

export const Default = {
  args: {
    placeholder: 'Select date',
  },
};

export const WithInitialValue = {
  args: {
    value: new Date(),
    placeholder: 'Select date',
  },
};

export const CustomPlaceholder = {
  args: {
    placeholder: 'Choose your birthday',
  },
};

export const WithCallback = {
  args: {
    placeholder: 'Select date',
    onChange: (date) => {
      console.log('Selected date:', date);
    },
  },
};
