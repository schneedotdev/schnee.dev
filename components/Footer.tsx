const Footer = () => {
  return (
    <footer className="mt-20 mb-10 flex h-1 w-full max-w-xl text-xs">
      <h5>
        <span className="border-b border-dotted">CC BY-NC 4.0</span> 2023 &copy;
        Brian Schnee.
      </h5>
      <div className="pointer-events-none fixed right-0 bottom-0 z-10 w-full">
        <div className="from-background-opaque h-10 w-full bg-linear-to-t"></div>
        <div className="pb12 bg-background-opaque h-10 w-full pt-1"></div>
      </div>
    </footer>
  );
};

export default Footer;
