"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndianRupee, Clock, Truck, Package, MapPin, Phone } from "lucide-react"

const deliveryOptions = [
  {
    title: "Express Delivery",
    description: "Within 2 hours",
    price: "₹49",
    details: "Get your groceries delivered within 2 hours. Perfect for urgent needs.",
    icon: <Clock className="w-6 h-6 text-primary" />
  },
  {
    title: "Standard Delivery",
    description: "Same Day",
    price: "Free on orders above ₹1000",
    details: "Choose your preferred 2-hour delivery slot. Available 7 AM to 10 PM.",
    icon: <Truck className="w-6 h-6 text-primary" />
  },
  {
    title: "Scheduled Delivery",
    description: "Next Day",
    price: "Free on orders above ₹500",
    details: "Schedule your delivery for the next day. Choose from available slots.",
    icon: <Package className="w-6 h-6 text-primary" />
  }
]

const serviceAreas = [
  {
    city: "Mumbai",
    areas: ["Andheri", "Bandra", "Juhu", "Malad", "Powai", "Thane"]
  },
  {
    city: "Delhi",
    areas: ["Connaught Place", "Gurgaon", "Noida", "Saket", "Vasant Kunj"]
  },
  {
    city: "Bangalore",
    areas: ["Indiranagar", "Koramangala", "Whitefield", "Marathahalli", "HSR Layout"]
  }
]

export default function ShippingInfoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Delivery Information
          </h1>
          <p className="text-muted-foreground text-lg">
            Fast and reliable grocery delivery at your doorstep
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {deliveryOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                <CardHeader className="flex flex-row items-center gap-3">
                  {option.icon}
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium mb-2">{option.description}</p>
                  <p className="text-primary font-bold mb-4 flex items-center">
                    <IndianRupee className="w-4 h-4 mr-1" />
                    {option.price}
                  </p>
                  <p className="text-muted-foreground">{option.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/5 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-background p-4 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {area.city}
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  {area.areas.map((locality, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {locality}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-muted p-6 rounded-lg text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            Our delivery team is available 24/7 to assist you
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91-98765-43210</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 