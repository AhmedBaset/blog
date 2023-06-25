"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "@shadcn/tooltip"

import { buttonVariants } from "./ui/button"

function SocialLinks({
	className,
	...props
}: React.HTMLAttributes<HTMLUListElement>) {
	return (
		<ul className={cn("flex flex-wrap", className)} {...props}>
			{siteConfig.links.map(({ label, href, Icon }) => (
				<li key={href}>
					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={href}
								className={cn(
									buttonVariants({
										variant: "ghost",
										size: "icon",
									}),
									"rounded-full"
								)}
								target="_blank"
							>
								<Icon />
								<span className="sr-only">{label} link</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent>{label}</TooltipContent>
					</Tooltip>
				</li>
			))}
		</ul>
	)
}

export default SocialLinks
