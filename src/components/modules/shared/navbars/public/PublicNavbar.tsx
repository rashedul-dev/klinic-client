"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/home";
import { ThemeToggle } from "@/components/themeToggle";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Use Next.js hook

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group " onClick={closeMenu}>
          <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors ">
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
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          
          <Link href="/register">
            <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-md shadow-primary/20">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-background p-4 animate-in slide-in-from-top-2 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "text-sm font-medium py-2 transition-colors hover:text-primary block border-b border-border/40 last:border-0",
                  pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 grid gap-2">
              <Link href="/signin" onClick={closeMenu}>
                <Button variant="outline" className="w-full justify-center">
                  Log in
                </Button>
              </Link>
              <Link href="/register" onClick={closeMenu}>
                <Button className="w-full justify-center bg-primary shadow-lg shadow-primary/20">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
