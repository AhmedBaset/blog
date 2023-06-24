import { UserPlus } from "lucide-react"

import { Button } from "@shadcn/button"

import Logo from "./Logo"
import MobileNavMenu from "./MobileNavMenu"
import NavOptions from "./NavOptions"
import SocialLinks from "./SocialLinks"
import TabsBar from "./TabsBar"

function Header() {
	return (
		<header className="container rounded-b-xl bg-slate-100 shadow-md shadow-slate-500/20 ring-1 ring-slate-500/20 dark:bg-slate-900">
			{/* Nav */}
			<div className="flex-center justify-between gap-4 py-4">
				<Logo className="hidden md:flex" /> {/* Desktop Only */}
				<MobileNavMenu /> {/* Mobile Only */}
				<NavOptions />
			</div>
			{/* Links */}
			<div className="flex-center flex-col justify-between gap-4 py-4 md:flex-row">
				<Logo className="flex md:hidden" /> {/* Mobile Only */}
				{/* Socials Media */}
				<SocialLinks className="md:order-2" />
				<Button className="space-x-2 rounded-full">
					<UserPlus />
					<span>Follow</span>
				</Button>
			</div>
			<div className="flex-center px-4">
				<TabsBar />
			</div>
		</header>
	)
}

export default Header
