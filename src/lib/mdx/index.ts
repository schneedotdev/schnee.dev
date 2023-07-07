// import fs from "fs";
// import path from "path";
// import { compileMDX } from "next-mdx-remote/rsc";

// type CompileMDX = {
//   frontmatter: { title: string; date: string };
//   content: any;
// };

// const rootDir = path.join(process.cwd(), "src", "app", "content");

// export const getBlogBySlug = async (slug: string) => {
//   const realSlug = slug.replace(/\.mdx$/, "");
//   const filePath = path.join(rootDir, `${realSlug}.mdx`);

//   const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

//   const { frontmatter, content }: CompileMDX = await compileMDX({
//     source: fileContent,
//     options: { parseFrontmatter: true },
//   });

//   return { meta: { ...frontmatter, slug: realSlug }, content };
// };

// export const getAllBlogsMeta = async () => {
//   const files = fs.readdirSync(rootDir);

//   let blogs = [];

//   for (const file of files) {
//     const { meta } = await getBlogBySlug(file);
//     blogs.push(meta);
//   }

//   return blogs;
// };
