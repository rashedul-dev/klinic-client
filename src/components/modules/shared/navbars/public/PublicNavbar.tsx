import { Activity, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/home";
import { ThemeToggle } from "@/components/themeToggle";
import Link from "next/link";
import { getCookie } from "@/services/auth/tokenhandler";
import LogoutButton from "@/components/shared/LogoutButton";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default async function Navbar() {
  const accessToken = await getCookie("accessToken");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Activity className="h-6 w-6 text-purple-400" />
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            Klinic
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("text-sm font-medium transition-colors hover:text-primary text-muted-foreground")}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          {accessToken ? (
            <LogoutButton />
          ) : (
            <Link href="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-md shadow-primary/20">
                Get Started
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t pt-4 flex flex-col space-y-4">
                  <div className="flex justify-center"></div>
                  {accessToken ? (
                    <LogoutButton />
                  ) : (
                    <>
                      <Link href="/login" className="w-full">
                        <Button variant="outline" className="w-full justify-center">
                          Login
                        </Button>
                      </Link>
                      <Link href="/register" className="w-full">
                        <Button className="w-full justify-center bg-primary shadow-lg shadow-primary/20">
                          Get Started
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
