"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface OrderSummaryClientProps {
  orderId: string;
}

export function OrderSummaryClient({ orderId }: OrderSummaryClientProps) {
  // Dummy order data for UI demonstration
  const order = {
    orderId: orderId || "ORD-2024001",
    date: new Date().toISOString(),
    items: [
      {
        id: 1,
        name: "Fresh Alphonso Mangoes",
        price: 599,
        quantity: 2,
        weight: "1 kg"
      },
      {
        id: 2,
        name: "Organic Mixed Vegetables",
        price: 299,
        quantity: 1,
        weight: "2 kg"
      }
    ],
    subtotal: 1497,
    gstRate: 0.18,
    gstAmount: 269.46,
    deliveryFee: 49,
    total: 1815.46,
    customerDetails: {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      address: "123 Main Street",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001"
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Invoice Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-purple-600 flex items-center justify-center rounded-lg">
              <span className="text-2xl font-bold text-white">F</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Order Summary
              </h1>
              <p className="text-gray-600">Thank you for shopping with Freshmart!</p>
            </div>
          </div>
          <Button onClick={handlePrint}>
            Download Invoice
          </Button>
        </div>

        {/* Order Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Order Details
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Order ID</p>
                <p className="font-medium">{order.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Order Date</p>
                <p className="font-medium">
                  {new Date(order.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Status</p>
                <p className="font-medium text-green-600">Confirmed</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Shipping Details
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Name</p>
                <p className="font-medium">{order.customerDetails.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Address</p>
                <p className="font-medium">
                  {order.customerDetails.address},
                  <br />
                  {order.customerDetails.city}, {order.customerDetails.state}
                  <br />
                  {order.customerDetails.pincode}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Contact</p>
                <p className="font-medium">{order.customerDetails.phone}</p>
                <p className="text-sm text-gray-600">{order.customerDetails.email}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Order Items */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Order Items
          </h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-4 border-b">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Quantity: {item.quantity} ({item.weight})
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                  <p className="text-sm text-gray-600">₹{item.price} each</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{order.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>GST ({order.gstRate * 100}%)</span>
              <span>₹{order.gstAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>₹{order.deliveryFee}</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-4 border-t">
              <span>Total</span>
              <span>₹{order.total.toLocaleString()}</span>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/">Continue Shopping</Link>
          </Button>
          <Button onClick={handlePrint}>
            Download Invoice
          </Button>
        </div>
      </motion.div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .container, .container * {
            visibility: visible;
          }
          .container {
            position: absolute;
            left: 0;
            top: 0;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
} 