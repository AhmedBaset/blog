import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated"
import { format } from "date-fns"
import { Metadata } from "next";

function getPost(slug: string) : Post {
   const post = allPosts.find((post) => post.url === slug)
	if (!post) notFound()
   return post
}

export function generateMetadata({params: {slug}}: Props): Metadata {
   const {title, description} = getPost(slug)

   return {
      title,
      description,
      
   }
}


interface Props {
	params: {
		slug: string
	}
}

function page({ params: { slug } }: Props) {
   const post = getPost(slug)

	return (
		<main>
			<header>
				<h1>{post.title}</h1>
				<p>{post.description}</p>
				<p>{format(new Date(post.date), "MMMM dd, yyyy")}</p>
         </header>
         <article>
            
         </article>
		</main>
	)
}

export default page