import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function AdminNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/admin" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">FreshMart Admin</span>
        </Link>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 dark:text-gray-300">Admin User</span>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
} 