import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hover: {
      control: 'boolean',
      description: 'Enable hover effects',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

// Default story
export const Default = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600 mb-4">
          This is a simple card with some content inside.
        </p>
        <Button variant="primary">Action</Button>
      </div>
    ),
  },
};

// With hover effects
export const WithHover = {
  args: {
    hover: true,
    children: (
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">Hoverable Card</h3>
        <p className="text-gray-600">
          This card has hover effects enabled. Try hovering over it!
        </p>
      </div>
    ),
  },
};

// Content variations
export const SimpleContent = {
  args: {
    children: (
      <div className="p-4">
        <p className="text-gray-600">Simple card with minimal content.</p>
      </div>
    ),
  },
};

export const RichContent = {
  args: {
    children: (
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-web-green-500 to-web-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500 text-sm">Software Engineer</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          Passionate about creating amazing user experiences with modern web technologies.
        </p>
        <div className="flex gap-2">
          <Button variant="primary" size="sm">Follow</Button>
          <Button variant="outline" size="sm">Message</Button>
        </div>
      </div>
    ),
  },
};

// Feature card example
export const FeatureCard = {
  render: () => (
    <Card hover className="max-w-sm">
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-web-green-100 to-web-green-200 rounded-xl flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🚀</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">Fast Performance</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Lightning fast loading times for better user experience and improved SEO rankings.
        </p>
        <Button variant="outline" size="sm" className="w-full">Learn More</Button>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Feature card with icon, title, description, and action button.',
      },
    },
  },
};

// Product card example
export const ProductCard = {
  render: () => (
    <Card hover className="max-w-sm">
      <div className="aspect-video bg-gradient-to-br from-web-green-100 to-web-green-200 rounded-t-xl flex items-center justify-center">
        <span className="text-4xl">📱</span>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">Premium App</h3>
          <span className="bg-web-green-100 text-web-green-700 text-xs px-2 py-1 rounded-full">New</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          A modern mobile application with cutting-edge features and beautiful design.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">$29</span>
          <Button variant="primary" size="sm">Add to Cart</Button>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Product card with image, title, price, and action button.',
      },
    },
  },
};

// Stats card example
export const StatsCard = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-web-green-600">1,234</div>
        <div className="text-sm text-gray-500">Users</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">567</div>
        <div className="text-sm text-gray-500">Orders</div>
      </Card>
      <Card className="p-4 text-center">
        <div className="text-2xl font-bold text-purple-600">89%</div>
        <div className="text-sm text-gray-500">Satisfaction</div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Statistics cards showing key metrics.',
      },
    },
  },
};

// All card variations
export const AllVariations = {
  render: () => (
    <div className="grid gap-6 max-w-4xl">
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h4 className="font-semibold mb-2">Basic Card</h4>
          <p className="text-gray-600 text-sm">Simple card without hover effects.</p>
        </Card>
        <Card hover className="p-4">
          <h4 className="font-semibold mb-2">Hover Card</h4>
          <p className="text-gray-600 text-sm">Card with hover effects enabled.</p>
        </Card>
      </div>
      
      <Card className="p-6">
        <h4 className="font-semibold mb-2">Form Card</h4>
        <div className="space-y-3">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <Button variant="primary" size="sm">Submit</Button>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various card implementations showing different use cases.',
      },
    },
  },
};
