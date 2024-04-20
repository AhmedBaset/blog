import {
	BadgeIcon,
	BookCopyIcon,
	CodepenIcon,
	FacebookIcon,
	GithubIcon,
	HomeIcon,
	LinkedinIcon,
	TwitterIcon,
	UserIcon,
	YoutubeIcon,
} from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: "Ahmed AbdulBaset",
	// bio: "Full Stack Developer enjoying building things with Next.js",
	bio: "Learning new things everyday",
	username: "AhmedBaset",
	image: "https://github.com/AhmedBaset.png",
	links: [
		{
			label: "Github",
			href: "https://github.com/AhmedBaset",
			Icon: GithubIcon,
		},
		{
			label: "Twitter",
			href: "https://twitter.com/A7med3bdulBaset",
			Icon: TwitterIcon,
		},
		{
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/A7med3bdulBaset/",
			Icon: LinkedinIcon,
		},
		{
			label: "Youtube",
			href: "https://www.youtube.com/A7med3bdulBaset",
			Icon: YoutubeIcon,
		},
		{
			label: "CodePen",
			href: "https://codepen.io/A7med3bdulBaset",
			Icon: CodepenIcon,
		},
		{
			label: "Dev.to",
			href: "https://dev.to/A7med3bdulBaset",
			Icon: BookCopyIcon,
		},
		{
			label: "Facebook",
			href: "https://www.facebook.com/A7med3bdulBaset",
			Icon: FacebookIcon,
		},
	],
	navLinks: [
		{
			name: "Home",
			href: "/",
			Icon: HomeIcon,
		},
		{
			name: "About",
			href: "/about",
			Icon: UserIcon,
		},
		{
			name: "Badges",
			href: "/badges",
			Icon: BadgeIcon,
		},
	],
} as const
