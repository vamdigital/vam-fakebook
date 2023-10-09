import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideBar } from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fakebook",
  description: "A concept accounting site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}, flex w-full`}>
        <div className="flex flex-col w-40">
          <SideBar />
        </div>
        <main className="flex flex-col w-full p-3">
          <div className="container">
            <section className="flex flex-col w-full mt-10">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
