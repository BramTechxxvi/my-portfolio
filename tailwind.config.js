/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// @layer utilities {
//   @keyframes blink {
//     0%, 100% { opacity: 1; }
//     50% { opacity: 0; }
//   }

//   .after\\:animate-blink::after {
//     animation: blink 1s step-start infinite;
//   }
// }