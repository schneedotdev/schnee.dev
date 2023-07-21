import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";

import { cn } from "@/lib/utils";

const components = {
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) => (
    <h2
      className={cn("flex items-center gap-2 text-xl", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) => (
    <h3
      className={cn("flex items-center gap-2 text-lg ", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) => (
    <h4
      className={cn("flex items-center gap-2 text-base ", className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) => (
    <h5
      className={cn("flex items-center gap-2 text-base ", className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) => (
    <h6
      className={cn("flex items-center gap-2 text-base ", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("text-base text-accent hover:text-[#0c885f]", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("my-4 text-base leading-6 text-secondary", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("ml-6 list-decimal", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("my-8 rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-8 border-tertiary" {...props} />,
};

type MdxProps = {
  code: string;
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
