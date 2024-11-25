import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                jetBlack: "#373738",
                jetBlackDark: "#1E1E1F",
                jetWhite: "#e6e6e6",
                contrastBlack: "#282829",
                contrastWhite: "#e6e5e6",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
