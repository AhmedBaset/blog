import { createElement } from "react"
import { ImageResponse, type NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
	const title = req.nextUrl.searchParams.get("title") || ""
	const description = req.nextUrl.searchParams.get("description") || ""
	const link = req.nextUrl.searchParams.get("link") || ""

	return new ImageResponse(
		createElement(
			"div",
			{
				style: {
					width: "100%",
					height: "100%",
					backgroundImage: `linear-gradient(45deg, #0b1120, #0d3256)`,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				},
			},
			[
				createElement(
					"h2",
					{
						key: "title",
						style: {
							color: "white",
							fontSize: "3rem",
							fontFamily: "sans-serif",
							fontWeight: "900",
							width: "80%",
						},
					},
					title
				),
				createElement(
					"p",
					{
						key: "description",
						style: {
							color: "#ccc",
							fontSize: "1rem",
							fontFamily: "sans-serif",
							fontWeight: "400",
							width: "80%",
							lineHeight: "1.5rem",
							lineClamp: "2rem",
						},
					},
					description
				),
				/*
				createElement(
					"div",
					{
						key: "link",
						style: {
							width: "60%",
							height: "2.5rem",
							backgroundColor: "#133c7f",
							color: "#fff",
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							borderRadius: "1rem"
						},
					},
					[
						createElement(
							"span",
							{
								key: "space",
								style: {
									width: "1rem",
								},
							},
							" "
						),

						createElement(
							"span",
							{
								key: "link",
							},
							`${process.env.NEXT_PUBLIC_URL}/${link}`
						),
					]
				),
				*/
			]
		),
		{
			width: 800, // 16:9
			height: 450,
		}
	)
}
