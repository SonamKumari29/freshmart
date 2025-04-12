"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function SearchInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative w-full sm:w-auto">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <Search className="w-4 h-4" />
      </div>
      <Input
        type="search"
        className={`pl-9 max-w-sm w-full ${className}`}
        {...props}
      />
    </div>
  );
}

export default function CustomersPage() {
  return (
    <div className="container py-4 sm:py-6 lg:py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Customers</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Manage your customer base
          </p>
        </div>
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
          <SearchInput placeholder="Search customers..." />
          <Button>Add Customer</Button>
        </div>
      </div>

      {/* Customer List */}
      <div className="grid gap-4 sm:gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Customer #{index + 1}</h3>
                <div className="space-y-1 mt-2">
                  <p className="text-sm text-muted-foreground">
                    Email: customer{index + 1}@example.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Phone: +91 98765-4321{index}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Location: Mumbai, India
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:items-start">
                <Button variant="outline" size="sm">View Orders</Button>
                <Button variant="outline" size="sm">Edit Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 