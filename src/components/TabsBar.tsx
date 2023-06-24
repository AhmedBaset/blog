"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { Button } from "@shadcn/button"

function TabsBar() {
	const pathname = usePathname()

	return siteConfig.navLinks.map(({ name, href, Icon }) => (
		<Button
			key={href}
			variant="ghost"
			asChild
			className={`rounded-none ${
				pathname === href
					? "border-b-4 border-slate-700/50 dark:border-white/50"
					: ""
			}`}
		>
			<Link href={href}>{name}</Link>
		</Button>
	))
}

export default TabsBar
