"use client"

import { motion } from "framer-motion"
import { FileText, AlertCircle, ShoppingBag, CreditCard, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const sections = [
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Ordering and Delivery",
    content: [
      "Orders can be placed through our website or mobile app",
      "Delivery times may vary based on location",
      "Minimum order value applies",
      "Delivery charges may apply",
      "Order cancellation policy"
    ]
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Payments and Refunds",
    content: [
      "Accepted payment methods",
      "Secure payment processing",
      "Refund policy and timelines",
      "Cancellation charges",
      "Payment disputes resolution"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "User Responsibilities",
    content: [
      "Account security",
      "Accurate information",
      "Prohibited activities",
      "Content guidelines",
      "Compliance with laws"
    ]
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Limitations and Disclaimers",
    content: [
      "Product availability",
      "Price changes",
      "Service interruptions",
      "Third-party links",
      "Limitation of liability"
    ]
  }
]

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Please read these terms carefully before using our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert">
              <p className="lead">
                Welcome to FreshMart! These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {section.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                          <ul className="space-y-2">
                            {section.content.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p>
                  All content on our website, including text, graphics, logos, and images, is the property of FreshMart and is protected by intellectual property laws.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any significant changes through our website or email.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2">
                  Email: legal@freshmart.com<br />
                  Phone: +91 98765 43210
                </p>
              </div>

              <div className="mt-12 text-sm text-muted-foreground">
                <p>
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 