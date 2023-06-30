import { serif } from "@/lib/fonts";

export default function ProjectPage() {
  return (
    <>
      <h1 className={`text-primary ${serif.className} tracking-wide`}>
        Projects <span className="ml-1 text-lg">🔨</span>
      </h1>
      <p className="mt-8 text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur
        voluptate quae dolor velit, harum quam atque voluptates veniam iusto?
      </p>
    </>
  );
}
