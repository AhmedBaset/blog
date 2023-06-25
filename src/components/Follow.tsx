import Link from "next/link"
import { Github, UserPlus } from "lucide-react"

import { siteConfig } from "@/config/site"
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@shadcn/alert-dialog"
import { Button, buttonVariants } from "@shadcn/button"

import SocialLinks from "./SocialLinks"

function Follow() {
	const github = siteConfig.links.find((link) => link.label === "Github")!.href

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className="space-x-2 rounded-full">
					<UserPlus />
					<span>Follow</span>
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Want to not miss any updates?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Follow me on social media
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter className="!flex-col gap-2">
					<SocialLinks />
					<AlertDialogTitle>My Github Account:</AlertDialogTitle>
					<AlertDialogAction asChild>
						<Link href={github} className={buttonVariants()}>
							@{siteConfig.username}
						</Link>
					</AlertDialogAction>
				</AlertDialogFooter>

				<AlertDialogCancel>Cancel</AlertDialogCancel>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default Follow
