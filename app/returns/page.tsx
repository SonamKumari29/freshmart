"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndianRupee, Clock, Package, Shield, Phone, AlertCircle } from "lucide-react"

const returnSteps = [
  {
    title: "1. Report the Issue",
    description: "Contact us within 24 hours of delivery to report any issues with your order.",
    icon: <AlertCircle className="w-6 h-6 text-primary" />
  },
  {
    title: "2. Quality Check",
    description: "Our team will verify the issue and arrange for a replacement or refund.",
    icon: <Shield className="w-6 h-6 text-primary" />
  },
  {
    title: "3. Return Pickup",
    description: "We'll pick up the items from your doorstep at no extra cost.",
    icon: <Package className="w-6 h-6 text-primary" />
  },
  {
    title: "4. Refund Process",
    description: "Refunds are processed within 24-48 hours of receiving the returned items.",
    icon: <IndianRupee className="w-6 h-6 text-primary" />
  }
]

const returnPolicy = {
  perishable: [
    "Fresh fruits and vegetables can be returned within 24 hours if found damaged or spoiled",
    "Dairy products and meat items can be returned if delivered past their expiry date",
    "Frozen items can be returned if the cold chain was broken during delivery"
  ],
  nonPerishable: [
    "Packaged food items can be returned within 7 days if unopened and in original condition",
    "Household items can be returned within 15 days if unused and in original packaging",
    "Personal care products can be returned if unopened and in original condition"
  ]
}

export default function ReturnsPage() {
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
            Returns & Refunds
          </h1>
          <p className="text-muted-foreground text-lg">
            Our hassle-free return policy ensures your complete satisfaction
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-primary/5 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Return Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {returnSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                  <CardHeader className="flex flex-row items-center gap-3">
                    {step.icon}
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-muted p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Perishable Items
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {returnPolicy.perishable.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-muted p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Non-Perishable Items
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              {returnPolicy.nonPerishable.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-primary/5 p-6 rounded-lg text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Need Help with Returns?</h2>
          <p className="text-muted-foreground mb-6">
            Our customer support team is available 24/7 to assist you
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="default" className="gap-2">
              <Phone className="w-4 h-4" />
              Call Support
            </Button>
            <Button variant="outline" className="gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Support
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 