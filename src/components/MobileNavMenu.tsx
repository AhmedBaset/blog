import { MenuIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@shadcn/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@shadcn/sheet"

import Logo from "./Logo"
import SocialLinks from "./SocialLinks"

function MobileNavMenu() {
	return (
		<Sheet>
			<SheetTrigger className="md:hidden" asChild>
				<Button variant="outline" size="icon">
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<div className="flex-center justify-between bg-blue-500 px-2 py-8">
					<Logo />
					<SheetClose />
				</div>
				<div>
					<h2 className="font-semibold uppercase text-slate-500/70">
						BLOG MENU
					</h2>
					<ul className="flex flex-col gap-2">
						{siteConfig.navLinks.map(({ name, href, Icon }) => (
							<li key={href} className="space-x-2">
								<Icon />
								<span>{name}</span>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="font-semibold uppercase text-slate-500/70">
						BLOG SOCIAL
					</h2>
					<SocialLinks />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNavMenu
