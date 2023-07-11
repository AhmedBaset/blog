// import Image from "next/image"
import Link from "next/link"
import { Post } from "contentlayer/generated"

import { getImage } from "@/lib/getImage"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@shadcn/card"
import { Skeleton } from "@shadcn/skeleton"

export default async function PostCard({ title, description, url }: Post) {
	return (
		<Link href={`/post/${url}`} className="group">
			<Card>
				<CardContent className="p-0">
					{/**
					 * We don't use next/image here because the route take some time to load
					 * and next/image will not render anything
					 * TODO: UPDATE THIS
					 */}
					{/* eslint-disable @next/next/no-img-element */}
					<img
						src={getImage({ title, description, url })}
						alt={title}
						className="aspect-video w-full rounded-lg"
						width={300}
						height={200}
					/>
				</CardContent>
				<CardHeader>
					<CardTitle
						className="mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline"
					>
						{title}
					</CardTitle>
					<CardDescription className="line-clamp-3 overflow-hidden text-ellipsis">
						{description}
					</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	)
}

export function PostCardSkeleton() {
	return (
		<Card>
			<CardContent className="p-0">
				<Skeleton className="width-full aspect-video rounded-lg" />
			</CardContent>
			<CardHeader>
				<Skeleton className="mb-2 h-8 w-9/12" />
				<Skeleton className="mb-1 h-4 w-full" />
				<Skeleton className="mb-1 h-4 w-full" />
				<Skeleton className="h-4 w-9/12" />
			</CardHeader>
		</Card>
	)
}
