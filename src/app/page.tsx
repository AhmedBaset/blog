import { usePathname } from "next/navigation"

export default function IndexPage() {
	const pathname = usePathname()

	return <div>{pathname}</div>
}
