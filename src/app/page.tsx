import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import AboutMe from "@/components/AboutMe"
import PostCard from "@/components/PostCard"

export default async function Index() {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date))
	)

	// Simulate a slow connection
	// await new Promise((resolve) => setTimeout(resolve, 10_000));

	return (
		<>
			<div className="container mx-auto max-w-6xl py-8">
				<h1 className="mb-8 text-center text-2xl font-black">
					Welcome to my blog!
				</h1>

				<div className="grid-cols-auto mb-4 grid gap-3">
					{posts.map((post, idx) => (
						<PostCard key={idx} {...post} />
					))}
				</div>
			</div>
			<AboutMe isHome />
		</>
	)
}
