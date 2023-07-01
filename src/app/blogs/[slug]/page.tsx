import { getBlogBySlug } from "@/lib/mdx";

type Params = {
  params: { slug: string };
};

const getPageContent = async (slug: string) => {
  const { meta, content } = await getBlogBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }: Params) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }: Params) => {
  const { content } = await getPageContent(params.slug);

  return <div className="prose-custom-colors">{content}</div>;
};

export default Page;
