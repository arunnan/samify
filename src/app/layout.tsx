import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/app/providers/route-provider";
import { ThemeProvider } from "@/app/providers/theme-provider";
import "@/app/assets/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Samify",
  description: "Your app description",
};

export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.variable} bg-primary antialiased`}>
        <RouteProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </RouteProvider>
      </body>
    </html>
  );
}