import { Search } from "lucide-react"

import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"

function NavOptions() {
	return (
		<div className="space-x-4">
			<Button variant="ghost" size="icon">
				<Search />
			</Button>
			<Button variant="ghost" size="icon" asChild>
				<ThemeToggle />
			</Button>
		</div>
	)
}

export default NavOptions
