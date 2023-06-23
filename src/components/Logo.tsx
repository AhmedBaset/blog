import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@shadcn/avatar"

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
function Logo(props: Props) {
	return (
		<div className={cn("flex-center gap-2", props.className)} {...props}>
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
			<span>{siteConfig.name}&apos;s Blog</span>
		</div>
	)
}

export default Logo
