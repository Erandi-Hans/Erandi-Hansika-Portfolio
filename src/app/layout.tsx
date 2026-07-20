import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G.M.E. Hansika | Portfolio",
  description: "Bento Grid Portfolio of G.M.E. Hansika, BICT (Hons) undergraduate at the University of Vavuniya, passionate about Semantic Computing, NLP, and Full-Stack Development.",
  keywords: [
    "G.M.E. Hansika",
    "Portfolio",
    "Bento Grid",
    "Semantic Computing",
    "NLP",
    "Undergraduate Researcher",
    "BICT",
    "University of Vavuniya",
    "React.js",
    ".NET Core",
    "Python",
    "Tailwind",
    "SQL",
    "MongoDB",
    "Docker"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}>
      <body className="bg-[#08080a] text-[#ededef] font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
