'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-primary/20 to-transparent">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&auto=format&fit=crop&q=80"
          alt="Fresh vegetables"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>
      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6 text-foreground"
          >
            Fresh Groceries Delivered to Your Doorstep
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Shop from our wide selection of fresh fruits, vegetables, and daily essentials.
            Get same-day delivery!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <Link href="/categories">Shop Now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}