import { serif } from "@/lib/fonts";

const Main = () => {
  return (
    <>
      <h1 className={`${serif.className} text-base text-primary-color`}>
        Brian Schnee
      </h1>
      <h2 className="mt-4">Full-Stack Software Engineer</h2>
    </>
  );
};

export default Main;
