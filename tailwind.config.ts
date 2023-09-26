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
        'img_main': 'url("/assets/backgrounds/BG_Main.png")',
        'img_main_2': 'url("/assets/backgrounds/BG_Main_2.jpg")',
        'img_main_3': 'url("/assets/backgrounds/BG_Main_3.jpg")',
        'img_propose': 'url("/assets/backgrounds/BG_Propose.png")',
        'img_choose': 'url("/assets/backgrounds/BG_Choose.jpg")',
        'img_about': 'url("/assets/backgrounds/BG_About.jpg")',
        'img_contact': 'url("/assets/backgrounds/BG_Contact.jpg")',
      },
      colors: {
        white: '#FFF',
        main_light: '#00B09B',
        main_dark: '#00605D',
        line_normal: '#00B09B',
        line_light: '#99DFD7',
      }
    },
  },
  plugins: [],
}
export default config
