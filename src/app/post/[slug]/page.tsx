import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

interface Props {
	params: {
		slug: string
	}
}

function page({ params: { slug } }: Props) {
	const post = allPosts.find((post) => post.url === slug)

	if (!post) notFound()

	return (
		<div>
			<h1>{post.title}</h1>
		</div>
	)
}

export default page
