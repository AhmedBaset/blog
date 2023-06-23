import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@shadcn/avatar"

function Header() {
	return (
		<header>
			{/* Nav */}
			<div className="flex-center justify-between">
				{/* LOGO */}
				<div className="flex-center gap-2">
					<Avatar>
						<AvatarImage
							src={siteConfig.image}
							alt={`${siteConfig.name}'s photo`}
							className="rounded-full"
							width={50}
							height={50}
						/>
						<AvatarFallback>A</AvatarFallback>
					</Avatar>
					<span>{siteConfig.name}</span>
				</div>
				{/* HamborgurMenu */}
				
				{/* Options */}
			</div>
			{/* Links */}
			{/* Tabs */}
		</header>
	)
}

export default Header
