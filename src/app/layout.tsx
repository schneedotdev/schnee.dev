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
        <div className="flex flex-col items-center">
          <div className="flex max-w-2xl flex-col justify-between px-12 pb-12 text-sm text-secondary-color lg:w-[55%]">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
