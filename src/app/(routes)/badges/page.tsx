import { Badge } from "@shadcn/badge"

function page() {
	return (
		<main className="container space-y-4 py-12 max-w-4xl">
			<h1 className="font-extrabold text-5xl">Lorem Ipsum</h1>
			<p className="text-opacity-70">This page is a placeholder for now.</p>
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
