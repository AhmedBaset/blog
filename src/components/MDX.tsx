import React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/lib/utils"

const elements = [
	{
		tag: "h1",
		classNames: "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
	},
	{
		tag: "h2",
		classNames:
			"mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
	},
	{
		tag: "h3",
		classNames: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
	},
	{
		tag: "h4",
		classNames: "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
	},
	{
		tag: "h5",
		classNames: "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
	},
	{
		tag: "h6",
		classNames: "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
	},
	{ tag: "a", classNames: "font-medium underline underline-offset-4" },
	{ tag: "p", classNames: "leading-7 [&:not(:first-child)]" },
	{ tag: "ul", classNames: "list-disc list-inside" },
	{ tag: "ol", classNames: "list-decimal list-inside" },
	{ tag: "li", classNames: "mt-2" },
	{
		tag: "blockquote",
		classNames: "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
	},
	{ tag: "img", classNames: "rounded-md border", component: Image },
	{ tag: "hr", classNames: "my-4 md:my-8" },
	{ tag: "table", classNames: "my-6 w-full overflow-y-auto" },
	{ tag: "tr", classNames: "m-0 border-t p-0 even:bg-muted" },
	{ tag: "th", classNames: "p-2 font-semibold text-left" },
	{ tag: "td", classNames: "p-2 border-l" },
	{ tag: "code", classNames: "px-1 py-px bg-gray-100 rounded-md" },
	{ tag: "pre", classNames: "my-6 p-4 bg-gray-100 rounded-md" },
]

const components = elements.reduce((acc, { tag, classNames, component }) => {
	const Component = component || tag
	return {
		...acc,
		[tag]: (props: React.HTMLAttributes<any>) => (
			<Component
				{...(props as any)} // Using any here because we are know (more than TS) that the props are correct
				className={cn(classNames, props.className)}
			/>
		),
	}
})

interface MdxProps {
	code: string
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code)

	return <Component components={components as any} /> 
}
