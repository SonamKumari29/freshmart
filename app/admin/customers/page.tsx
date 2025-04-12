"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone } from "lucide-react";

const customers = [
  {
    id: "CUST001",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    orders: 12,
    totalSpent: "₹15,499",
    joinDate: "2024-01-15",
  },
  {
    id: "CUST002",
    name: "Amit Patel",
    email: "amit.patel@email.com",
    phone: "+91 98765 43211",
    orders: 8,
    totalSpent: "₹8,999",
    joinDate: "2024-01-20",
  },
  {
    id: "CUST003",
    name: "Neha Gupta",
    email: "neha.gupta@email.com",
    phone: "+91 98765 43212",
    orders: 15,
    totalSpent: "₹22,499",
    joinDate: "2024-01-10",
  },
  {
    id: "CUST004",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43213",
    orders: 5,
    totalSpent: "₹6,799",
    joinDate: "2024-02-05",
  },
  {
    id: "CUST005",
    name: "Anita Singh",
    email: "anita.singh@email.com",
    phone: "+91 98765 43214",
    orders: 10,
    totalSpent: "₹12,899",
    joinDate: "2024-01-25",
  },
];

export default function AdminCustomers() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Customers</h1>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search customers..."
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
                <th className="text-left py-3 px-4">ID</th>
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Contact</th>
                <th className="text-left py-3 px-4">Orders</th>
                <th className="text-left py-3 px-4">Total Spent</th>
                <th className="text-left py-3 px-4">Join Date</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b">
                  <td className="py-3 px-4">{customer.id}</td>
                  <td className="py-3 px-4">{customer.name}</td>
                  <td className="py-3 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Mail className="w-4 h-4 mr-2" />
                        {customer.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Phone className="w-4 h-4 mr-2" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">{customer.orders}</td>
                  <td className="py-3 px-4">{customer.totalSpent}</td>
                  <td className="py-3 px-4">
                    {new Date(customer.joinDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">View Details</Button>
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