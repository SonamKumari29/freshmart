"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Search, Menu, Heart, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Notifications } from "@/components/notifications"

interface Route {
  href: string;
  label: string;
  active: boolean;
}

export function MainNav() {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith("/admin")

  if (isAdminPage) return null

  const routes: Route[] = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/categories",
      label: "Categories",
      active: pathname?.startsWith("/categories") ?? false,
    },
    {
      href: "/deals",
      label: "Deals",
      active: pathname?.startsWith("/deals") ?? false,
    },
    {
      href: "/why-choose-us",
      label: "Why Choose Us",
      active: pathname === "/why-choose-us",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
              <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[300px]">
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-base sm:text-lg font-medium transition-colors hover:text-primary",
                    route.active ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t">
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 sm:h-9 sm:w-9">
                  <Link href="/profile">
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">Profile</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 sm:h-9 sm:w-9">
                  <Link href="/delivery">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">Delivery</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-8 w-8 sm:h-9 sm:w-9">
                  <Link href="/cart">
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">Cart</span>
                  </Link>
                </Button>
                <Notifications />
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl sm:text-3xl font-bold text-primary">FreshMart</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                route.active ? "text-primary" : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search products..."
              className="h-10 w-[150px] lg:w-[200px] text-base"
            />
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild className="h-10 w-10 sm:h-11 sm:w-11">
              <Link href="/profile">
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-10 w-10 sm:h-11 sm:w-11">
              <Link href="/delivery">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Delivery</span>
              </Link>
            </Button>
            <Notifications />
            <Button variant="ghost" size="icon" asChild className="h-10 w-10 sm:h-11 sm:w-11">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}