import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg_main': 'url("/assets/backgrounds/BG_Main Screen.png")',
        'bg_propose': 'url("/assets/backgrounds/BG_Propose.png")'
      },
      colors: {
        white: '#FFF',
        main_light: '#00B09B',
        main_dark: '#00605D',
      }
    },
  },
  plugins: [],
}
export default config
