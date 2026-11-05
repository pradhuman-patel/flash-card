import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI/ML Interview Flashcards",
  description: "Personal flashcards for AI/ML Engineer interview preparation.",
};

// Applies the saved theme before first paint so dark mode doesn't flash white.
const themeScript = `try{if(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
