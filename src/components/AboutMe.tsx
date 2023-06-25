import Image from "next/image"
import { UserPlus } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@shadcn/button"

import Follow from "./Follow"
import SocialLinks from "./SocialLinks"

interface AboutMeProps {
	isHome?: boolean
	className?: string
}

function AboutMe({ isHome = false, className }: AboutMeProps) {
	return (
		<section className={cn({ "flex-center": !isHome }, className)}>
			<div
				className={cn(
					"bg-sky-100 dark:bg-slate-800",
					"flex-center flex-col gap-2 p-4",
					{
						"md:border-1 border border-slate-500/30 shadow-lg shadow-secondary md:sticky md:top-4 md:rounded-xl":
							!isHome,
					}
				)}
			>
				<Image
					src={siteConfig.image}
					alt={siteConfig.name}
					width={100}
					height={100}
					className="rounded-full border border-slate-500/20"
				/>
				<h3 className="text-2xl font-bold">{siteConfig.name}</h3>
				<p className="text-slate-700 dark:text-slate-300">
					{siteConfig.bio}
				</p>
				<Follow />
				<SocialLinks />
			</div>
		</section>
	)
}

export default AboutMe
