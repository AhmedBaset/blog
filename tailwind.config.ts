import typoghraphyPlugin from "@tailwindcss/typography"
import { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx}"],
	plugins: [
		require("tailwindcss-animate"),
		require("./src/lib/shadcnPlugin").shadcnPlugin,
		typoghraphyPlugin,
	],
} satisfies Config

export default config