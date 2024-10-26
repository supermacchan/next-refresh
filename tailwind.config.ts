import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'killarney': {
          '50': '#f5f9f4',
          '100': '#e6f3e5',
          '200': '#cde6cc',
          '300': '#a5d2a3',
          '400': '#75b573',
          '500': '#529750',
          '600': '#3f7c3d',
          '700': '#376836',
          '800': '#2d4f2c',
          '900': '#264126',
          '950': '#102311',
        },
      },
    },
  },
  plugins: [],
};
export default config;
