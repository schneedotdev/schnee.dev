import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import Preview from "@/components/Preview";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <>
      <main>
        <Heading content="Brian Schnee" />
        <h2 className="mt-4">Full-Stack Software Engineer</h2>
        <Experience startDate={"2018-01-16"} />
        <Summary
          content="Transforming ideas into code, one adventure at a time. Constantly pushing
      the bounds of my capabilities and finding the best ways to share my
      insights with others."
        />
      </main>
      <Preview />
      <Projects />
    </>
  );
}
