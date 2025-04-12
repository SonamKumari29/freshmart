"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "Fresh Alphonso Mangoes",
    price: 599,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    weight: "1 kg"
  },
  {
    id: 2,
    name: "Organic Mixed Vegetables",
    price: 299,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c",
    weight: "2 kg"
  },
  {
    id: 3,
    name: "Fresh Farm Eggs",
    price: 89,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f",
    weight: "12 pcs"
  }
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 49;
  const total = subtotal + deliveryFee;

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Shopping Cart ({items.length} items)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <Card className="p-4">
                  <div className="flex gap-4">
                    <div className="relative h-24 w-24 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.weight}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="font-semibold text-lg">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {items.length === 0 && (
              <Card className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Add some items to your cart to continue shopping
                </p>
                <Button asChild>
                  <Link href="/categories">Browse Categories</Link>
                </Button>
              </Card>
            )}
          </div>

          <div className="lg:sticky lg:top-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Order Summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Delivery Fee</span>
                  <span className="font-medium">₹{deliveryFee}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 