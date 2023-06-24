import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { allPosts, Post } from "contentlayer/generated"

import { getImage } from "@/lib/getImage"
import AboutMe from "@/components/AboutMe"
import { MDX } from "@/components/MDX"

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
		twitter: {
			card: "summary_large_image",
			creator: "@A7med3bdulBaset",
		},
	}
}

export function generateStaticParams() {
	return allPosts.map((post) => ({ slug: post.url }))
}

const formatter = new Intl.DateTimeFormat(undefined, {
	year: "numeric",
	month: "long",
	day: "numeric",
})

function page({ params: { slug } }: Props) {
	const post = getPost(slug)

	return (
		<main className="container mb-4">
			<header className="sticky top-0 -z-10 max-w-4xl space-y-4 py-12">
				<h1 className="text-5xl font-bold">{post.title}</h1>
				<p className="text-opacity-70">{post.description}</p>
				<p className="text-sm">{formatter.format(new Date(post.date))}</p>
				<Image
					width={800}
					height={200}
					src={getImage(post)}
					alt={post.title}
					className="rounded-lg"
				/>
			</header>
			<div className="grid items-start gap-4 bg-white py-12 dark:bg-slate-950 md:grid-cols-5">
				<article className="prose col-span-3 dark:prose-invert">
					<MDX code={post.body.code} />
				</article>
				<AboutMe className="sticky top-8 col-span-2" />
			</div>
		</main>
	)
}

export default page
