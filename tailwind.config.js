/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
        extend: {},
      },
  plugins: [require("daisyui")],
};



// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


