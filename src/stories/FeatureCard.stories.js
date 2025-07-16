import { FeatureCard } from '../components';

export default {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon or emoji to display',
    },
    title: {
      control: 'text',
      description: 'Feature title',
    },
    description: {
      control: 'text',
      description: 'Feature description',
    },
  },
};

// Default story
export const Default = {
  args: {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Vite provides instant server start and lightning fast HMR',
  },
};

// Different features
export const Performance = {
  args: {
    icon: '🚀',
    title: 'High Performance',
    description: 'Optimized for speed and efficiency with modern web technologies',
  },
};

export const Security = {
  args: {
    icon: '🔒',
    title: 'Secure',
    description: 'Built with security best practices and industry standards',
  },
};

export const Responsive = {
  args: {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Works perfectly on all devices and screen sizes',
  },
};

export const Customizable = {
  args: {
    icon: '🎨',
    title: 'Highly Customizable',
    description: 'Easy to customize and extend with your own styles and components',
  },
};

// Feature showcase
export const FeatureShowcase = {
  render: () => (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
      <FeatureCard
        icon="⚡"
        title="Lightning Fast"
        description="Vite provides instant server start and lightning fast HMR for optimal development experience"
      />
      <FeatureCard
        icon="⚛️"
        title="React Power"
        description="Build interactive UIs with the power of React and modern JavaScript features"
      />
      <FeatureCard
        icon="🎨"
        title="Design System"
        description="Consistent design tokens for modern UI development and brand consistency"
      />
      <FeatureCard
        icon="🔧"
        title="Easy Setup"
        description="Get started quickly with minimal configuration and sensible defaults"
      />
      <FeatureCard
        icon="📚"
        title="Well Documented"
        description="Comprehensive documentation and examples to help you get started"
      />
      <FeatureCard
        icon="🧪"
        title="Fully Tested"
        description="Built with testing in mind with comprehensive test coverage"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple feature cards showcasing different product features.',
      },
    },
  },
};

// Different icon types
export const IconVariations = {
  render: () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <FeatureCard
        icon="🎯"
        title="Targeted"
        description="Focused solutions"
      />
      <FeatureCard
        icon="💡"
        title="Innovative"
        description="Creative approaches"
      />
      <FeatureCard
        icon="🌟"
        title="Premium"
        description="High-quality features"
      />
      <FeatureCard
        icon="🛡️"
        title="Protected"
        description="Secure environment"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different icon styles and variations for feature cards.',
      },
    },
  },
};
