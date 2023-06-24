// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*{.md,.mdx}`,
	fields: {
		title: { type: "string", required: true },
		date: { type: "date", required: true },
		description: { type: "string", required: false },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (post) => `/post/${post._raw.flattenedPath}`,
		},
	},
}))

export default makeSource({
	contentDirPath: "./src/content/blog",
	disableImportAliasWarning: true,
	documentTypes: [Post],
})
