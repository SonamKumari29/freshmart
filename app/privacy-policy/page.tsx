"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, CreditCard, Cookie } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const sections = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Information We Collect",
    content: [
      "Personal information (name, email, phone number)",
      "Delivery address and location data",
      "Payment information",
      "Order history and preferences",
      "Device and browser information"
    ]
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "How We Use Your Information",
    content: [
      "Process and deliver your orders",
      "Provide customer support",
      "Send order updates and notifications",
      "Improve our services",
      "Prevent fraud and ensure security"
    ]
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Information Sharing",
    content: [
      "With delivery partners for order fulfillment",
      "With payment processors for transactions",
      "With service providers for analytics",
      "When required by law",
      "With your consent"
    ]
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Data Security",
    content: [
      "Encrypted data transmission",
      "Secure payment processing",
      "Regular security audits",
      "Access controls",
      "Data backup and recovery"
    ]
  },
  {
    icon: <Cookie className="w-6 h-6" />,
    title: "Cookies and Tracking",
    content: [
      "Essential cookies for website functionality",
      "Analytics cookies for improvement",
      "Marketing cookies for personalization",
      "Cookie preferences management",
      "Third-party tracking controls"
    ]
  }
]

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Your privacy is important to us. Learn how we protect and manage your data.
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
                At FreshMart, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
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
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our Privacy Policy, please contact us at:
                </p>
                <p className="mt-2">
                  Email: privacy@freshmart.com<br />
                  Phone: +91 98765 43210
                </p>
              </div>

              <div className="mt-12 text-sm text-muted-foreground">
                <p>
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <p className="mt-2">
                  This Privacy Policy may be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 