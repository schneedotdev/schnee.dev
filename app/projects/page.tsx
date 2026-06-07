import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Summary from "@/components/Summary";
import { type ProjectProps, projects } from "@/lib/projects";
import Icon from "@/components/ui/Icon";
import JumpToTop from "@/components/JumpToTop";

const Project = ({
  src,
  site,
  repo,
  title,
  description,
  technologies,
}: ProjectProps) => {
  return (
    <li id={title} className="flex flex-col rounded-md">
      {src && (
        <Image
          className="w-full rounded-t-md"
          src={`/assets/${src}`}
          width={610}
          height={610}
          alt={`preview of pages from ${title}`}
        />
      )}
      <section
        className={`flex flex-col gap-3 bg-[#f2f2f308] p-8 ${
          src ? "rounded-b-md" : "rounded-md"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-primary text-xl">{title}</h2>
          <div className="flex items-center gap-2">
            <a href={repo}>
              <Icon
                name="github"
                width="18"
                height="18"
                stroke="stroke-primary"
                strokeWidth={1.25}
                hover="hover:stroke-secondary"
              />
            </a>
            {site && (
              <a href={site}>
                <Icon
                  name="external-link"
                  width="18"
                  height="18"
                  stroke="stroke-primary"
                  strokeWidth={1.25}
                  hover="hover:stroke-secondary"
                />
              </a>
            )}
          </div>
        </div>
        <ul className="text-tertiary flex flex-wrap gap-2 text-xs">
          {technologies.map((tech, i) => {
            return (
              <li key={i}>
                <div
                  className="text-secondary flex items-center gap-1 rounded-md px-2 py-1"
                  style={{ background: `var(--bg-${tech})` }}
                >
                  <Icon name={tech} width={15} height={15} />
                  <span style={{ color: `var(--${tech})` }}>{tech}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <hr className="border-tertiary opacity-40" />
        <p className="text-secondary leading-relaxed">{description}</p>
      </section>
    </li>
  );
};

export default function ProjectPage() {
  return (
    <>
      <Heading title="Projects" emoji="🔨" />
      <Summary>
        I enjoy building things and bringing ideas to life through software.
        Here you&apos;ll find a collection of projects I&apos;ve worked on,
        technologies I&apos;ve explored, and lessons I&apos;ve picked up along
        the way.
      </Summary>
      <hr className="border-tertiary mt-10" />
      <ul className="mt-10 flex flex-col gap-12">
        {projects.map((props: ProjectProps) => {
          return (
            <Project
              key={props.title}
              src={props.src}
              site={props.site}
              repo={props.repo}
              title={props.title}
              createdAt={props.createdAt}
              technologies={props.technologies}
              description={props.description}
            />
          );
        })}
      </ul>
      <JumpToTop slug={"/projects"} />
    </>
  );
}
