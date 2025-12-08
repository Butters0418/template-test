import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '767px',
      lg: '1280px',
      xl: '1560px',
      '2xl': '1660px',
    },
    extend: {
      colors: {
        pcRed: '#db232f',
        // 左選單
        leftNavActivityText: '#fff',
        leftNavActivityTextHover: '#fffb6e',
        leftNavBg: '#f9ede0',
        leftNavText: '#440015',
        leftNavTextHover: '#fff',
        leftNavTextBgHover: '#e18f47',
        // 右選單
        rightNavBg: 'rgba(255, 225, 204, 0.75);',
        rightNavText: '#7c543f',
        rightNavActive: '#e80f00',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat'],
      notosans: ['Noto Sans TC'],
      jfopen: ['jf-openhuninn'],
      swei: ['SweiGothicCJKtc'],
    },
  },
  plugins: [lineClamp, aspectRatio],
};
