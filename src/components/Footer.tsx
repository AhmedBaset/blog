import Link from "next/link"

import { siteConfig } from "@/config/site"

function Footer() {
	return (
		<footer className="space-y-2 bg-sky-200 p-4 py-8 text-center text-sm dark:bg-slate-900">
			<p className="text-slate-700 dark:text-slate-300">
				&copy; 2023 - All rights reserved. <br />
				Developed with <span className="text-rose-500">❤</span> by{" "}
				<Link
					href={
						siteConfig.links.find((link) => link.label === "Github")
							?.href || ""
					}
					className="text-primary underline underline-offset-2 dark:text-white"
				>
					{siteConfig.name}
				</Link>
			</p>
		</footer>
	)
}

export default Footer
