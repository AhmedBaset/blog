import { siteConfig } from "@/config/site"
import { Badge } from "@shadcn/badge"

function page() {
	return (
		<main className="container max-w-4xl space-y-4 py-12">
			<h1 className="text-5xl font-extrabold">{siteConfig.name}</h1>
			<p className="text-opacity-70">{siteConfig.bio}</p>
			<Badge>TODO:</Badge> <span>add more content</span>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero
				dignissimos nesciunt excepturi quisquam animi, eum necessitatibus
				fugit aliquid. Iure laborum impedit ab, doloremque ut aliquam atque
				natus inventore iste.
			</p>
		</main>
	)
}

export default page
