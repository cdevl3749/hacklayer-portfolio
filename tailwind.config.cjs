module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyberbg: '#0A0A0A',
        cybergreen: '#00FF99',
        cyberblue: '#0077FF'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    },
  },
  plugins: [],
}
