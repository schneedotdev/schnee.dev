import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";

type Params = {
  params: { slug: string };
};

async function getPostFromParams(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) notFound();

  return post;
}

const Page = async ({ params }: Params) => {
  const post = await getPostFromParams(params.slug);

  return (
    <main className="prose-custom-colors">
      <Link
        className="mb-6 inline-flex items-center gap-1 text-base"
        href="/blogs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back to Blogs
      </Link>
      <h1 className="mb-4 mt-0 text-2xl">{post.title}</h1>
      <time className="mb-5 inline-block text-tertiary">{post.date}</time>
      <Mdx code={post.body.code} />
    </main>
  );
};

export default Page;
