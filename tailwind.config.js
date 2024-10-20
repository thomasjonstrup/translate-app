/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/hero_img.jpg')",
      },
      fontFamily: {
        "dm-sans": "'DM Sans Variable', sans-serif"
      },
      colors: {
        black: '#040711',
        'black-100': '#394150',
        blue: '#3662E3',
        grey: '#CDD5E0',
        'border-grey': '#4D5562',
        'dark-grey': '#212936cc',
        'light-blue': '#7CA9F3',
        white: '#F9FAFB'
      }
    },
  },
  plugins: [],
}
