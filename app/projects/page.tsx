import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Summary from "@/components/Summary";
import { type ProjectProps, projects } from "@/lib/projects";
import Icon from "@/components/ui/Icon";
import JumpToTop from "@/components/JumpToTop";

export default function ProjectPage() {
  const { tools, apps } = projects.reduce<{
    tools: ProjectProps[];
    apps: ProjectProps[];
  }>(
    (groups, project) => {
      const group = project.src ? groups.apps : groups.tools;
      group.push(project);
      return groups;
    },
    { tools: [], apps: [] },
  );

  const TOOLS_TITLE = "Tools, libraries, and experiments";
  const APPS_TITLE = "Applications and websites";

  return (
    <>
      <Heading title="Projects" emoji="🔨" />
      <Summary>
        I enjoy building things and bringing ideas to life through software.
        Here you&apos;ll find a collection of projects I&apos;ve worked on,
        technologies I&apos;ve explored, and lessons I&apos;ve picked up along
        the way. This page groups projects into two sections:{" "}
        <a href="#tools" className="text-accent hover:text-[#0c885f]">
          {TOOLS_TITLE}
        </a>{" "}
        and{" "}
        <a href="#apps" className="text-accent hover:text-[#0c885f]">
          {APPS_TITLE}
        </a>
        .
      </Summary>
      <ProjectSection
        id="tools"
        title={TOOLS_TITLE}
        description="Technical projects, utilities, and experiments ranging from libraries to command-line tools."
        projects={tools}
      />
      <ProjectSection
        id="apps"
        title={APPS_TITLE}
        description="Full-stack projects that bring together various aspects of development."
        projects={apps}
      />
      <JumpToTop slug={"/projects"} />
    </>
  );
}

const ProjectSection = ({
  id,
  title,
  description,
  projects,
}: {
  id: string;
  title: string;
  description: string;
  projects: ProjectProps[];
}) => {
  return (
    <section className="mt-10 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-primary" id={id}>
          {title}
        </h2>
        <p className="text-tertiary leading-relaxed">{description}</p>
      </div>
      <ul className="flex flex-col gap-4">
        {projects.map((props: ProjectProps) => {
          return (
            <Project
              key={props.title}
              src={props.src}
              repo={props.repo}
              title={props.title}
              technologies={props.technologies}
              description={props.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

const Project = ({
  src,
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
