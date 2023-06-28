import { Barlow } from "next/font/google";

export const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const fonts = {
  body: barlow.style.fontFamily,
  heading: barlow.style.fontFamily,
  mono: barlow.style.fontFamily,
};

export const fontSize = {
  "2xs": "0.625rem",
  "xs": "0.813rem",
  "sm": "0.938rem",
  "md": "1rem",
  "lg": "1.125rem",
  "xl": "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.75rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "4rem",
};
