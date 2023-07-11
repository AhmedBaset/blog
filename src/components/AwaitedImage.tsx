import React from "react";
import Image from "next/image";





interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string
	alt: string
}

async function AwaitedImage({ src, alt, ...rest }: Props) {
	return (
		<>
			<Image
				src={src}
				alt={alt}
				className="sr-only hidden"
				width={320}
				height={180}
			/>
			{/* eslint-disable @next/next/no-img-element */}
		</>
	)
}

export default AwaitedImage

// if you have a route /api/og that return an image
// if you used the Image it won't work
// 