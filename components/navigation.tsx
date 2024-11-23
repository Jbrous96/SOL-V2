"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/directory",
      label: "Directory",
      active: pathname === "/directory",
    },
    {
      href: "/categories",
      label: "Categories",
      active: pathname === "/categories",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="text-lg font-bold">Shops Of Legacy</span>
        </Link>

        <div className="hidden md:flex md:flex-1">
          <div className="flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button>Submit Listing</Button>
          </div>
        </div>

        <div className="flex flex-1 justify-end md:hidden">
          <Button
            variant="ghost"
            className="mr-2"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <div className="container flex flex-col gap-6 p-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Button className="mt-4">Submit Listing</Button>
          </div>
        </div>
      )}
    </header>
  );
}