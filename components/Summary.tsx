type SummaryProps =
  | {
      children: React.ReactNode;
      paragraphs?: never;
    }
  | {
      children?: never;
      paragraphs: React.ReactNode[];
    };

const Summary = ({ children, paragraphs }: SummaryProps) => {
  const content = paragraphs ?? [children];

  return (
    <div className="mt-10 flex flex-col gap-3">
      {content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Summary;
