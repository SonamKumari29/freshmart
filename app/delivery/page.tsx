"use client"

import { motion } from "framer-motion"
import { Package, Truck, Clock, MapPin, CheckCircle, Phone, MessageSquare, AlertCircle, Home } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const deliveries = [
  {
    id: "DEL123",
    status: "In Transit",
    address: "123 Green Park, Mumbai",
    items: ["Fresh Vegetables", "Dairy Products"],
    time: "Expected by 2:30 PM",
    driver: "Rajesh Kumar",
    phone: "+91 98765-43210",
    progress: 60,
    estimatedTime: "30 mins",
    currentLocation: "Near Andheri Station",
    paymentStatus: "Paid",
    amount: "₹1,250"
  },
  {
    id: "DEL124",
    status: "Delivered",
    address: "456 Lake View, Delhi",
    items: ["Fruits", "Beverages"],
    time: "Delivered at 1:15 PM",
    driver: "Amit Singh",
    phone: "+91 98765-43211",
    progress: 100,
    estimatedTime: "Delivered",
    currentLocation: "Delivered",
    paymentStatus: "Paid",
    amount: "₹950"
  }
]

const statusColors = {
  "In Transit": "bg-blue-500",
  "Delivered": "bg-green-500",
  "Pending": "bg-yellow-500"
} as const

export default function DeliveryPage() {
  const deliverySteps = [
    {
      icon: Package,
      title: "Order Packed",
      description: "Your order has been packed and is ready for delivery",
      time: "10:30 AM",
      completed: true
    },
    {
      icon: Truck,
      title: "Out for Delivery",
      description: "Our delivery partner is on the way",
      time: "11:45 AM",
      completed: true
    },
    {
      icon: Home,
      title: "Arriving Soon",
      description: "Expected delivery in 15 minutes",
      time: "12:15 PM",
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-4 sm:py-8 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Your Deliveries
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-1">
                Track your orders in real-time
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Last updated: Just now</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-green-400 to-green-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm opacity-90">Total Deliveries</p>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1">24</h3>
                </div>
                <Package className="w-6 h-6 sm:w-8 sm:h-8 opacity-80" />
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-400 to-blue-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm opacity-90">In Transit</p>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1">8</h3>
                </div>
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 opacity-80" />
              </div>
            </Card>

            <Card className="p-4 sm:p-6 bg-gradient-to-br from-purple-400 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm opacity-90">Delivered Today</p>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1">16</h3>
                </div>
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 opacity-80" />
              </div>
            </Card>
          </div>

          {/* Order Info */}
          <Card className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-0 mb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">Order #FM2024046</h2>
                <p className="text-sm text-muted-foreground">Estimated Delivery: Today, 12:30 PM</p>
              </div>
              <div className="sm:text-right">
                <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs sm:text-sm">
                  On Time
                </span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-sm sm:text-base font-medium mb-2">Delivery Address</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Amit Kumar Sharma<br />
                A-101, Sunshine Heights<br />
                Andheri West, Mumbai - 400053<br />
                Phone: +91 9876543210
              </p>
            </div>
          </Card>

          {/* Tracking Steps */}
          <div className="relative px-2 sm:px-4">
            {deliverySteps.map((step, index) => (
              <div key={index} className="flex items-start mb-6 sm:mb-8 relative">
                {index < deliverySteps.length - 1 && (
                  <div className={`absolute left-[13px] sm:left-[15px] top-[26px] sm:top-[30px] w-[2px] h-[calc(100%-10px)] ${step.completed ? "bg-green-500" : "bg-gray-200"}`} />
                )}
                <div className={`rounded-full p-1.5 sm:p-2 ${step.completed ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                  <step.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="ml-3 sm:ml-4 flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                    <div>
                      <h3 className="text-sm sm:text-base font-medium">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{step.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Partner Info */}
          <Card className="p-4 sm:p-6">
            <h3 className="text-sm sm:text-base font-medium mb-4">Delivery Partner</h3>
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl font-medium">RS</span>
              </div>
              <div className="ml-3 sm:ml-4">
                <h4 className="text-sm sm:text-base font-medium">Rajesh Singh</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">ID: FM-DEL-1234</p>
              </div>
              <Button className="ml-auto text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 h-auto">
                Contact
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}