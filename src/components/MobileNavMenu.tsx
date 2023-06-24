import { MenuIcon, X } from "lucide-react"

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
			<SheetContent side="left" className="w-full bg-slate-900/90 p-0">
				<div className="flex-center justify-between bg-slate-800 px-4 py-8">
					<Logo />
					<SheetClose /> {/* TODO: Fix close button */}
				</div>
				<div className="mt-4 p-4">
					<h2 className="mb-2 font-extrabold uppercase text-slate-500">
						BLOG MENU
					</h2>
					<ul className="flex flex-col gap-2">
						{siteConfig.navLinks.map(({ name, href, Icon }) => (
							<li key={href}>
								<Button
									variant="ghost"
									className="flex w-full justify-start gap-2 rounded-full"
								>
									<Icon />
									<span>{name}</span>
								</Button>
							</li>
						))}
					</ul>
				</div>
				<div className="mt-4 p-4">
					<h2 className="font-extrabold uppercase text-slate-500">
						BLOG SOCIAL
					</h2>
					<SocialLinks />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNavMenu
