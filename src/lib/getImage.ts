import { Post } from "contentlayer/generated"

export function getImage({ title, description, url }: Partial<Post>) {
	const APP_URL = process.env.NEXT_PUBLIC_URL
	const ogUrl = new URL(`/api/og`, APP_URL)
	ogUrl.searchParams.set("title", normalize(title ?? ""))
	ogUrl.searchParams.set("description", normalize(description ?? ""))
	ogUrl.searchParams.set("url", url ?? "")

	return ogUrl.toString()
}

function normalize(text: string) {
	return text.replaceAll(/[^a-zA-Z0-9\s]/g, "")
}
