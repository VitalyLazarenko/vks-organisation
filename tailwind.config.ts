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
        'img_main': 'url("/assets/backgrounds/BG_Main.webp")',
        'img_propose': 'url("/assets/backgrounds/BG_Propose.webp")',
        'img_choose': 'url("/assets/backgrounds/BG_Choose.jpg")',
        'img_about': 'url("/assets/backgrounds/BG_About.jpg")',
        'img_contact': 'url("/assets/backgrounds/BG_Contact.webp")',
        'img_achievements': 'url("/assets/backgrounds/BG_Our_Achievements.webp")',
      },
      colors: {
        white: '#FFF',
        main_light: '#00B09B',
        main_dark: '#00605D',
        line_normal: '#00B09B',
        line_light: '#99DFD7',
      }
    },
    screens: {
      'mobileM': '375px',
      'mobileL': '480px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
  },
  plugins: [],
}
export default config
