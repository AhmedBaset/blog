import { Post } from "contentlayer/generated"

export function getImage(post: Partial<Post>) {
	return [
		"/api/image?title=",
		encodeURI(post.title || ""),
		"&description=",
		encodeURI(post.description || ""),
		"&link=",
		"post/" + encodeURI(post.url || ""),
	].join("")
}

function encodeURI(text: string) {
	return encodeURIComponent(text)
		.replace(/'/g, "%27")
		.replace(/"/g, "%22")
		.replace(/\./g, "%2E")
		.replace(/\(/g, "%28")
		.replace(/\)/g, "%29")
		.replace(/\*/g, "%2A")
		.replace(/\!/g, "%21")
		.replace(/\/+/g, "%2F")
}
