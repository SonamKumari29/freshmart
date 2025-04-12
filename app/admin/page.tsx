"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Package, Users, Truck, Settings, ShoppingCart, Calendar, TrendingUp, ArrowUp, ArrowDown, DollarSign } from "lucide-react"
import Image from "next/image"

const stats = [
  {
    title: "Total Revenue",
    value: "₹45,231",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Total Products",
    value: "89",
    change: "-2.4%",
    trend: "down",
    icon: Package,
  },
  {
    title: "Total Customers",
    value: "2,345",
    change: "+5.7%",
    trend: "up",
    icon: Users,
  },
]

const recentOrders = [
  {
    id: "ORD001",
    customer: "Priya Sharma",
    date: "2024-03-15",
    amount: "₹1,299",
    status: "Delivered",
  },
  {
    id: "ORD002",
    customer: "Amit Patel",
    date: "2024-03-14",
    amount: "₹899",
    status: "Processing",
  },
  {
    id: "ORD003",
    customer: "Neha Gupta",
    date: "2024-03-14",
    amount: "₹2,499",
    status: "Pending",
  },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container flex h-16 items-center justify-between">
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              March 2024
            </Button>
            <Button variant="outline" className="gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className="rounded-full p-3 bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  {stat.trend === "up" ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm ml-1 ${
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </Card>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recent Orders</h2>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Order #{order.id}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {order.customer}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">{order.amount}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Actions</h2>
            <div className="space-y-4">
              <Button className="w-full justify-start gap-2" variant="outline">
                <Package className="w-4 h-4" />
                Add New Product
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <ShoppingCart className="w-4 h-4" />
                Manage Inventory
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <BarChart className="w-4 h-4" />
                View Reports
              </Button>
              <Button className="w-full justify-start gap-2" variant="outline">
                <Users className="w-4 h-4" />
                Manage Staff
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}