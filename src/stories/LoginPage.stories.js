import { LoginPage } from '../pages';
import { BrowserRouter } from 'react-router';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
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

// Default login page
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

// With Birthdate Form
export const WithBirthdate = {
  name: 'Login Form with Birthdate',
  parameters: {
    docs: {
      description: {
        story: 'Login page now includes a date picker for birthdate selection.',
      },
    },
  },
};
