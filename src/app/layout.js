import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Hotel Avocado",
  description: "A demo app to help Dave Kerr get a job",
};

export default function RootLayout({ children }) {
  const imageWidth = 1385
  const imageHeight = 200

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-amber-400 2xl:px-40 xl:px-20 lg:px-10 sm:px-5 px-2`}>
        <nav className="mt-2 mb-5"> 
          <Link href="/">
            <Image src="/big-logo.png" alt="Hotel Avocado Logo" width={imageWidth/2} height={imageHeight/2} loading="eager" />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
