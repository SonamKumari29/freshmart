"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye } from "lucide-react";

const orders = [
  {
    id: "ORD001",
    customer: "Priya Sharma",
    date: "2024-03-15",
    items: ["Fresh Alphonso Mangoes", "Organic Vegetables"],
    total: "₹1,299",
    status: "Delivered",
    payment: "Paid",
  },
  {
    id: "ORD002",
    customer: "Amit Patel",
    date: "2024-03-14",
    items: ["Fresh Farm Eggs", "Whole Wheat Bread"],
    total: "₹899",
    status: "Processing",
    payment: "Paid",
  },
  {
    id: "ORD003",
    customer: "Neha Gupta",
    date: "2024-03-14",
    items: ["Organic Milk", "Fresh Fruits Bundle"],
    total: "₹2,499",
    status: "Pending",
    payment: "Pending",
  },
  {
    id: "ORD004",
    customer: "Rajesh Kumar",
    date: "2024-03-13",
    items: ["Mixed Vegetables Pack", "Fresh Bread"],
    total: "₹799",
    status: "Delivered",
    payment: "Paid",
  },
  {
    id: "ORD005",
    customer: "Anita Singh",
    date: "2024-03-13",
    items: ["Premium Fruits Pack", "Dairy Products"],
    total: "₹1,899",
    status: "Processing",
    payment: "Paid",
  },
];

export default function AdminOrders() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Orders</h1>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search orders..."
              className="max-w-sm"
              prefix={<Search className="w-4 h-4 text-gray-400" />}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export</Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Items</th>
                <th className="text-left py-3 px-4">Total</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Payment</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {order.items.join(", ")}
                    </span>
                  </td>
                  <td className="py-3 px-4">{order.total}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === "Delivered" ? "bg-green-100 text-green-800" :
                      order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      order.payment === "Paid" ? "bg-green-100 text-green-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {order.payment}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
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