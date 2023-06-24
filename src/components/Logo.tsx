import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@shadcn/avatar"

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {}
function Logo({ className, ...props }: Props) {
	return (
		<Link href="/" className={cn("flex-center gap-2", className)} {...props}>
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
			<span className="font-semibold">
				{siteConfig.name.split(" ")[0]}&apos;s Blog
			</span>
		</Link>
	)
}

export default Logo
