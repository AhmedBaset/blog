import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts, Post } from "contentlayer/generated";
import { format } from "date-fns";



import { getImage } from "@/lib/getImage";





function getPost(slug: string): Post {
	const post = allPosts.find((post) => post.url === slug)
	if (!post) notFound()
	return post
}

interface Props {
	params: {
		slug: string
	}
}

export function generateMetadata({ params: { slug } }: Props): Metadata {
	const post = getPost(slug)
	const { title, description } = post

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			images: [
				{
					url: getImage(post),
					alt: title,
					width: 800,
					height: 450,
				},
			],
		},
	}
}

export function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.url }))
}

function page({ params: { slug } }: Props) {
	const post = getPost(slug)

	return (
		<main>
			<header>
				<h1>{post.title}</h1>
				<p>{post.description}</p>
				<p>{format(new Date(post.date), "MMMM dd, yyyy")}</p>
			</header>
			<article>
				<MDX />
			</article>
		</main>
	)
}

export default page