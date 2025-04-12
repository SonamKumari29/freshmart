"use client";

import { Search, Plus } from "lucide-react";
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

export default function ProductsPage() {
  const products = [
    {
      id: "PROD001",
      name: "Fresh Alphonso Mangoes",
      category: "Fruits",
      price: "₹599",
      stock: 50,
      unit: "kg",
      image: "/mangoes.jpg"
    },
    {
      id: "PROD002",
      name: "Organic Tomatoes",
      category: "Vegetables",
      price: "₹49",
      stock: 100,
      unit: "kg",
      image: "/tomatoes.jpg"
    },
    {
      id: "PROD003",
      name: "Farm Fresh Eggs",
      category: "Dairy & Eggs",
      price: "₹89",
      stock: 200,
      unit: "dozen",
      image: "/eggs.jpg"
    },
    {
      id: "PROD004",
      name: "Whole Wheat Bread",
      category: "Bakery",
      price: "₹45",
      stock: 30,
      unit: "pack",
      image: "/bread.jpg"
    },
    {
      id: "PROD005",
      name: "Organic Milk",
      category: "Dairy & Eggs",
      price: "₹62",
      stock: 80,
      unit: "litre",
      image: "/milk.jpg"
    }
  ];

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage your product inventory and stock levels
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <SearchInput placeholder="Search products..." className="w-[150px] lg:w-[250px]" />
          <Button variant="outline">
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden">
            <div className="aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
                <div className="text-2xl font-bold text-muted-foreground">
                  {product.name[0]}
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div className="space-y-1">
                <h3 className="font-semibold leading-none tracking-tight">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{product.price}</span>
                  <span className={`text-sm ${
                    product.stock > 50 ? "text-green-600" :
                    product.stock > 20 ? "text-yellow-600" :
                    "text-red-600"
                  }`}>
                    Stock: {product.stock} {product.unit}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                  <Button variant="outline" size="sm" className="flex-1">View</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 