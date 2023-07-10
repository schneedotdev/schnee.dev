import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Summary from "@/components/Summary";

export default function ProjectPage() {
  return (
    <>
      <Heading content="Projects" emoji="🔨" />
      <Summary content="As a Full Stack Software Engineer, I'm confident with an array of tools and technologies. I get a kick out of transforming ideas into code. Check out my work and play around with the projects!" />
      <Image
        className="mt-10 w-full rounded-md"
        src="/assets/schneedotdev.jpg"
        width={610}
        height={610}
        alt="preview of climbers connect website"
      />
      <Image
        className="mt-10 w-full rounded-md"
        src="/assets/climbers.jpg"
        width={610}
        height={610}
        alt="preview of climbers connect website"
      />
      <Image
        className="mt-10 w-full rounded-md"
        src="/assets/portfolio.jpg"
        width={610}
        height={610}
        alt="preview of portfolio website"
      />
      <Image
        className="mt-10 w-full rounded-md"
        src="/assets/attri.jpg"
        width={610}
        height={610}
        alt="preview of attrienterprises website"
      />
      <Image
        className="mt-10 w-full rounded-md"
        src="/assets/findadev.jpg"
        width={610}
        height={610}
        alt="preview of findadev website"
      />
      <Image
        className="mt-10 w-full rounded-md"
        src="/assets/timeato.jpg"
        width={610}
        height={610}
        alt="preview of timeato website"
      />
    </>
  );
}
