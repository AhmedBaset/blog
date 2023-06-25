import { Badge } from "@shadcn/badge"

function page() {
	return (
		<main className="container prose max-w-4xl space-y-4 py-12 dark:prose-invert">
			<h1 className="text-5xl font-extrabold">Lorem Ipsum</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
				maxime officiis deserunt quos sit! Sequi nihil magni ad neque ipsum,
				aliquid veniam magnam quisquam? Aliquam culpa quisquam cum facilis
				odit!
			</p>
			<h2 className="text-3xl font-bold">
				This page is just a placeholder to test the navigation functionality
			</h2>
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
