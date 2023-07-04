import React from "react"
import Image from "next/image"

interface Props extends React.ComponentProps<typeof Image> {
	src: string
}

async function AwaitedImage({ src, alt, ...rest }: Props) {
	const res = await fetch(src)
	const blob = await res.blob()
	const imageUrl = URL.createObjectURL(blob)

	return <Image src={imageUrl} alt={alt} {...rest} />
}

export default AwaitedImage
