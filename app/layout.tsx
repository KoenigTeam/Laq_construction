import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const themeInit = `
(() => {
  if (typeof window === 'undefined') return;
  const stored = window.localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
})();
`;

export const metadata: Metadata = {
  title: "Laq Construction | San Antonio Builders",
  description:
    "Glassmorphism-forward construction site for San Antonio & South Texas projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
