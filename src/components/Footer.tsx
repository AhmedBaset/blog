import { Link } from "lucide-react"

import { siteConfig } from "@/config/site"

function Footer() {
	return (
		<footer className="flex-center flex-col gap-2">
			<p className="text-slate-700 dark:text-slate-300">
				&copy; 2023 - All rights reserved. <br />
				Designed and developed with <span className="text-rose-500">
					❤
				</span>{" "}
				by{" "}
				<Link
					href={
						siteConfig.links.find((link) => link.label === "Github")?.href
					}
					className="text-primary-500 underline underline-offset-2"
				>
					{siteConfig.name}
				</Link>
			</p>
		</footer>
	)
}

export default Footer
