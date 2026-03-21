import type { Metadata } from "next";
import { Source_Serif_4, Space_Grotesk } from "next/font/google";
import "./assets/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Taxamy | Tax Management for Nigeria",
  description:
    "Taxamy is a Nigerian tax management system for tracking taxes, managing finance activity, and staying informed on new tax laws and compliance changes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${sourceSerif.variable} ${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
