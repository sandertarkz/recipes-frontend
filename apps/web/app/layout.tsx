import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Layout } from "@workspace/ui/components/layout/layout";
import { Header } from "@workspace/ui/components/layout/header";
import { Footer } from "@workspace/ui/components/layout/footer";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Recipes", url: "/recipes" },
  { name: "Login", url: "/login" },
  { name: "Register", url: "/register" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <Layout
          header={<Header navLinks={navLinks} />}
          footer={<Footer navLinks={navLinks} />}
        >
          <Providers>{children}</Providers>
        </Layout>
      </body>
    </html>
  );
}
