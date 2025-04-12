"use client";

import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";

export default function OrderSummaryPage() {
  const order = {
    invoiceNo: "FM/2024/0046",
    date: "09-Feb-2024",
    deliveryDate: "23-Feb-2024",
    storeLocation: "Mumbai",
    billedTo: {
      name: "Amit Kumar Sharma",
      address: "A-101, Sunshine Heights, Andheri West",
      phone: "9876543210",
      gstin: "27AADCB2230M1Z2",
      placeOfSupply: "Maharashtra ( 27 )"
    },
    billedBy: {
      name: "FRESHMART",
      address: "Shop No. 123, Ground Floor,",
      location: "Market City Mall, Kurla West",
      state: "Maharashtra - 400070",
      gstin: "27AALFM8899N1Z3",
      phone1: "+91 22 4444 5555",
      phone2: "+91 22 4444 5556"
    },
    items: [
      {
        srNo: 1,
        name: "Tata Premium Toor Dal",
        hsn: "0713",
        qty: "2 KG",
        rate: 160.00,
        taxableValue: 320.00,
        gstRate: "5.00",
        gstAmount: 16.00,
        total: 336.00
      },
      {
        srNo: 2,
        name: "Aashirvaad Select Atta",
        hsn: "1101",
        qty: "5 KG",
        rate: 315.00,
        taxableValue: 315.00,
        gstRate: "5.00",
        gstAmount: 15.75,
        total: 330.75
      },
      {
        srNo: 3,
        name: "Fortune Sunflower Oil",
        hsn: "1512",
        qty: "2 L",
        rate: 220.00,
        taxableValue: 440.00,
        gstRate: "5.00",
        gstAmount: 22.00,
        total: 462.00
      },
      {
        srNo: 4,
        name: "Amul Pure Ghee",
        hsn: "0405",
        qty: "1 L",
        rate: 585.00,
        taxableValue: 585.00,
        gstRate: "12.00",
        gstAmount: 70.20,
        total: 655.20
      }
    ],
    totals: {
      items: 4,
      taxableAmount: 1660.00,
      totalGST: 123.95,
      totalTax: 123.95,
      grandTotal: 1783.95
    },
    bankDetails: {
      name: "HDFC Bank",
      branch: "Kurla West",
      accountNumber: "50100234567890",
      ifsc: "HDFC0001234",
      upiId: "freshmart@hdfcbank"
    }
  };

  return (
    <div className="container mx-auto py-4 px-2 sm:px-4">
      <Card className="max-w-4xl mx-auto bg-white p-4 sm:p-6 text-black">
        {/* Header */}
        <div className="flex justify-between items-start border-b border-black pb-4">
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-3xl font-bold text-white">F</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">{order.billedBy.name}</h1>
              <p className="text-sm text-black">{order.billedBy.address}</p>
              <p className="text-sm text-black">{order.billedBy.location}</p>
              <p className="text-sm text-black">{order.billedBy.state}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-black">For Order Call</p>
            <p className="text-sm text-black">{order.billedBy.phone1}</p>
            <p className="text-sm text-black">{order.billedBy.phone2}</p>
            <button className="flex items-center gap-1 text-green-600 hover:text-green-800 mt-2">
              <Download size={16} />
              <span className="text-sm">Download</span>
            </button>
          </div>
        </div>

        {/* Daily Offers Banner */}
        <div className="text-center py-2 border-b border-black">
          <p className="text-sm text-black">Daily Offers, Daily Discounts @Freshmart - Free Home Delivery</p>
        </div>

        {/* GSTIN and Tax Invoice Header */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="col-span-1">
            <p className="text-sm text-black"><span className="font-semibold">GSTIN : </span>{order.billedBy.gstin}</p>
          </div>
          <div className="col-span-1 text-center">
            <h2 className="text-xl font-bold text-green-600">TAX INVOICE</h2>
          </div>
          <div className="col-span-1 text-right">
            <p className="text-sm font-semibold text-black">ORIGINAL FOR RECIPIENT</p>
          </div>
        </div>

        {/* Customer and Invoice Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border border-black p-4">
          <div>
            <h3 className="font-semibold mb-2 text-black">Customer Detail</h3>
            <div className="space-y-1">
              <p className="text-sm text-black"><span className="font-semibold">Name: </span>{order.billedTo.name}</p>
              <p className="text-sm text-black"><span className="font-semibold">Address: </span>{order.billedTo.address}</p>
              <p className="text-sm text-black"><span className="font-semibold">PHONE: </span>{order.billedTo.phone}</p>
              <p className="text-sm text-black"><span className="font-semibold">GSTIN: </span>{order.billedTo.gstin}</p>
              <p className="text-sm text-black"><span className="font-semibold">Place of Supply: </span>{order.billedTo.placeOfSupply}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-black"><span className="font-semibold">Invoice No.</span></p>
              <p className="text-sm text-black">{order.invoiceNo}</p>
            </div>
            <div>
              <p className="text-sm text-black"><span className="font-semibold">Invoice Date</span></p>
              <p className="text-sm text-black">{order.date}</p>
            </div>
            <div>
              <p className="text-sm text-black"><span className="font-semibold">Delivery Date</span></p>
              <p className="text-sm text-black">{order.deliveryDate}</p>
            </div>
            <div>
              <p className="text-sm text-black"><span className="font-semibold">Store Location</span></p>
              <p className="text-sm text-black">{order.storeLocation}</p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-black">
            <thead>
              <tr className="bg-white border-b border-black">
                <th className="text-left p-2 text-sm text-black border-r border-black">Sr. No.</th>
                <th className="text-left p-2 text-sm text-black border-r border-black">Name of Product / Service</th>
                <th className="text-left p-2 text-sm text-black border-r border-black">HSN/SAC</th>
                <th className="text-left p-2 text-sm text-black border-r border-black">Qty</th>
                <th className="text-right p-2 text-sm text-black border-r border-black">Rate</th>
                <th className="text-right p-2 text-sm text-black border-r border-black">Taxable Value</th>
                <th className="text-center p-2 text-sm text-black border-r border-black" colSpan={2}>IGST</th>
                <th className="text-right p-2 text-sm text-black">Total</th>
              </tr>
              <tr className="bg-white border-b border-black">
                <th className="border-r border-black"></th>
                <th className="border-r border-black"></th>
                <th className="border-r border-black"></th>
                <th className="border-r border-black"></th>
                <th className="border-r border-black"></th>
                <th className="border-r border-black"></th>
                <th className="text-right p-2 text-sm text-black border-r border-black">%</th>
                <th className="text-right p-2 text-sm text-black border-r border-black">Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.srNo} className="border-b border-black">
                  <td className="p-2 text-sm text-black border-r border-black">{item.srNo}</td>
                  <td className="p-2 text-sm text-black border-r border-black">{item.name}</td>
                  <td className="p-2 text-sm text-black border-r border-black">{item.hsn}</td>
                  <td className="p-2 text-sm text-black border-r border-black">{item.qty}</td>
                  <td className="p-2 text-sm text-black text-right border-r border-black">{item.rate.toFixed(2)}</td>
                  <td className="p-2 text-sm text-black text-right border-r border-black">{item.taxableValue.toFixed(2)}</td>
                  <td className="p-2 text-sm text-black text-right border-r border-black">{item.gstRate}</td>
                  <td className="p-2 text-sm text-black text-right border-r border-black">{item.gstAmount.toFixed(2)}</td>
                  <td className="p-2 text-sm text-black text-right">{item.total.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="border-b border-black font-semibold bg-gray-50">
                <td className="p-2 text-sm text-black border-r border-black">Total</td>
                <td className="p-2 text-sm text-black border-r border-black"></td>
                <td className="p-2 text-sm text-black border-r border-black"></td>
                <td className="p-2 text-sm text-black border-r border-black">{order.totals.items}</td>
                <td className="p-2 text-sm text-black border-r border-black"></td>
                <td className="p-2 text-sm text-black text-right border-r border-black">{order.totals.taxableAmount.toFixed(2)}</td>
                <td className="p-2 text-sm text-black border-r border-black"></td>
                <td className="p-2 text-sm text-black text-right border-r border-black">{order.totals.totalGST.toFixed(2)}</td>
                <td className="p-2 text-sm text-black text-right">{order.totals.grandTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total in Words */}
        <div className="mt-4 border-t border-black pt-4">
          <p className="text-sm text-black"><span className="font-semibold">Total in words: </span>
            ONE THOUSAND SEVEN HUNDRED EIGHTY-THREE RUPEES AND NINETY-FIVE PAISE ONLY
          </p>
        </div>

        {/* Bank Details and QR Code */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 border-t border-black pt-4">
          <div>
            <h3 className="font-semibold mb-2 text-black">Bank Details</h3>
            <div className="space-y-1">
              <p className="text-sm text-black"><span className="font-semibold">Name: </span>{order.bankDetails.name}</p>
              <p className="text-sm text-black"><span className="font-semibold">Branch: </span>{order.bankDetails.branch}</p>
              <p className="text-sm text-black"><span className="font-semibold">Acc. Number: </span>{order.bankDetails.accountNumber}</p>
              <p className="text-sm text-black"><span className="font-semibold">IFSC: </span>{order.bankDetails.ifsc}</p>
              <p className="text-sm text-black"><span className="font-semibold">UPI ID: </span>{order.bankDetails.upiId}</p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <div className="text-center mb-4">
              <p className="text-sm font-semibold text-black">Pay using UPI</p>
              <div className="w-24 h-24 border border-black mt-2"></div>
            </div>
            <div className="text-right">
              <div className="w-32 h-12 border-b border-black mb-2"></div>
              <p className="font-semibold text-sm text-black">Authorised Signatory</p>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-4 border-t border-black pt-4">
          <h3 className="font-semibold mb-2 text-black">Terms and Conditions</h3>
          <ol className="list-decimal list-inside text-sm space-y-1 text-black">
            <li>Subject to Maharashtra Jurisdiction.</li>
            <li>Our Responsibility Ceases as soon as goods leaves our Premises.</li>
            <li>Goods once sold will not be taken back.</li>
            <li>Delivery Ex-Premises.</li>
          </ol>
        </div>

        {/* E & O.E. */}
        <div className="text-right mt-4">
          <p className="text-sm text-black">(E & O.E.)</p>
        </div>
      </Card>
    </div>
  );
} 