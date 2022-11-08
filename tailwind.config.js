module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
    },
    extend: {
      height: {
        '128': '32rem',
      },
      backgroundImage: {
        'slice1': "url('/src/assets/Slider/bcSlice1.png')",
        'slice2': "url('/src/assets/Slider/bcSlice2.png')",
        'slice3': "url('/src/assets/Slider/bcSlice3.png')",
        'slice4': "url('/src/assets/Slider/bcSlice4.png')",
        'slice5': "url('/src/assets/Slider/bcSlice5.png')",
        'slice6': "url('/src/assets/Slider/bcSlice6.png')",
        'slice7': "url('/src/assets/Slider/bcSlice7.png')",
        'slice8': "url('/src/assets/Slider/bcSlice8.png')",
        'slice9': "url('/src/assets/Slider/bcSlice9.png')",
        'slice10': "url('/src/assets/Slider/bcSlice10.png')",
        'homeBg': "url('/src/assets/homeBg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}