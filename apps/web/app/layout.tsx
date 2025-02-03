import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Layout } from "@workspace/layout/components/layout";
import { Header } from "@workspace/layout/components/header";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Layout
          header={
            <Header
              navLinks={[
                { name: "Home", url: "/" },
                { name: "Recipes", url: "/recipes" },
                { name: "Login", url: "/login" },
                { name: "Register", url: "/register" },
              ]}
            />
          }
          footer={<footer>Footer</footer>}
        >
          <Providers>{children}</Providers>
        </Layout>
      </body>
    </html>
  );
}
