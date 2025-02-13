import { Geist, Geist_Mono } from "next/font/google";
import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Layout } from "@workspace/ui/components/layout/layout";
import { Header } from "@workspace/ui/components/layout/header";
import { Footer } from "@workspace/ui/components/layout/footer";
import { Route } from "@/lib/routes";
import { Toaster } from "@workspace/ui/components/toaster";
import { getSession } from "@/actions/auth";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const navLinks = [
    { name: "Home", url: Route.Home },
    { name: "Recipes", url: Route.Recipes },
    { name: "My Recipes", url: Route.MyRecipes },
  ];
  if (!session) {
    navLinks.push({ name: "Login", url: Route.AuthLogin });
    navLinks.push({ name: "Register", url: Route.AuthRegister });
  }
  if (session) {
    navLinks.push({ name: "Profile", url: Route.Profile });
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <Layout
          header={<Header navLinks={navLinks} />}
          footer={<Footer navLinks={navLinks} />}
        >
          <Providers>
            {session ? <div>Logged in</div> : <div>Logged out</div>}
            {children}
            <Toaster />
          </Providers>
        </Layout>
      </body>
    </html>
  );
}
