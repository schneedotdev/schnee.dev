import Header from "@/components/Header";
import "./globals.css";
import { scope } from "@/lib/fonts";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hire Me!",
  description: "Brian Schnee Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={scope.className}>
        <div className="flex h-full min-h-screen w-full flex-col items-center">
          <div className="container flex h-full w-full max-w-2xl flex-col justify-between px-12 pb-12 text-sm text-secondary-color lg:w-[55%]">
            <Header />
            <div className="mt-28 w-full lg:mt-36"></div>
            {children}
            <div className="mb-10 mt-20 h-1 w-full text-xs">
              <span className="border-b-[1px] border-dotted">CC BY-NC 4.0</span>{" "}
              2023 &copy; Brian Schnee.
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
