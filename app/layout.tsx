import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import { scope } from "@/lib/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "schnee.dev",
  description: "Brian Schnee's website",
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
          <div className="text-secondary container flex max-w-2xl flex-col px-8 pb-8 text-sm">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
