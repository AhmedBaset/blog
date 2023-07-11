import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*{.md,.mdx}`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		date: { type: "date", required: true },
		description: { type: "string", required: false },
		image: { type: "string", required: false },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (post) =>
				post._raw.flattenedPath.split("-").slice(1).join("-"),
		},
	},
}))

export default makeSource({
	contentDirPath: "./src/content/blog",
	disableImportAliasWarning: true,
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm], // support GitHub Flavored Markdown
		rehypePlugins: [
			rehypeSlug, // add id's to headings
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					onVisitLine(node: any) {
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }]
						}
					},
					onVisitHighlightedLine(node: any) {
						node.properties.className.push("line--highlighted")
					},
					onVisitHighlightedWord(node: any) {
						node.properties.className = ["word--highlighted"]
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["subheading-anchor"],
						ariaLabel: "Link to section",
					},
				},
			],
		],
	},
})
