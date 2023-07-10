import { serif } from "@/lib/fonts";

type HeadingProps = {
  content: React.ReactNode;
  emoji?: string;
};

const Heading = ({ content, emoji }: HeadingProps) => {
  return (
    <h1 className={`${serif.className} text-base tracking-wide text-primary`}>
      {content} {emoji || <span className="ml-1">{emoji}</span>}
    </h1>
  );
};

export default Heading;
