import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import Preview from "@/components/Preview";

export default function Home() {
  return (
    <>
      <Main />
      <Experience startDate={"2018-01-16"} />
      <Summary />
      <Preview />
      <Projects />
    </>
  );
}
