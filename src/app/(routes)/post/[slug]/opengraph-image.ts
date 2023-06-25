import { getPost } from "./page"

interface Props {
	params: {
		slug: string
	}
}

export default function opengraph({ params: { slug } }: Props) {
	const { title, description, url } = getPost(slug)

	const APP_URL = process.env.NEXT_PUBLIC_URL
	const ogUrl = new URL(`/api/og`, APP_URL)
	ogUrl.searchParams.set("title", title ?? "")
	ogUrl.searchParams.set("description", description ?? "")
	ogUrl.searchParams.set("url", url ?? "")

	return ogUrl
}
