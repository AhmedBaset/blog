import Image from "next/image"
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

export default async function PostCard({ title, description, url }: Post) {
	return (
		<Link href={`/post/${url}`} className="group">
			<Card>
				<CardContent className="p-0">
					<Image
						src={getImage({ title, description, url })}
						alt={title}
						className="aspect-video w-full rounded-lg"
						width={300}
						height={200}
					/>
				</CardContent>
				<CardHeader>
					<CardTitle className="mb-2 decoration-sky-500/50 decoration-wavy underline-offset-4 group-hover:underline">
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
