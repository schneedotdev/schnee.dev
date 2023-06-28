const Footer = () => {
  return (
    <footer className="mb-10 mt-20 flex h-1 w-full max-w-xl text-xs">
      <h5>
        <span className="border-b-[1px] border-dotted">CC BY-NC 4.0</span> 2023
        &copy; Brian Schnee.
      </h5>
      <div className="pointer-events-none fixed bottom-0 right-0 z-10 w-full">
        <div className="h-10 w-full bg-gradient-to-t from-background-opaque"></div>
        <div className="pb12 h-10 w-full bg-background-opaque pt-1"></div>
      </div>
    </footer>
  );
};

export default Footer;
