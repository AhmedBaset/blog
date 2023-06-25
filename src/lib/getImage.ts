import { Post } from "contentlayer/generated"

export function getImage({ title, description, url }: Partial<Post>) {
	const APP_URL = process.env.NEXT_PUBLIC_URL
	const ogUrl = new URL(`/api/og`, APP_URL)
	ogUrl.searchParams.set("title", title ?? "")
	ogUrl.searchParams.set("description", description ?? "")
	ogUrl.searchParams.set("url", url ?? "")

	return ogUrl.toString()
}
