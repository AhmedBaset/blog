import "@/styles/globals.css"

import { Metadata } from "next"
import { Montserrat } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Providers from "@/components/Providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
	title: {
		default: `${siteConfig.name}'s Blog`,
		template: `%s - ${siteConfig.name}'s Blog`,
	},
	description: siteConfig.bio,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
}

const inter = Montserrat({ subsets: ["latin"] })

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"grid min-h-screen grid-rows-[auto,1fr,auto] bg-white antialiased dark:bg-slate-950",
					inter.className
				)}
			>
				<Providers>
					<Header />
					{children}
					<Footer />
					<TailwindIndicator />
				</Providers>
			</body>
		</html>
	)
}
