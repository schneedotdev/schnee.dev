import type { MDXComponents } from "mdx/types";

type Children = {
  children: React.ReactNode;
};

function h1({ children }: Children) {
  return <h1 className="text-base text-primary">{children}</h1>;
}

function h2({ children }: Children) {
  return <h2 className="text-base text-primary">{children}</h2>;
}

function p({ children }: Children) {
  return <p className="mt-1 text-secondary">{children}</p>;
}

export function useMDXComponents(components: MDXComponents) {
  return {h1, h2, p, ...components}
}
