import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070816',
        panel: '#0e1124',
        line: 'rgba(255,255,255,0.09)',
        accent: '#6d7cff',
        neon: '#8b5cf6',
        cyan: '#4cc9f0',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(76, 201, 240, 0.18)',
        card: '0 18px 70px rgba(7, 8, 22, 0.6)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        noise:
          'radial-gradient(circle at 20% 20%, rgba(109,124,255,0.18), transparent 0 30%), radial-gradient(circle at 80% 0%, rgba(139,92,246,0.18), transparent 0 24%), radial-gradient(circle at 50% 100%, rgba(76,201,240,0.12), transparent 0 26%)',
      },
      animation: {
        float: 'float 14s ease-in-out infinite',
        pulseSoft: 'pulseSoft 10s ease-in-out infinite',
        gridShift: 'gridShift 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -16px, 0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        gridShift: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(40px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

