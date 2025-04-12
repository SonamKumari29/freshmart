"use client"

import { motion } from "framer-motion"
import { Package, Truck, Clock, MapPin, CheckCircle, Phone, MessageSquare, AlertCircle } from "lucide-react"
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
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Your Deliveries
              </h1>
              <p className="text-muted-foreground mt-1">
                Track your orders in real-time
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: Just now</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-green-400 to-green-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total Deliveries</p>
                  <h3 className="text-3xl font-bold mt-1">24</h3>
                </div>
                <Package className="w-8 h-8 opacity-80" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-400 to-blue-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">In Transit</p>
                  <h3 className="text-3xl font-bold mt-1">8</h3>
                </div>
                <Truck className="w-8 h-8 opacity-80" />
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-400 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Delivered Today</p>
                  <h3 className="text-3xl font-bold mt-1">16</h3>
                </div>
                <CheckCircle className="w-8 h-8 opacity-80" />
              </div>
            </Card>
          </div>

          {/* Delivery Cards */}
          <div className="space-y-6">
            {deliveries.map((delivery) => (
              <motion.div
                key={delivery.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="group"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-200 bg-card">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${statusColors[delivery.status]}`} />
                        <h3 className="text-lg font-semibold text-foreground">
                          Order #{delivery.id}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          delivery.status === "Delivered" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                        }`}>
                          {delivery.status}
                        </span>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-start space-x-2 text-muted-foreground">
                          <MapPin className="w-5 h-5 mt-0.5" />
                          <span>{delivery.address}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Package className="w-5 h-5" />
                          <span>{delivery.items.join(", ")}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Clock className="w-5 h-5" />
                          <span>{delivery.time}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {delivery.status === "In Transit" && (
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Delivery Progress</span>
                            <span className="text-foreground">{delivery.progress}%</span>
                          </div>
                          <Progress value={delivery.progress} className="h-2" />
                          <div className="mt-2 text-sm text-muted-foreground">
                            Current Location: {delivery.currentLocation}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-end space-y-4">
                      <div className="text-right">
                        <p className="font-medium text-foreground">
                          {delivery.driver}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {delivery.phone}
                        </p>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        <Button variant="outline" className="w-full">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Driver
                        </Button>
                        <Button variant="outline" className="w-full">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                        <Button variant="outline" className="w-full">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Report Issue
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Payment Info */}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Payment Status</span>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        delivery.paymentStatus === "Paid" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}>
                        {delivery.paymentStatus}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-muted-foreground">Order Amount</span>
                      <span className="font-medium">{delivery.amount}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}