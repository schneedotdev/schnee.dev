import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import Preview from "@/components/Preview";
import Heading from "@/components/ui/Heading";

export default function Home() {
  return (
    <>
      <main>
        <Heading title="Brian Schnee" />
        <h2 className="mt-4">
          Software Developer at <a href="https://1password.com">1Password</a>
        </h2>
        <Experience startDate={"2018-01-16"} />
        <Summary
          paragraphs={[
            "I've never been very good at casual interests. When something captures my attention, I like to see how far I can take it.",
            "This site is a collection of projects, writing, and experiences that have shaped my journey so far.",
          ]}
        />
      </main>
      <Preview />
      <Projects />
    </>
  );
}
