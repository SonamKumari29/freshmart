"use client"

import { motion } from "framer-motion"
import { Truck, Leaf, Clock, Star, Shield, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Fast Delivery",
    description: "Get your groceries delivered within 30 minutes",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Fresh Products",
    description: "100% fresh and organic products",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round the clock customer support",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Best Quality",
    description: "Quality assured products",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Payment",
    description: "Safe and secure payment options",
    color: "from-red-500 to-red-600"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority",
    color: "from-pink-500 to-pink-600"
  }
]

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Why Choose Us?</h1>
          <p className="text-lg text-muted-foreground">
            We are committed to providing the best grocery shopping experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 