/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': `radial-gradient(circle, rgb(0, 0, 0), rgb(19, 19, 19)), repeating-radial-gradient(circle, rgb(0, 0, 0), rgb(0, 0, 0), 26px, rgba(0, 0, 0, 0) 120px, rgba(0, 0, 0, 0) 0px)`,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
      'w-b' : '#261015',
      'b-from': '#FF630C ',
      'b-via': '#FF511E',
      'b-to': '#FE2C43',
      'c-bg' : '#131212',
      },
    },
  },
  plugins: [],
};
