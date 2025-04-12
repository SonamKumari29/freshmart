'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, LayoutDashboard, Package, ShoppingCart, Users, Settings, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const adminRoutes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/admin',
  },
  {
    label: 'Products',
    icon: Package,
    href: '/admin/products',
  },
  {
    label: 'Orders',
    icon: ShoppingCart,
    href: '/admin/orders',
  },
  {
    label: 'Customers',
    icon: Users,
    href: '/admin/customers',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/admin/settings',
  },
]

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn(
      "relative flex flex-col h-screen border-r bg-card",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b">
        <span className={cn(
          "font-bold text-xl transition-all",
          isCollapsed ? "opacity-0 hidden" : "opacity-100"
        )}>
          Admin Panel
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col gap-2 p-2">
          {adminRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors",
                isCollapsed ? "justify-center" : "justify-start"
              )}
            >
              <route.icon className="h-5 w-5" />
              {!isCollapsed && <span>{route.label}</span>}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}