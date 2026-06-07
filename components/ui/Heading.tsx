import { serif } from "@/lib/fonts";

type HeadingProps = {
  title: React.ReactNode;
  emoji?: string;
};

const Heading = ({ title, emoji }: HeadingProps) => {
  return (
    <h1 className={`${serif.className} text-primary text-base tracking-wide`}>
      {title}
      {emoji && <span className="ml-1">{emoji}</span>}
    </h1>
  );
};

export default Heading;
