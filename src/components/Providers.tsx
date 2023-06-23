"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import { TooltipProvider } from "./ui/tooltip"

interface ProviderProps {
	children: ReactNode
}

function Providers({ children }: ProviderProps) {
	return (
		<ThemeProvider enableSystem defaultTheme="system" attribute="class">
			<TooltipProvider>{children}</TooltipProvider>
		</ThemeProvider>
	)
}

export default Providers
