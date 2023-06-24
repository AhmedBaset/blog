import Image from "next/image"
import { UserAddIcon } from "lucide-react"
import Button from "@shadcn/Button"
import siteConfig from "@/config/site.config"
import { cn } from "@/lib/utils"

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
            <Button><UserAddIcon className="w-5 h-5 mr-2" />Follow</Button>
			</div>
		</section>
	)
}

export default AboutMe
