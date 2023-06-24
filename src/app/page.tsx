import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import PostCard from "@/components/PostCard"

export default function Index() {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date))
	)

	
	return (
		<div className="py-8 max-w-6xl mx-auto container">
			<h1 className="mb-8 text-center text-2xl font-black">
				Welcome to my blog!
			</h1>
			
			<div className="grid grid-cols-auto gap-3">
				{posts.map((post, idx) => (
					<PostCard key={idx} {...post} />
				))}
			</div>
		</div>
	)
}
