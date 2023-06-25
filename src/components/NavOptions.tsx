import Link from "next/link"
import { Search } from "lucide-react"

import ThemeToggle from "./ThemeToggle"
import { Button, buttonVariants } from "./ui/button"

function NavOptions() {
	return (
		<div className="space-x-4">
			<Link
				href="/search"
				className={buttonVariants({ variant: "ghost", size: "icon" })}
				title="Search"
			>
				<Search />
			</Link>
			<Button variant="ghost" size="icon" className="sticky top-0" asChild>
				<ThemeToggle />
			</Button>
		</div>
	)
}

export default NavOptions
