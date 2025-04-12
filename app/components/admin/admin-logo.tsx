import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export function AdminLogo() {
  return (
    <Link href="/admin" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
      <div className="bg-primary p-1.5 rounded-lg">
        <ShoppingBag className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-none text-foreground">GroceryStore</span>
        <span className="text-xs text-muted-foreground dark:text-muted-foreground/80">Admin Dashboard</span>
      </div>
    </Link>
  )
} 