import { FC } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { buttonVariants } from "@shadcn/button"

export const metadata: Metadata = {
	title: "Page not found",
	description: "The page you're searching for does not exist.",
}

const PageNotFound: FC = () => {
	return (
		<section className="container mx-auto flex max-w-7xl flex-col items-center gap-6 pt-32 text-center">
			<h1 className="text-7xl font-extrabold">Page not found...</h1>
			<p>The page you&apos;re requesting does not exist.</p>
			<Link
				className={buttonVariants({
					variant: "ghost",
					className: "w-fit",
				})}
				href="/"
			>
				<ChevronLeft className="mr-2 h-4 w-4" />
				Back to home
			</Link>
		</section>
	)
}

export default PageNotFound
