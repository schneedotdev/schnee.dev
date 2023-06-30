import { serif } from "@/lib/fonts";

export default function ProjectPage() {
  return (
    <>
      <h1 className={`text-primary ${serif.className} text-base tracking-wide`}>
        Projects <span className="ml-1">🔨</span>
      </h1>
      <p className="mt-8 text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur
        voluptate quae dolor velit, harum quam atque voluptates veniam iusto?
      </p>
    </>
  );
}
