import Link from "next/link";
import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-bold">Shops Of Legacy</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting exceptional businesses worldwide, with roots in Plano, Texas.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Directory</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary">
                  Browse Categories
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-muted-foreground hover:text-primary">
                  Featured Businesses
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-muted-foreground hover:text-primary">
                  Submit Listing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shops Of Legacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}