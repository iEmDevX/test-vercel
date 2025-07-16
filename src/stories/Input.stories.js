import { Input } from '../components/ui/Input';
import { useState } from 'react';

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'HTML input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
  },
};

// Default story
export const Default = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

// Input types
export const TextInput = {
  args: {
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
  },
};

export const EmailInput = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'your.email@example.com',
  },
};

export const PasswordInput = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const NumberInput = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '25',
  },
};

// States
export const WithError = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'your.email@example.com',
    error: 'Please enter a valid email address',
  },
};

export const Required = {
  args: {
    label: 'Username',
    type: 'text',
    placeholder: 'Enter username',
    required: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Field',
    type: 'text',
    placeholder: 'This field is disabled',
    disabled: true,
  },
};

// Interactive example
export const Interactive = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
      const newValue = e.target.value;
      setValue(newValue);
      
      // Simple validation example
      if (newValue.length > 0 && newValue.length < 3) {
        setError('Must be at least 3 characters');
      } else {
        setError('');
      }
    };

    return (
      <div className="w-80">
        <Input
          label="Interactive Input"
          type="text"
          placeholder="Type to see validation..."
          value={value}
          onChange={handleChange}
          error={error}
          required
        />
        <p className="mt-2 text-sm text-gray-500">
          Current value: "{value}"
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive input with real-time validation example.',
      },
    },
  },
};

// Form example
export const FormExample = {
  render: () => (
    <div className="w-80 space-y-4">
      <Input
        label="First Name"
        type="text"
        placeholder="John"
        required
      />
      <Input
        label="Last Name"
        type="text"
        placeholder="Doe"
        required
      />
      <Input
        label="Email"
        type="email"
        placeholder="john.doe@example.com"
        required
      />
      <Input
        label="Phone (Optional)"
        type="tel"
        placeholder="+1 (555) 123-4567"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple inputs in a form layout.',
      },
    },
  },
};
