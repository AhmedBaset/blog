import Image from "next/image"
import { UserPlus } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@shadcn/button"

import SocialLinks from "./SocialLinks"

interface AboutMeProps {}

function AboutMe({}: AboutMeProps) {
	return (
		<section className="flex-center">
			<div
				className={cn(
					"bg-slate-50 dark:bg-slate-800",
					"flex-center flex-col gap-2 p-4",
					"md:border-1 border-slate-500/20 md:sticky md:top-4 md:rounded-xl"
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
				<Button className="space-x-2">
					<UserPlus className="mr-2 h-5 w-5" />
					Follow
				</Button>
				<SocialLinks />
			</div>
		</section>
	)
}

export default AboutMe
