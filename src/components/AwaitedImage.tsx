import React from "react"
import Image from "next/image"

interface Props extends React.ComponentProps<typeof Image> {
	src: string
}

async function AwaitedImage({ src, alt, ...rest }: Props) {
	return <Image src={src} alt={alt} {...rest} />
}

export default AwaitedImage
