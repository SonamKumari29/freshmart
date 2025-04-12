"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const deals = [
  {
    id: 1,
    title: "Summer Fruits Bonanza",
    description: "Get up to 30% off on fresh seasonal fruits",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea",
    discount: "30%",
    validUntil: "2024-06-30",
    category: "fruits"
  },
  {
    id: 2,
    title: "Fresh Veggie Fiesta",
    description: "Buy any 2 vegetables and get 1 free",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c",
    discount: "Buy 2 Get 1",
    validUntil: "2024-06-30",
    category: "vegetables"
  },
  {
    id: 3,
    title: "Mango Mania",
    description: "Special discount on premium mangoes",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    discount: "25%",
    validUntil: "2024-06-15",
    category: "fruits"
  }
];

export default function DealsPage() {
  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Summer Special Banner */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518843875459-f738682238a6"
            alt="Summer Special"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="p-8 md:p-12 space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                Summer Special
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-white/90"
              >
                Enjoy fresh fruits & vegetables at amazing prices
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/categories">Shop Now</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Current Deals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/products?category=${deal.category}`}>
                <Card className="overflow-hidden group cursor-pointer">
                  <div className="relative h-48">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-semibold">
                      {deal.discount} OFF
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {deal.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {deal.description}
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Valid until {new Date(deal.validUntil).toLocaleDateString()}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 