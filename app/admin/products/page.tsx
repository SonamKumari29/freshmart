"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2 } from "lucide-react";

const products = [
  {
    id: "PRD001",
    name: "Fresh Alphonso Mangoes",
    category: "Fruits",
    price: "₹599",
    stock: 45,
    status: "In Stock",
  },
  {
    id: "PRD002",
    name: "Organic Mixed Vegetables Pack",
    category: "Vegetables",
    price: "₹299",
    stock: 30,
    status: "Low Stock",
  },
  {
    id: "PRD003",
    name: "Fresh Farm Eggs",
    category: "Dairy & Eggs",
    price: "₹89",
    stock: 100,
    status: "In Stock",
  },
  {
    id: "PRD004",
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: "₹45",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "PRD005",
    name: "Organic Milk",
    category: "Dairy & Eggs",
    price: "₹62",
    stock: 25,
    status: "In Stock",
  },
];

export default function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search products..."
              className="max-w-sm"
              prefix={<Search className="w-4 h-4 text-gray-400" />}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Sort</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">ID</th>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Stock</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-3 px-4">{product.id}</td>
                  <td className="py-3 px-4">{product.name}</td>
                  <td className="py-3 px-4">{product.category}</td>
                  <td className="py-3 px-4">{product.price}</td>
                  <td className="py-3 px-4">{product.stock}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === "In Stock" ? "bg-green-100 text-green-800" :
                      product.status === "Low Stock" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
} 