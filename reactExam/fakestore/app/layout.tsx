import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fake Shop",
  description: "Exam for Bemeir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-start p-10">
          <h1 className="text-3xl text-orange-600">Online Shop</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
