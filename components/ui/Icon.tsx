import { cn } from "@/lib/utils";
import { type Technologies } from "@/lib/projects";
import React from "@/icons/react.svg";
import JavaScript from "@/icons/javascript.svg";
import CSS from "@/icons/css.svg";
import Cloudinary from "@/icons/cloudinary.svg";
import EJS from "@/icons/ejs.svg";
import Node from "@/icons/node.svg";
import Express from "@/icons/express.svg";
import MongoDB from "@/icons/mongodb.svg";
import Mongoose from "@/icons/mongoose.svg";
import MDX from "@/icons/mdx.svg";
import Netlify from "@/icons/netlify.svg";
import NextJS from "@/icons/nextjs.svg";
import Passport from "@/icons/passport.svg";
import Tailwind from "@/icons/tailwind.svg";
import TypeScript from "@/icons/typescript.svg";
import Vercel from "@/icons/vercel.svg";
import Railway from "@/icons/railway.svg";
import Astro from "@/icons/astro.svg";
import Preact from "@/icons/preact.svg";
import Github from "@/icons/github.svg";
import ExternalLink from "@/icons/external-link.svg";

export type TailwindClass<P extends string> = `${P}-${string}`;
type TailwindHover<P extends string> = `hover:${TailwindClass<P>}`;
type SVGProps = Partial<{
  className: string;
  viewBox: string;
  width: number | string;
  height: number | string;
  strokeWidth: number;
  stroke: TailwindClass<"stroke">;
  fill: TailwindClass<"fill">;
  hover: TailwindHover<"fill" | "stroke">;
}>;

type MiscIcons =
  | "github"
  | "twitter"
  | "linkedin"
  | "blogs"
  | "projects"
  | "external-link";

type IconProps = { name: Technologies | MiscIcons } & SVGProps;

const Icon = (props: IconProps) => {
  return icons[props.name](props);
};

export const icons: Record<
  Technologies | MiscIcons,
  (props: IconProps) => JSX.Element
> = {
  react: (props) => (
    <React
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  javascript: (props) => (
    <JavaScript
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  cloudinary: (props) => (
    <Cloudinary
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  typescript: (props) => (
    <TypeScript
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  nextjs: (props) => (
    <NextJS className={cn(props.hover, props.className)} {...props} />
  ),
  netlify: (props) => (
    <Netlify
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  vercel: (props) => (
    <Vercel
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  mongodb: (props) => (
    <MongoDB
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  mongoose: (props) => (
    <Mongoose
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  css: (props) => (
    <CSS
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  ejs: (props) => (
    <EJS
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  tailwind: (props) => (
    <Tailwind
      className={cn(props.hover, props.className)}
      {...props}
    />
  ),
  passport: (props) => (
    <Passport
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  railway: (props) => (
    <Railway
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  node: (props) => (
    <Node
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  express: (props) => (
    <Express
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  mdx: (props) => (
    <MDX
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  astro: (props) => (
    <Astro
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  preact: (props) => (
    <Preact
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  github: (props) => (
    <Github
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  linkedin: (props) => (
    <Preact
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  twitter: (props) => (
    <Preact
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  blogs: (props) => (
    <Preact
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  projects: (props) => (
    <Preact
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
  "external-link": (props) => (
    <ExternalLink
      className={cn(props.hover, props.stroke, props.fill, props.className)}
      {...props}
    />
  ),
};

export default Icon;
