"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { IndianRupee, Clock, Truck, Package, Shield, Phone } from "lucide-react"

const faqs = [
  {
    question: "What are your delivery timings?",
    answer: "We deliver from 7 AM to 10 PM, 7 days a week. You can choose your preferred delivery slot during checkout.",
    icon: <Clock className="w-5 h-5 text-primary" />
  },
  {
    question: "What is the minimum order value?",
    answer: "The minimum order value is ₹500. However, we frequently run special promotions with lower minimum order values.",
    icon: <IndianRupee className="w-5 h-5 text-primary" />
  },
  {
    question: "How do I track my order?",
    answer: "You'll receive real-time SMS and WhatsApp updates about your order status. You can also track your order on our website or app.",
    icon: <Truck className="w-5 h-5 text-primary" />
  },
  {
    question: "What if I receive damaged items?",
    answer: "We ensure quality checks before delivery. If you receive any damaged items, please contact us within 24 hours for a replacement or refund.",
    icon: <Package className="w-5 h-5 text-primary" />
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, we use industry-standard encryption and secure payment gateways. Your payment information is completely safe with us.",
    icon: <Shield className="w-5 h-5 text-primary" />
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via WhatsApp at +91-98765-43210, call us at 1800-123-4567, or email us at support@freshmart.com",
    icon: <Phone className="w-5 h-5 text-primary" />
  }
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our grocery delivery service
          </p>
        </motion.div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem 
                value={`item-${index}`} 
                className="border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    <span className="text-lg font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-muted-foreground bg-muted/50">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-primary/5 rounded-lg text-center"
        >
          <p className="text-muted-foreground">
            Still have questions? Contact our customer support team 24/7
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="tel:+919876543210" className="text-primary hover:text-primary/80 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://wa.me/919876543210" className="text-primary hover:text-primary/80 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 