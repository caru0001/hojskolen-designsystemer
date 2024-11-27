/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        50: "#FFE5EA",
        100: "#FFCCD5",
        200: "#FF9EAE",
        300: "#FF6B84",
        400: "#FF3859",
        500: "#FF0933",
        600: "#D10023",
        700: "#9E001A",
        800: "#6B0012",
        900: "#330009",
      },
      blue: {
        50: "#E2F5F9",
        100: "#C0EAF1",
        200: "#86D6E4",
        300: "#47C1D7",
        400: "#279BB0",
        500: "#196572",
        600: "#14515C",
        700: "#0F3B43",
        800: "#0A292E",
        900: "#051215",
      },
      yellow: {
        50: "#FFFCE7",
        100: "#FEF8D1",
        200: "#FDF1A4",
        300: "#FCEA7B",
        400: "#FBE35B",
        500: "#FFDF00",
        600: "#C8B13A",
        700: "#968529",
        800: "#645818",
        900: "#322C08",
      },
      neutral: {
        50: "#F8F8F8",
        100: "#DEDCD8",
        200: "#BBB7AF",
        300: "#9B9488",
        400: "#746E62",
        500: "#4D4941",
        600: "#3D3A33",
        700: "#2F2D28",
        800: "#1E1D1A",
        900: "#11100E",
      },
      white: "#fff",
      black: "#000",
    },

    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
      "4xl": "128px",
      "5xl": "144px",
      "6xl": "160px",
      "7xl": "192px",
      "8xl": "224px",
      "9xl": "424px",
    },

    /* Tilføj din egen farvepalette nedenfor */
    // colors: {
    //     transparent: 'transparent',
    //     current: 'currentColor',
    //     'farvenavn': {
    //         50: '#hexkode',
    //         100: '#hexkode',
    //         200: '#hexkode',
    //         300: '#hexkode',
    //         400: '#hexkode',
    //         500: '#hexkode',
    //         600: '#hexkode',
    //         700: '#hexkode',
    //         800: '#hexkode',
    //         900: '#hexkode',
    //     },
    //     'white': '#fff',
    //     'black': '#000',
    // },

    /* Tilføj din egen spacing nedenfor */
    // spacing: {
    //     'm': '40px',
    // },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    // fontFamily: {
    //     sans: ['Prompt', 'sans-serif'],
    //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
    // },

    /* Tilføj dit typografiske hierarki herunder */
    // fontSize: {
    //     base: ['1rem', { lineHeight: '1.5rem' }],
    //     large: ['2.5rem', { lineHeight: '3.75rem' }],
    //   },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    //   fontWeight: {
    //     regular: '400',
    //   },

    /* Borders - borderstørrelser herunder */
    // borderWidth: {
    //     DEFAULT: '1px',
    //     0: '0px',
    //     2: '2px',
    // },

    /* Border radius størrelser herunder */
    // borderRadius: {
    //     DEFAULT: '1.25rem',
    //     none: '0px',
    // },

    /* Box shadows herunder */
    // boxShadow: {
    //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
    // },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
