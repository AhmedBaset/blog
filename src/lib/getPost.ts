import { notFound } from "next/navigation"
import { allPosts, Post } from "contentlayer/generated"

export function getPost(slug: string): Post {
	const post = allPosts.find((post) => post.url === slug)
	if (!post) notFound()
	return post
}
