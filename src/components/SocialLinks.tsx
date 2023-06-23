import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@radix-ui/react-tooltip"
import { Link } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

function SocialLinks({
	className,
	...props
}: React.HTMLAttributes<HTMLUListElement>) {
	return (
		<ul className={cn("flex flex-wrap gap-2", className)} {...props}>
			{siteConfig.links.map(({ label, href, Icon }) => (
				<li>
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
