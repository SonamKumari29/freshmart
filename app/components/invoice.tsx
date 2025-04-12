"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

interface InvoiceProps {
  order: {
    orderId: string;
    date: string;
    items: Array<{
      id: number;
      name: string;
      price: number;
      quantity: number;
      weight: string;
    }>;
    subtotal: number;
    gstRate: number;
    gstAmount: number;
    total: number;
    customerDetails: {
      name: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      state: string;
      pincode: string;
    };
  };
}

export function Invoice({ order }: InvoiceProps) {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-purple-600 flex items-center justify-center rounded-lg">
            <span className="text-2xl font-bold text-white">F</span>
          </div>
          <h1 className="text-3xl font-bold">Invoice</h1>
        </div>
      </div>

      {/* Invoice Details and Billing Info */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-semibold mb-2">Invoice Details</h3>
          <div className="text-sm space-y-1">
            <p>Invoice No: {order.orderId}</p>
            <p>Invoice Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Due Date: {new Date(new Date(order.date).getTime() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Billed By</h3>
          <div className="text-sm space-y-1">
            <p className="font-medium">Freshmart</p>
            <p>123 Market Street,</p>
            <p>Mumbai, Maharashtra</p>
            <p>India - 400001</p>
            <p>GSTIN: 29ABCDE1234F1Z5</p>
            <p>Email: support@freshmart.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Billed To</h3>
          <div className="text-sm space-y-1">
            <p className="font-medium">{order.customerDetails.name}</p>
            <p>{order.customerDetails.address}</p>
            <p>{order.customerDetails.city}, {order.customerDetails.state}</p>
            <p>India - {order.customerDetails.pincode}</p>
            <p>Phone: {order.customerDetails.phone}</p>
            <p>Email: {order.customerDetails.email}</p>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <table className="w-full mb-8">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Item</th>
            <th className="text-left py-2">HSN/SAC</th>
            <th className="text-left py-2">GST Rate</th>
            <th className="text-right py-2">Quantity</th>
            <th className="text-right py-2">Rate</th>
            <th className="text-right py-2">Amount</th>
            <th className="text-right py-2">IGST</th>
            <th className="text-right py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => {
            const amount = item.price * item.quantity;
            const igst = amount * order.gstRate;
            const total = amount + igst;
            return (
              <tr key={item.id} className="border-b">
                <td className="py-2">{item.name}</td>
                <td className="py-2">123456</td>
                <td className="py-2">{order.gstRate * 100}%</td>
                <td className="text-right py-2">{item.quantity}</td>
                <td className="text-right py-2">₹{item.price.toLocaleString()}</td>
                <td className="text-right py-2">₹{amount.toLocaleString()}</td>
                <td className="text-right py-2">₹{igst.toLocaleString()}</td>
                <td className="text-right py-2">₹{total.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-end mb-8">
        <div className="w-64">
          <div className="flex justify-between py-1">
            <span>Amount</span>
            <span>₹{order.subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>IGST</span>
            <span>₹{order.gstAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-1 border-t font-semibold">
            <span>Total (INR)</span>
            <span>₹{order.total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Terms and Signature */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Terms and Conditions</h3>
          <ol className="text-sm list-decimal list-inside space-y-1">
            <li>Please pay within 15 days from the date of invoice.</li>
            <li>Please quote invoice number when remitting funds.</li>
          </ol>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="w-32 h-16 border-b mb-2"></div>
          <p className="text-sm font-medium">Authorised Signatory</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        For any enquiry, reach out via email at support@freshmart.com or call +91 98765 43210
      </div>
    </div>
  );
} 