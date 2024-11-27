/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      /* Font Family */
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        code: ['"Source Code Pro"', "monospace"],
      },

      /* Font Weight */
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
      },

      /* Font Sizes */
      fontSize: {
        display: ["6rem", { fontWeight: "700" }], // 96px Desktop (Bold)
        displayMobile: ["3rem", { fontWeight: "700" }], // 48px Mobile (Bold)

        h1: ["3.375rem", { fontWeight: "700" }], // 54px Desktop (Bold)
        h1Mobile: ["2rem", { fontWeight: "700" }], // 32px Mobile (Bold)

        h2: ["2.5rem", { fontWeight: "700" }], // 40px Desktop (Bold)
        h2Mobile: ["1.5rem", { fontWeight: "700" }], // 24px Mobile (Bold)

        h3: ["2rem", { fontWeight: "700" }], // 32px Desktop (Bold)
        h3Mobile: ["1rem", { fontWeight: "700" }], // 16px Mobile (Bold)

        h4: ["1.25rem", { fontWeight: "700" }], // 20px Desktop (Bold)
        h4Mobile: ["0.875rem", { fontWeight: "700" }], // 14px Mobile (Bold)

        subheading: ["2rem", { fontWeight: "600" }], // 32px Desktop (Semibold)
        subheadingMobile: ["1rem", { fontWeight: "600" }], // 16px Mobile (Semibold)

        subheadingItalic: ["2rem", { fontStyle: "italic", fontWeight: "600" }], // 32px Desktop (Italic, Semibold)
        subheadingItalicMobile: ["1rem", { fontStyle: "italic", fontWeight: "600" }], // 16px Mobile (Italic, Semibold)

        bodyLarge: ["1.25rem", { fontWeight: "400" }], // 20px Desktop (Regular)
        bodyLargeMobile: ["0.875rem", { fontWeight: "400" }], // 14px Mobile (Regular)

        bodyLargeBold: ["1.25rem", { fontWeight: "700" }], // 20px Desktop (Bold)
        bodyLargeBoldMobile: ["0.875rem", { fontWeight: "700" }], // 14px Mobile (Bold)

        bodyMedium: ["1rem", { fontWeight: "400" }], // 16px Desktop (Regular)

        bodySmall: ["0.75rem", { fontWeight: "400" }], // 12px Desktop and Mobile (Regular)

        buttonLarge: ["1.25rem", { fontWeight: "600" }], // 20px Desktop (Semibold)
        buttonLargeMobile: ["0.875rem", { fontWeight: "600" }], // 14px Mobile (Semibold)

        buttonSmall: ["1rem", { fontWeight: "600" }], // 16px Desktop (Semibold)

        badge: ["0.75rem", { fontWeight: "600" }], // 12px Desktop (Semibold)

        navigationLink: ["1rem", { fontWeight: "600" }], // 16px Desktop (Semibold)
        navigationLinkMobile: ["0.875rem", { fontWeight: "600" }], // 14px Mobile (Semibold)

        link: ["1.25rem", { fontWeight: "600" }], // 20px Desktop (Semibold)
        linkMobile: ["0.875rem", { fontWeight: "600" }], // 14px Mobile (Semibold)
      },

      /* Border/Stroke */
      borderWidth: {
        small: "1px",
        medium: "2px",
        large: "4px",
      },

      /* Corner Radius */
      borderRadius: {
        large: "50px",
        medium: "30px",
      },

      /* Colors */
      colors: {
        transparent: "transparent",
        current: "currentColor",
        Black: {
          50: "#EBEBEB",
          100: "#D6D6D6",
          200: "#ABABAB",
          300: "#828282",
          400: "#595959",
          500: "#2F2F2F",
          600: "#262626",
          700: "#1C1C1C",
          800: "#121212",
          900: "#0A0A0A",
          950: "#050505",
        },

        Beige: {
          50: "#FDFDFC",
          100: "#FBFAF9",
          200: "#F8F6F2",
          300: "#F4F1EC",
          400: "#F0EDE6",
          500: "#EDE9E1",
          600: "#CCBFA6",
          700: "#AA966E",
          800: "#756645",
          900: "#3A3323",
          950: "#1D1911",
        },

        Blue: {
          50: "#F6F9F8",
          100: "#F6F9F8",
          200: "#D8E4E2",
          300: "#C2D5D3",
          400: "#ADC6C4",
          500: "#99B8B5",
          600: "#709C98",
          700: "#527874",
          800: "#38514E",
          900: "#1A2726",
          950: "#0E1514",
        },

        Orange: {
          50: "#FFF2EC",
          100: "#FFE4D7",
          200: "#FFCAAF",
          300: "#FFAF87",
          400: "#FF9560",
          500: "#FF7B39",
          600: "#F9560C",
          700: "#BB4007",
          800: "#7C2B03",
          900: "#3E1501",
          950: "#200B00",
        },

        Green: {
          500: "#2D962B",
        },
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
    },

    padding: {
      mobile: "32px",
      desktop: "180px",
    },

    boxShadow: {
      dropshadow: "0 4px 4px rgba(89, 89, 89, 0.25)",
    },

  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
