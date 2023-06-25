import { NextRequest } from "next/server"
import { ImageResponse } from "@vercel/og"

export const runtime = "edge"

// const montserratRegular = fetch(
// 	new URL("./../../../assets/fonts/Montserrat-Regular.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer())

// const montserratExtraBold = fetch(
// 	new URL("./../../../assets/fonts/Montserrat-ExtraBold.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer())

export async function GET(req: NextRequest) {
	try {
		// const fontRegular = await montserratRegular
		// const fontBold = await montserratExtraBold

		const { searchParams } = req.nextUrl
		const values = {
			title: searchParams.get("title") || "Hello World",
			description: searchParams.get("description") || "",
			url: searchParams.get("url") || "",
		}

		values.title =
			values.title.length > 100
				? values.title.slice(0, 100) + "..."
				: values.title

		return new ImageResponse(
			(
				<div tw="w-full h-full bg-gradient-to-br from-[#0b1120] to-[#0d3256] flex justify-center items-center flex-col">
					<h2 tw="text-white font-sans font-extrabold w-[80%] text-3xl">
						{values.title}
					</h2>
					<p tw="text-slate-300 font-sans w-[80%] line-clamp-3 leading-6">
						{values.description}
					</p>
					<div tw="max-w-[80%] h-[2.5rem] bg-[#133c7f] text-white flex justify-start items-center rounded-[0.35rem]">
						<span tw="w-4 whitespace-nowrap"> </span>
						<span>
							{process.env.NEXT_PUBLIC_URL}/{values.url}
						</span>
						<span tw="w-4 whitespace-nowrap"> </span>
					</div>
				</div>
			),
			{
				width: 800,
				height: 450,
				// fonts: [
				// {
				// 	name: "font",
				// 	data: fontRegular,
				// 	weight: 400,
				// 	style: "normal",
				// },
				// {
				// 	name: "font",
				// 	data: fontBold,
				// 	weight: 700,
				// 	style: "normal",
				// },
				// ],
			}
		)
	} catch (error) {
		return new Response(`Failed to generate image`, {
			status: 500,
		})
	}
}
