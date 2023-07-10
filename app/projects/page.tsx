import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Summary from "@/components/Summary";

export default function ProjectPage() {
  return (
    <>
      <Heading content="Projects" emoji="🔨" />
      <Summary
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam pariatur
        voluptate quae dolor velit, harum quam atque voluptates veniam iusto?"
      />
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
