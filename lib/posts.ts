import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sortByDate } from "@/lib/utils";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export type Post = {
  title: string;
  date: string;
  published: boolean;
  slug: string;
  slugAsParams: string;
  content: string;
};

type PostFrontmatter = {
  title?: string;
  date?: string;
  published?: boolean;
};

function getPostSlug(fileName: string) {
  return fileName.replace(/\.mdx$/, "");
}

export function getAllPosts() {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"));

  const posts = fileNames.map((fileName) => {
    const slugAsParams = getPostSlug(fileName);
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    if (!frontmatter.title || !frontmatter.date) {
      throw new Error(`Missing required frontmatter in ${fullPath}`);
    }

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      published: frontmatter.published ?? true,
      slug: `/blogs/${slugAsParams}`,
      slugAsParams,
      content,
    } satisfies Post;
  });

  return sortByDate(posts).filter((post) => post.published);
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slugAsParams === slug);
}
