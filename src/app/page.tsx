import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Main />
      <Experience startDate={"2018-01-16"} />
      <Summary />
      <Blogs />
      <Projects />
    </>
  );
}
