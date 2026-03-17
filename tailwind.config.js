/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark hero palette
        'dark-base': '#050d1a',
        'dark-card': '#0d1b2e',
        'dark-border': '#1e3a5f',
        // Brand accents
        'brand-blue': '#3b82f6',
        'brand-cyan': '#06b6d4',
        'brand-emerald': '#10b981',
        // Legacy
        navy: '#0f172a',
        electric: '#3b82f6',
        graylight: '#f8fafc',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 6s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { opacity: '0.4', transform: 'scale(0.95)' },
          '100%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.3)',
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
}
