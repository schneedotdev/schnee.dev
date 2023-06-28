import { Blogs } from "@/components/Blogs";
import { serif } from "@/lib/fonts";

export default function BlogsPage() {
  return (
    <>
      <h1 className={`text-primary ${serif.className} tracking-wide`}>
        Blogs <span className="ml-1 text-lg">✍️</span>
      </h1>
      <p className="mt-8 text-secondary">
        Along with learning, I am energized by sharing my knowledge and
        experiences with others. I hope you take the time to explore my blog
        articles.
      </p>
      <Blogs />
    </>
  );
}
