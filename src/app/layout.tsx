import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import { NavigationMenu, 
         NavigationMenuList, 
         NavigationMenuLink, 
         navigationMenuTriggerStyle,
       } from "@/components/ui/navigation-menu"
import Image from "next/image";
import imageLogo from "@/public/Home.png";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from '@/components/mode-toggle';
import Footer from '@/components/custom/footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Impungushe careers platform",
  description: "A centralised platform, for drivers and owners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navigation */}
          <nav
            className="flex justify-between">
              <div
              className="flex base-3/4 gap-2">
                {/* Insert the the logo */}
                <Link href="/" legacyBehavior passHref>
                  <Image
                    src={imageLogo}
                    alt="Picture of our logo"
                    width={100}
                    height={50}
                    className="cursor-pointer"
                  />              
                </Link>

                {/* Implement a navigation */}
                <NavigationMenu className="gap-2">
                  <NavigationMenuList>
                    <Link href="/registration/drivers-registration-flow" legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg hover:bg-purple-500`}>
                        Register as a Driver
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuList>
                  <NavigationMenuList>
                    <Link href="/registration/business-owners-registration-flow" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg hover:bg-purple-500`}>
                        Register as a Business Owner
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuList>
                  <NavigationMenuList>
                    <Link href="/company-details" legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg hover:bg-purple-500`}>
                        Company
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuList>
                  <NavigationMenuList>
                    <Link href="/contact-us" legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg hover:bg-purple-500`}>
                        Contact us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div 
              className="flex base-1/4 self-center">
                {/* Theme change component :) */}
                <ModeToggle/>
                <NavigationMenu>
                  <NavigationMenuList>
                    <Link href="/login" legacyBehavior passHref>
                      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-lg hover:bg-green-300`}>
                        Login
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
          </nav>

          {/* Body implementations. */}
          <section 
            className="mx-[115px]"
          >
            {children}
          </section>

          {/* footer implementations. */}
          <section>
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
