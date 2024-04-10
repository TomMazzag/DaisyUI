/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22c55e",
                    
          "secondary": "#06b6d4",
                    
          "accent": "#273b28",
                    
          "neutral": "#6b7280",
                    
          "base-100": "#1f2937",
                    
          "info": "#0085ff",
                    
          "success": "#16a34a",
                    
          "warning": "#ec5e00",
                    
          "error": "#be0024",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

