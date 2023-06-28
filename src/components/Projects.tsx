type ProjectProps = {
  link: string;
  title: string;
  tech: string[];
  year: string;
};

const Project = ({ link, title, tech, year }: ProjectProps) => {
  return (
    <a
      className="outside-padding group flex h-full flex-col justify-between gap-3"
      href={link}
    >
      <div className="flex items-center gap-2">
        <h3>{title}</h3>
        <div className="mx-1 flex-1 border-t-2 border-dotted border-tertiary-color group-hover:border-emerald-500"></div>
        <span>{year}</span>
      </div>
      <ul className="flex flex-wrap gap-2 text-xs text-tertiary-color">
        {...tech.map((t, i) => {
          return (
            <li key={i}>
              <span className="group-hover:text-emerald-500">#</span>
              <span className="group-hover:text-secondary-color">{t}</span>
            </li>
          );
        })}
      </ul>
    </a>
  );
};

const Projects = () => {
  return (
    <div className="mt-20 w-full">
      <h2 className="text-primary-color">Projects</h2>

      <div className="mt-10 grid grid-cols-1 gap-7">
        <Project
          title="Climbers Connect"
          link="https://github.com/brianschnee/climbers-connect"
          year={"'23"}
          tech={[
            "typescript",
            "node",
            "express",
            "ejs",
            "css",
            "mongodb",
            "mongoose",
            "cloudinary",
            "passportjs",
          ]}
        />
        <Project
          title="Attri Enterprises"
          link="https://github.com/brianschnee/attrienterprises-optimized"
          year={"'23"}
          tech={["typescript", "preact", "astrobuild", "css", "vercel"]}
        />
        <Project
          title="Timeato"
          link="https://github.com/devv-work/timeato"
          year={"'22"}
          tech={[
            "javascript",
            "node",
            "express",
            "ejs",
            "css",
            "mongodb",
            "mongoose",
            "passportjs",
          ]}
        />
        <Project
          title="Find a dev"
          link={"https://github.com/brianschnee/findadev"}
          year={"'22"}
          tech={[
            "javascript",
            "node",
            "express",
            "ejs",
            "css",
            "mongodb",
            "mongoose",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
