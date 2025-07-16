import '../src/index.css'; // Import Tailwind CSS

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'gray', value: '#f8f9fa' },
        { name: 'dark', value: '#333333' },
        { name: 'green', value: '#e6f6ee' },
      ],
    },
    
    viewport: {
      viewports: {
        mobile1: {
          name: 'Small Mobile',
          styles: { width: '320px', height: '568px' },
        },
        mobile2: {
          name: 'Large Mobile',
          styles: { width: '414px', height: '896px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1200px', height: '800px' },
        },
        wide: {
          name: 'Wide Screen',
          styles: { width: '1920px', height: '1080px' },
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'focus-management',
            enabled: true,
          },
        ],
      },
    },
    
    docs: {
      toc: true,
    },
  },
};

export default preview;