import AboutMe from "@/components/AboutMe"
import { PostCardSkeleton } from "@/components/PostCard"

export default function Index() {
	const posts = [1, 2, 3, 4, 5, 6]

	return (
		<>
			<div className="container mx-auto max-w-6xl py-8">
				<h1 className="mb-8 text-center text-2xl font-black">
					Welcome to my blog!
				</h1>

				<div className="grid-cols-auto mb-4 grid gap-3">
					{posts.map((post, idx) => (
						<PostCardSkeleton key={idx} />
					))}
				</div>
			</div>
			<AboutMe isHome />
		</>
	)
}
