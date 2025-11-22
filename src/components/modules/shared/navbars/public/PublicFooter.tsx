import { Activity, Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-primary/40 mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Klinic</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advancing healthcare access with modern technology. Book doctors, tests, and explore plans easily.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/consultation" className="hover:text-primary">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/diagnostics" className="hover:text-primary">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link href="/health-plans" className="hover:text-primary">
                  Health Plans
                </Link>
              </li>
              <li>
                <Link href="/ngos" className="hover:text-primary">
                  NGO Partners
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about-us" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="/private-policy" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="terms-of-service" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Klinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
