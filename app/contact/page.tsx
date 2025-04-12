"use client"

import { motion } from "framer-motion"
import { MessageSquare, Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91 98765 43210",
    description: "Available 24/7"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "support@freshmart.com",
    description: "Response within 24 hours"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    value: "123 Fresh Street, Mumbai",
    description: "Visit our store"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    value: "7:00 AM - 11:00 PM",
    description: "Everyday"
  }
]

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80">
              We're here to help! Get in touch with us for any queries or support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Your message" rows={5} />
                </div>
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Support Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Chat with our support team for instant assistance
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 