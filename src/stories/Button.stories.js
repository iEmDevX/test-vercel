import { Button } from '../components/ui/Button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading state with spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    children: {
      control: 'text',
      description: 'Button text content',
    },
  },
};

// Default story
export const Default = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

// Variant stories
export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

// Size stories
export const Small = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Medium = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
};

export const Large = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

// State stories
export const Loading = {
  args: {
    children: 'Loading Button',
    isLoading: true,
  },
};

export const Disabled = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">Variants</h3>
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">Sizes</h3>
        <div className="flex gap-2 items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">States</h3>
        <div className="flex gap-2">
          <Button>Normal</Button>
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all button variants, sizes, and states in one place.',
      },
    },
  },
};
