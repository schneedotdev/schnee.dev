import Reading from "@/components/Reading";
import Heading from "@/components/ui/Heading";
import Summary from "@/components/Summary";

const ReadingPage = async () => {
  return (
    <>
      <Heading title="Reading" emoji="📚" />
      <Summary>
        A running list of books I’ve read or am currently reading. Most connect
        back to software in some way, whether through code, systems, teams,
        decision-making, or shaping ideas into useful things.
      </Summary>
      <Reading />
    </>
  );
};

export default ReadingPage;
