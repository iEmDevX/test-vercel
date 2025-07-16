import { HomePage } from '../pages';
import { BrowserRouter } from 'react-router';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

// Default home page
export const Default = {};

// Mobile view
export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Tablet view
export const Tablet = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

// Desktop view
export const Desktop = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
