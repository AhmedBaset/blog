import React from "react"
import Image from "next/image"

interface Props extends React.ComponentProps<typeof Image> {
	src: string
}

async function AwaitedImage({ src, alt, ...rest }: Props) {
	// Just to await untill the /api/og respond and cache
	await fetch(src)

	return <Image src={src} alt={alt} {...rest} />
}

export default AwaitedImage
