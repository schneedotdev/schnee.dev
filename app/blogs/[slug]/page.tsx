import Link from "next/link";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";
import JumpToTop from "@/components/JumpToTop";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Params = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slugAsParams,
  }));
}

const Page = async (props: Params) => {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <div className="relative">
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
        <h1 className="mt-0 mb-4 text-2xl">{post.title}</h1>
        <time className="text-tertiary mb-5 inline-block">{post.date}</time>
        <Mdx source={post.content} />
      </main>
      <JumpToTop slug={params.slug} />
    </div>
  );
};

export default Page;
