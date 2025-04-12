"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const orders = [
  {
    id: "ORD001",
    date: "2024-03-15",
    status: "Delivered",
    total: "₹1,299",
    items: ["Fresh Fruits Bundle", "Organic Vegetables"]
  },
  {
    id: "ORD002",
    date: "2024-03-10",
    status: "Processing",
    total: "₹899",
    items: ["Dairy Products", "Fresh Bread"]
  }
]

const addresses = [
  {
    id: 1,
    type: "Home",
    address: "123, Green Valley Apartments, Sector 18",
    city: "Mumbai",
    pincode: "400001"
  },
  {
    id: 2,
    type: "Office",
    address: "456, Tech Park, MG Road",
    city: "Mumbai",
    pincode: "400002"
  }
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")

  return (
    <div className="container px-4 py-6 sm:py-8 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
            <AvatarImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d" />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Rahul Agarwal
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              rahul.agarwal@email.com
            </p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="personal">Personal Details</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="p-4 sm:p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      First Name
                    </label>
                    <Input defaultValue="Rahul" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Last Name
                    </label>
                    <Input defaultValue="Agarwal" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input defaultValue="rahul.agarwal@email.com" type="email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone</label>
                  <Input defaultValue="+91 98765 43210" type="tel" />
                </div>
                <Button type="submit" className="w-full sm:w-auto">Save Changes</Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{order.id}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        {order.status}
                      </span>
                      <p className="mt-1 font-semibold">{order.total}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {order.items.join(", ")}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addresses">
            <div className="space-y-4">
              {addresses.map((address) => (
                <Card key={address.id} className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">{address.type}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {address.address}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {address.city} - {address.pincode}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">Edit</Button>
                      <Button variant="destructive" size="sm" className="flex-1 sm:flex-none">Delete</Button>
                    </div>
                  </div>
                </Card>
              ))}
              <Button className="w-full">Add New Address</Button>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}