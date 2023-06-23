import Link from "next/link"
import { UserPlus } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@shadcn/button"

import Logo from "./Logo"
import MobileNavMenu from "./MobileNavMenu"
import NavOptions from "./NavOptions"
import SocialLinks from "./SocialLinks"

function Header() {
	return (
		<header>
			{/* Nav */}
			<div className="flex-center justify-between">
				<Logo className="hidden md:flex" /> {/* Desktop Only */}
				<MobileNavMenu /> {/* Mobile Only */}
				<NavOptions />
			</div>
			{/* Links */}
			<div className="flex-center justify-between">
				<Logo className="flex md:hidden" /> {/* Mobile Only */}
				{/* Socials Media */}
				<SocialLinks className="md:order-2" />
				<Button className="rounded-full">
					<UserPlus /> <span>Follow</span>
				</Button>
			</div>
			{/* Tabs */}
			<div className="flex-center">
				{siteConfig.navLinks.map(({ name, href, Icon }) => (
					<Button key={href} variant="ghost" asChild>
						<Link href={href}>{name}</Link>
					</Button>
				))}
			</div>
		</header>
	)
}

export default Header
